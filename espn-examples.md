# examples of espn api requests

## 1
### request
https://site.web.api.espn.com/apis/site/v2/content/14274856/categories?lang=en&limit=50

### response
{
    "count": 30,
    "pageIndex": 1,
    "pageSize": 50,
    "pageCount": 1,
    "items": [
        {
            "id": "9572",
            "name": "NFL",
            "description": "NFL",
            "categoryKey": "Sport~28~28",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/28?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "9577",
            "name": "NBA",
            "description": "NBA",
            "categoryKey": "Sport~46~46",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/46?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "9580",
            "name": "NHL",
            "description": "NHL",
            "categoryKey": "Sport~90~90",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/90?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "80311",
            "name": "MLB",
            "description": "MLB",
            "categoryKey": "Sport~10~10",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/10?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "9576",
            "name": "NCAA Men's Basketball",
            "description": "NCAA Men's Basketball",
            "categoryKey": "Sport~41~41",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/41?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "9578",
            "name": "NCAA Women's Basketball",
            "description": "NCAA Women's Basketball",
            "categoryKey": "Sport~54~54",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/54?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "9579",
            "name": "WNBA",
            "description": "WNBA",
            "categoryKey": "Sport~59~59",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/59?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "81497",
            "name": "Soccer",
            "description": "Soccer",
            "categoryKey": "Sport~600~600",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/600?lang=en&region=us"
            },
            "type": "sport"
        },
        {
            "id": "9571",
            "name": "NCAA Football",
            "description": "NCAA Football",
            "categoryKey": "Sport~23~23",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/23?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "154818",
            "name": "PGA TOUR",
            "description": "PGA TOUR",
            "categoryKey": "Sport~1106~1106",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/1106?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "33273",
            "name": "LPGA",
            "description": "LPGA",
            "categoryKey": "Sport~1107~1107",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/1107?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "535988",
            "name": "LIV Golf Invitational Series",
            "description": "LIV Golf Invitational Series",
            "categoryKey": "Sport~1109~1109",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/1109?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "9582",
            "name": "Golf",
            "description": "Golf",
            "categoryKey": "Sport~1100~1100",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/1100?lang=en&region=us"
            },
            "type": "sport"
        },
        {
            "id": "9581",
            "name": "Tennis",
            "description": "Tennis",
            "categoryKey": "Sport~850~850",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/850?lang=en&region=us"
            },
            "type": "sport"
        },
        {
            "id": "48650",
            "name": "NCAA Baseball",
            "description": "NCAA Baseball",
            "categoryKey": "Sport~14~14",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/14?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "48676",
            "name": "NCAA Softball",
            "description": "NCAA Softball",
            "categoryKey": "Sport~102~102",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/102?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "153965",
            "name": "WWE",
            "description": "WWE",
            "categoryKey": "Sport~1652~1652",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/1652?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "611584",
            "name": "Sports Betting",
            "description": "Sports Betting",
            "categoryKey": "Sport~22000~22000",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/22000?lang=en&region=us"
            },
            "type": "sport"
        },
        {
            "id": "11208",
            "name": "Boxing",
            "description": "Boxing",
            "categoryKey": "Sport~1000~1000",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/1000?lang=en&region=us"
            },
            "type": "sport"
        },
        {
            "id": "32201",
            "name": "MMA",
            "description": "MMA",
            "categoryKey": "Sport~3301~3301",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/3301?lang=en&region=us"
            },
            "type": "sport"
        },
        {
            "id": "648933",
            "name": "UFL",
            "description": "UFL",
            "categoryKey": "Sport~37~37",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/37?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "53304",
            "name": "Formula 1",
            "description": "Formula One",
            "categoryKey": "Sport~2030~2030",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/2030?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "11032",
            "name": "Motor Sports",
            "description": "Motor Sports",
            "categoryKey": "Sport~2000~2000",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/2000?lang=en&region=us"
            },
            "type": "sport"
        },
        {
            "id": "533502",
            "name": "Premier Lacrosse League",
            "description": "Premier Lacrosse League",
            "categoryKey": "Sport~20813~20813",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/20813?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "688188",
            "name": "National Lacrosse League",
            "description": "National Lacrosse League",
            "categoryKey": "Sport~501~501",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/501?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "48679",
            "name": "NCAA Men's Lacrosse",
            "description": "NCAA Men's Lacrosse",
            "categoryKey": "Sport~502~502",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/502?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "48680",
            "name": "NCAA Women's Lacrosse",
            "description": "NCAA Women's Lacrosse",
            "categoryKey": "Sport~503~503",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/503?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "189160",
            "name": "NBA G League",
            "description": "NBA G League",
            "categoryKey": "Sport~69~69",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/69?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "704257",
            "name": "TGL",
            "description": "TGL",
            "categoryKey": "Sport~1111~1111",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/1111?lang=en&region=us"
            },
            "type": "league"
        },
        {
            "id": "47714",
            "name": "Olympics",
            "description": "Olympics",
            "categoryKey": "Sport~3700~3700",
            "recreation": {
                "$ref": "http://sports.core.api.espn.pvt/v2/content/recreation/3700?lang=en&region=us"
            },
            "type": "sport"
        }
    ]
}

## 2
### request
https://site.web.api.espn.com/apis/personalized/v2/scoreboard/header?sport=golf&league=pga&region=us&lang=en&contentorigin=espn&configuration=STREAM_MENU&platform=web&features=sfb-all%2Ccutl&buyWindow=1m&showAirings=buy%2Clive%2Creplay&showZipLookup=true&tz=America%2FNew_York&postalCode=95131&playabilitySource=playbackId


### response
{
    "sports": [
        {
            "id": "1100",
            "uid": "s:1100",
            "guid": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
            "name": "Golf",
            "slug": "golf",
            "logos": [
                {
                    "href": "https://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-golf.png",
                    "alt": "",
                    "rel": [
                        "full",
                        "default"
                    ],
                    "width": 500,
                    "height": 500
                },
                {
                    "href": "https://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-golf.png",
                    "alt": "",
                    "rel": [
                        "full",
                        "dark"
                    ],
                    "width": 500,
                    "height": 500
                }
            ],
            "leagues": [
                {
                    "id": "1106",
                    "uid": "s:1100~l:1106",
                    "name": "PGA TOUR",
                    "abbreviation": "PGA",
                    "shortName": "PGA TOUR",
                    "slug": "pga",
                    "tag": "pga",
                    "isTournament": false,
                    "smartdates": [
                        "2026-04-05T07:00Z",
                        "2026-04-09T07:00Z",
                        "2026-04-10T07:00Z"
                    ],
                    "events": [
                        {
                            "id": "401811941",
                            "uid": "s:1100~l:1106~e:401811941~c:401811941",
                            "guid": "8c0e8245-22ab-34bd-9515-5aed0b8e12c2",
                            "date": "2026-04-09T04:00:00Z",
                            "endDate": "2026-04-12T04:00:00Z",
                            "timeValid": false,
                            "recent": true,
                            "name": "Masters Tournament",
                            "shortName": "Masters Tournament",
                            "links": [
                                {
                                    "rel": [
                                        "live",
                                        "desktop",
                                        "event"
                                    ],
                                    "href": "https://www.espn.com/golf/leaderboard?tournamentId=401811941",
                                    "text": "Full Scorecard"
                                },
                                {
                                    "language": "en",
                                    "rel": [
                                        "desktop",
                                        "watchespn",
                                        "event"
                                    ],
                                    "href": "http://www.espn.com/watch/player/_/id/401811941",
                                    "text": "WatchESPN",
                                    "isExternal": false,
                                    "isPremium": false
                                }
                            ],
                            "gamecastAvailable": false,
                            "playByPlayAvailable": false,
                            "commentaryAvailable": false,
                            "wallclockAvailable": false,
                            "fauxcastAvailable": false,
                            "onWatch": true,
                            "competitionId": "401811941",
                            "location": "Augusta National Golf Club - Augusta, GA",
                            "season": 2026,
                            "seasonStartDate": "2026-01-08T05:00:00Z",
                            "seasonEndDate": "2026-12-06T05:00:00Z",
                            "seasonType": "2",
                            "seasonTypeHasGroups": false,
                            "primary": true,
                            "scoringSystem": "Medal",
                            "group": {
                                "groupId": "2",
                                "name": "Regular Season",
                                "abbreviation": "reg",
                                "shortName": "reg"
                            },
                            "link": "https://www.espn.com/golf/leaderboard?tournamentId=401811941",
                            "status": "in",
                            "summary": "Round 1 - In Progress",
                            "period": 1,
                            "defendingChampion": "Rory McIlroy",
                            "defendingChampionFlag": "https://a.espncdn.com/i/teamlogos/countries/500/nir.png",
                            "broadcasts": [
                                {
                                    "typeId": 1,
                                    "type": "TV",
                                    "isNational": true,
                                    "broadcasterId": 44,
                                    "broadcastId": 44,
                                    "name": "CBS",
                                    "shortName": "CBS",
                                    "callLetters": "CBS",
                                    "station": "CBS",
                                    "lang": "en",
                                    "region": "us",
                                    "slug": "cbs"
                                },
                                {
                                    "typeId": 1,
                                    "type": "TV",
                                    "isNational": true,
                                    "broadcasterId": 126,
                                    "broadcastId": 126,
                                    "name": "ESPN",
                                    "shortName": "ESPN",
                                    "callLetters": "ESPN",
                                    "station": "ESPN",
                                    "lang": "en",
                                    "region": "us",
                                    "slug": "espn"
                                },
                                {
                                    "typeId": 1,
                                    "type": "TV",
                                    "isNational": true,
                                    "broadcasterId": 755,
                                    "broadcastId": 755,
                                    "name": "ESPN+",
                                    "shortName": "ESPN+",
                                    "callLetters": "ESPN+",
                                    "station": "ESPN+",
                                    "lang": "en",
                                    "region": "us",
                                    "slug": "espnplus"
                                },
                                {
                                    "typeId": 1,
                                    "type": "TV",
                                    "isNational": true,
                                    "broadcasterId": 763,
                                    "broadcastId": 763,
                                    "name": "Prime Video",
                                    "shortName": "Prime Video",
                                    "callLetters": "Prime Video",
                                    "station": "Prime Video",
                                    "lang": "en",
                                    "region": "us",
                                    "slug": "prime-video"
                                },
                                {
                                    "typeId": 1,
                                    "type": "TV",
                                    "isNational": true,
                                    "broadcasterId": 792,
                                    "broadcastId": 792,
                                    "name": "Paramount+",
                                    "shortName": "Paramount+",
                                    "callLetters": "Paramount+",
                                    "station": "Paramount+",
                                    "lang": "en",
                                    "region": "us",
                                    "slug": "paramountplus"
                                }
                            ],
                            "broadcast": "CBS/ESPN/ESPN+/Prime Video/Paramount+",
                            "fullStatus": {
                                "period": 1,
                                "displayPeriod": "1st",
                                "type": {
                                    "id": "2",
                                    "name": "STATUS_IN_PROGRESS",
                                    "state": "in",
                                    "completed": false,
                                    "description": "In Progress",
                                    "detail": "Round 1 - In Progress",
                                    "shortDetail": "Round 1 - In Progress"
                                },
                                "hadPlayoff": false
                            },
                            "competitors": [
                                {
                                    "id": "9938",
                                    "uid": "s:1100~a:9938",
                                    "type": "athlete",
                                    "order": 1,
                                    "winner": false,
                                    "displayName": "Sam Burns",
                                    "name": "S. Burns",
                                    "abbreviation": "S. Burns",
                                    "score": "-4",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 14",
                                        "period": 1,
                                        "teeTime": "2026-04-09T13:19Z",
                                        "hole": 14,
                                        "startHole": 1,
                                        "thru": 14,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-4(14)",
                                        "todayDetail": "-4(14)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Sam",
                                    "lastName": "Burns",
                                    "middleName": "",
                                    "shortName": "S. Burns",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/9938.png",
                                    "place": 1,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "5579",
                                    "uid": "s:1100~a:5579",
                                    "type": "athlete",
                                    "order": 2,
                                    "winner": false,
                                    "displayName": "Patrick Reed",
                                    "name": "P. Reed",
                                    "abbreviation": "P. Reed",
                                    "score": "-4",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 12",
                                        "period": 1,
                                        "teeTime": "2026-04-09T13:55Z",
                                        "hole": 12,
                                        "startHole": 1,
                                        "thru": 12,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-4(12)",
                                        "todayDetail": "-4(12)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Patrick",
                                    "lastName": "Reed",
                                    "middleName": "",
                                    "shortName": "P. Reed",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/5579.png",
                                    "place": 1,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "4587",
                                    "uid": "s:1100~a:4587",
                                    "type": "athlete",
                                    "order": 3,
                                    "winner": false,
                                    "displayName": "Shane Lowry",
                                    "name": "S. Lowry",
                                    "abbreviation": "S. Lowry",
                                    "score": "-3",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 14",
                                        "period": 1,
                                        "teeTime": "2026-04-09T13:43Z",
                                        "hole": 14,
                                        "startHole": 1,
                                        "thru": 14,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-3(14)",
                                        "todayDetail": "-3(14)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/irl.png",
                                    "firstName": "Shane",
                                    "lastName": "Lowry",
                                    "middleName": "",
                                    "shortName": "S. Lowry",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/4587.png",
                                    "place": 3,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "10906",
                                    "uid": "s:1100~a:10906",
                                    "type": "athlete",
                                    "order": 4,
                                    "winner": false,
                                    "displayName": "Aaron Rai",
                                    "name": "A. Rai",
                                    "abbreviation": "A. Rai",
                                    "score": "-3",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 4",
                                        "period": 1,
                                        "teeTime": "2026-04-09T16:27Z",
                                        "hole": 4,
                                        "startHole": 1,
                                        "thru": 4,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-3(4)",
                                        "todayDetail": "-3(4)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/eng.png",
                                    "firstName": "Aaron",
                                    "lastName": "Rai",
                                    "middleName": "",
                                    "shortName": "A. Rai",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/10906.png",
                                    "place": 3,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "10364",
                                    "uid": "s:1100~a:10364",
                                    "type": "athlete",
                                    "order": 5,
                                    "winner": false,
                                    "displayName": "Kurt Kitayama",
                                    "name": "K. Kitayama",
                                    "abbreviation": "K. Kitayama",
                                    "score": "-2",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 16",
                                        "period": 1,
                                        "teeTime": "2026-04-09T12:50Z",
                                        "hole": 16,
                                        "startHole": 1,
                                        "thru": 16,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-2(16)",
                                        "todayDetail": "-2(16)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Kurt",
                                    "lastName": "Kitayama",
                                    "middleName": "Shun",
                                    "shortName": "K. Kitayama",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/10364.png",
                                    "place": 5,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "3792",
                                    "uid": "s:1100~a:3792",
                                    "type": "athlete",
                                    "order": 6,
                                    "winner": false,
                                    "displayName": "Nick Taylor",
                                    "name": "N. Taylor",
                                    "abbreviation": "N. Taylor",
                                    "score": "-2",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 14",
                                        "period": 1,
                                        "teeTime": "2026-04-09T13:31Z",
                                        "hole": 14,
                                        "startHole": 1,
                                        "thru": 14,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-2(14)",
                                        "todayDetail": "-2(14)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/can.png",
                                    "firstName": "Nick",
                                    "lastName": "Taylor",
                                    "middleName": "",
                                    "shortName": "N. Taylor",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/3792.png",
                                    "place": 5,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "1680",
                                    "uid": "s:1100~a:1680",
                                    "type": "athlete",
                                    "order": 7,
                                    "winner": false,
                                    "displayName": "Jason Day",
                                    "name": "J. Day",
                                    "abbreviation": "J. Day",
                                    "score": "-2",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 14",
                                        "period": 1,
                                        "teeTime": "2026-04-09T13:43Z",
                                        "hole": 14,
                                        "startHole": 1,
                                        "thru": 14,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-2(14)",
                                        "todayDetail": "-2(14)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/aus.png",
                                    "firstName": "Jason",
                                    "lastName": "Day",
                                    "middleName": "",
                                    "shortName": "J. Day",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/1680.png",
                                    "place": 5,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "5539",
                                    "uid": "s:1100~a:5539",
                                    "type": "athlete",
                                    "order": 8,
                                    "winner": false,
                                    "displayName": "Tommy Fleetwood",
                                    "name": "T. Fleetwood",
                                    "abbreviation": "T. Fleetwood",
                                    "score": "-2",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 12",
                                        "period": 1,
                                        "teeTime": "2026-04-09T13:55Z",
                                        "hole": 12,
                                        "startHole": 1,
                                        "thru": 12,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-2(12)",
                                        "todayDetail": "-2(12)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/eng.png",
                                    "firstName": "Tommy",
                                    "lastName": "Fleetwood",
                                    "middleName": "",
                                    "shortName": "T. Fleetwood",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/5539.png",
                                    "place": 5,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "10140",
                                    "uid": "s:1100~a:10140",
                                    "type": "athlete",
                                    "order": 9,
                                    "winner": false,
                                    "displayName": "Xander Schauffele",
                                    "name": "X. Schauffele",
                                    "abbreviation": "X. Schauffele",
                                    "score": "-2",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 12",
                                        "period": 1,
                                        "teeTime": "2026-04-09T14:07Z",
                                        "hole": 12,
                                        "startHole": 1,
                                        "thru": 12,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-2(12)",
                                        "todayDetail": "-2(12)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Xander",
                                    "lastName": "Schauffele",
                                    "middleName": "",
                                    "shortName": "X. Schauffele",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/10140.png",
                                    "place": 5,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "3470",
                                    "uid": "s:1100~a:3470",
                                    "type": "athlete",
                                    "order": 10,
                                    "winner": false,
                                    "displayName": "Rory McIlroy",
                                    "name": "R. McIlroy",
                                    "abbreviation": "R. McIlroy",
                                    "score": "-2",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 10",
                                        "period": 1,
                                        "teeTime": "2026-04-09T14:31Z",
                                        "hole": 10,
                                        "startHole": 1,
                                        "thru": 10,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-2(10)",
                                        "todayDetail": "-2(10)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/nir.png",
                                    "firstName": "Rory",
                                    "lastName": "McIlroy",
                                    "middleName": "",
                                    "shortName": "R. McIlroy",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/3470.png",
                                    "place": 5,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "91",
                                    "uid": "s:1100~a:91",
                                    "type": "athlete",
                                    "order": 11,
                                    "winner": false,
                                    "displayName": "Fred Couples",
                                    "name": "F. Couples",
                                    "abbreviation": "F. Couples",
                                    "score": "-2",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 5",
                                        "period": 1,
                                        "teeTime": "2026-04-09T16:15Z",
                                        "hole": 5,
                                        "startHole": 1,
                                        "thru": 5,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-2(5)",
                                        "todayDetail": "-2(5)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Fred",
                                    "lastName": "Couples",
                                    "middleName": "",
                                    "shortName": "F. Couples",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/91.png",
                                    "place": 5,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "9221",
                                    "uid": "s:1100~a:9221",
                                    "type": "athlete",
                                    "order": 12,
                                    "winner": false,
                                    "displayName": "Haotong Li",
                                    "name": "H. Li",
                                    "abbreviation": "H. Li",
                                    "score": "-1",
                                    "status": {
                                        "id": "2",
                                        "displayValue": "F",
                                        "period": 1,
                                        "teeTime": "2026-04-09T11:40Z",
                                        "hole": 18,
                                        "startHole": 1,
                                        "thru": 18,
                                        "playoff": false,
                                        "state": "post",
                                        "name": "STATUS_FINISH",
                                        "detail": "-1(F)",
                                        "todayDetail": "-1(F)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/chn.png",
                                    "firstName": "Haotong",
                                    "lastName": "Li",
                                    "middleName": "",
                                    "shortName": "H. Li",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/9221.png",
                                    "place": 12,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "4419142",
                                    "uid": "s:1100~a:4419142",
                                    "type": "athlete",
                                    "order": 13,
                                    "winner": false,
                                    "displayName": "Akshay Bhatia",
                                    "name": "A. Bhatia",
                                    "abbreviation": "A. Bhatia",
                                    "score": "-1",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 12",
                                        "period": 1,
                                        "teeTime": "2026-04-09T13:55Z",
                                        "hole": 12,
                                        "startHole": 1,
                                        "thru": 12,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-1(12)",
                                        "todayDetail": "-1(12)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Akshay",
                                    "lastName": "Bhatia",
                                    "middleName": "Sunil",
                                    "shortName": "A. Bhatia",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/4419142.png",
                                    "place": 12,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "9525",
                                    "uid": "s:1100~a:9525",
                                    "type": "athlete",
                                    "order": 14,
                                    "winner": false,
                                    "displayName": "Brian Campbell",
                                    "name": "B. Campbell",
                                    "abbreviation": "B. Campbell",
                                    "score": "-1",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 8",
                                        "period": 1,
                                        "teeTime": "2026-04-09T15:15Z",
                                        "hole": 8,
                                        "startHole": 1,
                                        "thru": 8,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-1(8)",
                                        "todayDetail": "-1(8)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Brian",
                                    "lastName": "Campbell",
                                    "middleName": "",
                                    "shortName": "B. Campbell",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/9525.png",
                                    "place": 12,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "158",
                                    "uid": "s:1100~a:158",
                                    "type": "athlete",
                                    "order": 15,
                                    "winner": false,
                                    "displayName": "Sergio García",
                                    "name": "S. García",
                                    "abbreviation": "S. García",
                                    "score": "-1",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 4",
                                        "period": 1,
                                        "teeTime": "2026-04-09T16:27Z",
                                        "hole": 4,
                                        "startHole": 1,
                                        "thru": 4,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "-1(4)",
                                        "todayDetail": "-1(4)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/esp.png",
                                    "firstName": "Sergio",
                                    "lastName": "García",
                                    "middleName": "",
                                    "shortName": "S. García",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/158.png",
                                    "place": 12,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "8973",
                                    "uid": "s:1100~a:8973",
                                    "type": "athlete",
                                    "order": 16,
                                    "winner": false,
                                    "displayName": "Max Homa",
                                    "name": "M. Homa",
                                    "abbreviation": "M. Homa",
                                    "score": "E",
                                    "status": {
                                        "id": "2",
                                        "displayValue": "F",
                                        "period": 1,
                                        "teeTime": "2026-04-09T11:50Z",
                                        "hole": 18,
                                        "startHole": 1,
                                        "thru": 18,
                                        "playoff": false,
                                        "state": "post",
                                        "name": "STATUS_FINISH",
                                        "detail": "E(F)",
                                        "todayDetail": "E(F)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Max",
                                    "lastName": "Homa",
                                    "middleName": "",
                                    "shortName": "M. Homa",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/8973.png",
                                    "place": 16,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "4901368",
                                    "uid": "s:1100~a:4901368",
                                    "type": "athlete",
                                    "order": 17,
                                    "winner": false,
                                    "displayName": "Matt McCarty",
                                    "name": "M. McCarty",
                                    "abbreviation": "M. McCarty",
                                    "score": "E",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 17",
                                        "period": 1,
                                        "teeTime": "2026-04-09T12:38Z",
                                        "hole": 17,
                                        "startHole": 1,
                                        "thru": 17,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "E(17)",
                                        "todayDetail": "E(17)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Matt",
                                    "lastName": "McCarty",
                                    "middleName": "",
                                    "shortName": "M. McCarty",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/4901368.png",
                                    "place": 16,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "4348470",
                                    "uid": "s:1100~a:4348470",
                                    "type": "athlete",
                                    "order": 18,
                                    "winner": false,
                                    "displayName": "Kristoffer Reitan",
                                    "name": "K. Reitan",
                                    "abbreviation": "K. Reitan",
                                    "score": "E",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 16",
                                        "period": 1,
                                        "teeTime": "2026-04-09T12:50Z",
                                        "hole": 16,
                                        "startHole": 1,
                                        "thru": 16,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "E(16)",
                                        "todayDetail": "E(16)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/nor.png",
                                    "firstName": "Kristoffer",
                                    "lastName": "Reitan",
                                    "middleName": "",
                                    "shortName": "K. Reitan",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/4348470.png",
                                    "place": 16,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "3448",
                                    "uid": "s:1100~a:3448",
                                    "type": "athlete",
                                    "order": 19,
                                    "winner": false,
                                    "displayName": "Dustin Johnson",
                                    "name": "D. Johnson",
                                    "abbreviation": "D. Johnson",
                                    "score": "E",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 14",
                                        "period": 1,
                                        "teeTime": "2026-04-09T13:43Z",
                                        "hole": 14,
                                        "startHole": 1,
                                        "thru": 14,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "E(14)",
                                        "todayDetail": "E(14)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Dustin",
                                    "lastName": "Johnson",
                                    "middleName": "",
                                    "shortName": "D. Johnson",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/3448.png",
                                    "place": 16,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "5409",
                                    "uid": "s:1100~a:5409",
                                    "type": "athlete",
                                    "order": 20,
                                    "winner": false,
                                    "displayName": "Russell Henley",
                                    "name": "R. Henley",
                                    "abbreviation": "R. Henley",
                                    "score": "E",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 11",
                                        "period": 1,
                                        "teeTime": "2026-04-09T14:19Z",
                                        "hole": 11,
                                        "startHole": 1,
                                        "thru": 11,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "E(11)",
                                        "todayDetail": "E(11)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Russell",
                                    "lastName": "Henley",
                                    "middleName": "",
                                    "shortName": "R. Henley",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/5409.png",
                                    "place": 16,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "5860",
                                    "uid": "s:1100~a:5860",
                                    "type": "athlete",
                                    "order": 21,
                                    "winner": false,
                                    "displayName": "Hideki Matsuyama",
                                    "name": "H. Matsuyama",
                                    "abbreviation": "H. Matsuyama",
                                    "score": "E",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 11",
                                        "period": 1,
                                        "teeTime": "2026-04-09T14:19Z",
                                        "hole": 11,
                                        "startHole": 1,
                                        "thru": 11,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "E(11)",
                                        "todayDetail": "E(11)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/jpn.png",
                                    "firstName": "Hideki",
                                    "lastName": "Matsuyama",
                                    "middleName": "",
                                    "shortName": "H. Matsuyama",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/5860.png",
                                    "place": 16,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "4426181",
                                    "uid": "s:1100~a:4426181",
                                    "type": "athlete",
                                    "order": 22,
                                    "winner": false,
                                    "displayName": "Sam Stevens",
                                    "name": "S. Stevens",
                                    "abbreviation": "S. Stevens",
                                    "score": "E",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 9",
                                        "period": 1,
                                        "teeTime": "2026-04-09T15:03Z",
                                        "hole": 9,
                                        "startHole": 1,
                                        "thru": 9,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "E(9)",
                                        "todayDetail": "E(9)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Sam",
                                    "lastName": "Stevens",
                                    "middleName": "",
                                    "shortName": "S. Stevens",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/4426181.png",
                                    "place": 16,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "11332",
                                    "uid": "s:1100~a:11332",
                                    "type": "athlete",
                                    "order": 23,
                                    "winner": false,
                                    "displayName": "Andrew Novak",
                                    "name": "A. Novak",
                                    "abbreviation": "A. Novak",
                                    "score": "E",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 8",
                                        "period": 1,
                                        "teeTime": "2026-04-09T15:15Z",
                                        "hole": 8,
                                        "startHole": 1,
                                        "thru": 8,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "E(8)",
                                        "todayDetail": "E(8)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Andrew",
                                    "lastName": "Novak",
                                    "middleName": "",
                                    "shortName": "A. Novak",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/11332.png",
                                    "place": 16,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "11119",
                                    "uid": "s:1100~a:11119",
                                    "type": "athlete",
                                    "order": 24,
                                    "winner": false,
                                    "displayName": "Wyndham Clark",
                                    "name": "W. Clark",
                                    "abbreviation": "W. Clark",
                                    "score": "E",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 8",
                                        "period": 1,
                                        "teeTime": "2026-04-09T15:27Z",
                                        "hole": 8,
                                        "startHole": 1,
                                        "thru": 8,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "E(8)",
                                        "todayDetail": "E(8)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Wyndham",
                                    "lastName": "Clark",
                                    "middleName": "",
                                    "shortName": "W. Clark",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/11119.png",
                                    "place": 16,
                                    "amateur": false,
                                    "movement": 0
                                },
                                {
                                    "id": "686",
                                    "uid": "s:1100~a:686",
                                    "type": "athlete",
                                    "order": 25,
                                    "winner": false,
                                    "displayName": "Zach Johnson",
                                    "name": "Z. Johnson",
                                    "abbreviation": "Z. Johnson",
                                    "score": "E",
                                    "status": {
                                        "id": "1",
                                        "displayValue": "Thru 7",
                                        "period": 1,
                                        "teeTime": "2026-04-09T15:39Z",
                                        "hole": 7,
                                        "startHole": 1,
                                        "thru": 7,
                                        "playoff": false,
                                        "state": "in",
                                        "name": "STATUS_IN_PROGRESS",
                                        "detail": "E(7)",
                                        "todayDetail": "E(7)"
                                    },
                                    "logo": "https://a.espncdn.com/i/teamlogos/countries/500/usa.png",
                                    "firstName": "Zach",
                                    "lastName": "Johnson",
                                    "middleName": "",
                                    "shortName": "Z. Johnson",
                                    "headshot": "https://a.espncdn.com/i/headshots/golf/players/full/686.png",
                                    "place": 16,
                                    "amateur": false,
                                    "movement": 0
                                }
                            ],
                            "watch": {
                                "style": {
                                    "type": "standard",
                                    "text": "Watch",
                                    "action": "picker",
                                    "link": "https://watch.product.api.espn.com/api/product/v3/watchespn/web/picker?eventId=401811941&isLive=true"
                                }
                            },
                            "conferenceCompetition": false,
                            "onDisneyNetwork": true,
                            "appLinks": [
                                {
                                    "rel": [
                                        "live",
                                        "sportscenter",
                                        "app",
                                        "event"
                                    ],
                                    "href": "sportscenter://x-callback-url/showGame?url=https%3A%2F%2Fwww.espn.com%2Fgolf%2Fleaderboard%3FtournamentId%3D401811941%26modifier%3Dwebview",
                                    "text": "Full Scorecard",
                                    "shortText": "Live"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

## 3
### request
https://site.web.api.espn.com/apis/personalized/site/v2/sports/golf/leaderboard/streams?sport=golf&league=pga&region=us&lang=en&buyWindow=1m&platform=web&postalCode=95131&showAirings=buy%2Clive&configuration=STREAM_MENU&features=sfb-all%2Ccutl&airingDetails=full&event=401811941&playabilitySource=playbackId


### response
{
    "events": [
        {
            "id": "401811941",
            "league": {
                "slug": "pga"
            },
            "status": {
                "type": {
                    "id": "2",
                    "name": "STATUS_IN_PROGRESS",
                    "state": "in",
                    "completed": false,
                    "description": "In Progress"
                }
            },
            "competitions": [
                {
                    "id": "401811941",
                    "airings": [
                        {
                            "createdOn": "2026-03-16T16:00:38.408+0000",
                            "lastModifiedOn": "2026-04-09T14:04:27.780+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/4b2d798a-4456-4693-9896-4efe0e2962c6",
                            "externalId": "ncs.airingId:a1302318232",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "DeChambeau & McIlroy Groups",
                                "trueOriginal": "true",
                                "title": "The Masters: DeChambeau & McIlroy Featured Groups (First Round)",
                                "simulcastAiringId": "1302318232",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "NATIONAL FEED",
                                "bam.contentId": "ncs.airingId:a1302318232",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-09T13:48:40Z",
                                "trackingId": "4b2d798a-4456-4693-9896-4efe0e2962c6",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T04:44:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:01:06Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318232",
                                "broadcastStartOffset": "3782",
                                "bam.broadcastId": "4399b4ff-c962-47e2-89f9-10abafa84774",
                                "nbStartTimestamp": "2026-04-09T14:00:00Z",
                                "feedType": "NATIONAL FEED",
                                "ratingsId": "GOMS01066",
                                "name": "The Masters: Featured Groups",
                                "shortName": "The Masters: Featured Groups",
                                "canIpAuthenticate": "false"
                            },
                            "id": "4b2d798a-4456-4693-9896-4efe0e2962c6",
                            "program": "9301358b-be5d-4beb-880f-498e4c717801",
                            "start": "2026-04-09T14:03:02.000+0000",
                            "end": "2026-04-09T23:30:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "f9edc3a5-9f01-4a76-b3e3-a11d08018c6a",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:00:38.775+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:00:38.775+00:00"
                            },
                            "playableUrl": "https://playback.svcs.plus.espn.com/events/4399b4ff-c962-47e2-89f9-10abafa84774/media/6db77757-5874-4f07-99e4-29b1bfb49c37/scenarios/{scenario}",
                            "playbackId": "eyJjaGFubmVsSWQiOiIxMWYzOTA2NC1mNGJiLTQ2OTItYmRmNC1hNWFlZDQxMDhkODIiLCJtZWRpYUlkIjoiNmRiNzc3NTctNTg3NC00ZjA3LTk5ZTQtMjliMWJmYjQ5YzM3IiwiY29udGVudFR5cGUiOiJsaXZlIiwic291cmNlSWQiOiJ1cm46ZXNwbjp3YXRjaDphaXJpbmc6NGIyZDc5OGEtNDQ1Ni00NjkzLTk4OTYtNGVmZTBlMjk2MmM2In0=",
                            "withinPlayWindow": true,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Featured Groups",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4b2d798a-4456-4693-9896-4efe0e2962c6/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Featured Groups",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4b2d798a-4456-4693-9896-4efe0e2962c6/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/4b2d798a-4456-4693-9896-4efe0e2962c6",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=4b2d798a-4456-4693-9896-4efe0e2962c6",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "DeChambeau & McIlroy Groups",
                            "program_originalAirDate": "2026-04-09T14:00:00+0000",
                            "program_firstPresented": "2026-04-09T14:00:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/f9edc3a5-9f01-4a76-b3e3-a11d08018c6a",
                            "blackout": false,
                            "entitled": false
                        },
                        {
                            "createdOn": "2026-03-16T16:00:39.676+0000",
                            "lastModifiedOn": "2026-04-09T13:48:37.949+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/97ec186b-03fb-472c-86c7-30ffeaf862f2",
                            "externalId": "ncs.airingId:a1302318233",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Holes 4, 5 & 6",
                                "trueOriginal": "true",
                                "title": "The Masters: Holes 4, 5 & 6 (First Round)",
                                "simulcastAiringId": "1302318233",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318233",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-09T13:48:37Z",
                                "trackingId": "97ec186b-03fb-472c-86c7-30ffeaf862f2",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:37:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:01:06Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318233",
                                "broadcastStartOffset": "2285",
                                "bam.broadcastId": "d462a7fa-e2c1-42a4-8c4e-7ae82545f741",
                                "nbStartTimestamp": "2026-04-09T12:23:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01065",
                                "name": "The Masters: Holes 4, 5 & 6",
                                "shortName": "The Masters: Holes 4, 5 & 6",
                                "canIpAuthenticate": "false"
                            },
                            "id": "97ec186b-03fb-472c-86c7-30ffeaf862f2",
                            "program": "320cfd8a-b82d-42c1-875c-d2df01c69810",
                            "start": "2026-04-09T12:23:05.000+0000",
                            "end": "2026-04-09T19:30:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "457c05a1-65b0-44d6-a384-3ca30b075d50",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:00:40.011+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:00:40.011+00:00"
                            },
                            "playableUrl": "https://playback.svcs.plus.espn.com/events/d462a7fa-e2c1-42a4-8c4e-7ae82545f741/media/bf5b6ee5-3e54-490b-b343-c50d8cf4fd08/scenarios/{scenario}",
                            "playbackId": "eyJjaGFubmVsSWQiOiIxMWYzOTA2NC1mNGJiLTQ2OTItYmRmNC1hNWFlZDQxMDhkODIiLCJtZWRpYUlkIjoiYmY1YjZlZTUtM2U1NC00OTBiLWIzNDMtYzUwZDhjZjRmZDA4IiwiY29udGVudFR5cGUiOiJsaXZlIiwic291cmNlSWQiOiJ1cm46ZXNwbjp3YXRjaDphaXJpbmc6OTdlYzE4NmItMDNmYi00NzJjLTg2YzctMzBmZmVhZjg2MmYyIn0=",
                            "withinPlayWindow": true,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Holes 4, 5 & 6",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/97ec186b-03fb-472c-86c7-30ffeaf862f2/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Holes 4, 5 & 6",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/97ec186b-03fb-472c-86c7-30ffeaf862f2/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/97ec186b-03fb-472c-86c7-30ffeaf862f2",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=97ec186b-03fb-472c-86c7-30ffeaf862f2",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Holes 4, 5 & 6",
                            "program_originalAirDate": "2026-04-09T12:23:00+0000",
                            "program_firstPresented": "2026-04-09T12:23:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/457c05a1-65b0-44d6-a384-3ca30b075d50",
                            "blackout": false,
                            "entitled": false
                        },
                        {
                            "createdOn": "2026-03-16T16:00:43.069+0000",
                            "lastModifiedOn": "2026-04-09T14:14:40.183+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/9778c73f-2d1f-4ccc-b959-416d7dc90ff5",
                            "externalId": "ncs.airingId:a1302318248",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "feedName": "Amen Corner",
                                "language": "en-US",
                                "shortTitle": "The Masters: Amen Corner",
                                "trueOriginal": "true",
                                "title": "The Masters: Amen Corner (First Round)",
                                "simulcastAiringId": "1302318248",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318248",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-09T14:00:26Z",
                                "trackingId": "9778c73f-2d1f-4ccc-b959-416d7dc90ff5",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-10T03:24:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:01:06Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318248",
                                "broadcastStartOffset": "3302",
                                "bam.broadcastId": "fecb6b1d-1a63-4079-a557-73059a7869b5",
                                "nbStartTimestamp": "2026-04-09T14:10:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01067",
                                "name": "The Masters: Amen Corner",
                                "shortName": "The Masters: Amen Corner",
                                "canIpAuthenticate": "false"
                            },
                            "id": "9778c73f-2d1f-4ccc-b959-416d7dc90ff5",
                            "program": "db318231-4901-487f-a2d7-10f7d3a79ef1",
                            "start": "2026-04-09T14:10:02.000+0000",
                            "end": "2026-04-09T21:30:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "f3ed3b70-aee9-4d88-a635-b27d95665b1f",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:00:43.415+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:00:43.415+00:00"
                            },
                            "playableUrl": "https://playback.svcs.plus.espn.com/events/fecb6b1d-1a63-4079-a557-73059a7869b5/media/c7ad3d66-dff7-4079-b26b-17302603f104/scenarios/{scenario}",
                            "playbackId": "eyJjaGFubmVsSWQiOiIxMWYzOTA2NC1mNGJiLTQ2OTItYmRmNC1hNWFlZDQxMDhkODIiLCJtZWRpYUlkIjoiYzdhZDNkNjYtZGZmNy00MDc5LWIyNmItMTczMDI2MDNmMTA0IiwiY29udGVudFR5cGUiOiJsaXZlIiwic291cmNlSWQiOiJ1cm46ZXNwbjp3YXRjaDphaXJpbmc6OTc3OGM3M2YtMmQxZi00Y2NjLWI5NTktNDE2ZDdkYzkwZmY1In0=",
                            "withinPlayWindow": true,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Amen Corner",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/9778c73f-2d1f-4ccc-b959-416d7dc90ff5/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Amen Corner",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/9778c73f-2d1f-4ccc-b959-416d7dc90ff5/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/9778c73f-2d1f-4ccc-b959-416d7dc90ff5",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=9778c73f-2d1f-4ccc-b959-416d7dc90ff5",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Amen Corner",
                            "program_originalAirDate": "2026-04-09T14:10:00+0000",
                            "program_firstPresented": "2026-04-09T14:10:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/f3ed3b70-aee9-4d88-a635-b27d95665b1f",
                            "blackout": false,
                            "entitled": false
                        },
                        {
                            "createdOn": "2026-03-16T16:00:40.776+0000",
                            "lastModifiedOn": "2026-04-09T15:10:38.140+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/5356ddf5-6d0a-4778-b7d4-8ef173f1b1eb",
                            "externalId": "ncs.airingId:a1302318235",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Holes 15 & 16",
                                "trueOriginal": "true",
                                "title": "The Masters: Holes 15 & 16 (First Round)",
                                "simulcastAiringId": "1302318235",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318235",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-09T15:10:38Z",
                                "trackingId": "5356ddf5-6d0a-4778-b7d4-8ef173f1b1eb",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:22:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:01:06Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318235",
                                "broadcastStartOffset": "2920",
                                "bam.broadcastId": "17d5ae4f-7377-4e23-947b-0d59b1533974",
                                "nbStartTimestamp": "2026-04-09T15:08:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01068",
                                "name": "The Masters: Holes 15 & 16",
                                "shortName": "The Masters: Holes 15 & 16",
                                "canIpAuthenticate": "false"
                            },
                            "id": "5356ddf5-6d0a-4778-b7d4-8ef173f1b1eb",
                            "program": "0baaa78b-4621-404b-a471-e27eac6805c1",
                            "start": "2026-04-09T15:08:40.000+0000",
                            "end": "2026-04-09T22:35:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "77f0271f-fb16-4d01-b35c-b92f9d94e890",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:00:41.122+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:00:41.122+00:00"
                            },
                            "playableUrl": "https://playback.svcs.plus.espn.com/events/17d5ae4f-7377-4e23-947b-0d59b1533974/media/abfac986-8236-4a10-b620-30b5871fff9a/scenarios/{scenario}",
                            "playbackId": "eyJjaGFubmVsSWQiOiIxMWYzOTA2NC1mNGJiLTQ2OTItYmRmNC1hNWFlZDQxMDhkODIiLCJtZWRpYUlkIjoiYWJmYWM5ODYtODIzNi00YTEwLWI2MjAtMzBiNTg3MWZmZjlhIiwiY29udGVudFR5cGUiOiJsaXZlIiwic291cmNlSWQiOiJ1cm46ZXNwbjp3YXRjaDphaXJpbmc6NTM1NmRkZjUtNmQwYS00Nzc4LWI3ZDQtOGVmMTczZjFiMWViIn0=",
                            "withinPlayWindow": true,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Holes 15 & 16",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/5356ddf5-6d0a-4778-b7d4-8ef173f1b1eb/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Holes 15 & 16",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/5356ddf5-6d0a-4778-b7d4-8ef173f1b1eb/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/5356ddf5-6d0a-4778-b7d4-8ef173f1b1eb",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=5356ddf5-6d0a-4778-b7d4-8ef173f1b1eb",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Holes 15 & 16",
                            "program_originalAirDate": "2026-04-09T15:08:00+0000",
                            "program_firstPresented": "2026-04-09T15:08:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/77f0271f-fb16-4d01-b35c-b92f9d94e890",
                            "blackout": false,
                            "entitled": false
                        },
                        {
                            "createdOn": "2026-03-16T16:10:32.922+0000",
                            "lastModifiedOn": "2026-04-08T20:37:43.606+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/4989baf7-8817-49ff-bf4f-b322d1236b04",
                            "externalId": "ncs.airingId:a1302318253",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Holes 4, 5 & 6",
                                "trueOriginal": "true",
                                "title": "The Masters: Holes 4, 5 & 6 (Second Round)",
                                "simulcastAiringId": "1302318253",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318253",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-08T16:11:01Z",
                                "trackingId": "4989baf7-8817-49ff-bf4f-b322d1236b04",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:11:33Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318253",
                                "bam.broadcastId": "cd698a30-f80b-4cf8-80fb-b7aacc703865",
                                "nbStartTimestamp": "2026-04-10T12:45:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01069",
                                "name": "The Masters: Holes 4, 5 & 6",
                                "shortName": "The Masters: Holes 4, 5 & 6",
                                "canIpAuthenticate": "false"
                            },
                            "id": "4989baf7-8817-49ff-bf4f-b322d1236b04",
                            "program": "b0bfe541-9fc8-4dd0-9bcb-31f0c686f9ed",
                            "start": "2026-04-10T12:45:00.000+0000",
                            "end": "2026-04-10T19:30:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "8afa4f5a-60ac-47b3-b5c7-b5ee96cdd199",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:10:33.245+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:10:33.245+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Holes 4, 5 & 6",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4989baf7-8817-49ff-bf4f-b322d1236b04/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Holes 4, 5 & 6",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/4989baf7-8817-49ff-bf4f-b322d1236b04/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/4989baf7-8817-49ff-bf4f-b322d1236b04",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=4989baf7-8817-49ff-bf4f-b322d1236b04",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Holes 4, 5 & 6",
                            "program_originalAirDate": "2026-04-10T12:45:00+0000",
                            "program_firstPresented": "2026-04-10T12:45:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/8afa4f5a-60ac-47b3-b5c7-b5ee96cdd199",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:10:30.486+0000",
                            "lastModifiedOn": "2026-04-08T20:37:43.517+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/a475a812-119e-4eef-a810-3cdfa2aeb6eb",
                            "externalId": "ncs.airingId:a1302318249",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Featured Groups",
                                "trueOriginal": "true",
                                "title": "The Masters: Featured Groups (Second Round)",
                                "simulcastAiringId": "1302318249",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318249",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-08T13:39:25Z",
                                "trackingId": "a475a812-119e-4eef-a810-3cdfa2aeb6eb",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:11:34Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318249",
                                "bam.broadcastId": "f737d533-cc49-43d9-8651-c8d047cfce13",
                                "nbStartTimestamp": "2026-04-10T12:45:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01070",
                                "name": "The Masters: Featured Groups",
                                "shortName": "The Masters: Featured Groups",
                                "canIpAuthenticate": "false"
                            },
                            "id": "a475a812-119e-4eef-a810-3cdfa2aeb6eb",
                            "program": "e3abfad1-1b7a-4a8c-a78f-4fcf5788c067",
                            "start": "2026-04-10T12:45:00.000+0000",
                            "end": "2026-04-10T23:30:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "1d56347b-83e3-417d-9683-c49041dbac93",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:10:30.801+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:10:30.801+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Featured Groups",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a475a812-119e-4eef-a810-3cdfa2aeb6eb/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Featured Groups",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/a475a812-119e-4eef-a810-3cdfa2aeb6eb/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/a475a812-119e-4eef-a810-3cdfa2aeb6eb",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=a475a812-119e-4eef-a810-3cdfa2aeb6eb",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Featured Groups",
                            "program_originalAirDate": "2026-04-10T12:45:00+0000",
                            "program_firstPresented": "2026-04-10T12:45:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/1d56347b-83e3-417d-9683-c49041dbac93",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:10:29.111+0000",
                            "lastModifiedOn": "2026-04-08T20:37:43.146+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/f3fe544f-2fe4-4549-b9d1-6c9fb24551f0",
                            "externalId": "ncs.airingId:a1302318234",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "feedName": "Amen Corner",
                                "language": "en-US",
                                "shortTitle": "The Masters: Amen Corner",
                                "trueOriginal": "true",
                                "title": "The Masters: Amen Corner (Second Round)",
                                "simulcastAiringId": "1302318234",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318234",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-08T13:39:12Z",
                                "trackingId": "f3fe544f-2fe4-4549-b9d1-6c9fb24551f0",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:11:33Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318234",
                                "bam.broadcastId": "3573746d-f161-4267-8a1a-010fa4fdaf04",
                                "nbStartTimestamp": "2026-04-10T14:45:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01071",
                                "name": "The Masters: Amen Corner",
                                "shortName": "The Masters: Amen Corner",
                                "canIpAuthenticate": "false"
                            },
                            "id": "f3fe544f-2fe4-4549-b9d1-6c9fb24551f0",
                            "program": "e298f53c-5a3f-47fa-b56d-45b4afbb13da",
                            "start": "2026-04-10T14:45:00.000+0000",
                            "end": "2026-04-10T22:00:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "77b254b9-19e8-4e07-a93b-0b80eab4f613",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:10:29.486+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:10:29.486+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Amen Corner",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/f3fe544f-2fe4-4549-b9d1-6c9fb24551f0/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Amen Corner",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/f3fe544f-2fe4-4549-b9d1-6c9fb24551f0/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/f3fe544f-2fe4-4549-b9d1-6c9fb24551f0",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=f3fe544f-2fe4-4549-b9d1-6c9fb24551f0",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Amen Corner",
                            "program_originalAirDate": "2026-04-10T14:45:00+0000",
                            "program_firstPresented": "2026-04-10T14:45:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/77b254b9-19e8-4e07-a93b-0b80eab4f613",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:10:32.916+0000",
                            "lastModifiedOn": "2026-04-08T20:37:42.949+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/6ce4111f-3a55-40df-8cd0-e3ff1440a0e3",
                            "externalId": "ncs.airingId:a1302318250",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Holes 15 & 16",
                                "trueOriginal": "true",
                                "title": "The Masters: Holes 15 & 16 (Second Round)",
                                "simulcastAiringId": "1302318250",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318250",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-08T16:13:03Z",
                                "trackingId": "6ce4111f-3a55-40df-8cd0-e3ff1440a0e3",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:11:36Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318250",
                                "bam.broadcastId": "a38a100a-50fa-4f9b-a015-607755aa8305",
                                "nbStartTimestamp": "2026-04-10T15:45:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01072",
                                "name": "The Masters: Holes 15 & 16",
                                "shortName": "The Masters: Holes 15 & 16",
                                "canIpAuthenticate": "false"
                            },
                            "id": "6ce4111f-3a55-40df-8cd0-e3ff1440a0e3",
                            "program": "f479d5f4-8ac6-4dd2-b02c-a84476ce0411",
                            "start": "2026-04-10T15:45:00.000+0000",
                            "end": "2026-04-10T23:00:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "69148acf-5cc2-4349-afb0-e44c9951d811",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:10:33.274+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:10:33.274+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Holes 15 & 16",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/6ce4111f-3a55-40df-8cd0-e3ff1440a0e3/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Holes 15 & 16",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/6ce4111f-3a55-40df-8cd0-e3ff1440a0e3/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/6ce4111f-3a55-40df-8cd0-e3ff1440a0e3",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=6ce4111f-3a55-40df-8cd0-e3ff1440a0e3",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Holes 15 & 16",
                            "program_originalAirDate": "2026-04-10T15:45:00+0000",
                            "program_firstPresented": "2026-04-10T15:45:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/69148acf-5cc2-4349-afb0-e44c9951d811",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:16:03.307+0000",
                            "lastModifiedOn": "2026-04-08T20:37:42.262+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/e49b9b5b-24cc-4887-824b-26a09d2c3eb9",
                            "externalId": "ncs.airingId:a1302318236",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Featured Groups",
                                "trueOriginal": "true",
                                "title": "The Masters: Featured Groups (Third Round)",
                                "simulcastAiringId": "1302318236",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318236",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-08T17:46:51Z",
                                "trackingId": "e49b9b5b-24cc-4887-824b-26a09d2c3eb9",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:16:16Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318236",
                                "bam.broadcastId": "cae78864-5333-4297-8c53-37bbfef9cd2a",
                                "nbStartTimestamp": "2026-04-11T13:45:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01073",
                                "name": "The Masters: Featured Groups",
                                "shortName": "The Masters: Featured Groups",
                                "canIpAuthenticate": "false"
                            },
                            "id": "e49b9b5b-24cc-4887-824b-26a09d2c3eb9",
                            "program": "ca2e3cbf-d652-4f1c-80af-b2c5d173f496",
                            "start": "2026-04-11T13:45:00.000+0000",
                            "end": "2026-04-11T23:00:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "42f0c87d-f272-4875-ac67-47361d7cbe78",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:16:03.628+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:16:03.628+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Featured Groups",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/e49b9b5b-24cc-4887-824b-26a09d2c3eb9/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Featured Groups",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/e49b9b5b-24cc-4887-824b-26a09d2c3eb9/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/e49b9b5b-24cc-4887-824b-26a09d2c3eb9",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=e49b9b5b-24cc-4887-824b-26a09d2c3eb9",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Featured Groups",
                            "program_originalAirDate": "2026-04-11T13:45:00+0000",
                            "program_firstPresented": "2026-04-11T13:45:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/42f0c87d-f272-4875-ac67-47361d7cbe78",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:16:04.063+0000",
                            "lastModifiedOn": "2026-04-08T20:37:42.146+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/0f3f9d7d-5b92-4e63-9ff3-864acf861029",
                            "externalId": "ncs.airingId:a1302318237",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Holes 4, 5 & 6",
                                "trueOriginal": "true",
                                "title": "The Masters: Holes 4, 5 & 6 (Third Round)",
                                "simulcastAiringId": "1302318237",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318237",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-08T17:46:26Z",
                                "trackingId": "0f3f9d7d-5b92-4e63-9ff3-864acf861029",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:16:14Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318237",
                                "bam.broadcastId": "f45a4113-692b-4814-a104-4699c450c47d",
                                "nbStartTimestamp": "2026-04-11T14:30:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01074",
                                "name": "The Masters: Holes 4, 5 & 6",
                                "shortName": "The Masters: Holes 4, 5 & 6",
                                "canIpAuthenticate": "false"
                            },
                            "id": "0f3f9d7d-5b92-4e63-9ff3-864acf861029",
                            "program": "51b93118-6ea7-40fd-a261-b6607a9f33fb",
                            "start": "2026-04-11T14:30:00.000+0000",
                            "end": "2026-04-11T19:30:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "1c22d4fd-c9ac-404b-9055-37c35958c4e4",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:16:04.602+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:16:04.602+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Holes 4, 5 & 6",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/0f3f9d7d-5b92-4e63-9ff3-864acf861029/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Holes 4, 5 & 6",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/0f3f9d7d-5b92-4e63-9ff3-864acf861029/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/0f3f9d7d-5b92-4e63-9ff3-864acf861029",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=0f3f9d7d-5b92-4e63-9ff3-864acf861029",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Holes 4, 5 & 6",
                            "program_originalAirDate": "2026-04-11T14:30:00+0000",
                            "program_firstPresented": "2026-04-11T14:30:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/1c22d4fd-c9ac-404b-9055-37c35958c4e4",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:16:04.925+0000",
                            "lastModifiedOn": "2026-04-08T20:37:41.965+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/2cef571e-be7a-420c-820a-71330a300719",
                            "externalId": "ncs.airingId:a1302318251",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "feedName": "Amen Corner",
                                "language": "en-US",
                                "shortTitle": "The Masters: Amen Corner",
                                "trueOriginal": "true",
                                "title": "The Masters: Amen Corner (Third Round)",
                                "simulcastAiringId": "1302318251",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318251",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-08T17:46:50Z",
                                "trackingId": "2cef571e-be7a-420c-820a-71330a300719",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:16:15Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318251",
                                "bam.broadcastId": "3caba81c-a803-4d70-8cbc-aad0471d627a",
                                "nbStartTimestamp": "2026-04-11T15:45:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01075",
                                "name": "The Masters: Amen Corner",
                                "shortName": "The Masters: Amen Corner",
                                "canIpAuthenticate": "false"
                            },
                            "id": "2cef571e-be7a-420c-820a-71330a300719",
                            "program": "14b5b558-ae56-46f4-b32c-946180f5d554",
                            "start": "2026-04-11T15:45:00.000+0000",
                            "end": "2026-04-11T22:00:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "96c37235-5a06-47c7-bdff-58faa9e6c74e",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:16:05.471+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:16:05.471+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Amen Corner",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/2cef571e-be7a-420c-820a-71330a300719/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Amen Corner",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/2cef571e-be7a-420c-820a-71330a300719/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/2cef571e-be7a-420c-820a-71330a300719",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=2cef571e-be7a-420c-820a-71330a300719",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Amen Corner",
                            "program_originalAirDate": "2026-04-11T15:45:00+0000",
                            "program_firstPresented": "2026-04-11T15:45:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/96c37235-5a06-47c7-bdff-58faa9e6c74e",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:16:06.457+0000",
                            "lastModifiedOn": "2026-04-08T20:37:41.791+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/1abfc2e6-0a0a-4cf0-9e1a-cb3841365a22",
                            "externalId": "ncs.airingId:a1302318252",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Holes 15 & 16",
                                "trueOriginal": "true",
                                "title": "The Masters: Holes 15 & 16 (Third Round)",
                                "simulcastAiringId": "1302318252",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318252",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-08T17:46:26Z",
                                "trackingId": "1abfc2e6-0a0a-4cf0-9e1a-cb3841365a22",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:16:14Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318252",
                                "bam.broadcastId": "3bad715e-b56c-463f-9913-7b4e7671e2fe",
                                "nbStartTimestamp": "2026-04-11T16:30:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01076",
                                "name": "The Masters: Holes 15 & 16",
                                "shortName": "The Masters: Holes 15 & 16",
                                "canIpAuthenticate": "false"
                            },
                            "id": "1abfc2e6-0a0a-4cf0-9e1a-cb3841365a22",
                            "program": "630f611c-982d-4ebd-b4ad-5f572093c9e8",
                            "start": "2026-04-11T16:30:00.000+0000",
                            "end": "2026-04-11T22:30:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "11c45fc2-dcb9-4bf7-8c3d-0d6834f4006a",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:16:07.002+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:16:07.002+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Holes 15 & 16",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/1abfc2e6-0a0a-4cf0-9e1a-cb3841365a22/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Holes 15 & 16",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/1abfc2e6-0a0a-4cf0-9e1a-cb3841365a22/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/1abfc2e6-0a0a-4cf0-9e1a-cb3841365a22",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=1abfc2e6-0a0a-4cf0-9e1a-cb3841365a22",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Holes 15 & 16",
                            "program_originalAirDate": "2026-04-11T16:30:00+0000",
                            "program_firstPresented": "2026-04-11T16:30:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/11c45fc2-dcb9-4bf7-8c3d-0d6834f4006a",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:36:53.746+0000",
                            "lastModifiedOn": "2026-04-08T20:44:35.259+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/28c25cef-74c8-42e9-98e3-1cc4b86fc04e",
                            "externalId": "ncs.airingId:a1302318238",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Featured Groups",
                                "trueOriginal": "true",
                                "title": "The Masters: Featured Groups (Final Round)",
                                "simulcastAiringId": "1302318238",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318238",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-07T13:48:51Z",
                                "trackingId": "28c25cef-74c8-42e9-98e3-1cc4b86fc04e",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:37:54Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318238",
                                "bam.broadcastId": "7d7c9394-b959-43a8-ae9f-11f35a31b906",
                                "nbStartTimestamp": "2026-04-12T13:45:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01077",
                                "name": "The Masters: Featured Groups",
                                "shortName": "The Masters: Featured Groups",
                                "canIpAuthenticate": "false"
                            },
                            "id": "28c25cef-74c8-42e9-98e3-1cc4b86fc04e",
                            "program": "97894671-dc88-450a-b50c-9bac8b7e632e",
                            "start": "2026-04-12T13:45:00.000+0000",
                            "end": "2026-04-12T23:00:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "3f63b81d-b092-4f4d-a13c-3cfd230c0da5",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:36:54.090+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:36:54.090+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Featured Groups",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/28c25cef-74c8-42e9-98e3-1cc4b86fc04e/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Featured Groups",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/28c25cef-74c8-42e9-98e3-1cc4b86fc04e/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/28c25cef-74c8-42e9-98e3-1cc4b86fc04e",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=28c25cef-74c8-42e9-98e3-1cc4b86fc04e",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Featured Groups",
                            "program_originalAirDate": "2026-04-12T13:45:00+0000",
                            "program_firstPresented": "2026-04-12T13:45:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/3f63b81d-b092-4f4d-a13c-3cfd230c0da5",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:36:55.899+0000",
                            "lastModifiedOn": "2026-04-08T20:37:41.153+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/b883948c-e5e5-4f73-a2f3-f27fd2808960",
                            "externalId": "ncs.airingId:a1302318239",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Holes 4, 5 & 6",
                                "trueOriginal": "true",
                                "title": "The Masters: Holes 4, 5 & 6 (Final Round)",
                                "simulcastAiringId": "1302318239",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318239",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-08T16:15:17Z",
                                "trackingId": "b883948c-e5e5-4f73-a2f3-f27fd2808960",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:37:54Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318239",
                                "bam.broadcastId": "990dcae5-b6b4-4020-838c-fa9d0c6db9dd",
                                "nbStartTimestamp": "2026-04-12T14:30:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01078",
                                "name": "The Masters: Holes 4, 5 & 6",
                                "shortName": "The Masters: Holes 4, 5 & 6",
                                "canIpAuthenticate": "false"
                            },
                            "id": "b883948c-e5e5-4f73-a2f3-f27fd2808960",
                            "program": "cfe56af4-80b1-4e21-8fdf-02c82acd1a1f",
                            "start": "2026-04-12T14:30:00.000+0000",
                            "end": "2026-04-12T19:30:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "de524748-ef0a-4f4f-b259-765435f4d177",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:36:56.418+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:36:56.418+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Holes 4, 5 & 6",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/b883948c-e5e5-4f73-a2f3-f27fd2808960/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Holes 4, 5 & 6",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/b883948c-e5e5-4f73-a2f3-f27fd2808960/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/b883948c-e5e5-4f73-a2f3-f27fd2808960",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=b883948c-e5e5-4f73-a2f3-f27fd2808960",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Holes 4, 5 & 6",
                            "program_originalAirDate": "2026-04-12T14:30:00+0000",
                            "program_firstPresented": "2026-04-12T14:30:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/de524748-ef0a-4f4f-b259-765435f4d177",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:36:56.088+0000",
                            "lastModifiedOn": "2026-04-08T20:37:41.073+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/14a2d2fd-a273-4cd0-8590-5d3df70d99f8",
                            "externalId": "ncs.airingId:a1302318254",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "feedName": "Amen Corner",
                                "language": "en-US",
                                "shortTitle": "The Masters: Amen Corner",
                                "trueOriginal": "true",
                                "title": "The Masters: Amen Corner (Final Round)",
                                "simulcastAiringId": "1302318254",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318254",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-07T13:48:51Z",
                                "trackingId": "14a2d2fd-a273-4cd0-8590-5d3df70d99f8",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:37:56Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318254",
                                "bam.broadcastId": "8a8111ec-3b08-40d2-937b-56b9b66fa4a5",
                                "nbStartTimestamp": "2026-04-12T15:45:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01079",
                                "name": "The Masters: Amen Corner",
                                "shortName": "The Masters: Amen Corner",
                                "canIpAuthenticate": "false"
                            },
                            "id": "14a2d2fd-a273-4cd0-8590-5d3df70d99f8",
                            "program": "a5660c2e-0488-4ccb-a03a-5c362f701206",
                            "start": "2026-04-12T15:45:00.000+0000",
                            "end": "2026-04-12T22:00:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "9761c7db-c306-497f-8860-ef5615116c12",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:36:56.450+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:36:56.450+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Amen Corner",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/14a2d2fd-a273-4cd0-8590-5d3df70d99f8/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Amen Corner",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/14a2d2fd-a273-4cd0-8590-5d3df70d99f8/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/14a2d2fd-a273-4cd0-8590-5d3df70d99f8",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=14a2d2fd-a273-4cd0-8590-5d3df70d99f8",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Amen Corner",
                            "program_originalAirDate": "2026-04-12T15:45:00+0000",
                            "program_firstPresented": "2026-04-12T15:45:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/9761c7db-c306-497f-8860-ef5615116c12",
                            "blackout": false
                        },
                        {
                            "createdOn": "2026-03-16T16:36:56.942+0000",
                            "lastModifiedOn": "2026-04-08T20:37:40.887+0000",
                            "artworkUrl": "https://artwork.api.espn.com/artwork/collections/airings/91cf7f42-4b9f-4106-a755-0fa14440574f",
                            "externalId": "ncs.airingId:a1302318260",
                            "properties": {
                                "hasEspnId3Heartbeats": "false",
                                "language": "en-US",
                                "shortTitle": "The Masters: Holes 15 & 16",
                                "trueOriginal": "true",
                                "title": "The Masters: Holes 15 & 16 (Final Round)",
                                "simulcastAiringId": "1302318260",
                                "contentCleared": "true",
                                "hasPassThroughAds": "false",
                                "dtcPackages": [
                                    "ESPN_PLUS"
                                ],
                                "airingConcurrency": "dual_home",
                                "bam.feedType": "ALTERNATE",
                                "bam.contentId": "ncs.airingId:a1302318260",
                                "isLive": "true",
                                "hasNielsenWatermarks": "false",
                                "hasClosedCaptions": "true",
                                "artworkLastModified": "202604082037",
                                "bam.metadataIngested": "true",
                                "allowStartOver": "true",
                                "transmissionLastModified": "2026-04-08T16:15:17Z",
                                "trackingId": "91cf7f42-4b9f-4106-a755-0fa14440574f",
                                "commercialReplacement": "AD SERVE",
                                "allowedAccess": "domestic",
                                "reAir": "false",
                                "killDateTimestamp": "2026-04-15T03:59:00Z",
                                "sponsored": "false",
                                "restrictionsLastModified": "2026-03-16T16:37:55Z",
                                "liveReplay": "live_replay",
                                "cs_productionAiringId": "302318260",
                                "bam.broadcastId": "5a379b02-0454-4d04-b954-85ef52667549",
                                "nbStartTimestamp": "2026-04-12T16:30:00Z",
                                "feedType": "ALTERNATE",
                                "ratingsId": "GOMS01080",
                                "name": "The Masters: Holes 15 & 16",
                                "shortName": "The Masters: Holes 15 & 16",
                                "canIpAuthenticate": "false"
                            },
                            "id": "91cf7f42-4b9f-4106-a755-0fa14440574f",
                            "program": "8c5aefde-9d70-42aa-bd8b-93310e91c613",
                            "start": "2026-04-12T16:30:00.000+0000",
                            "end": "2026-04-12T22:30:00.000+0000",
                            "network": "espn_dtc",
                            "networkId": "a698f0a3-dcfc-4684-9ca2-3082a28111cc",
                            "network_shortName": "ESPN+",
                            "network_displayName": "ESPN+",
                            "policy": {
                                "viewingPolicies": [
                                    {
                                        "audience": {
                                            "id": "78f1ce73-384f-483f-b4de-dc959651a7e9",
                                            "externalId": "AS_GU_MP_PR_US_VI",
                                            "name": "Audience for US and territories whitelist",
                                            "match": "NONE",
                                            "properties": {
                                                "iso3166": [
                                                    "AS",
                                                    "GU",
                                                    "MP",
                                                    "PR",
                                                    "US",
                                                    "VI"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "reject_blackout"
                                        ],
                                        "name": "Viewing policy for US and territories allow list",
                                        "id": "e2fdc729-4ba1-413e-9a02-6ddc74d89689",
                                        "externalId": "AS_GU_MP_PR_US_VI"
                                    },
                                    {
                                        "audience": {
                                            "id": "fab7975c-b5b6-47bb-9ec7-227b81ca8518",
                                            "externalId": "ESPN_PLUS",
                                            "name": "ESPN_PLUS entitlement audience",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_PLUS"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_entitlement"
                                        ],
                                        "name": "Viewing policy for ESPN_PLUS entitlement",
                                        "id": "d922dd59-10ff-4c9c-bd1e-cae6560698ef",
                                        "externalId": "ESPN_PLUS"
                                    },
                                    {
                                        "audience": {
                                            "id": "52a51035-cfc5-46ad-890e-1c8e6b8d2fa8",
                                            "externalId": "ESPN_BASE",
                                            "name": "Audience for ESPN base tier",
                                            "match": "ANY",
                                            "properties": {
                                                "subscription": [
                                                    "ESPN_BASE"
                                                ]
                                            }
                                        },
                                        "actions": [
                                            "allow_startover"
                                        ],
                                        "name": "Viewing policy to allow startover",
                                        "id": "08397749-a2c3-41a9-93b8-22c833b861f3",
                                        "externalId": "ALLOW_STARTOVER"
                                    }
                                ],
                                "id": "38080694-1195-4865-917a-6b587a246de3",
                                "createdBy": "anonymous",
                                "createdOn": "2026-03-16T16:36:57.476+00:00",
                                "lastModifiedBy": "anonymous",
                                "lastModifiedOn": "2026-03-16T16:36:57.476+00:00"
                            },
                            "withinPlayWindow": false,
                            "images": [
                                {
                                    "height": 360,
                                    "width": 640,
                                    "name": "The Masters: Holes 15 & 16",
                                    "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/91cf7f42-4b9f-4106-a755-0fa14440574f/16x9.png?timestamp=202604082037",
                                    "peers": [
                                        {
                                            "height": 640,
                                            "width": 360,
                                            "name": "The Masters: Holes 15 & 16",
                                            "url": "https://s.secure.espncdn.com/stitcher/artwork/collections/airings/91cf7f42-4b9f-4106-a755-0fa14440574f/16x9.png?timestamp=202604082037"
                                        }
                                    ]
                                }
                            ],
                            "program_categories": [
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "id": "f31dcd52-1d25-465d-9c5a-7fd72839c595",
                                    "type": "competitiongroup",
                                    "name": "The Masters"
                                },
                                {
                                    "artworkUrl": "https://artwork.api.espn.com/artwork/collections/categories/6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "id": "6fa31473-a322-3ed5-ac85-4e76b37065f3",
                                    "type": "sport",
                                    "name": "Golf"
                                }
                            ],
                            "program_eventId": "401811941",
                            "program_eventUrl": "https://events.api.espn.com/eventcalendar/api/events/ec1/401811941",
                            "program_language": "English",
                            "webAiringLink": "https://www.espn.com/watch/player/_/id/91cf7f42-4b9f-4106-a755-0fa14440574f",
                            "appAiringLink": "sportscenter://x-callback-url/showWatchStream?playID=91cf7f42-4b9f-4106-a755-0fa14440574f",
                            "webGameLink": "https://www.espn.com/watch/player/_/eventCalendarId/401811941?gameId=401811941&sourceLang=en",
                            "appGameLink": "sportscenter://x-callback-url/showWatchStream?playGameID=401811941",
                            "program_shortTitle": "The Masters: Holes 15 & 16",
                            "program_originalAirDate": "2026-04-12T16:30:00+0000",
                            "program_firstPresented": "2026-04-12T16:30:00.000+0000",
                            "policyUrl": "https://restrictions.api.espn.com/restrictions/policies/38080694-1195-4865-917a-6b587a246de3",
                            "blackout": false
                        }
                    ],
                    "watch": {
                        "style": {
                            "type": "standard",
                            "text": "Watch",
                            "action": "picker",
                            "link": "https://watch.product.api.espn.com/api/product/v3/watchespn/web/picker?eventId=401811941&isLive=true"
                        }
                    },
                    "athleteWatch": [
                        {
                            "athleteID": "43c55459-a359-d86e-e2a9-54961c57a033",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6",
                            "watch": {
                                "style": {
                                    "type": "standard",
                                    "text": "Watch",
                                    "action": "paywall",
                                    "link": "https://www.espn.com/watch/player/_/id/4b2d798a-4456-4693-9896-4efe0e2962c6"
                                }
                            }
                        },
                        {
                            "athleteID": "a11204a7-ef27-3f00-a28e-358ee5984e77",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6",
                            "watch": {
                                "style": {
                                    "type": "standard",
                                    "text": "Watch",
                                    "action": "paywall",
                                    "link": "https://www.espn.com/watch/player/_/id/4b2d798a-4456-4693-9896-4efe0e2962c6"
                                }
                            }
                        },
                        {
                            "athleteID": "65575c5e-0ef2-9f58-6495-42da8638a332",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6",
                            "watch": {
                                "style": {
                                    "type": "standard",
                                    "text": "Watch",
                                    "action": "paywall",
                                    "link": "https://www.espn.com/watch/player/_/id/4b2d798a-4456-4693-9896-4efe0e2962c6"
                                }
                            }
                        },
                        {
                            "athleteID": "e23e62a8-8995-6b06-42f2-018c8a27e916",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6",
                            "watch": {
                                "style": {
                                    "type": "standard",
                                    "text": "Watch",
                                    "action": "paywall",
                                    "link": "https://www.espn.com/watch/player/_/id/4b2d798a-4456-4693-9896-4efe0e2962c6"
                                }
                            }
                        },
                        {
                            "athleteID": "b9dfbb7c-0b61-caad-280f-512c677e8e8f",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6",
                            "watch": {
                                "style": {
                                    "type": "standard",
                                    "text": "Watch",
                                    "action": "paywall",
                                    "link": "https://www.espn.com/watch/player/_/id/4b2d798a-4456-4693-9896-4efe0e2962c6"
                                }
                            }
                        },
                        {
                            "athleteID": "0518d860-6462-3acf-9873-54c0e42b36e3",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6",
                            "watch": {
                                "style": {
                                    "type": "standard",
                                    "text": "Watch",
                                    "action": "paywall",
                                    "link": "https://www.espn.com/watch/player/_/id/4b2d798a-4456-4693-9896-4efe0e2962c6"
                                }
                            }
                        }
                    ],
                    "athleteAirings": [
                        {
                            "athleteID": "43c55459-a359-d86e-e2a9-54961c57a033",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6"
                        },
                        {
                            "athleteID": "a11204a7-ef27-3f00-a28e-358ee5984e77",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6"
                        },
                        {
                            "athleteID": "65575c5e-0ef2-9f58-6495-42da8638a332",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6"
                        },
                        {
                            "athleteID": "e23e62a8-8995-6b06-42f2-018c8a27e916",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6"
                        },
                        {
                            "athleteID": "b9dfbb7c-0b61-caad-280f-512c677e8e8f",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6"
                        },
                        {
                            "athleteID": "0518d860-6462-3acf-9873-54c0e42b36e3",
                            "airingID": "4b2d798a-4456-4693-9896-4efe0e2962c6"
                        }
                    ],
                    "state": "in"
                }
            ]
        }
    ]
}