import state from './state.js';
import { CUT_PENALTY, NAME_ALIASES, MASTERS_LOCK } from './constants.js';
import { normName } from './utils.js';

export function fetchESPN() {
  // Don't hit ESPN before the tournament — just return pre status
  if (new Date() < MASTERS_LOCK) {
    return Promise.resolve({ status: "pre", scores: {}, leader: null });
  }
  // 2026 Masters Tournament — hardcoded event ID, no search needed
  var EVENT_ID = "401811941";
  var LEADERBOARD_URL = "https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=" + EVENT_ID;
  var SCOREBOARD_URL  = "https://site.web.api.espn.com/apis/personalized/v2/scoreboard/header?sport=golf&league=pga&region=us&lang=en&contentorigin=espn";
  return fetch(LEADERBOARD_URL)
    .then(function(r) {
      if (!r.ok) {
        console.warn("[ESPN] leaderboard URL failed (" + r.status + "), falling back to scoreboard header");
        return fetch(SCOREBOARD_URL).then(function(r2) { if (!r2.ok) throw new Error("ESPN fallback " + r2.status); return r2.json(); });
      }
      return r.json();
    })
    .then(function(data) {
      // Full leaderboard format: { events: [{ competitions: [{ competitors: [...] }] }] }
      // Scoreboard header format: { sports: [{ leagues: [{ events: [{ competitors: [...] }] }] }] }
      var ev = null, competitors = [], isFlat = false;
      if (data.events && data.events.length > 0) {
        ev = data.events[0];
        competitors = (ev.competitions && ev.competitions[0] && ev.competitions[0].competitors) || [];
      } else if (data.sports) {
        var league = data.sports[0] && data.sports[0].leagues && data.sports[0].leagues[0];
        ev = league && league.events && league.events[0];
        competitors = (ev && ev.competitors) || [];
        isFlat = true;
      }
      if (!ev) return { status: "notfound", scores: {}, leader: null };
      console.log("[ESPN] event:", ev.name, "| competitors:", competitors.length, "| flat:", isFlat);

      // Detect tournament status — handle both formats
      var rawStatus = (ev.status && ev.status.type && ev.status.type.name)
                   || (ev.fullStatus && ev.fullStatus.type && ev.fullStatus.type.name)
                   || "";
      var status = "pre";
      if (ev.status === "in" || rawStatus === "STATUS_IN_PROGRESS" || rawStatus.indexOf("PROGRESS") !== -1) status = "in";
      else if (ev.status === "post" || rawStatus === "STATUS_FINAL" || rawStatus === "STATUS_COMPLETE" || rawStatus.indexOf("FINAL") !== -1 || rawStatus.indexOf("COMPLETE") !== -1) status = "post";

      var scores = {}, leader = null;
      competitors.forEach(function(c) {
        // Flat format (scoreboard): c.displayName, c.score (string), c.place (number), c.status.name
        // Nested format (leaderboard): c.athlete.displayName, c.score.displayValue, c.status.type.name, c.status.position.displayName
        var name = c.displayName || (c.athlete && c.athlete.displayName) || "";
        // ESPN sets c.score.displayValue to "E" for all in-progress players in the full leaderboard format.
        // The real to-par score lives in c.statistics[].name === "scoreToPar".
        var stats = c.statistics || [];
        var scoreToParStat = null;
        for (var si = 0; si < stats.length; si++) { if (stats[si].name === "scoreToPar") { scoreToParStat = stats[si]; break; } }
        var score = scoreToParStat
          ? scoreToParStat.displayValue
          : (typeof c.score === "string" ? c.score : (c.score && c.score.displayValue)) || "E";
        var cStatusName = (c.status && c.status.name) || (c.status && c.status.type && c.status.type.name) || "";
        var posStr = (c.status && c.status.position && c.status.position.displayName) || "--";
        var isCut = cStatusName.indexOf("CUT") !== -1 || cStatusName.indexOf("WD") !== -1 || cStatusName.indexOf("DQ") !== -1 || posStr === "CUT" || score === "CUT";
        // Use displayThru (just the number) when available to avoid stripping "Thru " from displayValue.
        var thru = "--";
        if (c.status) {
          if (c.status.displayThru != null) thru = String(c.status.displayThru);
          else if (c.status.displayValue) {
            var dv = c.status.displayValue.replace(/^Thru\s+/i, "");
            // If it looks like an ISO timestamp (tee time for players not yet on course), format as local time
            if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(dv)) {
              var d = new Date(dv);
              thru = isNaN(d) ? dv : d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
            } else {
              thru = dv;
            }
          }
        }
        var ls = c.linescores || [], rounds = ["--", "--", "--", "--"];
        for (var r = 0; r < Math.min(ls.length, 4); r++) rounds[r] = (ls[r].displayValue || ls[r].value || "--").toString();
        var posNum = 999;
        if (!isCut) {
          if (typeof c.place === "number") {
            posNum = c.place;
          } else if (posStr !== "--" && posStr !== "CUT") {
            var n = parseInt(posStr.replace(/[^0-9]/g, ""));
            if (!isNaN(n)) posNum = n;
          }
        }
        if (isCut) posNum = CUT_PENALTY;
        var displayPos = isCut ? "CUT" : (posStr !== "--" ? posStr : (typeof c.place === "number" ? (c.place === 1 ? "1" : "T" + c.place) : "--"));
        var entry = { pos: displayPos, score: score, status: isCut ? "cut" : "active", posNum: posNum, rawName: name, thru: thru, r1: rounds[0], r2: rounds[1], r3: rounds[2], r4: rounds[3] };
        scores[normName(name)] = entry;
        if (!isCut && (!leader || posNum < leader.posNum)) leader = entry;
      });
      return { status: status, scores: scores, leader: leader, eventName: ev.name };
    });
}

export function lookupScore(name) {
  if (!state.espnScores) return null;
  var norm = normName(name);
  if (state.espnScores[norm]) return state.espnScores[norm];
  var aliases = NAME_ALIASES[norm];
  if (aliases) {
    for (var i = 0; i < aliases.length; i++) {
      if (state.espnScores[normName(aliases[i])]) return state.espnScores[normName(aliases[i])];
    }
  }
  for (var k in state.espnScores) {
    if (k.indexOf(norm) !== -1 || norm.indexOf(k) !== -1) return state.espnScores[k];
  }
  console.warn("[ESPN] no score found for:", name, "(normalized:", norm + ")");
  return null;
}
