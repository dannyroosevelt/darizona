import './style.css';
import state from './state.js';
import { supabase, getPool, getPoolPlayers, getMyPicks, getMyPropPicks, getAllPicks, getAllPropPicks, getPropResults } from './supabase.js';
import { getParam, show } from './utils.js';
import { showAuth, initAuth } from './pages/auth.js';
import { addGolfer, removeGolfer, refreshPot, createPool } from './pages/create.js';
import { showJoin, renderJoinPage, joinPoolFlow } from './pages/join.js';
import { startPicking, startPropPicking, submitPicks, renderPickPage, renderTiers, toggleTier, togglePick } from './pages/picks.js';
import { showPropPicks, submitPropPicks, setPropPick } from './pages/propPicks.js';
import { showLeaderboard, loadLeaderboard } from './pages/leaderboard.js';
import { showSummary, copyLink, exportCSV } from './pages/summary.js';
import { showFun, showFunSection, showResultsEntry, saveResults, setResult } from './pages/fun.js';

// ── STATIC BUTTON LISTENERS ───────────────────────────────────────────────────

document.getElementById('submit-picks-btn').addEventListener('click', submitPicks);
document.getElementById('submit-prop-picks-btn').addEventListener('click', submitPropPicks);
document.getElementById('create-btn').addEventListener('click', createPool);
document.getElementById('export-btn').addEventListener('click', exportCSV);
document.getElementById('pick-back-btn').addEventListener('click', showJoin);
document.getElementById('prop-picks-back-btn').addEventListener('click', showJoin);
document.getElementById('copy-link-btn').addEventListener('click', function() { copyLink(this); });
document.getElementById('enter-results-btn').addEventListener('click', showResultsEntry);
document.getElementById('save-results-btn').addEventListener('click', saveResults);
document.getElementById('join-btn').addEventListener('click', joinPoolFlow);
document.getElementById('add-golfer-btn').addEventListener('click', addGolfer);

// Input / form listeners
document.getElementById('in-join-name').addEventListener('keydown', function(e) { if (e.key === 'Enter') joinPoolFlow(); });
document.getElementById('in-golfer-name').addEventListener('keydown', function(e) { if (e.key === 'Enter') addGolfer(); });
document.getElementById('in-buyin').addEventListener('input', refreshPot);
document.getElementById('in-prop-buyin').addEventListener('input', refreshPot);
document.getElementById('pick-search').addEventListener('input', renderTiers);

// ── NAV TAB DELEGATION ────────────────────────────────────────────────────────

document.addEventListener('click', function(e) {
  var tab = e.target.closest('[data-nav]');
  if (!tab) return;
  var navMap = { join: showJoin, leaderboard: showLeaderboard, summary: showSummary, fun: showFun };
  if (navMap[tab.dataset.nav]) navMap[tab.dataset.nav]();
});

// ── DYNAMIC CONTENT DELEGATION ────────────────────────────────────────────────

document.getElementById('name-list').addEventListener('click', function(e) {
  var btn = e.target.closest('[data-action]');
  if (!btn) return;
  if (btn.dataset.action === 'startPicking') startPicking();
  if (btn.dataset.action === 'startPropPicking') startPropPicking();
});

document.getElementById('golfer-tags').addEventListener('click', function(e) {
  var btn = e.target.closest('[data-action="removeGolfer"]');
  if (btn) removeGolfer(+btn.dataset.index);
});

document.getElementById('tier-list').addEventListener('click', function(e) {
  var btn = e.target.closest('[data-action]');
  if (!btn) return;
  if (btn.dataset.action === 'togglePick') togglePick(+btn.dataset.tier, btn.dataset.name);
  if (btn.dataset.action === 'toggleTier') toggleTier(+btn.dataset.tier);
});

document.getElementById('prop-pick-list').addEventListener('click', function(e) {
  var btn = e.target.closest('[data-action="setPropPick"]');
  if (btn) setPropPick(btn.dataset.propId, btn.dataset.val);
});

document.getElementById('results-form').addEventListener('click', function(e) {
  var btn = e.target.closest('[data-action="setResult"]');
  if (btn) setResult(btn.dataset.propId, btn.dataset.val);
});

document.getElementById('fsn-props').addEventListener('click', function() { showFunSection('props'); });
document.getElementById('fsn-rules').addEventListener('click', function() { showFunSection('rules'); });

// ── BOOT ─────────────────────────────────────────────────────────────────────

initAuth();

function restoreLastPage() {
  const lastPage = localStorage.getItem("last_page");
  const allowed = new Set(["pg-join", "pg-leaderboard", "pg-summary", "pg-fun", "pg-pick", "pg-prop-picks"]);
  if (!allowed.has(lastPage)) {
    renderJoinPage();
    show('pg-join');
    return;
  }
  if (lastPage === "pg-leaderboard") return showLeaderboard();
  if (lastPage === "pg-summary") return showSummary();
  if (lastPage === "pg-fun") return showFun();
  if (lastPage === "pg-pick") { renderPickPage(); return show('pg-pick'); }
  if (lastPage === "pg-prop-picks") return showPropPicks();
  renderJoinPage();
  show('pg-join');
}

async function loadPool(poolId) {
  // Run sequentially to avoid concurrent auth refresh lock contention.
  const rows = await getMyPicks(poolId);
  const propRows = await getMyPropPicks(poolId);
  const allPickRows = await getAllPicks(poolId);
  const allPropRows = await getAllPropPicks(poolId);
  const resultRows = await getPropResults(poolId);

  state.myPicks = {};
  state.myPicksSubmitted = rows.length === 6 && rows.every(r => r.submitted);
  rows.forEach(r => { state.myPicks[r.tier] = r.golfer_name; });

  state.myPropPicks = {};
  state.myPropPicksSubmitted = propRows.length > 0 && propRows.every(r => r.submitted);
  propRows.forEach(r => { state.myPropPicks[r.prop_id] = r.value; });

  state.allPicks = {};
  allPickRows.forEach(r => {
    if (!state.allPicks[r.user_id]) state.allPicks[r.user_id] = {};
    state.allPicks[r.user_id][r.tier] = r.golfer_name;
  });

  state.allPropPicks = {};
  allPropRows.forEach(r => {
    if (!state.allPropPicks[r.user_id]) state.allPropPicks[r.user_id] = {};
    state.allPropPicks[r.user_id][r.prop_id] = r.value;
  });

  state.propResults = {};
  resultRows.forEach(r => { state.propResults[r.prop_id] = r.value; });
}

let initInFlight = null;
let initRetryCount = 0;
const MAX_INIT_RETRIES = 5;
const INIT_RETRY_BASE_MS = 200;
const SESSION_TIMEOUT_MS = 3000;

function isAuthLockError(err) {
  const msg = (err && (err.message || err.error || err)) + '';
  return msg.includes('NavigatorLockAcquireTimeoutError') || msg.includes('auth-token') || msg.includes('lock:sb-') || msg.includes('auth-timeout');
}

function withTimeout(promise, ms, label) {
  let t;
  const timeout = new Promise((_, reject) => {
    t = setTimeout(() => reject(new Error(label + '-timeout')), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(t));
}

async function init(sessionOverride) {
  if (initInFlight) return initInFlight;
  initInFlight = (async () => {
    try {
      const session = sessionOverride
        ?? (await withTimeout(supabase.auth.getSession(), SESSION_TIMEOUT_MS, 'auth')).data.session;

      if (!session) {
        showAuth();
        return;
      }

      state.userId = session.user.id;
      state.userEmail = session.user.email;

      const urlPool = getParam('pool');
      if (urlPool) {
        localStorage.setItem('last_pool_token', urlPool);
      }
      const shareToken = urlPool || localStorage.getItem('last_pool_token');
      if (!urlPool && shareToken) {
        const u = new URL(window.location.href);
        u.searchParams.set("pool", shareToken);
        window.history.replaceState({}, "", u.toString());
      }

      if (shareToken) {
        state.shareToken = shareToken;
        const pool = await getPool(shareToken);
        state.poolId = pool.id;
        state.poolData = pool;

        const players = await getPoolPlayers(pool.id);
        state.players = players;
        const me = players.find(p => p.user_id === state.userId);

        if (me) {
          state.displayName = me.display_name;
          await loadPool(pool.id);
          restoreLastPage();
        } else {
          // Signed in but not yet in this pool — show join form
          show('pg-pool-join');
        }
      } else {
        show('pg-create');
      }
      initRetryCount = 0;
    } catch(e) {
      console.error('init() failed:', e);
      if (isAuthLockError(e) && initRetryCount < MAX_INIT_RETRIES) {
        initRetryCount += 1;
        const delay = INIT_RETRY_BASE_MS * initRetryCount;
        setTimeout(() => init(sessionOverride), delay);
        return;
      }
      show('pg-auth');
    }
  })();

  try {
    await initInFlight;
  } finally {
    initInFlight = null;
  }
}

// Handle auth state changes (magic link callback + initial session).
const authGlobal = typeof window !== 'undefined' ? window : globalThis;
if (authGlobal.__darizonaAuthUnsub) authGlobal.__darizonaAuthUnsub();
const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
    // Defer init to avoid calling Supabase methods inside the auth callback lock.
    setTimeout(() => { init(session); }, 0);
  }
});
authGlobal.__darizonaAuthUnsub = () => subscription.unsubscribe();

// Fallback if INITIAL_SESSION doesn't fire (e.g., tab restore quirks).
setTimeout(() => { init(); }, 800);
