"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
exports.__esModule = true;
exports.Species = exports.SPECIES = void 0;
var util_1 = require("../util");
var RBY = {};
var GSC_PATCH = {};
var GSC = (0, util_1.extend)(true, {}, RBY, GSC_PATCH);
var ADV_PATCH = {};
var ADV = (0, util_1.extend)(true, {}, GSC, ADV_PATCH);
var DPP_PATCH = {};
var DPP = (0, util_1.extend)(true, {}, ADV, DPP_PATCH);
var BW_PATCH = {};
var BW = (0, util_1.extend)(true, {}, DPP, BW_PATCH);
var XY_PATCH = {};
var XY = (0, util_1.extend)(true, {}, BW, XY_PATCH);
var SM_PATCH = {};
var SM = (0, util_1.extend)(true, {}, XY, SM_PATCH);
var SS_PATCH = {};
var REDUX_PATCH = {
    "Bulbasaur": {
        "id": 1,
        "bs": {
            "hp": 47,
            "at": 49,
            "df": 49,
            "sa": 65,
            "sd": 65,
            "sp": 45
        },
        "abilities": [
            "Chloroplast",
            "Pastel Veil",
            "Chlorophyll"
        ],
        "innates": [
            "Overgrow",
            "Thick Fat",
            "Poison Absorb"
        ],
        "weightkg": 69,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Ivysaur": {
        "id": 2,
        "bs": {
            "hp": 65,
            "at": 62,
            "df": 68,
            "sa": 80,
            "sd": 80,
            "sp": 65
        },
        "abilities": [
            "Chloroplast",
            "Pastel Veil",
            "Chlorophyll"
        ],
        "innates": [
            "Overgrow",
            "Thick Fat",
            "Poison Absorb"
        ],
        "weightkg": 130,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Venusaur": {
        "id": 3,
        "bs": {
            "hp": 90,
            "at": 82,
            "df": 83,
            "sa": 100,
            "sd": 100,
            "sp": 80
        },
        "abilities": [
            "Chloroplast",
            "Pastel Veil",
            "Chlorophyll"
        ],
        "innates": [
            "Overgrow",
            "Thick Fat",
            "Poison Absorb"
        ],
        "weightkg": 1000,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Venusaur Mega"
        ]
    },
    "Venusaur Mega Y": {
        "id": 3,
        "bs": {
            "hp": 90,
            "at": 100,
            "df": 123,
            "sa": 122,
            "sd": 120,
            "sp": 80
        },
        "abilities": [
            "Big Leaves",
            "Big Leaves",
            "Big Leaves"
        ],
        "innates": [
            "Forest Rage",
            "Thick Fat",
            "Poison Absorb"
        ],
        "weightkg": 1000,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127
    },
    "Venusaur Mega X": {
        "id": 3,
        "bs": {
            "hp": 90,
            "at": 125,
            "df": 130,
            "sa": 100,
            "sd": 130,
            "sp": 60
        },
        "abilities": [
            "Energy Siphon",
            "Energy Siphon",
            "Energy Siphon"
        ],
        "innates": [
            "Forest Rage",
            "Whiplash",
            "Long Reach"
        ],
        "weightkg": 1000,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127
    },
    "Charmander": {
        "id": 4,
        "bs": {
            "hp": 44,
            "at": 52,
            "df": 43,
            "sa": 65,
            "sd": 46,
            "sp": 70
        },
        "abilities": [
            "Flame Body",
            "Pyromancy",
            "Half Drake"
        ],
        "innates": [
            "Blaze",
            "Flash Fire",
            "Solar Power"
        ],
        "weightkg": 85,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Charmeleon": {
        "id": 5,
        "bs": {
            "hp": 63,
            "at": 64,
            "df": 58,
            "sa": 85,
            "sd": 65,
            "sp": 85
        },
        "abilities": [
            "Flame Body",
            "Pyromancy",
            "Half Drake"
        ],
        "innates": [
            "Blaze",
            "Flash Fire",
            "Solar Power"
        ],
        "weightkg": 190,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Charizard": {
        "id": 6,
        "bs": {
            "hp": 79,
            "at": 84,
            "df": 78,
            "sa": 109,
            "sd": 85,
            "sp": 100
        },
        "abilities": [
            "Molten Down",
            "Giant Wings",
            "Tough Claws"
        ],
        "innates": [
            "Blaze",
            "Levitate",
            "Sun Worship"
        ],
        "weightkg": 905,
        "types": [
            "Fire",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Charizard Mega X",
            "Charizard Mega Y"
        ]
    },
    "Charizard Mega X": {
        "id": 6,
        "bs": {
            "hp": 79,
            "at": 140,
            "df": 111,
            "sa": 105,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Tough Claws",
            "Tough Claws",
            "Tough Claws"
        ],
        "innates": [
            "Hellblaze",
            "Levitate",
            "Discipline"
        ],
        "weightkg": 905,
        "types": [
            "Fire",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Charizard"
        ]
    },
    "Charizard Mega Y": {
        "id": 6,
        "bs": {
            "hp": 79,
            "at": 123,
            "df": 78,
            "sa": 140,
            "sd": 115,
            "sp": 100
        },
        "abilities": [
            "Drought",
            "Drought",
            "Drought"
        ],
        "innates": [
            "Hellblaze",
            "Levitate",
            "Solar Power"
        ],
        "weightkg": 905,
        "types": [
            "Fire",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Charizard"
        ]
    },
    "Charizard Mega Z": {
        "id": 6,
        "bs": {
            "hp": 79,
            "at": 94,
            "df": 113,
            "sa": 144,
            "sd": 120,
            "sp": 85
        },
        "abilities": [
            "Wildfire",
            "Wildfire",
            "Wildfire"
        ],
        "innates": [
            "Hellblaze",
            "Imposing Wings",
            "Flame Shield"
        ],
        "weightkg": 905,
        "types": [
            "Fire"
        ],
        "genderR": 127
    },
    "Squirtle": {
        "id": 7,
        "bs": {
            "hp": 50,
            "at": 48,
            "df": 65,
            "sa": 50,
            "sd": 64,
            "sp": 43
        },
        "abilities": [
            "Stamina",
            "Regenerator",
            "Bulletproof"
        ],
        "innates": [
            "Torrent",
            "Shell Armor",
            "Water Veil"
        ],
        "weightkg": 90,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Wartortle": {
        "id": 8,
        "bs": {
            "hp": 64,
            "at": 63,
            "df": 80,
            "sa": 70,
            "sd": 85,
            "sp": 58
        },
        "abilities": [
            "Stamina",
            "Regenerator",
            "Bulletproof"
        ],
        "innates": [
            "Torrent",
            "Shell Armor",
            "Water Veil"
        ],
        "weightkg": 225,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Blastoise": {
        "id": 9,
        "bs": {
            "hp": 84,
            "at": 83,
            "df": 100,
            "sa": 85,
            "sd": 105,
            "sp": 78
        },
        "abilities": [
            "Stamina",
            "Regenerator",
            "Bulletproof"
        ],
        "innates": [
            "Torrent",
            "Shell Armor",
            "Mega Launcher"
        ],
        "weightkg": 855,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Blastoise Mega"
        ]
    },
    "Blastoise Mega Y": {
        "id": 9,
        "bs": {
            "hp": 84,
            "at": 103,
            "df": 120,
            "sa": 135,
            "sd": 115,
            "sp": 78
        },
        "abilities": [
            "Artillery",
            "Artillery",
            "Artillery"
        ],
        "innates": [
            "Riptide",
            "Shell Armor",
            "Mega Launcher"
        ],
        "weightkg": 855,
        "types": [
            "Water",
            "Steel"
        ],
        "genderR": 127
    },
    "Blastoise Mega X": {
        "id": 9,
        "bs": {
            "hp": 84,
            "at": 145,
            "df": 125,
            "sa": 113,
            "sd": 120,
            "sp": 48
        },
        "abilities": [
            "Dauntless Shield",
            "Dauntless Shield",
            "Dauntless Shield"
        ],
        "innates": [
            "Riptide",
            "Shell Armor",
            "Skill Link"
        ],
        "weightkg": 855,
        "types": [
            "Water",
            "Steel"
        ],
        "genderR": 127
    },
    "Caterpie": {
        "id": 10,
        "bs": {
            "hp": 45,
            "at": 30,
            "df": 35,
            "sa": 20,
            "sd": 20,
            "sp": 45
        },
        "abilities": [
            "Anticipation",
            "Web Spinner",
            "Run Away"
        ],
        "innates": [
            "Swarm",
            "Shield Dust",
            "Coward"
        ],
        "weightkg": 29,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Metapod": {
        "id": 11,
        "bs": {
            "hp": 50,
            "at": 20,
            "df": 55,
            "sa": 25,
            "sd": 25,
            "sp": 30
        },
        "abilities": [
            "Shed Skin",
            "Shell Armor",
            "Fortitude"
        ],
        "innates": [
            "Swarm",
            "Shield Dust",
            "Overcoat"
        ],
        "weightkg": 99,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Butterfree": {
        "id": 12,
        "bs": {
            "hp": 75,
            "at": 55,
            "df": 50,
            "sa": 110,
            "sd": 95,
            "sp": 90
        },
        "abilities": [
            "Tinted Lens",
            "Shield Dust",
            "Giant Wings"
        ],
        "innates": [
            "Majestic Moth",
            "Compound Eyes",
            "Levitate"
        ],
        "weightkg": 320,
        "types": [
            "Bug",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Butterfree Mega"
        ]
    },
    "Butterfree Mega": {
        "id": 12,
        "bs": {
            "hp": 75,
            "at": 15,
            "df": 65,
            "sa": 165,
            "sd": 140,
            "sp": 115
        },
        "abilities": [
            "Tinted Lens",
            "Tinted Lens",
            "Tinted Lens"
        ],
        "innates": [
            "Shield Dust",
            "Compound Eyes",
            "Imposing Wings"
        ],
        "weightkg": 320,
        "types": [
            "Bug",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Butterfree"
        ]
    },
    "Weedle": {
        "id": 13,
        "bs": {
            "hp": 40,
            "at": 35,
            "df": 30,
            "sa": 20,
            "sd": 20,
            "sp": 50
        },
        "abilities": [
            "Infiltrator",
            "Web Spinner",
            "Run Away"
        ],
        "innates": [
            "Swarm",
            "Shield Dust",
            "Poison Point"
        ],
        "weightkg": 32,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Weedle Redux"
        ],
        "nfe": true
    },
    "Kakuna": {
        "id": 14,
        "bs": {
            "hp": 45,
            "at": 25,
            "df": 50,
            "sa": 25,
            "sd": 25,
            "sp": 35
        },
        "abilities": [
            "Shed Skin",
            "Shell Armor",
            "Corrosion"
        ],
        "innates": [
            "Swarm",
            "Shield Dust",
            "Overcoat"
        ],
        "weightkg": 100,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Kakuna Redux"
        ],
        "nfe": true
    },
    "Beedrill": {
        "id": 15,
        "bs": {
            "hp": 65,
            "at": 110,
            "df": 40,
            "sa": 45,
            "sd": 80,
            "sp": 135
        },
        "abilities": [
            "Poison Touch",
            "Sniper",
            "Speed Force"
        ],
        "innates": [
            "Hyper Aggressive",
            "Merciless",
            "Levitate"
        ],
        "weightkg": 295,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Beedrill Mega Redux",
            "Beedrill Redux",
            "Beedrill Mega"
        ]
    },
    "Beedrill Mega": {
        "id": 15,
        "bs": {
            "hp": 65,
            "at": 150,
            "df": 60,
            "sa": 45,
            "sd": 80,
            "sp": 175
        },
        "abilities": [
            "Adaptability",
            "Adaptability",
            "Adaptability"
        ],
        "innates": [
            "Hyper Aggressive",
            "Merciless",
            "Levitate"
        ],
        "weightkg": 295,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Beedrill"
        ]
    },
    "Weedle Redux": {
        "id": 13,
        "bs": {
            "hp": 40,
            "at": 35,
            "df": 30,
            "sa": 20,
            "sd": 20,
            "sp": 50
        },
        "abilities": [
            "Compound Eyes",
            "Web Spinner",
            "Run Away"
        ],
        "innates": [
            "Ice Scales",
            "Ice Dew",
            "Overcoat"
        ],
        "weightkg": 32,
        "types": [
            "Ice",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Weedle"
        ],
        "nfe": true
    },
    "Kakuna Redux": {
        "id": 14,
        "bs": {
            "hp": 45,
            "at": 25,
            "df": 50,
            "sa": 25,
            "sd": 25,
            "sp": 35
        },
        "abilities": [
            "Shed Skin",
            "Shell Armor",
            "Corrosion"
        ],
        "innates": [
            "Ice Body",
            "Ice Dew",
            "Overcoat"
        ],
        "weightkg": 100,
        "types": [
            "Ice",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Kakuna"
        ],
        "nfe": true
    },
    "Beedrill Redux": {
        "id": 15,
        "bs": {
            "hp": 65,
            "at": 110,
            "df": 40,
            "sa": 45,
            "sd": 80,
            "sp": 135
        },
        "abilities": [
            "Freezing Point",
            "Whiteout",
            "Slush Rush"
        ],
        "innates": [
            "Skill Link",
            "Exploit Weakness",
            "Levitate"
        ],
        "weightkg": 295,
        "types": [
            "Ice",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Beedrill"
        ]
    },
    "Beedrill Mega Redux": {
        "id": 15,
        "bs": {
            "hp": 65,
            "at": 150,
            "df": 60,
            "sa": 45,
            "sd": 80,
            "sp": 175
        },
        "abilities": [
            "Freezing Point",
            "Freezing Point",
            "Freezing Point"
        ],
        "innates": [
            "Skill Link",
            "Exploit Weakness",
            "Adaptability"
        ],
        "weightkg": 295,
        "types": [
            "Ice",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Beedrill"
        ]
    },
    "Pidgey": {
        "id": 16,
        "bs": {
            "hp": 40,
            "at": 35,
            "df": 40,
            "sa": 45,
            "sd": 35,
            "sp": 56
        },
        "abilities": [
            "No Guard",
            "Guts",
            "Big Pecks"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Dust Cloud"
        ],
        "weightkg": 18,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Pidgeotto": {
        "id": 17,
        "bs": {
            "hp": 63,
            "at": 70,
            "df": 55,
            "sa": 65,
            "sd": 50,
            "sp": 91
        },
        "abilities": [
            "Majestic Bird",
            "Dust Cloud",
            "Speed Boost"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Giant Wings"
        ],
        "weightkg": 300,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Pidgeot": {
        "id": 18,
        "bs": {
            "hp": 83,
            "at": 80,
            "df": 75,
            "sa": 85,
            "sd": 70,
            "sp": 101
        },
        "abilities": [
            "Majestic Bird",
            "Dust Cloud",
            "Speed Boost"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Giant Wings"
        ],
        "weightkg": 395,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pidgeot Mega"
        ]
    },
    "Pidgeot Mega": {
        "id": 18,
        "bs": {
            "hp": 83,
            "at": 80,
            "df": 95,
            "sa": 130,
            "sd": 80,
            "sp": 126
        },
        "abilities": [
            "No Guard",
            "Dust Cloud",
            "Speed Boost"
        ],
        "innates": [
            "Flock",
            "Majestic Bird",
            "Giant Wings"
        ],
        "weightkg": 395,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pidgeot"
        ]
    },
    "Rattata": {
        "id": 19,
        "bs": {
            "hp": 30,
            "at": 56,
            "df": 35,
            "sa": 25,
            "sd": 35,
            "sp": 72
        },
        "abilities": [
            "Hustle",
            "Normalize",
            "Looter"
        ],
        "innates": [
            "Guts",
            "Quick Feet",
            "Run Away"
        ],
        "weightkg": 35,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Rattata Alolan"
        ],
        "nfe": true
    },
    "Raticate": {
        "id": 20,
        "bs": {
            "hp": 75,
            "at": 101,
            "df": 60,
            "sa": 50,
            "sd": 70,
            "sp": 102
        },
        "abilities": [
            "Hustle",
            "Normalize",
            "Looter"
        ],
        "innates": [
            "Guts",
            "Quick Feet",
            "Growing Tooth"
        ],
        "weightkg": 185,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Raticate Alolan"
        ]
    },
    "Rattata Alolan": {
        "id": 19,
        "bs": {
            "hp": 30,
            "at": 56,
            "df": 35,
            "sa": 25,
            "sd": 35,
            "sp": 72
        },
        "abilities": [
            "Hustle",
            "Gluttony",
            "Looter"
        ],
        "innates": [
            "Cheap Tactics",
            "Run Away",
            "Thick Fat"
        ],
        "weightkg": 35,
        "types": [
            "Dark",
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Rattata"
        ],
        "nfe": true
    },
    "Raticate Alolan": {
        "id": 20,
        "bs": {
            "hp": 95,
            "at": 86,
            "df": 80,
            "sa": 40,
            "sd": 80,
            "sp": 77
        },
        "abilities": [
            "Hustle",
            "Gluttony",
            "Subdue"
        ],
        "innates": [
            "Jaws of Carnage",
            "Opportunist",
            "Retriever"
        ],
        "weightkg": 185,
        "types": [
            "Dark",
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Raticate"
        ]
    },
    "Spearow": {
        "id": 21,
        "bs": {
            "hp": 40,
            "at": 60,
            "df": 30,
            "sa": 31,
            "sd": 31,
            "sp": 70
        },
        "abilities": [
            "Accelerate",
            "Gale Wings",
            "Sniper"
        ],
        "innates": [
            "Frisk",
            "Ambush",
            "Big Pecks"
        ],
        "weightkg": 20,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Fearow": {
        "id": 22,
        "bs": {
            "hp": 65,
            "at": 110,
            "df": 75,
            "sa": 61,
            "sd": 71,
            "sp": 100
        },
        "abilities": [
            "Sniper",
            "Gale Wings",
            "Accelerate"
        ],
        "innates": [
            "Intimidate",
            "Ambush",
            "Big Pecks"
        ],
        "weightkg": 380,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127
    },
    "Ekans": {
        "id": 23,
        "bs": {
            "hp": 55,
            "at": 60,
            "df": 49,
            "sa": 40,
            "sd": 59,
            "sp": 55
        },
        "abilities": [
            "Merciless",
            "Grappler",
            "Intimidate"
        ],
        "innates": [
            "Solenoglyphs",
            "Shed Skin",
            "Coil Up"
        ],
        "weightkg": 69,
        "types": [
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Arbok": {
        "id": 24,
        "bs": {
            "hp": 90,
            "at": 105,
            "df": 84,
            "sa": 65,
            "sd": 84,
            "sp": 80
        },
        "abilities": [
            "Merciless",
            "Ambush",
            "Intimidate"
        ],
        "innates": [
            "Solenoglyphs",
            "Shed Skin",
            "Coil Up"
        ],
        "weightkg": 650,
        "types": [
            "Poison",
            "Dark"
        ],
        "genderR": 127
    },
    "Arbok Mega": {
        "id": 24,
        "bs": {
            "hp": 90,
            "at": 130,
            "df": 94,
            "sa": 135,
            "sd": 94,
            "sp": 65
        },
        "abilities": [
            "Pattern Change",
            "Petrify",
            "Neurotoxin"
        ],
        "innates": [
            "Sniper",
            "Merciless",
            "Sidewinder"
        ],
        "weightkg": 650,
        "types": [
            "Poison",
            "Dark"
        ],
        "genderR": 127
    },
    "Sandshrew": {
        "id": 27,
        "bs": {
            "hp": 70,
            "at": 75,
            "df": 85,
            "sa": 20,
            "sd": 30,
            "sp": 40
        },
        "abilities": [
            "Sand Veil",
            "Let's Roll",
            "Sand Stream"
        ],
        "innates": [
            "Earthbound",
            "Sand Rush",
            "Battle Armor"
        ],
        "weightkg": 120,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sandshrew Alolan"
        ],
        "nfe": true
    },
    "Sandslash": {
        "id": 28,
        "bs": {
            "hp": 95,
            "at": 100,
            "df": 110,
            "sa": 45,
            "sd": 55,
            "sp": 65
        },
        "abilities": [
            "Battle Armor",
            "Stamina",
            "Sand Stream"
        ],
        "innates": [
            "Let's Roll",
            "Loose Quills",
            "Tough Claws"
        ],
        "weightkg": 295,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sandslash Alolan",
            "Sandslash Mega"
        ]
    },
    "Sandslash Mega": {
        "id": 28,
        "bs": {
            "hp": 95,
            "at": 140,
            "df": 110,
            "sa": 45,
            "sd": 85,
            "sp": 95
        },
        "abilities": [
            "Sand Stream",
            "Sand Force",
            "Sand Rush"
        ],
        "innates": [
            "Desert Cloak",
            "Spike Armor",
            "Tough Claws"
        ],
        "weightkg": 295,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sandslash"
        ]
    },
    "Sandshrew Alolan": {
        "id": 27,
        "bs": {
            "hp": 70,
            "at": 75,
            "df": 90,
            "sa": 10,
            "sd": 35,
            "sp": 40
        },
        "abilities": [
            "Snow Cloak",
            "Let's Roll",
            "Mountaineer"
        ],
        "innates": [
            "Freezing Point",
            "Slush Rush",
            "Battle Armor"
        ],
        "weightkg": 120,
        "types": [
            "Ice",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sandshrew"
        ],
        "nfe": true
    },
    "Sandslash Alolan": {
        "id": 28,
        "bs": {
            "hp": 95,
            "at": 100,
            "df": 120,
            "sa": 25,
            "sd": 65,
            "sp": 65
        },
        "abilities": [
            "Whiteout",
            "Stamina",
            "Slush Rush"
        ],
        "innates": [
            "Let's Roll",
            "Tough Claws",
            "Iron Barbs"
        ],
        "weightkg": 295,
        "types": [
            "Ice",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sandslash"
        ]
    },
    "Nidoran♀": {
        "id": 29,
        "bs": {
            "hp": 55,
            "at": 47,
            "df": 52,
            "sa": 40,
            "sd": 40,
            "sp": 41
        },
        "abilities": [
            "Growing Tooth",
            "Hustle",
            "Anticipation"
        ],
        "innates": [
            "Poison Point",
            "Rivalry",
            "Run Away"
        ],
        "weightkg": 70,
        "types": [
            "Poison"
        ],
        "genderR": 254
    },
    "Nidorina": {
        "id": 30,
        "bs": {
            "hp": 70,
            "at": 62,
            "df": 67,
            "sa": 55,
            "sd": 55,
            "sp": 56
        },
        "abilities": [
            "Friend Guard",
            "Hustle",
            "Parental Bond"
        ],
        "innates": [
            "Poison Point",
            "Rivalry",
            "Anticipation"
        ],
        "weightkg": 200,
        "types": [
            "Poison"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Nidoqueen": {
        "id": 31,
        "bs": {
            "hp": 90,
            "at": 75,
            "df": 87,
            "sa": 85,
            "sd": 76,
            "sp": 92
        },
        "abilities": [
            "Battle Armor",
            "Parental Bond",
            "Sheer Force"
        ],
        "innates": [
            "Poison Point",
            "Thick Fat",
            "Queenly Majesty"
        ],
        "weightkg": 600,
        "types": [
            "Poison",
            "Ground"
        ],
        "genderR": 254,
        "otherFormes": [
            "Nidoqueen Mega"
        ]
    },
    "Nidoqueen Mega": {
        "id": 31,
        "bs": {
            "hp": 90,
            "at": 82,
            "df": 112,
            "sa": 125,
            "sd": 110,
            "sp": 86
        },
        "abilities": [
            "Queenly Majesty",
            "Friend Guard",
            "Sheer Force"
        ],
        "innates": [
            "Queen's Mourning",
            "Battle Armor",
            "Blight Scale"
        ],
        "weightkg": 600,
        "types": [
            "Poison",
            "Ground"
        ],
        "genderR": 254,
        "otherFormes": [
            "Nidoqueen"
        ]
    },
    "Nidoran♂": {
        "id": 32,
        "bs": {
            "hp": 46,
            "at": 57,
            "df": 40,
            "sa": 40,
            "sd": 40,
            "sp": 50
        },
        "abilities": [
            "Growing Tooth",
            "Hustle",
            "Anticipation"
        ],
        "innates": [
            "Poison Point",
            "Rivalry",
            "Run Away"
        ],
        "weightkg": 90,
        "types": [
            "Poison"
        ],
        "genderR": 0
    },
    "Nidorino": {
        "id": 33,
        "bs": {
            "hp": 61,
            "at": 72,
            "df": 57,
            "sa": 55,
            "sd": 55,
            "sp": 65
        },
        "abilities": [
            "Violent Rush",
            "Hustle",
            "Hyper Aggressive"
        ],
        "innates": [
            "Poison Point",
            "Rivalry",
            "Mighty Horn"
        ],
        "weightkg": 195,
        "types": [
            "Poison"
        ],
        "genderR": 0,
        "nfe": true
    },
    "Nidoking": {
        "id": 34,
        "bs": {
            "hp": 81,
            "at": 102,
            "df": 77,
            "sa": 85,
            "sd": 75,
            "sp": 85
        },
        "abilities": [
            "Sheer Force",
            "Rivalry",
            "Rampage"
        ],
        "innates": [
            "Poison Point",
            "Mighty Horn",
            "Intoxicate"
        ],
        "weightkg": 620,
        "types": [
            "Poison",
            "Ground"
        ],
        "genderR": 0,
        "otherFormes": [
            "Nidoking Mega"
        ]
    },
    "Nidoking Mega": {
        "id": 34,
        "bs": {
            "hp": 81,
            "at": 142,
            "df": 92,
            "sa": 85,
            "sd": 95,
            "sp": 110
        },
        "abilities": [
            "Sheer Force",
            "Armor Tail",
            "Egoist"
        ],
        "innates": [
            "King's Wrath",
            "Fearmonger",
            "Venom Crown"
        ],
        "weightkg": 620,
        "types": [
            "Poison",
            "Ground"
        ],
        "genderR": 0,
        "otherFormes": [
            "Nidoking"
        ]
    },
    "Vulpix": {
        "id": 37,
        "bs": {
            "hp": 38,
            "at": 41,
            "df": 40,
            "sa": 60,
            "sd": 65,
            "sp": 65
        },
        "abilities": [
            "Flash Fire",
            "Pyromancy",
            "Drought"
        ],
        "innates": [
            "Quick Feet",
            "Immolate",
            "Flaming Soul"
        ],
        "weightkg": 99,
        "types": [
            "Fire",
            "Fairy"
        ],
        "genderR": 190,
        "otherFormes": [
            "Vulpix Alolan"
        ],
        "nfe": true
    },
    "Ninetales": {
        "id": 38,
        "bs": {
            "hp": 73,
            "at": 76,
            "df": 75,
            "sa": 91,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Flaming Soul",
            "Fairy Aura",
            "Drought"
        ],
        "innates": [
            "Pyromancy",
            "Flash Fire",
            "Queenly Majesty"
        ],
        "weightkg": 199,
        "types": [
            "Fire",
            "Fairy"
        ],
        "genderR": 190,
        "otherFormes": [
            "Ninetales Alolan"
        ]
    },
    "Vulpix Alolan": {
        "id": 37,
        "bs": {
            "hp": 38,
            "at": 41,
            "df": 40,
            "sa": 60,
            "sd": 65,
            "sp": 65
        },
        "abilities": [
            "Ice Dew",
            "Ice Body",
            "Snow Warning"
        ],
        "innates": [
            "Quick Feet",
            "Refrigerate",
            "Frozen Soul"
        ],
        "weightkg": 99,
        "types": [
            "Ice",
            "Fairy"
        ],
        "genderR": 190,
        "otherFormes": [
            "Vulpix"
        ],
        "nfe": true
    },
    "Ninetales Alolan": {
        "id": 38,
        "bs": {
            "hp": 73,
            "at": 67,
            "df": 75,
            "sa": 91,
            "sd": 100,
            "sp": 109
        },
        "abilities": [
            "Frozen Soul",
            "North Wind",
            "Snow Warning"
        ],
        "innates": [
            "Serene Grace",
            "Ice Dew",
            "Queenly Majesty"
        ],
        "weightkg": 199,
        "types": [
            "Ice",
            "Fairy"
        ],
        "genderR": 190,
        "otherFormes": [
            "Ninetales"
        ]
    },
    "Jigglypuff": {
        "id": 39,
        "bs": {
            "hp": 105,
            "at": 45,
            "df": 30,
            "sa": 80,
            "sd": 43,
            "sp": 20
        },
        "abilities": [
            "Lullaby",
            "Competitive",
            "Magic Guard"
        ],
        "innates": [
            "Cute Charm",
            "Inflatable",
            "Let's Roll"
        ],
        "weightkg": 55,
        "types": [
            "Normal",
            "Fairy"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Wigglytuff": {
        "id": 40,
        "bs": {
            "hp": 120,
            "at": 70,
            "df": 45,
            "sa": 113,
            "sd": 80,
            "sp": 45
        },
        "abilities": [
            "Lullaby",
            "Competitive",
            "Magic Guard"
        ],
        "innates": [
            "Cute Charm",
            "Inflatable",
            "Fur Coat"
        ],
        "weightkg": 120,
        "types": [
            "Normal",
            "Fairy"
        ],
        "genderR": 190
    },
    "Wigglytuff Mega Y": {
        "id": 40,
        "bs": {
            "hp": 120,
            "at": 90,
            "df": 55,
            "sa": 140,
            "sd": 108,
            "sp": 60
        },
        "abilities": [
            "Combustion",
            "Tipping Point",
            "Magic Guard"
        ],
        "innates": [
            "Balloon Bomb",
            "Immolate",
            "Fur Coat"
        ],
        "weightkg": 120,
        "types": [
            "Fire",
            "Fairy"
        ],
        "genderR": 190
    },
    "Wigglytuff Mega X": {
        "id": 40,
        "bs": {
            "hp": 120,
            "at": 133,
            "df": 45,
            "sa": 100,
            "sd": 40,
            "sp": 135
        },
        "abilities": [
            "Violent Rush",
            "Opportunist",
            "Scrappy"
        ],
        "innates": [
            "Balloon Blitz",
            "Combat Specialist",
            "Defiant"
        ],
        "weightkg": 120,
        "types": [
            "Fighting",
            "Fairy"
        ],
        "genderR": 190
    },
    "Wigglytuff Apex": {
        "id": 40,
        "bs": {
            "hp": 120,
            "at": 70,
            "df": 55,
            "sa": 130,
            "sd": 105,
            "sp": 55
        },
        "abilities": [
            "Friend Guard",
            "Competitive",
            "Magic Guard"
        ],
        "innates": [
            "Mystic Power",
            "Fur Coat",
            "Inflatable"
        ],
        "weightkg": 120,
        "types": [
            "Normal",
            "Fairy"
        ],
        "genderR": 63
    },
    "Wigglytuff Primal": {
        "id": 40,
        "bs": {
            "hp": 120,
            "at": 90,
            "df": 65,
            "sa": 155,
            "sd": 115,
            "sp": 90
        },
        "abilities": [
            "Apple Enlightenment",
            "Apple Enlightenment",
            "Apple Enlightenment"
        ],
        "innates": [
            "Arcane Force",
            "Soul-Heart",
            "Competitive"
        ],
        "weightkg": 120,
        "types": [
            "Normal",
            "Fairy"
        ],
        "genderR": 63
    },
    "Zubat": {
        "id": 41,
        "bs": {
            "hp": 40,
            "at": 45,
            "df": 35,
            "sa": 40,
            "sd": 40,
            "sp": 55
        },
        "abilities": [
            "Inner Focus",
            "Infiltrator",
            "Opportunist"
        ],
        "innates": [
            "Sniper",
            "Nocturnal",
            "Mountaineer"
        ],
        "weightkg": 75,
        "types": [
            "Poison",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Golbat": {
        "id": 42,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 70,
            "sa": 75,
            "sd": 75,
            "sp": 90
        },
        "abilities": [
            "Mountaineer",
            "Scavenger",
            "Opportunist"
        ],
        "innates": [
            "Sniper",
            "Nocturnal",
            "Infiltrator"
        ],
        "weightkg": 550,
        "types": [
            "Poison",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Crobat": {
        "id": 169,
        "bs": {
            "hp": 85,
            "at": 90,
            "df": 80,
            "sa": 80,
            "sd": 80,
            "sp": 130
        },
        "abilities": [
            "Mountaineer",
            "Momentum",
            "Tinted Lens"
        ],
        "innates": [
            "Scare",
            "Nocturnal",
            "Infiltrator"
        ],
        "weightkg": 750,
        "types": [
            "Poison",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Crobat Mega"
        ]
    },
    "Crobat Mega": {
        "id": 169,
        "bs": {
            "hp": 85,
            "at": 140,
            "df": 70,
            "sa": 120,
            "sd": 70,
            "sp": 160
        },
        "abilities": [
            "Shadow Shield",
            "Tinted Lens",
            "Amplifier"
        ],
        "innates": [
            "Phantom",
            "Spectral Shroud",
            "Nosferatu"
        ],
        "weightkg": 750,
        "types": [
            "Poison",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Crobat"
        ]
    },
    "Oddish": {
        "id": 43,
        "bs": {
            "hp": 45,
            "at": 50,
            "df": 55,
            "sa": 85,
            "sd": 75,
            "sp": 30
        },
        "abilities": [
            "Poison Absorb",
            "Chloroplast",
            "Grassy Surge"
        ],
        "innates": [
            "Regenerator",
            "Grass Pelt",
            "Natural Cure"
        ],
        "weightkg": 54,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Gloom": {
        "id": 44,
        "bs": {
            "hp": 60,
            "at": 65,
            "df": 70,
            "sa": 95,
            "sd": 85,
            "sp": 40
        },
        "abilities": [
            "Poison Absorb",
            "Chloroplast",
            "Grassy Surge"
        ],
        "innates": [
            "Regenerator",
            "Grass Pelt",
            "Natural Cure"
        ],
        "weightkg": 86,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Vileplume": {
        "id": 45,
        "bs": {
            "hp": 90,
            "at": 60,
            "df": 95,
            "sa": 120,
            "sd": 100,
            "sp": 50
        },
        "abilities": [
            "Poison Absorb",
            "Chloroplast",
            "Grassy Surge"
        ],
        "innates": [
            "Regenerator",
            "Grass Pelt",
            "Natural Cure"
        ],
        "weightkg": 186,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127
    },
    "Paras": {
        "id": 46,
        "bs": {
            "hp": 45,
            "at": 75,
            "df": 65,
            "sa": 50,
            "sd": 90,
            "sp": 25
        },
        "abilities": [
            "Fungal Infection",
            "Opportunist",
            "Hyper Aggressive"
        ],
        "innates": [
            "Effect Spore",
            "Overcoat",
            "Dry Skin"
        ],
        "weightkg": 54,
        "types": [
            "Bug",
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Parasect": {
        "id": 47,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 95,
            "sa": 70,
            "sd": 140,
            "sp": 30
        },
        "abilities": [
            "Self Sufficient",
            "Shadow Tag",
            "Soul Eater"
        ],
        "innates": [
            "Parasitic Spores",
            "Phantom",
            "Opportunist"
        ],
        "weightkg": 295,
        "types": [
            "Bug",
            "Grass"
        ],
        "genderR": 127
    },
    "Venonat": {
        "id": 48,
        "bs": {
            "hp": 60,
            "at": 55,
            "df": 50,
            "sa": 55,
            "sd": 55,
            "sp": 55
        },
        "abilities": [
            "Tinted Lens",
            "Toxic Debris",
            "Poison Absorb"
        ],
        "innates": [
            "Compound Eyes",
            "Nocturnal",
            "Magical Dust"
        ],
        "weightkg": 300,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Venomoth": {
        "id": 49,
        "bs": {
            "hp": 70,
            "at": 65,
            "df": 60,
            "sa": 85,
            "sd": 75,
            "sp": 100
        },
        "abilities": [
            "Tinted Lens",
            "Wonder Skin",
            "Magic Guard"
        ],
        "innates": [
            "Compound Eyes",
            "Majestic Moth",
            "Levitate"
        ],
        "weightkg": 125,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127
    },
    "Diglett": {
        "id": 50,
        "bs": {
            "hp": 10,
            "at": 55,
            "df": 25,
            "sa": 35,
            "sd": 45,
            "sp": 95
        },
        "abilities": [
            "Sand Rush",
            "Arena Trap",
            "Sand Force"
        ],
        "innates": [
            "Field Explorer",
            "Earthbound",
            "Speed Force"
        ],
        "weightkg": 8,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Diglett Alolan"
        ],
        "nfe": true
    },
    "Dugtrio": {
        "id": 51,
        "bs": {
            "hp": 35,
            "at": 100,
            "df": 50,
            "sa": 50,
            "sd": 70,
            "sp": 120
        },
        "abilities": [
            "Sand Rush",
            "Arena Trap",
            "Earthbound"
        ],
        "innates": [
            "Multi Headed",
            "Sand Force",
            "Speed Force"
        ],
        "weightkg": 333,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Dugtrio Alolan"
        ]
    },
    "Diglett Alolan": {
        "id": 50,
        "bs": {
            "hp": 10,
            "at": 55,
            "df": 30,
            "sa": 35,
            "sd": 45,
            "sp": 90
        },
        "abilities": [
            "Sand Rush",
            "Arena Trap",
            "Earth Eater"
        ],
        "innates": [
            "Tangling Hair",
            "Steelworker",
            "Ambush"
        ],
        "weightkg": 8,
        "types": [
            "Ground",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Diglett"
        ],
        "nfe": true
    },
    "Dugtrio Alolan": {
        "id": 51,
        "bs": {
            "hp": 35,
            "at": 100,
            "df": 60,
            "sa": 50,
            "sd": 70,
            "sp": 110
        },
        "abilities": [
            "Sand Rush",
            "Arena Trap",
            "Steelworker"
        ],
        "innates": [
            "Multi Headed",
            "Sand Force",
            "Speed Force"
        ],
        "weightkg": 333,
        "types": [
            "Ground",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Dugtrio"
        ]
    },
    "Meowth": {
        "id": 52,
        "bs": {
            "hp": 40,
            "at": 55,
            "df": 35,
            "sa": 65,
            "sd": 40,
            "sp": 90
        },
        "abilities": [
            "Sniper",
            "Limber",
            "Prankster"
        ],
        "innates": [
            "Perfectionist",
            "Technician",
            "Opportunist"
        ],
        "weightkg": 42,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Meowth Alolan",
            "Meowth Galarian"
        ],
        "nfe": true
    },
    "Persian": {
        "id": 53,
        "bs": {
            "hp": 65,
            "at": 85,
            "df": 60,
            "sa": 105,
            "sd": 65,
            "sp": 115
        },
        "abilities": [
            "Perfectionist",
            "Hubris",
            "Skill Link"
        ],
        "innates": [
            "Sniper",
            "Technician",
            "Opportunist"
        ],
        "weightkg": 320,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Persian Alolan"
        ]
    },
    "Meowth Alolan": {
        "id": 52,
        "bs": {
            "hp": 40,
            "at": 45,
            "df": 35,
            "sa": 75,
            "sd": 40,
            "sp": 90
        },
        "abilities": [
            "Pickpocket",
            "Opportunist",
            "Prankster"
        ],
        "innates": [
            "Cheap Tactics",
            "Coward",
            "Perfectionist"
        ],
        "weightkg": 42,
        "types": [
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Meowth"
        ],
        "nfe": true
    },
    "Persian Alolan": {
        "id": 53,
        "bs": {
            "hp": 65,
            "at": 75,
            "df": 70,
            "sa": 105,
            "sd": 65,
            "sp": 115
        },
        "abilities": [
            "Cheap Tactics",
            "Opportunist",
            "Prankster"
        ],
        "innates": [
            "Fur Coat",
            "Coward",
            "Perfectionist"
        ],
        "weightkg": 320,
        "types": [
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Persian"
        ]
    },
    "Meowth Galarian": {
        "id": 52,
        "bs": {
            "hp": 50,
            "at": 75,
            "df": 55,
            "sa": 65,
            "sd": 40,
            "sp": 40
        },
        "abilities": [
            "Sniper",
            "Rough Skin",
            "Unnerve"
        ],
        "innates": [
            "Tough Claws",
            "Opportunist",
            "Perfectionist"
        ],
        "weightkg": 42,
        "types": [
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Meowth"
        ],
        "nfe": true
    },
    "Meowth Partner": {
        "id": 52,
        "bs": {
            "hp": 50,
            "at": 90,
            "df": 45,
            "sa": 75,
            "sd": 50,
            "sp": 125
        },
        "abilities": [
            "Opportunist",
            "Equinox",
            "Skill Link"
        ],
        "innates": [
            "Cheap Tactics",
            "Scrappy",
            "Super Luck"
        ],
        "weightkg": 42,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Meowth Mega": {
        "id": 52,
        "bs": {
            "hp": 50,
            "at": 140,
            "df": 75,
            "sa": 85,
            "sd": 60,
            "sp": 125
        },
        "abilities": [
            "Good As Gold",
            "Higher Rank",
            "Scrappy"
        ],
        "innates": [
            "On the Prowl",
            "Mystic Power",
            "Feline Prowess"
        ],
        "weightkg": 42,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Psyduck": {
        "id": 54,
        "bs": {
            "hp": 50,
            "at": 52,
            "df": 48,
            "sa": 75,
            "sd": 50,
            "sp": 55
        },
        "abilities": [
            "Cloud Nine",
            "Damp",
            "Drizzle"
        ],
        "innates": [
            "Weather Control",
            "Psychic Mind",
            "Insomnia"
        ],
        "weightkg": 196,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Psyduck Redux": {
        "id": 54,
        "bs": {
            "hp": 50,
            "at": 75,
            "df": 43,
            "sa": 52,
            "sd": 45,
            "sp": 65
        },
        "abilities": [
            "Scare",
            "Low Blow",
            "Intimidate"
        ],
        "innates": [
            "Fur Coat",
            "Analytic",
            "Nocturnal"
        ],
        "weightkg": 196,
        "types": [
            "Dark"
        ],
        "genderR": 127
    },
    "Golduck": {
        "id": 55,
        "bs": {
            "hp": 80,
            "at": 82,
            "df": 78,
            "sa": 115,
            "sd": 80,
            "sp": 85
        },
        "abilities": [
            "Cloud Nine",
            "Sage Power",
            "Drizzle"
        ],
        "innates": [
            "Weather Control",
            "Psychic Mind",
            "Swift Swim"
        ],
        "weightkg": 766,
        "types": [
            "Water",
            "Psychic"
        ],
        "genderR": 127
    },
    "Mankey": {
        "id": 56,
        "bs": {
            "hp": 40,
            "at": 80,
            "df": 35,
            "sa": 35,
            "sd": 45,
            "sp": 70
        },
        "abilities": [
            "Moxie",
            "Gorilla Tactics",
            "No Guard"
        ],
        "innates": [
            "Fighter",
            "Anger Point",
            "Hyper Aggressive"
        ],
        "weightkg": 280,
        "types": [
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Primeape": {
        "id": 57,
        "bs": {
            "hp": 65,
            "at": 105,
            "df": 60,
            "sa": 60,
            "sd": 70,
            "sp": 95
        },
        "abilities": [
            "Moxie",
            "Gorilla Tactics",
            "No Guard"
        ],
        "innates": [
            "Violent Rush",
            "Anger Point",
            "Hyper Aggressive"
        ],
        "weightkg": 320,
        "types": [
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Growlithe": {
        "id": 58,
        "bs": {
            "hp": 55,
            "at": 70,
            "df": 50,
            "sa": 70,
            "sd": 45,
            "sp": 60
        },
        "abilities": [
            "Intimidate",
            "Strong Jaw",
            "Immolate"
        ],
        "innates": [
            "Guard Dog",
            "Flash Fire",
            "Fluffy"
        ],
        "weightkg": 190,
        "types": [
            "Fire"
        ],
        "genderR": 63,
        "otherFormes": [
            "Growlithe Redux",
            "Growlithe Hisuian"
        ],
        "nfe": true
    },
    "Arcanine": {
        "id": 59,
        "bs": {
            "hp": 90,
            "at": 125,
            "df": 80,
            "sa": 115,
            "sd": 80,
            "sp": 110
        },
        "abilities": [
            "Intimidate",
            "Discipline",
            "Immolate"
        ],
        "innates": [
            "Guard Dog",
            "Flash Fire",
            "Predator"
        ],
        "weightkg": 1550,
        "types": [
            "Fire"
        ],
        "genderR": 63,
        "otherFormes": [
            "Arcanine Mega Redux"
        ]
    },
    "Growlithe Redux": {
        "id": 58,
        "bs": {
            "hp": 55,
            "at": 60,
            "df": 65,
            "sa": 50,
            "sd": 60,
            "sp": 60
        },
        "abilities": [
            "Scare",
            "Fertilize",
            "Tough Claws"
        ],
        "innates": [
            "Raw Wood",
            "Stench",
            "Flash Fire"
        ],
        "weightkg": 190,
        "types": [
            "Fire",
            "Grass"
        ],
        "genderR": 63,
        "otherFormes": [
            "Growlithe"
        ],
        "nfe": true
    },
    "Arcanine Redux": {
        "id": 59,
        "bs": {
            "hp": 90,
            "at": 115,
            "df": 90,
            "sa": 105,
            "sd": 90,
            "sp": 110
        },
        "abilities": [
            "Scare",
            "Fertilize",
            "Tough Claws"
        ],
        "innates": [
            "Raw Wood",
            "Stench",
            "Flash Fire"
        ],
        "weightkg": 1550,
        "types": [
            "Fire",
            "Grass"
        ],
        "genderR": 63
    },
    "Arcanine Mega": {
        "id": 59,
        "bs": {
            "hp": 90,
            "at": 145,
            "df": 100,
            "sa": 135,
            "sd": 100,
            "sp": 130
        },
        "abilities": [
            "Tough Claws",
            "Tough Claws",
            "Tough Claws"
        ],
        "innates": [
            "Guard Dog",
            "Flame Coat",
            "Immolate"
        ],
        "weightkg": 1550,
        "types": [
            "Fire"
        ],
        "genderR": 63
    },
    "Growlithe Hisuian": {
        "id": 58,
        "bs": {
            "hp": 60,
            "at": 75,
            "df": 45,
            "sa": 65,
            "sd": 50,
            "sp": 55
        },
        "abilities": [
            "Rock Head",
            "Intimidate",
            "Mineralize"
        ],
        "innates": [
            "Fluffy",
            "Predator",
            "Violent Rush"
        ],
        "weightkg": 190,
        "types": [
            "Fire",
            "Rock"
        ],
        "genderR": 63,
        "otherFormes": [
            "Growlithe"
        ],
        "nfe": true
    },
    "Arcanine Hisuian": {
        "id": 59,
        "bs": {
            "hp": 90,
            "at": 130,
            "df": 90,
            "sa": 80,
            "sd": 90,
            "sp": 120
        },
        "abilities": [
            "Rock Head",
            "Intimidate",
            "Mineralize"
        ],
        "innates": [
            "Reckless",
            "Predator",
            "Violent Rush"
        ],
        "weightkg": 1550,
        "types": [
            "Fire",
            "Rock"
        ],
        "genderR": 63,
        "otherFormes": [
            "Dodrio"
        ]
    },
    "Poliwag": {
        "id": 60,
        "bs": {
            "hp": 50,
            "at": 60,
            "df": 40,
            "sa": 50,
            "sd": 40,
            "sp": 90
        },
        "abilities": [
            "Hydrate",
            "Damp",
            "Unaware"
        ],
        "innates": [
            "Hypnotist",
            "Swift Swim",
            "Hydration"
        ],
        "weightkg": 124,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Poliwhirl": {
        "id": 61,
        "bs": {
            "hp": 75,
            "at": 75,
            "df": 65,
            "sa": 60,
            "sd": 50,
            "sp": 90
        },
        "abilities": [
            "Hydration",
            "Swift Swim",
            "Damp"
        ],
        "innates": [
            "Hypnotist",
            "Hydrate",
            "Water Absorb"
        ],
        "weightkg": 200,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Poliwrath": {
        "id": 62,
        "bs": {
            "hp": 90,
            "at": 115,
            "df": 95,
            "sa": 75,
            "sd": 90,
            "sp": 70
        },
        "abilities": [
            "Iron Fist",
            "Swift Swim",
            "Power Fists"
        ],
        "innates": [
            "Hypnotist",
            "Precise Fist",
            "Water Absorb"
        ],
        "weightkg": 540,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 127
    },
    "Abra": {
        "id": 63,
        "bs": {
            "hp": 25,
            "at": 20,
            "df": 15,
            "sa": 105,
            "sd": 55,
            "sp": 90
        },
        "abilities": [
            "Mystic Power",
            "Trace",
            "Hypnotist"
        ],
        "innates": [
            "Psychic Mind",
            "Inner Focus",
            "Magic Guard"
        ],
        "weightkg": 195,
        "types": [
            "Psychic"
        ],
        "genderR": 63,
        "otherFormes": [
            "Abra Redux"
        ],
        "nfe": true
    },
    "Kadabra": {
        "id": 64,
        "bs": {
            "hp": 40,
            "at": 35,
            "df": 30,
            "sa": 120,
            "sd": 70,
            "sp": 105
        },
        "abilities": [
            "Mystic Power",
            "Trace",
            "Hypnotist"
        ],
        "innates": [
            "Psychic Mind",
            "Inner Focus",
            "Magic Guard"
        ],
        "weightkg": 565,
        "types": [
            "Psychic"
        ],
        "genderR": 63,
        "otherFormes": [
            "Kadabra Redux"
        ],
        "nfe": true
    },
    "Alakazam": {
        "id": 65,
        "bs": {
            "hp": 55,
            "at": 50,
            "df": 45,
            "sa": 135,
            "sd": 95,
            "sp": 120
        },
        "abilities": [
            "Mystic Power",
            "Trace",
            "Telekinetic"
        ],
        "innates": [
            "Psychic Mind",
            "Inner Focus",
            "Magic Guard"
        ],
        "weightkg": 480,
        "types": [
            "Psychic"
        ],
        "genderR": 63,
        "otherFormes": [
            "Alakazam Mega Redux",
            "Alakazam Redux",
            "Alakazam Mega"
        ]
    },
    "Alakazam Mega": {
        "id": 65,
        "bs": {
            "hp": 55,
            "at": 50,
            "df": 65,
            "sa": 175,
            "sd": 105,
            "sp": 150
        },
        "abilities": [
            "Mystic Power",
            "Mystic Power",
            "Mystic Power"
        ],
        "innates": [
            "Psychic Mind",
            "Psychic Surge",
            "Magic Guard"
        ],
        "weightkg": 480,
        "types": [
            "Psychic"
        ],
        "genderR": 63,
        "otherFormes": [
            "Alakazam"
        ]
    },
    "Abra Redux": {
        "id": 63,
        "bs": {
            "hp": 25,
            "at": 20,
            "df": 55,
            "sa": 105,
            "sd": 15,
            "sp": 90
        },
        "abilities": [
            "Intimidate",
            "Scare",
            "Merciless"
        ],
        "innates": [
            "Cheap Tactics",
            "Nocturnal",
            "Bad Luck"
        ],
        "weightkg": 195,
        "types": [
            "Dark"
        ],
        "genderR": 63,
        "otherFormes": [
            "Abra"
        ],
        "nfe": true
    },
    "Kadabra Redux": {
        "id": 64,
        "bs": {
            "hp": 40,
            "at": 120,
            "df": 105,
            "sa": 35,
            "sd": 70,
            "sp": 30
        },
        "abilities": [
            "Exploit Weakness",
            "Intimidate",
            "Long Reach"
        ],
        "innates": [
            "Cheap Tactics",
            "Super Slammer",
            "Nocturnal"
        ],
        "weightkg": 565,
        "types": [
            "Dark",
            "Fighting"
        ],
        "genderR": 63,
        "otherFormes": [
            "Kadabra"
        ],
        "nfe": true
    },
    "Alakazam Redux": {
        "id": 65,
        "bs": {
            "hp": 55,
            "at": 50,
            "df": 95,
            "sa": 135,
            "sd": 45,
            "sp": 120
        },
        "abilities": [
            "Minion Control",
            "Exploit Weakness",
            "Intimidate"
        ],
        "innates": [
            "Cheap Tactics",
            "Mystic Power",
            "Nocturnal"
        ],
        "weightkg": 480,
        "types": [
            "Dark"
        ],
        "genderR": 63,
        "otherFormes": [
            "Alakazam"
        ]
    },
    "Alakazam Mega Redux": {
        "id": 65,
        "bs": {
            "hp": 55,
            "at": 50,
            "df": 105,
            "sa": 175,
            "sd": 65,
            "sp": 150
        },
        "abilities": [
            "Minion Control",
            "Exploit Weakness",
            "Intimidate"
        ],
        "innates": [
            "Cheap Tactics",
            "Mystic Power",
            "Nocturnal"
        ],
        "weightkg": 480,
        "types": [
            "Dark"
        ],
        "genderR": 63,
        "otherFormes": [
            "Alakazam"
        ]
    },
    "Machop": {
        "id": 66,
        "bs": {
            "hp": 70,
            "at": 80,
            "df": 50,
            "sa": 35,
            "sd": 35,
            "sp": 35
        },
        "abilities": [
            "Iron Fist",
            "Guts",
            "Sheer Force"
        ],
        "innates": [
            "No Guard",
            "Quick Feet",
            "Fighter"
        ],
        "weightkg": 195,
        "types": [
            "Fighting"
        ],
        "genderR": 63,
        "otherFormes": [
            "Machop Redux"
        ],
        "nfe": true
    },
    "Machoke": {
        "id": 67,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 70,
            "sa": 50,
            "sd": 60,
            "sp": 45
        },
        "abilities": [
            "Iron Fist",
            "Power Fists",
            "Sheer Force"
        ],
        "innates": [
            "No Guard",
            "Steadfast",
            "Guts"
        ],
        "weightkg": 705,
        "types": [
            "Fighting"
        ],
        "genderR": 63,
        "otherFormes": [
            "Machoke Redux"
        ],
        "nfe": true
    },
    "Machamp": {
        "id": 68,
        "bs": {
            "hp": 90,
            "at": 130,
            "df": 80,
            "sa": 65,
            "sd": 85,
            "sp": 55
        },
        "abilities": [
            "Guts",
            "Power Fists",
            "Sheer Force"
        ],
        "innates": [
            "No Guard",
            "Iron Fist",
            "Precise Fist"
        ],
        "weightkg": 1300,
        "types": [
            "Fighting"
        ],
        "genderR": 63,
        "otherFormes": [
            "Machamp Mega",
            "Machamp Redux",
            "Machamp Mega Redux"
        ]
    },
    "Machamp Mega": {
        "id": 68,
        "bs": {
            "hp": 90,
            "at": 170,
            "df": 100,
            "sa": 65,
            "sd": 105,
            "sp": 75
        },
        "abilities": [
            "Raging Boxer",
            "Adrenaline Rush",
            "Sheer Force"
        ],
        "innates": [
            "No Guard",
            "Iron Fist",
            "Anger Point"
        ],
        "weightkg": 1300,
        "types": [
            "Fighting"
        ],
        "genderR": 63,
        "otherFormes": [
            "Machamp"
        ]
    },
    "Machop Redux": {
        "id": 66,
        "bs": {
            "hp": 50,
            "at": 70,
            "df": 70,
            "sa": 15,
            "sd": 65,
            "sp": 35
        },
        "abilities": [
            "Overwhelm",
            "Rough Skin",
            "Juggernaut"
        ],
        "innates": [
            "No Guard",
            "Iron Fist",
            "Guts"
        ],
        "weightkg": 195,
        "types": [
            "Fighting",
            "Dragon"
        ],
        "genderR": 63,
        "otherFormes": [
            "Machop"
        ],
        "nfe": true
    },
    "Machoke Redux": {
        "id": 67,
        "bs": {
            "hp": 60,
            "at": 80,
            "df": 100,
            "sa": 30,
            "sd": 90,
            "sp": 45
        },
        "abilities": [
            "Overwhelm",
            "Rough Skin",
            "Juggernaut"
        ],
        "innates": [
            "No Guard",
            "Iron Fist",
            "Guts"
        ],
        "weightkg": 705,
        "types": [
            "Fighting",
            "Dragon"
        ],
        "genderR": 63,
        "otherFormes": [
            "Machoke"
        ],
        "nfe": true
    },
    "Machamp Redux": {
        "id": 68,
        "bs": {
            "hp": 70,
            "at": 110,
            "df": 110,
            "sa": 45,
            "sd": 115,
            "sp": 55
        },
        "abilities": [
            "Overwhelm",
            "Multiscale",
            "Juggernaut"
        ],
        "innates": [
            "Impenetrable",
            "Iron Fist",
            "Guts"
        ],
        "weightkg": 1300,
        "types": [
            "Fighting",
            "Dragon"
        ],
        "genderR": 63,
        "otherFormes": [
            "Machamp"
        ]
    },
    "Machamp Mega Redux": {
        "id": 68,
        "bs": {
            "hp": 70,
            "at": 130,
            "df": 140,
            "sa": 65,
            "sd": 145,
            "sp": 55
        },
        "abilities": [
            "Raging Boxer",
            "Multiscale",
            "Dragonslayer"
        ],
        "innates": [
            "Brawling Wyvern",
            "Stamina",
            "Power Core"
        ],
        "weightkg": 1300,
        "types": [
            "Fighting",
            "Dragon"
        ],
        "genderR": 63,
        "otherFormes": [
            "Machamp"
        ]
    },
    "Bellsprout": {
        "id": 69,
        "bs": {
            "hp": 70,
            "at": 75,
            "df": 35,
            "sa": 70,
            "sd": 30,
            "sp": 40
        },
        "abilities": [
            "Chloroplast",
            "Solar Power",
            "Ambush"
        ],
        "innates": [
            "Chlorophyll",
            "Gluttony",
            "Harvest"
        ],
        "weightkg": 40,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Weepinbell": {
        "id": 70,
        "bs": {
            "hp": 85,
            "at": 90,
            "df": 50,
            "sa": 85,
            "sd": 45,
            "sp": 55
        },
        "abilities": [
            "Chloroplast",
            "Ambush",
            "Arena Trap"
        ],
        "innates": [
            "Chlorophyll",
            "Gluttony",
            "Corrosion"
        ],
        "weightkg": 64,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Victreebel": {
        "id": 71,
        "bs": {
            "hp": 100,
            "at": 105,
            "df": 65,
            "sa": 105,
            "sd": 70,
            "sp": 70
        },
        "abilities": [
            "Opportunist",
            "Ambush",
            "Arena Trap"
        ],
        "innates": [
            "Big Leaves",
            "Predator",
            "Corrosion"
        ],
        "weightkg": 155,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127
    },
    "Tentacool": {
        "id": 72,
        "bs": {
            "hp": 40,
            "at": 40,
            "df": 35,
            "sa": 50,
            "sd": 100,
            "sp": 70
        },
        "abilities": [
            "Liquid Ooze",
            "Neuroforce",
            "Water Veil"
        ],
        "innates": [
            "Clear Body",
            "Poison Touch",
            "Water Absorb"
        ],
        "weightkg": 455,
        "types": [
            "Water",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Tentacruel": {
        "id": 73,
        "bs": {
            "hp": 80,
            "at": 70,
            "df": 65,
            "sa": 80,
            "sd": 120,
            "sp": 100
        },
        "abilities": [
            "Poison Touch",
            "Neuroforce",
            "Regenerator"
        ],
        "innates": [
            "Clear Body",
            "Merciless",
            "Water Absorb"
        ],
        "weightkg": 550,
        "types": [
            "Water",
            "Poison"
        ],
        "genderR": 127
    },
    "Geodude": {
        "id": 74,
        "bs": {
            "hp": 40,
            "at": 80,
            "df": 100,
            "sa": 30,
            "sd": 30,
            "sp": 20
        },
        "abilities": [
            "Rock Head",
            "Sand Force",
            "Fort Knox"
        ],
        "innates": [
            "Let's Roll",
            "Sturdy",
            "Solid Rock"
        ],
        "weightkg": 200,
        "types": [
            "Rock",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Geodude Alolan"
        ],
        "nfe": true
    },
    "Graveler": {
        "id": 75,
        "bs": {
            "hp": 55,
            "at": 95,
            "df": 115,
            "sa": 45,
            "sd": 45,
            "sp": 35
        },
        "abilities": [
            "Rock Head",
            "Sand Force",
            "Fort Knox"
        ],
        "innates": [
            "Let's Roll",
            "Sturdy",
            "Solid Rock"
        ],
        "weightkg": 1050,
        "types": [
            "Rock",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Graveler Alolan"
        ],
        "nfe": true
    },
    "Golem": {
        "id": 76,
        "bs": {
            "hp": 90,
            "at": 135,
            "df": 130,
            "sa": 55,
            "sd": 65,
            "sp": 45
        },
        "abilities": [
            "Rock Head",
            "Fort Knox",
            "Loose Rocks"
        ],
        "innates": [
            "Let's Roll",
            "Sturdy",
            "Mineralize"
        ],
        "weightkg": 3000,
        "types": [
            "Rock",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Golem Alolan"
        ]
    },
    "Geodude Alolan": {
        "id": 74,
        "bs": {
            "hp": 40,
            "at": 80,
            "df": 75,
            "sa": 30,
            "sd": 40,
            "sp": 35
        },
        "abilities": [
            "Magnet Pull",
            "Galvanize",
            "Fort Knox"
        ],
        "innates": [
            "Let's Roll",
            "Sturdy",
            "Static"
        ],
        "weightkg": 200,
        "types": [
            "Rock",
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Geodude"
        ],
        "nfe": true
    },
    "Graveler Alolan": {
        "id": 75,
        "bs": {
            "hp": 55,
            "at": 95,
            "df": 90,
            "sa": 45,
            "sd": 60,
            "sp": 45
        },
        "abilities": [
            "Magnet Pull",
            "Rock Head",
            "Fort Knox"
        ],
        "innates": [
            "Let's Roll",
            "Sturdy",
            "Galvanize"
        ],
        "weightkg": 1050,
        "types": [
            "Rock",
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Graveler"
        ],
        "nfe": true
    },
    "Golem Alolan": {
        "id": 76,
        "bs": {
            "hp": 90,
            "at": 135,
            "df": 110,
            "sa": 45,
            "sd": 95,
            "sp": 45
        },
        "abilities": [
            "Magnet Pull",
            "Mega Launcher",
            "Fort Knox"
        ],
        "innates": [
            "Ground Shock",
            "Sturdy",
            "Galvanize"
        ],
        "weightkg": 3000,
        "types": [
            "Rock",
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Golem"
        ]
    },
    "Ponyta": {
        "id": 77,
        "bs": {
            "hp": 50,
            "at": 85,
            "df": 55,
            "sa": 65,
            "sd": 65,
            "sp": 90
        },
        "abilities": [
            "Reckless",
            "Turboblaze",
            "Striker"
        ],
        "innates": [
            "Flash Fire",
            "Speed Force",
            "Flame Body"
        ],
        "weightkg": 300,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Ponyta Galarian"
        ],
        "nfe": true
    },
    "Rapidash": {
        "id": 78,
        "bs": {
            "hp": 85,
            "at": 110,
            "df": 70,
            "sa": 75,
            "sd": 80,
            "sp": 120
        },
        "abilities": [
            "Reckless",
            "Turboblaze",
            "Striker"
        ],
        "innates": [
            "Immolate",
            "Speed Force",
            "Flame Body"
        ],
        "weightkg": 950,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Rapidash Galarian"
        ]
    },
    "Rapidash Mega": {
        "id": 78,
        "bs": {
            "hp": 85,
            "at": 130,
            "df": 100,
            "sa": 95,
            "sd": 100,
            "sp": 130
        },
        "abilities": [
            "Reckless",
            "Turboblaze",
            "Mighty Horn"
        ],
        "innates": [
            "Speed Boost",
            "Speed Force",
            "Arc Flash"
        ],
        "weightkg": 950,
        "types": [
            "Fire",
            "Electric"
        ],
        "genderR": 127
    },
    "Ponyta Galarian": {
        "id": 77,
        "bs": {
            "hp": 50,
            "at": 85,
            "df": 55,
            "sa": 65,
            "sd": 65,
            "sp": 90
        },
        "abilities": [
            "Guilt Trip",
            "Pastel Veil",
            "Anticipation"
        ],
        "innates": [
            "Coward",
            "Speed Force",
            "Dazzling"
        ],
        "weightkg": 300,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Ponyta"
        ],
        "nfe": true
    },
    "Rapidash Galarian": {
        "id": 78,
        "bs": {
            "hp": 85,
            "at": 110,
            "df": 70,
            "sa": 75,
            "sd": 80,
            "sp": 120
        },
        "abilities": [
            "Power Edge",
            "Pastel Veil",
            "Pixilate"
        ],
        "innates": [
            "Mighty Horn",
            "Speed Force",
            "Dazzling"
        ],
        "weightkg": 950,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Rapidash"
        ]
    },
    "Rapidash Mega Galarian": {
        "id": 78,
        "bs": {
            "hp": 85,
            "at": 122,
            "df": 100,
            "sa": 90,
            "sd": 95,
            "sp": 148
        },
        "abilities": [
            "Psychic Surge",
            "Pastel Veil",
            "Serene Grace"
        ],
        "innates": [
            "Unicorn",
            "Speed Force",
            "Pixilate"
        ],
        "weightkg": 950,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 127
    },
    "Slowpoke": {
        "id": 79,
        "bs": {
            "hp": 90,
            "at": 65,
            "df": 65,
            "sa": 65,
            "sd": 40,
            "sp": 15
        },
        "abilities": [
            "Regenerator",
            "Water Veil",
            "Damp"
        ],
        "innates": [
            "Oblivious",
            "Own Tempo",
            "Unaware"
        ],
        "weightkg": 360,
        "types": [
            "Water",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slowpoke Galarian"
        ],
        "nfe": true
    },
    "Slowbro": {
        "id": 80,
        "bs": {
            "hp": 95,
            "at": 75,
            "df": 110,
            "sa": 100,
            "sd": 80,
            "sp": 30
        },
        "abilities": [
            "Regenerator",
            "Unaware",
            "Twist. Dimension"
        ],
        "innates": [
            "Oblivious",
            "Natural Cure",
            "Shell Armor"
        ],
        "weightkg": 785,
        "types": [
            "Water",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slowbro Mega",
            "Slowbro Galarian"
        ]
    },
    "Slowking": {
        "id": 199,
        "bs": {
            "hp": 95,
            "at": 75,
            "df": 80,
            "sa": 100,
            "sd": 110,
            "sp": 30
        },
        "abilities": [
            "Regenerator",
            "Unaware",
            "Twist. Dimension"
        ],
        "innates": [
            "Oblivious",
            "Analytic",
            "Shell Armor"
        ],
        "weightkg": 795,
        "types": [
            "Water",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slowking Galarian",
            "Slowking Mega"
        ]
    },
    "Slowbro Mega": {
        "id": 80,
        "bs": {
            "hp": 95,
            "at": 75,
            "df": 180,
            "sa": 130,
            "sd": 80,
            "sp": 30
        },
        "abilities": [
            "Analytic",
            "Unaware",
            "Unaware"
        ],
        "innates": [
            "Regenerator",
            "Armor Tail",
            "Shell Armor"
        ],
        "weightkg": 785,
        "types": [
            "Water",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slowbro"
        ]
    },
    "Slowking Mega": {
        "id": 199,
        "bs": {
            "hp": 95,
            "at": 85,
            "df": 80,
            "sa": 130,
            "sd": 180,
            "sp": 20
        },
        "abilities": [
            "Analytic",
            "Unaware",
            "Unaware"
        ],
        "innates": [
            "Psychic Surge",
            "Gifted Mind",
            "Shell Armor"
        ],
        "weightkg": 795,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slowking"
        ]
    },
    "Slowpoke Galarian": {
        "id": 79,
        "bs": {
            "hp": 90,
            "at": 65,
            "df": 65,
            "sa": 65,
            "sd": 40,
            "sp": 15
        },
        "abilities": [
            "Unaware",
            "Cloud Nine",
            "Regenerator"
        ],
        "innates": [
            "Oblivious",
            "Poison Absorb",
            "Stall"
        ],
        "weightkg": 360,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slowpoke"
        ],
        "nfe": true
    },
    "Slowking Galarian": {
        "id": 199,
        "bs": {
            "hp": 95,
            "at": 65,
            "df": 80,
            "sa": 110,
            "sd": 110,
            "sp": 30
        },
        "abilities": [
            "Rejection",
            "CuriusMedicn",
            "Regenerator"
        ],
        "innates": [
            "Spiteful",
            "Pressure",
            "Permanence"
        ],
        "weightkg": 795,
        "types": [
            "Poison",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slowking"
        ]
    },
    "Slowbro Galarian": {
        "id": 80,
        "bs": {
            "hp": 95,
            "at": 110,
            "df": 90,
            "sa": 110,
            "sd": 65,
            "sp": 20
        },
        "abilities": [
            "Unaware",
            "Mega Launcher",
            "Regenerator"
        ],
        "innates": [
            "Oblivious",
            "Quick Draw",
            "Stall"
        ],
        "weightkg": 785,
        "types": [
            "Poison",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slowbro"
        ]
    },
    "Magnemite": {
        "id": 81,
        "bs": {
            "hp": 25,
            "at": 35,
            "df": 70,
            "sa": 95,
            "sd": 55,
            "sp": 45
        },
        "abilities": [
            "Analytic",
            "Full Metal Body",
            "Download"
        ],
        "innates": [
            "Filter",
            "Sturdy",
            "Magnet Pull"
        ],
        "weightkg": 60,
        "types": [
            "Electric",
            "Steel"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Magneton": {
        "id": 82,
        "bs": {
            "hp": 50,
            "at": 60,
            "df": 95,
            "sa": 120,
            "sd": 70,
            "sp": 70
        },
        "abilities": [
            "Analytic",
            "Full Metal Body",
            "Download"
        ],
        "innates": [
            "Filter",
            "Multi Headed",
            "Magnet Pull"
        ],
        "weightkg": 600,
        "types": [
            "Electric",
            "Steel"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Magnezone": {
        "id": 462,
        "bs": {
            "hp": 70,
            "at": 70,
            "df": 115,
            "sa": 130,
            "sd": 90,
            "sp": 60
        },
        "abilities": [
            "Sighting System",
            "Overcharge",
            "Download"
        ],
        "innates": [
            "Filter",
            "Multi Headed",
            "Magnet Pull"
        ],
        "weightkg": 1800,
        "types": [
            "Electric",
            "Steel"
        ],
        "genderR": 2,
        "otherFormes": [
            "Magnezone Mega"
        ]
    },
    "Magnezone Mega": {
        "id": 462,
        "bs": {
            "hp": 70,
            "at": 75,
            "df": 135,
            "sa": 165,
            "sd": 125,
            "sp": 65
        },
        "abilities": [
            "Electric Burst",
            "Overcharge",
            "Steelworker"
        ],
        "innates": [
            "Electro Surge",
            "Multi Headed",
            "Magnet Pull"
        ],
        "weightkg": 1800,
        "types": [
            "Electric",
            "Steel"
        ],
        "genderR": 2,
        "otherFormes": [
            "Magnezone"
        ]
    },
    "Farfetch'd": {
        "id": 83,
        "bs": {
            "hp": 52,
            "at": 90,
            "df": 55,
            "sa": 58,
            "sd": 62,
            "sp": 100
        },
        "abilities": [
            "Super Luck",
            "Fighting Spirit",
            "Sweeping Edge"
        ],
        "innates": [
            "Hyper Cutter",
            "Field Explorer",
            "Keen Edge"
        ],
        "weightkg": 150,
        "types": [
            "Fighting",
            "Flying"
        ],
        "genderR": 127
    },
    "Farfetchd Galarian": {
        "id": 83,
        "bs": {
            "hp": 52,
            "at": 95,
            "df": 55,
            "sa": 58,
            "sd": 62,
            "sp": 55
        },
        "abilities": [
            "Hyper Cutter",
            "Steadfast",
            "Chlorophyll"
        ],
        "innates": [
            "Scrappy",
            "Sniper",
            "Moxie"
        ],
        "weightkg": 150,
        "types": [
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Farfetchd"
        ],
        "nfe": true
    },
    "Doduo": {
        "id": 84,
        "bs": {
            "hp": 65,
            "at": 85,
            "df": 45,
            "sa": 35,
            "sd": 35,
            "sp": 85
        },
        "abilities": [
            "Speed Force",
            "Moody",
            "Big Pecks"
        ],
        "innates": [
            "Multi Headed",
            "Grounded",
            "Moxie"
        ],
        "weightkg": 392,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Doduo Redux"
        ],
        "nfe": true
    },
    "Dodrio": {
        "id": 85,
        "bs": {
            "hp": 90,
            "at": 110,
            "df": 70,
            "sa": 60,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Vital Spirit",
            "Moody",
            "Big Pecks"
        ],
        "innates": [
            "Multi Headed",
            "Grounded",
            "Moxie"
        ],
        "weightkg": 852,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Dodrio Redux",
            "Arcanine Hisuian"
        ]
    },
    "Doduo Redux": {
        "id": 84,
        "bs": {
            "hp": 65,
            "at": 95,
            "df": 55,
            "sa": 25,
            "sd": 35,
            "sp": 75
        },
        "abilities": [
            "Moody",
            "Big Pecks",
            "Dragon's Maw"
        ],
        "innates": [
            "Solenoglyphs",
            "Half Drake",
            "Multi Headed"
        ],
        "weightkg": 392,
        "types": [
            "Poison",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Doduo"
        ],
        "nfe": true
    },
    "Dodrio Redux": {
        "id": 85,
        "bs": {
            "hp": 90,
            "at": 130,
            "df": 80,
            "sa": 50,
            "sd": 60,
            "sp": 100
        },
        "abilities": [
            "Moody",
            "Big Pecks",
            "Dragon's Maw"
        ],
        "innates": [
            "Solenoglyphs",
            "Half Drake",
            "Multi Headed"
        ],
        "weightkg": 852,
        "types": [
            "Dark",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Dodrio"
        ]
    },
    "Seel": {
        "id": 86,
        "bs": {
            "hp": 75,
            "at": 45,
            "df": 55,
            "sa": 60,
            "sd": 75,
            "sp": 65
        },
        "abilities": [
            "Fur Coat",
            "Ice Scales",
            "Swift Swim"
        ],
        "innates": [
            "Thick Fat",
            "Water Veil",
            "Oblivious"
        ],
        "weightkg": 900,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dewgong": {
        "id": 87,
        "bs": {
            "hp": 90,
            "at": 95,
            "df": 70,
            "sa": 100,
            "sd": 95,
            "sp": 90
        },
        "abilities": [
            "Fur Coat",
            "Ice Scales",
            "Arctic Fur"
        ],
        "innates": [
            "Thick Fat",
            "Water Veil",
            "North Wind"
        ],
        "weightkg": 1200,
        "types": [
            "Water",
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Dewgong Mega"
        ]
    },
    "Dewgong Mega": {
        "id": 87,
        "bs": {
            "hp": 90,
            "at": 130,
            "df": 110,
            "sa": 110,
            "sd": 110,
            "sp": 90
        },
        "abilities": [
            "Hardened Sheath",
            "Lightning Rod",
            "Hydrate"
        ],
        "innates": [
            "Cold Rebound",
            "Water Veil",
            "Arctic Fur"
        ],
        "weightkg": 1200,
        "types": [
            "Water",
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Dewgong"
        ]
    },
    "Kecleong": {
        "id": 87,
        "bs": {
            "hp": 90,
            "at": 90,
            "df": 70,
            "sa": 95,
            "sd": 120,
            "sp": 95
        },
        "abilities": [
            "Prismatic Fur",
            "Prismatic Fur",
            "Prismatic Fur"
        ],
        "innates": [
            "Retribution Blow",
            "Thick Fat",
            "North Wind"
        ],
        "weightkg": 1200,
        "types": [
            "Ice",
            "Normal"
        ],
        "genderR": 127
    },
    "Seel Redux": {
        "id": 86,
        "bs": {
            "hp": 63,
            "at": 66,
            "df": 55,
            "sa": 66,
            "sd": 60,
            "sp": 65
        },
        "abilities": [
            "Slush Rush",
            "Marvel Scale",
            "Draconize"
        ],
        "innates": [
            "Prism Scales",
            "Hyper Aggressive",
            "Unaware"
        ],
        "weightkg": 900,
        "types": [
            "Ice",
            "Dragon"
        ],
        "genderR": 127
    },
    "Dewgong Redux": {
        "id": 87,
        "bs": {
            "hp": 78,
            "at": 120,
            "df": 66,
            "sa": 78,
            "sd": 66,
            "sp": 120
        },
        "abilities": [
            "Slush Rush",
            "Cold Rebound",
            "Mighty Horn"
        ],
        "innates": [
            "Dragon's Maw",
            "Ice Cold Hunter",
            "Speed Force"
        ],
        "weightkg": 1200,
        "types": [
            "Ice",
            "Dragon"
        ],
        "genderR": 127
    },
    "Grimer": {
        "id": 88,
        "bs": {
            "hp": 90,
            "at": 90,
            "df": 50,
            "sa": 40,
            "sd": 50,
            "sp": 25
        },
        "abilities": [
            "Poison Touch",
            "Regenerator",
            "Self Sufficient"
        ],
        "innates": [
            "Liquified",
            "Stench",
            "Sticky Hold"
        ],
        "weightkg": 300,
        "types": [
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Grimer Alolan"
        ],
        "nfe": true
    },
    "Muk": {
        "id": 89,
        "bs": {
            "hp": 105,
            "at": 125,
            "df": 75,
            "sa": 65,
            "sd": 100,
            "sp": 50
        },
        "abilities": [
            "Poison Touch",
            "Regenerator",
            "Self Sufficient"
        ],
        "innates": [
            "Liquified",
            "Corrosion",
            "Sticky Hold"
        ],
        "weightkg": 300,
        "types": [
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Muk Alolan"
        ]
    },
    "Grimer Alolan": {
        "id": 88,
        "bs": {
            "hp": 90,
            "at": 80,
            "df": 55,
            "sa": 40,
            "sd": 55,
            "sp": 25
        },
        "abilities": [
            "Poison Touch",
            "Regenerator",
            "Self Sufficient"
        ],
        "innates": [
            "Liquified",
            "Corrosion",
            "Power of Alchemy"
        ],
        "weightkg": 300,
        "types": [
            "Poison",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Grimer"
        ],
        "nfe": true
    },
    "Muk Alolan": {
        "id": 89,
        "bs": {
            "hp": 105,
            "at": 105,
            "df": 85,
            "sa": 65,
            "sd": 110,
            "sp": 50
        },
        "abilities": [
            "Poison Touch",
            "Regenerator",
            "Self Sufficient"
        ],
        "innates": [
            "Liquified",
            "Corrosion",
            "Power of Alchemy"
        ],
        "weightkg": 300,
        "types": [
            "Poison",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Muk"
        ]
    },
    "Shellder": {
        "id": 90,
        "bs": {
            "hp": 30,
            "at": 65,
            "df": 100,
            "sa": 45,
            "sd": 25,
            "sp": 40
        },
        "abilities": [
            "Impenetrable",
            "Hydrate",
            "Weak Armor"
        ],
        "innates": [
            "Shell Armor",
            "Skill Link",
            "Sturdy"
        ],
        "weightkg": 40,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Cloyster": {
        "id": 91,
        "bs": {
            "hp": 50,
            "at": 95,
            "df": 180,
            "sa": 85,
            "sd": 45,
            "sp": 70
        },
        "abilities": [
            "Impenetrable",
            "Hydrate",
            "Weak Armor"
        ],
        "innates": [
            "Shell Armor",
            "Skill Link",
            "Sturdy"
        ],
        "weightkg": 1325,
        "types": [
            "Water",
            "Ice"
        ],
        "genderR": 127
    },
    "Gastly": {
        "id": 92,
        "bs": {
            "hp": 30,
            "at": 35,
            "df": 30,
            "sa": 100,
            "sd": 35,
            "sp": 80
        },
        "abilities": [
            "Vengeance",
            "Scare",
            "Haunted Spirit"
        ],
        "innates": [
            "Levitate",
            "Ectoplasm",
            "Shallow Grave"
        ],
        "weightkg": 1,
        "types": [
            "Ghost",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Haunter": {
        "id": 93,
        "bs": {
            "hp": 45,
            "at": 75,
            "df": 45,
            "sa": 115,
            "sd": 55,
            "sp": 95
        },
        "abilities": [
            "Vengeance",
            "Scare",
            "Haunted Spirit"
        ],
        "innates": [
            "Levitate",
            "Ectoplasm",
            "Shallow Grave"
        ],
        "weightkg": 1,
        "types": [
            "Ghost",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Gengar": {
        "id": 94,
        "bs": {
            "hp": 65,
            "at": 65,
            "df": 60,
            "sa": 130,
            "sd": 75,
            "sp": 110
        },
        "abilities": [
            "Vengeance",
            "Scare",
            "Haunted Spirit"
        ],
        "innates": [
            "Levitate",
            "Ectoplasm",
            "Shallow Grave"
        ],
        "weightkg": 405,
        "types": [
            "Ghost",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gengar Mega"
        ]
    },
    "Gengar Mega Y": {
        "id": 94,
        "bs": {
            "hp": 65,
            "at": 65,
            "df": 80,
            "sa": 170,
            "sd": 95,
            "sp": 130
        },
        "abilities": [
            "Shadow Tag",
            "Phantom Pain",
            "Infiltrator"
        ],
        "innates": [
            "Vengeance",
            "Ectoplasm",
            "Early Grave"
        ],
        "weightkg": 405,
        "types": [
            "Ghost",
            "Poison"
        ],
        "genderR": 127
    },
    "Gengar Mega X": {
        "id": 94,
        "bs": {
            "hp": 65,
            "at": 155,
            "df": 100,
            "sa": 70,
            "sd": 100,
            "sp": 115
        },
        "abilities": [
            "Shadow Tag",
            "Phantom Pain",
            "Strong Jaw"
        ],
        "innates": [
            "Jumpscare",
            "Soul Eater",
            "Menacing Situation"
        ],
        "weightkg": 405,
        "types": [
            "Ghost",
            "Poison"
        ],
        "genderR": 127
    },
    "Onix": {
        "id": 95,
        "bs": {
            "hp": 65,
            "at": 70,
            "df": 160,
            "sa": 30,
            "sd": 55,
            "sp": 70
        },
        "abilities": [
            "Rock Head",
            "Stamina",
            "Sand Stream"
        ],
        "innates": [
            "Sturdy",
            "Rough Skin",
            "Solid Rock"
        ],
        "weightkg": 2100,
        "types": [
            "Rock",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Steelix": {
        "id": 208,
        "bs": {
            "hp": 75,
            "at": 105,
            "df": 200,
            "sa": 55,
            "sd": 75,
            "sp": 20
        },
        "abilities": [
            "Aftershock",
            "Impenetrable",
            "Coil Up"
        ],
        "innates": [
            "Lead Coat",
            "Self Sufficient",
            "Strong Jaw"
        ],
        "weightkg": 4000,
        "types": [
            "Steel",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Steelix Mega"
        ]
    },
    "Steelix Mega": {
        "id": 208,
        "bs": {
            "hp": 75,
            "at": 145,
            "df": 230,
            "sa": 55,
            "sd": 105,
            "sp": 20
        },
        "abilities": [
            "Primal Armor",
            "Earth Eater",
            "Sand Guard"
        ],
        "innates": [
            "Lead Coat",
            "Impenetrable",
            "Strong Jaw"
        ],
        "weightkg": 4000,
        "types": [
            "Steel",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Steelix"
        ]
    },
    "Drowzee": {
        "id": 96,
        "bs": {
            "hp": 70,
            "at": 48,
            "df": 45,
            "sa": 73,
            "sd": 90,
            "sp": 42
        },
        "abilities": [
            "Magic Bounce",
            "Bad Dreams",
            "Psychic Surge"
        ],
        "innates": [
            "Hypnotist",
            "Dreamcatcher",
            "Insomnia"
        ],
        "weightkg": 324,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Hypno": {
        "id": 97,
        "bs": {
            "hp": 95,
            "at": 73,
            "df": 70,
            "sa": 115,
            "sd": 115,
            "sp": 67
        },
        "abilities": [
            "Magic Bounce",
            "Bad Dreams",
            "Psychic Surge"
        ],
        "innates": [
            "Hypnotist",
            "Dreamcatcher",
            "Insomnia"
        ],
        "weightkg": 756,
        "types": [
            "Psychic"
        ],
        "genderR": 127
    },
    "Krabby": {
        "id": 98,
        "bs": {
            "hp": 55,
            "at": 105,
            "df": 90,
            "sa": 25,
            "sd": 25,
            "sp": 50
        },
        "abilities": [
            "Swift Swim",
            "Hydrate",
            "Technician"
        ],
        "innates": [
            "Shell Armor",
            "Hyper Cutter",
            "Grip Pincer"
        ],
        "weightkg": 65,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Kingler": {
        "id": 99,
        "bs": {
            "hp": 80,
            "at": 130,
            "df": 115,
            "sa": 50,
            "sd": 50,
            "sp": 75
        },
        "abilities": [
            "Swift Swim",
            "Hydrate",
            "Grip Pincer"
        ],
        "innates": [
            "Shell Armor",
            "Hyper Cutter",
            "Technician"
        ],
        "weightkg": 600,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Kingler Mega"
        ]
    },
    "Kingler Mega": {
        "id": 99,
        "bs": {
            "hp": 80,
            "at": 170,
            "df": 135,
            "sa": 50,
            "sd": 80,
            "sp": 85
        },
        "abilities": [
            "Swift Swim",
            "Hyper Aggressive",
            "Grip Pincer"
        ],
        "innates": [
            "Shell Armor",
            "Hyper Cutter",
            "Tough Claws"
        ],
        "weightkg": 600,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Kingler"
        ]
    },
    "Voltorb": {
        "id": 100,
        "bs": {
            "hp": 40,
            "at": 30,
            "df": 50,
            "sa": 55,
            "sd": 55,
            "sp": 100
        },
        "abilities": [
            "Soundproof",
            "Download",
            "Momentum"
        ],
        "innates": [
            "Aftermath",
            "Short Circuit",
            "Volt Absorb"
        ],
        "weightkg": 104,
        "types": [
            "Electric"
        ],
        "genderR": 2,
        "otherFormes": [
            "Voltorb Hisuian"
        ],
        "nfe": true
    },
    "Electrode": {
        "id": 101,
        "bs": {
            "hp": 60,
            "at": 50,
            "df": 70,
            "sa": 100,
            "sd": 80,
            "sp": 150
        },
        "abilities": [
            "Volt Absorb",
            "Download",
            "Momentum"
        ],
        "innates": [
            "Aftermath",
            "Electro Surge",
            "Soundproof"
        ],
        "weightkg": 666,
        "types": [
            "Electric"
        ],
        "genderR": 2,
        "otherFormes": [
            "Electrode Hisuian"
        ]
    },
    "Voltorb Hisuian": {
        "id": 100,
        "bs": {
            "hp": 40,
            "at": 30,
            "df": 50,
            "sa": 55,
            "sd": 55,
            "sp": 100
        },
        "abilities": [
            "Chloroplast",
            "Sap Sipper",
            "Speed Force"
        ],
        "innates": [
            "Impenetrable",
            "Aftermath",
            "Grassy Surge"
        ],
        "weightkg": 104,
        "types": [
            "Electric",
            "Grass"
        ],
        "genderR": 2,
        "otherFormes": [
            "Voltorb"
        ],
        "nfe": true
    },
    "Electrode Hisuian": {
        "id": 101,
        "bs": {
            "hp": 60,
            "at": 50,
            "df": 70,
            "sa": 100,
            "sd": 80,
            "sp": 150
        },
        "abilities": [
            "Terminal Velocity",
            "Sap Sipper",
            "Momentum"
        ],
        "innates": [
            "Impenetrable",
            "Aftermath",
            "Grassy Surge"
        ],
        "weightkg": 666,
        "types": [
            "Electric",
            "Grass"
        ],
        "genderR": 2,
        "otherFormes": [
            "Electrode"
        ]
    },
    "Exeggcute": {
        "id": 102,
        "bs": {
            "hp": 60,
            "at": 40,
            "df": 80,
            "sa": 60,
            "sd": 45,
            "sp": 40
        },
        "abilities": [
            "Magic Bounce",
            "Chloroplast",
            "Natural Cure"
        ],
        "innates": [
            "Solar Power",
            "Chlorophyll",
            "Multi Headed"
        ],
        "weightkg": 25,
        "types": [
            "Grass",
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Exeggutor": {
        "id": 103,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 85,
            "sa": 125,
            "sd": 75,
            "sp": 55
        },
        "abilities": [
            "Magic Bounce",
            "Inversion",
            "Thick Fat"
        ],
        "innates": [
            "Harvest",
            "Chloroplast",
            "Multi Headed"
        ],
        "weightkg": 1200,
        "types": [
            "Grass",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Exeggutor Alolan"
        ]
    },
    "Exeggutor Alolan": {
        "id": 103,
        "bs": {
            "hp": 95,
            "at": 125,
            "df": 85,
            "sa": 105,
            "sd": 75,
            "sp": 45
        },
        "abilities": [
            "Twist. Dimension",
            "Super Slammer",
            "Gluttony"
        ],
        "innates": [
            "Long Reach",
            "Big Leaves",
            "Multi Headed"
        ],
        "weightkg": 1200,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Exeggutor"
        ]
    },
    "Cubone": {
        "id": 104,
        "bs": {
            "hp": 50,
            "at": 50,
            "df": 95,
            "sa": 40,
            "sd": 50,
            "sp": 35
        },
        "abilities": [
            "Technician",
            "Stamina",
            "Skill Link"
        ],
        "innates": [
            "Bone Zone",
            "Battle Armor",
            "Rock Head"
        ],
        "weightkg": 65,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Marowak": {
        "id": 105,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 110,
            "sa": 50,
            "sd": 80,
            "sp": 60
        },
        "abilities": [
            "Technician",
            "Stamina",
            "Skill Link"
        ],
        "innates": [
            "Bone Zone",
            "Battle Armor",
            "Rock Head"
        ],
        "weightkg": 450,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Marowak Alolan"
        ]
    },
    "Marowak Alolan": {
        "id": 105,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 110,
            "sa": 50,
            "sd": 80,
            "sp": 60
        },
        "abilities": [
            "Ill Will",
            "Greater Spirit",
            "Skill Link"
        ],
        "innates": [
            "Bone Zone",
            "Early Grave",
            "Rock Head"
        ],
        "weightkg": 450,
        "types": [
            "Fire",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Marowak"
        ]
    },
    "Lickitung": {
        "id": 108,
        "bs": {
            "hp": 90,
            "at": 65,
            "df": 75,
            "sa": 70,
            "sd": 75,
            "sp": 30
        },
        "abilities": [
            "Simple",
            "Regenerator",
            "Unaware"
        ],
        "innates": [
            "Gluttony",
            "Thick Fat",
            "Own Tempo"
        ],
        "weightkg": 655,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Koffing": {
        "id": 109,
        "bs": {
            "hp": 40,
            "at": 65,
            "df": 95,
            "sa": 70,
            "sd": 45,
            "sp": 35
        },
        "abilities": [
            "Poison Absorb",
            "Neutralizing Gas",
            "Stench"
        ],
        "innates": [
            "Levitate",
            "Aftermath",
            "Inflatable"
        ],
        "weightkg": 10,
        "types": [
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Weezing": {
        "id": 110,
        "bs": {
            "hp": 85,
            "at": 90,
            "df": 120,
            "sa": 95,
            "sd": 70,
            "sp": 60
        },
        "abilities": [
            "Flare Boost",
            "Neutralizing Gas",
            "Stench"
        ],
        "innates": [
            "Levitate",
            "Multi Headed",
            "Inflatable"
        ],
        "weightkg": 95,
        "types": [
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Weezing Galarian"
        ]
    },
    "Weezing Galarian": {
        "id": 110,
        "bs": {
            "hp": 85,
            "at": 70,
            "df": 120,
            "sa": 95,
            "sd": 90,
            "sp": 60
        },
        "abilities": [
            "Pressure",
            "Neutralizing Gas",
            "Misty Surge"
        ],
        "innates": [
            "Levitate",
            "Multi Headed",
            "Poison Absorb"
        ],
        "weightkg": 95,
        "types": [
            "Poison",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Weezing"
        ]
    },
    "Rhyhorn": {
        "id": 111,
        "bs": {
            "hp": 80,
            "at": 85,
            "df": 95,
            "sa": 30,
            "sd": 30,
            "sp": 65
        },
        "abilities": [
            "Lightning Rod",
            "Speed Boost",
            "Sheer Force"
        ],
        "innates": [
            "Solid Rock",
            "Rockhard Will",
            "Rough Skin"
        ],
        "weightkg": 1150,
        "types": [
            "Ground",
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Rhydon": {
        "id": 112,
        "bs": {
            "hp": 105,
            "at": 130,
            "df": 120,
            "sa": 45,
            "sd": 45,
            "sp": 40
        },
        "abilities": [
            "Lightning Rod",
            "Mighty Horn",
            "Earthbound"
        ],
        "innates": [
            "Solid Rock",
            "Rockhard Will",
            "Rough Skin"
        ],
        "weightkg": 1200,
        "types": [
            "Ground",
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Tangela": {
        "id": 114,
        "bs": {
            "hp": 65,
            "at": 55,
            "df": 115,
            "sa": 100,
            "sd": 40,
            "sp": 60
        },
        "abilities": [
            "Chlorophyll",
            "Battle Armor",
            "Leaf Guard"
        ],
        "innates": [
            "Regenerator",
            "Seaweed",
            "Tangling Hair"
        ],
        "weightkg": 350,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Kangaskhan": {
        "id": 115,
        "bs": {
            "hp": 105,
            "at": 95,
            "df": 80,
            "sa": 40,
            "sd": 80,
            "sp": 90
        },
        "abilities": [
            "Iron Fist",
            "Technician",
            "Guts"
        ],
        "innates": [
            "Parental Bond",
            "Scrappy",
            "Avenger"
        ],
        "weightkg": 800,
        "types": [
            "Normal"
        ],
        "genderR": 254,
        "otherFormes": [
            "Kangaskhan Mega"
        ]
    },
    "Kangaskhan Mega": {
        "id": 115,
        "bs": {
            "hp": 105,
            "at": 125,
            "df": 100,
            "sa": 60,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Tough Claws",
            "Tough Claws",
            "Tough Claws"
        ],
        "innates": [
            "Parental Bond",
            "Scrappy",
            "Avenger"
        ],
        "weightkg": 800,
        "types": [
            "Normal"
        ],
        "genderR": 254,
        "otherFormes": [
            "Kangaskhan"
        ]
    },
    "Horsea": {
        "id": 116,
        "bs": {
            "hp": 30,
            "at": 40,
            "df": 70,
            "sa": 70,
            "sd": 25,
            "sp": 60
        },
        "abilities": [
            "Swift Swim",
            "Fatal Precision",
            "Dust Cloud"
        ],
        "innates": [
            "Poison Point",
            "Immunity",
            "Sniper"
        ],
        "weightkg": 80,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Seadra": {
        "id": 117,
        "bs": {
            "hp": 65,
            "at": 75,
            "df": 95,
            "sa": 95,
            "sd": 55,
            "sp": 85
        },
        "abilities": [
            "Damp",
            "Sniper",
            "Natural Cure"
        ],
        "innates": [
            "Poison Point",
            "Parental Bond",
            "Poison Absorb"
        ],
        "weightkg": 250,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Kingdra": {
        "id": 230,
        "bs": {
            "hp": 75,
            "at": 110,
            "df": 75,
            "sa": 110,
            "sd": 75,
            "sp": 95
        },
        "abilities": [
            "Swift Swim",
            "Skill Link",
            "Hydration"
        ],
        "innates": [
            "Prism Scales",
            "Mega Launcher",
            "Multiscale"
        ],
        "weightkg": 1520,
        "types": [
            "Water",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Kingdra Mega",
            "Kingdra Mega Y"
        ]
    },
    "Kingdra Mega X": {
        "id": 230,
        "bs": {
            "hp": 75,
            "at": 105,
            "df": 100,
            "sa": 145,
            "sd": 100,
            "sp": 115
        },
        "abilities": [
            "Swift Swim",
            "Sniper",
            "Adaptability"
        ],
        "innates": [
            "Sea Guardian",
            "Mega Launcher",
            "Multiscale"
        ],
        "weightkg": 1520,
        "types": [
            "Water",
            "Dragon"
        ],
        "genderR": 127
    },
    "Kingdra Mega Y": {
        "id": 230,
        "bs": {
            "hp": 75,
            "at": 105,
            "df": 95,
            "sa": 125,
            "sd": 95,
            "sp": 145
        },
        "abilities": [
            "Surge Surfer",
            "Terminal Velocity",
            "Rapid Response"
        ],
        "innates": [
            "Transistor",
            "Super Scope",
            "Multiscale"
        ],
        "weightkg": 1520,
        "types": [
            "Water",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Kingdra"
        ]
    },
    "Goldeen": {
        "id": 118,
        "bs": {
            "hp": 45,
            "at": 82,
            "df": 60,
            "sa": 35,
            "sd": 50,
            "sp": 83
        },
        "abilities": [
            "Swift Swim",
            "Water Veil",
            "Mighty Horn"
        ],
        "innates": [
            "Lightning Rod",
            "Multiscale",
            "Field Explorer"
        ],
        "weightkg": 150,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Seaking": {
        "id": 119,
        "bs": {
            "hp": 80,
            "at": 112,
            "df": 65,
            "sa": 65,
            "sd": 100,
            "sp": 98
        },
        "abilities": [
            "Swift Swim",
            "Water Veil",
            "Mighty Horn"
        ],
        "innates": [
            "Lightning Rod",
            "Multiscale",
            "Field Explorer"
        ],
        "weightkg": 390,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Staryu": {
        "id": 120,
        "bs": {
            "hp": 30,
            "at": 45,
            "df": 55,
            "sa": 70,
            "sd": 55,
            "sp": 85
        },
        "abilities": [
            "Swift Swim",
            "Neuroforce",
            "Storm Drain"
        ],
        "innates": [
            "Natural Cure",
            "Regenerator",
            "Mystic Power"
        ],
        "weightkg": 345,
        "types": [
            "Water"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Starmie": {
        "id": 121,
        "bs": {
            "hp": 60,
            "at": 75,
            "df": 85,
            "sa": 105,
            "sd": 85,
            "sp": 115
        },
        "abilities": [
            "Swift Swim",
            "Analytic",
            "Storm Drain"
        ],
        "innates": [
            "Natural Cure",
            "Victory Star",
            "Mystic Power"
        ],
        "weightkg": 800,
        "types": [
            "Water",
            "Psychic"
        ],
        "genderR": 2
    },
    "Scyther": {
        "id": 123,
        "bs": {
            "hp": 70,
            "at": 110,
            "df": 80,
            "sa": 55,
            "sd": 80,
            "sp": 105
        },
        "abilities": [
            "Perfectionist",
            "Technician",
            "Aerodynamics"
        ],
        "innates": [
            "Keen Edge",
            "Swarm",
            "Aerilate"
        ],
        "weightkg": 560,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Jynx": {
        "id": 124,
        "bs": {
            "hp": 65,
            "at": 50,
            "df": 35,
            "sa": 115,
            "sd": 95,
            "sp": 115
        },
        "abilities": [
            "Psychic Mind",
            "Dancer",
            "Psychic Surge"
        ],
        "innates": [
            "Dry Skin",
            "Refrigerate",
            "Amplifier"
        ],
        "weightkg": 406,
        "types": [
            "Ice",
            "Psychic"
        ],
        "genderR": 254
    },
    "Electabuzz": {
        "id": 125,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 57,
            "sa": 83,
            "sd": 85,
            "sp": 105
        },
        "abilities": [
            "Power Fists",
            "Short Circuit",
            "Motor Drive"
        ],
        "innates": [
            "Hyper Aggressive",
            "Vital Spirit",
            "Static"
        ],
        "weightkg": 300,
        "types": [
            "Electric",
            "Fighting"
        ],
        "genderR": 63,
        "nfe": true
    },
    "Magmar": {
        "id": 126,
        "bs": {
            "hp": 65,
            "at": 95,
            "df": 57,
            "sa": 100,
            "sd": 85,
            "sp": 93
        },
        "abilities": [
            "Pyromancy",
            "Flaming Soul",
            "Sun Basking"
        ],
        "innates": [
            "Molten Down",
            "Flame Body",
            "Flash Fire"
        ],
        "weightkg": 445,
        "types": [
            "Fire"
        ],
        "genderR": 63,
        "nfe": true
    },
    "Pinsir": {
        "id": 127,
        "bs": {
            "hp": 65,
            "at": 125,
            "df": 100,
            "sa": 55,
            "sd": 70,
            "sp": 85
        },
        "abilities": [
            "Anger Point",
            "Violent Rush",
            "Moxie"
        ],
        "innates": [
            "Swarm",
            "Hyper Cutter",
            "Grip Pincer"
        ],
        "weightkg": 550,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pinsir Mega"
        ]
    },
    "Pinsir Mega": {
        "id": 127,
        "bs": {
            "hp": 65,
            "at": 155,
            "df": 120,
            "sa": 65,
            "sd": 90,
            "sp": 105
        },
        "abilities": [
            "Hyper Aggressive",
            "Violent Rush",
            "Aerodynamics"
        ],
        "innates": [
            "Aerilate",
            "Hyper Cutter",
            "Grip Pincer"
        ],
        "weightkg": 550,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pinsir"
        ]
    },
    "Tauros": {
        "id": 128,
        "bs": {
            "hp": 95,
            "at": 120,
            "df": 95,
            "sa": 40,
            "sd": 70,
            "sp": 110
        },
        "abilities": [
            "Violent Rush",
            "Rock Head",
            "Rampage"
        ],
        "innates": [
            "Hyper Aggressive",
            "Anger Point",
            "Scrappy"
        ],
        "weightkg": 884,
        "types": [
            "Normal"
        ],
        "genderR": 0,
        "otherFormes": [
            "Tauros Paldean Combat Breed",
            "Tauros Paldean Blaze Breed",
            "Tauros Paldean Aqua Breed"
        ]
    },
    "Tauros Paldean Combat Breed": {
        "id": 128,
        "bs": {
            "hp": 95,
            "at": 130,
            "df": 105,
            "sa": 30,
            "sd": 70,
            "sp": 100
        },
        "abilities": [
            "Hyper Aggressive",
            "Anger Point",
            "Cud Chew"
        ],
        "innates": [
            "Rock Head",
            "Violent Rush",
            "Frisk"
        ],
        "weightkg": 884,
        "types": [
            "Fighting"
        ],
        "genderR": 0,
        "otherFormes": [
            "Tauros"
        ]
    },
    "Tauros Paldean Blaze Breed": {
        "id": 128,
        "bs": {
            "hp": 95,
            "at": 130,
            "df": 105,
            "sa": 30,
            "sd": 70,
            "sp": 100
        },
        "abilities": [
            "Violent Rush",
            "Immolate",
            "Cud Chew"
        ],
        "innates": [
            "Rock Head",
            "Anger Point",
            "Blaze"
        ],
        "weightkg": 884,
        "types": [
            "Fighting",
            "Fire"
        ],
        "genderR": 0,
        "otherFormes": [
            "Tauros"
        ]
    },
    "Tauros Paldean Aqua Breed": {
        "id": 128,
        "bs": {
            "hp": 95,
            "at": 130,
            "df": 105,
            "sa": 30,
            "sd": 70,
            "sp": 100
        },
        "abilities": [
            "Violent Rush",
            "Hydrate",
            "Cud Chew"
        ],
        "innates": [
            "Rock Head",
            "Anger Point",
            "Torrent"
        ],
        "weightkg": 884,
        "types": [
            "Fighting",
            "Water"
        ],
        "genderR": 0,
        "otherFormes": [
            "Tauros"
        ]
    },
    "Magikarp": {
        "id": 129,
        "bs": {
            "hp": 20,
            "at": 15,
            "df": 55,
            "sa": 15,
            "sd": 20,
            "sp": 80
        },
        "abilities": [
            "Marvel Scale",
            "Guilt Trip",
            "Rattled"
        ],
        "innates": [
            "Multiscale",
            "Adaptability",
            "Limber"
        ],
        "weightkg": 100,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Gyarados": {
        "id": 130,
        "bs": {
            "hp": 95,
            "at": 125,
            "df": 79,
            "sa": 60,
            "sd": 100,
            "sp": 81
        },
        "abilities": [
            "Intimidate",
            "Moxie",
            "Sea Guardian"
        ],
        "innates": [
            "Aerialist",
            "Aerilate",
            "Overwhelm"
        ],
        "weightkg": 2350,
        "types": [
            "Water",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gyarados Mega",
            "Gyarados Mega Y"
        ]
    },
    "Gyaradeath": {
        "id": 1041,
        "bs": {
            "hp": 95,
            "at": 110,
            "df": 79,
            "sa": 60,
            "sd": 100,
            "sp": 96
        },
        "abilities": [
            "Scare",
            "Moxie",
            "Greater Spirit"
        ],
        "innates": [
            "Levitate",
            "Mold Breaker",
            "Vengeful Spirit"
        ],
        "weightkg": 0,
        "types": [
            "Ghost"
        ],
        "genderR": 127
    },
    "Gyarados Mega X": {
        "id": 130,
        "bs": {
            "hp": 95,
            "at": 155,
            "df": 109,
            "sa": 70,
            "sd": 130,
            "sp": 81
        },
        "abilities": [
            "Hyper Aggressive",
            "Hyper Aggressive",
            "Hyper Aggressive"
        ],
        "innates": [
            "Aerialist",
            "Beast Boost",
            "Mold Breaker"
        ],
        "weightkg": 2350,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 127
    },
    "Gyaradeath Mega X": {
        "id": 1041,
        "bs": {
            "hp": 95,
            "at": 140,
            "df": 109,
            "sa": 70,
            "sd": 120,
            "sp": 106
        },
        "abilities": [
            "Fire Scales",
            "Infernal Rage",
            "Ethereal Rush"
        ],
        "innates": [
            "Levitate",
            "Funeral Pyre",
            "Soul Eater"
        ],
        "weightkg": 0,
        "types": [
            "Ghost",
            "Fire"
        ],
        "genderR": 127
    },
    "Gyarados Mega Y": {
        "id": 130,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 99,
            "sa": 130,
            "sd": 140,
            "sp": 81
        },
        "abilities": [
            "Mystic Power",
            "Mystic Power",
            "Mystic Power"
        ],
        "innates": [
            "Aerialist",
            "Prism Scales",
            "Draconize"
        ],
        "weightkg": 2350,
        "types": [
            "Water",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gyarados"
        ]
    },
    "Gyaradeath Mega Y": {
        "id": 1041,
        "bs": {
            "hp": 95,
            "at": 110,
            "df": 90,
            "sa": 140,
            "sd": 69,
            "sp": 136
        },
        "abilities": [
            "Psychic Surge",
            "Hubris",
            "Mystic Power"
        ],
        "innates": [
            "Shadow Shield",
            "Life Steal",
            "Levitate"
        ],
        "weightkg": 0,
        "types": [
            "Ghost",
            "Psychic"
        ],
        "genderR": 127
    },
    "Lapras": {
        "id": 131,
        "bs": {
            "hp": 130,
            "at": 85,
            "df": 80,
            "sa": 95,
            "sd": 95,
            "sp": 60
        },
        "abilities": [
            "Adaptability",
            "Snow Warning",
            "Permafrost"
        ],
        "innates": [
            "Half Drake",
            "Shell Armor",
            "Self Sufficient"
        ],
        "weightkg": 2200,
        "types": [
            "Water",
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Lapras Mega",
            "Lapras Mega X"
        ]
    },
    "Lapras Mega Y": {
        "id": 131,
        "bs": {
            "hp": 130,
            "at": 105,
            "df": 110,
            "sa": 125,
            "sd": 125,
            "sp": 50
        },
        "abilities": [
            "Liquid Voice",
            "Liquid Voice",
            "Liquid Voice"
        ],
        "innates": [
            "Ice Scales",
            "Shell Armor",
            "Self Sufficient"
        ],
        "weightkg": 2200,
        "types": [
            "Water",
            "Ice"
        ],
        "genderR": 127
    },
    "Lapras Mega X": {
        "id": 131,
        "bs": {
            "hp": 130,
            "at": 135,
            "df": 105,
            "sa": 100,
            "sd": 90,
            "sp": 85
        },
        "abilities": [
            "Primal Maw",
            "Primal Maw",
            "Primal Maw"
        ],
        "innates": [
            "Swift Swim",
            "Shell Armor",
            "Jaws of Carnage"
        ],
        "weightkg": 2200,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Lapras"
        ]
    },
    "Ditto": {
        "id": 132,
        "bs": {
            "hp": 96,
            "at": 48,
            "df": 48,
            "sa": 48,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Prankster",
            "Magic Guard",
            "Imposter"
        ],
        "innates": [
            "Liquified",
            "Coward",
            "Limber"
        ],
        "weightkg": 40,
        "types": [
            "Normal"
        ],
        "genderR": 2
    },
    "Eevee": {
        "id": 133,
        "bs": {
            "hp": 55,
            "at": 55,
            "df": 50,
            "sa": 45,
            "sd": 65,
            "sp": 55
        },
        "abilities": [
            "Prankster",
            "Adaptability",
            "Unaware"
        ],
        "innates": [
            "Fluffy",
            "Cute Charm",
            "Protean"
        ],
        "weightkg": 65,
        "types": [
            "Normal"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Espeon": {
        "id": 196,
        "bs": {
            "hp": 65,
            "at": 65,
            "df": 60,
            "sa": 130,
            "sd": 95,
            "sp": 110
        },
        "abilities": [
            "Soul-Heart",
            "Sage Power",
            "Psychic Surge"
        ],
        "innates": [
            "Magic Bounce",
            "Avenger",
            "Psychic Mind"
        ],
        "weightkg": 265,
        "types": [
            "Psychic"
        ],
        "genderR": 31
    },
    "Espeon Primal": {
        "id": 196,
        "bs": {
            "hp": 65,
            "at": 90,
            "df": 100,
            "sa": 100,
            "sd": 135,
            "sp": 135
        },
        "abilities": [
            "Feline Prowess",
            "Feline Prowess",
            "Feline Prowess"
        ],
        "innates": [
            "Forewarn",
            "Tinted Lens",
            "Magic Bounce"
        ],
        "weightkg": 265,
        "types": [
            "Psychic"
        ],
        "genderR": 127
    },
    "Eevee Partner": {
        "id": 133,
        "bs": {
            "hp": 65,
            "at": 75,
            "df": 70,
            "sa": 65,
            "sd": 85,
            "sp": 75
        },
        "abilities": [
            "Prankster",
            "Unaware",
            "Simple"
        ],
        "innates": [
            "Adaptability",
            "Overcoat",
            "Cute Charm"
        ],
        "weightkg": 65,
        "types": [
            "Normal"
        ],
        "genderR": 31
    },
    "Eevee Mega": {
        "id": 133,
        "bs": {
            "hp": 65,
            "at": 125,
            "df": 65,
            "sa": 120,
            "sd": 110,
            "sp": 50
        },
        "abilities": [
            "Prankster",
            "Scrappy",
            "Friend Guard"
        ],
        "innates": [
            "Protean",
            "Prim and Proper",
            "Fluffiest"
        ],
        "weightkg": 65,
        "types": [
            "Normal"
        ],
        "genderR": 31
    },
    "Vaporeon": {
        "id": 134,
        "bs": {
            "hp": 130,
            "at": 65,
            "df": 60,
            "sa": 110,
            "sd": 95,
            "sp": 65
        },
        "abilities": [
            "Rain Dish",
            "Regenerator",
            "Drizzle"
        ],
        "innates": [
            "Water Veil",
            "Water Absorb",
            "Hydration"
        ],
        "weightkg": 290,
        "types": [
            "Water"
        ],
        "genderR": 31
    },
    "Jolteon": {
        "id": 135,
        "bs": {
            "hp": 65,
            "at": 65,
            "df": 60,
            "sa": 110,
            "sd": 95,
            "sp": 130
        },
        "abilities": [
            "Speed Boost",
            "Electric Burst",
            "Electro Surge"
        ],
        "innates": [
            "Short Circuit",
            "Lightning Rod",
            "Illuminate"
        ],
        "weightkg": 245,
        "types": [
            "Electric"
        ],
        "genderR": 31
    },
    "Flareon": {
        "id": 136,
        "bs": {
            "hp": 95,
            "at": 130,
            "df": 60,
            "sa": 65,
            "sd": 65,
            "sp": 110
        },
        "abilities": [
            "Reckless",
            "Guts",
            "Flaming Soul"
        ],
        "innates": [
            "Flash Fire",
            "Quick Feet",
            "Rivalry"
        ],
        "weightkg": 250,
        "types": [
            "Fire"
        ],
        "genderR": 31
    },
    "Porygon": {
        "id": 137,
        "bs": {
            "hp": 65,
            "at": 60,
            "df": 70,
            "sa": 85,
            "sd": 75,
            "sp": 40
        },
        "abilities": [
            "Self Repair",
            "Trace",
            "Twist. Dimension"
        ],
        "innates": [
            "Levitate",
            "Analytic",
            "Download"
        ],
        "weightkg": 365,
        "types": [
            "Normal"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Omanyte": {
        "id": 138,
        "bs": {
            "hp": 35,
            "at": 40,
            "df": 100,
            "sa": 90,
            "sd": 55,
            "sp": 35
        },
        "abilities": [
            "Weak Armor",
            "Swift Swim",
            "Mystic Power"
        ],
        "innates": [
            "Fossilized",
            "Shell Armor",
            "Accelerate"
        ],
        "weightkg": 75,
        "types": [
            "Rock",
            "Water"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Omastar": {
        "id": 139,
        "bs": {
            "hp": 70,
            "at": 60,
            "df": 125,
            "sa": 115,
            "sd": 70,
            "sp": 55
        },
        "abilities": [
            "Weak Armor",
            "Swift Swim",
            "Water Compaction"
        ],
        "innates": [
            "Fossilized",
            "Shell Armor",
            "Accelerate"
        ],
        "weightkg": 350,
        "types": [
            "Rock",
            "Water"
        ],
        "genderR": 31
    },
    "Kabuto": {
        "id": 140,
        "bs": {
            "hp": 30,
            "at": 80,
            "df": 90,
            "sa": 55,
            "sd": 45,
            "sp": 55
        },
        "abilities": [
            "Swift Swim",
            "Loose Rocks",
            "Adaptability"
        ],
        "innates": [
            "Fossilized",
            "Battle Armor",
            "Ambush"
        ],
        "weightkg": 115,
        "types": [
            "Rock",
            "Water"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Kabutops": {
        "id": 141,
        "bs": {
            "hp": 60,
            "at": 115,
            "df": 105,
            "sa": 65,
            "sd": 70,
            "sp": 80
        },
        "abilities": [
            "Swift Swim",
            "Hyper Cutter",
            "Perfectionist"
        ],
        "innates": [
            "Fossilized",
            "Battle Armor",
            "Dual Wield"
        ],
        "weightkg": 405,
        "types": [
            "Rock",
            "Water"
        ],
        "genderR": 31
    },
    "Aerodactyl": {
        "id": 142,
        "bs": {
            "hp": 80,
            "at": 105,
            "df": 65,
            "sa": 60,
            "sd": 75,
            "sp": 130
        },
        "abilities": [
            "Speed Force",
            "Predator",
            "Fatal Precision"
        ],
        "innates": [
            "Fossilized",
            "Rock Head",
            "Half Drake"
        ],
        "weightkg": 590,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 31,
        "otherFormes": [
            "Aerodactyl Mega"
        ]
    },
    "Aerodactyl Mega": {
        "id": 142,
        "bs": {
            "hp": 80,
            "at": 135,
            "df": 85,
            "sa": 70,
            "sd": 95,
            "sp": 150
        },
        "abilities": [
            "Speed Force",
            "Predator",
            "Fatal Precision"
        ],
        "innates": [
            "Fossilized",
            "Rock Head",
            "Tough Claws"
        ],
        "weightkg": 590,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 31,
        "otherFormes": [
            "Aerodactyl"
        ]
    },
    "Articuno": {
        "id": 144,
        "bs": {
            "hp": 90,
            "at": 85,
            "df": 100,
            "sa": 95,
            "sd": 125,
            "sp": 85
        },
        "abilities": [
            "North Wind",
            "Snow Warning",
            "Ice Scales"
        ],
        "innates": [
            "Antarctic Bird",
            "Majestic Bird",
            "Permafrost"
        ],
        "weightkg": 554,
        "types": [
            "Ice",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Articuno Galarian"
        ]
    },
    "Articuno Galarian": {
        "id": 144,
        "bs": {
            "hp": 90,
            "at": 85,
            "df": 85,
            "sa": 125,
            "sd": 100,
            "sp": 95
        },
        "abilities": [
            "Serene Grace",
            "Cosmic Daze",
            "Hubris"
        ],
        "innates": [
            "Aurora Borealis",
            "Permafrost",
            "Gifted Mind"
        ],
        "weightkg": 554,
        "types": [
            "Psychic",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Articuno"
        ]
    },
    "Zapdos": {
        "id": 145,
        "bs": {
            "hp": 90,
            "at": 90,
            "df": 85,
            "sa": 125,
            "sd": 90,
            "sp": 100
        },
        "abilities": [
            "Overcharge",
            "Gale Wings",
            "Drizzle"
        ],
        "innates": [
            "Volt Absorb",
            "Ground Shock",
            "Static"
        ],
        "weightkg": 526,
        "types": [
            "Electric",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zapdos Galarian"
        ]
    },
    "Zapdos Galarian": {
        "id": 145,
        "bs": {
            "hp": 90,
            "at": 125,
            "df": 90,
            "sa": 85,
            "sd": 90,
            "sp": 100
        },
        "abilities": [
            "Defiant",
            "Aerodynamics",
            "Scrappy"
        ],
        "innates": [
            "Striker",
            "Speed Boost",
            "Roundhouse"
        ],
        "weightkg": 526,
        "types": [
            "Fighting",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zapdos"
        ]
    },
    "Moltres": {
        "id": 146,
        "bs": {
            "hp": 90,
            "at": 100,
            "df": 90,
            "sa": 125,
            "sd": 85,
            "sp": 90
        },
        "abilities": [
            "Air Blower",
            "Flaming Soul",
            "Drought"
        ],
        "innates": [
            "Flash Fire",
            "Molten Down",
            "Pyromancy"
        ],
        "weightkg": 600,
        "types": [
            "Fire",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Moltres Galarian"
        ]
    },
    "Moltres Galarian": {
        "id": 146,
        "bs": {
            "hp": 90,
            "at": 85,
            "df": 90,
            "sa": 100,
            "sd": 125,
            "sp": 90
        },
        "abilities": [
            "Bad Luck",
            "Soul Eater",
            "Fearmonger"
        ],
        "innates": [
            "Dark Aura",
            "Shadow Shield",
            "Tipping Point"
        ],
        "weightkg": 600,
        "types": [
            "Dark",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Moltres"
        ]
    },
    "Dratini": {
        "id": 147,
        "bs": {
            "hp": 41,
            "at": 64,
            "df": 45,
            "sa": 50,
            "sd": 50,
            "sp": 50
        },
        "abilities": [
            "Regenerator",
            "Power Spot",
            "Hydration"
        ],
        "innates": [
            "Multiscale",
            "Marvel Scale",
            "Shed Skin"
        ],
        "weightkg": 33,
        "types": [
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dragonair": {
        "id": 148,
        "bs": {
            "hp": 61,
            "at": 84,
            "df": 65,
            "sa": 70,
            "sd": 70,
            "sp": 70
        },
        "abilities": [
            "Regenerator",
            "Magic Guard",
            "Weather Control"
        ],
        "innates": [
            "Multiscale",
            "Marvel Scale",
            "Shed Skin"
        ],
        "weightkg": 165,
        "types": [
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dragonite": {
        "id": 149,
        "bs": {
            "hp": 91,
            "at": 134,
            "df": 95,
            "sa": 100,
            "sd": 100,
            "sp": 80
        },
        "abilities": [
            "Dragon's Maw",
            "Rampage",
            "Prism Scales"
        ],
        "innates": [
            "Multiscale",
            "Overwhelm",
            "Aerilate"
        ],
        "weightkg": 2100,
        "types": [
            "Dragon",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Dragonite Mega"
        ]
    },
    "Dragonite Mega": {
        "id": 149,
        "bs": {
            "hp": 91,
            "at": 159,
            "df": 120,
            "sa": 125,
            "sd": 125,
            "sp": 80
        },
        "abilities": [
            "Multiscale",
            "Multiscale",
            "Multiscale"
        ],
        "innates": [
            "Galvanize",
            "Discipline",
            "Thundercall"
        ],
        "weightkg": 2100,
        "types": [
            "Dragon",
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Dragonite"
        ]
    },
    "Dragonite Delivery": {
        "id": 149,
        "bs": {
            "hp": 91,
            "at": 159,
            "df": 120,
            "sa": 125,
            "sd": 125,
            "sp": 80
        },
        "abilities": [
            "Multiscale",
            "Multiscale",
            "Multiscale"
        ],
        "innates": [
            "Dragon's Ritual",
            "Thick Fat",
            "Discipline"
        ],
        "weightkg": 2100,
        "types": [
            "Dragon",
            "Flying"
        ],
        "genderR": 127
    },
    "Mewtwo": {
        "id": 150,
        "bs": {
            "hp": 106,
            "at": 110,
            "df": 90,
            "sa": 154,
            "sd": 90,
            "sp": 130
        },
        "abilities": [
            "Mystic Power",
            "Psychic Surge",
            "Berserk DNA"
        ],
        "innates": [
            "Psychic Mind",
            "Pressure",
            "Fatal Precision"
        ],
        "weightkg": 1220,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Mewtwo Mega X",
            "Mewtwo Mega Y"
        ]
    },
    "Mewtwo Mega X": {
        "id": 150,
        "bs": {
            "hp": 106,
            "at": 190,
            "df": 100,
            "sa": 154,
            "sd": 100,
            "sp": 130
        },
        "abilities": [
            "Precise Fist",
            "Precise Fist",
            "Precise Fist"
        ],
        "innates": [
            "Psychic Mind",
            "Raging Boxer",
            "Fatal Precision"
        ],
        "weightkg": 1220,
        "types": [
            "Psychic",
            "Fighting"
        ],
        "genderR": 2,
        "otherFormes": [
            "Mewtwo"
        ]
    },
    "Mewtwo Mega Y": {
        "id": 150,
        "bs": {
            "hp": 106,
            "at": 150,
            "df": 70,
            "sa": 194,
            "sd": 120,
            "sp": 140
        },
        "abilities": [
            "Arcane Force",
            "Arcane Force",
            "Arcane Force"
        ],
        "innates": [
            "Psychic Mind",
            "Neuroforce",
            "Fatal Precision"
        ],
        "weightkg": 1220,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Mewtwo"
        ]
    },
    "Mew": {
        "id": 151,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 100,
            "sa": 100,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Magic Guard",
            "Mystic Power",
            "Imposter"
        ],
        "innates": [
            "Psychic Mind",
            "Unaware",
            "Prankster"
        ],
        "weightkg": 40,
        "types": [
            "Psychic"
        ],
        "genderR": 2
    },
    "Chikorita": {
        "id": 152,
        "bs": {
            "hp": 47,
            "at": 49,
            "df": 65,
            "sa": 49,
            "sd": 65,
            "sp": 45
        },
        "abilities": [
            "Regenerator",
            "Pixilate",
            "Grassy Surge"
        ],
        "innates": [
            "Overgrow",
            "Grass Pelt",
            "Natural Cure"
        ],
        "weightkg": 64,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Bayleef": {
        "id": 153,
        "bs": {
            "hp": 70,
            "at": 62,
            "df": 80,
            "sa": 68,
            "sd": 80,
            "sp": 60
        },
        "abilities": [
            "Regenerator",
            "Pixilate",
            "Grassy Surge"
        ],
        "innates": [
            "Overgrow",
            "Grass Pelt",
            "Natural Cure"
        ],
        "weightkg": 158,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Meganium": {
        "id": 154,
        "bs": {
            "hp": 80,
            "at": 82,
            "df": 100,
            "sa": 93,
            "sd": 100,
            "sp": 80
        },
        "abilities": [
            "Regenerator",
            "Triage",
            "Grassy Surge"
        ],
        "innates": [
            "Overgrow",
            "Big Leaves",
            "Pastel Veil"
        ],
        "weightkg": 1005,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Meganium Mega"
        ]
    },
    "Meganium Mega": {
        "id": 154,
        "bs": {
            "hp": 80,
            "at": 97,
            "df": 130,
            "sa": 118,
            "sd": 130,
            "sp": 80
        },
        "abilities": [
            "Misty Surge",
            "Misty Surge",
            "Misty Surge"
        ],
        "innates": [
            "Forest Rage",
            "Absorbant",
            "Triage"
        ],
        "weightkg": 1005,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Meganium"
        ]
    },
    "Cyndaquil": {
        "id": 155,
        "bs": {
            "hp": 44,
            "at": 48,
            "df": 43,
            "sa": 65,
            "sd": 50,
            "sp": 70
        },
        "abilities": [
            "Flame Body",
            "Berserk",
            "Pyromancy"
        ],
        "innates": [
            "Blaze",
            "Let's Roll",
            "Coward"
        ],
        "weightkg": 79,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Quilava": {
        "id": 156,
        "bs": {
            "hp": 63,
            "at": 64,
            "df": 58,
            "sa": 85,
            "sd": 65,
            "sp": 85
        },
        "abilities": [
            "Earthbound",
            "Sand Rush",
            "Pyromancy"
        ],
        "innates": [
            "Blaze",
            "Berserk",
            "Flash Fire"
        ],
        "weightkg": 190,
        "types": [
            "Fire",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Typhlosion": {
        "id": 157,
        "bs": {
            "hp": 78,
            "at": 84,
            "df": 78,
            "sa": 110,
            "sd": 85,
            "sp": 100
        },
        "abilities": [
            "Earthbound",
            "Sand Rush",
            "Pyromancy"
        ],
        "innates": [
            "Blaze",
            "Berserk",
            "Flaming Soul"
        ],
        "weightkg": 795,
        "types": [
            "Fire",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Typhlosion Hisuian",
            "Typhlosion Mega"
        ]
    },
    "Typhlosion Mega": {
        "id": 157,
        "bs": {
            "hp": 78,
            "at": 94,
            "df": 98,
            "sa": 150,
            "sd": 105,
            "sp": 110
        },
        "abilities": [
            "Volcano Rage",
            "Volcano Rage",
            "Volcano Rage"
        ],
        "innates": [
            "Hellblaze",
            "Magma Eater",
            "Flaming Soul"
        ],
        "weightkg": 795,
        "types": [
            "Fire",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Typhlosion"
        ]
    },
    "Typhlosion Hisuian": {
        "id": 157,
        "bs": {
            "hp": 93,
            "at": 74,
            "df": 78,
            "sa": 120,
            "sd": 85,
            "sp": 85
        },
        "abilities": [
            "Early Grave",
            "Ethereal Rush",
            "Set Ablaze"
        ],
        "innates": [
            "Blaze",
            "Pyromancy",
            "Frisk"
        ],
        "weightkg": 795,
        "types": [
            "Fire",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Typhlosion"
        ]
    },
    "Typhlosion Hisuian Mega": {
        "id": 157,
        "bs": {
            "hp": 93,
            "at": 89,
            "df": 101,
            "sa": 145,
            "sd": 108,
            "sp": 99
        },
        "abilities": [
            "Soul Devourer",
            "Soul Devourer",
            "Soul Devourer"
        ],
        "innates": [
            "Hellblaze",
            "Early Grave",
            "Vengeful Spirit"
        ],
        "weightkg": 795,
        "types": [
            "Fire",
            "Ghost"
        ],
        "genderR": 127
    },
    "Totodile": {
        "id": 158,
        "bs": {
            "hp": 50,
            "at": 65,
            "df": 64,
            "sa": 44,
            "sd": 48,
            "sp": 49
        },
        "abilities": [
            "Intimidate",
            "Predator",
            "Violent Rush"
        ],
        "innates": [
            "Torrent",
            "Strong Jaw",
            "Rough Skin"
        ],
        "weightkg": 95,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Croconaw": {
        "id": 159,
        "bs": {
            "hp": 70,
            "at": 80,
            "df": 80,
            "sa": 59,
            "sd": 63,
            "sp": 68
        },
        "abilities": [
            "Intimidate",
            "Predator",
            "Violent Rush"
        ],
        "innates": [
            "Torrent",
            "Strong Jaw",
            "Rough Skin"
        ],
        "weightkg": 250,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Feraligatr": {
        "id": 160,
        "bs": {
            "hp": 85,
            "at": 125,
            "df": 100,
            "sa": 49,
            "sd": 88,
            "sp": 88
        },
        "abilities": [
            "Intimidate",
            "Predator",
            "Violent Rush"
        ],
        "innates": [
            "Torrent",
            "Strong Jaw",
            "Rough Skin"
        ],
        "weightkg": 888,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Feraligatr Mega X",
            "Feraligatr Mega Y"
        ]
    },
    "Feraligatr Mega X": {
        "id": 160,
        "bs": {
            "hp": 85,
            "at": 140,
            "df": 100,
            "sa": 109,
            "sd": 98,
            "sp": 103
        },
        "abilities": [
            "Primal Maw",
            "Primal Maw",
            "Primal Maw"
        ],
        "innates": [
            "Riptide",
            "Dry Skin",
            "Predator"
        ],
        "weightkg": 888,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Feraligatr"
        ]
    },
    "Feraligatr Mega Y": {
        "id": 160,
        "bs": {
            "hp": 85,
            "at": 80,
            "df": 130,
            "sa": 159,
            "sd": 113,
            "sp": 68
        },
        "abilities": [
            "Atomic Burst",
            "Atomic Burst",
            "Atomic Burst"
        ],
        "innates": [
            "Riptide",
            "Galvanize",
            "Berserker Rage"
        ],
        "weightkg": 888,
        "types": [
            "Water",
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Feraligatr"
        ]
    },
    "Sentret": {
        "id": 161,
        "bs": {
            "hp": 35,
            "at": 56,
            "df": 34,
            "sa": 35,
            "sd": 60,
            "sp": 70
        },
        "abilities": [
            "Run Away",
            "Sap Sipper",
            "Quick Feet"
        ],
        "innates": [
            "Frisk",
            "Field Explorer",
            "Fur Coat"
        ],
        "weightkg": 60,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Furret": {
        "id": 162,
        "bs": {
            "hp": 85,
            "at": 86,
            "df": 64,
            "sa": 40,
            "sd": 70,
            "sp": 115
        },
        "abilities": [
            "Momentum",
            "Normalize",
            "Adaptability"
        ],
        "innates": [
            "Scrappy",
            "Field Explorer",
            "Fur Coat"
        ],
        "weightkg": 325,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Hoothoot": {
        "id": 163,
        "bs": {
            "hp": 60,
            "at": 30,
            "df": 30,
            "sa": 36,
            "sd": 56,
            "sp": 50
        },
        "abilities": [
            "Tinted Lens",
            "Aerilate",
            "Early Bird"
        ],
        "innates": [
            "Flock",
            "Nocturnal",
            "Frisk"
        ],
        "weightkg": 212,
        "types": [
            "Psychic",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Noctowl": {
        "id": 164,
        "bs": {
            "hp": 100,
            "at": 50,
            "df": 70,
            "sa": 76,
            "sd": 96,
            "sp": 70
        },
        "abilities": [
            "Tinted Lens",
            "Aerilate",
            "Air Blower"
        ],
        "innates": [
            "Insomnia",
            "Nocturnal",
            "Majestic Bird"
        ],
        "weightkg": 408,
        "types": [
            "Psychic",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Ledyba": {
        "id": 165,
        "bs": {
            "hp": 40,
            "at": 50,
            "df": 30,
            "sa": 20,
            "sd": 80,
            "sp": 65
        },
        "abilities": [
            "Run Away",
            "Rattled",
            "Overcoat"
        ],
        "innates": [
            "Pollinate",
            "Swarm",
            "Shell Armor"
        ],
        "weightkg": 108,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Ledian": {
        "id": 166,
        "bs": {
            "hp": 55,
            "at": 95,
            "df": 70,
            "sa": 55,
            "sd": 110,
            "sp": 105
        },
        "abilities": [
            "Aerilate",
            "Pollinate",
            "Aerodynamics"
        ],
        "innates": [
            "Raging Boxer",
            "Iron Fist",
            "Levitate"
        ],
        "weightkg": 356,
        "types": [
            "Bug",
            "Fighting"
        ],
        "genderR": 127
    },
    "Iron Heart": {
        "id": 1066,
        "bs": {
            "hp": 78,
            "at": 122,
            "df": 92,
            "sa": 74,
            "sd": 92,
            "sp": 112
        },
        "abilities": [
            "Parry",
            "Iron Fist",
            "Mold Breaker"
        ],
        "innates": [
            "Quark Drive",
            "Vitality Strike",
            "Steel Beetle"
        ],
        "weightkg": 0,
        "types": [
            "Steel",
            "Bug"
        ],
        "genderR": 2
    },
    "Spinarak": {
        "id": 167,
        "bs": {
            "hp": 40,
            "at": 60,
            "df": 50,
            "sa": 40,
            "sd": 50,
            "sp": 45
        },
        "abilities": [
            "Spider Lair",
            "Prankster",
            "No Guard"
        ],
        "innates": [
            "Poison Touch",
            "Merciless",
            "Infiltrator"
        ],
        "weightkg": 85,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Ariados": {
        "id": 168,
        "bs": {
            "hp": 80,
            "at": 110,
            "df": 80,
            "sa": 60,
            "sd": 80,
            "sp": 80
        },
        "abilities": [
            "Spider Lair",
            "Sniper",
            "Exploit Weakness"
        ],
        "innates": [
            "Poison Touch",
            "Merciless",
            "Opportunist"
        ],
        "weightkg": 335,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127
    },
    "Chinchou": {
        "id": 170,
        "bs": {
            "hp": 75,
            "at": 38,
            "df": 38,
            "sa": 66,
            "sd": 66,
            "sp": 67
        },
        "abilities": [
            "Swift Swim",
            "Dazzling",
            "Short Circuit"
        ],
        "innates": [
            "Illuminate",
            "Water Absorb",
            "Volt Absorb"
        ],
        "weightkg": 120,
        "types": [
            "Water",
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Lanturn": {
        "id": 171,
        "bs": {
            "hp": 125,
            "at": 58,
            "df": 58,
            "sa": 86,
            "sd": 86,
            "sp": 67
        },
        "abilities": [
            "Swift Swim",
            "Dazzling",
            "Drizzle"
        ],
        "innates": [
            "Illuminate",
            "Water Absorb",
            "Volt Absorb"
        ],
        "weightkg": 225,
        "types": [
            "Water",
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Lanturn Mega"
        ]
    },
    "Lanturn Mega": {
        "id": 171,
        "bs": {
            "hp": 125,
            "at": 58,
            "df": 88,
            "sa": 126,
            "sd": 116,
            "sp": 67
        },
        "abilities": [
            "Hydro Circuit",
            "Hydro Circuit",
            "Hydro Circuit"
        ],
        "innates": [
            "Radiance",
            "Storm Drain",
            "Volt Absorb"
        ],
        "weightkg": 225,
        "types": [
            "Water",
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Lanturn"
        ]
    },
    "Pichu": {
        "id": 172,
        "bs": {
            "hp": 20,
            "at": 40,
            "df": 15,
            "sa": 35,
            "sd": 35,
            "sp": 60
        },
        "abilities": [
            "Electrocytes",
            "Static",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Plus",
            "Ground Shock"
        ],
        "weightkg": 20,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pichu Spiky Eared"
        ],
        "nfe": true
    },
    "Pikachu": {
        "id": 25,
        "bs": {
            "hp": 35,
            "at": 55,
            "df": 40,
            "sa": 50,
            "sd": 50,
            "sp": 95
        },
        "abilities": [
            "Electrocytes",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Static",
            "Ground Shock"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pikachu Cosplay",
            "Pikachu Rock Star",
            "Pikachu Belle",
            "Pikachu Pop Star",
            "Pikachu Ph D",
            "Pikachu Libre",
            "Pikachu Original Cap",
            "Pikachu Hoenn Cap",
            "Pikachu Sinnoh Cap",
            "Pikachu Unova Cap",
            "Pikachu Kalos Cap",
            "Pikachu Alola Cap",
            "Pikachu Partner Cap",
            "Pikachu World Cap"
        ],
        "nfe": true
    },
    "Raichu": {
        "id": 26,
        "bs": {
            "hp": 60,
            "at": 90,
            "df": 55,
            "sa": 90,
            "sd": 80,
            "sp": 115
        },
        "abilities": [
            "Earthbound",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Static",
            "Ground Shock"
        ],
        "weightkg": 300,
        "types": [
            "Electric",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Raichu Alolan"
        ]
    },
    "Raichu Alolan": {
        "id": 26,
        "bs": {
            "hp": 60,
            "at": 85,
            "df": 50,
            "sa": 95,
            "sd": 85,
            "sp": 115
        },
        "abilities": [
            "Psychic Mind",
            "Short Circuit",
            "Electro Surge"
        ],
        "innates": [
            "Surge Surfer",
            "Levitate",
            "Ground Shock"
        ],
        "weightkg": 300,
        "types": [
            "Electric",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Raichu"
        ]
    },
    "Pikachu Partner": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Ground Shock",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Electrocytes",
            "Overcharge"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Pikachu Mega": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 85,
            "df": 65,
            "sa": 135,
            "sd": 80,
            "sp": 120
        },
        "abilities": [
            "Ground Shock",
            "Overcharge",
            "Illuminate"
        ],
        "innates": [
            "Huge Power",
            "Thick Fat",
            "Thundercall"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Pikachu Kanto": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Ground Shock",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Electrocytes",
            "Overcharge"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Pikachu Hoenn": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Ground Shock",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Electrocytes",
            "Overcharge"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Pikachu Sinnoh": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Ground Shock",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Electrocytes",
            "Overcharge"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Pikachu Unova": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Ground Shock",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Electrocytes",
            "Overcharge"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Pikachu Kalos": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Ground Shock",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Electrocytes",
            "Overcharge"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Pikachu Alola": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Ground Shock",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Electrocytes",
            "Overcharge"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Pikachu World": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Ground Shock",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Electrocytes",
            "Overcharge"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Pikachu Cosplay": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Electrocytes",
            "Normalize",
            "Frisk"
        ],
        "innates": [
            "Pickup",
            "Anticipation",
            "Unaware"
        ],
        "weightkg": 60,
        "types": [
            "Electric",
            "Normal"
        ],
        "genderR": 254,
        "otherFormes": [
            "Pikachu"
        ]
    },
    "Pikachu Rock Star": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Electrocytes",
            "Power Metal",
            "Armor Tail"
        ],
        "innates": [
            "Steely Spirit",
            "Bulletproof",
            "Rhythmic"
        ],
        "weightkg": 60,
        "types": [
            "Electric",
            "Steel"
        ],
        "genderR": 254,
        "otherFormes": [
            "Pikachu"
        ]
    },
    "Pikachu Belle": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Electrocytes",
            "Refrigerate",
            "Ice Dew"
        ],
        "innates": [
            "Deep Freeze",
            "Water Absorb",
            "Ice Scales"
        ],
        "weightkg": 60,
        "types": [
            "Electric",
            "Ice"
        ],
        "genderR": 254,
        "otherFormes": [
            "Pikachu"
        ]
    },
    "Pikachu Pop Star": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Electrocytes",
            "Pixilate",
            "Costar"
        ],
        "innates": [
            "Pixie Power",
            "Subdue",
            "Serene Grace"
        ],
        "weightkg": 60,
        "types": [
            "Electric",
            "Fairy"
        ],
        "genderR": 254,
        "otherFormes": [
            "Pikachu"
        ]
    },
    "Pikachu Ph D": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Electrocytes",
            "Emanate",
            "Forewarn"
        ],
        "innates": [
            "Psychic Mind",
            "Inner Focus",
            "Tinted Lens"
        ],
        "weightkg": 60,
        "types": [
            "Electric",
            "Psychic"
        ],
        "genderR": 254,
        "otherFormes": [
            "Pikachu"
        ]
    },
    "Pikachu Libre": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Electrocytes",
            "Fighting Spirit",
            "No Guard"
        ],
        "innates": [
            "Fighter",
            "Aerodynamics",
            "Scrappy"
        ],
        "weightkg": 60,
        "types": [
            "Electric",
            "Fighting"
        ],
        "genderR": 254,
        "otherFormes": [
            "Pikachu"
        ]
    },
    "Pikachu Partner Cap": {
        "id": 25,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 50,
            "sa": 75,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Ground Shock",
            "Generator",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Electrocytes",
            "Overcharge"
        ],
        "weightkg": 60,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pikachu"
        ]
    },
    "Pichu Spiky": {
        "id": 172,
        "bs": {
            "hp": 20,
            "at": 40,
            "df": 15,
            "sa": 35,
            "sd": 35,
            "sp": 60
        },
        "abilities": [
            "Electrocytes",
            "Static",
            "Electric Burst"
        ],
        "innates": [
            "Short Circuit",
            "Plus",
            "Ground Shock"
        ],
        "weightkg": 20,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Cleffa": {
        "id": 173,
        "bs": {
            "hp": 50,
            "at": 25,
            "df": 28,
            "sa": 45,
            "sd": 55,
            "sp": 15
        },
        "abilities": [
            "Fairy Aura",
            "Wonder Skin",
            "Magic Guard"
        ],
        "innates": [
            "Unaware",
            "Overcoat",
            "Moon Spirit"
        ],
        "weightkg": 30,
        "types": [
            "Fairy"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Clefairy": {
        "id": 35,
        "bs": {
            "hp": 70,
            "at": 45,
            "df": 48,
            "sa": 60,
            "sd": 65,
            "sp": 35
        },
        "abilities": [
            "Fairy Aura",
            "Wonder Skin",
            "Magic Guard"
        ],
        "innates": [
            "Unaware",
            "Overcoat",
            "Moon Spirit"
        ],
        "weightkg": 75,
        "types": [
            "Fairy"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Clefable": {
        "id": 36,
        "bs": {
            "hp": 100,
            "at": 50,
            "df": 95,
            "sa": 95,
            "sd": 113,
            "sp": 55
        },
        "abilities": [
            "Fairy Aura",
            "Wonder Skin",
            "Magic Guard"
        ],
        "innates": [
            "Unaware",
            "Overcoat",
            "Moon Spirit"
        ],
        "weightkg": 400,
        "types": [
            "Fairy"
        ],
        "genderR": 190
    },
    "Cleffa Redux": {
        "id": 173,
        "bs": {
            "hp": 50,
            "at": 15,
            "df": 28,
            "sa": 55,
            "sd": 55,
            "sp": 15
        },
        "abilities": [
            "Friend Guard",
            "Magic Guard",
            "Loose Rocks"
        ],
        "innates": [
            "Solid Rock",
            "Dazzling",
            "Nocturnal"
        ],
        "weightkg": 30,
        "types": [
            "Rock"
        ],
        "genderR": 190
    },
    "Clefairy Redux": {
        "id": 35,
        "bs": {
            "hp": 70,
            "at": 20,
            "df": 58,
            "sa": 70,
            "sd": 65,
            "sp": 40
        },
        "abilities": [
            "Friend Guard",
            "Magic Guard",
            "Loose Rocks"
        ],
        "innates": [
            "Solid Rock",
            "Dazzling",
            "Nocturnal"
        ],
        "weightkg": 75,
        "types": [
            "Rock"
        ],
        "genderR": 190
    },
    "Clefable Redux": {
        "id": 36,
        "bs": {
            "hp": 95,
            "at": 50,
            "df": 83,
            "sa": 115,
            "sd": 90,
            "sp": 75
        },
        "abilities": [
            "Prism Armor",
            "Magic Guard",
            "Loose Rocks"
        ],
        "innates": [
            "Solid Rock",
            "Dazzling",
            "Nocturnal"
        ],
        "weightkg": 400,
        "types": [
            "Rock"
        ],
        "genderR": 190
    },
    "Clefable Mega": {
        "id": 36,
        "bs": {
            "hp": 95,
            "at": 55,
            "df": 103,
            "sa": 140,
            "sd": 120,
            "sp": 95
        },
        "abilities": [
            "Lunar Affinity",
            "Serene Grace",
            "Rocky Payload"
        ],
        "innates": [
            "Solid Rock",
            "Dazzling",
            "Moon Spirit"
        ],
        "weightkg": 400,
        "types": [
            "Rock"
        ],
        "genderR": 190
    },
    "Igglybuff": {
        "id": 174,
        "bs": {
            "hp": 90,
            "at": 30,
            "df": 15,
            "sa": 48,
            "sd": 20,
            "sp": 15
        },
        "abilities": [
            "Lullaby",
            "Competitive",
            "Magic Guard"
        ],
        "innates": [
            "Cute Charm",
            "Inflatable",
            "Let's Roll"
        ],
        "weightkg": 10,
        "types": [
            "Normal",
            "Fairy"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Togepi": {
        "id": 175,
        "bs": {
            "hp": 35,
            "at": 20,
            "df": 65,
            "sa": 40,
            "sd": 65,
            "sp": 20
        },
        "abilities": [
            "Prankster",
            "Hustle",
            "Cute Charm"
        ],
        "innates": [
            "Super Luck",
            "Shell Armor",
            "Serene Grace"
        ],
        "weightkg": 15,
        "types": [
            "Fairy"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Togetic": {
        "id": 176,
        "bs": {
            "hp": 70,
            "at": 40,
            "df": 85,
            "sa": 65,
            "sd": 105,
            "sp": 40
        },
        "abilities": [
            "Sweet Veil",
            "Regenerator",
            "Serene Grace"
        ],
        "innates": [
            "Shield Dust",
            "Self Sufficient",
            "Aerodynamics"
        ],
        "weightkg": 32,
        "types": [
            "Fairy",
            "Flying"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Natu": {
        "id": 177,
        "bs": {
            "hp": 40,
            "at": 50,
            "df": 45,
            "sa": 90,
            "sd": 45,
            "sp": 80
        },
        "abilities": [
            "Dreamcatcher",
            "Magic Guard",
            "Inversion"
        ],
        "innates": [
            "Keen Eye",
            "Forewarn",
            "Magic Bounce"
        ],
        "weightkg": 20,
        "types": [
            "Psychic",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Xatu": {
        "id": 178,
        "bs": {
            "hp": 65,
            "at": 75,
            "df": 70,
            "sa": 115,
            "sd": 70,
            "sp": 105
        },
        "abilities": [
            "Dreamcatcher",
            "Magic Guard",
            "Inversion"
        ],
        "innates": [
            "Keen Eye",
            "Forewarn",
            "Magic Bounce"
        ],
        "weightkg": 150,
        "types": [
            "Psychic",
            "Flying"
        ],
        "genderR": 127
    },
    "Mareep": {
        "id": 179,
        "bs": {
            "hp": 70,
            "at": 40,
            "df": 40,
            "sa": 65,
            "sd": 45,
            "sp": 35
        },
        "abilities": [
            "Short Circuit",
            "Dazzling",
            "Lightning Rod"
        ],
        "innates": [
            "Static",
            "Fluffy",
            "Cotton Down"
        ],
        "weightkg": 78,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Flaaffy": {
        "id": 180,
        "bs": {
            "hp": 85,
            "at": 55,
            "df": 55,
            "sa": 80,
            "sd": 60,
            "sp": 45
        },
        "abilities": [
            "Short Circuit",
            "Dazzling",
            "Lightning Rod"
        ],
        "innates": [
            "Static",
            "Fluffy",
            "Cotton Down"
        ],
        "weightkg": 133,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Ampharos": {
        "id": 181,
        "bs": {
            "hp": 110,
            "at": 75,
            "df": 85,
            "sa": 115,
            "sd": 90,
            "sp": 55
        },
        "abilities": [
            "Ground Shock",
            "Lightning Rod",
            "Electro Surge"
        ],
        "innates": [
            "Dazzling",
            "Short Circuit",
            "Overwhelm"
        ],
        "weightkg": 615,
        "types": [
            "Electric",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Ampharos Mega"
        ]
    },
    "Ampharos Mega": {
        "id": 181,
        "bs": {
            "hp": 110,
            "at": 95,
            "df": 105,
            "sa": 165,
            "sd": 110,
            "sp": 45
        },
        "abilities": [
            "Overwhelm",
            "Dazzling",
            "Mold Breaker"
        ],
        "innates": [
            "Fluffy",
            "Overcharge",
            "Transistor"
        ],
        "weightkg": 615,
        "types": [
            "Electric",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Ampharos"
        ]
    },
    "Bellossom": {
        "id": 182,
        "bs": {
            "hp": 90,
            "at": 60,
            "df": 105,
            "sa": 110,
            "sd": 100,
            "sp": 50
        },
        "abilities": [
            "Dancer",
            "Harvest",
            "Sun Worship"
        ],
        "innates": [
            "Chloroplast",
            "Healer",
            "Triage"
        ],
        "weightkg": 58,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Marill": {
        "id": 183,
        "bs": {
            "hp": 70,
            "at": 35,
            "df": 60,
            "sa": 70,
            "sd": 60,
            "sp": 40
        },
        "abilities": [
            "Sap Sipper",
            "Water Veil",
            "Damp"
        ],
        "innates": [
            "Thick Fat",
            "Huge Power",
            "Hydration"
        ],
        "weightkg": 85,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Azumarill": {
        "id": 184,
        "bs": {
            "hp": 100,
            "at": 65,
            "df": 90,
            "sa": 110,
            "sd": 90,
            "sp": 60
        },
        "abilities": [
            "Sap Sipper",
            "Misty Surge",
            "Rain Dish"
        ],
        "innates": [
            "Thick Fat",
            "Huge Power",
            "Water Veil"
        ],
        "weightkg": 285,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 127
    },
    "Sudowoodo": {
        "id": 185,
        "bs": {
            "hp": 70,
            "at": 110,
            "df": 125,
            "sa": 30,
            "sd": 65,
            "sp": 30
        },
        "abilities": [
            "Juggernaut",
            "Rock Head",
            "Water Compaction"
        ],
        "innates": [
            "Raw Wood",
            "Sturdy",
            "Lumberjack"
        ],
        "weightkg": 380,
        "types": [
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Politoed": {
        "id": 186,
        "bs": {
            "hp": 110,
            "at": 75,
            "df": 80,
            "sa": 100,
            "sd": 100,
            "sp": 70
        },
        "abilities": [
            "Storm Drain",
            "Unaware",
            "Hydrate"
        ],
        "innates": [
            "Damp",
            "Hydration",
            "Drizzle"
        ],
        "weightkg": 339,
        "types": [
            "Water",
            "Normal"
        ],
        "genderR": 127
    },
    "Hoppip": {
        "id": 187,
        "bs": {
            "hp": 35,
            "at": 45,
            "df": 40,
            "sa": 45,
            "sd": 55,
            "sp": 70
        },
        "abilities": [
            "Leaf Guard",
            "Infiltrator",
            "Guilt Trip"
        ],
        "innates": [
            "Chloroplast",
            "Aerodynamics",
            "Wind Rider"
        ],
        "weightkg": 5,
        "types": [
            "Grass",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Skiploom": {
        "id": 188,
        "bs": {
            "hp": 55,
            "at": 55,
            "df": 50,
            "sa": 55,
            "sd": 65,
            "sp": 100
        },
        "abilities": [
            "Leaf Guard",
            "Infiltrator",
            "Soothing Aroma"
        ],
        "innates": [
            "Chloroplast",
            "Aerodynamics",
            "Wind Rider"
        ],
        "weightkg": 10,
        "types": [
            "Grass",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Jumpluff": {
        "id": 189,
        "bs": {
            "hp": 75,
            "at": 85,
            "df": 70,
            "sa": 85,
            "sd": 90,
            "sp": 130
        },
        "abilities": [
            "Friend Guard",
            "Wind Rider",
            "Mega Launcher"
        ],
        "innates": [
            "Fluffy",
            "Aerodynamics",
            "Cotton Down"
        ],
        "weightkg": 30,
        "types": [
            "Grass",
            "Flying"
        ],
        "genderR": 127
    },
    "Aipom": {
        "id": 190,
        "bs": {
            "hp": 55,
            "at": 70,
            "df": 55,
            "sa": 40,
            "sd": 55,
            "sp": 90
        },
        "abilities": [
            "Super Luck",
            "Prankster",
            "Moody"
        ],
        "innates": [
            "Pickup",
            "Technician",
            "Skill Link"
        ],
        "weightkg": 115,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Sunkern": {
        "id": 191,
        "bs": {
            "hp": 55,
            "at": 55,
            "df": 55,
            "sa": 55,
            "sd": 55,
            "sp": 30
        },
        "abilities": [
            "Overcoat",
            "Grassy Surge",
            "Grass Pelt"
        ],
        "innates": [
            "Guilt Trip",
            "Coward",
            "Anticipation"
        ],
        "weightkg": 18,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Sunflora": {
        "id": 192,
        "bs": {
            "hp": 95,
            "at": 75,
            "df": 55,
            "sa": 105,
            "sd": 85,
            "sp": 55
        },
        "abilities": [
            "Flower Veil",
            "Grassy Surge",
            "Chlorophyll"
        ],
        "innates": [
            "Drought",
            "Solar Power",
            "Grass Pelt"
        ],
        "weightkg": 85,
        "types": [
            "Grass",
            "Fire"
        ],
        "genderR": 127
    },
    "Yanma": {
        "id": 193,
        "bs": {
            "hp": 65,
            "at": 65,
            "df": 45,
            "sa": 75,
            "sd": 45,
            "sp": 95
        },
        "abilities": [
            "Aerodynamics",
            "Infiltrator",
            "Tinted Lens"
        ],
        "innates": [
            "Speed Boost",
            "Compound Eyes",
            "Swarm"
        ],
        "weightkg": 380,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127
    },
    "Wooper": {
        "id": 194,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 60,
            "sa": 60,
            "sd": 60,
            "sp": 15
        },
        "abilities": [
            "Unaware",
            "Wonder Skin",
            "Damp"
        ],
        "innates": [
            "Oblivious",
            "Water Absorb",
            "Cute Charm"
        ],
        "weightkg": 85,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Wooper Paldean"
        ],
        "nfe": true
    },
    "Quagsire": {
        "id": 195,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 35
        },
        "abilities": [
            "Unaware",
            "Wonder Skin",
            "Damp"
        ],
        "innates": [
            "Oblivious",
            "Water Absorb",
            "Water Veil"
        ],
        "weightkg": 750,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Quagsire Mega"
        ]
    },
    "Quagsire Mega": {
        "id": 195,
        "bs": {
            "hp": 95,
            "at": 110,
            "df": 130,
            "sa": 110,
            "sd": 130,
            "sp": 35
        },
        "abilities": [
            "Unaware",
            "Wonder Skin",
            "Oblivious"
        ],
        "innates": [
            "Clueless",
            "Water Absorb",
            "Water Veil"
        ],
        "weightkg": 750,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Quagsire"
        ]
    },
    "Wooper Paldean": {
        "id": 194,
        "bs": {
            "hp": 55,
            "at": 55,
            "df": 60,
            "sa": 65,
            "sd": 65,
            "sp": 15
        },
        "abilities": [
            "Wonder Skin",
            "Unaware",
            "Damp"
        ],
        "innates": [
            "Toxic Debris",
            "Water Absorb",
            "Poison Point"
        ],
        "weightkg": 85,
        "types": [
            "Poison",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Wooper"
        ],
        "nfe": true
    },
    "Umbreon": {
        "id": 197,
        "bs": {
            "hp": 95,
            "at": 65,
            "df": 110,
            "sa": 60,
            "sd": 130,
            "sp": 65
        },
        "abilities": [
            "Poison Touch",
            "Predator",
            "Nocturnal"
        ],
        "innates": [
            "Self Sufficient",
            "Bad Luck",
            "Wonder Skin"
        ],
        "weightkg": 270,
        "types": [
            "Dark"
        ],
        "genderR": 31
    },
    "Murkrow": {
        "id": 198,
        "bs": {
            "hp": 60,
            "at": 85,
            "df": 52,
            "sa": 85,
            "sd": 52,
            "sp": 101
        },
        "abilities": [
            "Moody",
            "Bad Luck",
            "Prankster"
        ],
        "innates": [
            "Keen Eye",
            "Nocturnal",
            "Super Luck"
        ],
        "weightkg": 21,
        "types": [
            "Dark",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Misdreavus": {
        "id": 200,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 60,
            "sa": 85,
            "sd": 85,
            "sp": 85
        },
        "abilities": [
            "Trickster",
            "Prankster",
            "Surprise!"
        ],
        "innates": [
            "Levitate",
            "Shadow Tag",
            "Perish Body"
        ],
        "weightkg": 10,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Unown": {
        "id": 201,
        "bs": {
            "hp": 58,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "Regenerator"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown B",
            "Unown C",
            "Unown D",
            "Unown E",
            "Unown F",
            "Unown G",
            "Unown H",
            "Unown I",
            "Unown J",
            "Unown K",
            "Unown L",
            "Unown M",
            "Unown N",
            "Unown O",
            "Unown P",
            "Unown Q",
            "Unown R",
            "Unown S",
            "Unown T",
            "Unown U",
            "Unown V",
            "Unown W",
            "Unown X",
            "Unown Y",
            "Unown Z",
            "Unown Emark",
            "Unown Qmark"
        ]
    },
    "Unown Revelation": {
        "id": 201,
        "bs": {
            "hp": 58,
            "at": 138,
            "df": 133,
            "sa": 138,
            "sd": 133,
            "sp": 30
        },
        "abilities": [
            "Anticipation",
            "Minion Control",
            "Magic Bounce"
        ],
        "innates": [
            "Schooling",
            "Fort Knox",
            "Unown Power"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2
    },
    "Unown B": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown C": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown D": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown E": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown F": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown G": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown H": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown I": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown J": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown K": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown L": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown M": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown N": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown O": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown P": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown Q": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown R": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown S": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown T": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown U": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown V": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown W": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown X": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown Y": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown Z": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown Emark": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Unown Qmark": {
        "id": 201,
        "bs": {
            "hp": 48,
            "at": 72,
            "df": 48,
            "sa": 72,
            "sd": 48,
            "sp": 48
        },
        "abilities": [
            "Run Away",
            "Mystic Power",
            "Magic Guard"
        ],
        "innates": [
            "Schooling",
            "Levitate",
            "-------"
        ],
        "weightkg": 50,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Unown"
        ]
    },
    "Wobbuffet": {
        "id": 202,
        "bs": {
            "hp": 190,
            "at": 33,
            "df": 58,
            "sa": 33,
            "sd": 58,
            "sp": 33
        },
        "abilities": [
            "Magic Guard",
            "Soul Linker",
            "Coward"
        ],
        "innates": [
            "Sticky Hold",
            "Innards Out",
            "Shadow Tag"
        ],
        "weightkg": 285,
        "types": [
            "Psychic"
        ],
        "genderR": 127
    },
    "Girafarig": {
        "id": 203,
        "bs": {
            "hp": 70,
            "at": 100,
            "df": 65,
            "sa": 90,
            "sd": 65,
            "sp": 105
        },
        "abilities": [
            "Scare",
            "Contrary",
            "Sap Sipper"
        ],
        "innates": [
            "Multi Headed",
            "Nocturnal",
            "Strong Jaw"
        ],
        "weightkg": 415,
        "types": [
            "Normal",
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Pineco": {
        "id": 204,
        "bs": {
            "hp": 50,
            "at": 75,
            "df": 90,
            "sa": 35,
            "sd": 35,
            "sp": 15
        },
        "abilities": [
            "Sturdy",
            "Stall",
            "Loose Quills"
        ],
        "innates": [
            "Overcoat",
            "Battle Armor",
            "Aftermath"
        ],
        "weightkg": 72,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Forretress": {
        "id": 205,
        "bs": {
            "hp": 75,
            "at": 100,
            "df": 140,
            "sa": 60,
            "sd": 80,
            "sp": 20
        },
        "abilities": [
            "Sturdy",
            "Bulletproof",
            "Stamina"
        ],
        "innates": [
            "Overcoat",
            "Lead Coat",
            "Heatproof"
        ],
        "weightkg": 1258,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 127
    },
    "Dunsparce": {
        "id": 206,
        "bs": {
            "hp": 100,
            "at": 75,
            "df": 80,
            "sa": 80,
            "sd": 75,
            "sp": 55
        },
        "abilities": [
            "Serene Grace",
            "Field Explorer",
            "Unaware"
        ],
        "innates": [
            "Super Luck",
            "Run Away",
            "Coward"
        ],
        "weightkg": 140,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dudunsparce": {
        "id": 982,
        "bs": {
            "hp": 115,
            "at": 95,
            "df": 75,
            "sa": 95,
            "sd": 75,
            "sp": 65
        },
        "abilities": [
            "Mighty Horn",
            "Normalize",
            "Half Drake"
        ],
        "innates": [
            "Super Luck",
            "Own Tempo",
            "Serene Grace"
        ],
        "weightkg": 392,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Dudunsparce Three Segment"
        ]
    },
    "Dudunsparce Three": {
        "id": 982,
        "bs": {
            "hp": 135,
            "at": 90,
            "df": 80,
            "sa": 95,
            "sd": 85,
            "sp": 55
        },
        "abilities": [
            "Mighty Horn",
            "Tipping Point",
            "Unaware"
        ],
        "innates": [
            "Super Luck",
            "Let's Roll",
            "Serene Grace"
        ],
        "weightkg": 392,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Gligar": {
        "id": 207,
        "bs": {
            "hp": 65,
            "at": 75,
            "df": 105,
            "sa": 35,
            "sd": 65,
            "sp": 85
        },
        "abilities": [
            "Hyper Cutter",
            "Sand Veil",
            "Poison Heal"
        ],
        "innates": [
            "Grip Pincer",
            "Rough Skin",
            "Battle Armor"
        ],
        "weightkg": 648,
        "types": [
            "Ground",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Gliscor": {
        "id": 472,
        "bs": {
            "hp": 75,
            "at": 95,
            "df": 125,
            "sa": 45,
            "sd": 75,
            "sp": 95
        },
        "abilities": [
            "Tectonize",
            "Sand Veil",
            "Grip Pincer"
        ],
        "innates": [
            "Hyper Cutter",
            "Rough Skin",
            "Poison Heal"
        ],
        "weightkg": 425,
        "types": [
            "Ground",
            "Flying"
        ],
        "genderR": 127
    },
    "Gligar Redux": {
        "id": 207,
        "bs": {
            "hp": 55,
            "at": 85,
            "df": 85,
            "sa": 60,
            "sd": 50,
            "sp": 95
        },
        "abilities": [
            "Violent Rush",
            "Intoxicate",
            "Shell Armor"
        ],
        "innates": [
            "Grip Pincer",
            "Exploit Weakness",
            "Solenoglyphs"
        ],
        "weightkg": 648,
        "types": [
            "Poison",
            "Fire"
        ],
        "genderR": 127
    },
    "Gliscor Redux": {
        "id": 472,
        "bs": {
            "hp": 65,
            "at": 105,
            "df": 105,
            "sa": 70,
            "sd": 60,
            "sp": 105
        },
        "abilities": [
            "Violent Rush",
            "Intoxicate",
            "Shell Armor"
        ],
        "innates": [
            "Grip Pincer",
            "Exploit Weakness",
            "Venoblaze Pincers"
        ],
        "weightkg": 425,
        "types": [
            "Poison",
            "Fire"
        ],
        "genderR": 127
    },
    "Snubbull": {
        "id": 209,
        "bs": {
            "hp": 60,
            "at": 90,
            "df": 50,
            "sa": 40,
            "sd": 40,
            "sp": 50
        },
        "abilities": [
            "Intimidate",
            "Quick Feet",
            "Opportunist"
        ],
        "innates": [
            "Pixilate",
            "Strong Jaw",
            "Guts"
        ],
        "weightkg": 78,
        "types": [
            "Fairy",
            "Ground"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Granbull": {
        "id": 210,
        "bs": {
            "hp": 90,
            "at": 130,
            "df": 80,
            "sa": 60,
            "sd": 60,
            "sp": 75
        },
        "abilities": [
            "Intimidate",
            "Quick Feet",
            "Violent Rush"
        ],
        "innates": [
            "Pixilate",
            "Strong Jaw",
            "Guts"
        ],
        "weightkg": 487,
        "types": [
            "Fairy",
            "Ground"
        ],
        "genderR": 190,
        "otherFormes": [
            "Granbull Mega"
        ]
    },
    "Granbull Mega": {
        "id": 210,
        "bs": {
            "hp": 90,
            "at": 160,
            "df": 135,
            "sa": 70,
            "sd": 105,
            "sp": 35
        },
        "abilities": [
            "Tough Claws",
            "Restraining Order",
            "Friend Guard"
        ],
        "innates": [
            "Pretty Princess",
            "Defiant",
            "Hyper Aggressive"
        ],
        "weightkg": 487,
        "types": [
            "Fairy",
            "Ground"
        ],
        "genderR": 190,
        "otherFormes": [
            "Granbull"
        ]
    },
    "Qwilfish": {
        "id": 211,
        "bs": {
            "hp": 65,
            "at": 95,
            "df": 115,
            "sa": 55,
            "sd": 55,
            "sp": 85
        },
        "abilities": [
            "Innards Out",
            "Intoxicate",
            "Intimidate"
        ],
        "innates": [
            "Loose Quills",
            "Inflatable",
            "Poison Point"
        ],
        "weightkg": 39,
        "types": [
            "Water",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Qwilfish Hisuian"
        ]
    },
    "Qwilfish Hisuian": {
        "id": 211,
        "bs": {
            "hp": 65,
            "at": 95,
            "df": 85,
            "sa": 55,
            "sd": 55,
            "sp": 85
        },
        "abilities": [
            "Water Veil",
            "Skill Link",
            "Intimidate"
        ],
        "innates": [
            "Merciless",
            "Aftermath",
            "Toxic Debris"
        ],
        "weightkg": 39,
        "types": [
            "Dark",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Qwilfish"
        ],
        "nfe": true
    },
    "Shuckle": {
        "id": 213,
        "bs": {
            "hp": 30,
            "at": 10,
            "df": 230,
            "sa": 10,
            "sd": 230,
            "sp": 5
        },
        "abilities": [
            "Coward",
            "Let's Roll",
            "Contrary"
        ],
        "innates": [
            "Shell Armor",
            "Oblivious",
            "Solid Rock"
        ],
        "weightkg": 205,
        "types": [
            "Bug",
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Shuckle Mega"
        ]
    },
    "Shuckle Mega": {
        "id": 213,
        "bs": {
            "hp": 30,
            "at": 60,
            "df": 255,
            "sa": 10,
            "sd": 255,
            "sp": 5
        },
        "abilities": [
            "Self Sufficient",
            "Self Sufficient",
            "Self Sufficient"
        ],
        "innates": [
            "Multi Headed",
            "Juggernaut",
            "Unaware"
        ],
        "weightkg": 205,
        "types": [
            "Bug",
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Shuckle"
        ]
    },
    "Heracross": {
        "id": 214,
        "bs": {
            "hp": 80,
            "at": 125,
            "df": 75,
            "sa": 40,
            "sd": 95,
            "sp": 85
        },
        "abilities": [
            "Skill Link",
            "Violent Rush",
            "Moxie"
        ],
        "innates": [
            "Swarm",
            "Battle Armor",
            "Guts"
        ],
        "weightkg": 540,
        "types": [
            "Bug",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Heracross Mega"
        ]
    },
    "Heracross Mega": {
        "id": 214,
        "bs": {
            "hp": 80,
            "at": 185,
            "df": 115,
            "sa": 50,
            "sd": 95,
            "sp": 75
        },
        "abilities": [
            "Skill Link",
            "Fighting Spirit",
            "Weak Armor"
        ],
        "innates": [
            "Hunter's Horn",
            "Battle Armor",
            "Vital Spirit"
        ],
        "weightkg": 540,
        "types": [
            "Bug",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Heracross"
        ]
    },
    "Sneasel": {
        "id": 215,
        "bs": {
            "hp": 60,
            "at": 90,
            "df": 55,
            "sa": 35,
            "sd": 75,
            "sp": 115
        },
        "abilities": [
            "Hyper Aggressive",
            "Pickpocket",
            "Cheap Tactics"
        ],
        "innates": [
            "Freezing Point",
            "Infiltrator",
            "Tough Claws"
        ],
        "weightkg": 280,
        "types": [
            "Dark",
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sneasel Hisuian"
        ],
        "nfe": true
    },
    "Weavile": {
        "id": 461,
        "bs": {
            "hp": 70,
            "at": 120,
            "df": 65,
            "sa": 45,
            "sd": 85,
            "sp": 125
        },
        "abilities": [
            "Hyper Aggressive",
            "Violent Rush",
            "Pressure"
        ],
        "innates": [
            "Freezing Point",
            "Predator",
            "Tough Claws"
        ],
        "weightkg": 340,
        "types": [
            "Dark",
            "Ice"
        ],
        "genderR": 127
    },
    "Weavile Redux": {
        "id": 461,
        "bs": {
            "hp": 80,
            "at": 105,
            "df": 70,
            "sa": 60,
            "sd": 70,
            "sp": 125
        },
        "abilities": [
            "Sand Pit",
            "Technician",
            "Hyper Aggressive"
        ],
        "innates": [
            "Assassin's Tools",
            "Merciless",
            "Sniper"
        ],
        "weightkg": 340,
        "types": [
            "Ground",
            "Dark"
        ],
        "genderR": 127
    },
    "Weavile Mega": {
        "id": 461,
        "bs": {
            "hp": 70,
            "at": 135,
            "df": 85,
            "sa": 80,
            "sd": 85,
            "sp": 155
        },
        "abilities": [
            "Hyper Aggressive",
            "Violent Rush",
            "Technician"
        ],
        "innates": [
            "Pressure",
            "Predator",
            "Tough Claws"
        ],
        "weightkg": 340,
        "types": [
            "Dark",
            "Ice"
        ],
        "genderR": 127
    },
    "Sneasel Hisuian": {
        "id": 215,
        "bs": {
            "hp": 60,
            "at": 95,
            "df": 55,
            "sa": 35,
            "sd": 75,
            "sp": 115
        },
        "abilities": [
            "Serene Grace",
            "Corrosion",
            "Hyper Aggressive"
        ],
        "innates": [
            "Tough Claws",
            "Intoxicate",
            "Unburden"
        ],
        "weightkg": 280,
        "types": [
            "Poison",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sneasel"
        ],
        "nfe": true
    },
    "Teddiursa": {
        "id": 216,
        "bs": {
            "hp": 60,
            "at": 80,
            "df": 50,
            "sa": 50,
            "sd": 50,
            "sp": 60
        },
        "abilities": [
            "Scrappy",
            "Tough Claws",
            "Pickup"
        ],
        "innates": [
            "Guts",
            "Quick Feet",
            "Fur Coat"
        ],
        "weightkg": 88,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Ursaring": {
        "id": 217,
        "bs": {
            "hp": 90,
            "at": 130,
            "df": 75,
            "sa": 75,
            "sd": 75,
            "sp": 75
        },
        "abilities": [
            "Intimidate",
            "Tough Claws",
            "Predator"
        ],
        "innates": [
            "Guts",
            "Quick Feet",
            "Fur Coat"
        ],
        "weightkg": 1258,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Ursaluna": {
        "id": 901,
        "bs": {
            "hp": 130,
            "at": 140,
            "df": 105,
            "sa": 45,
            "sd": 80,
            "sp": 50
        },
        "abilities": [
            "Guts",
            "Scrappy",
            "Bulletproof"
        ],
        "innates": [
            "Tough Claws",
            "Predator",
            "Overcoat"
        ],
        "weightkg": 2900,
        "types": [
            "Ground",
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Ursaluna Mega",
            "Ursaluna Bloodmoon"
        ]
    },
    "Ursaluna Mega": {
        "id": 901,
        "bs": {
            "hp": 130,
            "at": 180,
            "df": 135,
            "sa": 45,
            "sd": 110,
            "sp": 50
        },
        "abilities": [
            "Guts",
            "Tough Claws",
            "Hyper Aggressive"
        ],
        "innates": [
            "Fluffy",
            "Predator",
            "Contempt"
        ],
        "weightkg": 2900,
        "types": [
            "Ground",
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Ursaluna"
        ]
    },
    "Ursaluna Bloodmoon": {
        "id": 901,
        "bs": {
            "hp": 113,
            "at": 70,
            "df": 120,
            "sa": 135,
            "sd": 65,
            "sp": 52
        },
        "abilities": [
            "Voodoo Power",
            "Scare",
            "Blood Price"
        ],
        "innates": [
            "Mind's Eye",
            "Moon Spirit",
            "Overcoat"
        ],
        "weightkg": 2900,
        "types": [
            "Normal",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Ursaluna"
        ]
    },
    "Slugma": {
        "id": 218,
        "bs": {
            "hp": 40,
            "at": 40,
            "df": 40,
            "sa": 70,
            "sd": 40,
            "sp": 20
        },
        "abilities": [
            "Simple",
            "Magma Armor",
            "Turboblaze"
        ],
        "innates": [
            "Molten Down",
            "Super Hot Goo",
            "Blaze"
        ],
        "weightkg": 350,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slugma Redux"
        ],
        "nfe": true
    },
    "Magcargo": {
        "id": 219,
        "bs": {
            "hp": 60,
            "at": 50,
            "df": 120,
            "sa": 90,
            "sd": 80,
            "sp": 30
        },
        "abilities": [
            "Simple",
            "Mountaineer",
            "Shell Armor"
        ],
        "innates": [
            "Molten Down",
            "Flash Fire",
            "Magma Armor"
        ],
        "weightkg": 550,
        "types": [
            "Fire",
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Magcargo Redux"
        ],
        "nfe": true
    },
    "Escarginite": {
        "id": 1028,
        "bs": {
            "hp": 90,
            "at": 50,
            "df": 130,
            "sa": 90,
            "sd": 105,
            "sp": 35
        },
        "abilities": [
            "Simple",
            "Anger Shell",
            "Shell Armor"
        ],
        "innates": [
            "Molten Down",
            "Flash Fire",
            "Flame Shield"
        ],
        "weightkg": 100,
        "types": [
            "Fire",
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Escarginite Redux"
        ]
    },
    "Slugma Redux": {
        "id": 218,
        "bs": {
            "hp": 50,
            "at": 40,
            "df": 50,
            "sa": 75,
            "sd": 20,
            "sp": 15
        },
        "abilities": [
            "Simple",
            "Power Core",
            "Loose Rocks"
        ],
        "innates": [
            "Shell Armor",
            "Natural Cure",
            "Harvest"
        ],
        "weightkg": 350,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slugma"
        ],
        "nfe": true
    },
    "Magcargo Redux": {
        "id": 219,
        "bs": {
            "hp": 70,
            "at": 50,
            "df": 140,
            "sa": 100,
            "sd": 45,
            "sp": 25
        },
        "abilities": [
            "Shell Armor",
            "Loose Rocks",
            "Power Core"
        ],
        "innates": [
            "Overcoat",
            "Harvest",
            "Impenetrable"
        ],
        "weightkg": 550,
        "types": [
            "Grass",
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Magcargo"
        ],
        "nfe": true
    },
    "Escarginite Redux": {
        "id": 1028,
        "bs": {
            "hp": 100,
            "at": 50,
            "df": 150,
            "sa": 100,
            "sd": 70,
            "sp": 30
        },
        "abilities": [
            "Shell Armor",
            "Loose Rocks",
            "Power Core"
        ],
        "innates": [
            "Overcoat",
            "Harvest",
            "Impenetrable"
        ],
        "weightkg": 100,
        "types": [
            "Grass",
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Escarginite"
        ]
    },
    "Swinub": {
        "id": 220,
        "bs": {
            "hp": 50,
            "at": 50,
            "df": 40,
            "sa": 30,
            "sd": 30,
            "sp": 50
        },
        "abilities": [
            "Oblivious",
            "Sheer Force",
            "Snow Cloak"
        ],
        "innates": [
            "Thick Fat",
            "Slush Rush",
            "Fluffy"
        ],
        "weightkg": 65,
        "types": [
            "Ice",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Piloswine": {
        "id": 221,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 80,
            "sa": 60,
            "sd": 60,
            "sp": 50
        },
        "abilities": [
            "Oblivious",
            "Mountaineer",
            "Ice Dew"
        ],
        "innates": [
            "Thick Fat",
            "Fur Coat",
            "Growing Tooth"
        ],
        "weightkg": 558,
        "types": [
            "Ice",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Corsola": {
        "id": 222,
        "bs": {
            "hp": 85,
            "at": 55,
            "df": 95,
            "sa": 85,
            "sd": 95,
            "sp": 35
        },
        "abilities": [
            "Sturdy",
            "Rough Skin",
            "Water Veil"
        ],
        "innates": [
            "Regenerator",
            "Natural Cure",
            "Solid Rock"
        ],
        "weightkg": 50,
        "types": [
            "Water",
            "Rock"
        ],
        "genderR": 190,
        "otherFormes": [
            "Corsola Galarian"
        ]
    },
    "Corsola Galarian": {
        "id": 222,
        "bs": {
            "hp": 60,
            "at": 55,
            "df": 100,
            "sa": 65,
            "sd": 100,
            "sp": 30
        },
        "abilities": [
            "Perish Body",
            "Rest in Peace",
            "Haunted Spirit"
        ],
        "innates": [
            "Cursed Body",
            "Sturdy",
            "Rattled"
        ],
        "weightkg": 50,
        "types": [
            "Ghost"
        ],
        "genderR": 190,
        "otherFormes": [
            "Corsola"
        ],
        "nfe": true
    },
    "Remoraid": {
        "id": 223,
        "bs": {
            "hp": 35,
            "at": 65,
            "df": 35,
            "sa": 65,
            "sd": 35,
            "sp": 65
        },
        "abilities": [
            "Artillery",
            "Moody",
            "Hustle"
        ],
        "innates": [
            "Torrent",
            "Swift Swim",
            "Sniper"
        ],
        "weightkg": 120,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Octillery": {
        "id": 224,
        "bs": {
            "hp": 75,
            "at": 65,
            "df": 95,
            "sa": 125,
            "sd": 95,
            "sp": 55
        },
        "abilities": [
            "Ambush",
            "Sniper",
            "Mega Launcher"
        ],
        "innates": [
            "Quick Draw",
            "Breakwater",
            "Predator"
        ],
        "weightkg": 285,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127
    },
    "Delibird": {
        "id": 225,
        "bs": {
            "hp": 80,
            "at": 105,
            "df": 55,
            "sa": 80,
            "sd": 55,
            "sp": 95
        },
        "abilities": [
            "Adaptability",
            "Prankster",
            "Slush Rush"
        ],
        "innates": [
            "Thick Fat",
            "Magic Bounce",
            "Christmas Spirit"
        ],
        "weightkg": 160,
        "types": [
            "Ice"
        ],
        "genderR": 127
    },
    "Mantine": {
        "id": 226,
        "bs": {
            "hp": 85,
            "at": 40,
            "df": 70,
            "sa": 90,
            "sd": 140,
            "sp": 70
        },
        "abilities": [
            "Regenerator",
            "Wonder Skin",
            "Drizzle"
        ],
        "innates": [
            "Rain Dish",
            "Water Absorb",
            "Water Veil"
        ],
        "weightkg": 2200,
        "types": [
            "Water",
            "Flying"
        ],
        "genderR": 127
    },
    "Skarmory": {
        "id": 227,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 140,
            "sa": 40,
            "sd": 70,
            "sp": 90
        },
        "abilities": [
            "Mirror Armor",
            "Light Metal",
            "Power Spot"
        ],
        "innates": [
            "Razor Sharp",
            "Lead Coat",
            "Battle Armor"
        ],
        "weightkg": 505,
        "types": [
            "Steel",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Skarmory Redux",
            "Skarmory Mega",
            "Skarmory Mega Redux"
        ]
    },
    "Skarmory Mega": {
        "id": 227,
        "bs": {
            "hp": 75,
            "at": 140,
            "df": 140,
            "sa": 40,
            "sd": 70,
            "sp": 130
        },
        "abilities": [
            "Steelworker",
            "Light Metal",
            "Flock"
        ],
        "innates": [
            "To The Bone",
            "Hyper Aggressive",
            "Lightning Rod"
        ],
        "weightkg": 505,
        "types": [
            "Steel",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Skarmory"
        ]
    },
    "Skarmory Redux": {
        "id": 227,
        "bs": {
            "hp": 75,
            "at": 110,
            "df": 90,
            "sa": 50,
            "sd": 60,
            "sp": 110
        },
        "abilities": [
            "Molten Down",
            "Momentum",
            "Aerodynamics"
        ],
        "innates": [
            "Levitate",
            "Keen Edge",
            "Opportunist"
        ],
        "weightkg": 505,
        "types": [
            "Steel",
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Skarmory"
        ]
    },
    "Skarmory Mega Redux": {
        "id": 227,
        "bs": {
            "hp": 75,
            "at": 130,
            "df": 100,
            "sa": 80,
            "sd": 70,
            "sp": 140
        },
        "abilities": [
            "Molten Blades",
            "Molten Down",
            "Momentum"
        ],
        "innates": [
            "Levitate",
            "Flame Body",
            "Speed Force"
        ],
        "weightkg": 505,
        "types": [
            "Steel",
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Skarmory"
        ]
    },
    "Houndour": {
        "id": 228,
        "bs": {
            "hp": 45,
            "at": 70,
            "df": 30,
            "sa": 80,
            "sd": 50,
            "sp": 75
        },
        "abilities": [
            "Flame Body",
            "Pyromancy",
            "Scare"
        ],
        "innates": [
            "Nocturnal",
            "Fae Hunter",
            "Equinox"
        ],
        "weightkg": 108,
        "types": [
            "Dark",
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Houndour Redux"
        ],
        "nfe": true
    },
    "Houndoom": {
        "id": 229,
        "bs": {
            "hp": 75,
            "at": 110,
            "df": 50,
            "sa": 110,
            "sd": 80,
            "sp": 105
        },
        "abilities": [
            "Strong Jaw",
            "Molten Down",
            "Solar Power"
        ],
        "innates": [
            "Nocturnal",
            "Fae Hunter",
            "Equinox"
        ],
        "weightkg": 350,
        "types": [
            "Dark",
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Houndoom Mega Redux",
            "Houndoom Redux",
            "Houndoom Mega"
        ]
    },
    "Houndoom Mega": {
        "id": 229,
        "bs": {
            "hp": 75,
            "at": 110,
            "df": 90,
            "sa": 140,
            "sd": 90,
            "sp": 125
        },
        "abilities": [
            "Infernal Rage",
            "Flaming Soul",
            "Solar Power"
        ],
        "innates": [
            "Hyper Aggressive",
            "Pyromancy",
            "Equinox"
        ],
        "weightkg": 350,
        "types": [
            "Dark",
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Houndoom"
        ]
    },
    "Houndour Redux": {
        "id": 228,
        "bs": {
            "hp": 45,
            "at": 50,
            "df": 35,
            "sa": 95,
            "sd": 50,
            "sp": 75
        },
        "abilities": [
            "Flare Boost",
            "Blood Price",
            "Berserk"
        ],
        "innates": [
            "Soul Eater",
            "Phantom Pain",
            "Vengeance"
        ],
        "weightkg": 108,
        "types": [
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Houndour"
        ],
        "nfe": true
    },
    "Houndoom Redux": {
        "id": 229,
        "bs": {
            "hp": 75,
            "at": 90,
            "df": 50,
            "sa": 130,
            "sd": 80,
            "sp": 105
        },
        "abilities": [
            "Flare Boost",
            "Blood Price",
            "Berserk"
        ],
        "innates": [
            "Soul Eater",
            "Phantom Pain",
            "Vengeance"
        ],
        "weightkg": 350,
        "types": [
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Houndoom"
        ]
    },
    "Houndoom Mega Redux": {
        "id": 229,
        "bs": {
            "hp": 75,
            "at": 115,
            "df": 60,
            "sa": 125,
            "sd": 120,
            "sp": 135
        },
        "abilities": [
            "Surprise!",
            "Smokey Maneuvers",
            "Blood Price"
        ],
        "innates": [
            "Haunted Spirit",
            "Contrary",
            "Purgatory"
        ],
        "weightkg": 350,
        "types": [
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Houndoom"
        ]
    },
    "Phanpy": {
        "id": 231,
        "bs": {
            "hp": 90,
            "at": 70,
            "df": 70,
            "sa": 40,
            "sd": 40,
            "sp": 40
        },
        "abilities": [
            "Sheer Force",
            "Thick Fat",
            "Stamina"
        ],
        "innates": [
            "Let's Roll",
            "Rough Skin",
            "Battle Armor"
        ],
        "weightkg": 335,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Donphan": {
        "id": 232,
        "bs": {
            "hp": 90,
            "at": 130,
            "df": 130,
            "sa": 60,
            "sd": 60,
            "sp": 50
        },
        "abilities": [
            "Sheer Force",
            "Thick Fat",
            "Stamina"
        ],
        "innates": [
            "Let's Roll",
            "Rough Skin",
            "Battle Armor"
        ],
        "weightkg": 1200,
        "types": [
            "Ground"
        ],
        "genderR": 127
    },
    "Porygon2": {
        "id": 233,
        "bs": {
            "hp": 85,
            "at": 80,
            "df": 90,
            "sa": 105,
            "sd": 95,
            "sp": 60
        },
        "abilities": [
            "Sighting System",
            "Trace",
            "Twist. Dimension"
        ],
        "innates": [
            "Levitate",
            "Analytic",
            "Self Repair"
        ],
        "weightkg": 325,
        "types": [
            "Normal"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Stantler": {
        "id": 234,
        "bs": {
            "hp": 73,
            "at": 115,
            "df": 62,
            "sa": 85,
            "sd": 65,
            "sp": 95
        },
        "abilities": [
            "Quick Feet",
            "Rivalry",
            "Sap Sipper"
        ],
        "innates": [
            "Intimidate",
            "Violent Rush",
            "Hypnotist"
        ],
        "weightkg": 712,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Smeargle": {
        "id": 235,
        "bs": {
            "hp": 55,
            "at": 20,
            "df": 35,
            "sa": 20,
            "sd": 45,
            "sp": 75
        },
        "abilities": [
            "Prankster",
            "Simple",
            "Moody"
        ],
        "innates": [
            "Own Tempo",
            "Technician",
            "Skill Link"
        ],
        "weightkg": 580,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Tyrogue": {
        "id": 236,
        "bs": {
            "hp": 55,
            "at": 55,
            "df": 35,
            "sa": 35,
            "sd": 55,
            "sp": 55
        },
        "abilities": [
            "Steadfast",
            "Technician",
            "Iron Fist"
        ],
        "innates": [
            "Guts",
            "Vital Spirit",
            "Quick Feet"
        ],
        "weightkg": 210,
        "types": [
            "Fighting"
        ],
        "genderR": 0,
        "nfe": true
    },
    "Hitmonlee": {
        "id": 106,
        "bs": {
            "hp": 80,
            "at": 120,
            "df": 53,
            "sa": 35,
            "sd": 110,
            "sp": 87
        },
        "abilities": [
            "Unburden",
            "Fatal Precision",
            "Violent Rush"
        ],
        "innates": [
            "Limber",
            "Reckless",
            "Striker"
        ],
        "weightkg": 498,
        "types": [
            "Fighting"
        ],
        "genderR": 0,
        "otherFormes": [
            "Hitmonlee Mega"
        ]
    },
    "Hitmonchan": {
        "id": 107,
        "bs": {
            "hp": 80,
            "at": 105,
            "df": 79,
            "sa": 35,
            "sd": 110,
            "sp": 76
        },
        "abilities": [
            "Fighting Spirit",
            "Blitz Boxer",
            "Raging Boxer"
        ],
        "innates": [
            "Inner Focus",
            "Fatal Precision",
            "Precise Fist"
        ],
        "weightkg": 502,
        "types": [
            "Fighting"
        ],
        "genderR": 0,
        "otherFormes": [
            "Hitmonchan Mega"
        ]
    },
    "Hitmontop": {
        "id": 237,
        "bs": {
            "hp": 80,
            "at": 95,
            "df": 95,
            "sa": 35,
            "sd": 110,
            "sp": 70
        },
        "abilities": [
            "Steadfast",
            "Fighting Spirit",
            "Contrary"
        ],
        "innates": [
            "Technician",
            "Intimidate",
            "Scrappy"
        ],
        "weightkg": 480,
        "types": [
            "Fighting"
        ],
        "genderR": 0,
        "otherFormes": [
            "Hitmontop Mega"
        ]
    },
    "Hitmonchan Mega": {
        "id": 107,
        "bs": {
            "hp": 80,
            "at": 145,
            "df": 99,
            "sa": 35,
            "sd": 120,
            "sp": 106
        },
        "abilities": [
            "Parry",
            "Parry",
            "Parry"
        ],
        "innates": [
            "Raging Boxer",
            "Power Fists",
            "Blitz Boxer"
        ],
        "weightkg": 502,
        "types": [
            "Fighting",
            "Ground"
        ],
        "genderR": 0,
        "otherFormes": [
            "Hitmonchan"
        ]
    },
    "Hitmonlee Mega": {
        "id": 106,
        "bs": {
            "hp": 80,
            "at": 140,
            "df": 73,
            "sa": 60,
            "sd": 110,
            "sp": 122
        },
        "abilities": [
            "Roundhouse",
            "Roundhouse",
            "Roundhouse"
        ],
        "innates": [
            "Hustle",
            "Mineralize",
            "Striker"
        ],
        "weightkg": 498,
        "types": [
            "Fighting",
            "Rock"
        ],
        "genderR": 0,
        "otherFormes": [
            "Hitmonlee"
        ]
    },
    "Hitmontop Mega": {
        "id": 237,
        "bs": {
            "hp": 80,
            "at": 135,
            "df": 115,
            "sa": 45,
            "sd": 135,
            "sp": 75
        },
        "abilities": [
            "Spinning Top",
            "Spinning Top",
            "Spinning Top"
        ],
        "innates": [
            "Technician",
            "Battle Armor",
            "Intimidate"
        ],
        "weightkg": 480,
        "types": [
            "Fighting",
            "Steel"
        ],
        "genderR": 0,
        "otherFormes": [
            "Hitmontop"
        ]
    },
    "Smoochum": {
        "id": 238,
        "bs": {
            "hp": 45,
            "at": 30,
            "df": 15,
            "sa": 85,
            "sd": 65,
            "sp": 65
        },
        "abilities": [
            "Oblivious",
            "Forewarn",
            "Hydration"
        ],
        "innates": [
            "Dry Skin",
            "Refrigerate",
            "Psychic Mind"
        ],
        "weightkg": 60,
        "types": [
            "Ice",
            "Psychic"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Elekid": {
        "id": 239,
        "bs": {
            "hp": 45,
            "at": 63,
            "df": 37,
            "sa": 65,
            "sd": 55,
            "sp": 95
        },
        "abilities": [
            "Power Fists",
            "Short Circuit",
            "Motor Drive"
        ],
        "innates": [
            "Fighter",
            "Vital Spirit",
            "Static"
        ],
        "weightkg": 235,
        "types": [
            "Electric"
        ],
        "genderR": 63,
        "nfe": true
    },
    "Magby": {
        "id": 240,
        "bs": {
            "hp": 45,
            "at": 75,
            "df": 37,
            "sa": 70,
            "sd": 55,
            "sp": 83
        },
        "abilities": [
            "Flame Body",
            "Flaming Soul",
            "Dust Cloud"
        ],
        "innates": [
            "Molten Down",
            "Vital Spirit",
            "Blaze"
        ],
        "weightkg": 214,
        "types": [
            "Fire"
        ],
        "genderR": 63,
        "nfe": true
    },
    "Miltank": {
        "id": 241,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 105,
            "sa": 55,
            "sd": 70,
            "sp": 110
        },
        "abilities": [
            "Self Sufficient",
            "Scrappy",
            "Stamina"
        ],
        "innates": [
            "Thick Fat",
            "Sap Sipper",
            "Juggernaut"
        ],
        "weightkg": 755,
        "types": [
            "Normal"
        ],
        "genderR": 254
    },
    "Raikou": {
        "id": 243,
        "bs": {
            "hp": 90,
            "at": 85,
            "df": 75,
            "sa": 115,
            "sd": 100,
            "sp": 115
        },
        "abilities": [
            "Transistor",
            "Ground Shock",
            "Drizzle"
        ],
        "innates": [
            "Overcharge",
            "Beast Boost",
            "Electro Surge"
        ],
        "weightkg": 1780,
        "types": [
            "Electric"
        ],
        "genderR": 2
    },
    "Entei": {
        "id": 244,
        "bs": {
            "hp": 115,
            "at": 115,
            "df": 85,
            "sa": 90,
            "sd": 75,
            "sp": 100
        },
        "abilities": [
            "Strong Jaw",
            "Flaming Soul",
            "Drought"
        ],
        "innates": [
            "Volcano Rage",
            "Beast Boost",
            "Molten Down"
        ],
        "weightkg": 1980,
        "types": [
            "Fire"
        ],
        "genderR": 2
    },
    "Suicune": {
        "id": 245,
        "bs": {
            "hp": 100,
            "at": 75,
            "df": 115,
            "sa": 90,
            "sd": 115,
            "sp": 85
        },
        "abilities": [
            "North Wind",
            "Prism Scales",
            "Drizzle"
        ],
        "innates": [
            "Aurora Borealis",
            "Water Veil",
            "Sea Guardian"
        ],
        "weightkg": 1870,
        "types": [
            "Water"
        ],
        "genderR": 2
    },
    "Larvitar": {
        "id": 246,
        "bs": {
            "hp": 50,
            "at": 64,
            "df": 50,
            "sa": 45,
            "sd": 50,
            "sp": 41
        },
        "abilities": [
            "Guts",
            "Sand Force",
            "Moxie"
        ],
        "innates": [
            "Solid Rock",
            "Mountaineer",
            "Rough Skin"
        ],
        "weightkg": 720,
        "types": [
            "Rock",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Larvitar Redux"
        ],
        "nfe": true
    },
    "Pupitar": {
        "id": 247,
        "bs": {
            "hp": 70,
            "at": 84,
            "df": 70,
            "sa": 65,
            "sd": 70,
            "sp": 51
        },
        "abilities": [
            "Shed Skin",
            "Sand Veil",
            "Battle Armor"
        ],
        "innates": [
            "Solid Rock",
            "Mountaineer",
            "Rough Skin"
        ],
        "weightkg": 1520,
        "types": [
            "Rock",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pupitar Redux"
        ],
        "nfe": true
    },
    "Tyranitar": {
        "id": 248,
        "bs": {
            "hp": 100,
            "at": 134,
            "df": 110,
            "sa": 95,
            "sd": 100,
            "sp": 61
        },
        "abilities": [
            "Predator",
            "Moxie",
            "Solid Rock"
        ],
        "innates": [
            "Impenetrable",
            "Juggernaut",
            "Sand Stream"
        ],
        "weightkg": 2020,
        "types": [
            "Rock",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Tyranitar Mega Redux",
            "Tyranitar Redux",
            "Tyranitar Mega"
        ]
    },
    "Tyranitar Mega": {
        "id": 248,
        "bs": {
            "hp": 100,
            "at": 164,
            "df": 150,
            "sa": 95,
            "sd": 120,
            "sp": 71
        },
        "abilities": [
            "Rough Skin",
            "Violent Rush",
            "Loose Rocks"
        ],
        "innates": [
            "Strong Jaw",
            "Juggernaut",
            "Primal Armor"
        ],
        "weightkg": 2020,
        "types": [
            "Rock",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Tyranitar"
        ]
    },
    "Larvitar Redux": {
        "id": 246,
        "bs": {
            "hp": 90,
            "at": 20,
            "df": 30,
            "sa": 90,
            "sd": 30,
            "sp": 40
        },
        "abilities": [
            "Determination",
            "Solar Power",
            "Loose Rocks"
        ],
        "innates": [
            "Magma Armor",
            "Furnace",
            "Molten Down"
        ],
        "weightkg": 720,
        "types": [
            "Rock",
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Larvitar"
        ],
        "nfe": true
    },
    "Pupitar Redux": {
        "id": 247,
        "bs": {
            "hp": 110,
            "at": 40,
            "df": 50,
            "sa": 110,
            "sd": 50,
            "sp": 50
        },
        "abilities": [
            "Solid Rock",
            "Drought",
            "Loose Rocks"
        ],
        "innates": [
            "Magma Armor",
            "Furnace",
            "Molten Down"
        ],
        "weightkg": 1520,
        "types": [
            "Rock",
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pupitar"
        ],
        "nfe": true
    },
    "Tyranitar Redux": {
        "id": 248,
        "bs": {
            "hp": 150,
            "at": 81,
            "df": 85,
            "sa": 134,
            "sd": 90,
            "sp": 60
        },
        "abilities": [
            "Solid Rock",
            "Drought",
            "Loose Rocks"
        ],
        "innates": [
            "Magma Armor",
            "Furnace",
            "Molten Down"
        ],
        "weightkg": 2020,
        "types": [
            "Rock",
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Tyranitar"
        ]
    },
    "Tyranitar Mega Redux": {
        "id": 248,
        "bs": {
            "hp": 150,
            "at": 91,
            "df": 103,
            "sa": 150,
            "sd": 126,
            "sp": 80
        },
        "abilities": [
            "Evaporate",
            "Evaporate",
            "Evaporate"
        ],
        "innates": [
            "Primal Armor",
            "Furnace",
            "Molten Down"
        ],
        "weightkg": 2020,
        "types": [
            "Rock",
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Tyranitar"
        ]
    },
    "Lugia": {
        "id": 249,
        "bs": {
            "hp": 106,
            "at": 90,
            "df": 130,
            "sa": 90,
            "sd": 154,
            "sp": 110
        },
        "abilities": [
            "Wonder Skin",
            "Weather Control",
            "Air Blower"
        ],
        "innates": [
            "Imposing Wings",
            "Multiscale",
            "Poseidon's Dominion"
        ],
        "weightkg": 2160,
        "types": [
            "Water",
            "Psychic"
        ],
        "genderR": 2
    },
    "Ho-Oh": {
        "id": 250,
        "bs": {
            "hp": 106,
            "at": 130,
            "df": 90,
            "sa": 110,
            "sd": 154,
            "sp": 90
        },
        "abilities": [
            "Regenerator",
            "Magic Guard",
            "Self Sufficient"
        ],
        "innates": [
            "Imposing Wings",
            "Majestic Bird",
            "Prism Scales"
        ],
        "weightkg": 1990,
        "types": [
            "Fire",
            "Fairy"
        ],
        "genderR": 2
    },
    "Celebi": {
        "id": 251,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 100,
            "sa": 100,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Self Sufficient",
            "Avenger",
            "Grass Pelt"
        ],
        "innates": [
            "Forewarn",
            "Natural Recovery",
            "Grassy Surge"
        ],
        "weightkg": 50,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 2
    },
    "Treecko": {
        "id": 252,
        "bs": {
            "hp": 40,
            "at": 65,
            "df": 45,
            "sa": 45,
            "sd": 55,
            "sp": 70
        },
        "abilities": [
            "Chloroplast",
            "Unburden",
            "Speed Force"
        ],
        "innates": [
            "Overgrow",
            "Sticky Hold",
            "Inner Focus"
        ],
        "weightkg": 50,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Grovyle": {
        "id": 253,
        "bs": {
            "hp": 50,
            "at": 85,
            "df": 60,
            "sa": 65,
            "sd": 65,
            "sp": 95
        },
        "abilities": [
            "Chloroplast",
            "Keen Edge",
            "Speed Force"
        ],
        "innates": [
            "Overgrow",
            "Skill Link",
            "Inner Focus"
        ],
        "weightkg": 216,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Sceptile": {
        "id": 254,
        "bs": {
            "hp": 70,
            "at": 105,
            "df": 70,
            "sa": 85,
            "sd": 85,
            "sp": 120
        },
        "abilities": [
            "Chloroplast",
            "Protean",
            "Skill Link"
        ],
        "innates": [
            "Overgrow",
            "Keen Edge",
            "Speed Force"
        ],
        "weightkg": 522,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sceptile Mega"
        ]
    },
    "Sceptile Mega": {
        "id": 254,
        "bs": {
            "hp": 70,
            "at": 145,
            "df": 75,
            "sa": 110,
            "sd": 85,
            "sp": 150
        },
        "abilities": [
            "Big Leaves",
            "Big Leaves",
            "Big Leaves"
        ],
        "innates": [
            "Forest Rage",
            "Speed Force",
            "Keen Edge"
        ],
        "weightkg": 522,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sceptile"
        ]
    },
    "Torchic": {
        "id": 255,
        "bs": {
            "hp": 45,
            "at": 70,
            "df": 40,
            "sa": 70,
            "sd": 50,
            "sp": 45
        },
        "abilities": [
            "Flock",
            "Aerodynamics",
            "Speed Boost"
        ],
        "innates": [
            "Blaze",
            "Flame Body",
            "Avenger"
        ],
        "weightkg": 25,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Combusken": {
        "id": 256,
        "bs": {
            "hp": 65,
            "at": 85,
            "df": 60,
            "sa": 85,
            "sd": 60,
            "sp": 65
        },
        "abilities": [
            "Iron Fist",
            "Aerodynamics",
            "Speed Boost"
        ],
        "innates": [
            "Blaze",
            "Flame Body",
            "Striker"
        ],
        "weightkg": 195,
        "types": [
            "Fire",
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Blaziken": {
        "id": 257,
        "bs": {
            "hp": 85,
            "at": 120,
            "df": 70,
            "sa": 110,
            "sd": 70,
            "sp": 80
        },
        "abilities": [
            "Iron Fist",
            "Aerodynamics",
            "Speed Boost"
        ],
        "innates": [
            "Blaze",
            "Flame Body",
            "Striker"
        ],
        "weightkg": 520,
        "types": [
            "Fire",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Blaziken Mega"
        ]
    },
    "Blaziken Mega": {
        "id": 257,
        "bs": {
            "hp": 85,
            "at": 160,
            "df": 80,
            "sa": 130,
            "sd": 80,
            "sp": 100
        },
        "abilities": [
            "Speed Boost",
            "Speed Boost",
            "Speed Boost"
        ],
        "innates": [
            "Hellblaze",
            "Roundhouse",
            "Striker"
        ],
        "weightkg": 520,
        "types": [
            "Fire",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Blaziken"
        ]
    },
    "Mudkip": {
        "id": 258,
        "bs": {
            "hp": 55,
            "at": 75,
            "df": 50,
            "sa": 50,
            "sd": 50,
            "sp": 40
        },
        "abilities": [
            "Swift Swim",
            "Multiscale",
            "Regenerator"
        ],
        "innates": [
            "Torrent",
            "Field Explorer",
            "Water Veil"
        ],
        "weightkg": 76,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Marshtomp": {
        "id": 259,
        "bs": {
            "hp": 80,
            "at": 90,
            "df": 70,
            "sa": 60,
            "sd": 70,
            "sp": 50
        },
        "abilities": [
            "Swift Swim",
            "Field Explorer",
            "Stamina"
        ],
        "innates": [
            "Torrent",
            "Dry Skin",
            "Battle Armor"
        ],
        "weightkg": 280,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Swampert": {
        "id": 260,
        "bs": {
            "hp": 100,
            "at": 110,
            "df": 100,
            "sa": 65,
            "sd": 100,
            "sp": 60
        },
        "abilities": [
            "Swift Swim",
            "Field Explorer",
            "Stamina"
        ],
        "innates": [
            "Torrent",
            "Dry Skin",
            "Regenerator"
        ],
        "weightkg": 819,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Swampert Mega"
        ]
    },
    "Swampert Mega": {
        "id": 260,
        "bs": {
            "hp": 100,
            "at": 150,
            "df": 130,
            "sa": 75,
            "sd": 110,
            "sp": 70
        },
        "abilities": [
            "Breakwater",
            "Breakwater",
            "Breakwater"
        ],
        "innates": [
            "Riptide",
            "Iron Fist",
            "Regenerator"
        ],
        "weightkg": 819,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Swampert"
        ]
    },
    "Poochyena": {
        "id": 261,
        "bs": {
            "hp": 35,
            "at": 80,
            "df": 35,
            "sa": 30,
            "sd": 50,
            "sp": 80
        },
        "abilities": [
            "Moxie",
            "Intimidate",
            "Strong Jaw"
        ],
        "innates": [
            "Nocturnal",
            "Guard Dog",
            "Stakeout"
        ],
        "weightkg": 136,
        "types": [
            "Dark"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Mightyena": {
        "id": 262,
        "bs": {
            "hp": 70,
            "at": 110,
            "df": 70,
            "sa": 60,
            "sd": 80,
            "sp": 105
        },
        "abilities": [
            "Moxie",
            "Intimidate",
            "Strong Jaw"
        ],
        "innates": [
            "Nocturnal",
            "Guard Dog",
            "Stakeout"
        ],
        "weightkg": 370,
        "types": [
            "Dark"
        ],
        "genderR": 127
    },
    "Zigzagoon": {
        "id": 263,
        "bs": {
            "hp": 38,
            "at": 60,
            "df": 41,
            "sa": 30,
            "sd": 41,
            "sp": 70
        },
        "abilities": [
            "Momentum",
            "Scrappy",
            "Looter"
        ],
        "innates": [
            "Pickup",
            "Speed Force",
            "Limber"
        ],
        "weightkg": 175,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Zigzagoon Galarian"
        ],
        "nfe": true
    },
    "Linoone": {
        "id": 264,
        "bs": {
            "hp": 78,
            "at": 100,
            "df": 61,
            "sa": 50,
            "sd": 61,
            "sp": 110
        },
        "abilities": [
            "Pickup",
            "Momentum",
            "Gluttony"
        ],
        "innates": [
            "Field Explorer",
            "Speed Force",
            "Quick Feet"
        ],
        "weightkg": 325,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Linoone Galarian"
        ]
    },
    "Zigzagoon Galarian": {
        "id": 263,
        "bs": {
            "hp": 38,
            "at": 60,
            "df": 41,
            "sa": 30,
            "sd": 41,
            "sp": 70
        },
        "abilities": [
            "Pickup",
            "Gluttony",
            "Looter"
        ],
        "innates": [
            "Scrappy",
            "Quick Feet",
            "Guts"
        ],
        "weightkg": 175,
        "types": [
            "Dark",
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Zigzagoon"
        ],
        "nfe": true
    },
    "Linoone Galarian": {
        "id": 264,
        "bs": {
            "hp": 78,
            "at": 100,
            "df": 61,
            "sa": 50,
            "sd": 61,
            "sp": 110
        },
        "abilities": [
            "Pickup",
            "Gluttony",
            "Quick Feet"
        ],
        "innates": [
            "Scrappy",
            "Hyper Aggressive",
            "Guts"
        ],
        "weightkg": 325,
        "types": [
            "Dark",
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Linoone"
        ],
        "nfe": true
    },
    "Wurmple": {
        "id": 265,
        "bs": {
            "hp": 45,
            "at": 45,
            "df": 35,
            "sa": 20,
            "sd": 30,
            "sp": 20
        },
        "abilities": [
            "Shield Dust",
            "Suction Cups",
            "Poison Point"
        ],
        "innates": [
            "Swarm",
            "Run Away",
            "Sap Sipper"
        ],
        "weightkg": 36,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Cascoon": {
        "id": 268,
        "bs": {
            "hp": 50,
            "at": 35,
            "df": 25,
            "sa": 25,
            "sd": 55,
            "sp": 15
        },
        "abilities": [
            "Sap Sipper",
            "Swarm",
            "Stamina"
        ],
        "innates": [
            "Poison Point",
            "Battle Armor",
            "Shed Skin"
        ],
        "weightkg": 115,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "otherFormes": [
            "Cascoon Primal"
        ],
        "nfe": true
    },
    "Cascoon Primal": {
        "id": 268,
        "bs": {
            "hp": 121,
            "at": 121,
            "df": 121,
            "sa": 121,
            "sd": 121,
            "sp": 121
        },
        "abilities": [
            "Angel's Wrath",
            "Angel's Wrath",
            "Angel's Wrath"
        ],
        "innates": [
            "Color Change",
            "Impenetrable",
            "Adaptability"
        ],
        "weightkg": 115,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "otherFormes": [
            "Cascoon"
        ]
    },
    "Silcoon": {
        "id": 266,
        "bs": {
            "hp": 50,
            "at": 35,
            "df": 55,
            "sa": 25,
            "sd": 25,
            "sp": 15
        },
        "abilities": [
            "Sap Sipper",
            "Swarm",
            "Stamina"
        ],
        "innates": [
            "Poison Point",
            "Battle Armor",
            "Shed Skin"
        ],
        "weightkg": 100,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Beautifly": {
        "id": 267,
        "bs": {
            "hp": 65,
            "at": 50,
            "df": 60,
            "sa": 95,
            "sd": 95,
            "sp": 85
        },
        "abilities": [
            "Shield Dust",
            "Giant Wings",
            "Aerodynamics"
        ],
        "innates": [
            "Majestic Moth",
            "Dazzling",
            "Levitate"
        ],
        "weightkg": 284,
        "types": [
            "Bug",
            "Fairy"
        ],
        "genderR": 127
    },
    "Dustox": {
        "id": 269,
        "bs": {
            "hp": 85,
            "at": 30,
            "df": 100,
            "sa": 70,
            "sd": 100,
            "sp": 65
        },
        "abilities": [
            "Poison Touch",
            "Shield Dust",
            "Aerodynamics"
        ],
        "innates": [
            "Majestic Moth",
            "Nocturnal",
            "Levitate"
        ],
        "weightkg": 316,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127
    },
    "Lotad": {
        "id": 270,
        "bs": {
            "hp": 40,
            "at": 30,
            "df": 30,
            "sa": 50,
            "sd": 50,
            "sp": 40
        },
        "abilities": [
            "Swift Swim",
            "Chlorophyll",
            "Own Tempo"
        ],
        "innates": [
            "Seaweed",
            "Rain Dish",
            "Hydration"
        ],
        "weightkg": 26,
        "types": [
            "Water",
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Lombre": {
        "id": 271,
        "bs": {
            "hp": 60,
            "at": 50,
            "df": 50,
            "sa": 70,
            "sd": 70,
            "sp": 60
        },
        "abilities": [
            "Swift Swim",
            "Chlorophyll",
            "Own Tempo"
        ],
        "innates": [
            "Seaweed",
            "Rain Dish",
            "Hydration"
        ],
        "weightkg": 325,
        "types": [
            "Water",
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Ludicolo": {
        "id": 272,
        "bs": {
            "hp": 80,
            "at": 70,
            "df": 70,
            "sa": 100,
            "sd": 100,
            "sp": 80
        },
        "abilities": [
            "Swift Swim",
            "Chloroplast",
            "Dancer"
        ],
        "innates": [
            "Seaweed",
            "Rain Dish",
            "Hydration"
        ],
        "weightkg": 550,
        "types": [
            "Water",
            "Grass"
        ],
        "genderR": 127
    },
    "Seedot": {
        "id": 273,
        "bs": {
            "hp": 40,
            "at": 50,
            "df": 50,
            "sa": 40,
            "sd": 30,
            "sp": 30
        },
        "abilities": [
            "Aftermath",
            "Scare",
            "Defiant"
        ],
        "innates": [
            "Overgrow",
            "Chlorophyll",
            "Overcoat"
        ],
        "weightkg": 40,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Nuzleaf": {
        "id": 274,
        "bs": {
            "hp": 70,
            "at": 80,
            "df": 40,
            "sa": 70,
            "sd": 40,
            "sp": 60
        },
        "abilities": [
            "Early Bird",
            "Moxie",
            "Defiant"
        ],
        "innates": [
            "Overgrow",
            "Chlorophyll",
            "Nocturnal"
        ],
        "weightkg": 280,
        "types": [
            "Grass",
            "Dark"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Shiftry": {
        "id": 275,
        "bs": {
            "hp": 90,
            "at": 110,
            "df": 60,
            "sa": 100,
            "sd": 60,
            "sp": 80
        },
        "abilities": [
            "Chlorophyll",
            "Moxie",
            "Defiant"
        ],
        "innates": [
            "Overgrow",
            "Wind Rider",
            "Nocturnal"
        ],
        "weightkg": 596,
        "types": [
            "Grass",
            "Dark"
        ],
        "genderR": 127
    },
    "Taillow": {
        "id": 276,
        "bs": {
            "hp": 40,
            "at": 55,
            "df": 30,
            "sa": 55,
            "sd": 30,
            "sp": 85
        },
        "abilities": [
            "Guts",
            "Air Blower",
            "Determination"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Scrappy"
        ],
        "weightkg": 23,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Swellow": {
        "id": 277,
        "bs": {
            "hp": 60,
            "at": 85,
            "df": 60,
            "sa": 85,
            "sd": 50,
            "sp": 125
        },
        "abilities": [
            "Guts",
            "Air Blower",
            "Determination"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Scrappy"
        ],
        "weightkg": 198,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127
    },
    "Wingull": {
        "id": 278,
        "bs": {
            "hp": 40,
            "at": 30,
            "df": 30,
            "sa": 55,
            "sd": 30,
            "sp": 85
        },
        "abilities": [
            "Drizzle",
            "Hydration",
            "Aerodynamics"
        ],
        "innates": [
            "Keen Eye",
            "Rain Dish",
            "Flock"
        ],
        "weightkg": 95,
        "types": [
            "Water",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Pelipper": {
        "id": 279,
        "bs": {
            "hp": 60,
            "at": 50,
            "df": 100,
            "sa": 95,
            "sd": 70,
            "sp": 65
        },
        "abilities": [
            "Drizzle",
            "Retriever",
            "Air Blower"
        ],
        "innates": [
            "Keen Eye",
            "Rain Dish",
            "Flock"
        ],
        "weightkg": 280,
        "types": [
            "Water",
            "Flying"
        ],
        "genderR": 127
    },
    "Ralts": {
        "id": 280,
        "bs": {
            "hp": 33,
            "at": 25,
            "df": 30,
            "sa": 50,
            "sd": 45,
            "sp": 50
        },
        "abilities": [
            "Telepathy",
            "Trace",
            "Serene Grace"
        ],
        "innates": [
            "Anticipation",
            "Magic Guard",
            "Inner Focus"
        ],
        "weightkg": 66,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Kirlia": {
        "id": 281,
        "bs": {
            "hp": 48,
            "at": 35,
            "df": 40,
            "sa": 75,
            "sd": 55,
            "sp": 60
        },
        "abilities": [
            "Telepathy",
            "Trace",
            "Serene Grace"
        ],
        "innates": [
            "Anticipation",
            "Magic Guard",
            "Inner Focus"
        ],
        "weightkg": 202,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Gardevoir": {
        "id": 282,
        "bs": {
            "hp": 68,
            "at": 60,
            "df": 65,
            "sa": 125,
            "sd": 115,
            "sp": 100
        },
        "abilities": [
            "Queenly Majesty",
            "Soul-Heart",
            "Psychic Surge"
        ],
        "innates": [
            "Serene Grace",
            "Magic Guard",
            "Dreamcatcher"
        ],
        "weightkg": 484,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gardevoir Mega"
        ]
    },
    "Gallade": {
        "id": 475,
        "bs": {
            "hp": 68,
            "at": 125,
            "df": 65,
            "sa": 60,
            "sd": 115,
            "sp": 100
        },
        "abilities": [
            "Speed Force",
            "Sweeping Edge",
            "Sheer Force"
        ],
        "innates": [
            "Dual Wield",
            "Fatal Precision",
            "Avenger"
        ],
        "weightkg": 520,
        "types": [
            "Psychic",
            "Fighting"
        ],
        "genderR": 0,
        "otherFormes": [
            "Gallade Mega"
        ]
    },
    "Gardevoir Mega": {
        "id": 282,
        "bs": {
            "hp": 68,
            "at": 85,
            "df": 80,
            "sa": 165,
            "sd": 135,
            "sp": 100
        },
        "abilities": [
            "Pixilate",
            "Pixilate",
            "Pixilate"
        ],
        "innates": [
            "Serene Grace",
            "Magic Guard",
            "Soul-Heart"
        ],
        "weightkg": 484,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gardevoir"
        ]
    },
    "Gallade Mega": {
        "id": 475,
        "bs": {
            "hp": 68,
            "at": 135,
            "df": 95,
            "sa": 95,
            "sd": 125,
            "sp": 115
        },
        "abilities": [
            "Intrepid Sword",
            "Intrepid Sword",
            "Intrepid Sword"
        ],
        "innates": [
            "Dual Wield",
            "Fatal Precision",
            "Avenger"
        ],
        "weightkg": 520,
        "types": [
            "Psychic",
            "Fighting"
        ],
        "genderR": 0,
        "otherFormes": [
            "Gallade"
        ]
    },
    "Surskit": {
        "id": 283,
        "bs": {
            "hp": 40,
            "at": 30,
            "df": 42,
            "sa": 50,
            "sd": 52,
            "sp": 65
        },
        "abilities": [
            "Swift Swim",
            "Aroma Veil",
            "Rain Dish"
        ],
        "innates": [
            "Torrent",
            "Unnerve",
            "Water Bubble"
        ],
        "weightkg": 17,
        "types": [
            "Bug",
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Masquerain": {
        "id": 284,
        "bs": {
            "hp": 70,
            "at": 60,
            "df": 72,
            "sa": 100,
            "sd": 83,
            "sp": 100
        },
        "abilities": [
            "Intimidate",
            "Scare",
            "Unnerve"
        ],
        "innates": [
            "Compound Eyes",
            "Majestic Moth",
            "Aerialist"
        ],
        "weightkg": 36,
        "types": [
            "Bug",
            "Water"
        ],
        "genderR": 127
    },
    "Shroomish": {
        "id": 285,
        "bs": {
            "hp": 60,
            "at": 40,
            "df": 60,
            "sa": 40,
            "sd": 60,
            "sp": 35
        },
        "abilities": [
            "Poison Heal",
            "Technician",
            "Dry Skin"
        ],
        "innates": [
            "Effect Spore",
            "Toxic Boost",
            "Quick Feet"
        ],
        "weightkg": 45,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Breloom": {
        "id": 286,
        "bs": {
            "hp": 60,
            "at": 130,
            "df": 80,
            "sa": 60,
            "sd": 60,
            "sp": 70
        },
        "abilities": [
            "Poison Heal",
            "Precise Fist",
            "Long Reach"
        ],
        "innates": [
            "Effect Spore",
            "Toxic Boost",
            "Technician"
        ],
        "weightkg": 392,
        "types": [
            "Grass",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Breloom Mega"
        ]
    },
    "Breloom Mega": {
        "id": 286,
        "bs": {
            "hp": 60,
            "at": 140,
            "df": 130,
            "sa": 50,
            "sd": 110,
            "sp": 70
        },
        "abilities": [
            "Long Reach",
            "Stamina",
            "Avenger"
        ],
        "innates": [
            "Perfectionist",
            "Technician",
            "Fungal Infection"
        ],
        "weightkg": 392,
        "types": [
            "Grass",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Breloom"
        ]
    },
    "Slakoth": {
        "id": 287,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 60,
            "sa": 35,
            "sd": 35,
            "sp": 50
        },
        "abilities": [
            "Oblivious",
            "Scrappy",
            "Moody"
        ],
        "innates": [
            "Comatose",
            "Unaware",
            "Tough Claws"
        ],
        "weightkg": 240,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Vigoroth": {
        "id": 288,
        "bs": {
            "hp": 80,
            "at": 80,
            "df": 80,
            "sa": 55,
            "sd": 55,
            "sp": 90
        },
        "abilities": [
            "Sheer Force",
            "Moxie",
            "Scrappy"
        ],
        "innates": [
            "Anger Point",
            "Hyper Aggressive",
            "Vital Spirit"
        ],
        "weightkg": 465,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Slaking": {
        "id": 289,
        "bs": {
            "hp": 130,
            "at": 160,
            "df": 110,
            "sa": 75,
            "sd": 75,
            "sp": 100
        },
        "abilities": [
            "Stall",
            "Comatose",
            "Gorilla Tactics"
        ],
        "innates": [
            "Truant",
            "Mold Breaker",
            "Unaware"
        ],
        "weightkg": 1305,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slaking Mega"
        ]
    },
    "Slaking Mega": {
        "id": 289,
        "bs": {
            "hp": 130,
            "at": 210,
            "df": 110,
            "sa": 85,
            "sd": 105,
            "sp": 110
        },
        "abilities": [
            "Rude Awakening",
            "Know Your Place",
            "Contempt"
        ],
        "innates": [
            "Ape Shift",
            "Truant",
            "Crystallize"
        ],
        "weightkg": 1305,
        "types": [
            "Normal",
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Slaking"
        ]
    },
    "Slaking Mega Ape Shift": {
        "id": 289,
        "bs": {
            "hp": 130,
            "at": 210,
            "df": 110,
            "sa": 85,
            "sd": 105,
            "sp": 110
        },
        "abilities": [
            "Rude Awakening",
            "Know Your Place",
            "Contempt"
        ],
        "innates": [
            "Ape Shift",
            "Mold Breaker",
            "Crystallize"
        ],
        "weightkg": 1305,
        "types": [
            "Normal",
            "Ice"
        ],
        "genderR": 127
    },
    "Nincada": {
        "id": 290,
        "bs": {
            "hp": 31,
            "at": 55,
            "df": 90,
            "sa": 30,
            "sd": 30,
            "sp": 50
        },
        "abilities": [
            "Anticipation",
            "Coward",
            "Dry Skin"
        ],
        "innates": [
            "Shed Skin",
            "Shell Armor",
            "Earthbound"
        ],
        "weightkg": 55,
        "types": [
            "Bug",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Shedinja": {
        "id": 292,
        "bs": {
            "hp": 1,
            "at": 90,
            "df": 45,
            "sa": 70,
            "sd": 30,
            "sp": 80
        },
        "abilities": [
            "Overcoat",
            "Suppress",
            "Shallow Grave"
        ],
        "innates": [
            "Wonder Guard",
            "Haunted Spirit",
            "Adaptability"
        ],
        "weightkg": 12,
        "types": [
            "Bug",
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Shedinja Mega"
        ]
    },
    "Shedinja Mega": {
        "id": 292,
        "bs": {
            "hp": 1,
            "at": 120,
            "df": 45,
            "sa": 100,
            "sd": 30,
            "sp": 120
        },
        "abilities": [
            "Cheating Death",
            "Cheating Death",
            "Cheating Death"
        ],
        "innates": [
            "Tinted Lens",
            "Magic Guard",
            "Dead Power"
        ],
        "weightkg": 12,
        "types": [
            "Bug",
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Shedinja"
        ]
    },
    "Ninjask": {
        "id": 291,
        "bs": {
            "hp": 61,
            "at": 100,
            "df": 45,
            "sa": 50,
            "sd": 50,
            "sp": 160
        },
        "abilities": [
            "Aerodynamics",
            "Speed Force",
            "Aerilate"
        ],
        "innates": [
            "Compound Eyes",
            "Infiltrator",
            "Speed Boost"
        ],
        "weightkg": 120,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127
    },
    "Whismur": {
        "id": 293,
        "bs": {
            "hp": 74,
            "at": 51,
            "df": 33,
            "sa": 71,
            "sd": 33,
            "sp": 38
        },
        "abilities": [
            "Loud Bang",
            "Competitive",
            "Sheer Force"
        ],
        "innates": [
            "Soundproof",
            "Scrappy",
            "Amplifier"
        ],
        "weightkg": 163,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Whismur Redux"
        ],
        "nfe": true
    },
    "Loudred": {
        "id": 294,
        "bs": {
            "hp": 94,
            "at": 71,
            "df": 53,
            "sa": 91,
            "sd": 53,
            "sp": 58
        },
        "abilities": [
            "Loud Bang",
            "Competitive",
            "Sheer Force"
        ],
        "innates": [
            "Soundproof",
            "Scrappy",
            "Amplifier"
        ],
        "weightkg": 405,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Loudred Redux"
        ],
        "nfe": true
    },
    "Exploud": {
        "id": 295,
        "bs": {
            "hp": 134,
            "at": 101,
            "df": 73,
            "sa": 131,
            "sd": 73,
            "sp": 88
        },
        "abilities": [
            "Punk Rock",
            "Scrappy",
            "Mold Breaker"
        ],
        "innates": [
            "Competitive",
            "Loud Bang",
            "Amplifier"
        ],
        "weightkg": 840,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Exploud Redux"
        ]
    },
    "Whismur Redux": {
        "id": 293,
        "bs": {
            "hp": 84,
            "at": 36,
            "df": 53,
            "sa": 45,
            "sd": 63,
            "sp": 19
        },
        "abilities": [
            "Soundproof",
            "Loud Bang",
            "Lightning Rod"
        ],
        "innates": [
            "White Noise",
            "Galvanize",
            "Amplifier"
        ],
        "weightkg": 163,
        "types": [
            "Ghost",
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Whismur"
        ],
        "nfe": true
    },
    "Loudred Redux": {
        "id": 294,
        "bs": {
            "hp": 104,
            "at": 62,
            "df": 73,
            "sa": 71,
            "sd": 83,
            "sp": 39
        },
        "abilities": [
            "Noise Cancel",
            "Loud Bang",
            "Lightning Rod"
        ],
        "innates": [
            "White Noise",
            "Galvanize",
            "Amplifier"
        ],
        "weightkg": 405,
        "types": [
            "Ghost",
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Loudred"
        ],
        "nfe": true
    },
    "Exploud Redux": {
        "id": 295,
        "bs": {
            "hp": 134,
            "at": 61,
            "df": 103,
            "sa": 91,
            "sd": 113,
            "sp": 98
        },
        "abilities": [
            "Noise Cancel",
            "Radio Jam",
            "Lightning Rod"
        ],
        "innates": [
            "White Noise",
            "Galvanize",
            "Amplifier"
        ],
        "weightkg": 840,
        "types": [
            "Electric",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Exploud"
        ]
    },
    "Makuhita": {
        "id": 296,
        "bs": {
            "hp": 72,
            "at": 70,
            "df": 40,
            "sa": 20,
            "sd": 40,
            "sp": 25
        },
        "abilities": [
            "Vital Spirit",
            "Guts",
            "Stamina"
        ],
        "innates": [
            "Thick Fat",
            "Iron Fist",
            "Rivalry"
        ],
        "weightkg": 864,
        "types": [
            "Fighting"
        ],
        "genderR": 63,
        "nfe": true
    },
    "Hariyama": {
        "id": 297,
        "bs": {
            "hp": 144,
            "at": 130,
            "df": 70,
            "sa": 40,
            "sd": 70,
            "sp": 50
        },
        "abilities": [
            "Iron Fist",
            "Stalwart",
            "Stamina"
        ],
        "innates": [
            "Thick Fat",
            "Guts",
            "Vital Spirit"
        ],
        "weightkg": 2538,
        "types": [
            "Fighting"
        ],
        "genderR": 63
    },
    "Azurill": {
        "id": 298,
        "bs": {
            "hp": 50,
            "at": 20,
            "df": 40,
            "sa": 20,
            "sd": 40,
            "sp": 20
        },
        "abilities": [
            "Friend Guard",
            "Anticipation",
            "Sap Sipper"
        ],
        "innates": [
            "Thick Fat",
            "Water Veil",
            "Run Away"
        ],
        "weightkg": 20,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Nosepass": {
        "id": 299,
        "bs": {
            "hp": 30,
            "at": 45,
            "df": 135,
            "sa": 65,
            "sd": 90,
            "sp": 30
        },
        "abilities": [
            "Power Spot",
            "Magnet Pull",
            "Stall"
        ],
        "innates": [
            "Sturdy",
            "Solid Rock",
            "Juggernaut"
        ],
        "weightkg": 970,
        "types": [
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Skitty": {
        "id": 300,
        "bs": {
            "hp": 55,
            "at": 50,
            "df": 50,
            "sa": 65,
            "sd": 45,
            "sp": 60
        },
        "abilities": [
            "Normalize",
            "Friend Guard",
            "Wonder Skin"
        ],
        "innates": [
            "Cute Charm",
            "Own Tempo",
            "Nocturnal"
        ],
        "weightkg": 110,
        "types": [
            "Normal"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Delcatty": {
        "id": 301,
        "bs": {
            "hp": 65,
            "at": 110,
            "df": 65,
            "sa": 110,
            "sd": 55,
            "sp": 115
        },
        "abilities": [
            "Pretty Princess",
            "Normalize",
            "Speed Force"
        ],
        "innates": [
            "Prim and Proper",
            "Dazzling",
            "Nocturnal"
        ],
        "weightkg": 326,
        "types": [
            "Normal"
        ],
        "genderR": 190
    },
    "Sableye": {
        "id": 302,
        "bs": {
            "hp": 70,
            "at": 75,
            "df": 80,
            "sa": 65,
            "sd": 70,
            "sp": 50
        },
        "abilities": [
            "Prankster",
            "Hypnotist",
            "Stall"
        ],
        "innates": [
            "Analytic",
            "Magic Guard",
            "Nocturnal"
        ],
        "weightkg": 110,
        "types": [
            "Dark",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sableye Mega Redux",
            "Sableye Redux",
            "Sableye Mega"
        ]
    },
    "Sableye Mega": {
        "id": 302,
        "bs": {
            "hp": 70,
            "at": 85,
            "df": 130,
            "sa": 85,
            "sd": 120,
            "sp": 20
        },
        "abilities": [
            "Prankster",
            "Coward",
            "Stall"
        ],
        "innates": [
            "Analytic",
            "Magic Bounce",
            "Nocturnal"
        ],
        "weightkg": 110,
        "types": [
            "Dark",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sableye"
        ]
    },
    "Sableye Redux": {
        "id": 302,
        "bs": {
            "hp": 70,
            "at": 75,
            "df": 80,
            "sa": 65,
            "sd": 70,
            "sp": 50
        },
        "abilities": [
            "Fae Hunter",
            "Magic Guard",
            "Friend Guard"
        ],
        "innates": [
            "Prankster",
            "Fairy Aura",
            "Steely Spirit"
        ],
        "weightkg": 110,
        "types": [
            "Steel",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sableye"
        ]
    },
    "Sableye Mega Redux": {
        "id": 302,
        "bs": {
            "hp": 70,
            "at": 100,
            "df": 110,
            "sa": 100,
            "sd": 120,
            "sp": 20
        },
        "abilities": [
            "Good As Gold",
            "Good As Gold",
            "Good As Gold"
        ],
        "innates": [
            "Prankster",
            "Magic Bounce",
            "Wonder Skin"
        ],
        "weightkg": 110,
        "types": [
            "Steel",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sableye"
        ]
    },
    "Mawile": {
        "id": 303,
        "bs": {
            "hp": 70,
            "at": 85,
            "df": 95,
            "sa": 55,
            "sd": 55,
            "sp": 50
        },
        "abilities": [
            "Adaptability",
            "Intimidate",
            "Scare"
        ],
        "innates": [
            "Multi Headed",
            "Strong Jaw",
            "Grip Pincer"
        ],
        "weightkg": 115,
        "types": [
            "Steel",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Mawile Mega Redux",
            "Mawile Redux",
            "Mawile Mega"
        ]
    },
    "Mawile Mega": {
        "id": 303,
        "bs": {
            "hp": 70,
            "at": 105,
            "df": 130,
            "sa": 55,
            "sd": 100,
            "sp": 50
        },
        "abilities": [
            "Huge Power",
            "Huge Power",
            "Huge Power"
        ],
        "innates": [
            "Multi Headed",
            "Strong Jaw",
            "Grip Pincer"
        ],
        "weightkg": 115,
        "types": [
            "Steel",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Mawile"
        ]
    },
    "Mawile Redux": {
        "id": 303,
        "bs": {
            "hp": 70,
            "at": 95,
            "df": 55,
            "sa": 55,
            "sd": 55,
            "sp": 80
        },
        "abilities": [
            "Adaptability",
            "Dazzling",
            "Scare"
        ],
        "innates": [
            "Strong Jaw",
            "Opportunist",
            "Fae Hunter"
        ],
        "weightkg": 115,
        "types": [
            "Dark",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Mawile"
        ]
    },
    "Mawile Mega Redux": {
        "id": 303,
        "bs": {
            "hp": 70,
            "at": 105,
            "df": 100,
            "sa": 55,
            "sd": 65,
            "sp": 115
        },
        "abilities": [
            "Dead Power",
            "Dead Power",
            "Dead Power"
        ],
        "innates": [
            "Multi Headed",
            "Strong Jaw",
            "Shadow Tag"
        ],
        "weightkg": 115,
        "types": [
            "Dark",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Mawile"
        ]
    },
    "Mawile Redux B": {
        "id": 303,
        "bs": {
            "hp": 70,
            "at": 95,
            "df": 75,
            "sa": 85,
            "sd": 80,
            "sp": 75
        },
        "abilities": [
            "Heatproof",
            "Ambush",
            "Chloroplast"
        ],
        "innates": [
            "Multi Headed",
            "Strong Jaw",
            "Scare"
        ],
        "weightkg": 115,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127
    },
    "Mawile Redux B Mega": {
        "id": 303,
        "bs": {
            "hp": 70,
            "at": 105,
            "df": 110,
            "sa": 95,
            "sd": 105,
            "sp": 95
        },
        "abilities": [
            "Flaming Maw",
            "Flaming Maw",
            "Flaming Maw"
        ],
        "innates": [
            "Huge Power",
            "Multi Headed",
            "Corrosion"
        ],
        "weightkg": 115,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127
    },
    "Aron": {
        "id": 304,
        "bs": {
            "hp": 50,
            "at": 70,
            "df": 100,
            "sa": 40,
            "sd": 40,
            "sp": 30
        },
        "abilities": [
            "Scrapyard",
            "Rock Head",
            "Iron Barbs"
        ],
        "innates": [
            "Sturdy",
            "Battle Armor",
            "Lead Coat"
        ],
        "weightkg": 600,
        "types": [
            "Steel",
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Lairon": {
        "id": 305,
        "bs": {
            "hp": 60,
            "at": 90,
            "df": 140,
            "sa": 50,
            "sd": 50,
            "sp": 40
        },
        "abilities": [
            "Sturdy",
            "Soundproof",
            "Iron Barbs"
        ],
        "innates": [
            "Lead Coat",
            "Juggernaut",
            "Impenetrable"
        ],
        "weightkg": 1200,
        "types": [
            "Steel",
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Aggron": {
        "id": 306,
        "bs": {
            "hp": 70,
            "at": 110,
            "df": 180,
            "sa": 60,
            "sd": 60,
            "sp": 50
        },
        "abilities": [
            "Juggernaut",
            "Heatproof",
            "Iron Barbs"
        ],
        "innates": [
            "Lead Coat",
            "Filter",
            "Impenetrable"
        ],
        "weightkg": 3600,
        "types": [
            "Steel",
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Aggron Mega"
        ]
    },
    "Aggron Mega": {
        "id": 306,
        "bs": {
            "hp": 70,
            "at": 140,
            "df": 230,
            "sa": 60,
            "sd": 80,
            "sp": 50
        },
        "abilities": [
            "Juggernaut",
            "Heatproof",
            "Iron Barbs"
        ],
        "innates": [
            "Lead Coat",
            "Primal Armor",
            "Impenetrable"
        ],
        "weightkg": 3600,
        "types": [
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Aggron"
        ]
    },
    "Meditite": {
        "id": 307,
        "bs": {
            "hp": 30,
            "at": 75,
            "df": 55,
            "sa": 40,
            "sd": 55,
            "sp": 60
        },
        "abilities": [
            "Vital Spirit",
            "Unburden",
            "Emanate"
        ],
        "innates": [
            "Inner Focus",
            "Technician",
            "Striker"
        ],
        "weightkg": 112,
        "types": [
            "Fighting",
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Medicham": {
        "id": 308,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 75,
            "sa": 60,
            "sd": 75,
            "sp": 80
        },
        "abilities": [
            "Fatal Precision",
            "Unburden",
            "Emanate"
        ],
        "innates": [
            "Technician",
            "Combat Specialist",
            "Limber"
        ],
        "weightkg": 315,
        "types": [
            "Fighting",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Medicham Mega"
        ]
    },
    "Medicham Mega": {
        "id": 308,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 100,
            "sa": 95,
            "sd": 85,
            "sp": 110
        },
        "abilities": [
            "Pure Power",
            "Pure Power",
            "Pure Power"
        ],
        "innates": [
            "Combat Specialist",
            "Enlightened",
            "Technician"
        ],
        "weightkg": 315,
        "types": [
            "Fighting",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Medicham"
        ]
    },
    "Electrike": {
        "id": 309,
        "bs": {
            "hp": 40,
            "at": 70,
            "df": 40,
            "sa": 80,
            "sd": 40,
            "sp": 65
        },
        "abilities": [
            "Generator",
            "Illuminate",
            "Motor Drive"
        ],
        "innates": [
            "Static",
            "Lightning Rod",
            "Overcharge"
        ],
        "weightkg": 152,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Manectric": {
        "id": 310,
        "bs": {
            "hp": 70,
            "at": 110,
            "df": 60,
            "sa": 125,
            "sd": 60,
            "sp": 105
        },
        "abilities": [
            "Generator",
            "Illuminate",
            "Electric Burst"
        ],
        "innates": [
            "Static",
            "Lightning Rod",
            "Overcharge"
        ],
        "weightkg": 402,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Manectric Mega"
        ]
    },
    "Manectric Mega": {
        "id": 310,
        "bs": {
            "hp": 70,
            "at": 110,
            "df": 80,
            "sa": 135,
            "sd": 80,
            "sp": 155
        },
        "abilities": [
            "Intimidate",
            "Intimidate",
            "Intimidate"
        ],
        "innates": [
            "Volt Rush",
            "Ground Shock",
            "Overcharge"
        ],
        "weightkg": 402,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Manectric"
        ]
    },
    "Plusle": {
        "id": 311,
        "bs": {
            "hp": 60,
            "at": 50,
            "df": 50,
            "sa": 105,
            "sd": 75,
            "sp": 105
        },
        "abilities": [
            "Transistor",
            "Lightning Rod",
            "Friend Guard"
        ],
        "innates": [
            "Plus",
            "Competitive",
            "Speed Boost"
        ],
        "weightkg": 42,
        "types": [
            "Electric",
            "Fairy"
        ],
        "genderR": 127
    },
    "Minun": {
        "id": 312,
        "bs": {
            "hp": 60,
            "at": 105,
            "df": 50,
            "sa": 50,
            "sd": 75,
            "sp": 105
        },
        "abilities": [
            "Transistor",
            "Lightning Rod",
            "Power Spot"
        ],
        "innates": [
            "Minus",
            "Defiant",
            "Speed Boost"
        ],
        "weightkg": 42,
        "types": [
            "Electric",
            "Fairy"
        ],
        "genderR": 127
    },
    "Volbeat": {
        "id": 313,
        "bs": {
            "hp": 78,
            "at": 90,
            "df": 85,
            "sa": 47,
            "sd": 85,
            "sp": 115
        },
        "abilities": [
            "Pollinate",
            "Tinted Lens",
            "Prankster"
        ],
        "innates": [
            "Swarm",
            "Reckless",
            "Electrocytes"
        ],
        "weightkg": 177,
        "types": [
            "Bug",
            "Electric"
        ],
        "genderR": 0
    },
    "Illumise": {
        "id": 314,
        "bs": {
            "hp": 80,
            "at": 47,
            "df": 85,
            "sa": 93,
            "sd": 90,
            "sp": 105
        },
        "abilities": [
            "Swarm",
            "Tinted Lens",
            "Friend Guard"
        ],
        "innates": [
            "Prankster",
            "Aroma Veil",
            "Cute Charm"
        ],
        "weightkg": 177,
        "types": [
            "Bug",
            "Fairy"
        ],
        "genderR": 254
    },
    "Roselia": {
        "id": 315,
        "bs": {
            "hp": 50,
            "at": 90,
            "df": 45,
            "sa": 90,
            "sd": 45,
            "sp": 80
        },
        "abilities": [
            "Overgrow",
            "Leaf Guard",
            "Corrosion"
        ],
        "innates": [
            "Natural Cure",
            "Merciless",
            "Poison Point"
        ],
        "weightkg": 20,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Roserade": {
        "id": 407,
        "bs": {
            "hp": 60,
            "at": 125,
            "df": 65,
            "sa": 125,
            "sd": 70,
            "sp": 90
        },
        "abilities": [
            "Technician",
            "Discipline",
            "Corrosion"
        ],
        "innates": [
            "Natural Cure",
            "Merciless",
            "Aroma Veil"
        ],
        "weightkg": 145,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127
    },
    "Roserade Mega": {
        "id": 407,
        "bs": {
            "hp": 60,
            "at": 145,
            "df": 70,
            "sa": 145,
            "sd": 90,
            "sp": 125
        },
        "abilities": [
            "Technician",
            "Rose Garden",
            "Corrosion"
        ],
        "innates": [
            "Equinox",
            "Merciless",
            "Long Reach"
        ],
        "weightkg": 145,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127
    },
    "Gulpin": {
        "id": 316,
        "bs": {
            "hp": 70,
            "at": 53,
            "df": 63,
            "sa": 53,
            "sd": 63,
            "sp": 40
        },
        "abilities": [
            "Liquid Ooze",
            "Pickup",
            "Gooey"
        ],
        "innates": [
            "Sticky Hold",
            "Liquified",
            "Gluttony"
        ],
        "weightkg": 103,
        "types": [
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Swalot": {
        "id": 317,
        "bs": {
            "hp": 100,
            "at": 83,
            "df": 93,
            "sa": 83,
            "sd": 93,
            "sp": 55
        },
        "abilities": [
            "Poison Absorb",
            "Gluttony",
            "Unaware"
        ],
        "innates": [
            "Sticky Hold",
            "Liquified",
            "Regenerator"
        ],
        "weightkg": 800,
        "types": [
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Swalot Mega"
        ]
    },
    "Swalot Mega": {
        "id": 317,
        "bs": {
            "hp": 100,
            "at": 88,
            "df": 138,
            "sa": 128,
            "sd": 110,
            "sp": 43
        },
        "abilities": [
            "Wonder Skin",
            "Regenerator",
            "Unaware"
        ],
        "innates": [
            "Toxic Spill",
            "Liquified",
            "Corrosion"
        ],
        "weightkg": 800,
        "types": [
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Swalot"
        ]
    },
    "Carvanha": {
        "id": 318,
        "bs": {
            "hp": 45,
            "at": 90,
            "df": 20,
            "sa": 65,
            "sd": 20,
            "sp": 65
        },
        "abilities": [
            "Hyper Aggressive",
            "Swift Swim",
            "Speed Boost"
        ],
        "innates": [
            "Strong Jaw",
            "Rough Skin",
            "Predator"
        ],
        "weightkg": 208,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Sharpedo": {
        "id": 319,
        "bs": {
            "hp": 70,
            "at": 120,
            "df": 45,
            "sa": 115,
            "sd": 45,
            "sp": 105
        },
        "abilities": [
            "Speed Force",
            "Swift Swim",
            "Speed Boost"
        ],
        "innates": [
            "Strong Jaw",
            "Hyper Aggressive",
            "Jaws of Carnage"
        ],
        "weightkg": 888,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sharpedo Mega"
        ]
    },
    "Sharpedo Mega": {
        "id": 319,
        "bs": {
            "hp": 70,
            "at": 150,
            "df": 70,
            "sa": 110,
            "sd": 65,
            "sp": 135
        },
        "abilities": [
            "Hyper Aggressive",
            "Growing Tooth",
            "Speed Boost"
        ],
        "innates": [
            "Strong Jaw",
            "Speed Force",
            "Violent Rush"
        ],
        "weightkg": 888,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sharpedo"
        ]
    },
    "Wailmer": {
        "id": 320,
        "bs": {
            "hp": 130,
            "at": 70,
            "df": 35,
            "sa": 70,
            "sd": 35,
            "sp": 60
        },
        "abilities": [
            "Liquid Voice",
            "Stamina",
            "Drizzle"
        ],
        "innates": [
            "Thick Fat",
            "Water Veil",
            "Let's Roll"
        ],
        "weightkg": 1300,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Wailord": {
        "id": 321,
        "bs": {
            "hp": 170,
            "at": 90,
            "df": 65,
            "sa": 90,
            "sd": 65,
            "sp": 60
        },
        "abilities": [
            "Water Veil",
            "Stamina",
            "Drizzle"
        ],
        "innates": [
            "Liquid Voice",
            "Thick Fat",
            "Pressure"
        ],
        "weightkg": 3980,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Numel": {
        "id": 322,
        "bs": {
            "hp": 80,
            "at": 60,
            "df": 50,
            "sa": 65,
            "sd": 55,
            "sp": 35
        },
        "abilities": [
            "Stamina",
            "Unaware",
            "Simple"
        ],
        "innates": [
            "Oblivious",
            "Magma Armor",
            "Flame Body"
        ],
        "weightkg": 240,
        "types": [
            "Fire",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Camerupt": {
        "id": 323,
        "bs": {
            "hp": 90,
            "at": 100,
            "df": 80,
            "sa": 105,
            "sd": 85,
            "sp": 40
        },
        "abilities": [
            "Stamina",
            "Tipping Point",
            "Sheer Force"
        ],
        "innates": [
            "Magma Armor",
            "Solid Rock",
            "Molten Down"
        ],
        "weightkg": 2200,
        "types": [
            "Fire",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Camerupt Mega"
        ]
    },
    "Camerupt Mega": {
        "id": 323,
        "bs": {
            "hp": 90,
            "at": 120,
            "df": 110,
            "sa": 145,
            "sd": 115,
            "sp": 20
        },
        "abilities": [
            "Drought",
            "Volcano Rage",
            "Sand Guard"
        ],
        "innates": [
            "Magma Armor",
            "Artillery",
            "Molten Down"
        ],
        "weightkg": 2200,
        "types": [
            "Fire",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Camerupt"
        ]
    },
    "Torkoal": {
        "id": 324,
        "bs": {
            "hp": 70,
            "at": 85,
            "df": 140,
            "sa": 85,
            "sd": 70,
            "sp": 20
        },
        "abilities": [
            "Oblivious",
            "Impenetrable",
            "Mountaineer"
        ],
        "innates": [
            "Shell Armor",
            "White Smoke",
            "Drought"
        ],
        "weightkg": 804,
        "types": [
            "Fire"
        ],
        "genderR": 127
    },
    "Spoink": {
        "id": 325,
        "bs": {
            "hp": 60,
            "at": 25,
            "df": 35,
            "sa": 75,
            "sd": 80,
            "sp": 80
        },
        "abilities": [
            "Psychic Mind",
            "Gluttony",
            "Guilt Trip"
        ],
        "innates": [
            "Thick Fat",
            "Own Tempo",
            "Magic Bounce"
        ],
        "weightkg": 306,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Grumpig": {
        "id": 326,
        "bs": {
            "hp": 80,
            "at": 45,
            "df": 55,
            "sa": 100,
            "sd": 110,
            "sp": 100
        },
        "abilities": [
            "Magical Fists",
            "Gluttony",
            "Own Tempo"
        ],
        "innates": [
            "Forewarn",
            "Thick Fat",
            "Magic Bounce"
        ],
        "weightkg": 715,
        "types": [
            "Psychic"
        ],
        "genderR": 127
    },
    "Spinda": {
        "id": 327,
        "bs": {
            "hp": 90,
            "at": 90,
            "df": 70,
            "sa": 90,
            "sd": 70,
            "sp": 95
        },
        "abilities": [
            "Contrary",
            "Competitive",
            "Dancer"
        ],
        "innates": [
            "Unaware",
            "Simple",
            "Field Explorer"
        ],
        "weightkg": 50,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Trapinch": {
        "id": 328,
        "bs": {
            "hp": 45,
            "at": 100,
            "df": 45,
            "sa": 45,
            "sd": 45,
            "sp": 10
        },
        "abilities": [
            "Sheer Force",
            "Arena Trap",
            "Grip Pincer"
        ],
        "innates": [
            "Hyper Cutter",
            "Strong Jaw",
            "Ambush"
        ],
        "weightkg": 150,
        "types": [
            "Ground",
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Vibrava": {
        "id": 329,
        "bs": {
            "hp": 50,
            "at": 70,
            "df": 50,
            "sa": 70,
            "sd": 50,
            "sp": 70
        },
        "abilities": [
            "Amplifier",
            "Sand Force",
            "Sand Stream"
        ],
        "innates": [
            "Dragonfly",
            "Tinted Lens",
            "Loud Bang"
        ],
        "weightkg": 153,
        "types": [
            "Ground",
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Flygon": {
        "id": 330,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 80,
            "sa": 100,
            "sd": 80,
            "sp": 100
        },
        "abilities": [
            "Amplifier",
            "Sand Stream",
            "Sand Guard"
        ],
        "innates": [
            "Dragonfly",
            "Sand Song",
            "Tinted Lens"
        ],
        "weightkg": 820,
        "types": [
            "Ground",
            "Bug"
        ],
        "genderR": 127,
        "otherFormes": [
            "Flygon Mega"
        ]
    },
    "Flygon Redux B": {
        "id": 330,
        "bs": {
            "hp": 88,
            "at": 100,
            "df": 75,
            "sa": 120,
            "sd": 75,
            "sp": 142
        },
        "abilities": [
            "Electro Surge",
            "Teravolt",
            "Energized"
        ],
        "innates": [
            "Levitate",
            "Galvanize",
            "Clear Body"
        ],
        "weightkg": 820,
        "types": [
            "Electric",
            "Dragon"
        ],
        "genderR": 127
    },
    "Flygon Mega": {
        "id": 330,
        "bs": {
            "hp": 80,
            "at": 125,
            "df": 80,
            "sa": 130,
            "sd": 100,
            "sp": 125
        },
        "abilities": [
            "Sand Song",
            "Sand Force",
            "Arena Trap"
        ],
        "innates": [
            "Dragonfly",
            "Tinted Lens",
            "Desert Spirit"
        ],
        "weightkg": 820,
        "types": [
            "Ground",
            "Bug"
        ],
        "genderR": 127,
        "otherFormes": [
            "Flygon"
        ]
    },
    "Trapinch Redux": {
        "id": 328,
        "bs": {
            "hp": 45,
            "at": 110,
            "df": 35,
            "sa": 45,
            "sd": 35,
            "sp": 20
        },
        "abilities": [
            "Whiteout",
            "Refrigerate",
            "Snow Warning"
        ],
        "innates": [
            "Strong Jaw",
            "Fluffy",
            "Overcoat"
        ],
        "weightkg": 150,
        "types": [
            "Ice",
            "Bug"
        ],
        "genderR": 127
    },
    "Vibrava Redux": {
        "id": 329,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 40,
            "sa": 70,
            "sd": 40,
            "sp": 80
        },
        "abilities": [
            "Whiteout",
            "Frozen Soul",
            "Snow Warning"
        ],
        "innates": [
            "Dragonfly",
            "Fluffy",
            "Overcoat"
        ],
        "weightkg": 153,
        "types": [
            "Ice",
            "Bug"
        ],
        "genderR": 127
    },
    "Flygon Redux": {
        "id": 330,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 80,
            "sa": 100,
            "sd": 80,
            "sp": 100
        },
        "abilities": [
            "Whiteout",
            "Frozen Soul",
            "Snow Warning"
        ],
        "innates": [
            "Dragonfly",
            "Fluffy",
            "Mountaineer"
        ],
        "weightkg": 820,
        "types": [
            "Ice",
            "Bug"
        ],
        "genderR": 127
    },
    "Flygon Redux Mega": {
        "id": 330,
        "bs": {
            "hp": 80,
            "at": 130,
            "df": 85,
            "sa": 130,
            "sd": 90,
            "sp": 125
        },
        "abilities": [
            "Slush Rush",
            "Whiteout",
            "Tinted Lens"
        ],
        "innates": [
            "Dragonfly",
            "Snowy Wrath",
            "Fluffy"
        ],
        "weightkg": 820,
        "types": [
            "Ice",
            "Bug"
        ],
        "genderR": 127
    },
    "Cacnea": {
        "id": 331,
        "bs": {
            "hp": 50,
            "at": 85,
            "df": 40,
            "sa": 85,
            "sd": 40,
            "sp": 65
        },
        "abilities": [
            "Sand Rush",
            "Sand Force",
            "Prankster"
        ],
        "innates": [
            "Rough Skin",
            "Nocturnal",
            "Water Absorb"
        ],
        "weightkg": 513,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Cacturne": {
        "id": 332,
        "bs": {
            "hp": 70,
            "at": 115,
            "df": 60,
            "sa": 115,
            "sd": 60,
            "sp": 85
        },
        "abilities": [
            "Sand Rush",
            "Sand Veil",
            "Scare"
        ],
        "innates": [
            "Nocturnal",
            "Rough Skin",
            "Soul Eater"
        ],
        "weightkg": 774,
        "types": [
            "Grass",
            "Dark"
        ],
        "genderR": 127
    },
    "Swablu": {
        "id": 333,
        "bs": {
            "hp": 45,
            "at": 55,
            "df": 60,
            "sa": 55,
            "sd": 75,
            "sp": 50
        },
        "abilities": [
            "Cotton Down",
            "Serene Grace",
            "Friend Guard"
        ],
        "innates": [
            "Fluffy",
            "Cute Charm",
            "Natural Cure"
        ],
        "weightkg": 12,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Altaria": {
        "id": 334,
        "bs": {
            "hp": 75,
            "at": 90,
            "df": 90,
            "sa": 70,
            "sd": 105,
            "sp": 80
        },
        "abilities": [
            "Cotton Down",
            "Serene Grace",
            "Cloud Nine"
        ],
        "innates": [
            "Natural Cure",
            "Fluffy",
            "Sweet Dreams"
        ],
        "weightkg": 206,
        "types": [
            "Dragon",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Altaria Mega"
        ]
    },
    "Altaria Mega": {
        "id": 334,
        "bs": {
            "hp": 75,
            "at": 110,
            "df": 110,
            "sa": 110,
            "sd": 105,
            "sp": 100
        },
        "abilities": [
            "Pixilate",
            "Cloud Nine",
            "Peaceful Slumber"
        ],
        "innates": [
            "Natural Cure",
            "Fluffiest",
            "Imposing Wings"
        ],
        "weightkg": 206,
        "types": [
            "Dragon",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Altaria"
        ]
    },
    "Zangoose": {
        "id": 335,
        "bs": {
            "hp": 73,
            "at": 115,
            "df": 70,
            "sa": 60,
            "sd": 70,
            "sp": 105
        },
        "abilities": [
            "Anger Point",
            "Speed Force",
            "Hyper Aggressive"
        ],
        "innates": [
            "Toxic Boost",
            "Fatal Precision",
            "Tough Claws"
        ],
        "weightkg": 403,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Seviper": {
        "id": 336,
        "bs": {
            "hp": 73,
            "at": 100,
            "df": 60,
            "sa": 100,
            "sd": 60,
            "sp": 100
        },
        "abilities": [
            "Tipping Point",
            "Opportunist",
            "Cutthroat"
        ],
        "innates": [
            "Keen Edge",
            "Deep Cuts",
            "Hyper Aggressive"
        ],
        "weightkg": 525,
        "types": [
            "Poison",
            "Dark"
        ],
        "genderR": 127
    },
    "Lunatone": {
        "id": 337,
        "bs": {
            "hp": 90,
            "at": 55,
            "df": 65,
            "sa": 125,
            "sd": 115,
            "sp": 70
        },
        "abilities": [
            "Sturdy",
            "Sage Power",
            "Dreamcatcher"
        ],
        "innates": [
            "Levitate",
            "Nocturnal",
            "Lunar Eclipse"
        ],
        "weightkg": 1680,
        "types": [
            "Rock",
            "Psychic"
        ],
        "genderR": 2
    },
    "Solrock": {
        "id": 338,
        "bs": {
            "hp": 90,
            "at": 125,
            "df": 115,
            "sa": 55,
            "sd": 65,
            "sp": 70
        },
        "abilities": [
            "Victory Star",
            "Drought",
            "Sun Worship"
        ],
        "innates": [
            "Levitate",
            "Sturdy",
            "Solar Flare"
        ],
        "weightkg": 1540,
        "types": [
            "Rock",
            "Psychic"
        ],
        "genderR": 2
    },
    "Solrock System": {
        "id": 338,
        "bs": {
            "hp": 90,
            "at": 125,
            "df": 115,
            "sa": 125,
            "sd": 115,
            "sp": 120
        },
        "abilities": [
            "Phantom",
            "Fearmonger",
            "Mystic Power"
        ],
        "innates": [
            "Desolate Land",
            "Daybreak",
            "Radiance"
        ],
        "weightkg": 1540,
        "types": [
            "Rock",
            "Psychic"
        ],
        "genderR": 127
    },
    "Barboach": {
        "id": 339,
        "bs": {
            "hp": 50,
            "at": 68,
            "df": 73,
            "sa": 68,
            "sd": 41,
            "sp": 60
        },
        "abilities": [
            "Unaware",
            "Water Absorb",
            "Field Explorer"
        ],
        "innates": [
            "Electrocytes",
            "Oblivious",
            "Earth Eater"
        ],
        "weightkg": 19,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Whiscash": {
        "id": 340,
        "bs": {
            "hp": 110,
            "at": 98,
            "df": 103,
            "sa": 98,
            "sd": 71,
            "sp": 60
        },
        "abilities": [
            "Unaware",
            "Water Absorb",
            "Field Explorer"
        ],
        "innates": [
            "Transistor",
            "Aftershock",
            "Earth Eater"
        ],
        "weightkg": 236,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127
    },
    "Corphish": {
        "id": 341,
        "bs": {
            "hp": 43,
            "at": 80,
            "df": 65,
            "sa": 50,
            "sd": 35,
            "sp": 35
        },
        "abilities": [
            "Swift Swim",
            "Self Sufficient",
            "Grip Pincer"
        ],
        "innates": [
            "Hyper Cutter",
            "Shell Armor",
            "Adaptability"
        ],
        "weightkg": 115,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Crawdaunt": {
        "id": 342,
        "bs": {
            "hp": 63,
            "at": 120,
            "df": 85,
            "sa": 90,
            "sd": 55,
            "sp": 55
        },
        "abilities": [
            "Swift Swim",
            "Hyper Aggressive",
            "Adaptability"
        ],
        "innates": [
            "Hyper Cutter",
            "Shell Armor",
            "Grip Pincer"
        ],
        "weightkg": 328,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 127
    },
    "Baltoy": {
        "id": 343,
        "bs": {
            "hp": 50,
            "at": 40,
            "df": 55,
            "sa": 60,
            "sd": 70,
            "sp": 55
        },
        "abilities": [
            "Ancient Idol",
            "Telepathy",
            "Twist. Dimension"
        ],
        "innates": [
            "Levitate",
            "Mystic Power",
            "Sand Guard"
        ],
        "weightkg": 215,
        "types": [
            "Ground",
            "Psychic"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Claydol": {
        "id": 344,
        "bs": {
            "hp": 70,
            "at": 70,
            "df": 105,
            "sa": 90,
            "sd": 120,
            "sp": 75
        },
        "abilities": [
            "Ancient Idol",
            "Sand Guard",
            "Twist. Dimension"
        ],
        "innates": [
            "Levitate",
            "Mystic Power",
            "Fort Knox"
        ],
        "weightkg": 1080,
        "types": [
            "Ground",
            "Psychic"
        ],
        "genderR": 2
    },
    "Lileep": {
        "id": 345,
        "bs": {
            "hp": 76,
            "at": 41,
            "df": 77,
            "sa": 71,
            "sd": 87,
            "sp": 23
        },
        "abilities": [
            "Battle Armor",
            "Regenerator",
            "Storm Drain"
        ],
        "innates": [
            "Fossilized",
            "Amphibious",
            "Seaweed"
        ],
        "weightkg": 238,
        "types": [
            "Rock",
            "Grass"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Cradily": {
        "id": 346,
        "bs": {
            "hp": 96,
            "at": 81,
            "df": 97,
            "sa": 91,
            "sd": 107,
            "sp": 43
        },
        "abilities": [
            "Absorbant",
            "Regenerator",
            "Storm Drain"
        ],
        "innates": [
            "Battle Armor",
            "Amphibious",
            "Seaweed"
        ],
        "weightkg": 604,
        "types": [
            "Rock",
            "Grass"
        ],
        "genderR": 31
    },
    "Anorith": {
        "id": 347,
        "bs": {
            "hp": 45,
            "at": 95,
            "df": 65,
            "sa": 40,
            "sd": 50,
            "sp": 75
        },
        "abilities": [
            "Hyper Cutter",
            "Keen Edge",
            "Skill Link"
        ],
        "innates": [
            "Fossilized",
            "Battle Armor",
            "Amphibious"
        ],
        "weightkg": 125,
        "types": [
            "Rock",
            "Bug"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Armaldo": {
        "id": 348,
        "bs": {
            "hp": 75,
            "at": 125,
            "df": 120,
            "sa": 70,
            "sd": 80,
            "sp": 45
        },
        "abilities": [
            "Battle Armor",
            "Keen Edge",
            "Impenetrable"
        ],
        "innates": [
            "Fossilized",
            "Amphibious",
            "Hyper Cutter"
        ],
        "weightkg": 682,
        "types": [
            "Rock",
            "Bug"
        ],
        "genderR": 31
    },
    "Feebas": {
        "id": 349,
        "bs": {
            "hp": 20,
            "at": 15,
            "df": 20,
            "sa": 15,
            "sd": 55,
            "sp": 80
        },
        "abilities": [
            "Swift Swim",
            "Oblivious",
            "Scrappy"
        ],
        "innates": [
            "Multiscale",
            "Marvel Scale",
            "Run Away"
        ],
        "weightkg": 74,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Milotic": {
        "id": 350,
        "bs": {
            "hp": 95,
            "at": 60,
            "df": 79,
            "sa": 100,
            "sd": 125,
            "sp": 81
        },
        "abilities": [
            "Sea Guardian",
            "Competitive",
            "Marvel Scale"
        ],
        "innates": [
            "Prism Scales",
            "Adaptability",
            "Self Sufficient"
        ],
        "weightkg": 1620,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Milotic Mega"
        ]
    },
    "Milotic Mega": {
        "id": 350,
        "bs": {
            "hp": 95,
            "at": 70,
            "df": 109,
            "sa": 130,
            "sd": 155,
            "sp": 81
        },
        "abilities": [
            "Sea Guardian",
            "Multiscale",
            "Regenerator"
        ],
        "innates": [
            "Prism Scales",
            "Adaptability",
            "Self Sufficient"
        ],
        "weightkg": 1620,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Milotic"
        ]
    },
    "Castform": {
        "id": 351,
        "bs": {
            "hp": 75,
            "at": 75,
            "df": 75,
            "sa": 105,
            "sd": 75,
            "sp": 110
        },
        "abilities": [
            "Guilt Trip",
            "Anticipation",
            "Pressure"
        ],
        "innates": [
            "Forecast",
            "Weather Control",
            "Aerialist"
        ],
        "weightkg": 8,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Castform Sandy",
            "Castform Sunny",
            "Castform Rainy",
            "Castform Snowy"
        ]
    },
    "Castform Sandy": {
        "id": 351,
        "bs": {
            "hp": 75,
            "at": 75,
            "df": 75,
            "sa": 105,
            "sd": 75,
            "sp": 110
        },
        "abilities": [
            "Sand Rush",
            "Sand Force",
            "Sand Guard"
        ],
        "innates": [
            "Forecast",
            "Weather Control",
            "Adaptability"
        ],
        "weightkg": 8,
        "types": [
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Castform"
        ]
    },
    "Castform Sunny": {
        "id": 351,
        "bs": {
            "hp": 75,
            "at": 75,
            "df": 75,
            "sa": 105,
            "sd": 75,
            "sp": 110
        },
        "abilities": [
            "Solar Power",
            "Catastrophe",
            "Flaming Soul"
        ],
        "innates": [
            "Forecast",
            "Weather Control",
            "Adaptability"
        ],
        "weightkg": 8,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Castform"
        ]
    },
    "Castform Rainy": {
        "id": 351,
        "bs": {
            "hp": 75,
            "at": 75,
            "df": 75,
            "sa": 105,
            "sd": 75,
            "sp": 110
        },
        "abilities": [
            "Swift Swim",
            "Catastrophe",
            "Aerialist"
        ],
        "innates": [
            "Forecast",
            "Weather Control",
            "Adaptability"
        ],
        "weightkg": 8,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Castform"
        ]
    },
    "Castform Snowy": {
        "id": 351,
        "bs": {
            "hp": 75,
            "at": 75,
            "df": 75,
            "sa": 105,
            "sd": 75,
            "sp": 110
        },
        "abilities": [
            "Slush Rush",
            "Whiteout",
            "Frozen Soul"
        ],
        "innates": [
            "Forecast",
            "Weather Control",
            "Adaptability"
        ],
        "weightkg": 8,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Castform"
        ]
    },
    "Castform Foggy": {
        "id": 351,
        "bs": {
            "hp": 75,
            "at": 75,
            "df": 75,
            "sa": 105,
            "sd": 75,
            "sp": 110
        },
        "abilities": [
            "Ethereal Rush",
            "Ectoplasm",
            "Early Grave"
        ],
        "innates": [
            "Forecast",
            "Weather Control",
            "Adaptability"
        ],
        "weightkg": 8,
        "types": [
            "Ghost"
        ],
        "genderR": 127
    },
    "Kecleon": {
        "id": 352,
        "bs": {
            "hp": 60,
            "at": 90,
            "df": 70,
            "sa": 60,
            "sd": 120,
            "sp": 40
        },
        "abilities": [
            "Defeatist",
            "Receiver",
            "Klutz"
        ],
        "innates": [
            "Color Change",
            "Protean",
            "Cheap Tactics"
        ],
        "weightkg": 220,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Shuppet": {
        "id": 353,
        "bs": {
            "hp": 44,
            "at": 85,
            "df": 45,
            "sa": 63,
            "sd": 43,
            "sp": 75
        },
        "abilities": [
            "Surprise!",
            "Scare",
            "Insomnia"
        ],
        "innates": [
            "Vengeance",
            "Haunted Spirit",
            "Levitate"
        ],
        "weightkg": 23,
        "types": [
            "Ghost",
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Banette": {
        "id": 354,
        "bs": {
            "hp": 84,
            "at": 125,
            "df": 85,
            "sa": 65,
            "sd": 83,
            "sp": 98
        },
        "abilities": [
            "Surprise!",
            "Tag",
            "Cheap Tactics"
        ],
        "innates": [
            "Scare",
            "Haunted Spirit",
            "Soul Eater"
        ],
        "weightkg": 125,
        "types": [
            "Ghost",
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Banette Mega"
        ]
    },
    "Banette Mega": {
        "id": 354,
        "bs": {
            "hp": 84,
            "at": 165,
            "df": 105,
            "sa": 75,
            "sd": 103,
            "sp": 108
        },
        "abilities": [
            "Prankster",
            "Prankster",
            "Prankster"
        ],
        "innates": [
            "Intimidate",
            "Magic Guard",
            "Soul Eater"
        ],
        "weightkg": 125,
        "types": [
            "Ghost",
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Banette"
        ]
    },
    "Duskull": {
        "id": 355,
        "bs": {
            "hp": 20,
            "at": 60,
            "df": 90,
            "sa": 25,
            "sd": 90,
            "sp": 25
        },
        "abilities": [
            "Twist. Dimension",
            "Pickpocket",
            "Opportunist"
        ],
        "innates": [
            "Low Visibility",
            "Levitate",
            "Infiltrator"
        ],
        "weightkg": 150,
        "types": [
            "Ghost"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dusclops": {
        "id": 356,
        "bs": {
            "hp": 40,
            "at": 90,
            "df": 130,
            "sa": 55,
            "sd": 130,
            "sp": 25
        },
        "abilities": [
            "Soul Linker",
            "Mummy",
            "Impenetrable"
        ],
        "innates": [
            "Cursed Body",
            "Stall",
            "Soul Eater"
        ],
        "weightkg": 306,
        "types": [
            "Ghost"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Tropius": {
        "id": 357,
        "bs": {
            "hp": 99,
            "at": 88,
            "df": 93,
            "sa": 92,
            "sd": 97,
            "sp": 51
        },
        "abilities": [
            "Ripen",
            "Air Blower",
            "Unburden"
        ],
        "innates": [
            "Aerialist",
            "Giant Wings",
            "Big Leaves"
        ],
        "weightkg": 1000,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127
    },
    "Chimecho": {
        "id": 358,
        "bs": {
            "hp": 85,
            "at": 50,
            "df": 90,
            "sa": 95,
            "sd": 100,
            "sp": 65
        },
        "abilities": [
            "Magic Guard",
            "Friend Guard",
            "Air Blower"
        ],
        "innates": [
            "Levitate",
            "Mystic Power",
            "Metallic"
        ],
        "weightkg": 10,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 127
    },
    "Absol": {
        "id": 359,
        "bs": {
            "hp": 65,
            "at": 130,
            "df": 65,
            "sa": 75,
            "sd": 65,
            "sp": 100
        },
        "abilities": [
            "Avenger",
            "Equinox",
            "Scare"
        ],
        "innates": [
            "Super Luck",
            "Mountaineer",
            "Keen Edge"
        ],
        "weightkg": 470,
        "types": [
            "Dark",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Absol Mega"
        ]
    },
    "Absol Mega": {
        "id": 359,
        "bs": {
            "hp": 65,
            "at": 175,
            "df": 65,
            "sa": 105,
            "sd": 65,
            "sp": 125
        },
        "abilities": [
            "Dark Aura",
            "Equinox",
            "Fairy Aura"
        ],
        "innates": [
            "Super Luck",
            "Keen Edge",
            "Magic Guard"
        ],
        "weightkg": 470,
        "types": [
            "Dark",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Absol"
        ]
    },
    "Wynaut": {
        "id": 360,
        "bs": {
            "hp": 95,
            "at": 23,
            "df": 48,
            "sa": 23,
            "sd": 48,
            "sp": 23
        },
        "abilities": [
            "Hyper Aggressive",
            "Magic Guard",
            "Coward"
        ],
        "innates": [
            "Sticky Hold",
            "Innards Out",
            "Shadow Tag"
        ],
        "weightkg": 140,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Snorunt": {
        "id": 361,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 60,
            "sa": 60,
            "sd": 60,
            "sp": 70
        },
        "abilities": [
            "Refrigerate",
            "North Wind",
            "Moody"
        ],
        "innates": [
            "Sturdy",
            "Freezing Point",
            "Cryomancy"
        ],
        "weightkg": 168,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Glalie": {
        "id": 362,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 70,
            "sa": 80,
            "sd": 70,
            "sp": 100
        },
        "abilities": [
            "Moody",
            "Whiteout",
            "Refrigerate"
        ],
        "innates": [
            "Sturdy",
            "Freezing Point",
            "Impenetrable"
        ],
        "weightkg": 2565,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Glalie Mega"
        ]
    },
    "Froslass": {
        "id": 478,
        "bs": {
            "hp": 70,
            "at": 70,
            "df": 70,
            "sa": 110,
            "sd": 70,
            "sp": 110
        },
        "abilities": [
            "Soul Eater",
            "Snow Cloak",
            "Haunted Spirit"
        ],
        "innates": [
            "Whiteout",
            "Cryomancy",
            "Slush Rush"
        ],
        "weightkg": 266,
        "types": [
            "Ice",
            "Ghost"
        ],
        "genderR": 254,
        "otherFormes": [
            "Froslass Mega"
        ]
    },
    "Glalie Mega": {
        "id": 362,
        "bs": {
            "hp": 80,
            "at": 130,
            "df": 100,
            "sa": 80,
            "sd": 90,
            "sp": 120
        },
        "abilities": [
            "Jaws of Carnage",
            "Crystallize",
            "Slush Rush"
        ],
        "innates": [
            "Cryo Proficiency",
            "Glacial Rage",
            "Immovable Object"
        ],
        "weightkg": 2565,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Glalie"
        ]
    },
    "Froslass Mega": {
        "id": 478,
        "bs": {
            "hp": 70,
            "at": 70,
            "df": 90,
            "sa": 130,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Soul Eater",
            "Snow Cloak",
            "Haunted Spirit"
        ],
        "innates": [
            "Whiteout",
            "Yuki Onna",
            "Slush Rush"
        ],
        "weightkg": 266,
        "types": [
            "Ice",
            "Ghost"
        ],
        "genderR": 254,
        "otherFormes": [
            "Froslass"
        ]
    },
    "Snorunt Redux": {
        "id": 361,
        "bs": {
            "hp": 65,
            "at": 65,
            "df": 50,
            "sa": 60,
            "sd": 60,
            "sp": 70
        },
        "abilities": [
            "Prankster",
            "Frisk",
            "Bad Luck"
        ],
        "innates": [
            "Nocturnal",
            "Looter",
            "Fur Coat"
        ],
        "weightkg": 168,
        "types": [
            "Dark"
        ],
        "genderR": 127
    },
    "Glalie Redux": {
        "id": 362,
        "bs": {
            "hp": 90,
            "at": 100,
            "df": 90,
            "sa": 60,
            "sd": 90,
            "sp": 70
        },
        "abilities": [
            "Contrary",
            "Battle Armor",
            "Anger Point"
        ],
        "innates": [
            "Blood Bath",
            "Weak Armor",
            "Battle Aura"
        ],
        "weightkg": 2565,
        "types": [
            "Dark",
            "Fighting"
        ],
        "genderR": 127
    },
    "Froslass Redux": {
        "id": 478,
        "bs": {
            "hp": 70,
            "at": 110,
            "df": 70,
            "sa": 70,
            "sd": 70,
            "sp": 110
        },
        "abilities": [
            "Blood Price",
            "Ill Will",
            "Blood Stain"
        ],
        "innates": [
            "Low Blow",
            "Keen Edge",
            "Soul Eater"
        ],
        "weightkg": 266,
        "types": [
            "Dark",
            "Ghost"
        ],
        "genderR": 254
    },
    "Glalie Redux Mega": {
        "id": 362,
        "bs": {
            "hp": 90,
            "at": 120,
            "df": 110,
            "sa": 80,
            "sd": 110,
            "sp": 90
        },
        "abilities": [
            "Bloodlust",
            "Bloodlust",
            "Bloodlust"
        ],
        "innates": [
            "Rage Point",
            "Battle Aura",
            "Bad Omen"
        ],
        "weightkg": 2565,
        "types": [
            "Dark",
            "Fighting"
        ],
        "genderR": 127
    },
    "Froslass Redux Mega": {
        "id": 478,
        "bs": {
            "hp": 70,
            "at": 120,
            "df": 90,
            "sa": 70,
            "sd": 120,
            "sp": 130
        },
        "abilities": [
            "Blood Stigma",
            "Blood Stigma",
            "Blood Stigma"
        ],
        "innates": [
            "Blood Stain",
            "Dual Wield",
            "Low Blow"
        ],
        "weightkg": 266,
        "types": [
            "Dark",
            "Ghost"
        ],
        "genderR": 254
    },
    "Spheal": {
        "id": 363,
        "bs": {
            "hp": 70,
            "at": 40,
            "df": 50,
            "sa": 55,
            "sd": 50,
            "sp": 25
        },
        "abilities": [
            "Sheer Force",
            "Torrent",
            "Ice Body"
        ],
        "innates": [
            "Thick Fat",
            "Let's Roll",
            "Oblivious"
        ],
        "weightkg": 395,
        "types": [
            "Ice",
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Sealeo": {
        "id": 364,
        "bs": {
            "hp": 90,
            "at": 60,
            "df": 70,
            "sa": 75,
            "sd": 70,
            "sp": 45
        },
        "abilities": [
            "Sheer Force",
            "Torrent",
            "Ice Body"
        ],
        "innates": [
            "Thick Fat",
            "Let's Roll",
            "Oblivious"
        ],
        "weightkg": 876,
        "types": [
            "Ice",
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Walrein": {
        "id": 365,
        "bs": {
            "hp": 110,
            "at": 100,
            "df": 90,
            "sa": 95,
            "sd": 90,
            "sp": 45
        },
        "abilities": [
            "Sheer Force",
            "Ice Body",
            "Snow Warning"
        ],
        "innates": [
            "Thick Fat",
            "Arctic Fur",
            "Growing Tooth"
        ],
        "weightkg": 1506,
        "types": [
            "Ice",
            "Water"
        ],
        "genderR": 127
    },
    "Clamperl": {
        "id": 366,
        "bs": {
            "hp": 35,
            "at": 64,
            "df": 85,
            "sa": 74,
            "sd": 55,
            "sp": 32
        },
        "abilities": [
            "Grip Pincer",
            "Simple",
            "Water Veil"
        ],
        "innates": [
            "Shell Armor",
            "Sticky Hold",
            "Filter"
        ],
        "weightkg": 525,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Huntail": {
        "id": 367,
        "bs": {
            "hp": 55,
            "at": 114,
            "df": 105,
            "sa": 94,
            "sd": 75,
            "sp": 72
        },
        "abilities": [
            "Swift Swim",
            "Opportunist",
            "Ambush"
        ],
        "innates": [
            "Sturdy",
            "Strong Jaw",
            "Predator"
        ],
        "weightkg": 270,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Gorebyss": {
        "id": 368,
        "bs": {
            "hp": 65,
            "at": 84,
            "df": 105,
            "sa": 114,
            "sd": 75,
            "sp": 72
        },
        "abilities": [
            "Water Veil",
            "Multiscale",
            "Swift Swim"
        ],
        "innates": [
            "Dazzling",
            "Adaptability",
            "Predator"
        ],
        "weightkg": 226,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 127
    },
    "Relicanth": {
        "id": 369,
        "bs": {
            "hp": 100,
            "at": 110,
            "df": 130,
            "sa": 45,
            "sd": 65,
            "sp": 55
        },
        "abilities": [
            "Sturdy",
            "Water Absorb",
            "Rough Skin"
        ],
        "innates": [
            "Fossilized",
            "Impenetrable",
            "Primal Armor"
        ],
        "weightkg": 234,
        "types": [
            "Water",
            "Rock"
        ],
        "genderR": 31,
        "otherFormes": [
            "Relicanth Mega"
        ]
    },
    "Relicanth Mega": {
        "id": 369,
        "bs": {
            "hp": 100,
            "at": 160,
            "df": 130,
            "sa": 45,
            "sd": 75,
            "sp": 95
        },
        "abilities": [
            "Marine Apex",
            "Marine Apex",
            "Marine Apex"
        ],
        "innates": [
            "Impenetrable",
            "Reckless",
            "Primal Armor"
        ],
        "weightkg": 234,
        "types": [
            "Water",
            "Rock"
        ],
        "genderR": 31,
        "otherFormes": [
            "Relicanth"
        ]
    },
    "Luvdisc": {
        "id": 370,
        "bs": {
            "hp": 53,
            "at": 30,
            "df": 55,
            "sa": 90,
            "sd": 65,
            "sp": 107
        },
        "abilities": [
            "Hydration",
            "Swift Swim",
            "Water Veil"
        ],
        "innates": [
            "Soul-Heart",
            "Multiscale",
            "Pure Love"
        ],
        "weightkg": 87,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 190
    },
    "Bagon": {
        "id": 371,
        "bs": {
            "hp": 45,
            "at": 75,
            "df": 60,
            "sa": 40,
            "sd": 30,
            "sp": 50
        },
        "abilities": [
            "Intimidate",
            "Immolate",
            "Moxie"
        ],
        "innates": [
            "Rock Head",
            "Anger Point",
            "Reckless"
        ],
        "weightkg": 421,
        "types": [
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Shelgon": {
        "id": 372,
        "bs": {
            "hp": 65,
            "at": 95,
            "df": 100,
            "sa": 60,
            "sd": 50,
            "sp": 50
        },
        "abilities": [
            "Intimidate",
            "Immolate",
            "Moxie"
        ],
        "innates": [
            "Shell Armor",
            "Overcoat",
            "Impenetrable"
        ],
        "weightkg": 1105,
        "types": [
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Salamence": {
        "id": 373,
        "bs": {
            "hp": 95,
            "at": 135,
            "df": 80,
            "sa": 110,
            "sd": 80,
            "sp": 100
        },
        "abilities": [
            "Intimidate",
            "Predator",
            "Moxie"
        ],
        "innates": [
            "Overwhelm",
            "Anger Point",
            "Reckless"
        ],
        "weightkg": 1026,
        "types": [
            "Dragon",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Salamence Mega"
        ]
    },
    "Salamence Mega": {
        "id": 373,
        "bs": {
            "hp": 95,
            "at": 145,
            "df": 130,
            "sa": 120,
            "sd": 90,
            "sp": 120
        },
        "abilities": [
            "Beast Boost",
            "Beast Boost",
            "Beast Boost"
        ],
        "innates": [
            "Reckless",
            "Aerilate",
            "Predator"
        ],
        "weightkg": 1026,
        "types": [
            "Dragon",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Salamence"
        ]
    },
    "Beldum": {
        "id": 374,
        "bs": {
            "hp": 40,
            "at": 55,
            "df": 80,
            "sa": 35,
            "sd": 60,
            "sp": 30
        },
        "abilities": [
            "Steelworker",
            "Magnet Pull",
            "Psychic Mind"
        ],
        "innates": [
            "Levitate",
            "Reckless",
            "Full Metal Body"
        ],
        "weightkg": 952,
        "types": [
            "Steel",
            "Psychic"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Metang": {
        "id": 375,
        "bs": {
            "hp": 60,
            "at": 75,
            "df": 100,
            "sa": 55,
            "sd": 80,
            "sp": 50
        },
        "abilities": [
            "Fatal Precision",
            "Predator",
            "Lead Coat"
        ],
        "innates": [
            "Levitate",
            "Download",
            "Full Metal Body"
        ],
        "weightkg": 2025,
        "types": [
            "Steel",
            "Psychic"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Metagross": {
        "id": 376,
        "bs": {
            "hp": 80,
            "at": 135,
            "df": 130,
            "sa": 95,
            "sd": 90,
            "sp": 70
        },
        "abilities": [
            "Tough Claws",
            "Predator",
            "Lead Coat"
        ],
        "innates": [
            "Prism Armor",
            "Download",
            "Full Metal Body"
        ],
        "weightkg": 5500,
        "types": [
            "Steel",
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Metagross Mega"
        ]
    },
    "Metagross Mega": {
        "id": 376,
        "bs": {
            "hp": 80,
            "at": 150,
            "df": 150,
            "sa": 105,
            "sd": 110,
            "sp": 105
        },
        "abilities": [
            "Light Metal",
            "Lead Coat",
            "Prism Armor"
        ],
        "innates": [
            "Tough Claws",
            "Full Metal Body",
            "Levitate"
        ],
        "weightkg": 5500,
        "types": [
            "Steel",
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Metagross"
        ]
    },
    "Regirock": {
        "id": 377,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 200,
            "sa": 50,
            "sd": 100,
            "sp": 50
        },
        "abilities": [
            "Stamina",
            "Loose Rocks",
            "Sand Stream"
        ],
        "innates": [
            "Power Core",
            "Impenetrable",
            "Self Sufficient"
        ],
        "weightkg": 2300,
        "types": [
            "Rock"
        ],
        "genderR": 2
    },
    "Regice": {
        "id": 378,
        "bs": {
            "hp": 80,
            "at": 50,
            "df": 100,
            "sa": 100,
            "sd": 200,
            "sp": 50
        },
        "abilities": [
            "Fortitude",
            "Heatproof",
            "Snow Warning"
        ],
        "innates": [
            "Power Core",
            "Impenetrable",
            "Self Sufficient"
        ],
        "weightkg": 1750,
        "types": [
            "Ice"
        ],
        "genderR": 2
    },
    "Registeel": {
        "id": 379,
        "bs": {
            "hp": 80,
            "at": 75,
            "df": 150,
            "sa": 75,
            "sd": 150,
            "sp": 50
        },
        "abilities": [
            "Sighting System",
            "Heatproof",
            "Steely Spirit"
        ],
        "innates": [
            "Power Core",
            "Impenetrable",
            "Self Sufficient"
        ],
        "weightkg": 2050,
        "types": [
            "Steel"
        ],
        "genderR": 2
    },
    "Latias": {
        "id": 380,
        "bs": {
            "hp": 80,
            "at": 80,
            "df": 90,
            "sa": 110,
            "sd": 130,
            "sp": 110
        },
        "abilities": [
            "Mirror Armor",
            "Natural Cure",
            "Illusion"
        ],
        "innates": [
            "Levitate",
            "Prism Armor",
            "Mystic Power"
        ],
        "weightkg": 400,
        "types": [
            "Dragon",
            "Psychic"
        ],
        "genderR": 254,
        "otherFormes": [
            "Latias Mega"
        ]
    },
    "Latias Mega": {
        "id": 380,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 120,
            "sa": 140,
            "sd": 150,
            "sp": 110
        },
        "abilities": [
            "Natural Recovery",
            "Mirror Armor",
            "Mirror Armor"
        ],
        "innates": [
            "Levitate",
            "Prism Armor",
            "Mystic Power"
        ],
        "weightkg": 400,
        "types": [
            "Dragon",
            "Psychic"
        ],
        "genderR": 254,
        "otherFormes": [
            "Latias"
        ]
    },
    "Latios": {
        "id": 381,
        "bs": {
            "hp": 80,
            "at": 90,
            "df": 80,
            "sa": 130,
            "sd": 110,
            "sp": 110
        },
        "abilities": [
            "Avenger",
            "Neuroforce",
            "Speed Boost"
        ],
        "innates": [
            "Levitate",
            "Rapid Response",
            "Mystic Power"
        ],
        "weightkg": 600,
        "types": [
            "Dragon",
            "Psychic"
        ],
        "genderR": 0,
        "otherFormes": [
            "Latios Mega"
        ]
    },
    "Latios Mega": {
        "id": 381,
        "bs": {
            "hp": 80,
            "at": 130,
            "df": 100,
            "sa": 160,
            "sd": 120,
            "sp": 110
        },
        "abilities": [
            "Speed Boost",
            "Speed Boost",
            "Speed Boost"
        ],
        "innates": [
            "Levitate",
            "Multiscale",
            "Arcane Force"
        ],
        "weightkg": 600,
        "types": [
            "Dragon",
            "Psychic"
        ],
        "genderR": 0,
        "otherFormes": [
            "Latios"
        ]
    },
    "Kyogre": {
        "id": 382,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 90,
            "sa": 150,
            "sd": 140,
            "sp": 90
        },
        "abilities": [
            "Swift Swim",
            "Aurora Borealis",
            "Predator"
        ],
        "innates": [
            "Drizzle",
            "Self Sufficient",
            "Sea Guardian"
        ],
        "weightkg": 3520,
        "types": [
            "Water"
        ],
        "genderR": 2,
        "otherFormes": [
            "Kyogre Primal"
        ],
        "nfe": true
    },
    "Kyogre Primal": {
        "id": 382,
        "bs": {
            "hp": 100,
            "at": 150,
            "df": 90,
            "sa": 180,
            "sd": 160,
            "sp": 90
        },
        "abilities": [
            "Artillery",
            "Artillery",
            "Artillery"
        ],
        "innates": [
            "Swift Swim",
            "Primal Armor",
            "Primordial Sea"
        ],
        "weightkg": 3520,
        "types": [
            "Water"
        ],
        "genderR": 2,
        "otherFormes": [
            "Kyogre"
        ]
    },
    "Groudon": {
        "id": 383,
        "bs": {
            "hp": 100,
            "at": 150,
            "df": 140,
            "sa": 100,
            "sd": 90,
            "sp": 90
        },
        "abilities": [
            "Tough Claws",
            "Molten Down",
            "Solar Power"
        ],
        "innates": [
            "Drought",
            "Self Sufficient",
            "Sun Worship"
        ],
        "weightkg": 9500,
        "types": [
            "Ground",
            "Fire"
        ],
        "genderR": 2,
        "otherFormes": [
            "Groudon Primal"
        ],
        "nfe": true
    },
    "Groudon Primal": {
        "id": 383,
        "bs": {
            "hp": 100,
            "at": 180,
            "df": 160,
            "sa": 150,
            "sd": 90,
            "sp": 90
        },
        "abilities": [
            "Tough Claws",
            "Tough Claws",
            "Tough Claws"
        ],
        "innates": [
            "Molten Down",
            "Primal Armor",
            "Desolate Land"
        ],
        "weightkg": 9500,
        "types": [
            "Ground",
            "Fire"
        ],
        "genderR": 2,
        "otherFormes": [
            "Groudon"
        ]
    },
    "Rayquaza": {
        "id": 384,
        "bs": {
            "hp": 105,
            "at": 150,
            "df": 90,
            "sa": 150,
            "sd": 90,
            "sp": 95
        },
        "abilities": [
            "Dragon's Maw",
            "Air Blower",
            "Violent Rush"
        ],
        "innates": [
            "Air Lock",
            "Weather Control",
            "Aerodynamics"
        ],
        "weightkg": 2065,
        "types": [
            "Dragon",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Rayquaza Mega"
        ]
    },
    "Rayquaza Mega": {
        "id": 384,
        "bs": {
            "hp": 105,
            "at": 180,
            "df": 100,
            "sa": 180,
            "sd": 100,
            "sp": 115
        },
        "abilities": [
            "Hyper Aggressive",
            "Wind Rider",
            "Mold Breaker"
        ],
        "innates": [
            "Delta Stream",
            "Dragon's Maw",
            "Aerilate"
        ],
        "weightkg": 2065,
        "types": [
            "Dragon",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Rayquaza"
        ]
    },
    "Jirachi": {
        "id": 385,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 100,
            "sa": 100,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Doombringer",
            "Regenerator",
            "Wishmaker"
        ],
        "innates": [
            "Steely Spirit",
            "Serene Grace",
            "Levitate"
        ],
        "weightkg": 11,
        "types": [
            "Steel",
            "Psychic"
        ],
        "genderR": 2
    },
    "Deoxys": {
        "id": 386,
        "bs": {
            "hp": 50,
            "at": 150,
            "df": 50,
            "sa": 150,
            "sd": 50,
            "sp": 150
        },
        "abilities": [
            "Aurora Borealis",
            "Metallic",
            "Inversion"
        ],
        "innates": [
            "Inner Focus",
            "Clear Body",
            "DNA Scramble"
        ],
        "weightkg": 608,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Deoxys Attack",
            "Deoxys Defense",
            "Deoxys Speed"
        ],
        "nfe": true
    },
    "Deoxys Attack": {
        "id": 386,
        "bs": {
            "hp": 50,
            "at": 180,
            "df": 20,
            "sa": 180,
            "sd": 20,
            "sp": 150
        },
        "abilities": [
            "Pressure",
            "Levitate",
            "Speed Boost"
        ],
        "innates": [
            "Inner Focus",
            "Fatal Precision",
            "DNA Scramble"
        ],
        "weightkg": 608,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Deoxys"
        ]
    },
    "Deoxys Defense": {
        "id": 386,
        "bs": {
            "hp": 50,
            "at": 70,
            "df": 160,
            "sa": 70,
            "sd": 160,
            "sp": 90
        },
        "abilities": [
            "Sturdy",
            "Levitate",
            "Fort Knox"
        ],
        "innates": [
            "Inner Focus",
            "Stamina",
            "DNA Scramble"
        ],
        "weightkg": 608,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Deoxys"
        ]
    },
    "Deoxys Speed": {
        "id": 386,
        "bs": {
            "hp": 50,
            "at": 95,
            "df": 90,
            "sa": 95,
            "sd": 90,
            "sp": 180
        },
        "abilities": [
            "Pressure",
            "Inner Focus",
            "Speed Boost"
        ],
        "innates": [
            "Levitate",
            "Fatal Precision",
            "DNA Scramble"
        ],
        "weightkg": 608,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Deoxys"
        ]
    },
    "Turtwig": {
        "id": 387,
        "bs": {
            "hp": 57,
            "at": 68,
            "df": 64,
            "sa": 45,
            "sd": 55,
            "sp": 31
        },
        "abilities": [
            "Rough Skin",
            "Stamina",
            "Sheer Force"
        ],
        "innates": [
            "Overgrow",
            "Shell Armor",
            "Chloroplast"
        ],
        "weightkg": 102,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Grotle": {
        "id": 388,
        "bs": {
            "hp": 80,
            "at": 89,
            "df": 90,
            "sa": 55,
            "sd": 65,
            "sp": 41
        },
        "abilities": [
            "Rough Skin",
            "Stamina",
            "Sheer Force"
        ],
        "innates": [
            "Overgrow",
            "Shell Armor",
            "Chloroplast"
        ],
        "weightkg": 970,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Torterra": {
        "id": 389,
        "bs": {
            "hp": 95,
            "at": 119,
            "df": 134,
            "sa": 55,
            "sd": 75,
            "sp": 57
        },
        "abilities": [
            "Rough Skin",
            "Stamina",
            "Loose Rocks"
        ],
        "innates": [
            "Overgrow",
            "Impenetrable",
            "Big Leaves"
        ],
        "weightkg": 3100,
        "types": [
            "Grass",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Torterra Mega"
        ]
    },
    "Torterra Mega": {
        "id": 389,
        "bs": {
            "hp": 95,
            "at": 150,
            "df": 184,
            "sa": 65,
            "sd": 105,
            "sp": 36
        },
        "abilities": [
            "Grassy Surge",
            "Sand Force",
            "Impenetrable"
        ],
        "innates": [
            "Forest Rage",
            "Solid Rock",
            "Atlas"
        ],
        "weightkg": 3100,
        "types": [
            "Grass",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Torterra"
        ]
    },
    "Turtwig Redux": {
        "id": 387,
        "bs": {
            "hp": 57,
            "at": 58,
            "df": 64,
            "sa": 55,
            "sd": 75,
            "sp": 11
        },
        "abilities": [
            "Shell Armor",
            "Wind Rider",
            "Reckless"
        ],
        "innates": [
            "Cloud Nine",
            "Aerilate",
            "Impenetrable"
        ],
        "weightkg": 102,
        "types": [
            "Flying",
            "Fairy"
        ],
        "genderR": 127
    },
    "Grotle Redux": {
        "id": 388,
        "bs": {
            "hp": 80,
            "at": 79,
            "df": 90,
            "sa": 65,
            "sd": 85,
            "sp": 21
        },
        "abilities": [
            "Shell Armor",
            "Wind Rider",
            "Reckless"
        ],
        "innates": [
            "Cloud Nine",
            "Aerilate",
            "Impenetrable"
        ],
        "weightkg": 970,
        "types": [
            "Flying",
            "Fairy"
        ],
        "genderR": 127
    },
    "Torterra Redux": {
        "id": 389,
        "bs": {
            "hp": 95,
            "at": 109,
            "df": 134,
            "sa": 65,
            "sd": 95,
            "sp": 37
        },
        "abilities": [
            "Shell Armor",
            "Air Blower",
            "Reckless"
        ],
        "innates": [
            "Cloud Nine",
            "Aerilate",
            "Impenetrable"
        ],
        "weightkg": 3100,
        "types": [
            "Flying",
            "Fairy"
        ],
        "genderR": 127
    },
    "Torterra Redux Mega": {
        "id": 389,
        "bs": {
            "hp": 95,
            "at": 149,
            "df": 184,
            "sa": 85,
            "sd": 85,
            "sp": 37
        },
        "abilities": [
            "Giant Wings",
            "Giant Wings",
            "Giant Wings"
        ],
        "innates": [
            "Shell Armor",
            "Thundercall",
            "Impenetrable"
        ],
        "weightkg": 3100,
        "types": [
            "Flying",
            "Electric"
        ],
        "genderR": 127
    },
    "Chimchar": {
        "id": 390,
        "bs": {
            "hp": 44,
            "at": 62,
            "df": 44,
            "sa": 62,
            "sd": 44,
            "sp": 64
        },
        "abilities": [
            "Iron Fist",
            "Power Fists",
            "Gorilla Tactics"
        ],
        "innates": [
            "Blaze",
            "Prankster",
            "Defiant"
        ],
        "weightkg": 62,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Monferno": {
        "id": 391,
        "bs": {
            "hp": 64,
            "at": 83,
            "df": 52,
            "sa": 83,
            "sd": 52,
            "sp": 86
        },
        "abilities": [
            "Iron Fist",
            "Power Fists",
            "Gorilla Tactics"
        ],
        "innates": [
            "Blaze",
            "Prankster",
            "Defiant"
        ],
        "weightkg": 220,
        "types": [
            "Fire",
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Infernape": {
        "id": 392,
        "bs": {
            "hp": 76,
            "at": 105,
            "df": 71,
            "sa": 104,
            "sd": 71,
            "sp": 108
        },
        "abilities": [
            "Iron Fist",
            "Magical Fists",
            "Gorilla Tactics"
        ],
        "innates": [
            "Blaze",
            "Discipline",
            "Egoist"
        ],
        "weightkg": 550,
        "types": [
            "Fire",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Infernape Mega"
        ]
    },
    "Infernape Mega": {
        "id": 392,
        "bs": {
            "hp": 76,
            "at": 145,
            "df": 71,
            "sa": 145,
            "sd": 71,
            "sp": 127
        },
        "abilities": [
            "Evaporate",
            "Defiant",
            "Infernal Rage"
        ],
        "innates": [
            "Hellblaze",
            "Equinox",
            "Adrenaline Rush"
        ],
        "weightkg": 550,
        "types": [
            "Fire",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Infernape"
        ]
    },
    "Chimchar Redux": {
        "id": 390,
        "bs": {
            "hp": 44,
            "at": 62,
            "df": 64,
            "sa": 22,
            "sd": 64,
            "sp": 64
        },
        "abilities": [
            "Blitz Boxer",
            "Water Veil",
            "Storm Drain"
        ],
        "innates": [
            "Iron Fist",
            "Torrent",
            "Frisk"
        ],
        "weightkg": 62,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Monferno Redux": {
        "id": 391,
        "bs": {
            "hp": 64,
            "at": 83,
            "df": 72,
            "sa": 43,
            "sd": 72,
            "sp": 86
        },
        "abilities": [
            "Blitz Boxer",
            "Water Veil",
            "Storm Drain"
        ],
        "innates": [
            "Iron Fist",
            "Torrent",
            "Frisk"
        ],
        "weightkg": 220,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 127
    },
    "Infernape Redux": {
        "id": 392,
        "bs": {
            "hp": 76,
            "at": 115,
            "df": 86,
            "sa": 59,
            "sd": 91,
            "sp": 108
        },
        "abilities": [
            "Blitz Boxer",
            "Water Veil",
            "Tidal Rush"
        ],
        "innates": [
            "Iron Fist",
            "Long Reach",
            "Inflatable"
        ],
        "weightkg": 550,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 127
    },
    "Infernape Redux Mega": {
        "id": 392,
        "bs": {
            "hp": 76,
            "at": 135,
            "df": 90,
            "sa": 105,
            "sd": 95,
            "sp": 134
        },
        "abilities": [
            "Blitz Boxer",
            "Tidal Rush",
            "Adaptability"
        ],
        "innates": [
            "Nika",
            "Raging Boxer",
            "Riptide"
        ],
        "weightkg": 550,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 127
    },
    "Piplup": {
        "id": 393,
        "bs": {
            "hp": 53,
            "at": 51,
            "df": 53,
            "sa": 67,
            "sd": 56,
            "sp": 40
        },
        "abilities": [
            "Competitive",
            "Defiant",
            "Big Pecks"
        ],
        "innates": [
            "Torrent",
            "Thick Fat",
            "Swift Swim"
        ],
        "weightkg": 52,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Prinplup": {
        "id": 394,
        "bs": {
            "hp": 69,
            "at": 66,
            "df": 68,
            "sa": 86,
            "sd": 81,
            "sp": 50
        },
        "abilities": [
            "Competitive",
            "Defiant",
            "Big Pecks"
        ],
        "innates": [
            "Torrent",
            "Antarctic Bird",
            "Swift Swim"
        ],
        "weightkg": 230,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Empoleon": {
        "id": 395,
        "bs": {
            "hp": 84,
            "at": 86,
            "df": 88,
            "sa": 116,
            "sd": 101,
            "sp": 60
        },
        "abilities": [
            "Competitive",
            "Swift Swim",
            "Slush Rush"
        ],
        "innates": [
            "Torrent",
            "Antarctic Bird",
            "Impenetrable"
        ],
        "weightkg": 845,
        "types": [
            "Water",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Empoleon Mega"
        ]
    },
    "Empoleon Mega": {
        "id": 395,
        "bs": {
            "hp": 84,
            "at": 80,
            "df": 118,
            "sa": 136,
            "sd": 121,
            "sp": 96
        },
        "abilities": [
            "No Guard",
            "Competitive",
            "Impenetrable"
        ],
        "innates": [
            "Riptide",
            "Antarctic Bird",
            "Battle Armor"
        ],
        "weightkg": 845,
        "types": [
            "Water",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Empoleon"
        ]
    },
    "Piplup Redux": {
        "id": 393,
        "bs": {
            "hp": 53,
            "at": 31,
            "df": 43,
            "sa": 67,
            "sd": 56,
            "sp": 70
        },
        "abilities": [
            "Pyromancy",
            "Whiteout",
            "Solar Power"
        ],
        "innates": [
            "Antarctic Bird",
            "Flash Fire",
            "Overcoat"
        ],
        "weightkg": 52,
        "types": [
            "Fire",
            "Ice"
        ],
        "genderR": 127
    },
    "Prinplup Redux": {
        "id": 394,
        "bs": {
            "hp": 69,
            "at": 46,
            "df": 58,
            "sa": 86,
            "sd": 81,
            "sp": 80
        },
        "abilities": [
            "Pyromancy",
            "Whiteout",
            "Solar Power"
        ],
        "innates": [
            "Antarctic Bird",
            "Flash Fire",
            "Overcoat"
        ],
        "weightkg": 230,
        "types": [
            "Fire",
            "Ice"
        ],
        "genderR": 127
    },
    "Empoleon Redux": {
        "id": 395,
        "bs": {
            "hp": 84,
            "at": 66,
            "df": 78,
            "sa": 111,
            "sd": 101,
            "sp": 95
        },
        "abilities": [
            "Drought",
            "Snow Warning",
            "Pyromancy"
        ],
        "innates": [
            "Antarctic Bird",
            "Molten Down",
            "Ice Scales"
        ],
        "weightkg": 845,
        "types": [
            "Fire",
            "Ice"
        ],
        "genderR": 127
    },
    "Empoleon Redux Mega": {
        "id": 395,
        "bs": {
            "hp": 84,
            "at": 88,
            "df": 80,
            "sa": 141,
            "sd": 111,
            "sp": 131
        },
        "abilities": [
            "Frost Burn",
            "Frost Burn",
            "Frost Burn"
        ],
        "innates": [
            "Parental Bond",
            "Cryomancy",
            "Levitate"
        ],
        "weightkg": 845,
        "types": [
            "Fire",
            "Ice"
        ],
        "genderR": 127
    },
    "Starly": {
        "id": 396,
        "bs": {
            "hp": 40,
            "at": 55,
            "df": 30,
            "sa": 30,
            "sd": 30,
            "sp": 60
        },
        "abilities": [
            "Intimidate",
            "Reckless",
            "Big Pecks"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Run Away"
        ],
        "weightkg": 20,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Staravia": {
        "id": 397,
        "bs": {
            "hp": 55,
            "at": 75,
            "df": 50,
            "sa": 40,
            "sd": 40,
            "sp": 80
        },
        "abilities": [
            "Intimidate",
            "Reckless",
            "Violent Rush"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Frisk"
        ],
        "weightkg": 155,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Staraptor": {
        "id": 398,
        "bs": {
            "hp": 85,
            "at": 120,
            "df": 70,
            "sa": 50,
            "sd": 60,
            "sp": 100
        },
        "abilities": [
            "Giant Wings",
            "Guts",
            "Violent Rush"
        ],
        "innates": [
            "Predator",
            "Reckless",
            "Intimidate"
        ],
        "weightkg": 249,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127
    },
    "Bidoof": {
        "id": 399,
        "bs": {
            "hp": 69,
            "at": 45,
            "df": 60,
            "sa": 35,
            "sd": 40,
            "sp": 31
        },
        "abilities": [
            "Simple",
            "Looter",
            "Moody"
        ],
        "innates": [
            "Unaware",
            "Growing Tooth",
            "Field Explorer"
        ],
        "weightkg": 200,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Bibarel": {
        "id": 400,
        "bs": {
            "hp": 89,
            "at": 85,
            "df": 80,
            "sa": 55,
            "sd": 60,
            "sp": 71
        },
        "abilities": [
            "Simple",
            "Looter",
            "Moody"
        ],
        "innates": [
            "Unaware",
            "Growing Tooth",
            "Field Explorer"
        ],
        "weightkg": 315,
        "types": [
            "Normal",
            "Water"
        ],
        "genderR": 127
    },
    "Kricketot": {
        "id": 401,
        "bs": {
            "hp": 37,
            "at": 25,
            "df": 41,
            "sa": 25,
            "sd": 41,
            "sp": 25
        },
        "abilities": [
            "Technician",
            "Amplifier",
            "Perfectionist"
        ],
        "innates": [
            "Swarm",
            "Soundproof",
            "Shed Skin"
        ],
        "weightkg": 22,
        "types": [
            "Bug",
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Kricketune": {
        "id": 402,
        "bs": {
            "hp": 77,
            "at": 85,
            "df": 51,
            "sa": 85,
            "sd": 51,
            "sp": 85
        },
        "abilities": [
            "Pollinate",
            "Perfectionist",
            "Drizzle"
        ],
        "innates": [
            "Mountaineer",
            "Technician",
            "Soundproof"
        ],
        "weightkg": 255,
        "types": [
            "Bug",
            "Normal"
        ],
        "genderR": 127
    },
    "Shinx": {
        "id": 403,
        "bs": {
            "hp": 55,
            "at": 65,
            "df": 34,
            "sa": 30,
            "sd": 34,
            "sp": 65
        },
        "abilities": [
            "Intimidate",
            "Electric Burst",
            "Cute Charm"
        ],
        "innates": [
            "Short Circuit",
            "Illuminate",
            "Guts"
        ],
        "weightkg": 95,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Luxio": {
        "id": 404,
        "bs": {
            "hp": 60,
            "at": 85,
            "df": 49,
            "sa": 60,
            "sd": 49,
            "sp": 60
        },
        "abilities": [
            "Intimidate",
            "Electric Burst",
            "Predator"
        ],
        "innates": [
            "Short Circuit",
            "Illuminate",
            "Guts"
        ],
        "weightkg": 305,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Luxray": {
        "id": 405,
        "bs": {
            "hp": 90,
            "at": 120,
            "df": 79,
            "sa": 75,
            "sd": 79,
            "sp": 90
        },
        "abilities": [
            "Frisk",
            "Electric Burst",
            "Guts"
        ],
        "innates": [
            "Short Circuit",
            "Intimidate",
            "Predator"
        ],
        "weightkg": 420,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Luxray Mega"
        ]
    },
    "Luxray Mega": {
        "id": 405,
        "bs": {
            "hp": 90,
            "at": 143,
            "df": 95,
            "sa": 96,
            "sd": 95,
            "sp": 114
        },
        "abilities": [
            "Shocking Maw",
            "Shocking Maw",
            "Shocking Maw"
        ],
        "innates": [
            "Gleam Eyes",
            "Merciless",
            "Jaws of Carnage"
        ],
        "weightkg": 420,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Luxray"
        ]
    },
    "Budew": {
        "id": 406,
        "bs": {
            "hp": 40,
            "at": 30,
            "df": 35,
            "sa": 50,
            "sd": 70,
            "sp": 55
        },
        "abilities": [
            "Pastel Veil",
            "Flourish",
            "Guilt Trip"
        ],
        "innates": [
            "Poison Point",
            "Cute Charm",
            "Natural Cure"
        ],
        "weightkg": 12,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Cranidos": {
        "id": 408,
        "bs": {
            "hp": 67,
            "at": 125,
            "df": 40,
            "sa": 30,
            "sd": 30,
            "sp": 58
        },
        "abilities": [
            "Sheer Force",
            "Rampage",
            "Predator"
        ],
        "innates": [
            "Rock Head",
            "Mineralize",
            "Fossilized"
        ],
        "weightkg": 315,
        "types": [
            "Rock"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Rampardos": {
        "id": 409,
        "bs": {
            "hp": 97,
            "at": 165,
            "df": 70,
            "sa": 55,
            "sd": 50,
            "sp": 78
        },
        "abilities": [
            "Sturdy",
            "Hyper Aggressive",
            "Violent Rush"
        ],
        "innates": [
            "Fossilized",
            "Reckless",
            "Rock Head"
        ],
        "weightkg": 1025,
        "types": [
            "Rock"
        ],
        "genderR": 31
    },
    "Shieldon": {
        "id": 410,
        "bs": {
            "hp": 30,
            "at": 42,
            "df": 118,
            "sa": 42,
            "sd": 88,
            "sp": 30
        },
        "abilities": [
            "Sturdy",
            "Stamina",
            "Soundproof"
        ],
        "innates": [
            "Fossilized",
            "Impenetrable",
            "Stall"
        ],
        "weightkg": 570,
        "types": [
            "Rock",
            "Steel"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Bastiodon": {
        "id": 411,
        "bs": {
            "hp": 80,
            "at": 52,
            "df": 168,
            "sa": 47,
            "sd": 138,
            "sp": 30
        },
        "abilities": [
            "Battle Armor",
            "Stamina",
            "Iron Barbs"
        ],
        "innates": [
            "Dauntless Shield",
            "Impenetrable",
            "Primal Armor"
        ],
        "weightkg": 1495,
        "types": [
            "Rock",
            "Steel"
        ],
        "genderR": 31
    },
    "Burmy": {
        "id": 412,
        "bs": {
            "hp": 55,
            "at": 29,
            "df": 60,
            "sa": 59,
            "sd": 60,
            "sp": 36
        },
        "abilities": [
            "Anticipation",
            "Analytic",
            "Shield Dust"
        ],
        "innates": [
            "Swarm",
            "Shed Skin",
            "Overcoat"
        ],
        "weightkg": 34,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "otherFormes": [
            "Burmy Sandy Cloak",
            "Burmy Trash Cloak"
        ],
        "nfe": true
    },
    "Wormadam": {
        "id": 413,
        "bs": {
            "hp": 84,
            "at": 59,
            "df": 85,
            "sa": 99,
            "sd": 105,
            "sp": 36
        },
        "abilities": [
            "Anticipation",
            "Analytic",
            "Overcoat"
        ],
        "innates": [
            "Adaptability",
            "Battle Armor",
            "Coward"
        ],
        "weightkg": 65,
        "types": [
            "Bug",
            "Grass"
        ],
        "genderR": 254,
        "otherFormes": [
            "Wormadam Sandy Cloak",
            "Wormadam Trash Cloak"
        ]
    },
    "Burmy Sandy": {
        "id": 412,
        "bs": {
            "hp": 55,
            "at": 29,
            "df": 60,
            "sa": 59,
            "sd": 60,
            "sp": 36
        },
        "abilities": [
            "Anticipation",
            "Analytic",
            "Shield Dust"
        ],
        "innates": [
            "Swarm",
            "Shed Skin",
            "Overcoat"
        ],
        "weightkg": 34,
        "types": [
            "Bug"
        ],
        "genderR": 127
    },
    "Wormadam Sandy": {
        "id": 413,
        "bs": {
            "hp": 84,
            "at": 99,
            "df": 105,
            "sa": 59,
            "sd": 85,
            "sp": 36
        },
        "abilities": [
            "Anticipation",
            "Rock Head",
            "Overcoat"
        ],
        "innates": [
            "Adaptability",
            "Battle Armor",
            "Sand Veil"
        ],
        "weightkg": 65,
        "types": [
            "Bug",
            "Ground"
        ],
        "genderR": 254
    },
    "Burmy Trash": {
        "id": 412,
        "bs": {
            "hp": 55,
            "at": 29,
            "df": 60,
            "sa": 59,
            "sd": 60,
            "sp": 36
        },
        "abilities": [
            "Anticipation",
            "Analytic",
            "Shield Dust"
        ],
        "innates": [
            "Swarm",
            "Shed Skin",
            "Overcoat"
        ],
        "weightkg": 34,
        "types": [
            "Bug"
        ],
        "genderR": 127
    },
    "Wormadam Trash": {
        "id": 413,
        "bs": {
            "hp": 84,
            "at": 69,
            "df": 105,
            "sa": 69,
            "sd": 105,
            "sp": 36
        },
        "abilities": [
            "Anticipation",
            "Weak Armor",
            "Overcoat"
        ],
        "innates": [
            "Adaptability",
            "Battle Armor",
            "Scrapyard"
        ],
        "weightkg": 65,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 254
    },
    "Burmy Eterna": {
        "id": 412,
        "bs": {
            "hp": 210,
            "at": 79,
            "df": 205,
            "sa": 255,
            "sd": 205,
            "sp": 86
        },
        "abilities": [
            "Anticipation",
            "Analytic",
            "Corrosion"
        ],
        "innates": [
            "Half Drake",
            "Rampage",
            "Dragon's Maw"
        ],
        "weightkg": 34,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127
    },
    "Mothim": {
        "id": 414,
        "bs": {
            "hp": 65,
            "at": 100,
            "df": 65,
            "sa": 100,
            "sd": 65,
            "sp": 90
        },
        "abilities": [
            "Looter",
            "Overcoat",
            "Protean"
        ],
        "innates": [
            "Tinted Lens",
            "Majestic Moth",
            "Compound Eyes"
        ],
        "weightkg": 233,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 0
    },
    "Combee": {
        "id": 415,
        "bs": {
            "hp": 40,
            "at": 60,
            "df": 42,
            "sa": 60,
            "sd": 42,
            "sp": 80
        },
        "abilities": [
            "Regenerator",
            "Aerodynamics",
            "Rattled"
        ],
        "innates": [
            "Swarm",
            "Pollinate",
            "Multi Headed"
        ],
        "weightkg": 55,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Vespiquen": {
        "id": 416,
        "bs": {
            "hp": 70,
            "at": 80,
            "df": 112,
            "sa": 80,
            "sd": 112,
            "sp": 40
        },
        "abilities": [
            "Regenerator",
            "Stamina",
            "Parental Bond"
        ],
        "innates": [
            "Queen's Mourning",
            "Queenly Majesty",
            "Self Sufficient"
        ],
        "weightkg": 385,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 254
    },
    "Pachirisu": {
        "id": 417,
        "bs": {
            "hp": 60,
            "at": 45,
            "df": 70,
            "sa": 75,
            "sd": 110,
            "sp": 95
        },
        "abilities": [
            "Gluttony",
            "Pickup",
            "Electro Surge"
        ],
        "innates": [
            "Fur Coat",
            "Regenerator",
            "Volt Absorb"
        ],
        "weightkg": 39,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Buizel": {
        "id": 418,
        "bs": {
            "hp": 55,
            "at": 65,
            "df": 35,
            "sa": 60,
            "sd": 30,
            "sp": 85
        },
        "abilities": [
            "Swift Swim",
            "Propeller Tail",
            "Technician"
        ],
        "innates": [
            "Field Explorer",
            "Inflatable",
            "Pickup"
        ],
        "weightkg": 295,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Buizel Redux"
        ],
        "nfe": true
    },
    "Floatzel": {
        "id": 419,
        "bs": {
            "hp": 85,
            "at": 115,
            "df": 55,
            "sa": 100,
            "sd": 50,
            "sp": 115
        },
        "abilities": [
            "Technician",
            "Propeller Tail",
            "Hydrate"
        ],
        "innates": [
            "Swift Swim",
            "Water Veil",
            "Inflatable"
        ],
        "weightkg": 335,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Floatzel Redux"
        ]
    },
    "Buizel Redux": {
        "id": 418,
        "bs": {
            "hp": 50,
            "at": 50,
            "df": 40,
            "sa": 50,
            "sd": 40,
            "sp": 100
        },
        "abilities": [
            "Technician",
            "Aerilate",
            "Speed Force"
        ],
        "innates": [
            "Aerodynamics",
            "Keen Eye",
            "Cloud Nine"
        ],
        "weightkg": 295,
        "types": [
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Buizel"
        ],
        "nfe": true
    },
    "Floatzel Redux": {
        "id": 419,
        "bs": {
            "hp": 80,
            "at": 90,
            "df": 60,
            "sa": 90,
            "sd": 60,
            "sp": 140
        },
        "abilities": [
            "Technician",
            "Speed Force",
            "Air Blower"
        ],
        "innates": [
            "Aerodynamics",
            "Keen Eye",
            "Cloud Nine"
        ],
        "weightkg": 335,
        "types": [
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Floatzel"
        ]
    },
    "Cherubi": {
        "id": 420,
        "bs": {
            "hp": 45,
            "at": 62,
            "df": 45,
            "sa": 62,
            "sd": 53,
            "sp": 63
        },
        "abilities": [
            "Pastel Veil",
            "Solar Power",
            "Anticipation"
        ],
        "innates": [
            "Overgrow",
            "Chlorophyll",
            "Chloroplast"
        ],
        "weightkg": 33,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Cherrim": {
        "id": 421,
        "bs": {
            "hp": 70,
            "at": 100,
            "df": 70,
            "sa": 100,
            "sd": 78,
            "sp": 85
        },
        "abilities": [
            "Aroma Veil",
            "Solar Power",
            "Anticipation"
        ],
        "innates": [
            "Flower Gift",
            "Chlorophyll",
            "Solar Flare"
        ],
        "weightkg": 93,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Cherrim Sunshine"
        ]
    },
    "Cherrim Sunshine": {
        "id": 421,
        "bs": {
            "hp": 70,
            "at": 100,
            "df": 70,
            "sa": 100,
            "sd": 78,
            "sp": 85
        },
        "abilities": [
            "Leaf Guard",
            "Solar Power",
            "Anticipation"
        ],
        "innates": [
            "Flower Gift",
            "Chlorophyll",
            "Solar Flare"
        ],
        "weightkg": 93,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Cherrim"
        ]
    },
    "Shellos": {
        "id": 422,
        "bs": {
            "hp": 76,
            "at": 48,
            "df": 48,
            "sa": 57,
            "sd": 62,
            "sp": 34
        },
        "abilities": [
            "Shell Armor",
            "Storm Drain",
            "Regenerator"
        ],
        "innates": [
            "Sticky Hold",
            "Self Sufficient",
            "Limber"
        ],
        "weightkg": 63,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Shellos East Sea"
        ],
        "nfe": true
    },
    "Gastrodon": {
        "id": 423,
        "bs": {
            "hp": 111,
            "at": 83,
            "df": 68,
            "sa": 92,
            "sd": 82,
            "sp": 39
        },
        "abilities": [
            "Sand Guard",
            "Storm Drain",
            "Regenerator"
        ],
        "innates": [
            "Sticky Hold",
            "Self Sufficient",
            "Shell Armor"
        ],
        "weightkg": 299,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gastrodon East Sea"
        ],
        "nfe": true
    },
    "Shellos East": {
        "id": 422,
        "bs": {
            "hp": 76,
            "at": 48,
            "df": 48,
            "sa": 57,
            "sd": 62,
            "sp": 34
        },
        "abilities": [
            "Shell Armor",
            "Storm Drain",
            "Regenerator"
        ],
        "innates": [
            "Sticky Hold",
            "Self Sufficient",
            "Limber"
        ],
        "weightkg": 63,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Gastrodon East": {
        "id": 423,
        "bs": {
            "hp": 111,
            "at": 83,
            "df": 68,
            "sa": 92,
            "sd": 82,
            "sp": 39
        },
        "abilities": [
            "Sand Guard",
            "Storm Drain",
            "Regenerator"
        ],
        "innates": [
            "Sticky Hold",
            "Self Sufficient",
            "Shell Armor"
        ],
        "weightkg": 299,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127
    },
    "Ambipom": {
        "id": 424,
        "bs": {
            "hp": 75,
            "at": 100,
            "df": 66,
            "sa": 60,
            "sd": 66,
            "sp": 125
        },
        "abilities": [
            "Monkey Business",
            "Pickup",
            "Unburden"
        ],
        "innates": [
            "Long Reach",
            "Technician",
            "Skill Link"
        ],
        "weightkg": 203,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Drifloon": {
        "id": 425,
        "bs": {
            "hp": 95,
            "at": 50,
            "df": 39,
            "sa": 60,
            "sd": 54,
            "sp": 70
        },
        "abilities": [
            "Aftermath",
            "Low Visibility",
            "Unburden"
        ],
        "innates": [
            "Inflatable",
            "Flare Boost",
            "Soul Eater"
        ],
        "weightkg": 12,
        "types": [
            "Ghost",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Drifblim": {
        "id": 426,
        "bs": {
            "hp": 150,
            "at": 80,
            "df": 54,
            "sa": 90,
            "sd": 74,
            "sp": 80
        },
        "abilities": [
            "Aftermath",
            "Low Visibility",
            "Unburden"
        ],
        "innates": [
            "Inflatable",
            "Flare Boost",
            "Soul Eater"
        ],
        "weightkg": 150,
        "types": [
            "Ghost",
            "Flying"
        ],
        "genderR": 127
    },
    "Buneary": {
        "id": 427,
        "bs": {
            "hp": 55,
            "at": 66,
            "df": 44,
            "sa": 44,
            "sd": 56,
            "sp": 85
        },
        "abilities": [
            "Normalize",
            "Run Away",
            "Quick Feet"
        ],
        "innates": [
            "Fur Coat",
            "Limber",
            "Striker"
        ],
        "weightkg": 55,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Lopunny": {
        "id": 428,
        "bs": {
            "hp": 65,
            "at": 76,
            "df": 64,
            "sa": 54,
            "sd": 96,
            "sp": 115
        },
        "abilities": [
            "Normalize",
            "Fighting Spirit",
            "Technician"
        ],
        "innates": [
            "Limber",
            "Fur Coat",
            "Striker"
        ],
        "weightkg": 333,
        "types": [
            "Normal",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Lopunny Mega"
        ]
    },
    "Lopunny Mega": {
        "id": 428,
        "bs": {
            "hp": 65,
            "at": 136,
            "df": 74,
            "sa": 64,
            "sd": 96,
            "sp": 135
        },
        "abilities": [
            "Scrappy",
            "Cute Charm",
            "Technician"
        ],
        "innates": [
            "Limber",
            "Fur Coat",
            "Striker"
        ],
        "weightkg": 333,
        "types": [
            "Normal",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Lopunny"
        ]
    },
    "Mismagius": {
        "id": 429,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 60,
            "sa": 110,
            "sd": 110,
            "sp": 110
        },
        "abilities": [
            "Ectoplasm",
            "Prankster",
            "Surprise!"
        ],
        "innates": [
            "Levitate",
            "Shadow Tag",
            "Pixie Power"
        ],
        "weightkg": 44,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "genderR": 127
    },
    "Honchkrow": {
        "id": 430,
        "bs": {
            "hp": 100,
            "at": 120,
            "df": 52,
            "sa": 52,
            "sd": 81,
            "sp": 105
        },
        "abilities": [
            "Super Luck",
            "Bad Luck",
            "Moxie"
        ],
        "innates": [
            "Big Pecks",
            "Overcoat",
            "Looter"
        ],
        "weightkg": 273,
        "types": [
            "Dark",
            "Flying"
        ],
        "genderR": 127
    },
    "Glameow": {
        "id": 431,
        "bs": {
            "hp": 49,
            "at": 65,
            "df": 42,
            "sa": 42,
            "sd": 37,
            "sp": 85
        },
        "abilities": [
            "Feline Prowess",
            "Own Tempo",
            "Ill Will"
        ],
        "innates": [
            "Hypnotist",
            "Limber",
            "Defiant"
        ],
        "weightkg": 39,
        "types": [
            "Normal"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Purugly": {
        "id": 432,
        "bs": {
            "hp": 88,
            "at": 102,
            "df": 64,
            "sa": 64,
            "sd": 69,
            "sp": 112
        },
        "abilities": [
            "Intimidate",
            "Defiant",
            "Moxie"
        ],
        "innates": [
            "Hyper Aggressive",
            "Thick Fat",
            "Fur Coat"
        ],
        "weightkg": 438,
        "types": [
            "Normal"
        ],
        "genderR": 190
    },
    "Chingling": {
        "id": 433,
        "bs": {
            "hp": 45,
            "at": 30,
            "df": 50,
            "sa": 65,
            "sd": 50,
            "sp": 45
        },
        "abilities": [
            "Mystic Power",
            "Light Metal",
            "Amplifier"
        ],
        "innates": [
            "Levitate",
            "Magic Guard",
            "Metallic"
        ],
        "weightkg": 6,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Stunky": {
        "id": 434,
        "bs": {
            "hp": 63,
            "at": 41,
            "df": 47,
            "sa": 77,
            "sd": 41,
            "sp": 74
        },
        "abilities": [
            "Poison Point",
            "Anticipation",
            "Unnerve"
        ],
        "innates": [
            "Aftermath",
            "Stench",
            "Lingering Aroma"
        ],
        "weightkg": 192,
        "types": [
            "Poison",
            "Dark"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Skuntank": {
        "id": 435,
        "bs": {
            "hp": 103,
            "at": 51,
            "df": 77,
            "sa": 113,
            "sd": 71,
            "sp": 84
        },
        "abilities": [
            "Aftermath",
            "Unburden",
            "Adaptability"
        ],
        "innates": [
            "Corrosion",
            "Stench",
            "Gluttony"
        ],
        "weightkg": 380,
        "types": [
            "Poison",
            "Dark"
        ],
        "genderR": 127
    },
    "Bronzor": {
        "id": 436,
        "bs": {
            "hp": 57,
            "at": 24,
            "df": 86,
            "sa": 24,
            "sd": 86,
            "sp": 23
        },
        "abilities": [
            "Battle Armor",
            "Lead Coat",
            "Heatproof"
        ],
        "innates": [
            "Levitate",
            "Mirror Armor",
            "Forewarn"
        ],
        "weightkg": 605,
        "types": [
            "Steel",
            "Psychic"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Bronzong": {
        "id": 437,
        "bs": {
            "hp": 67,
            "at": 89,
            "df": 116,
            "sa": 79,
            "sd": 116,
            "sp": 33
        },
        "abilities": [
            "Battle Armor",
            "Lead Coat",
            "Twist. Dimension"
        ],
        "innates": [
            "Steely Spirit",
            "Heatproof",
            "Bulletproof"
        ],
        "weightkg": 1870,
        "types": [
            "Steel",
            "Psychic"
        ],
        "genderR": 2
    },
    "Bonsly": {
        "id": 438,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 95,
            "sa": 10,
            "sd": 45,
            "sp": 10
        },
        "abilities": [
            "Sturdy",
            "Mineralize",
            "Water Compaction"
        ],
        "innates": [
            "Raw Wood",
            "Cute Charm",
            "Rock Head"
        ],
        "weightkg": 150,
        "types": [
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Mime Jr.": {
        "id": 439,
        "bs": {
            "hp": 20,
            "at": 25,
            "df": 45,
            "sa": 70,
            "sd": 90,
            "sp": 60
        },
        "abilities": [
            "Filter",
            "Mimicry",
            "Prankster"
        ],
        "innates": [
            "Soundproof",
            "Cute Charm",
            "Magic Bounce"
        ],
        "weightkg": 130,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 127
    },
    "Mr. Mime": {
        "id": 122,
        "bs": {
            "hp": 40,
            "at": 45,
            "df": 65,
            "sa": 120,
            "sd": 120,
            "sp": 90
        },
        "abilities": [
            "Filter",
            "Stall",
            "Screen Cleaner"
        ],
        "innates": [
            "Soundproof",
            "Magic Bounce",
            "Trickster"
        ],
        "weightkg": 545,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 127
    },
    "Mr Mime Galarian": {
        "id": 122,
        "bs": {
            "hp": 50,
            "at": 65,
            "df": 65,
            "sa": 90,
            "sd": 90,
            "sp": 100
        },
        "abilities": [
            "Prankster",
            "North Wind",
            "Magic Guard"
        ],
        "innates": [
            "Screen Cleaner",
            "Ice Body",
            "Oblivious"
        ],
        "weightkg": 545,
        "types": [
            "Ice",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Mr Mime"
        ],
        "nfe": true
    },
    "Happiny": {
        "id": 440,
        "bs": {
            "hp": 100,
            "at": 5,
            "df": 5,
            "sa": 15,
            "sd": 65,
            "sp": 30
        },
        "abilities": [
            "Regenerator",
            "Serene Grace",
            "Guilt Trip"
        ],
        "innates": [
            "Cute Charm",
            "Healer",
            "Natural Cure"
        ],
        "weightkg": 244,
        "types": [
            "Normal"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Chansey": {
        "id": 113,
        "bs": {
            "hp": 250,
            "at": 5,
            "df": 5,
            "sa": 35,
            "sd": 105,
            "sp": 50
        },
        "abilities": [
            "Healer",
            "Super Luck",
            "Triage"
        ],
        "innates": [
            "Sweet Veil",
            "Serene Grace",
            "Natural Cure"
        ],
        "weightkg": 346,
        "types": [
            "Normal"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Blissey": {
        "id": 242,
        "bs": {
            "hp": 255,
            "at": 10,
            "df": 20,
            "sa": 75,
            "sd": 135,
            "sp": 55
        },
        "abilities": [
            "Cute Charm",
            "Super Luck",
            "Triage"
        ],
        "innates": [
            "Overcoat",
            "Pastel Veil",
            "Self Sufficient"
        ],
        "weightkg": 468,
        "types": [
            "Normal"
        ],
        "genderR": 254
    },
    "Happiny Redux": {
        "id": 440,
        "bs": {
            "hp": 15,
            "at": 75,
            "df": 5,
            "sa": 10,
            "sd": 5,
            "sp": 110
        },
        "abilities": [
            "Wimp Out",
            "Cute Charm",
            "Fighting Spirit"
        ],
        "innates": [
            "Vital Spirit",
            "Long Reach",
            "Iron Fist"
        ],
        "weightkg": 244,
        "types": [
            "Fighting"
        ],
        "genderR": 254
    },
    "Chansey Redux": {
        "id": 113,
        "bs": {
            "hp": 35,
            "at": 110,
            "df": 10,
            "sa": 110,
            "sd": 10,
            "sp": 175
        },
        "abilities": [
            "Emergency Exit",
            "Tactical Retreat",
            "Fighting Spirit"
        ],
        "innates": [
            "Vital Spirit",
            "Long Reach",
            "Iron Fist"
        ],
        "weightkg": 346,
        "types": [
            "Fighting"
        ],
        "genderR": 254
    },
    "Blissey Redux": {
        "id": 242,
        "bs": {
            "hp": 45,
            "at": 135,
            "df": 10,
            "sa": 95,
            "sd": 10,
            "sp": 255
        },
        "abilities": [
            "Emergency Exit",
            "Tactical Retreat",
            "Fighting Spirit"
        ],
        "innates": [
            "Vital Spirit",
            "Long Reach",
            "Iron Fist"
        ],
        "weightkg": 468,
        "types": [
            "Fighting"
        ],
        "genderR": 254
    },
    "Chatot": {
        "id": 441,
        "bs": {
            "hp": 76,
            "at": 65,
            "df": 45,
            "sa": 102,
            "sd": 42,
            "sp": 101
        },
        "abilities": [
            "Opportunist",
            "Prankster",
            "Cloud Nine"
        ],
        "innates": [
            "Adaptability",
            "Amplifier",
            "Parroting"
        ],
        "weightkg": 19,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127
    },
    "Spiritomb": {
        "id": 442,
        "bs": {
            "hp": 50,
            "at": 108,
            "df": 108,
            "sa": 108,
            "sd": 108,
            "sp": 35
        },
        "abilities": [
            "Hypnotist",
            "Twist. Dimension",
            "Soul Linker"
        ],
        "innates": [
            "Soul Eater",
            "Bad Dreams",
            "Shadow Shield"
        ],
        "weightkg": 1080,
        "types": [
            "Ghost",
            "Dark"
        ],
        "genderR": 127
    },
    "Spiritomb Redux": {
        "id": 442,
        "bs": {
            "hp": 98,
            "at": 126,
            "df": 76,
            "sa": 126,
            "sd": 76,
            "sp": 15
        },
        "abilities": [
            "Neutralizing Gas",
            "Cosmic Daze",
            "Forewarn"
        ],
        "innates": [
            "Menacing Situation",
            "Poison Puppeteer",
            "Clear Body"
        ],
        "weightkg": 1080,
        "types": [
            "Ghost",
            "Poison"
        ],
        "genderR": 127
    },
    "Gible": {
        "id": 443,
        "bs": {
            "hp": 58,
            "at": 70,
            "df": 45,
            "sa": 40,
            "sd": 45,
            "sp": 42
        },
        "abilities": [
            "Strong Jaw",
            "Earthbound",
            "Field Explorer"
        ],
        "innates": [
            "Hyper Aggressive",
            "Sand Veil",
            "Rough Skin"
        ],
        "weightkg": 205,
        "types": [
            "Dragon",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gible Redux"
        ],
        "nfe": true
    },
    "Gabite": {
        "id": 444,
        "bs": {
            "hp": 68,
            "at": 90,
            "df": 65,
            "sa": 50,
            "sd": 55,
            "sp": 82
        },
        "abilities": [
            "Opportunist",
            "Sand Force",
            "Tectonize"
        ],
        "innates": [
            "Hyper Aggressive",
            "Looter",
            "Rough Skin"
        ],
        "weightkg": 560,
        "types": [
            "Dragon",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gabite Redux"
        ],
        "nfe": true
    },
    "Garchomp": {
        "id": 445,
        "bs": {
            "hp": 108,
            "at": 130,
            "df": 95,
            "sa": 80,
            "sd": 85,
            "sp": 102
        },
        "abilities": [
            "Overwhelm",
            "Sand Veil",
            "Keen Edge"
        ],
        "innates": [
            "Hyper Aggressive",
            "Speed Force",
            "Rough Skin"
        ],
        "weightkg": 950,
        "types": [
            "Dragon",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Garchomp Mega Redux",
            "Garchomp Redux",
            "Garchomp Mega"
        ]
    },
    "Garchomp Mega": {
        "id": 445,
        "bs": {
            "hp": 108,
            "at": 160,
            "df": 120,
            "sa": 90,
            "sd": 120,
            "sp": 102
        },
        "abilities": [
            "Sand Veil",
            "Cutthroat",
            "Sweeping Edge"
        ],
        "innates": [
            "Hyper Aggressive",
            "Keen Edge",
            "Hyper Cutter"
        ],
        "weightkg": 950,
        "types": [
            "Dragon",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Garchomp"
        ]
    },
    "Gible Redux": {
        "id": 443,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 35,
            "sa": 30,
            "sd": 55,
            "sp": 50
        },
        "abilities": [
            "Predator",
            "Sea Guardian",
            "Fatal Precision"
        ],
        "innates": [
            "Hydration",
            "Keen Edge",
            "Hyper Aggressive"
        ],
        "weightkg": 205,
        "types": [
            "Water",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gible"
        ],
        "nfe": true
    },
    "Gabite Redux": {
        "id": 444,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 55,
            "sa": 40,
            "sd": 65,
            "sp": 90
        },
        "abilities": [
            "Predator",
            "Sea Guardian",
            "Fatal Precision"
        ],
        "innates": [
            "Hydration",
            "Keen Edge",
            "Hyper Aggressive"
        ],
        "weightkg": 560,
        "types": [
            "Water",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gabite"
        ],
        "nfe": true
    },
    "Garchomp Redux": {
        "id": 445,
        "bs": {
            "hp": 100,
            "at": 140,
            "df": 85,
            "sa": 70,
            "sd": 95,
            "sp": 110
        },
        "abilities": [
            "Predator",
            "Sea Guardian",
            "Fatal Precision"
        ],
        "innates": [
            "Hydration",
            "Keen Edge",
            "Hyper Aggressive"
        ],
        "weightkg": 950,
        "types": [
            "Water",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Garchomp"
        ]
    },
    "Garchomp Mega Redux": {
        "id": 445,
        "bs": {
            "hp": 100,
            "at": 150,
            "df": 105,
            "sa": 100,
            "sd": 105,
            "sp": 140
        },
        "abilities": [
            "Haunting Frenzy",
            "Haunting Frenzy",
            "Haunting Frenzy"
        ],
        "innates": [
            "Keen Edge",
            "Hyper Aggressive",
            "Soul Eater"
        ],
        "weightkg": 950,
        "types": [
            "Ghost",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Garchomp"
        ]
    },
    "Munchlax": {
        "id": 446,
        "bs": {
            "hp": 135,
            "at": 85,
            "df": 40,
            "sa": 40,
            "sd": 85,
            "sp": 5
        },
        "abilities": [
            "Comatose",
            "Oblivious",
            "Gluttony"
        ],
        "innates": [
            "Thick Fat",
            "Let's Roll",
            "Looter"
        ],
        "weightkg": 1050,
        "types": [
            "Normal"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Snorlax": {
        "id": 143,
        "bs": {
            "hp": 160,
            "at": 110,
            "df": 65,
            "sa": 65,
            "sd": 110,
            "sp": 30
        },
        "abilities": [
            "Let's Roll",
            "Oblivious",
            "Comatose"
        ],
        "innates": [
            "Self Sufficient",
            "Thick Fat",
            "Gluttony"
        ],
        "weightkg": 4600,
        "types": [
            "Normal"
        ],
        "genderR": 31
    },
    "Snorlax Mega": {
        "id": 143,
        "bs": {
            "hp": 160,
            "at": 130,
            "df": 65,
            "sa": 95,
            "sd": 160,
            "sp": 30
        },
        "abilities": [
            "Raw Wood",
            "Flourish",
            "Comatose"
        ],
        "innates": [
            "Self Repair",
            "Thick Fat",
            "Impenetrable"
        ],
        "weightkg": 4600,
        "types": [
            "Normal",
            "Grass"
        ],
        "genderR": 31
    },
    "Snorlax Primal": {
        "id": 143,
        "bs": {
            "hp": 160,
            "at": 130,
            "df": 120,
            "sa": 65,
            "sd": 135,
            "sp": 30
        },
        "abilities": [
            "Inversion",
            "Inversion",
            "Inversion"
        ],
        "innates": [
            "Self Repair",
            "Dream Whimsy",
            "Dream State"
        ],
        "weightkg": 4600,
        "types": [
            "Normal"
        ],
        "genderR": 31
    },
    "Riolu": {
        "id": 447,
        "bs": {
            "hp": 40,
            "at": 70,
            "df": 40,
            "sa": 35,
            "sd": 40,
            "sp": 60
        },
        "abilities": [
            "Prankster",
            "Quick Feet",
            "Fighting Spirit"
        ],
        "innates": [
            "Fighter",
            "Inner Focus",
            "Cute Charm"
        ],
        "weightkg": 202,
        "types": [
            "Fighting"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Lucario": {
        "id": 448,
        "bs": {
            "hp": 65,
            "at": 115,
            "df": 70,
            "sa": 115,
            "sd": 70,
            "sp": 90
        },
        "abilities": [
            "Fighting Spirit",
            "Competitive",
            "Magical Fists"
        ],
        "innates": [
            "Inner Focus",
            "Fatal Precision",
            "Vital Spirit"
        ],
        "weightkg": 540,
        "types": [
            "Fighting",
            "Steel"
        ],
        "genderR": 31,
        "otherFormes": [
            "Lucario Mega"
        ]
    },
    "Lucario Mega X": {
        "id": 448,
        "bs": {
            "hp": 65,
            "at": 145,
            "df": 83,
            "sa": 145,
            "sd": 70,
            "sp": 117
        },
        "abilities": [
            "Iron Fist",
            "Looter",
            "Magical Fists"
        ],
        "innates": [
            "Inner Focus",
            "Adaptability",
            "Fighting Spirit"
        ],
        "weightkg": 540,
        "types": [
            "Fighting",
            "Steel"
        ],
        "genderR": 31
    },
    "Lucario Mega Y": {
        "id": 448,
        "bs": {
            "hp": 65,
            "at": 142,
            "df": 65,
            "sa": 142,
            "sd": 91,
            "sp": 120
        },
        "abilities": [
            "Impenetrable",
            "Anticipation",
            "Equinox"
        ],
        "innates": [
            "Ultra Instinct",
            "Unlocked Potential",
            "Superconductor"
        ],
        "weightkg": 540,
        "types": [
            "Fighting",
            "Electric"
        ],
        "genderR": 31
    },
    "Hippopotas": {
        "id": 449,
        "bs": {
            "hp": 68,
            "at": 72,
            "df": 78,
            "sa": 38,
            "sd": 42,
            "sp": 32
        },
        "abilities": [
            "Sand Veil",
            "Rivalry",
            "Arena Trap"
        ],
        "innates": [
            "Sand Spit",
            "Sand Guard",
            "Oblivious"
        ],
        "weightkg": 495,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Hippowdon": {
        "id": 450,
        "bs": {
            "hp": 108,
            "at": 112,
            "df": 118,
            "sa": 68,
            "sd": 72,
            "sp": 47
        },
        "abilities": [
            "Sand Stream",
            "Growing Tooth",
            "Hyper Aggressive"
        ],
        "innates": [
            "Sand Guard",
            "Predator",
            "Strong Jaw"
        ],
        "weightkg": 3000,
        "types": [
            "Ground"
        ],
        "genderR": 127
    },
    "Skorupi": {
        "id": 451,
        "bs": {
            "hp": 40,
            "at": 60,
            "df": 95,
            "sa": 30,
            "sd": 55,
            "sp": 65
        },
        "abilities": [
            "Poison Touch",
            "Fatal Precision",
            "Looter"
        ],
        "innates": [
            "Grounded",
            "Shell Armor",
            "Grip Pincer"
        ],
        "weightkg": 120,
        "types": [
            "Poison",
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Drapion": {
        "id": 452,
        "bs": {
            "hp": 70,
            "at": 100,
            "df": 120,
            "sa": 60,
            "sd": 75,
            "sp": 95
        },
        "abilities": [
            "Nocturnal",
            "Grip Pincer",
            "Hyper Cutter"
        ],
        "innates": [
            "Sniper",
            "Shell Armor",
            "Pretentious"
        ],
        "weightkg": 615,
        "types": [
            "Poison",
            "Dark"
        ],
        "genderR": 127
    },
    "Croagunk": {
        "id": 453,
        "bs": {
            "hp": 48,
            "at": 67,
            "df": 40,
            "sa": 67,
            "sd": 40,
            "sp": 67
        },
        "abilities": [
            "Merciless",
            "Opportunist",
            "Poison Absorb"
        ],
        "innates": [
            "Dry Skin",
            "Amphibious",
            "Poison Touch"
        ],
        "weightkg": 230,
        "types": [
            "Poison",
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Toxicroak": {
        "id": 454,
        "bs": {
            "hp": 83,
            "at": 106,
            "df": 65,
            "sa": 106,
            "sd": 65,
            "sp": 105
        },
        "abilities": [
            "Technician",
            "Hyper Aggressive",
            "Opportunist"
        ],
        "innates": [
            "Dry Skin",
            "Poison Touch",
            "Merciless"
        ],
        "weightkg": 444,
        "types": [
            "Poison",
            "Fighting"
        ],
        "genderR": 127
    },
    "Carnivine": {
        "id": 455,
        "bs": {
            "hp": 90,
            "at": 100,
            "df": 92,
            "sa": 74,
            "sd": 92,
            "sp": 46
        },
        "abilities": [
            "Opportunist",
            "Stall",
            "Arena Trap"
        ],
        "innates": [
            "Levitate",
            "Strong Jaw",
            "Predator"
        ],
        "weightkg": 270,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Finneon": {
        "id": 456,
        "bs": {
            "hp": 49,
            "at": 49,
            "df": 56,
            "sa": 55,
            "sd": 61,
            "sp": 70
        },
        "abilities": [
            "Swift Swim",
            "Serene Grace",
            "Dazzling"
        ],
        "innates": [
            "Water Veil",
            "Storm Drain",
            "Illuminate"
        ],
        "weightkg": 70,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Lumineon": {
        "id": 457,
        "bs": {
            "hp": 69,
            "at": 69,
            "df": 76,
            "sa": 94,
            "sd": 86,
            "sp": 91
        },
        "abilities": [
            "Swift Swim",
            "Serene Grace",
            "Dazzling"
        ],
        "innates": [
            "Storm Drain",
            "Giant Wings",
            "Illuminate"
        ],
        "weightkg": 240,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Mantyke": {
        "id": 458,
        "bs": {
            "hp": 45,
            "at": 20,
            "df": 50,
            "sa": 60,
            "sd": 120,
            "sp": 50
        },
        "abilities": [
            "Swift Swim",
            "Rain Dish",
            "Flock"
        ],
        "innates": [
            "Water Veil",
            "Water Absorb",
            "Hydration"
        ],
        "weightkg": 650,
        "types": [
            "Water",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Snover": {
        "id": 459,
        "bs": {
            "hp": 60,
            "at": 72,
            "df": 50,
            "sa": 72,
            "sd": 60,
            "sp": 40
        },
        "abilities": [
            "Ice Body",
            "Whiteout",
            "Snow Cloak"
        ],
        "innates": [
            "Mountaineer",
            "Permafrost",
            "Snow Warning"
        ],
        "weightkg": 505,
        "types": [
            "Grass",
            "Ice"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Abomasnow": {
        "id": 460,
        "bs": {
            "hp": 90,
            "at": 102,
            "df": 75,
            "sa": 102,
            "sd": 85,
            "sp": 60
        },
        "abilities": [
            "Snow Warning",
            "North Wind",
            "Mountaineer"
        ],
        "innates": [
            "Ice Body",
            "Cryomancy",
            "Permafrost"
        ],
        "weightkg": 1355,
        "types": [
            "Grass",
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Abomasnow Mega"
        ]
    },
    "Abomasnow Mega": {
        "id": 460,
        "bs": {
            "hp": 90,
            "at": 142,
            "df": 105,
            "sa": 142,
            "sd": 105,
            "sp": 30
        },
        "abilities": [
            "North Wind",
            "Chloroplast",
            "Ice Body"
        ],
        "innates": [
            "Snow Warning",
            "Whiteout",
            "Permafrost"
        ],
        "weightkg": 1355,
        "types": [
            "Grass",
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Abomasnow"
        ]
    },
    "Lickilicky": {
        "id": 463,
        "bs": {
            "hp": 150,
            "at": 95,
            "df": 75,
            "sa": 95,
            "sd": 70,
            "sp": 50
        },
        "abilities": [
            "Unaware",
            "Wonder Skin",
            "Simple"
        ],
        "innates": [
            "Regenerator",
            "Thick Fat",
            "Cloud Nine"
        ],
        "weightkg": 1400,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Rhyperior": {
        "id": 464,
        "bs": {
            "hp": 115,
            "at": 140,
            "df": 130,
            "sa": 55,
            "sd": 55,
            "sp": 40
        },
        "abilities": [
            "Lightning Rod",
            "Weak Armor",
            "Rampage"
        ],
        "innates": [
            "Solid Rock",
            "Stamina",
            "Mega Launcher"
        ],
        "weightkg": 2828,
        "types": [
            "Ground",
            "Rock"
        ],
        "genderR": 127
    },
    "Tangrowth": {
        "id": 465,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 125,
            "sa": 110,
            "sd": 50,
            "sp": 50
        },
        "abilities": [
            "Tangling Hair",
            "Battle Armor",
            "Long Reach"
        ],
        "innates": [
            "Regenerator",
            "Seaweed",
            "Self Sufficient"
        ],
        "weightkg": 1286,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Electivire": {
        "id": 466,
        "bs": {
            "hp": 95,
            "at": 123,
            "df": 87,
            "sa": 69,
            "sd": 65,
            "sp": 101
        },
        "abilities": [
            "Whiplash",
            "Transistor",
            "Motor Drive"
        ],
        "innates": [
            "Arc Flash",
            "Thundercall",
            "Overcoat"
        ],
        "weightkg": 1386,
        "types": [
            "Electric",
            "Fighting"
        ],
        "genderR": 63
    },
    "Magmortar": {
        "id": 467,
        "bs": {
            "hp": 75,
            "at": 95,
            "df": 67,
            "sa": 125,
            "sd": 85,
            "sp": 93
        },
        "abilities": [
            "Nocturnal",
            "Flaming Soul",
            "Pyro Shells"
        ],
        "innates": [
            "Molten Down",
            "Dual Wield",
            "Flash Fire"
        ],
        "weightkg": 680,
        "types": [
            "Fire",
            "Poison"
        ],
        "genderR": 63
    },
    "Togekiss": {
        "id": 468,
        "bs": {
            "hp": 85,
            "at": 50,
            "df": 95,
            "sa": 120,
            "sd": 115,
            "sp": 80
        },
        "abilities": [
            "Pixilate",
            "Self Sufficient",
            "Soul-Heart"
        ],
        "innates": [
            "Super Luck",
            "Serene Grace",
            "Giant Wings"
        ],
        "weightkg": 380,
        "types": [
            "Fairy",
            "Flying"
        ],
        "genderR": 31
    },
    "Yanmega": {
        "id": 469,
        "bs": {
            "hp": 86,
            "at": 76,
            "df": 86,
            "sa": 126,
            "sd": 56,
            "sp": 95
        },
        "abilities": [
            "Giant Wings",
            "Compound Eyes",
            "Tinted Lens"
        ],
        "innates": [
            "Speed Boost",
            "Hyper Aggressive",
            "Predator"
        ],
        "weightkg": 515,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127
    },
    "Leafeon": {
        "id": 470,
        "bs": {
            "hp": 65,
            "at": 110,
            "df": 130,
            "sa": 60,
            "sd": 65,
            "sp": 95
        },
        "abilities": [
            "Grass Pelt",
            "Sweeping Edge",
            "Grassy Surge"
        ],
        "innates": [
            "Keen Edge",
            "Big Leaves",
            "Avenger"
        ],
        "weightkg": 255,
        "types": [
            "Grass"
        ],
        "genderR": 31
    },
    "Glaceon": {
        "id": 471,
        "bs": {
            "hp": 65,
            "at": 60,
            "df": 110,
            "sa": 130,
            "sd": 95,
            "sp": 65
        },
        "abilities": [
            "Ice Scales",
            "Whiteout",
            "Frozen Soul"
        ],
        "innates": [
            "Ice Body",
            "Cryomancy",
            "Slush Rush"
        ],
        "weightkg": 259,
        "types": [
            "Ice"
        ],
        "genderR": 31
    },
    "Mamoswine": {
        "id": 473,
        "bs": {
            "hp": 110,
            "at": 130,
            "df": 80,
            "sa": 70,
            "sd": 60,
            "sp": 80
        },
        "abilities": [
            "Permafrost",
            "Sheer Force",
            "Whiteout"
        ],
        "innates": [
            "Thick Fat",
            "Slush Rush",
            "Growing Tooth"
        ],
        "weightkg": 2910,
        "types": [
            "Ice",
            "Ground"
        ],
        "genderR": 127
    },
    "Porygon-Z": {
        "id": 474,
        "bs": {
            "hp": 85,
            "at": 80,
            "df": 70,
            "sa": 135,
            "sd": 75,
            "sp": 90
        },
        "abilities": [
            "Download",
            "Inversion",
            "Twist. Dimension"
        ],
        "innates": [
            "Levitate",
            "Adaptability",
            "Deadeye"
        ],
        "weightkg": 340,
        "types": [
            "Normal",
            "Electric"
        ],
        "genderR": 2
    },
    "Probopass": {
        "id": 476,
        "bs": {
            "hp": 60,
            "at": 55,
            "df": 145,
            "sa": 95,
            "sd": 150,
            "sp": 40
        },
        "abilities": [
            "Impenetrable",
            "Magnet Pull",
            "Lead Coat"
        ],
        "innates": [
            "Multi Headed",
            "Levitate",
            "Solid Rock"
        ],
        "weightkg": 3400,
        "types": [
            "Rock",
            "Steel"
        ],
        "genderR": 127
    },
    "Dusknoir": {
        "id": 477,
        "bs": {
            "hp": 45,
            "at": 120,
            "df": 135,
            "sa": 60,
            "sd": 135,
            "sp": 45
        },
        "abilities": [
            "Twist. Dimension",
            "Iron Fist",
            "Low Visibility"
        ],
        "innates": [
            "Opportunist",
            "Shadow Shield",
            "Soul Eater"
        ],
        "weightkg": 1066,
        "types": [
            "Ghost"
        ],
        "genderR": 127
    },
    "Rotom": {
        "id": 479,
        "bs": {
            "hp": 50,
            "at": 50,
            "df": 77,
            "sa": 105,
            "sd": 77,
            "sp": 126
        },
        "abilities": [
            "Suppress",
            "Frisk",
            "Trickster"
        ],
        "innates": [
            "Levitate",
            "Rapid Response",
            "Motor Drive"
        ],
        "weightkg": 3,
        "types": [
            "Electric",
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Rotom Heat",
            "Rotom Wash",
            "Rotom Frost",
            "Rotom Fan",
            "Rotom Mow"
        ],
        "nfe": true
    },
    "Rotom Heat": {
        "id": 479,
        "bs": {
            "hp": 50,
            "at": 65,
            "df": 107,
            "sa": 115,
            "sd": 107,
            "sp": 86
        },
        "abilities": [
            "Flash Fire",
            "Pyromancy",
            "Motor Drive"
        ],
        "innates": [
            "Levitate",
            "Furnace",
            "Phantom"
        ],
        "weightkg": 3,
        "types": [
            "Electric",
            "Fire"
        ],
        "genderR": 2,
        "otherFormes": [
            "Rotom"
        ]
    },
    "Rotom Wash": {
        "id": 479,
        "bs": {
            "hp": 50,
            "at": 65,
            "df": 107,
            "sa": 115,
            "sd": 107,
            "sp": 86
        },
        "abilities": [
            "Water Absorb",
            "Screen Cleaner",
            "Motor Drive"
        ],
        "innates": [
            "Levitate",
            "Damp",
            "Phantom"
        ],
        "weightkg": 3,
        "types": [
            "Electric",
            "Water"
        ],
        "genderR": 2,
        "otherFormes": [
            "Rotom"
        ]
    },
    "Rotom Frost": {
        "id": 479,
        "bs": {
            "hp": 50,
            "at": 65,
            "df": 107,
            "sa": 115,
            "sd": 107,
            "sp": 86
        },
        "abilities": [
            "Ice Dew",
            "Cryomancy",
            "Motor Drive"
        ],
        "innates": [
            "Levitate",
            "Refrigerator",
            "Phantom"
        ],
        "weightkg": 3,
        "types": [
            "Electric",
            "Ice"
        ],
        "genderR": 2,
        "otherFormes": [
            "Rotom"
        ]
    },
    "Rotom Fan": {
        "id": 479,
        "bs": {
            "hp": 50,
            "at": 65,
            "df": 107,
            "sa": 115,
            "sd": 107,
            "sp": 86
        },
        "abilities": [
            "Volt Absorb",
            "Aerodynamics",
            "Motor Drive"
        ],
        "innates": [
            "Air Blower",
            "Wind Rider",
            "Phantom"
        ],
        "weightkg": 3,
        "types": [
            "Electric",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Rotom"
        ]
    },
    "Rotom Mow": {
        "id": 479,
        "bs": {
            "hp": 50,
            "at": 65,
            "df": 107,
            "sa": 115,
            "sd": 107,
            "sp": 86
        },
        "abilities": [
            "Sap Sipper",
            "Lawnmower",
            "Motor Drive"
        ],
        "innates": [
            "Levitate",
            "Hyper Cutter",
            "Phantom"
        ],
        "weightkg": 3,
        "types": [
            "Electric",
            "Grass"
        ],
        "genderR": 2,
        "otherFormes": [
            "Rotom"
        ]
    },
    "Uxie": {
        "id": 480,
        "bs": {
            "hp": 75,
            "at": 75,
            "df": 130,
            "sa": 75,
            "sd": 130,
            "sp": 95
        },
        "abilities": [
            "Enlightened",
            "Soul Linker",
            "Trickster"
        ],
        "innates": [
            "Levitate",
            "Magic Guard",
            "North Wind"
        ],
        "weightkg": 3,
        "types": [
            "Fairy",
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Uxie Redux"
        ]
    },
    "Uxie Redux": {
        "id": 480,
        "bs": {
            "hp": 80,
            "at": 80,
            "df": 130,
            "sa": 80,
            "sd": 130,
            "sp": 80
        },
        "abilities": [
            "Unaware",
            "Magic Guard",
            "Soul Eater"
        ],
        "innates": [
            "Levitate",
            "Dark Aura",
            "Malicious"
        ],
        "weightkg": 3,
        "types": [
            "Dark",
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Uxie"
        ]
    },
    "Mesprit": {
        "id": 481,
        "bs": {
            "hp": 80,
            "at": 105,
            "df": 105,
            "sa": 105,
            "sd": 105,
            "sp": 80
        },
        "abilities": [
            "Moody",
            "Subdue",
            "Friend Guard"
        ],
        "innates": [
            "Levitate",
            "Magic Guard",
            "Pressure"
        ],
        "weightkg": 3,
        "types": [
            "Fairy",
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Mesprit Redux"
        ]
    },
    "Mesprit Redux": {
        "id": 481,
        "bs": {
            "hp": 75,
            "at": 110,
            "df": 100,
            "sa": 110,
            "sd": 100,
            "sp": 85
        },
        "abilities": [
            "Tinted Lens",
            "Magic Guard",
            "Soul Eater"
        ],
        "innates": [
            "Levitate",
            "Dark Aura",
            "Malicious"
        ],
        "weightkg": 3,
        "types": [
            "Dark",
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Mesprit"
        ]
    },
    "Azelf": {
        "id": 482,
        "bs": {
            "hp": 75,
            "at": 125,
            "df": 70,
            "sa": 125,
            "sd": 70,
            "sp": 115
        },
        "abilities": [
            "Determination",
            "Guts",
            "Mold Breaker"
        ],
        "innates": [
            "Levitate",
            "Magic Guard",
            "Mystic Power"
        ],
        "weightkg": 3,
        "types": [
            "Fairy",
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Azelf Redux"
        ]
    },
    "Azelf Redux": {
        "id": 482,
        "bs": {
            "hp": 70,
            "at": 130,
            "df": 65,
            "sa": 130,
            "sd": 65,
            "sp": 120
        },
        "abilities": [
            "Comatose",
            "Magic Guard",
            "Soul Eater"
        ],
        "innates": [
            "Levitate",
            "Dark Aura",
            "Malicious"
        ],
        "weightkg": 3,
        "types": [
            "Dark",
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Azelf"
        ]
    },
    "Dialga": {
        "id": 483,
        "bs": {
            "hp": 100,
            "at": 120,
            "df": 120,
            "sa": 150,
            "sd": 100,
            "sp": 90
        },
        "abilities": [
            "Bulletproof",
            "Stamina",
            "Lead Coat"
        ],
        "innates": [
            "Primal Armor",
            "Impenetrable",
            "Power Core"
        ],
        "weightkg": 6830,
        "types": [
            "Steel",
            "Dragon"
        ],
        "genderR": 2,
        "otherFormes": [
            "Dialga Origin"
        ],
        "nfe": true
    },
    "Dialga Origin": {
        "id": 483,
        "bs": {
            "hp": 100,
            "at": 120,
            "df": 140,
            "sa": 170,
            "sd": 140,
            "sp": 110
        },
        "abilities": [
            "Doombringer",
            "Mega Launcher",
            "Lead Coat"
        ],
        "innates": [
            "Primal Armor",
            "Impenetrable",
            "Power Core"
        ],
        "weightkg": 6830,
        "types": [
            "Dragon",
            "Steel"
        ],
        "genderR": 2,
        "otherFormes": [
            "Dialga"
        ]
    },
    "Palkia": {
        "id": 484,
        "bs": {
            "hp": 90,
            "at": 120,
            "df": 100,
            "sa": 150,
            "sd": 100,
            "sp": 120
        },
        "abilities": [
            "Heaven Asunder",
            "Gravity Well",
            "Sea Guardian"
        ],
        "innates": [
            "Primal Armor",
            "Overwhelm",
            "Power Core"
        ],
        "weightkg": 3360,
        "types": [
            "Water",
            "Dragon"
        ],
        "genderR": 2,
        "otherFormes": [
            "Palkia Origin"
        ],
        "nfe": true
    },
    "Palkia Origin": {
        "id": 484,
        "bs": {
            "hp": 90,
            "at": 120,
            "df": 120,
            "sa": 170,
            "sd": 140,
            "sp": 140
        },
        "abilities": [
            "Heaven Asunder",
            "Swift Swim",
            "Drizzle"
        ],
        "innates": [
            "Prism Scales",
            "Sea Guardian",
            "Power Core"
        ],
        "weightkg": 3360,
        "types": [
            "Dragon",
            "Water"
        ],
        "genderR": 2,
        "otherFormes": [
            "Palkia"
        ]
    },
    "Heatran": {
        "id": 485,
        "bs": {
            "hp": 91,
            "at": 90,
            "df": 106,
            "sa": 130,
            "sd": 106,
            "sp": 77
        },
        "abilities": [
            "Steelworker",
            "Turboblaze",
            "Drought"
        ],
        "innates": [
            "Magma Armor",
            "Mountaineer",
            "Flash Fire"
        ],
        "weightkg": 4300,
        "types": [
            "Fire",
            "Steel"
        ],
        "genderR": 127
    },
    "Regigigas": {
        "id": 486,
        "bs": {
            "hp": 140,
            "at": 160,
            "df": 120,
            "sa": 70,
            "sd": 120,
            "sp": 60
        },
        "abilities": [
            "Adaptability",
            "Stall",
            "Raging Boxer"
        ],
        "innates": [
            "Power Core",
            "Impenetrable",
            "Juggernaut"
        ],
        "weightkg": 4200,
        "types": [
            "Normal"
        ],
        "genderR": 2
    },
    "Giratina": {
        "id": 487,
        "bs": {
            "hp": 150,
            "at": 100,
            "df": 120,
            "sa": 100,
            "sd": 120,
            "sp": 90
        },
        "abilities": [
            "Fearmonger",
            "Low Visibility",
            "Twist. Dimension"
        ],
        "innates": [
            "Shadow Shield",
            "Shadow Tag",
            "Soul Eater"
        ],
        "weightkg": 7500,
        "types": [
            "Ghost",
            "Dragon"
        ],
        "genderR": 2,
        "otherFormes": [
            "Giratina Origin"
        ],
        "nfe": true
    },
    "Giratina Origin": {
        "id": 487,
        "bs": {
            "hp": 150,
            "at": 140,
            "df": 120,
            "sa": 140,
            "sd": 120,
            "sp": 110
        },
        "abilities": [
            "Fearmonger",
            "Low Visibility",
            "Ethereal Rush"
        ],
        "innates": [
            "Shadow Shield",
            "Shadow Tag",
            "Soul Eater"
        ],
        "weightkg": 7500,
        "types": [
            "Ghost",
            "Dragon"
        ],
        "genderR": 2,
        "otherFormes": [
            "Giratina"
        ]
    },
    "Cresselia": {
        "id": 488,
        "bs": {
            "hp": 120,
            "at": 70,
            "df": 120,
            "sa": 75,
            "sd": 130,
            "sp": 85
        },
        "abilities": [
            "Mystic Power",
            "Comatose",
            "Magic Bounce"
        ],
        "innates": [
            "Levitate",
            "Moon Spirit",
            "Self Sufficient"
        ],
        "weightkg": 856,
        "types": [
            "Psychic"
        ],
        "genderR": 254
    },
    "Phione": {
        "id": 489,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Sea Guardian",
            "Friend Guard",
            "Soul-Heart"
        ],
        "innates": [
            "Purifying Waters",
            "Field Explorer",
            "High Tide"
        ],
        "weightkg": 31,
        "types": [
            "Water"
        ],
        "genderR": 2
    },
    "Manaphy": {
        "id": 490,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 100,
            "sa": 100,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Seaborne",
            "Power Spot",
            "Healer"
        ],
        "innates": [
            "Change of Heart",
            "Parental Bond",
            "High Tide"
        ],
        "weightkg": 14,
        "types": [
            "Water"
        ],
        "genderR": 2
    },
    "Darkrai": {
        "id": 491,
        "bs": {
            "hp": 70,
            "at": 90,
            "df": 90,
            "sa": 135,
            "sd": 90,
            "sp": 125
        },
        "abilities": [
            "Soul Eater",
            "Frisk",
            "Dark Aura"
        ],
        "innates": [
            "Levitate",
            "Bad Dreams",
            "Dreamcatcher"
        ],
        "weightkg": 505,
        "types": [
            "Dark",
            "Ghost"
        ],
        "genderR": 2
    },
    "Darkrai Nightmare": {
        "id": 491,
        "bs": {
            "hp": 70,
            "at": 110,
            "df": 95,
            "sa": 170,
            "sd": 95,
            "sp": 160
        },
        "abilities": [
            "Bad Dreams",
            "Bad Dreams",
            "Bad Dreams"
        ],
        "innates": [
            "Shadow Tag",
            "Fearmonger",
            "Dark Aura"
        ],
        "weightkg": 505,
        "types": [
            "Dark",
            "Ghost"
        ],
        "genderR": 127
    },
    "Shaymin": {
        "id": 492,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 100,
            "sa": 100,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Magic Bounce",
            "Harvest",
            "Flourish"
        ],
        "innates": [
            "Natural Recovery",
            "Poison Absorb",
            "Grassy Surge"
        ],
        "weightkg": 21,
        "types": [
            "Grass"
        ],
        "genderR": 2,
        "otherFormes": [
            "Shaymin Sky"
        ],
        "nfe": true
    },
    "Shaymin Sky": {
        "id": 492,
        "bs": {
            "hp": 100,
            "at": 103,
            "df": 75,
            "sa": 120,
            "sd": 75,
            "sp": 127
        },
        "abilities": [
            "Magic Bounce",
            "Aerodynamics",
            "Fertilize"
        ],
        "innates": [
            "Natural Cure",
            "Serene Grace",
            "Speed Boost"
        ],
        "weightkg": 21,
        "types": [
            "Grass",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Shaymin"
        ]
    },
    "Arceus": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Mystic Power"
        ],
        "weightkg": 3200,
        "types": [
            "Normal"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus Fighting",
            "Arceus Flying",
            "Arceus Poison",
            "Arceus Ground",
            "Arceus Rock",
            "Arceus Bug",
            "Arceus Ghost",
            "Arceus Steel",
            "Arceus Fire",
            "Arceus Water",
            "Arceus Grass",
            "Arceus Electric",
            "Arceus Psychic",
            "Arceus Ice",
            "Arceus Dragon",
            "Arceus Dark",
            "Arceus Fairy"
        ]
    },
    "Arceus Fighting": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Fighting"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Flying": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Poison": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Poison"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Ground": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Ground"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Rock": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Rock"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Bug": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Bug"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Ghost": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Steel": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Steel"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Fire": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Fire"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Water": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Water"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Grass": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Grass"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Electric": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Electric"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Psychic": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Ice": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Ice"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Dragon": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Dragon"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Dark": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Dark"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Arceus Fairy": {
        "id": 493,
        "bs": {
            "hp": 120,
            "at": 120,
            "df": 120,
            "sa": 120,
            "sd": 120,
            "sp": 120
        },
        "abilities": [
            "Multitype",
            "Multitype",
            "Multitype"
        ],
        "innates": [
            "Power Core",
            "Pressure",
            "Levitate"
        ],
        "weightkg": 3200,
        "types": [
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Arceus"
        ]
    },
    "Victini": {
        "id": 494,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 100,
            "sa": 100,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Turboblaze",
            "Solar Flare",
            "Power Spot"
        ],
        "innates": [
            "Victory Star",
            "Magic Guard",
            "Psychic Mind"
        ],
        "weightkg": 40,
        "types": [
            "Psychic",
            "Fire"
        ],
        "genderR": 2
    },
    "Victini Primal": {
        "id": 494,
        "bs": {
            "hp": 100,
            "at": 140,
            "df": 100,
            "sa": 120,
            "sd": 100,
            "sp": 140
        },
        "abilities": [
            "Lucky Halo",
            "Lucky Halo",
            "Lucky Halo"
        ],
        "innates": [
            "Victory Star",
            "Victory Bomb",
            "Turboblaze"
        ],
        "weightkg": 40,
        "types": [
            "Psychic",
            "Fire"
        ],
        "genderR": 2
    },
    "Snivy": {
        "id": 495,
        "bs": {
            "hp": 47,
            "at": 45,
            "df": 60,
            "sa": 45,
            "sd": 60,
            "sp": 63
        },
        "abilities": [
            "Chloroplast",
            "Chlorophyll",
            "Contrary"
        ],
        "innates": [
            "Overgrow",
            "Shed Skin",
            "Opportunist"
        ],
        "weightkg": 81,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Servine": {
        "id": 496,
        "bs": {
            "hp": 67,
            "at": 60,
            "df": 75,
            "sa": 60,
            "sd": 75,
            "sp": 83
        },
        "abilities": [
            "Chloroplast",
            "Chlorophyll",
            "Contrary"
        ],
        "innates": [
            "Overgrow",
            "Shed Skin",
            "Opportunist"
        ],
        "weightkg": 160,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Serperior": {
        "id": 497,
        "bs": {
            "hp": 83,
            "at": 74,
            "df": 95,
            "sa": 75,
            "sd": 95,
            "sp": 113
        },
        "abilities": [
            "Intimidate",
            "Multiscale",
            "Contrary"
        ],
        "innates": [
            "Overgrow",
            "Shed Skin",
            "Chloroplast"
        ],
        "weightkg": 630,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127
    },
    "Serperior Mega": {
        "id": 497,
        "bs": {
            "hp": 83,
            "at": 87,
            "df": 125,
            "sa": 90,
            "sd": 125,
            "sp": 125
        },
        "abilities": [
            "Terrify",
            "Multiscale",
            "Contrary"
        ],
        "innates": [
            "Forest Rage",
            "Shed Skin",
            "Supreme Overlord"
        ],
        "weightkg": 630,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127
    },
    "Tepig": {
        "id": 498,
        "bs": {
            "hp": 71,
            "at": 69,
            "df": 45,
            "sa": 45,
            "sd": 45,
            "sp": 45
        },
        "abilities": [
            "Let's Roll",
            "Unaware",
            "Flame Body"
        ],
        "innates": [
            "Blaze",
            "Thick Fat",
            "Gluttony"
        ],
        "weightkg": 99,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Pignite": {
        "id": 499,
        "bs": {
            "hp": 92,
            "at": 93,
            "df": 55,
            "sa": 70,
            "sd": 55,
            "sp": 55
        },
        "abilities": [
            "Let's Roll",
            "Unburden",
            "Flame Body"
        ],
        "innates": [
            "Blaze",
            "Thick Fat",
            "Gluttony"
        ],
        "weightkg": 555,
        "types": [
            "Fire",
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Emboar": {
        "id": 500,
        "bs": {
            "hp": 110,
            "at": 123,
            "df": 87,
            "sa": 70,
            "sd": 80,
            "sp": 65
        },
        "abilities": [
            "Gluttony",
            "Avenger",
            "Violent Rush"
        ],
        "innates": [
            "Blaze",
            "Reckless",
            "Limber"
        ],
        "weightkg": 1500,
        "types": [
            "Fire",
            "Fighting"
        ],
        "genderR": 127
    },
    "Emboar Mega": {
        "id": 500,
        "bs": {
            "hp": 110,
            "at": 148,
            "df": 137,
            "sa": 70,
            "sd": 90,
            "sp": 80
        },
        "abilities": [
            "Flame Shield",
            "Avenger",
            "Sun Basking"
        ],
        "innates": [
            "Hellblaze",
            "Brute Force",
            "Violent Rush"
        ],
        "weightkg": 1500,
        "types": [
            "Fire",
            "Fighting"
        ],
        "genderR": 127
    },
    "Oshawott": {
        "id": 501,
        "bs": {
            "hp": 59,
            "at": 63,
            "df": 45,
            "sa": 63,
            "sd": 45,
            "sp": 45
        },
        "abilities": [
            "Swift Swim",
            "Violent Rush",
            "Fatal Precision"
        ],
        "innates": [
            "Torrent",
            "Shell Armor",
            "Keen Edge"
        ],
        "weightkg": 59,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dewott": {
        "id": 502,
        "bs": {
            "hp": 75,
            "at": 82,
            "df": 60,
            "sa": 83,
            "sd": 60,
            "sp": 60
        },
        "abilities": [
            "Swift Swim",
            "Violent Rush",
            "Fatal Precision"
        ],
        "innates": [
            "Torrent",
            "Shell Armor",
            "Keen Edge"
        ],
        "weightkg": 245,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Samurott": {
        "id": 503,
        "bs": {
            "hp": 95,
            "at": 108,
            "df": 85,
            "sa": 107,
            "sd": 70,
            "sp": 70
        },
        "abilities": [
            "Mystic Blades",
            "Swift Swim",
            "Keen Edge"
        ],
        "innates": [
            "Torrent",
            "Shell Armor",
            "Violent Rush"
        ],
        "weightkg": 946,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Samurott Hisuian"
        ]
    },
    "Samurott Hisuian": {
        "id": 503,
        "bs": {
            "hp": 90,
            "at": 110,
            "df": 80,
            "sa": 100,
            "sd": 65,
            "sp": 90
        },
        "abilities": [
            "Exploit Weakness",
            "Violent Rush",
            "Merciless"
        ],
        "innates": [
            "Torrent",
            "Battle Armor",
            "Keen Edge"
        ],
        "weightkg": 946,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Samurott"
        ]
    },
    "Samurott Mega": {
        "id": 503,
        "bs": {
            "hp": 95,
            "at": 120,
            "df": 100,
            "sa": 120,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Mystic Blades",
            "Swift Swim",
            "Cutthroat"
        ],
        "innates": [
            "Riptide",
            "Dual Wield",
            "Adrenaline Rush"
        ],
        "weightkg": 946,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 127
    },
    "Patrat": {
        "id": 504,
        "bs": {
            "hp": 45,
            "at": 65,
            "df": 39,
            "sa": 35,
            "sd": 39,
            "sp": 72
        },
        "abilities": [
            "Run Away",
            "Stakeout",
            "Coward"
        ],
        "innates": [
            "Analytic",
            "Keen Eye",
            "Anticipation"
        ],
        "weightkg": 116,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Watchog": {
        "id": 505,
        "bs": {
            "hp": 75,
            "at": 95,
            "df": 79,
            "sa": 60,
            "sd": 79,
            "sp": 107
        },
        "abilities": [
            "Stakeout",
            "On the Prowl",
            "Hypnotist"
        ],
        "innates": [
            "Analytic",
            "Tinted Lens",
            "Field Explorer"
        ],
        "weightkg": 270,
        "types": [
            "Normal",
            "Ground"
        ],
        "genderR": 127
    },
    "Lillipup": {
        "id": 506,
        "bs": {
            "hp": 45,
            "at": 70,
            "df": 45,
            "sa": 25,
            "sd": 45,
            "sp": 65
        },
        "abilities": [
            "Vital Spirit",
            "Pickup",
            "Run Away"
        ],
        "innates": [
            "Fluffy",
            "Overcoat",
            "Guard Dog"
        ],
        "weightkg": 41,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Herdier": {
        "id": 507,
        "bs": {
            "hp": 65,
            "at": 90,
            "df": 65,
            "sa": 35,
            "sd": 65,
            "sp": 70
        },
        "abilities": [
            "Intimidate",
            "Sand Rush",
            "Scrappy"
        ],
        "innates": [
            "Overcoat",
            "Fur Coat",
            "Filter"
        ],
        "weightkg": 147,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Stoutland": {
        "id": 508,
        "bs": {
            "hp": 85,
            "at": 120,
            "df": 80,
            "sa": 45,
            "sd": 90,
            "sp": 90
        },
        "abilities": [
            "Intimidate",
            "Sand Rush",
            "Scrappy"
        ],
        "innates": [
            "Overcoat",
            "Fur Coat",
            "Filter"
        ],
        "weightkg": 610,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Purrloin": {
        "id": 509,
        "bs": {
            "hp": 41,
            "at": 75,
            "df": 37,
            "sa": 50,
            "sd": 37,
            "sp": 71
        },
        "abilities": [
            "Unburden",
            "Sniper",
            "Moody"
        ],
        "innates": [
            "Prankster",
            "Limber",
            "Ambush"
        ],
        "weightkg": 101,
        "types": [
            "Dark"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Liepard": {
        "id": 510,
        "bs": {
            "hp": 64,
            "at": 118,
            "df": 50,
            "sa": 78,
            "sd": 50,
            "sp": 106
        },
        "abilities": [
            "On the Prowl",
            "Accelerate",
            "Prankster"
        ],
        "innates": [
            "Super Luck",
            "Sniper",
            "Opportunist"
        ],
        "weightkg": 375,
        "types": [
            "Dark"
        ],
        "genderR": 127
    },
    "Pansage": {
        "id": 511,
        "bs": {
            "hp": 50,
            "at": 57,
            "df": 48,
            "sa": 57,
            "sd": 48,
            "sp": 62
        },
        "abilities": [
            "Hustle",
            "Jungle's Guard",
            "Unburden"
        ],
        "innates": [
            "Overgrow",
            "Sap Sipper",
            "Chloroplast"
        ],
        "weightkg": 105,
        "types": [
            "Grass"
        ],
        "genderR": 31,
        "otherFormes": [
            "Pansage Redux"
        ],
        "nfe": true
    },
    "Simisage": {
        "id": 512,
        "bs": {
            "hp": 75,
            "at": 105,
            "df": 65,
            "sa": 105,
            "sd": 65,
            "sp": 105
        },
        "abilities": [
            "Hustle",
            "Jungle's Guard",
            "Unburden"
        ],
        "innates": [
            "Overgrow",
            "Sap Sipper",
            "Chloroplast"
        ],
        "weightkg": 305,
        "types": [
            "Grass"
        ],
        "genderR": 31,
        "otherFormes": [
            "Simisage Redux"
        ]
    },
    "Pansage Redux": {
        "id": 511,
        "bs": {
            "hp": 44,
            "at": 63,
            "df": 43,
            "sa": 63,
            "sd": 43,
            "sp": 66
        },
        "abilities": [
            "Competitive",
            "Hustle",
            "Defiant"
        ],
        "innates": [
            "Fighter",
            "Inner Focus",
            "Parry"
        ],
        "weightkg": 105,
        "types": [
            "Fighting"
        ],
        "genderR": 31,
        "otherFormes": [
            "Pansage"
        ],
        "nfe": true
    },
    "Simisage Redux": {
        "id": 512,
        "bs": {
            "hp": 75,
            "at": 99,
            "df": 63,
            "sa": 110,
            "sd": 63,
            "sp": 110
        },
        "abilities": [
            "Competitive",
            "Hustle",
            "Sturdy"
        ],
        "innates": [
            "Fighter",
            "Inner Focus",
            "Parry"
        ],
        "weightkg": 305,
        "types": [
            "Fighting"
        ],
        "genderR": 31,
        "otherFormes": [
            "Simisage"
        ]
    },
    "Pansear": {
        "id": 513,
        "bs": {
            "hp": 50,
            "at": 74,
            "df": 48,
            "sa": 43,
            "sd": 43,
            "sp": 64
        },
        "abilities": [
            "Gluttony",
            "Monkey Business",
            "Pyromancy"
        ],
        "innates": [
            "Blaze",
            "Prankster",
            "Flash Fire"
        ],
        "weightkg": 110,
        "types": [
            "Fire"
        ],
        "genderR": 31,
        "otherFormes": [
            "Pansear Redux"
        ],
        "nfe": true
    },
    "Simisear": {
        "id": 514,
        "bs": {
            "hp": 75,
            "at": 113,
            "df": 81,
            "sa": 80,
            "sd": 70,
            "sp": 101
        },
        "abilities": [
            "Gluttony",
            "Monkey Business",
            "Pyromancy"
        ],
        "innates": [
            "Blaze",
            "Prankster",
            "Flash Fire"
        ],
        "weightkg": 280,
        "types": [
            "Fire"
        ],
        "genderR": 31,
        "otherFormes": [
            "Simisear Redux"
        ]
    },
    "Pansear Redux": {
        "id": 513,
        "bs": {
            "hp": 50,
            "at": 61,
            "df": 48,
            "sa": 43,
            "sd": 55,
            "sp": 65
        },
        "abilities": [
            "Prankster",
            "Unburden",
            "Tangling Hair"
        ],
        "innates": [
            "Nocturnal",
            "Low Blow",
            "Pickup"
        ],
        "weightkg": 110,
        "types": [
            "Dark"
        ],
        "genderR": 31,
        "otherFormes": [
            "Pansear"
        ],
        "nfe": true
    },
    "Simisear Redux": {
        "id": 514,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 79,
            "sa": 70,
            "sd": 90,
            "sp": 101
        },
        "abilities": [
            "Prankster",
            "Unburden",
            "Higher Rank"
        ],
        "innates": [
            "Nocturnal",
            "Low Blow",
            "Pickup"
        ],
        "weightkg": 280,
        "types": [
            "Dark"
        ],
        "genderR": 31,
        "otherFormes": [
            "Simisear"
        ]
    },
    "Panpour": {
        "id": 515,
        "bs": {
            "hp": 71,
            "at": 43,
            "df": 43,
            "sa": 53,
            "sd": 48,
            "sp": 64
        },
        "abilities": [
            "Prankster",
            "Sage Power",
            "Friend Guard"
        ],
        "innates": [
            "Torrent",
            "Storm Drain",
            "Healer"
        ],
        "weightkg": 135,
        "types": [
            "Water"
        ],
        "genderR": 31,
        "otherFormes": [
            "Panpour Redux"
        ],
        "nfe": true
    },
    "Simipour": {
        "id": 516,
        "bs": {
            "hp": 110,
            "at": 72,
            "df": 70,
            "sa": 93,
            "sd": 74,
            "sp": 101
        },
        "abilities": [
            "Prankster",
            "Sage Power",
            "Friend Guard"
        ],
        "innates": [
            "Torrent",
            "Storm Drain",
            "Healer"
        ],
        "weightkg": 290,
        "types": [
            "Water"
        ],
        "genderR": 31,
        "otherFormes": [
            "Simipour Redux"
        ]
    },
    "Panpour Redux": {
        "id": 515,
        "bs": {
            "hp": 50,
            "at": 43,
            "df": 45,
            "sa": 75,
            "sd": 45,
            "sp": 64
        },
        "abilities": [
            "Trace",
            "Telekinetic",
            "Forewarn"
        ],
        "innates": [
            "Psychic Mind",
            "Super Luck",
            "Magic Bounce"
        ],
        "weightkg": 135,
        "types": [
            "Psychic"
        ],
        "genderR": 31,
        "otherFormes": [
            "Panpour"
        ],
        "nfe": true
    },
    "Simipour Redux": {
        "id": 516,
        "bs": {
            "hp": 110,
            "at": 70,
            "df": 79,
            "sa": 110,
            "sd": 60,
            "sp": 91
        },
        "abilities": [
            "Trace",
            "Telekinetic",
            "Forewarn"
        ],
        "innates": [
            "Psychic Mind",
            "Super Luck",
            "Magic Bounce"
        ],
        "weightkg": 290,
        "types": [
            "Psychic"
        ],
        "genderR": 31,
        "otherFormes": [
            "Simipour"
        ]
    },
    "Munna": {
        "id": 517,
        "bs": {
            "hp": 76,
            "at": 25,
            "df": 45,
            "sa": 77,
            "sd": 55,
            "sp": 24
        },
        "abilities": [
            "Dreamcatcher",
            "Synchronize",
            "Forewarn"
        ],
        "innates": [
            "Levitate",
            "Sweet Dreams",
            "Hypnotist"
        ],
        "weightkg": 233,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Musharna": {
        "id": 518,
        "bs": {
            "hp": 116,
            "at": 55,
            "df": 85,
            "sa": 117,
            "sd": 95,
            "sp": 29
        },
        "abilities": [
            "Neutralizing Gas",
            "Sweet Dreams",
            "Forewarn"
        ],
        "innates": [
            "Levitate",
            "Comatose",
            "Dreamcatcher"
        ],
        "weightkg": 605,
        "types": [
            "Psychic"
        ],
        "genderR": 127
    },
    "Pidove": {
        "id": 519,
        "bs": {
            "hp": 70,
            "at": 55,
            "df": 50,
            "sa": 36,
            "sd": 30,
            "sp": 43
        },
        "abilities": [
            "Super Luck",
            "Unaware",
            "Rivalry"
        ],
        "innates": [
            "Keen Eye",
            "Big Pecks",
            "Cute Charm"
        ],
        "weightkg": 21,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Tranquill": {
        "id": 520,
        "bs": {
            "hp": 82,
            "at": 77,
            "df": 62,
            "sa": 50,
            "sd": 42,
            "sp": 65
        },
        "abilities": [
            "Super Luck",
            "Hustle",
            "Rivalry"
        ],
        "innates": [
            "Keen Eye",
            "Big Pecks",
            "Stamina"
        ],
        "weightkg": 150,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Unfezant": {
        "id": 521,
        "bs": {
            "hp": 100,
            "at": 115,
            "df": 80,
            "sa": 65,
            "sd": 55,
            "sp": 93
        },
        "abilities": [
            "Accelerate",
            "Big Pecks",
            "Unburden"
        ],
        "innates": [
            "Pretentious",
            "Super Luck",
            "Speed Force"
        ],
        "weightkg": 290,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127
    },
    "Blitzle": {
        "id": 522,
        "bs": {
            "hp": 55,
            "at": 70,
            "df": 32,
            "sa": 50,
            "sd": 32,
            "sp": 76
        },
        "abilities": [
            "Terminal Velocity",
            "Speed Force",
            "Generator"
        ],
        "innates": [
            "Run Away",
            "Adrenaline Rush",
            "Motor Drive"
        ],
        "weightkg": 298,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Zebstrika": {
        "id": 523,
        "bs": {
            "hp": 85,
            "at": 110,
            "df": 63,
            "sa": 80,
            "sd": 63,
            "sp": 116
        },
        "abilities": [
            "Adrenaline Rush",
            "Impulse",
            "Momentum"
        ],
        "innates": [
            "Reckless",
            "Speed Force",
            "Motor Drive"
        ],
        "weightkg": 795,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Roggenrola": {
        "id": 524,
        "bs": {
            "hp": 55,
            "at": 25,
            "df": 85,
            "sa": 75,
            "sd": 25,
            "sp": 15
        },
        "abilities": [
            "Sturdy",
            "Weak Armor",
            "Sand Force"
        ],
        "innates": [
            "Power Core",
            "Impenetrable",
            "Loose Rocks"
        ],
        "weightkg": 180,
        "types": [
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Boldore": {
        "id": 525,
        "bs": {
            "hp": 70,
            "at": 50,
            "df": 105,
            "sa": 105,
            "sd": 40,
            "sp": 20
        },
        "abilities": [
            "Sturdy",
            "Weak Armor",
            "Sand Force"
        ],
        "innates": [
            "Power Core",
            "Impenetrable",
            "Loose Rocks"
        ],
        "weightkg": 1020,
        "types": [
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Gigalith": {
        "id": 526,
        "bs": {
            "hp": 85,
            "at": 60,
            "df": 130,
            "sa": 135,
            "sd": 80,
            "sp": 25
        },
        "abilities": [
            "Loose Rocks",
            "Sand Stream",
            "Solar Power"
        ],
        "innates": [
            "Power Core",
            "Sturdy",
            "Sand Force"
        ],
        "weightkg": 2600,
        "types": [
            "Rock"
        ],
        "genderR": 127
    },
    "Woobat": {
        "id": 527,
        "bs": {
            "hp": 65,
            "at": 45,
            "df": 43,
            "sa": 75,
            "sd": 43,
            "sp": 72
        },
        "abilities": [
            "Emanate",
            "Aerilate",
            "Simple"
        ],
        "innates": [
            "Unaware",
            "Aerodynamics",
            "Soundproof"
        ],
        "weightkg": 21,
        "types": [
            "Psychic",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Swoobat": {
        "id": 528,
        "bs": {
            "hp": 67,
            "at": 57,
            "df": 55,
            "sa": 97,
            "sd": 55,
            "sp": 114
        },
        "abilities": [
            "Emanate",
            "Aerilate",
            "Simple"
        ],
        "innates": [
            "Unaware",
            "Aerodynamics",
            "Loud Bang"
        ],
        "weightkg": 105,
        "types": [
            "Psychic",
            "Flying"
        ],
        "genderR": 127
    },
    "Drilbur": {
        "id": 529,
        "bs": {
            "hp": 60,
            "at": 85,
            "df": 40,
            "sa": 30,
            "sd": 45,
            "sp": 68
        },
        "abilities": [
            "Mold Breaker",
            "Field Explorer",
            "Violent Rush"
        ],
        "innates": [
            "Sand Rush",
            "Sand Force",
            "Earthbound"
        ],
        "weightkg": 85,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Excadrill": {
        "id": 530,
        "bs": {
            "hp": 110,
            "at": 135,
            "df": 60,
            "sa": 50,
            "sd": 65,
            "sp": 88
        },
        "abilities": [
            "Mold Breaker",
            "Tough Claws",
            "Sand Force"
        ],
        "innates": [
            "Sand Rush",
            "Steelworker",
            "Earthbound"
        ],
        "weightkg": 404,
        "types": [
            "Ground",
            "Steel"
        ],
        "genderR": 127
    },
    "Audino": {
        "id": 531,
        "bs": {
            "hp": 103,
            "at": 60,
            "df": 96,
            "sa": 80,
            "sd": 96,
            "sp": 50
        },
        "abilities": [
            "Emergency Exit",
            "Caretaker",
            "Hospitality"
        ],
        "innates": [
            "Serene Grace",
            "Regenerator",
            "Triage"
        ],
        "weightkg": 310,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Audino Mega"
        ]
    },
    "Audino Mega": {
        "id": 531,
        "bs": {
            "hp": 103,
            "at": 90,
            "df": 126,
            "sa": 90,
            "sd": 126,
            "sp": 50
        },
        "abilities": [
            "Pastel Veil",
            "Caretaker",
            "Emergency Exit"
        ],
        "innates": [
            "Pure Love",
            "Natural Recovery",
            "Triage"
        ],
        "weightkg": 310,
        "types": [
            "Normal",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Audino"
        ]
    },
    "Timburr": {
        "id": 532,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 55,
            "sa": 25,
            "sd": 35,
            "sp": 35
        },
        "abilities": [
            "Sheer Force",
            "Guts",
            "Stamina"
        ],
        "innates": [
            "Long Reach",
            "Iron Fist",
            "Vital Spirit"
        ],
        "weightkg": 125,
        "types": [
            "Fighting"
        ],
        "genderR": 63,
        "nfe": true
    },
    "Gurdurr": {
        "id": 533,
        "bs": {
            "hp": 85,
            "at": 105,
            "df": 85,
            "sa": 40,
            "sd": 50,
            "sp": 40
        },
        "abilities": [
            "Sheer Force",
            "Guts",
            "Stamina"
        ],
        "innates": [
            "Long Reach",
            "Iron Fist",
            "Vital Spirit"
        ],
        "weightkg": 400,
        "types": [
            "Fighting"
        ],
        "genderR": 63,
        "nfe": true
    },
    "Conkeldurr": {
        "id": 534,
        "bs": {
            "hp": 105,
            "at": 140,
            "df": 95,
            "sa": 55,
            "sd": 65,
            "sp": 45
        },
        "abilities": [
            "Sheer Force",
            "Guts",
            "Stamina"
        ],
        "innates": [
            "Long Reach",
            "Rocky Payload",
            "Juggernaut"
        ],
        "weightkg": 870,
        "types": [
            "Fighting"
        ],
        "genderR": 63
    },
    "Tympole": {
        "id": 535,
        "bs": {
            "hp": 50,
            "at": 70,
            "df": 40,
            "sa": 70,
            "sd": 40,
            "sp": 64
        },
        "abilities": [
            "Hydration",
            "Soundproof",
            "Liquid Voice"
        ],
        "innates": [
            "Water Absorb",
            "Damp",
            "Guilt Trip"
        ],
        "weightkg": 45,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Palpitoad": {
        "id": 536,
        "bs": {
            "hp": 75,
            "at": 85,
            "df": 55,
            "sa": 85,
            "sd": 55,
            "sp": 69
        },
        "abilities": [
            "Damp",
            "Sand Song",
            "Liquid Voice"
        ],
        "innates": [
            "Water Absorb",
            "Resonance",
            "Loud Bang"
        ],
        "weightkg": 170,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Seismitoad": {
        "id": 537,
        "bs": {
            "hp": 105,
            "at": 105,
            "df": 75,
            "sa": 105,
            "sd": 75,
            "sp": 74
        },
        "abilities": [
            "Swift Swim",
            "Sand Song",
            "Liquid Voice"
        ],
        "innates": [
            "Water Absorb",
            "Resonance",
            "Aftershock"
        ],
        "weightkg": 620,
        "types": [
            "Water",
            "Ground"
        ],
        "genderR": 127
    },
    "Throh": {
        "id": 538,
        "bs": {
            "hp": 120,
            "at": 100,
            "df": 85,
            "sa": 30,
            "sd": 85,
            "sp": 45
        },
        "abilities": [
            "Guts",
            "Technician",
            "Mold Breaker"
        ],
        "innates": [
            "Juggernaut",
            "Analytic",
            "Iron Fist"
        ],
        "weightkg": 555,
        "types": [
            "Fighting"
        ],
        "genderR": 0
    },
    "Sawk": {
        "id": 539,
        "bs": {
            "hp": 75,
            "at": 125,
            "df": 75,
            "sa": 30,
            "sd": 75,
            "sp": 85
        },
        "abilities": [
            "Sturdy",
            "Technician",
            "Mold Breaker"
        ],
        "innates": [
            "Fighter",
            "Iron Fist",
            "Fatal Precision"
        ],
        "weightkg": 510,
        "types": [
            "Fighting"
        ],
        "genderR": 0
    },
    "Sewaddle": {
        "id": 540,
        "bs": {
            "hp": 45,
            "at": 53,
            "df": 70,
            "sa": 40,
            "sd": 60,
            "sp": 42
        },
        "abilities": [
            "Web Spinner",
            "Lumberjack",
            "Sap Sipper"
        ],
        "innates": [
            "Swarm",
            "Chloroplast",
            "Overcoat"
        ],
        "weightkg": 25,
        "types": [
            "Bug",
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Swadloon": {
        "id": 541,
        "bs": {
            "hp": 55,
            "at": 63,
            "df": 90,
            "sa": 50,
            "sd": 80,
            "sp": 42
        },
        "abilities": [
            "Flourish",
            "Coward",
            "Grass Pelt"
        ],
        "innates": [
            "Grassy Surge",
            "Chloroplast",
            "Overcoat"
        ],
        "weightkg": 73,
        "types": [
            "Bug",
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Leavanny": {
        "id": 542,
        "bs": {
            "hp": 75,
            "at": 110,
            "df": 80,
            "sa": 55,
            "sd": 80,
            "sp": 110
        },
        "abilities": [
            "Friend Guard",
            "Chlorophyll",
            "Dual Wield"
        ],
        "innates": [
            "Keen Edge",
            "Super Luck",
            "Overcoat"
        ],
        "weightkg": 205,
        "types": [
            "Bug",
            "Grass"
        ],
        "genderR": 127
    },
    "Venipede": {
        "id": 543,
        "bs": {
            "hp": 30,
            "at": 45,
            "df": 59,
            "sa": 30,
            "sd": 39,
            "sp": 57
        },
        "abilities": [
            "Poison Point",
            "Exploit Weakness",
            "Speed Boost"
        ],
        "innates": [
            "Swarm",
            "Solenoglyphs",
            "Hyper Aggressive"
        ],
        "weightkg": 53,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Whirlipede": {
        "id": 544,
        "bs": {
            "hp": 40,
            "at": 55,
            "df": 99,
            "sa": 40,
            "sd": 79,
            "sp": 47
        },
        "abilities": [
            "Poison Point",
            "Exploit Weakness",
            "Speed Boost"
        ],
        "innates": [
            "Let's Roll",
            "Coil Up",
            "Shell Armor"
        ],
        "weightkg": 585,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Scolipede": {
        "id": 545,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 89,
            "sa": 55,
            "sd": 69,
            "sp": 112
        },
        "abilities": [
            "Poison Point",
            "Predator",
            "Speed Boost"
        ],
        "innates": [
            "Let's Roll",
            "Solenoglyphs",
            "Hyper Aggressive"
        ],
        "weightkg": 2005,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127
    },
    "Cottonee": {
        "id": 546,
        "bs": {
            "hp": 40,
            "at": 27,
            "df": 60,
            "sa": 37,
            "sd": 50,
            "sp": 66
        },
        "abilities": [
            "Prankster",
            "Guilt Trip",
            "Aerodynamics"
        ],
        "innates": [
            "Infiltrator",
            "Cotton Down",
            "Fluffy"
        ],
        "weightkg": 6,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Whimsicott": {
        "id": 547,
        "bs": {
            "hp": 80,
            "at": 57,
            "df": 85,
            "sa": 77,
            "sd": 85,
            "sp": 116
        },
        "abilities": [
            "Prankster",
            "Wind Rider",
            "Air Blower"
        ],
        "innates": [
            "Infiltrator",
            "Cotton Down",
            "Fluffy"
        ],
        "weightkg": 66,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 127
    },
    "Petilil": {
        "id": 548,
        "bs": {
            "hp": 45,
            "at": 35,
            "df": 50,
            "sa": 70,
            "sd": 50,
            "sp": 30
        },
        "abilities": [
            "Hospitality",
            "Leaf Guard",
            "Solar Power"
        ],
        "innates": [
            "Natural Cure",
            "Chlorophyll",
            "Overgrow"
        ],
        "weightkg": 66,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Lilligant": {
        "id": 549,
        "bs": {
            "hp": 80,
            "at": 60,
            "df": 80,
            "sa": 110,
            "sd": 80,
            "sp": 90
        },
        "abilities": [
            "Solar Power",
            "Dancer",
            "Chloroplast"
        ],
        "innates": [
            "Chlorophyll",
            "Natural Cure",
            "Overgrow"
        ],
        "weightkg": 163,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 254,
        "otherFormes": [
            "Lilligant Hisuian"
        ]
    },
    "Lilligant Hisuian": {
        "id": 549,
        "bs": {
            "hp": 80,
            "at": 105,
            "df": 80,
            "sa": 50,
            "sd": 80,
            "sp": 105
        },
        "abilities": [
            "Chlorophyll",
            "Hustle",
            "Dancer"
        ],
        "innates": [
            "Blade Dance",
            "Speed Force",
            "Taekkyeon"
        ],
        "weightkg": 163,
        "types": [
            "Grass",
            "Fighting"
        ],
        "genderR": 254,
        "otherFormes": [
            "Lilligant"
        ]
    },
    "Basculin": {
        "id": 550,
        "bs": {
            "hp": 70,
            "at": 92,
            "df": 65,
            "sa": 80,
            "sd": 55,
            "sp": 118
        },
        "abilities": [
            "Mold Breaker",
            "Strong Jaw",
            "Predator"
        ],
        "innates": [
            "Reckless",
            "Adaptability",
            "Hyper Aggressive"
        ],
        "weightkg": 180,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Basculin Whitestriped",
            "Basculin Blue Striped"
        ]
    },
    "Basculegion": {
        "id": 902,
        "bs": {
            "hp": 120,
            "at": 112,
            "df": 65,
            "sa": 80,
            "sd": 75,
            "sp": 78
        },
        "abilities": [
            "Violent Rush",
            "Rock Head",
            "Hyper Aggressive"
        ],
        "innates": [
            "Spectralize",
            "Reckless",
            "Supreme Overlord"
        ],
        "weightkg": 1100,
        "types": [
            "Water",
            "Ghost"
        ],
        "genderR": 127
    },
    "Basculegion F": {
        "id": 902,
        "bs": {
            "hp": 130,
            "at": 75,
            "df": 65,
            "sa": 112,
            "sd": 75,
            "sp": 73
        },
        "abilities": [
            "Rapid Response",
            "Guilt Trip",
            "Spectralize"
        ],
        "innates": [
            "Shadow Shield",
            "Wonder Skin",
            "Supreme Overlord"
        ],
        "weightkg": 1100,
        "types": [
            "Water",
            "Ghost"
        ],
        "genderR": 127
    },
    "Basculin White": {
        "id": 550,
        "bs": {
            "hp": 70,
            "at": 80,
            "df": 65,
            "sa": 92,
            "sd": 55,
            "sp": 118
        },
        "abilities": [
            "Mold Breaker",
            "Mind Crunch",
            "Predator"
        ],
        "innates": [
            "Rattled",
            "Adaptability",
            "Hyper Aggressive"
        ],
        "weightkg": 180,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Basculin Blue": {
        "id": 550,
        "bs": {
            "hp": 70,
            "at": 92,
            "df": 65,
            "sa": 80,
            "sd": 55,
            "sp": 118
        },
        "abilities": [
            "Mold Breaker",
            "Strong Jaw",
            "Predator"
        ],
        "innates": [
            "Rock Head",
            "Adaptability",
            "Hyper Aggressive"
        ],
        "weightkg": 180,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Sandile": {
        "id": 551,
        "bs": {
            "hp": 50,
            "at": 72,
            "df": 35,
            "sa": 35,
            "sd": 35,
            "sp": 65
        },
        "abilities": [
            "Intimidate",
            "Moxie",
            "Anger Point"
        ],
        "innates": [
            "Sand Rush",
            "Scavenger",
            "Strong Jaw"
        ],
        "weightkg": 152,
        "types": [
            "Ground",
            "Dark"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Krokorok": {
        "id": 552,
        "bs": {
            "hp": 60,
            "at": 82,
            "df": 45,
            "sa": 45,
            "sd": 45,
            "sp": 74
        },
        "abilities": [
            "Intimidate",
            "Moxie",
            "Anger Point"
        ],
        "innates": [
            "Sand Rush",
            "Scavenger",
            "Strong Jaw"
        ],
        "weightkg": 334,
        "types": [
            "Ground",
            "Dark"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Krookodile": {
        "id": 553,
        "bs": {
            "hp": 95,
            "at": 117,
            "df": 80,
            "sa": 65,
            "sd": 70,
            "sp": 92
        },
        "abilities": [
            "Intimidate",
            "Moxie",
            "Anger Point"
        ],
        "innates": [
            "Hyper Aggressive",
            "Predator",
            "Strong Jaw"
        ],
        "weightkg": 963,
        "types": [
            "Ground",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Krookodile Mega"
        ]
    },
    "Krookodile Mega": {
        "id": 553,
        "bs": {
            "hp": 95,
            "at": 147,
            "df": 110,
            "sa": 65,
            "sd": 100,
            "sp": 102
        },
        "abilities": [
            "Scare",
            "Moxie",
            "Anger Point"
        ],
        "innates": [
            "Metallic",
            "Dune Terror",
            "Primal Maw"
        ],
        "weightkg": 963,
        "types": [
            "Ground",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Krookodile"
        ]
    },
    "Darumaka": {
        "id": 554,
        "bs": {
            "hp": 70,
            "at": 90,
            "df": 45,
            "sa": 15,
            "sd": 45,
            "sp": 50
        },
        "abilities": [
            "Hustle",
            "Sheer Force",
            "Thermal Exchange"
        ],
        "innates": [
            "Flame Body",
            "Super Luck",
            "Turboblaze"
        ],
        "weightkg": 375,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Darumaka Galarian"
        ],
        "nfe": true
    },
    "Darmanitan": {
        "id": 555,
        "bs": {
            "hp": 105,
            "at": 140,
            "df": 65,
            "sa": 50,
            "sd": 65,
            "sp": 95
        },
        "abilities": [
            "Gorilla Tactics",
            "Sheer Force",
            "Discipline"
        ],
        "innates": [
            "Flame Body",
            "Iron Fist",
            "Turboblaze"
        ],
        "weightkg": 929,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Darmanitan Zen Mode",
            "Darmanitan Galarian",
            "Darmanitan Zen Mode Galarian"
        ]
    },
    "Darmanitan Zen": {
        "id": 555,
        "bs": {
            "hp": 105,
            "at": 35,
            "df": 95,
            "sa": 140,
            "sd": 95,
            "sp": 50
        },
        "abilities": [
            "Sheer Force",
            "Clear Body",
            "Equinox"
        ],
        "innates": [
            "Enlightened",
            "Impenetrable",
            "Psychic Mind"
        ],
        "weightkg": 929,
        "types": [
            "Fire",
            "Psychic"
        ],
        "genderR": 127
    },
    "Darumaka Galarian": {
        "id": 554,
        "bs": {
            "hp": 70,
            "at": 90,
            "df": 45,
            "sa": 15,
            "sd": 45,
            "sp": 50
        },
        "abilities": [
            "Hustle",
            "Sheer Force",
            "Mold Breaker"
        ],
        "innates": [
            "Heatproof",
            "Inner Focus",
            "Ice Body"
        ],
        "weightkg": 375,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Darumaka"
        ],
        "nfe": true
    },
    "Darmanitan Galarian": {
        "id": 555,
        "bs": {
            "hp": 105,
            "at": 140,
            "df": 65,
            "sa": 50,
            "sd": 65,
            "sp": 95
        },
        "abilities": [
            "Gorilla Tactics",
            "Pressure",
            "Whiteout"
        ],
        "innates": [
            "Heatproof",
            "Iron Fist",
            "Mold Breaker"
        ],
        "weightkg": 929,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Darmanitan"
        ]
    },
    "Darmanitan Zen Mode Galarian": {
        "id": 555,
        "bs": {
            "hp": 105,
            "at": 120,
            "df": 60,
            "sa": 35,
            "sd": 60,
            "sp": 140
        },
        "abilities": [
            "Gorilla Tactics",
            "Sheer Force",
            "Solar Power"
        ],
        "innates": [
            "Heatproof",
            "Iron Fist",
            "Turboblaze"
        ],
        "weightkg": 929,
        "types": [
            "Ice",
            "Fire"
        ],
        "genderR": 127,
        "otherFormes": [
            "Darmanitan"
        ]
    },
    "Darumaka Redux": {
        "id": 554,
        "bs": {
            "hp": 70,
            "at": 90,
            "df": 45,
            "sa": 15,
            "sd": 45,
            "sp": 50
        },
        "abilities": [
            "Hustle",
            "Ice Body",
            "Heatproof"
        ],
        "innates": [
            "Mold Breaker",
            "Sheer Force",
            "Inner Focus"
        ],
        "weightkg": 375,
        "types": [
            "Ground",
            "Fighting"
        ],
        "genderR": 127
    },
    "Darmanitan Redux": {
        "id": 555,
        "bs": {
            "hp": 80,
            "at": 140,
            "df": 80,
            "sa": 50,
            "sd": 80,
            "sp": 90
        },
        "abilities": [
            "Gorilla Tactics",
            "Sheer Force",
            "Battle Aura"
        ],
        "innates": [
            "Earth Eater",
            "Iron Fist",
            "Mold Breaker"
        ],
        "weightkg": 929,
        "types": [
            "Ground",
            "Fighting"
        ],
        "genderR": 127
    },
    "Darmanitan Aura": {
        "id": 555,
        "bs": {
            "hp": 60,
            "at": 50,
            "df": 95,
            "sa": 150,
            "sd": 95,
            "sp": 70
        },
        "abilities": [
            "Sage Power",
            "Sheer Force",
            "Battle Aura"
        ],
        "innates": [
            "Rocky Payload",
            "Magical Fists",
            "Mold Breaker"
        ],
        "weightkg": 929,
        "types": [
            "Rock",
            "Fighting"
        ],
        "genderR": 127
    },
    "Darmanitan Redux Bond": {
        "id": 555,
        "bs": {
            "hp": 80,
            "at": 140,
            "df": 80,
            "sa": 50,
            "sd": 80,
            "sp": 90
        },
        "abilities": [
            "Gorilla Tactics",
            "Sheer Force",
            "Battle Aura"
        ],
        "innates": [
            "Battle Bond",
            "Iron Fist",
            "Mold Breaker"
        ],
        "weightkg": 929,
        "types": [
            "Ground",
            "Fighting"
        ],
        "genderR": 127
    },
    "Darmanitan Redux Blunder": {
        "id": 555,
        "bs": {
            "hp": 80,
            "at": 170,
            "df": 105,
            "sa": 60,
            "sd": 105,
            "sp": 110
        },
        "abilities": [
            "Gorilla Tactics",
            "Berserk DNA",
            "Anger Point"
        ],
        "innates": [
            "Battle Bond",
            "Iron Fist",
            "Mold Breaker"
        ],
        "weightkg": 929,
        "types": [
            "Ground",
            "Fighting"
        ],
        "genderR": 127
    },
    "Maractus": {
        "id": 556,
        "bs": {
            "hp": 75,
            "at": 56,
            "df": 87,
            "sa": 96,
            "sd": 87,
            "sp": 60
        },
        "abilities": [
            "Water Absorb",
            "Self Sufficient",
            "Storm Drain"
        ],
        "innates": [
            "Rough Skin",
            "Chlorophyll",
            "Huge Power"
        ],
        "weightkg": 280,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Dwebble": {
        "id": 557,
        "bs": {
            "hp": 50,
            "at": 75,
            "df": 95,
            "sa": 35,
            "sd": 35,
            "sp": 55
        },
        "abilities": [
            "Sturdy",
            "Solid Rock",
            "Weak Armor"
        ],
        "innates": [
            "Rockhard Will",
            "Shell Armor",
            "Grip Pincer"
        ],
        "weightkg": 145,
        "types": [
            "Bug",
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Crustle": {
        "id": 558,
        "bs": {
            "hp": 70,
            "at": 115,
            "df": 135,
            "sa": 65,
            "sd": 75,
            "sp": 45
        },
        "abilities": [
            "Sturdy",
            "Solid Rock",
            "Weak Armor"
        ],
        "innates": [
            "Rockhard Will",
            "Shell Armor",
            "Grip Pincer"
        ],
        "weightkg": 2000,
        "types": [
            "Bug",
            "Rock"
        ],
        "genderR": 127
    },
    "Scraggy": {
        "id": 559,
        "bs": {
            "hp": 50,
            "at": 75,
            "df": 70,
            "sa": 35,
            "sd": 70,
            "sp": 48
        },
        "abilities": [
            "Rivalry",
            "Moxie",
            "Intimidate"
        ],
        "innates": [
            "Shed Skin",
            "Rock Head",
            "Reckless"
        ],
        "weightkg": 118,
        "types": [
            "Dark",
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Scrafty": {
        "id": 560,
        "bs": {
            "hp": 65,
            "at": 90,
            "df": 115,
            "sa": 45,
            "sd": 115,
            "sp": 73
        },
        "abilities": [
            "Striker",
            "Moxie",
            "Intimidate"
        ],
        "innates": [
            "Shed Skin",
            "Rock Head",
            "Reckless"
        ],
        "weightkg": 300,
        "types": [
            "Dark",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Scrafty Mega"
        ]
    },
    "Scrafster": {
        "id": 1067,
        "bs": {
            "hp": 90,
            "at": 115,
            "df": 115,
            "sa": 52,
            "sd": 115,
            "sp": 93
        },
        "abilities": [
            "Combat Specialist",
            "Moxie",
            "Stygian Rush"
        ],
        "innates": [
            "Intimidate",
            "Rock Head",
            "Reckless"
        ],
        "weightkg": 620,
        "types": [
            "Dark",
            "Fighting"
        ],
        "genderR": 127
    },
    "Sigilyph": {
        "id": 561,
        "bs": {
            "hp": 72,
            "at": 58,
            "df": 80,
            "sa": 103,
            "sd": 80,
            "sp": 97
        },
        "abilities": [
            "Low Visibility",
            "Dreamcatcher",
            "Sage Power"
        ],
        "innates": [
            "Aerialist",
            "Tinted Lens",
            "Wonder Skin"
        ],
        "weightkg": 140,
        "types": [
            "Psychic",
            "Ghost"
        ],
        "genderR": 127
    },
    "Yamask": {
        "id": 562,
        "bs": {
            "hp": 38,
            "at": 30,
            "df": 85,
            "sa": 55,
            "sd": 65,
            "sp": 30
        },
        "abilities": [
            "Mummy",
            "Shadow Shield",
            "Shadow Tag"
        ],
        "innates": [
            "Vengeance",
            "Cursed Body",
            "Rest in Peace"
        ],
        "weightkg": 15,
        "types": [
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Yamask Galarian"
        ],
        "nfe": true
    },
    "Yamask Galarian": {
        "id": 562,
        "bs": {
            "hp": 38,
            "at": 55,
            "df": 85,
            "sa": 30,
            "sd": 65,
            "sp": 30
        },
        "abilities": [
            "Ill Will",
            "Shadow Shield",
            "WandrngSprit"
        ],
        "innates": [
            "Vengeance",
            "Cursed Body",
            "Haunted Spirit"
        ],
        "weightkg": 15,
        "types": [
            "Ground",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Yamask"
        ],
        "nfe": true
    },
    "Cofagrigus": {
        "id": 563,
        "bs": {
            "hp": 75,
            "at": 50,
            "df": 145,
            "sa": 78,
            "sd": 105,
            "sp": 30
        },
        "abilities": [
            "Mummy",
            "Shadow Shield",
            "Shadow Tag"
        ],
        "innates": [
            "Clear Body",
            "Steely Spirit",
            "Cursed Body"
        ],
        "weightkg": 765,
        "types": [
            "Ghost",
            "Steel"
        ],
        "genderR": 127
    },
    "Tirtouga": {
        "id": 564,
        "bs": {
            "hp": 54,
            "at": 93,
            "df": 103,
            "sa": 53,
            "sd": 45,
            "sp": 22
        },
        "abilities": [
            "Opportunist",
            "Swift Swim",
            "Predator"
        ],
        "innates": [
            "Fossilized",
            "Shell Armor",
            "Solid Rock"
        ],
        "weightkg": 165,
        "types": [
            "Water",
            "Rock"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Carracosta": {
        "id": 565,
        "bs": {
            "hp": 74,
            "at": 128,
            "df": 133,
            "sa": 83,
            "sd": 65,
            "sp": 32
        },
        "abilities": [
            "Opportunist",
            "Swift Swim",
            "Predator"
        ],
        "innates": [
            "Strong Jaw",
            "Shell Armor",
            "Solid Rock"
        ],
        "weightkg": 810,
        "types": [
            "Water",
            "Rock"
        ],
        "genderR": 31
    },
    "Archen": {
        "id": 566,
        "bs": {
            "hp": 55,
            "at": 112,
            "df": 45,
            "sa": 74,
            "sd": 45,
            "sp": 70
        },
        "abilities": [
            "Opportunist",
            "Rock Head",
            "Unburden"
        ],
        "innates": [
            "Defeatist",
            "Grounded",
            "Fossilized"
        ],
        "weightkg": 95,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Archeops": {
        "id": 567,
        "bs": {
            "hp": 75,
            "at": 140,
            "df": 65,
            "sa": 112,
            "sd": 65,
            "sp": 110
        },
        "abilities": [
            "Opportunist",
            "Predator",
            "Reckless"
        ],
        "innates": [
            "Defeatist",
            "Fossilized",
            "Rock Head"
        ],
        "weightkg": 320,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 31
    },
    "Trubbish": {
        "id": 568,
        "bs": {
            "hp": 50,
            "at": 50,
            "df": 77,
            "sa": 40,
            "sd": 62,
            "sp": 65
        },
        "abilities": [
            "Poison Touch",
            "Toxic Debris",
            "Scrapyard"
        ],
        "innates": [
            "Stench",
            "Aftermath",
            "Poison Absorb"
        ],
        "weightkg": 310,
        "types": [
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Garbodor": {
        "id": 569,
        "bs": {
            "hp": 80,
            "at": 95,
            "df": 102,
            "sa": 60,
            "sd": 82,
            "sp": 75
        },
        "abilities": [
            "Poison Touch",
            "Toxic Debris",
            "Scrapyard"
        ],
        "innates": [
            "Stench",
            "Scavenger",
            "Toxic Spill"
        ],
        "weightkg": 1073,
        "types": [
            "Poison",
            "Steel"
        ],
        "genderR": 127
    },
    "Garbodor Mega": {
        "id": 569,
        "bs": {
            "hp": 80,
            "at": 130,
            "df": 102,
            "sa": 95,
            "sd": 127,
            "sp": 60
        },
        "abilities": [
            "Permanence",
            "Steely Spirit",
            "Iron Barbs"
        ],
        "innates": [
            "Scrapyard",
            "Scavenger",
            "Trash Heap"
        ],
        "weightkg": 1073,
        "types": [
            "Poison",
            "Steel"
        ],
        "genderR": 127
    },
    "Zorua": {
        "id": 570,
        "bs": {
            "hp": 40,
            "at": 80,
            "df": 40,
            "sa": 65,
            "sd": 40,
            "sp": 65
        },
        "abilities": [
            "Ill Will",
            "Emergency Exit",
            "Opportunist"
        ],
        "innates": [
            "Illusion",
            "Exploit Weakness",
            "Ambush"
        ],
        "weightkg": 125,
        "types": [
            "Dark"
        ],
        "genderR": 31,
        "otherFormes": [
            "Zorua Hisuian"
        ],
        "nfe": true
    },
    "Zoroark": {
        "id": 571,
        "bs": {
            "hp": 60,
            "at": 120,
            "df": 60,
            "sa": 105,
            "sd": 60,
            "sp": 105
        },
        "abilities": [
            "Ill Will",
            "Emergency Exit",
            "Opportunist"
        ],
        "innates": [
            "Illusion",
            "Exploit Weakness",
            "Ambush"
        ],
        "weightkg": 811,
        "types": [
            "Dark"
        ],
        "genderR": 31,
        "otherFormes": [
            "Zoroark Hisuian"
        ]
    },
    "Zorua Hisuian": {
        "id": 570,
        "bs": {
            "hp": 35,
            "at": 60,
            "df": 40,
            "sa": 85,
            "sd": 40,
            "sp": 70
        },
        "abilities": [
            "Ambush",
            "Shallow Grave",
            "Exploit Weakness"
        ],
        "innates": [
            "Illusion",
            "Vengeance",
            "Opportunist"
        ],
        "weightkg": 125,
        "types": [
            "Normal",
            "Ghost"
        ],
        "genderR": 31,
        "otherFormes": [
            "Zorua"
        ],
        "nfe": true
    },
    "Zoroark Hisuian": {
        "id": 571,
        "bs": {
            "hp": 55,
            "at": 100,
            "df": 60,
            "sa": 125,
            "sd": 60,
            "sp": 110
        },
        "abilities": [
            "Ambush",
            "Shallow Grave",
            "Exploit Weakness"
        ],
        "innates": [
            "Illusion",
            "Vengeance",
            "Opportunist"
        ],
        "weightkg": 811,
        "types": [
            "Normal",
            "Ghost"
        ],
        "genderR": 31,
        "otherFormes": [
            "Zoroark"
        ]
    },
    "Minccino": {
        "id": 572,
        "bs": {
            "hp": 55,
            "at": 50,
            "df": 40,
            "sa": 40,
            "sd": 40,
            "sp": 75
        },
        "abilities": [
            "Perfectionist",
            "Overcoat",
            "Skill Link"
        ],
        "innates": [
            "Technician",
            "Cute Charm",
            "Limber"
        ],
        "weightkg": 58,
        "types": [
            "Normal"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Cinccino": {
        "id": 573,
        "bs": {
            "hp": 75,
            "at": 95,
            "df": 60,
            "sa": 65,
            "sd": 60,
            "sp": 115
        },
        "abilities": [
            "Perfectionist",
            "Pickup",
            "Skill Link"
        ],
        "innates": [
            "Technician",
            "Cute Charm",
            "Overcoat"
        ],
        "weightkg": 75,
        "types": [
            "Normal"
        ],
        "genderR": 190
    },
    "Gothita": {
        "id": 574,
        "bs": {
            "hp": 50,
            "at": 30,
            "df": 50,
            "sa": 65,
            "sd": 70,
            "sp": 45
        },
        "abilities": [
            "Frisk",
            "Competitive",
            "Shadow Tag"
        ],
        "innates": [
            "Nocturnal",
            "Psychic Mind",
            "Magic Bounce"
        ],
        "weightkg": 58,
        "types": [
            "Psychic"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Gothorita": {
        "id": 575,
        "bs": {
            "hp": 65,
            "at": 45,
            "df": 70,
            "sa": 85,
            "sd": 90,
            "sp": 55
        },
        "abilities": [
            "Frisk",
            "Competitive",
            "Shadow Tag"
        ],
        "innates": [
            "Nocturnal",
            "Psychic Mind",
            "Magic Bounce"
        ],
        "weightkg": 180,
        "types": [
            "Psychic"
        ],
        "genderR": 190,
        "nfe": true
    },
    "Gothitelle": {
        "id": 576,
        "bs": {
            "hp": 80,
            "at": 55,
            "df": 95,
            "sa": 115,
            "sd": 130,
            "sp": 65
        },
        "abilities": [
            "Frisk",
            "Competitive",
            "Shadow Tag"
        ],
        "innates": [
            "Nocturnal",
            "Psychic Mind",
            "Magic Bounce"
        ],
        "weightkg": 440,
        "types": [
            "Psychic"
        ],
        "genderR": 190
    },
    "Solosis": {
        "id": 577,
        "bs": {
            "hp": 45,
            "at": 30,
            "df": 40,
            "sa": 105,
            "sd": 50,
            "sp": 20
        },
        "abilities": [
            "Overcoat",
            "Neuroforce",
            "Twist. Dimension"
        ],
        "innates": [
            "Regenerator",
            "Liquified",
            "Magic Guard"
        ],
        "weightkg": 10,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Solosis Redux"
        ],
        "nfe": true
    },
    "Duosion": {
        "id": 578,
        "bs": {
            "hp": 65,
            "at": 40,
            "df": 50,
            "sa": 125,
            "sd": 60,
            "sp": 30
        },
        "abilities": [
            "Overcoat",
            "Neuroforce",
            "Twist. Dimension"
        ],
        "innates": [
            "Regenerator",
            "Liquified",
            "Magic Guard"
        ],
        "weightkg": 80,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Duosion Redux"
        ],
        "nfe": true
    },
    "Reuniclus": {
        "id": 579,
        "bs": {
            "hp": 110,
            "at": 115,
            "df": 75,
            "sa": 125,
            "sd": 85,
            "sp": 30
        },
        "abilities": [
            "Overcoat",
            "Neuroforce",
            "Twist. Dimension"
        ],
        "innates": [
            "Regenerator",
            "Liquified",
            "Magic Guard"
        ],
        "weightkg": 201,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Reuniclus Redux"
        ]
    },
    "Solosis Redux": {
        "id": 577,
        "bs": {
            "hp": 45,
            "at": 30,
            "df": 50,
            "sa": 95,
            "sd": 50,
            "sp": 20
        },
        "abilities": [
            "Overcoat",
            "Water Absorb",
            "Flash Fire"
        ],
        "innates": [
            "Hydration",
            "Flaming Soul",
            "Adaptability"
        ],
        "weightkg": 10,
        "types": [
            "Fire",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Solosis"
        ],
        "nfe": true
    },
    "Duosion Redux": {
        "id": 578,
        "bs": {
            "hp": 75,
            "at": 40,
            "df": 60,
            "sa": 105,
            "sd": 60,
            "sp": 30
        },
        "abilities": [
            "Overcoat",
            "Water Absorb",
            "Flash Fire"
        ],
        "innates": [
            "Hydration",
            "Flaming Soul",
            "Adaptability"
        ],
        "weightkg": 80,
        "types": [
            "Fire",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Duosion"
        ],
        "nfe": true
    },
    "Reuniclus Redux": {
        "id": 579,
        "bs": {
            "hp": 110,
            "at": 115,
            "df": 85,
            "sa": 115,
            "sd": 85,
            "sp": 30
        },
        "abilities": [
            "Overcoat",
            "Water Absorb",
            "Flash Fire"
        ],
        "innates": [
            "Water Bubble",
            "Flaming Soul",
            "Catastrophe"
        ],
        "weightkg": 201,
        "types": [
            "Fire",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Reuniclus"
        ]
    },
    "Reuniclus Mega": {
        "id": 579,
        "bs": {
            "hp": 110,
            "at": 125,
            "df": 105,
            "sa": 165,
            "sd": 105,
            "sp": 30
        },
        "abilities": [
            "Elemental Vortex",
            "Elemental Vortex",
            "Elemental Vortex"
        ],
        "innates": [
            "Flame Bubble",
            "Illuminate",
            "Catastrophe"
        ],
        "weightkg": 201,
        "types": [
            "Fire",
            "Water"
        ],
        "genderR": 127
    },
    "Ducklett": {
        "id": 580,
        "bs": {
            "hp": 62,
            "at": 64,
            "df": 50,
            "sa": 64,
            "sd": 50,
            "sp": 65
        },
        "abilities": [
            "Damp",
            "Rivalry",
            "Swift Swim"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Big Pecks"
        ],
        "weightkg": 55,
        "types": [
            "Water",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Swanna": {
        "id": 581,
        "bs": {
            "hp": 90,
            "at": 97,
            "df": 75,
            "sa": 75,
            "sd": 103,
            "sp": 87
        },
        "abilities": [
            "Dancer",
            "Overcoat",
            "Hyper Aggressive"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Majestic Bird"
        ],
        "weightkg": 242,
        "types": [
            "Water",
            "Flying"
        ],
        "genderR": 127
    },
    "Vanillite": {
        "id": 582,
        "bs": {
            "hp": 36,
            "at": 50,
            "df": 50,
            "sa": 65,
            "sd": 60,
            "sp": 60
        },
        "abilities": [
            "Refrigerate",
            "Snow Warning",
            "Weak Armor"
        ],
        "innates": [
            "Permafrost",
            "Ice Body",
            "Slush Rush"
        ],
        "weightkg": 57,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Vanillish": {
        "id": 583,
        "bs": {
            "hp": 51,
            "at": 65,
            "df": 65,
            "sa": 80,
            "sd": 75,
            "sp": 75
        },
        "abilities": [
            "Refrigerate",
            "Snow Warning",
            "Weak Armor"
        ],
        "innates": [
            "Permafrost",
            "Ice Body",
            "Slush Rush"
        ],
        "weightkg": 410,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Vanilluxe": {
        "id": 584,
        "bs": {
            "hp": 71,
            "at": 95,
            "df": 85,
            "sa": 110,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Snow Cloak",
            "Snow Warning",
            "Weak Armor"
        ],
        "innates": [
            "Multi Headed",
            "Ice Body",
            "Slush Rush"
        ],
        "weightkg": 575,
        "types": [
            "Ice"
        ],
        "genderR": 127
    },
    "Deerling": {
        "id": 585,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 50,
            "sa": 40,
            "sd": 50,
            "sp": 75
        },
        "abilities": [
            "Chlorophyll",
            "Adaptability",
            "Serene Grace"
        ],
        "innates": [
            "Overgrow",
            "Violent Rush",
            "Sap Sipper"
        ],
        "weightkg": 195,
        "types": [
            "Normal",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Deerling Summer",
            "Deerling Autumn",
            "Deerling Winter"
        ],
        "nfe": true
    },
    "Sawsbuck": {
        "id": 586,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 70,
            "sa": 60,
            "sd": 70,
            "sp": 95
        },
        "abilities": [
            "Adaptability",
            "Serene Grace",
            "Chloroplast"
        ],
        "innates": [
            "Mighty Horn",
            "Violent Rush",
            "Rivalry"
        ],
        "weightkg": 925,
        "types": [
            "Normal",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sawsbuck Summer",
            "Sawsbuck Autumn",
            "Sawsbuck Winter"
        ]
    },
    "Deerling Summer": {
        "id": 585,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 50,
            "sa": 40,
            "sd": 50,
            "sp": 75
        },
        "abilities": [
            "Chlorophyll",
            "Adaptability",
            "Serene Grace"
        ],
        "innates": [
            "Overgrow",
            "Violent Rush",
            "Sap Sipper"
        ],
        "weightkg": 195,
        "types": [
            "Normal",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Deerling"
        ],
        "nfe": true
    },
    "Sawsbuck Summer": {
        "id": 586,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 70,
            "sa": 60,
            "sd": 70,
            "sp": 95
        },
        "abilities": [
            "Adaptability",
            "Serene Grace",
            "Chloroplast"
        ],
        "innates": [
            "Mighty Horn",
            "Violent Rush",
            "Rivalry"
        ],
        "weightkg": 925,
        "types": [
            "Normal",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sawsbuck"
        ]
    },
    "Deerling Autumn": {
        "id": 585,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 50,
            "sa": 40,
            "sd": 50,
            "sp": 75
        },
        "abilities": [
            "Chlorophyll",
            "Adaptability",
            "Serene Grace"
        ],
        "innates": [
            "Overgrow",
            "Violent Rush",
            "Sap Sipper"
        ],
        "weightkg": 195,
        "types": [
            "Normal",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Deerling"
        ],
        "nfe": true
    },
    "Sawsbuck Autumn": {
        "id": 586,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 70,
            "sa": 60,
            "sd": 70,
            "sp": 95
        },
        "abilities": [
            "Adaptability",
            "Serene Grace",
            "Chloroplast"
        ],
        "innates": [
            "Mighty Horn",
            "Violent Rush",
            "Rivalry"
        ],
        "weightkg": 925,
        "types": [
            "Normal",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sawsbuck"
        ]
    },
    "Deerling Winter": {
        "id": 585,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 50,
            "sa": 40,
            "sd": 50,
            "sp": 75
        },
        "abilities": [
            "Chlorophyll",
            "Adaptability",
            "Serene Grace"
        ],
        "innates": [
            "Overgrow",
            "Violent Rush",
            "Sap Sipper"
        ],
        "weightkg": 195,
        "types": [
            "Normal",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Deerling"
        ],
        "nfe": true
    },
    "Sawsbuck Winter": {
        "id": 586,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 70,
            "sa": 60,
            "sd": 70,
            "sp": 95
        },
        "abilities": [
            "Adaptability",
            "Serene Grace",
            "Chloroplast"
        ],
        "innates": [
            "Mighty Horn",
            "Violent Rush",
            "Rivalry"
        ],
        "weightkg": 925,
        "types": [
            "Normal",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sawsbuck"
        ]
    },
    "Emolga": {
        "id": 587,
        "bs": {
            "hp": 65,
            "at": 40,
            "df": 60,
            "sa": 110,
            "sd": 75,
            "sp": 125
        },
        "abilities": [
            "Generator",
            "Gluttony",
            "Electrocytes"
        ],
        "innates": [
            "Static",
            "Motor Drive",
            "Aerodynamics"
        ],
        "weightkg": 50,
        "types": [
            "Electric",
            "Flying"
        ],
        "genderR": 127
    },
    "Karrablast": {
        "id": 588,
        "bs": {
            "hp": 50,
            "at": 75,
            "df": 45,
            "sa": 40,
            "sd": 45,
            "sp": 60
        },
        "abilities": [
            "No Guard",
            "Hydration",
            "Unburden"
        ],
        "innates": [
            "Swarm",
            "Shed Skin",
            "Sticky Hold"
        ],
        "weightkg": 59,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Escavalier": {
        "id": 589,
        "bs": {
            "hp": 70,
            "at": 135,
            "df": 105,
            "sa": 60,
            "sd": 105,
            "sp": 60
        },
        "abilities": [
            "No Guard",
            "Overcoat",
            "Full Metal Body"
        ],
        "innates": [
            "Swarm",
            "Shell Armor",
            "Speed Boost"
        ],
        "weightkg": 330,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 127
    },
    "Foongus": {
        "id": 590,
        "bs": {
            "hp": 69,
            "at": 60,
            "df": 60,
            "sa": 60,
            "sd": 70,
            "sp": 15
        },
        "abilities": [
            "Infiltrator",
            "Mycelium Might",
            "Adaptability"
        ],
        "innates": [
            "Regenerator",
            "Effect Spore",
            "Dry Skin"
        ],
        "weightkg": 10,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Amoonguss": {
        "id": 591,
        "bs": {
            "hp": 114,
            "at": 85,
            "df": 85,
            "sa": 85,
            "sd": 95,
            "sp": 30
        },
        "abilities": [
            "Infiltrator",
            "Mycelium Might",
            "Adaptability"
        ],
        "innates": [
            "Regenerator",
            "Effect Spore",
            "Dry Skin"
        ],
        "weightkg": 105,
        "types": [
            "Grass",
            "Poison"
        ],
        "genderR": 127
    },
    "Frillish": {
        "id": 592,
        "bs": {
            "hp": 75,
            "at": 40,
            "df": 50,
            "sa": 65,
            "sd": 85,
            "sp": 40
        },
        "abilities": [
            "Low Visibility",
            "Clear Body",
            "Immunity"
        ],
        "innates": [
            "Water Absorb",
            "Cursed Body",
            "Poison Touch"
        ],
        "weightkg": 330,
        "types": [
            "Water",
            "Ghost"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Jellicent": {
        "id": 593,
        "bs": {
            "hp": 120,
            "at": 60,
            "df": 70,
            "sa": 85,
            "sd": 105,
            "sp": 60
        },
        "abilities": [
            "Low Visibility",
            "Clear Body",
            "Immunity"
        ],
        "innates": [
            "Water Bubble",
            "Soul Eater",
            "Poison Touch"
        ],
        "weightkg": 1350,
        "types": [
            "Water",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Jellicent Mega"
        ]
    },
    "Alomomola": {
        "id": 594,
        "bs": {
            "hp": 165,
            "at": 75,
            "df": 80,
            "sa": 60,
            "sd": 45,
            "sp": 65
        },
        "abilities": [
            "Healer",
            "Natural Cure",
            "Water Veil"
        ],
        "innates": [
            "Wonder Skin",
            "Regenerator",
            "Self Sufficient"
        ],
        "weightkg": 316,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Joltik": {
        "id": 595,
        "bs": {
            "hp": 50,
            "at": 47,
            "df": 50,
            "sa": 64,
            "sd": 50,
            "sp": 65
        },
        "abilities": [
            "Predator",
            "Unnerve",
            "Spider Lair"
        ],
        "innates": [
            "Opportunist",
            "Swarm",
            "Compound Eyes"
        ],
        "weightkg": 6,
        "types": [
            "Bug",
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Galvantula": {
        "id": 596,
        "bs": {
            "hp": 70,
            "at": 77,
            "df": 60,
            "sa": 107,
            "sd": 60,
            "sp": 108
        },
        "abilities": [
            "Short Circuit",
            "Subdue",
            "Spider Lair"
        ],
        "innates": [
            "Merciless",
            "Technician",
            "Compound Eyes"
        ],
        "weightkg": 143,
        "types": [
            "Bug",
            "Electric"
        ],
        "genderR": 127
    },
    "Ferroseed": {
        "id": 597,
        "bs": {
            "hp": 44,
            "at": 50,
            "df": 91,
            "sa": 24,
            "sd": 86,
            "sp": 10
        },
        "abilities": [
            "Impenetrable",
            "Bulletproof",
            "Sticky Hold"
        ],
        "innates": [
            "Iron Barbs",
            "Let's Roll",
            "Battle Armor"
        ],
        "weightkg": 188,
        "types": [
            "Grass",
            "Steel"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Ferrothorn": {
        "id": 598,
        "bs": {
            "hp": 74,
            "at": 94,
            "df": 131,
            "sa": 54,
            "sd": 116,
            "sp": 20
        },
        "abilities": [
            "Impenetrable",
            "Rough Skin",
            "Fort Knox"
        ],
        "innates": [
            "Iron Barbs",
            "Let's Roll",
            "Battle Armor"
        ],
        "weightkg": 1100,
        "types": [
            "Grass",
            "Steel"
        ],
        "genderR": 127
    },
    "Klink": {
        "id": 599,
        "bs": {
            "hp": 40,
            "at": 55,
            "df": 70,
            "sa": 55,
            "sd": 60,
            "sp": 50
        },
        "abilities": [
            "Steelworker",
            "Electro Surge",
            "Galvanize"
        ],
        "innates": [
            "Multi Headed",
            "Sturdy",
            "Full Metal Body"
        ],
        "weightkg": 210,
        "types": [
            "Steel"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Klang": {
        "id": 600,
        "bs": {
            "hp": 60,
            "at": 80,
            "df": 95,
            "sa": 80,
            "sd": 85,
            "sp": 70
        },
        "abilities": [
            "Steelworker",
            "Electro Surge",
            "Galvanize"
        ],
        "innates": [
            "Multi Headed",
            "Sturdy",
            "Full Metal Body"
        ],
        "weightkg": 510,
        "types": [
            "Steel"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Klinklang": {
        "id": 601,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 115,
            "sa": 100,
            "sd": 85,
            "sp": 90
        },
        "abilities": [
            "Technician",
            "Electro Surge",
            "Impenetrable"
        ],
        "innates": [
            "Multi Headed",
            "Sturdy",
            "Steelworker"
        ],
        "weightkg": 810,
        "types": [
            "Steel"
        ],
        "genderR": 2
    },
    "Tynamo": {
        "id": 602,
        "bs": {
            "hp": 35,
            "at": 65,
            "df": 50,
            "sa": 55,
            "sd": 50,
            "sp": 60
        },
        "abilities": [
            "Volt Absorb",
            "Damp",
            "Aquatic"
        ],
        "innates": [
            "Levitate",
            "Generator",
            "Water Veil"
        ],
        "weightkg": 3,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Eelektrik": {
        "id": 603,
        "bs": {
            "hp": 65,
            "at": 85,
            "df": 70,
            "sa": 75,
            "sd": 70,
            "sp": 40
        },
        "abilities": [
            "Electrocytes",
            "Damp",
            "Aquatic"
        ],
        "innates": [
            "Levitate",
            "Shocking Jaws",
            "Coil Up"
        ],
        "weightkg": 220,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Eelektross": {
        "id": 604,
        "bs": {
            "hp": 85,
            "at": 115,
            "df": 90,
            "sa": 105,
            "sd": 90,
            "sp": 50
        },
        "abilities": [
            "Predator",
            "Nosferatu",
            "Damp"
        ],
        "innates": [
            "Levitate",
            "Electrocytes",
            "Artillery"
        ],
        "weightkg": 805,
        "types": [
            "Electric",
            "Water"
        ],
        "genderR": 127
    },
    "Elgyem": {
        "id": 605,
        "bs": {
            "hp": 65,
            "at": 55,
            "df": 63,
            "sa": 93,
            "sd": 55,
            "sp": 20
        },
        "abilities": [
            "Neuroforce",
            "Twist. Dimension",
            "North Wind"
        ],
        "innates": [
            "Stall",
            "Psychic Mind",
            "Levitate"
        ],
        "weightkg": 90,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Beheeyem": {
        "id": 606,
        "bs": {
            "hp": 75,
            "at": 105,
            "df": 105,
            "sa": 141,
            "sd": 95,
            "sp": 30
        },
        "abilities": [
            "Tinted Lens",
            "Twist. Dimension",
            "Telekinetic"
        ],
        "innates": [
            "Analytic",
            "Pressure",
            "Neuroforce"
        ],
        "weightkg": 345,
        "types": [
            "Psychic"
        ],
        "genderR": 127
    },
    "Litwick": {
        "id": 607,
        "bs": {
            "hp": 50,
            "at": 30,
            "df": 55,
            "sa": 75,
            "sd": 55,
            "sp": 40
        },
        "abilities": [
            "Flame Body",
            "Ethereal Rush",
            "Haunted Spirit"
        ],
        "innates": [
            "Flash Fire",
            "Soul Eater",
            "Illuminate"
        ],
        "weightkg": 31,
        "types": [
            "Ghost",
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Lampent": {
        "id": 608,
        "bs": {
            "hp": 60,
            "at": 40,
            "df": 60,
            "sa": 95,
            "sd": 60,
            "sp": 55
        },
        "abilities": [
            "Flash Fire",
            "Ethereal Rush",
            "Haunted Spirit"
        ],
        "innates": [
            "Levitate",
            "Soul Eater",
            "Illuminate"
        ],
        "weightkg": 130,
        "types": [
            "Ghost",
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Chandelure": {
        "id": 609,
        "bs": {
            "hp": 80,
            "at": 55,
            "df": 90,
            "sa": 145,
            "sd": 90,
            "sp": 80
        },
        "abilities": [
            "Flash Fire",
            "Ethereal Rush",
            "Shadow Tag"
        ],
        "innates": [
            "Levitate",
            "Pyromancy",
            "Illuminate"
        ],
        "weightkg": 343,
        "types": [
            "Ghost",
            "Fire"
        ],
        "genderR": 127
    },
    "Axew": {
        "id": 610,
        "bs": {
            "hp": 46,
            "at": 87,
            "df": 60,
            "sa": 30,
            "sd": 40,
            "sp": 57
        },
        "abilities": [
            "Overwhelm",
            "Unaware",
            "Moxie"
        ],
        "innates": [
            "Intimidate",
            "Hyper Cutter",
            "Predator"
        ],
        "weightkg": 180,
        "types": [
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Fraxure": {
        "id": 611,
        "bs": {
            "hp": 66,
            "at": 117,
            "df": 70,
            "sa": 40,
            "sd": 50,
            "sp": 67
        },
        "abilities": [
            "Intimidate",
            "Keen Edge",
            "Moxie"
        ],
        "innates": [
            "Rivalry",
            "Hyper Cutter",
            "Battle Armor"
        ],
        "weightkg": 360,
        "types": [
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Haxorus": {
        "id": 612,
        "bs": {
            "hp": 76,
            "at": 147,
            "df": 90,
            "sa": 60,
            "sd": 70,
            "sp": 97
        },
        "abilities": [
            "Discipline",
            "Keen Edge",
            "Sheer Force"
        ],
        "innates": [
            "Beast Boost",
            "Predator",
            "Intimidate"
        ],
        "weightkg": 1055,
        "types": [
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Haxorus Mega"
        ]
    },
    "Haxorus Mega": {
        "id": 612,
        "bs": {
            "hp": 76,
            "at": 180,
            "df": 110,
            "sa": 82,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Fearmonger",
            "Keen Edge",
            "Mold Breaker"
        ],
        "innates": [
            "Hyper Cutter",
            "Sweeping Edge",
            "Merciless"
        ],
        "weightkg": 1055,
        "types": [
            "Dragon",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Haxorus"
        ]
    },
    "Cubchoo": {
        "id": 613,
        "bs": {
            "hp": 55,
            "at": 80,
            "df": 40,
            "sa": 50,
            "sd": 40,
            "sp": 50
        },
        "abilities": [
            "Snow Cloak",
            "Looter",
            "Tough Claws"
        ],
        "innates": [
            "Guts",
            "Quick Feet",
            "Fur Coat"
        ],
        "weightkg": 85,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Beartic": {
        "id": 614,
        "bs": {
            "hp": 95,
            "at": 120,
            "df": 80,
            "sa": 70,
            "sd": 80,
            "sp": 70
        },
        "abilities": [
            "Guts",
            "Predator",
            "Intimidate"
        ],
        "innates": [
            "Tough Claws",
            "Quick Feet",
            "Fur Coat"
        ],
        "weightkg": 2600,
        "types": [
            "Ice",
            "Fighting"
        ],
        "genderR": 127
    },
    "Polartic": {
        "id": 1031,
        "bs": {
            "hp": 100,
            "at": 145,
            "df": 90,
            "sa": 45,
            "sd": 80,
            "sp": 90
        },
        "abilities": [
            "Guts",
            "Quick Feet",
            "Intimidate"
        ],
        "innates": [
            "Tough Claws",
            "Ice Downfall",
            "Predator"
        ],
        "weightkg": 0,
        "types": [
            "Ice",
            "Fighting"
        ],
        "genderR": 127
    },
    "Polartic Bluemoon": {
        "id": 1031,
        "bs": {
            "hp": 130,
            "at": 145,
            "df": 70,
            "sa": 50,
            "sd": 105,
            "sp": 55
        },
        "abilities": [
            "Sheer Force",
            "Predator",
            "Fearmonger"
        ],
        "innates": [
            "Equinox",
            "Ice Downfall",
            "Last Stand"
        ],
        "weightkg": 0,
        "types": [
            "Ice",
            "Fighting"
        ],
        "genderR": 127
    },
    "Cryogonal": {
        "id": 615,
        "bs": {
            "hp": 80,
            "at": 50,
            "df": 50,
            "sa": 95,
            "sd": 135,
            "sp": 105
        },
        "abilities": [
            "North Wind",
            "Refrigerate",
            "Cryomancy"
        ],
        "innates": [
            "Levitate",
            "Ice Body",
            "Permafrost"
        ],
        "weightkg": 1480,
        "types": [
            "Ice"
        ],
        "genderR": 2
    },
    "Shelmet": {
        "id": 616,
        "bs": {
            "hp": 50,
            "at": 50,
            "df": 85,
            "sa": 65,
            "sd": 65,
            "sp": 25
        },
        "abilities": [
            "Damp",
            "Poison Touch",
            "Clear Body"
        ],
        "innates": [
            "Shell Armor",
            "Swarm",
            "Overcoat"
        ],
        "weightkg": 77,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Accelgor": {
        "id": 617,
        "bs": {
            "hp": 80,
            "at": 105,
            "df": 40,
            "sa": 105,
            "sd": 60,
            "sp": 145
        },
        "abilities": [
            "Momentum",
            "Perfectionist",
            "Unburden"
        ],
        "innates": [
            "Swarm",
            "Poison Touch",
            "Protean"
        ],
        "weightkg": 253,
        "types": [
            "Bug",
            "Dark"
        ],
        "genderR": 127
    },
    "Stunfisk": {
        "id": 618,
        "bs": {
            "hp": 109,
            "at": 66,
            "df": 84,
            "sa": 81,
            "sd": 99,
            "sp": 32
        },
        "abilities": [
            "Arena Trap",
            "Aquatic",
            "Electro Surge"
        ],
        "innates": [
            "Unaware",
            "Static",
            "Dry Skin"
        ],
        "weightkg": 110,
        "types": [
            "Ground",
            "Electric"
        ],
        "genderR": 127,
        "otherFormes": [
            "Stunfisk Galarian"
        ]
    },
    "Stunfisk Galarian": {
        "id": 618,
        "bs": {
            "hp": 109,
            "at": 81,
            "df": 99,
            "sa": 66,
            "sd": 84,
            "sp": 32
        },
        "abilities": [
            "Clap Trap",
            "Ambush",
            "Strong Jaw"
        ],
        "innates": [
            "Mimicry",
            "Scrapyard",
            "Iron Barbs"
        ],
        "weightkg": 110,
        "types": [
            "Ground",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Stunfisk"
        ]
    },
    "Mienfoo": {
        "id": 619,
        "bs": {
            "hp": 45,
            "at": 85,
            "df": 50,
            "sa": 55,
            "sd": 50,
            "sp": 65
        },
        "abilities": [
            "Iron Fist",
            "Limber",
            "Regenerator"
        ],
        "innates": [
            "Inner Focus",
            "Reckless",
            "Speed Force"
        ],
        "weightkg": 200,
        "types": [
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Mienshao": {
        "id": 620,
        "bs": {
            "hp": 65,
            "at": 125,
            "df": 60,
            "sa": 95,
            "sd": 60,
            "sp": 105
        },
        "abilities": [
            "Scrappy",
            "Unburden",
            "Fighting Spirit"
        ],
        "innates": [
            "Combat Specialist",
            "Regenerator",
            "Cheap Tactics"
        ],
        "weightkg": 355,
        "types": [
            "Fighting"
        ],
        "genderR": 127
    },
    "Mienshao Mega": {
        "id": 620,
        "bs": {
            "hp": 65,
            "at": 150,
            "df": 65,
            "sa": 150,
            "sd": 65,
            "sp": 115
        },
        "abilities": [
            "Aerodynamics",
            "Aerodynamics",
            "Aerodynamics"
        ],
        "innates": [
            "Combat Specialist",
            "Regenerator",
            "Qigong"
        ],
        "weightkg": 355,
        "types": [
            "Fighting",
            "Flying"
        ],
        "genderR": 127
    },
    "Druddigon": {
        "id": 621,
        "bs": {
            "hp": 97,
            "at": 120,
            "df": 90,
            "sa": 60,
            "sd": 90,
            "sp": 48
        },
        "abilities": [
            "Impenetrable",
            "Sun Worship",
            "Tough Claws"
        ],
        "innates": [
            "Ambush",
            "Solid Rock",
            "Predator"
        ],
        "weightkg": 1390,
        "types": [
            "Dragon",
            "Rock"
        ],
        "genderR": 127
    },
    "Golett": {
        "id": 622,
        "bs": {
            "hp": 59,
            "at": 84,
            "df": 60,
            "sa": 35,
            "sd": 60,
            "sp": 35
        },
        "abilities": [
            "Power Fists",
            "Shadow Shield",
            "No Guard"
        ],
        "innates": [
            "Vengeance",
            "Power Core",
            "Self Repair"
        ],
        "weightkg": 920,
        "types": [
            "Ground",
            "Ghost"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Golurk": {
        "id": 623,
        "bs": {
            "hp": 89,
            "at": 134,
            "df": 90,
            "sa": 55,
            "sd": 90,
            "sp": 55
        },
        "abilities": [
            "Power Fists",
            "No Guard",
            "Iron Fist"
        ],
        "innates": [
            "Power Core",
            "Shadow Shield",
            "Self Repair"
        ],
        "weightkg": 3300,
        "types": [
            "Ground",
            "Ghost"
        ],
        "genderR": 2
    },
    "Pawniard": {
        "id": 624,
        "bs": {
            "hp": 45,
            "at": 85,
            "df": 70,
            "sa": 40,
            "sd": 40,
            "sp": 60
        },
        "abilities": [
            "Pressure",
            "Defiant",
            "Opportunist"
        ],
        "innates": [
            "Keen Edge",
            "Hyper Cutter",
            "Battle Armor"
        ],
        "weightkg": 102,
        "types": [
            "Dark",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pawniard Redux"
        ],
        "nfe": true
    },
    "Bisharp": {
        "id": 625,
        "bs": {
            "hp": 65,
            "at": 125,
            "df": 100,
            "sa": 60,
            "sd": 70,
            "sp": 70
        },
        "abilities": [
            "Pressure",
            "Defiant",
            "Opportunist"
        ],
        "innates": [
            "Keen Edge",
            "Hyper Cutter",
            "Battle Armor"
        ],
        "weightkg": 700,
        "types": [
            "Dark",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Bisharp Redux"
        ],
        "nfe": true
    },
    "Kingambit": {
        "id": 983,
        "bs": {
            "hp": 100,
            "at": 135,
            "df": 120,
            "sa": 60,
            "sd": 85,
            "sp": 50
        },
        "abilities": [
            "Pressure",
            "Keen Edge",
            "King's Wrath"
        ],
        "innates": [
            "Supreme Overlord",
            "Hyper Cutter",
            "Battle Armor"
        ],
        "weightkg": 1200,
        "types": [
            "Dark",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Kingambit Redux"
        ]
    },
    "Pawniard Redux": {
        "id": 624,
        "bs": {
            "hp": 45,
            "at": 75,
            "df": 65,
            "sa": 40,
            "sd": 40,
            "sp": 75
        },
        "abilities": [
            "Defiant",
            "Technician",
            "Sweeping Edge"
        ],
        "innates": [
            "Keen Edge",
            "Intimidate",
            "Rattled"
        ],
        "weightkg": 102,
        "types": [
            "Fighting",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pawniard"
        ],
        "nfe": true
    },
    "Bisharp Redux": {
        "id": 625,
        "bs": {
            "hp": 75,
            "at": 115,
            "df": 75,
            "sa": 60,
            "sd": 75,
            "sp": 90
        },
        "abilities": [
            "Defiant",
            "Opportunist",
            "Sweeping Edge"
        ],
        "innates": [
            "Keen Edge",
            "Intimidate",
            "Olé!"
        ],
        "weightkg": 700,
        "types": [
            "Fighting",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Bisharp"
        ],
        "nfe": true
    },
    "Kingambit Redux": {
        "id": 983,
        "bs": {
            "hp": 90,
            "at": 125,
            "df": 90,
            "sa": 60,
            "sd": 75,
            "sp": 110
        },
        "abilities": [
            "Defiant",
            "Super Luck",
            "Technician"
        ],
        "innates": [
            "Keen Edge",
            "Intimidate",
            "Olé!"
        ],
        "weightkg": 1200,
        "types": [
            "Fighting",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Kingambit"
        ]
    },
    "Kingambit Mega": {
        "id": 983,
        "bs": {
            "hp": 90,
            "at": 135,
            "df": 100,
            "sa": 85,
            "sd": 105,
            "sp": 135
        },
        "abilities": [
            "Sweeping Edge",
            "Hyper Cutter",
            "Technician"
        ],
        "innates": [
            "Dual Wield",
            "Intimidate",
            "Olé!"
        ],
        "weightkg": 1200,
        "types": [
            "Fighting",
            "Steel"
        ],
        "genderR": 127
    },
    "Bouffalant": {
        "id": 626,
        "bs": {
            "hp": 95,
            "at": 110,
            "df": 105,
            "sa": 40,
            "sd": 125,
            "sp": 55
        },
        "abilities": [
            "Anger Point",
            "Sap Sipper",
            "Reckless"
        ],
        "innates": [
            "Violent Rush",
            "Fur Coat",
            "Rock Head"
        ],
        "weightkg": 946,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Rufflet": {
        "id": 627,
        "bs": {
            "hp": 70,
            "at": 83,
            "df": 50,
            "sa": 37,
            "sd": 50,
            "sp": 60
        },
        "abilities": [
            "Sheer Force",
            "Defiant",
            "Rivalry"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Opportunist"
        ],
        "weightkg": 105,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 0,
        "nfe": true
    },
    "Braviary": {
        "id": 628,
        "bs": {
            "hp": 100,
            "at": 123,
            "df": 75,
            "sa": 57,
            "sd": 75,
            "sp": 80
        },
        "abilities": [
            "Sheer Force",
            "Giant Wings",
            "Gale Wings"
        ],
        "innates": [
            "Flock",
            "Defiant",
            "Big Pecks"
        ],
        "weightkg": 410,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 0,
        "otherFormes": [
            "Braviary Hisuian"
        ]
    },
    "Braviary Hisuian": {
        "id": 628,
        "bs": {
            "hp": 100,
            "at": 57,
            "df": 75,
            "sa": 123,
            "sd": 75,
            "sp": 80
        },
        "abilities": [
            "Huge Power",
            "North Wind",
            "Ethereal Rush"
        ],
        "innates": [
            "Psychic Mind",
            "Giant Wings",
            "Resonance"
        ],
        "weightkg": 410,
        "types": [
            "Psychic",
            "Flying"
        ],
        "genderR": 0,
        "otherFormes": [
            "Braviary"
        ]
    },
    "Vullaby": {
        "id": 629,
        "bs": {
            "hp": 70,
            "at": 55,
            "df": 75,
            "sa": 45,
            "sd": 65,
            "sp": 60
        },
        "abilities": [
            "Big Pecks",
            "Weak Armor",
            "Overcoat"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Scavenger"
        ],
        "weightkg": 90,
        "types": [
            "Dark",
            "Flying"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Mandibuzz": {
        "id": 630,
        "bs": {
            "hp": 110,
            "at": 65,
            "df": 105,
            "sa": 55,
            "sd": 95,
            "sp": 80
        },
        "abilities": [
            "Big Pecks",
            "Giant Wings",
            "Air Blower"
        ],
        "innates": [
            "Overcoat",
            "Stamina",
            "Scavenger"
        ],
        "weightkg": 395,
        "types": [
            "Dark",
            "Flying"
        ],
        "genderR": 254
    },
    "Heatmor": {
        "id": 631,
        "bs": {
            "hp": 85,
            "at": 97,
            "df": 96,
            "sa": 85,
            "sd": 96,
            "sp": 65
        },
        "abilities": [
            "Immolate",
            "Gluttony",
            "Steelworker"
        ],
        "innates": [
            "White Smoke",
            "Tough Claws",
            "Unaware"
        ],
        "weightkg": 580,
        "types": [
            "Fire",
            "Steel"
        ],
        "genderR": 127
    },
    "Durant": {
        "id": 632,
        "bs": {
            "hp": 68,
            "at": 109,
            "df": 112,
            "sa": 48,
            "sd": 78,
            "sp": 109
        },
        "abilities": [
            "Hustle",
            "Looter",
            "Steelworker"
        ],
        "innates": [
            "Swarm",
            "Strong Jaw",
            "Compound Eyes"
        ],
        "weightkg": 330,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 127
    },
    "Deino": {
        "id": 633,
        "bs": {
            "hp": 52,
            "at": 45,
            "df": 50,
            "sa": 65,
            "sd": 50,
            "sp": 38
        },
        "abilities": [
            "Hustle",
            "Sheer Force",
            "Moody"
        ],
        "innates": [
            "Hyper Aggressive",
            "Predator",
            "Scare"
        ],
        "weightkg": 173,
        "types": [
            "Dark",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Deino Redux"
        ],
        "nfe": true
    },
    "Zweilous": {
        "id": 634,
        "bs": {
            "hp": 72,
            "at": 65,
            "df": 70,
            "sa": 85,
            "sd": 70,
            "sp": 58
        },
        "abilities": [
            "Hustle",
            "Sheer Force",
            "Moody"
        ],
        "innates": [
            "Multi Headed",
            "Gluttony",
            "Predator"
        ],
        "weightkg": 500,
        "types": [
            "Dark",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Zweilous Redux"
        ],
        "nfe": true
    },
    "Hydreigon": {
        "id": 635,
        "bs": {
            "hp": 92,
            "at": 105,
            "df": 90,
            "sa": 125,
            "sd": 90,
            "sp": 98
        },
        "abilities": [
            "Scare",
            "Mega Launcher",
            "Beast Boost"
        ],
        "innates": [
            "Multi Headed",
            "Levitate",
            "Predator"
        ],
        "weightkg": 1600,
        "types": [
            "Dark",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Hydreigon Redux"
        ]
    },
    "Deino Redux": {
        "id": 633,
        "bs": {
            "hp": 52,
            "at": 45,
            "df": 50,
            "sa": 65,
            "sd": 50,
            "sp": 38
        },
        "abilities": [
            "Mega Launcher",
            "Pixilate",
            "Cute Charm"
        ],
        "innates": [
            "Celestial Blessing",
            "Tangling Hair",
            "Misty Surge"
        ],
        "weightkg": 173,
        "types": [
            "Fairy",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Deino"
        ],
        "nfe": true
    },
    "Zweilous Redux": {
        "id": 634,
        "bs": {
            "hp": 72,
            "at": 65,
            "df": 70,
            "sa": 85,
            "sd": 70,
            "sp": 58
        },
        "abilities": [
            "Mega Launcher",
            "Pixilate",
            "Cute Charm"
        ],
        "innates": [
            "Celestial Blessing",
            "Multi Headed",
            "Misty Surge"
        ],
        "weightkg": 500,
        "types": [
            "Fairy",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Zweilous"
        ],
        "nfe": true
    },
    "Hydreigon Redux": {
        "id": 635,
        "bs": {
            "hp": 100,
            "at": 105,
            "df": 100,
            "sa": 125,
            "sd": 100,
            "sp": 70
        },
        "abilities": [
            "Mega Launcher",
            "Serene Grace",
            "Cute Charm"
        ],
        "innates": [
            "Celestial Blessing",
            "Multi Headed",
            "Misty Surge"
        ],
        "weightkg": 1600,
        "types": [
            "Fairy",
            "Dragon"
        ],
        "genderR": 127,
        "otherFormes": [
            "Hydreigon"
        ]
    },
    "Hydreigon Mega": {
        "id": 635,
        "bs": {
            "hp": 100,
            "at": 105,
            "df": 130,
            "sa": 165,
            "sd": 130,
            "sp": 70
        },
        "abilities": [
            "Mega Launcher",
            "Serene Grace",
            "Cute Charm"
        ],
        "innates": [
            "Eternal Blessing",
            "Multi Headed",
            "Radiance"
        ],
        "weightkg": 1600,
        "types": [
            "Fairy",
            "Dragon"
        ],
        "genderR": 127
    },
     "Hydreigon Mega Redux": {
        "id": 635,
        "bs": {
            "hp": 100,
            "at": 105,
            "df": 130,
            "sa": 165,
            "sd": 130,
            "sp": 70
        },
        "abilities": [
            "Mega Launcher",
            "Serene Grace",
            "Cute Charm"
        ],
        "innates": [
            "Eternal Blessing",
            "Multi Headed",
            "Radiance"
        ],
        "weightkg": 1600,
        "types": [
            "Fairy",
            "Dragon"
        ],
        "genderR": 127
    },
    "Larvesta": {
        "id": 636,
        "bs": {
            "hp": 55,
            "at": 50,
            "df": 55,
            "sa": 85,
            "sd": 55,
            "sp": 60
        },
        "abilities": [
            "Powder Burst",
            "Flash Fire",
            "Drought"
        ],
        "innates": [
            "Swarm",
            "Shield Dust",
            "Blaze"
        ],
        "weightkg": 288,
        "types": [
            "Bug",
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Volcarona": {
        "id": 637,
        "bs": {
            "hp": 85,
            "at": 60,
            "df": 65,
            "sa": 135,
            "sd": 105,
            "sp": 100
        },
        "abilities": [
            "Compound Eyes",
            "Flash Fire",
            "Drought"
        ],
        "innates": [
            "Swarm",
            "Majestic Moth",
            "Levitate"
        ],
        "weightkg": 460,
        "types": [
            "Bug",
            "Fire"
        ],
        "genderR": 127
    },
    "Cobalion": {
        "id": 638,
        "bs": {
            "hp": 91,
            "at": 90,
            "df": 129,
            "sa": 90,
            "sd": 72,
            "sp": 108
        },
        "abilities": [
            "Justified",
            "Avenger",
            "Steelworker"
        ],
        "innates": [
            "Keen Edge",
            "Sweeping Edge",
            "Mirror Armor"
        ],
        "weightkg": 2500,
        "types": [
            "Steel",
            "Fighting"
        ],
        "genderR": 2
    },
    "Terrakion": {
        "id": 639,
        "bs": {
            "hp": 91,
            "at": 129,
            "df": 90,
            "sa": 72,
            "sd": 90,
            "sp": 108
        },
        "abilities": [
            "Justified",
            "Avenger",
            "Rockhard Will"
        ],
        "innates": [
            "Keen Edge",
            "Mold Breaker",
            "Solid Rock"
        ],
        "weightkg": 2600,
        "types": [
            "Rock",
            "Fighting"
        ],
        "genderR": 2
    },
    "Virizion": {
        "id": 640,
        "bs": {
            "hp": 91,
            "at": 90,
            "df": 72,
            "sa": 90,
            "sd": 129,
            "sp": 108
        },
        "abilities": [
            "Justified",
            "Avenger",
            "Forest Rage"
        ],
        "innates": [
            "Mighty Horn",
            "Absorbant",
            "Keen Edge"
        ],
        "weightkg": 2000,
        "types": [
            "Grass",
            "Fighting"
        ],
        "genderR": 2
    },
    "Tornadus": {
        "id": 641,
        "bs": {
            "hp": 79,
            "at": 115,
            "df": 70,
            "sa": 125,
            "sd": 80,
            "sp": 111
        },
        "abilities": [
            "Airborne",
            "Terminal Velocity",
            "Speed Boost"
        ],
        "innates": [
            "Prankster",
            "Weather Control",
            "Keen Eye"
        ],
        "weightkg": 630,
        "types": [
            "Flying"
        ],
        "genderR": 0,
        "otherFormes": [
            "Tornadus Therian"
        ],
        "nfe": true
    },
    "Tornadus Therian": {
        "id": 641,
        "bs": {
            "hp": 79,
            "at": 100,
            "df": 80,
            "sa": 110,
            "sd": 90,
            "sp": 121
        },
        "abilities": [
            "Airborne",
            "Terminal Velocity",
            "Speed Boost"
        ],
        "innates": [
            "Regenerator",
            "Weather Control",
            "Keen Eye"
        ],
        "weightkg": 630,
        "types": [
            "Flying"
        ],
        "genderR": 0,
        "otherFormes": [
            "Tornadus"
        ]
    },
    "Thundurus": {
        "id": 642,
        "bs": {
            "hp": 79,
            "at": 115,
            "df": 70,
            "sa": 125,
            "sd": 80,
            "sp": 111
        },
        "abilities": [
            "Transistor",
            "Overcharge",
            "Thundercall"
        ],
        "innates": [
            "Teravolt",
            "Weather Control",
            "Volt Absorb"
        ],
        "weightkg": 610,
        "types": [
            "Electric",
            "Flying"
        ],
        "genderR": 0,
        "otherFormes": [
            "Thundurus Therian"
        ],
        "nfe": true
    },
    "Thundurus Therian": {
        "id": 642,
        "bs": {
            "hp": 79,
            "at": 105,
            "df": 70,
            "sa": 145,
            "sd": 80,
            "sp": 101
        },
        "abilities": [
            "Transistor",
            "Overcharge",
            "Thundercall"
        ],
        "innates": [
            "Teravolt",
            "Weather Control",
            "Volt Absorb"
        ],
        "weightkg": 610,
        "types": [
            "Electric",
            "Flying"
        ],
        "genderR": 0,
        "otherFormes": [
            "Thundurus"
        ]
    },
    "Reshiram": {
        "id": 643,
        "bs": {
            "hp": 100,
            "at": 120,
            "df": 100,
            "sa": 150,
            "sd": 120,
            "sp": 90
        },
        "abilities": [
            "Beast Boost",
            "Immolate",
            "Drought"
        ],
        "innates": [
            "Turboblaze",
            "Combustion",
            "White Smoke"
        ],
        "weightkg": 3300,
        "types": [
            "Dragon",
            "Fire"
        ],
        "genderR": 2
    },
    "Zekrom": {
        "id": 644,
        "bs": {
            "hp": 100,
            "at": 150,
            "df": 120,
            "sa": 120,
            "sd": 100,
            "sp": 90
        },
        "abilities": [
            "Beast Boost",
            "Galvanize",
            "Electro Surge"
        ],
        "innates": [
            "Teravolt",
            "Transistor",
            "Overwhelm"
        ],
        "weightkg": 3450,
        "types": [
            "Dragon",
            "Electric"
        ],
        "genderR": 2
    },
    "Landorus": {
        "id": 645,
        "bs": {
            "hp": 89,
            "at": 125,
            "df": 90,
            "sa": 115,
            "sd": 80,
            "sp": 101
        },
        "abilities": [
            "Sheer Force",
            "Moxie",
            "Sand Force"
        ],
        "innates": [
            "Sand Stream",
            "Weather Control",
            "Intimidate"
        ],
        "weightkg": 680,
        "types": [
            "Ground",
            "Flying"
        ],
        "genderR": 0,
        "otherFormes": [
            "Landorus Therian"
        ],
        "nfe": true
    },
    "Landorus Therian": {
        "id": 645,
        "bs": {
            "hp": 89,
            "at": 145,
            "df": 90,
            "sa": 105,
            "sd": 80,
            "sp": 91
        },
        "abilities": [
            "Sheer Force",
            "Moxie",
            "Sand Force"
        ],
        "innates": [
            "Sand Stream",
            "Weather Control",
            "Intimidate"
        ],
        "weightkg": 680,
        "types": [
            "Ground",
            "Flying"
        ],
        "genderR": 0,
        "otherFormes": [
            "Landorus"
        ]
    },
    "Kyurem": {
        "id": 646,
        "bs": {
            "hp": 125,
            "at": 130,
            "df": 90,
            "sa": 130,
            "sd": 90,
            "sp": 95
        },
        "abilities": [
            "Beast Boost",
            "Refrigerate",
            "Snow Warning"
        ],
        "innates": [
            "Ice Scales",
            "Permafrost",
            "Whiteout"
        ],
        "weightkg": 3250,
        "types": [
            "Dragon",
            "Ice"
        ],
        "genderR": 2,
        "otherFormes": [
            "Kyurem White",
            "Kyurem Black"
        ]
    },
    "Kyurem White": {
        "id": 646,
        "bs": {
            "hp": 125,
            "at": 120,
            "df": 90,
            "sa": 170,
            "sd": 100,
            "sp": 95
        },
        "abilities": [
            "Beast Boost",
            "Refrigerate",
            "Snow Warning"
        ],
        "innates": [
            "Turboblaze",
            "Permafrost",
            "Whiteout"
        ],
        "weightkg": 3250,
        "types": [
            "Dragon",
            "Ice"
        ],
        "genderR": 2,
        "otherFormes": [
            "Kyurem"
        ]
    },
    "Kyurem Black": {
        "id": 646,
        "bs": {
            "hp": 125,
            "at": 170,
            "df": 100,
            "sa": 120,
            "sd": 90,
            "sp": 95
        },
        "abilities": [
            "Beast Boost",
            "Refrigerate",
            "Snow Warning"
        ],
        "innates": [
            "Teravolt",
            "Permafrost",
            "Multiscale"
        ],
        "weightkg": 3250,
        "types": [
            "Dragon",
            "Ice"
        ],
        "genderR": 2,
        "otherFormes": [
            "Kyurem"
        ]
    },
    "Keldeo": {
        "id": 647,
        "bs": {
            "hp": 91,
            "at": 62,
            "df": 95,
            "sa": 129,
            "sd": 95,
            "sp": 108
        },
        "abilities": [
            "Justified",
            "Avenger",
            "Mystic Blades"
        ],
        "innates": [
            "Steadfast",
            "Field Explorer",
            "Overcoat"
        ],
        "weightkg": 485,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 2,
        "otherFormes": [
            "Keldeo Resolute"
        ],
        "nfe": true
    },
    "Keldeo Resolute": {
        "id": 647,
        "bs": {
            "hp": 91,
            "at": 117,
            "df": 70,
            "sa": 129,
            "sd": 70,
            "sp": 123
        },
        "abilities": [
            "Blade's Essence",
            "-------",
            "-------"
        ],
        "innates": [
            "Fighter",
            "Arcane Force",
            "Riptide"
        ],
        "weightkg": 485,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 2,
        "otherFormes": [
            "Keldeo"
        ]
    },
    "Meloetta": {
        "id": 648,
        "bs": {
            "hp": 100,
            "at": 77,
            "df": 77,
            "sa": 128,
            "sd": 128,
            "sp": 90
        },
        "abilities": [
            "Queenly Majesty",
            "Competitive",
            "Sage Power"
        ],
        "innates": [
            "Serene Grace",
            "Amplifier",
            "Prankster"
        ],
        "weightkg": 65,
        "types": [
            "Normal",
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Meloetta Pirouette"
        ]
    },
    "Meloetta Pirouette": {
        "id": 648,
        "bs": {
            "hp": 100,
            "at": 128,
            "df": 90,
            "sa": 77,
            "sd": 77,
            "sp": 128
        },
        "abilities": [
            "Egoist",
            "Defiant",
            "Queenly Majesty"
        ],
        "innates": [
            "Serene Grace",
            "Speed Force",
            "Combat Specialist"
        ],
        "weightkg": 65,
        "types": [
            "Normal",
            "Fighting"
        ],
        "genderR": 2,
        "otherFormes": [
            "Meloetta"
        ]
    },
    "Genesect": {
        "id": 649,
        "bs": {
            "hp": 71,
            "at": 120,
            "df": 95,
            "sa": 120,
            "sd": 95,
            "sp": 99
        },
        "abilities": [
            "Download",
            "Fatal Precision",
            "Sighting System"
        ],
        "innates": [
            "Mega Launcher",
            "Predator",
            "Full Metal Body"
        ],
        "weightkg": 825,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 2,
        "otherFormes": [
            "Genesect Douse Drive",
            "Genesect Shock Drive",
            "Genesect Burn Drive",
            "Genesect Chill Drive"
        ]
    },
    "Genesect Douse Drive": {
        "id": 649,
        "bs": {
            "hp": 71,
            "at": 120,
            "df": 95,
            "sa": 120,
            "sd": 95,
            "sp": 99
        },
        "abilities": [
            "Download",
            "Fatal Precision",
            "Sighting System"
        ],
        "innates": [
            "Full Metal Body",
            "Predator",
            "Mega Launcher"
        ],
        "weightkg": 825,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 2,
        "otherFormes": [
            "Genesect"
        ]
    },
    "Genesect Shock Drive": {
        "id": 649,
        "bs": {
            "hp": 71,
            "at": 120,
            "df": 95,
            "sa": 120,
            "sd": 95,
            "sp": 99
        },
        "abilities": [
            "Download",
            "Fatal Precision",
            "Sighting System"
        ],
        "innates": [
            "Full Metal Body",
            "Predator",
            "Mega Launcher"
        ],
        "weightkg": 825,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 2,
        "otherFormes": [
            "Genesect"
        ]
    },
    "Genesect Burn Drive": {
        "id": 649,
        "bs": {
            "hp": 71,
            "at": 120,
            "df": 95,
            "sa": 120,
            "sd": 95,
            "sp": 99
        },
        "abilities": [
            "Download",
            "Fatal Precision",
            "Sighting System"
        ],
        "innates": [
            "Full Metal Body",
            "Predator",
            "Mega Launcher"
        ],
        "weightkg": 825,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 2,
        "otherFormes": [
            "Genesect"
        ]
    },
    "Genesect Chill Drive": {
        "id": 649,
        "bs": {
            "hp": 71,
            "at": 120,
            "df": 95,
            "sa": 120,
            "sd": 95,
            "sp": 99
        },
        "abilities": [
            "Download",
            "Fatal Precision",
            "Sighting System"
        ],
        "innates": [
            "Full Metal Body",
            "Predator",
            "Mega Launcher"
        ],
        "weightkg": 825,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 2,
        "otherFormes": [
            "Genesect"
        ]
    },
    "Chespin": {
        "id": 650,
        "bs": {
            "hp": 56,
            "at": 68,
            "df": 65,
            "sa": 48,
            "sd": 45,
            "sp": 38
        },
        "abilities": [
            "Let's Roll",
            "Stamina",
            "Rough Skin"
        ],
        "innates": [
            "Overgrow",
            "Shell Armor",
            "Bulletproof"
        ],
        "weightkg": 90,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Quilladin": {
        "id": 651,
        "bs": {
            "hp": 66,
            "at": 83,
            "df": 95,
            "sa": 56,
            "sd": 63,
            "sp": 57
        },
        "abilities": [
            "Let's Roll",
            "Stamina",
            "Rough Skin"
        ],
        "innates": [
            "Overgrow",
            "Shell Armor",
            "Bulletproof"
        ],
        "weightkg": 290,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Chesnaught": {
        "id": 652,
        "bs": {
            "hp": 88,
            "at": 107,
            "df": 122,
            "sa": 74,
            "sd": 80,
            "sp": 64
        },
        "abilities": [
            "Let's Roll",
            "Stamina",
            "Bulletproof"
        ],
        "innates": [
            "Overgrow",
            "Shell Armor",
            "Loose Quills"
        ],
        "weightkg": 900,
        "types": [
            "Grass",
            "Fighting"
        ],
        "genderR": 127
    },
    "Chesnaught Battle Bond": {
        "id": 652,
        "bs": {
            "hp": 88,
            "at": 107,
            "df": 122,
            "sa": 74,
            "sd": 80,
            "sp": 64
        },
        "abilities": [
            "Loose Quills",
            "Stamina",
            "Spike Armor"
        ],
        "innates": [
            "Overgrow",
            "Shell Armor",
            "Battle Bond"
        ],
        "weightkg": 900,
        "types": [
            "Grass",
            "Fighting"
        ],
        "genderR": 127
    },
    "Chesnaught-Clemont": {
        "id": 652,
        "bs": {
            "hp": 88,
            "at": 128,
            "df": 152,
            "sa": 98,
            "sd": 92,
            "sp": 87
        },
        "abilities": [
            "Faraday Cage",
            "Galvanize",
            "Self Repair"
        ],
        "innates": [
            "Forest Rage",
            "Teravolt",
            "Battle Bond"
        ],
        "weightkg": 900,
        "types": [
            "Grass",
            "Fighting"
        ],
        "genderR": 127
    },
    "Fennekin": {
        "id": 653,
        "bs": {
            "hp": 40,
            "at": 45,
            "df": 40,
            "sa": 68,
            "sd": 60,
            "sp": 67
        },
        "abilities": [
            "Immolate",
            "Inner Focus",
            "Magic Guard"
        ],
        "innates": [
            "Blaze",
            "Pyromancy",
            "Psychic Mind"
        ],
        "weightkg": 94,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Braixen": {
        "id": 654,
        "bs": {
            "hp": 59,
            "at": 59,
            "df": 58,
            "sa": 91,
            "sd": 70,
            "sp": 83
        },
        "abilities": [
            "Immolate",
            "Inner Focus",
            "Magic Guard"
        ],
        "innates": [
            "Blaze",
            "Pyromancy",
            "Psychic Mind"
        ],
        "weightkg": 145,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Delphox": {
        "id": 655,
        "bs": {
            "hp": 75,
            "at": 69,
            "df": 72,
            "sa": 114,
            "sd": 100,
            "sp": 105
        },
        "abilities": [
            "Emanate",
            "Forewarn",
            "Mystic Power"
        ],
        "innates": [
            "Blaze",
            "Telekinetic",
            "Magic Guard"
        ],
        "weightkg": 390,
        "types": [
            "Fire",
            "Psychic"
        ],
        "genderR": 127
    },
    "Delphox Battle Bond": {
        "id": 655,
        "bs": {
            "hp": 75,
            "at": 69,
            "df": 72,
            "sa": 114,
            "sd": 100,
            "sp": 105
        },
        "abilities": [
            "Adaptability",
            "Pyromancy",
            "Subdue"
        ],
        "innates": [
            "Blaze",
            "Flame Shield",
            "Battle Bond"
        ],
        "weightkg": 390,
        "types": [
            "Fire",
            "Psychic"
        ],
        "genderR": 127
    },
    "Delphox-Serena": {
        "id": 655,
        "bs": {
            "hp": 75,
            "at": 96,
            "df": 95,
            "sa": 134,
            "sd": 120,
            "sp": 125
        },
        "abilities": [
            "Adaptability",
            "Pyromancy",
            "Subdue"
        ],
        "innates": [
            "Hellblaze",
            "Soothsayer",
            "Battle Bond"
        ],
        "weightkg": 390,
        "types": [
            "Fire",
            "Psychic"
        ],
        "genderR": 127
    },
    "Froakie": {
        "id": 656,
        "bs": {
            "hp": 41,
            "at": 62,
            "df": 40,
            "sa": 62,
            "sd": 44,
            "sp": 71
        },
        "abilities": [
            "Dust Cloud",
            "Aerodynamics",
            "Protean"
        ],
        "innates": [
            "Torrent",
            "Skill Link",
            "Long Reach"
        ],
        "weightkg": 70,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Frogadier": {
        "id": 657,
        "bs": {
            "hp": 54,
            "at": 78,
            "df": 52,
            "sa": 83,
            "sd": 56,
            "sp": 97
        },
        "abilities": [
            "Fatal Precision",
            "Aerodynamics",
            "Protean"
        ],
        "innates": [
            "Torrent",
            "Skill Link",
            "Long Reach"
        ],
        "weightkg": 109,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Greninja": {
        "id": 658,
        "bs": {
            "hp": 72,
            "at": 100,
            "df": 67,
            "sa": 103,
            "sd": 71,
            "sp": 122
        },
        "abilities": [
            "Fatal Precision",
            "Speed Boost",
            "Protean"
        ],
        "innates": [
            "Torrent",
            "Skill Link",
            "Long Reach"
        ],
        "weightkg": 400,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Greninja Battle Bond",
            "Greninja Ash"
        ]
    },
    "Greninja Battle Bond": {
        "id": 658,
        "bs": {
            "hp": 72,
            "at": 100,
            "df": 67,
            "sa": 103,
            "sd": 71,
            "sp": 122
        },
        "abilities": [
            "Smokey Maneuvers",
            "Low Blow",
            "Higher Rank"
        ],
        "innates": [
            "Torrent",
            "Skill Link",
            "Battle Bond"
        ],
        "weightkg": 400,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 0,
        "otherFormes": [
            "Greninja"
        ]
    },
    "Greninja-Ash": {
        "id": 658,
        "bs": {
            "hp": 72,
            "at": 150,
            "df": 67,
            "sa": 153,
            "sd": 71,
            "sp": 132
        },
        "abilities": [
            "Surprise!",
            "Long Reach",
            "Higher Rank"
        ],
        "innates": [
            "Riptide",
            "Skill Link",
            "Battle Bond"
        ],
        "weightkg": 400,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 0
    },
    "Bunnelby": {
        "id": 659,
        "bs": {
            "hp": 38,
            "at": 36,
            "df": 38,
            "sa": 32,
            "sd": 36,
            "sp": 57
        },
        "abilities": [
            "Pickup",
            "Tectonize",
            "Scrappy"
        ],
        "innates": [
            "Huge Power",
            "Growing Tooth",
            "Quick Feet"
        ],
        "weightkg": 50,
        "types": [
            "Normal",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Diggersby": {
        "id": 660,
        "bs": {
            "hp": 85,
            "at": 56,
            "df": 77,
            "sa": 50,
            "sd": 77,
            "sp": 78
        },
        "abilities": [
            "Sheer Force",
            "Tectonize",
            "Gluttony"
        ],
        "innates": [
            "Huge Power",
            "Growing Tooth",
            "Pickup"
        ],
        "weightkg": 424,
        "types": [
            "Normal",
            "Ground"
        ],
        "genderR": 127
    },
    "Fletchling": {
        "id": 661,
        "bs": {
            "hp": 45,
            "at": 50,
            "df": 43,
            "sa": 40,
            "sd": 38,
            "sp": 62
        },
        "abilities": [
            "Rivalry",
            "Gale Wings",
            "Big Pecks"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Speed Force"
        ],
        "weightkg": 17,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Fletchinder": {
        "id": 662,
        "bs": {
            "hp": 62,
            "at": 73,
            "df": 55,
            "sa": 56,
            "sd": 52,
            "sp": 84
        },
        "abilities": [
            "Flame Body",
            "Gale Wings",
            "Big Pecks"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Speed Force"
        ],
        "weightkg": 160,
        "types": [
            "Fire",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Talonflame": {
        "id": 663,
        "bs": {
            "hp": 78,
            "at": 81,
            "df": 71,
            "sa": 74,
            "sd": 69,
            "sp": 126
        },
        "abilities": [
            "Predator",
            "Speed Force",
            "Big Pecks"
        ],
        "innates": [
            "Flock",
            "Violent Rush",
            "Gale Wings"
        ],
        "weightkg": 245,
        "types": [
            "Fire",
            "Flying"
        ],
        "genderR": 127
    },
    "Scatterbug": {
        "id": 664,
        "bs": {
            "hp": 38,
            "at": 35,
            "df": 40,
            "sa": 27,
            "sd": 25,
            "sp": 35
        },
        "abilities": [
            "Friend Guard",
            "Swarm",
            "Anticipation"
        ],
        "innates": [
            "Shield Dust",
            "Compound Eyes",
            "Overcoat"
        ],
        "weightkg": 25,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Spewpa": {
        "id": 665,
        "bs": {
            "hp": 45,
            "at": 22,
            "df": 60,
            "sa": 27,
            "sd": 30,
            "sp": 29
        },
        "abilities": [
            "Battle Armor",
            "Fluffy",
            "Friend Guard"
        ],
        "innates": [
            "Shield Dust",
            "Compound Eyes",
            "Shed Skin"
        ],
        "weightkg": 84,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Vivillon": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon Polar",
            "Vivillon Tundra",
            "Vivillon Continental",
            "Vivillon Garden",
            "Vivillon Elegant",
            "Vivillon Meadow",
            "Vivillon Modern",
            "Vivillon Marine",
            "Vivillon Archipelago",
            "Vivillon High Plains",
            "Vivillon Sandstorm",
            "Vivillon River",
            "Vivillon Monsoon",
            "Vivillon Savanna",
            "Vivillon Sun",
            "Vivillon Ocean",
            "Vivillon Jungle",
            "Vivillon Fancy",
            "Vivillon Poke Ball"
        ]
    },
    "Vivillon Polar": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Tundra": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Continental": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Gardens": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127
    },
    "Vivillon Elegant": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Meadow": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Modern": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Marine": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Archipelago": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon High Plains": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Sandstorm": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon River": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Monsoon": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Savanna": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Sun": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Ocean": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Jungle": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Fancy": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Vivillon"
        ]
    },
    "Vivillon Pokéball": {
        "id": 666,
        "bs": {
            "hp": 85,
            "at": 51,
            "df": 65,
            "sa": 110,
            "sd": 65,
            "sp": 109
        },
        "abilities": [
            "Multiscale",
            "Tinted Lens",
            "Air Blower"
        ],
        "innates": [
            "Powder Burst",
            "Compound Eyes",
            "Aerialist"
        ],
        "weightkg": 170,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 127
    },
    "Litleo": {
        "id": 667,
        "bs": {
            "hp": 62,
            "at": 50,
            "df": 58,
            "sa": 80,
            "sd": 54,
            "sp": 72
        },
        "abilities": [
            "Unnerve",
            "Competitive",
            "Hubris"
        ],
        "innates": [
            "Pretentious",
            "Run Away",
            "Rivalry"
        ],
        "weightkg": 135,
        "types": [
            "Fire",
            "Normal"
        ],
        "genderR": 222,
        "nfe": true
    },
    "Pyroar": {
        "id": 668,
        "bs": {
            "hp": 86,
            "at": 68,
            "df": 72,
            "sa": 119,
            "sd": 66,
            "sp": 106
        },
        "abilities": [
            "Intimidate",
            "Hubris",
            "Amplifier"
        ],
        "innates": [
            "Competitive",
            "Opportunist",
            "Predator"
        ],
        "weightkg": 815,
        "types": [
            "Normal",
            "Fire"
        ],
        "genderR": 222
    },
    "Flabébé": {
        "id": 669,
        "bs": {
            "hp": 54,
            "at": 38,
            "df": 59,
            "sa": 61,
            "sd": 79,
            "sp": 32
        },
        "abilities": [
            "Flower Veil",
            "Triage",
            "Aroma Veil"
        ],
        "innates": [
            "Pastel Veil",
            "Absorbant",
            "Water Veil"
        ],
        "weightkg": 1,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Floette": {
        "id": 670,
        "bs": {
            "hp": 64,
            "at": 45,
            "df": 67,
            "sa": 75,
            "sd": 98,
            "sp": 42
        },
        "abilities": [
            "Flower Veil",
            "Sweet Veil",
            "Aroma Veil"
        ],
        "innates": [
            "Pastel Veil",
            "Regenerator",
            "Water Veil"
        ],
        "weightkg": 9,
        "types": [
            "Fairy"
        ],
        "genderR": 254,
        "otherFormes": [
            "Floette Yellow Flower",
            "Floette Orange Flower",
            "Floette Blue Flower",
            "Floette White Flower",
            "Floette Eternal Flower"
        ],
        "nfe": true
    },
    "Florges": {
        "id": 671,
        "bs": {
            "hp": 88,
            "at": 55,
            "df": 88,
            "sa": 112,
            "sd": 154,
            "sp": 55
        },
        "abilities": [
            "Harvest",
            "Misty Surge",
            "Grassy Surge"
        ],
        "innates": [
            "Natural Cure",
            "Regenerator",
            "Self Sufficient"
        ],
        "weightkg": 100,
        "types": [
            "Fairy"
        ],
        "genderR": 254,
        "otherFormes": [
            "Florges Yellow Flower",
            "Florges Orange Flower",
            "Florges Blue Flower",
            "Florges White Flower"
        ]
    },
    "Floette Eternal Flower": {
        "id": 670,
        "bs": {
            "hp": 74,
            "at": 65,
            "df": 67,
            "sa": 125,
            "sd": 128,
            "sp": 92
        },
        "abilities": [
            "Fairy Aura",
            "Grassy Surge",
            "Dark Aura"
        ],
        "innates": [
            "Pastel Veil",
            "Magic Guard",
            "Mystic Power"
        ],
        "weightkg": 9,
        "types": [
            "Dark",
            "Fairy"
        ],
        "genderR": 254,
        "otherFormes": [
            "Floette"
        ]
    },
    "Flabebe Yellow": {
        "id": 669,
        "bs": {
            "hp": 54,
            "at": 38,
            "df": 59,
            "sa": 61,
            "sd": 79,
            "sp": 32
        },
        "abilities": [
            "Flower Veil",
            "Friend Guard",
            "Hospitality"
        ],
        "innates": [
            "Natural Cure",
            "Aroma Veil",
            "Flower Gift"
        ],
        "weightkg": 1,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Floette Yellow": {
        "id": 670,
        "bs": {
            "hp": 64,
            "at": 45,
            "df": 67,
            "sa": 75,
            "sd": 98,
            "sp": 42
        },
        "abilities": [
            "Flower Veil",
            "Sweet Veil",
            "Aroma Veil"
        ],
        "innates": [
            "Pastel Veil",
            "Regenerator",
            "Water Veil"
        ],
        "weightkg": 9,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Florges Yellow": {
        "id": 671,
        "bs": {
            "hp": 88,
            "at": 55,
            "df": 88,
            "sa": 112,
            "sd": 154,
            "sp": 55
        },
        "abilities": [
            "Harvest",
            "Misty Surge",
            "Grassy Surge"
        ],
        "innates": [
            "Natural Cure",
            "Regenerator",
            "Self Sufficient"
        ],
        "weightkg": 100,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Flabebe Orange": {
        "id": 669,
        "bs": {
            "hp": 54,
            "at": 38,
            "df": 59,
            "sa": 61,
            "sd": 79,
            "sp": 32
        },
        "abilities": [
            "Flower Veil",
            "Triage",
            "Aroma Veil"
        ],
        "innates": [
            "Pastel Veil",
            "Absorbant",
            "Water Veil"
        ],
        "weightkg": 1,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Floette Orange": {
        "id": 670,
        "bs": {
            "hp": 64,
            "at": 45,
            "df": 67,
            "sa": 75,
            "sd": 98,
            "sp": 42
        },
        "abilities": [
            "Flower Veil",
            "Sweet Veil",
            "Aroma Veil"
        ],
        "innates": [
            "Pastel Veil",
            "Regenerator",
            "Water Veil"
        ],
        "weightkg": 9,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Florges Orange": {
        "id": 671,
        "bs": {
            "hp": 88,
            "at": 55,
            "df": 88,
            "sa": 112,
            "sd": 154,
            "sp": 55
        },
        "abilities": [
            "Harvest",
            "Misty Surge",
            "Grassy Surge"
        ],
        "innates": [
            "Natural Cure",
            "Regenerator",
            "Self Sufficient"
        ],
        "weightkg": 100,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Flabebe Blue": {
        "id": 669,
        "bs": {
            "hp": 54,
            "at": 38,
            "df": 59,
            "sa": 61,
            "sd": 79,
            "sp": 32
        },
        "abilities": [
            "Flower Veil",
            "Triage",
            "Aroma Veil"
        ],
        "innates": [
            "Pastel Veil",
            "Absorbant",
            "Water Veil"
        ],
        "weightkg": 1,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Floette Blue": {
        "id": 670,
        "bs": {
            "hp": 64,
            "at": 45,
            "df": 67,
            "sa": 75,
            "sd": 98,
            "sp": 42
        },
        "abilities": [
            "Flower Veil",
            "Sweet Veil",
            "Aroma Veil"
        ],
        "innates": [
            "Pastel Veil",
            "Regenerator",
            "Water Veil"
        ],
        "weightkg": 9,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Florges Blue": {
        "id": 671,
        "bs": {
            "hp": 88,
            "at": 55,
            "df": 88,
            "sa": 112,
            "sd": 154,
            "sp": 55
        },
        "abilities": [
            "Harvest",
            "Misty Surge",
            "Grassy Surge"
        ],
        "innates": [
            "Natural Cure",
            "Regenerator",
            "Self Sufficient"
        ],
        "weightkg": 100,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Flabebe White": {
        "id": 669,
        "bs": {
            "hp": 54,
            "at": 38,
            "df": 59,
            "sa": 61,
            "sd": 79,
            "sp": 32
        },
        "abilities": [
            "Flower Veil",
            "Triage",
            "Aroma Veil"
        ],
        "innates": [
            "Pastel Veil",
            "Absorbant",
            "Water Veil"
        ],
        "weightkg": 1,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Floette White": {
        "id": 670,
        "bs": {
            "hp": 64,
            "at": 45,
            "df": 67,
            "sa": 75,
            "sd": 98,
            "sp": 42
        },
        "abilities": [
            "Flower Veil",
            "Sweet Veil",
            "Aroma Veil"
        ],
        "innates": [
            "Pastel Veil",
            "Regenerator",
            "Water Veil"
        ],
        "weightkg": 9,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Florges White": {
        "id": 671,
        "bs": {
            "hp": 88,
            "at": 55,
            "df": 88,
            "sa": 112,
            "sd": 154,
            "sp": 55
        },
        "abilities": [
            "Harvest",
            "Misty Surge",
            "Grassy Surge"
        ],
        "innates": [
            "Natural Cure",
            "Regenerator",
            "Self Sufficient"
        ],
        "weightkg": 100,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Skiddo": {
        "id": 672,
        "bs": {
            "hp": 66,
            "at": 65,
            "df": 48,
            "sa": 47,
            "sd": 57,
            "sp": 67
        },
        "abilities": [
            "Grass Pelt",
            "Stamina",
            "Chlorophyll"
        ],
        "innates": [
            "Sap Sipper",
            "Mountaineer",
            "Fur Coat"
        ],
        "weightkg": 310,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Gogoat": {
        "id": 673,
        "bs": {
            "hp": 123,
            "at": 100,
            "df": 62,
            "sa": 79,
            "sd": 81,
            "sp": 95
        },
        "abilities": [
            "Grass Pelt",
            "Violent Rush",
            "Mighty Horn"
        ],
        "innates": [
            "Sap Sipper",
            "Mountaineer",
            "Fur Coat"
        ],
        "weightkg": 910,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Pancham": {
        "id": 674,
        "bs": {
            "hp": 67,
            "at": 82,
            "df": 62,
            "sa": 46,
            "sd": 48,
            "sp": 43
        },
        "abilities": [
            "Iron Fist",
            "Mold Breaker",
            "Precise Fist"
        ],
        "innates": [
            "Scrappy",
            "Anger Point",
            "Hyper Aggressive"
        ],
        "weightkg": 80,
        "types": [
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Pangoro": {
        "id": 675,
        "bs": {
            "hp": 95,
            "at": 124,
            "df": 78,
            "sa": 69,
            "sd": 71,
            "sp": 58
        },
        "abilities": [
            "Iron Fist",
            "Mold Breaker",
            "Precise Fist"
        ],
        "innates": [
            "Scrappy",
            "Anger Point",
            "Hyper Aggressive"
        ],
        "weightkg": 1360,
        "types": [
            "Fighting",
            "Dark"
        ],
        "genderR": 127
    },
    "Furfrou": {
        "id": 676,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 60,
            "sa": 65,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Cute Charm",
            "Oblivious",
            "Pickup"
        ],
        "innates": [
            "Fur Coat",
            "Overcoat",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Furfrou Heart Trim",
            "Furfrou Star Trim",
            "Furfrou Diamond Trim",
            "Furfrou Debutante Trim",
            "Furfrou Matron Trim",
            "Furfrou Dandy Trim",
            "Furfrou La Reine Trim",
            "Furfrou Kabuki Trim",
            "Furfrou Pharaoh Trim"
        ],
        "nfe": true
    },
    "Furfrou Heart": {
        "id": 676,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 60,
            "sa": 65,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Cute Charm",
            "Oblivious",
            "Pickup"
        ],
        "innates": [
            "Fur Coat",
            "Overcoat",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Furfrou Star": {
        "id": 676,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 60,
            "sa": 65,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Cute Charm",
            "Oblivious",
            "Pickup"
        ],
        "innates": [
            "Fur Coat",
            "Overcoat",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Furfrou Diamond": {
        "id": 676,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 60,
            "sa": 65,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Cute Charm",
            "Oblivious",
            "Pickup"
        ],
        "innates": [
            "Fur Coat",
            "Overcoat",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Furfrou Debutante": {
        "id": 676,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 60,
            "sa": 65,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Cute Charm",
            "Oblivious",
            "Pickup"
        ],
        "innates": [
            "Fur Coat",
            "Overcoat",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Furfrou Matron": {
        "id": 676,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 60,
            "sa": 65,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Cute Charm",
            "Oblivious",
            "Pickup"
        ],
        "innates": [
            "Fur Coat",
            "Overcoat",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Furfrou Dandy": {
        "id": 676,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 60,
            "sa": 65,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Cute Charm",
            "Oblivious",
            "Pickup"
        ],
        "innates": [
            "Fur Coat",
            "Overcoat",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Furfrou La Reine": {
        "id": 676,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 60,
            "sa": 65,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Cute Charm",
            "Oblivious",
            "Pickup"
        ],
        "innates": [
            "Fur Coat",
            "Overcoat",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Furfrou Kabuki": {
        "id": 676,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 60,
            "sa": 65,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Cute Charm",
            "Oblivious",
            "Pickup"
        ],
        "innates": [
            "Fur Coat",
            "Overcoat",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Furfrou Pharaoh": {
        "id": 676,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 60,
            "sa": 65,
            "sd": 90,
            "sp": 102
        },
        "abilities": [
            "Cute Charm",
            "Oblivious",
            "Pickup"
        ],
        "innates": [
            "Fur Coat",
            "Overcoat",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Espurr": {
        "id": 677,
        "bs": {
            "hp": 77,
            "at": 48,
            "df": 54,
            "sa": 73,
            "sd": 60,
            "sp": 68
        },
        "abilities": [
            "Infiltrator",
            "Own Tempo",
            "Prankster"
        ],
        "innates": [
            "Keen Eye",
            "Fur Coat",
            "Psychic Mind"
        ],
        "weightkg": 35,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Meowstic": {
        "id": 678,
        "bs": {
            "hp": 94,
            "at": 48,
            "df": 76,
            "sa": 93,
            "sd": 81,
            "sp": 104
        },
        "abilities": [
            "Psychic Surge",
            "Prankster",
            "Sage Power"
        ],
        "innates": [
            "Psychic Mind",
            "Infiltrator",
            "Soul-Heart"
        ],
        "weightkg": 85,
        "types": [
            "Psychic"
        ],
        "genderR": 0,
        "otherFormes": [
            "Meowstic Female"
        ]
    },
    "Meowstic Female": {
        "id": 678,
        "bs": {
            "hp": 84,
            "at": 48,
            "df": 76,
            "sa": 103,
            "sd": 81,
            "sp": 104
        },
        "abilities": [
            "Sheer Force",
            "Psychic Surge",
            "Sage Power"
        ],
        "innates": [
            "Psychic Mind",
            "Competitive",
            "Hyper Aggressive"
        ],
        "weightkg": 85,
        "types": [
            "Psychic"
        ],
        "genderR": 254,
        "otherFormes": [
            "Meowstic"
        ]
    },
    "Honedge": {
        "id": 679,
        "bs": {
            "hp": 45,
            "at": 80,
            "df": 100,
            "sa": 35,
            "sd": 37,
            "sp": 28
        },
        "abilities": [
            "No Guard",
            "Frisk",
            "Sweeping Edge"
        ],
        "innates": [
            "Levitate",
            "Keen Edge",
            "Soul Eater"
        ],
        "weightkg": 20,
        "types": [
            "Steel",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Honedge Redux"
        ],
        "nfe": true
    },
    "Doublade": {
        "id": 680,
        "bs": {
            "hp": 59,
            "at": 110,
            "df": 150,
            "sa": 45,
            "sd": 49,
            "sp": 35
        },
        "abilities": [
            "No Guard",
            "Battle Armor",
            "Hyper Cutter"
        ],
        "innates": [
            "Levitate",
            "Dual Wield",
            "Soul Eater"
        ],
        "weightkg": 45,
        "types": [
            "Steel",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Doublade Redux"
        ],
        "nfe": true
    },
    "Aegislash": {
        "id": 681,
        "bs": {
            "hp": 60,
            "at": 50,
            "df": 140,
            "sa": 50,
            "sd": 140,
            "sp": 60
        },
        "abilities": [
            "Shadow Shield",
            "Dragonslayer",
            "Soul Eater"
        ],
        "innates": [
            "Levitate",
            "Keen Edge",
            "Stance Change"
        ],
        "weightkg": 530,
        "types": [
            "Steel",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Aegislash Blade Redux",
            "Aegislash Redux",
            "Aegislash Blade"
        ]
    },
    "Aegislash Blade": {
        "id": 681,
        "bs": {
            "hp": 60,
            "at": 140,
            "df": 50,
            "sa": 140,
            "sd": 50,
            "sp": 60
        },
        "abilities": [
            "Shadow Shield",
            "Dragonslayer",
            "Soul Eater"
        ],
        "innates": [
            "Levitate",
            "Keen Edge",
            "Stance Change"
        ],
        "weightkg": 530,
        "types": [
            "Steel",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Aegislash"
        ]
    },
    "Honedge Redux": {
        "id": 679,
        "bs": {
            "hp": 45,
            "at": 95,
            "df": 85,
            "sa": 35,
            "sd": 37,
            "sp": 28
        },
        "abilities": [
            "Soul Eater",
            "Bad Luck",
            "Infiltrator"
        ],
        "innates": [
            "Sweeping Edge",
            "Vengeance",
            "Cursed Body"
        ],
        "weightkg": 20,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Honedge"
        ],
        "nfe": true
    },
    "Doublade Redux": {
        "id": 680,
        "bs": {
            "hp": 59,
            "at": 125,
            "df": 110,
            "sa": 45,
            "sd": 49,
            "sp": 60
        },
        "abilities": [
            "Soul Eater",
            "Bad Luck",
            "Infiltrator"
        ],
        "innates": [
            "Sweeping Edge",
            "Vengeance",
            "Cursed Body"
        ],
        "weightkg": 45,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Doublade"
        ],
        "nfe": true
    },
    "Aegislash Redux": {
        "id": 681,
        "bs": {
            "hp": 70,
            "at": 140,
            "df": 140,
            "sa": 20,
            "sd": 70,
            "sp": 60
        },
        "abilities": [
            "Soul Eater",
            "Bad Luck",
            "Infiltrator"
        ],
        "innates": [
            "Shadow Tag",
            "Keen Edge",
            "Stance Change"
        ],
        "weightkg": 530,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Aegislash"
        ]
    },
    "Aegislash Blade Redux": {
        "id": 681,
        "bs": {
            "hp": 70,
            "at": 20,
            "df": 70,
            "sa": 140,
            "sd": 140,
            "sp": 60
        },
        "abilities": [
            "Soul Eater",
            "Bad Luck",
            "Infiltrator"
        ],
        "innates": [
            "Shadow Tag",
            "Mythical Arrows",
            "Stance Change"
        ],
        "weightkg": 530,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Aegislash"
        ]
    },
    "Aegislash Mega": {
        "id": 681,
        "bs": {
            "hp": 70,
            "at": 200,
            "df": 200,
            "sa": 20,
            "sd": 40,
            "sp": 70
        },
        "abilities": [
            "Adrenaline Rush",
            "Bad Luck",
            "Smokey Maneuvers"
        ],
        "innates": [
            "Shadow Tag",
            "Dual Wield",
            "Stance Change"
        ],
        "weightkg": 530,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "genderR": 127
    },
    "Aegislash Blade Redux Mega": {
        "id": 681,
        "bs": {
            "hp": 70,
            "at": 20,
            "df": 40,
            "sa": 200,
            "sd": 200,
            "sp": 70
        },
        "abilities": [
            "Adrenaline Rush",
            "Bad Luck",
            "Smokey Maneuvers"
        ],
        "innates": [
            "Shadow Tag",
            "Mythical Arrows",
            "Stance Change"
        ],
        "weightkg": 530,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "genderR": 127
    },
    "Spritzee": {
        "id": 682,
        "bs": {
            "hp": 78,
            "at": 52,
            "df": 67,
            "sa": 63,
            "sd": 76,
            "sp": 23
        },
        "abilities": [
            "Aroma Veil",
            "Pixilate",
            "Lingering Aroma"
        ],
        "innates": [
            "Levitate",
            "Healer",
            "Soothing Aroma"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Aromatisse": {
        "id": 683,
        "bs": {
            "hp": 101,
            "at": 72,
            "df": 79,
            "sa": 99,
            "sd": 100,
            "sp": 29
        },
        "abilities": [
            "Aroma Veil",
            "Lingering Aroma",
            "Fairy Aura"
        ],
        "innates": [
            "Healer",
            "Pixilate",
            "Soothing Aroma"
        ],
        "weightkg": 155,
        "types": [
            "Fairy"
        ],
        "genderR": 127
    },
    "Swirlix": {
        "id": 684,
        "bs": {
            "hp": 67,
            "at": 55,
            "df": 66,
            "sa": 59,
            "sd": 57,
            "sp": 55
        },
        "abilities": [
            "Sticky Hold",
            "Oblivious",
            "Unburden"
        ],
        "innates": [
            "Cotton Down",
            "Fluffy",
            "Self Sufficient"
        ],
        "weightkg": 35,
        "types": [
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Slurpuff": {
        "id": 685,
        "bs": {
            "hp": 82,
            "at": 80,
            "df": 86,
            "sa": 85,
            "sd": 75,
            "sp": 72
        },
        "abilities": [
            "Sweet Veil",
            "Well Baked Body",
            "Unburden"
        ],
        "innates": [
            "Gooey",
            "Pixilate",
            "Sticky Hold"
        ],
        "weightkg": 50,
        "types": [
            "Fairy"
        ],
        "genderR": 127
    },
    "Inkay": {
        "id": 686,
        "bs": {
            "hp": 53,
            "at": 54,
            "df": 53,
            "sa": 37,
            "sd": 46,
            "sp": 45
        },
        "abilities": [
            "Inversion",
            "Cosmic Daze",
            "Long Reach"
        ],
        "innates": [
            "Hypnotist",
            "Contrary",
            "Suction Cups"
        ],
        "weightkg": 35,
        "types": [
            "Dark",
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Malamar": {
        "id": 687,
        "bs": {
            "hp": 86,
            "at": 92,
            "df": 88,
            "sa": 85,
            "sd": 75,
            "sp": 73
        },
        "abilities": [
            "Inversion",
            "Keen Edge",
            "Infiltrator"
        ],
        "innates": [
            "Hypnotist",
            "Contrary",
            "Big Pecks"
        ],
        "weightkg": 470,
        "types": [
            "Dark",
            "Psychic"
        ],
        "genderR": 127
    },
    "Binacle": {
        "id": 688,
        "bs": {
            "hp": 42,
            "at": 52,
            "df": 67,
            "sa": 39,
            "sd": 56,
            "sp": 50
        },
        "abilities": [
            "Pickpocket",
            "Mountaineer",
            "Sand Force"
        ],
        "innates": [
            "Multi Headed",
            "Tough Claws",
            "Sniper"
        ],
        "weightkg": 310,
        "types": [
            "Rock",
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Barbaracle": {
        "id": 689,
        "bs": {
            "hp": 72,
            "at": 105,
            "df": 115,
            "sa": 54,
            "sd": 86,
            "sp": 68
        },
        "abilities": [
            "Pickpocket",
            "Anticipation",
            "Sand Force"
        ],
        "innates": [
            "Multi Headed",
            "Tough Claws",
            "Sniper"
        ],
        "weightkg": 960,
        "types": [
            "Rock",
            "Water"
        ],
        "genderR": 127
    },
    "Skrelp": {
        "id": 690,
        "bs": {
            "hp": 65,
            "at": 70,
            "df": 60,
            "sa": 70,
            "sd": 60,
            "sp": 30
        },
        "abilities": [
            "Half Drake",
            "Corrosion",
            "Propeller Tail"
        ],
        "innates": [
            "Adaptability",
            "Poison Touch",
            "Ambush"
        ],
        "weightkg": 73,
        "types": [
            "Poison",
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dragalge": {
        "id": 691,
        "bs": {
            "hp": 85,
            "at": 97,
            "df": 90,
            "sa": 97,
            "sd": 123,
            "sp": 44
        },
        "abilities": [
            "Protean",
            "Contrary",
            "Pressure"
        ],
        "innates": [
            "Aquatic",
            "Corrosion",
            "Adaptability"
        ],
        "weightkg": 815,
        "types": [
            "Poison",
            "Dragon"
        ],
        "genderR": 127
    },
    "Clauncher": {
        "id": 692,
        "bs": {
            "hp": 71,
            "at": 53,
            "df": 69,
            "sa": 88,
            "sd": 70,
            "sp": 44
        },
        "abilities": [
            "Scavenger",
            "Regenerator",
            "Grip Pincer"
        ],
        "innates": [
            "Multiscale",
            "Shell Armor",
            "Mega Launcher"
        ],
        "weightkg": 83,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Clawitzer": {
        "id": 693,
        "bs": {
            "hp": 96,
            "at": 73,
            "df": 98,
            "sa": 130,
            "sd": 89,
            "sp": 50
        },
        "abilities": [
            "Multiscale",
            "Rampage",
            "Artillery"
        ],
        "innates": [
            "Hydrate",
            "Shell Armor",
            "Mega Launcher"
        ],
        "weightkg": 353,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Clawitzer Redux"
        ]
    },
    "Clawtificer": {
        "id": 1074,
        "bs": {
            "hp": 86,
            "at": 65,
            "df": 83,
            "sa": 110,
            "sd": 82,
            "sp": 110
        },
        "abilities": [
            "Elemental Charge",
            "Elemental Charge",
            "Elemental Charge"
        ],
        "innates": [
            "Ice Age",
            "Levitate",
            "Dual Wield"
        ],
        "weightkg": 353,
        "types": [
            "Fire",
            "Electric"
        ],
        "genderR": 127
    },
    "Helioptile": {
        "id": 694,
        "bs": {
            "hp": 44,
            "at": 38,
            "df": 33,
            "sa": 71,
            "sd": 43,
            "sp": 70
        },
        "abilities": [
            "Sand Rush",
            "Generator",
            "Solar Power"
        ],
        "innates": [
            "Short Circuit",
            "Dry Skin",
            "Lightning Rod"
        ],
        "weightkg": 60,
        "types": [
            "Electric",
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Heliolisk": {
        "id": 695,
        "bs": {
            "hp": 62,
            "at": 55,
            "df": 52,
            "sa": 119,
            "sd": 94,
            "sp": 109
        },
        "abilities": [
            "Sand Rush",
            "Generator",
            "Solar Power"
        ],
        "innates": [
            "Short Circuit",
            "Dry Skin",
            "Lightning Rod"
        ],
        "weightkg": 210,
        "types": [
            "Electric",
            "Normal"
        ],
        "genderR": 127
    },
    "Tyrunt": {
        "id": 696,
        "bs": {
            "hp": 58,
            "at": 89,
            "df": 77,
            "sa": 45,
            "sd": 55,
            "sp": 58
        },
        "abilities": [
            "Predator",
            "Pretentious",
            "Sturdy"
        ],
        "innates": [
            "Fossilized",
            "Strong Jaw",
            "Hyper Aggressive"
        ],
        "weightkg": 260,
        "types": [
            "Rock",
            "Dragon"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Tyrantrum": {
        "id": 697,
        "bs": {
            "hp": 82,
            "at": 121,
            "df": 119,
            "sa": 69,
            "sd": 69,
            "sp": 81
        },
        "abilities": [
            "Rock Head",
            "Strong Jaw",
            "Sturdy"
        ],
        "innates": [
            "Predator",
            "Juggernaut",
            "Hyper Aggressive"
        ],
        "weightkg": 2700,
        "types": [
            "Rock",
            "Dragon"
        ],
        "genderR": 31
    },
    "Amaura": {
        "id": 698,
        "bs": {
            "hp": 77,
            "at": 59,
            "df": 50,
            "sa": 87,
            "sd": 63,
            "sp": 46
        },
        "abilities": [
            "Refrigerate",
            "Solid Rock",
            "Snow Warning"
        ],
        "innates": [
            "Fossilized",
            "Primal Armor",
            "Permafrost"
        ],
        "weightkg": 252,
        "types": [
            "Rock",
            "Ice"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Aurorus": {
        "id": 699,
        "bs": {
            "hp": 123,
            "at": 77,
            "df": 72,
            "sa": 119,
            "sd": 92,
            "sp": 58
        },
        "abilities": [
            "Refrigerate",
            "Solid Rock",
            "Snow Warning"
        ],
        "innates": [
            "Primal Armor",
            "Ice Body",
            "Permafrost"
        ],
        "weightkg": 2250,
        "types": [
            "Rock",
            "Ice"
        ],
        "genderR": 31
    },
    "Sylveon": {
        "id": 700,
        "bs": {
            "hp": 95,
            "at": 65,
            "df": 65,
            "sa": 110,
            "sd": 130,
            "sp": 60
        },
        "abilities": [
            "Fairy Aura",
            "Serene Grace",
            "Pastel Veil"
        ],
        "innates": [
            "Pixilate",
            "Dragonslayer",
            "Opportunist"
        ],
        "weightkg": 235,
        "types": [
            "Fairy"
        ],
        "genderR": 31
    },
    "Hawlucha": {
        "id": 701,
        "bs": {
            "hp": 78,
            "at": 92,
            "df": 75,
            "sa": 74,
            "sd": 63,
            "sp": 118
        },
        "abilities": [
            "Unburden",
            "No Guard",
            "Mold Breaker"
        ],
        "innates": [
            "Limber",
            "Vital Spirit",
            "Aerodynamics"
        ],
        "weightkg": 215,
        "types": [
            "Fighting",
            "Flying"
        ],
        "genderR": 127
    },
    "Dedenne": {
        "id": 702,
        "bs": {
            "hp": 67,
            "at": 58,
            "df": 57,
            "sa": 101,
            "sd": 87,
            "sp": 101
        },
        "abilities": [
            "Power Spot",
            "Galvanize",
            "Pixilate"
        ],
        "innates": [
            "Retriever",
            "Electrocytes",
            "Gluttony"
        ],
        "weightkg": 22,
        "types": [
            "Electric",
            "Fairy"
        ],
        "genderR": 127
    },
    "Carbink": {
        "id": 703,
        "bs": {
            "hp": 50,
            "at": 50,
            "df": 150,
            "sa": 50,
            "sd": 150,
            "sp": 50
        },
        "abilities": [
            "Sturdy",
            "Solid Rock",
            "Power Spot"
        ],
        "innates": [
            "Clear Body",
            "Impenetrable",
            "Stall"
        ],
        "weightkg": 57,
        "types": [
            "Rock",
            "Fairy"
        ],
        "genderR": 2
    },
    "Goomy": {
        "id": 704,
        "bs": {
            "hp": 45,
            "at": 50,
            "df": 35,
            "sa": 55,
            "sd": 75,
            "sp": 40
        },
        "abilities": [
            "Poison Heal",
            "Poison Absorb",
            "Damp"
        ],
        "innates": [
            "Amphibious",
            "Gooey",
            "Liquified"
        ],
        "weightkg": 28,
        "types": [
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Sliggoo": {
        "id": 705,
        "bs": {
            "hp": 68,
            "at": 75,
            "df": 68,
            "sa": 83,
            "sd": 98,
            "sp": 60
        },
        "abilities": [
            "Poison Heal",
            "Gooey",
            "Hydration"
        ],
        "innates": [
            "Adaptability",
            "Sap Sipper",
            "Sticky Hold"
        ],
        "weightkg": 175,
        "types": [
            "Dragon",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sliggoo Hisuian"
        ],
        "nfe": true
    },
    "Goodra": {
        "id": 706,
        "bs": {
            "hp": 90,
            "at": 100,
            "df": 85,
            "sa": 110,
            "sd": 135,
            "sp": 80
        },
        "abilities": [
            "Poison Heal",
            "Gooey",
            "Drizzle"
        ],
        "innates": [
            "Adaptability",
            "Sap Sipper",
            "Hydrate"
        ],
        "weightkg": 1505,
        "types": [
            "Dragon",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Goodra Hisuian"
        ]
    },
    "Sliggoo Hisuian": {
        "id": 705,
        "bs": {
            "hp": 58,
            "at": 75,
            "df": 83,
            "sa": 83,
            "sd": 113,
            "sp": 40
        },
        "abilities": [
            "Gooey",
            "Bulletproof",
            "Juggernaut"
        ],
        "innates": [
            "Shell Armor",
            "Impenetrable",
            "Filter"
        ],
        "weightkg": 175,
        "types": [
            "Dragon",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Sliggoo"
        ],
        "nfe": true
    },
    "Goodra Hisuian": {
        "id": 706,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 100,
            "sa": 110,
            "sd": 150,
            "sp": 60
        },
        "abilities": [
            "Gooey",
            "Bulletproof",
            "Juggernaut"
        ],
        "innates": [
            "Shell Armor",
            "Impenetrable",
            "Filter"
        ],
        "weightkg": 1505,
        "types": [
            "Dragon",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Goodra"
        ]
    },
    "Klefki": {
        "id": 707,
        "bs": {
            "hp": 57,
            "at": 80,
            "df": 91,
            "sa": 80,
            "sd": 87,
            "sp": 75
        },
        "abilities": [
            "Magic Guard",
            "Friend Guard",
            "Magician"
        ],
        "innates": [
            "Prankster",
            "Full Metal Body",
            "Iron Barbs"
        ],
        "weightkg": 30,
        "types": [
            "Steel",
            "Fairy"
        ],
        "genderR": 127
    },
    "Phantump": {
        "id": 708,
        "bs": {
            "hp": 43,
            "at": 70,
            "df": 48,
            "sa": 50,
            "sd": 60,
            "sp": 38
        },
        "abilities": [
            "Vengeance",
            "Haunted Spirit",
            "Grassy Surge"
        ],
        "innates": [
            "Natural Cure",
            "Harvest",
            "Cursed Body"
        ],
        "weightkg": 70,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Trevenant": {
        "id": 709,
        "bs": {
            "hp": 85,
            "at": 100,
            "df": 86,
            "sa": 75,
            "sd": 92,
            "sp": 56
        },
        "abilities": [
            "Tough Claws",
            "Haunted Spirit",
            "Grassy Surge"
        ],
        "innates": [
            "Vengeance",
            "Harvest",
            "Cursed Body"
        ],
        "weightkg": 710,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127
    },
    "Pumpkaboo": {
        "id": 710,
        "bs": {
            "hp": 49,
            "at": 44,
            "df": 70,
            "sa": 66,
            "sd": 55,
            "sp": 51
        },
        "abilities": [
            "Flare Boost",
            "Haunted Spirit",
            "Ill Will"
        ],
        "innates": [
            "Scare",
            "Frisk",
            "Insomnia"
        ],
        "weightkg": 50,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pumpkaboo Small",
            "Pumpkaboo Large",
            "Pumpkaboo Super"
        ],
        "nfe": true
    },
    "Gourgeist": {
        "id": 711,
        "bs": {
            "hp": 65,
            "at": 58,
            "df": 122,
            "sa": 90,
            "sd": 75,
            "sp": 84
        },
        "abilities": [
            "Flare Boost",
            "Harvest",
            "Frisk"
        ],
        "innates": [
            "Scare",
            "Pickup",
            "Monster Mash"
        ],
        "weightkg": 125,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gourgeist Small",
            "Gourgeist Large",
            "Gourgeist Super"
        ]
    },
    "Pumpkaboo Small": {
        "id": 710,
        "bs": {
            "hp": 49,
            "at": 44,
            "df": 70,
            "sa": 66,
            "sd": 55,
            "sp": 51
        },
        "abilities": [
            "Frisk",
            "Flare Boost",
            "Moody"
        ],
        "innates": [
            "Insomnia",
            "Cursed Body",
            "Haunted Spirit"
        ],
        "weightkg": 50,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pumpkaboo"
        ],
        "nfe": true
    },
    "Gourgeist Small": {
        "id": 711,
        "bs": {
            "hp": 55,
            "at": 58,
            "df": 122,
            "sa": 85,
            "sd": 75,
            "sp": 99
        },
        "abilities": [
            "Flare Boost",
            "Harvest",
            "Moody"
        ],
        "innates": [
            "Insomnia",
            "Cursed Body",
            "Haunted Spirit"
        ],
        "weightkg": 125,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gourgeist"
        ]
    },
    "Pumpkaboo Large": {
        "id": 710,
        "bs": {
            "hp": 49,
            "at": 44,
            "df": 70,
            "sa": 66,
            "sd": 55,
            "sp": 51
        },
        "abilities": [
            "Frisk",
            "Flare Boost",
            "Moody"
        ],
        "innates": [
            "Insomnia",
            "Cursed Body",
            "Haunted Spirit"
        ],
        "weightkg": 50,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pumpkaboo"
        ],
        "nfe": true
    },
    "Gourgeist Large": {
        "id": 711,
        "bs": {
            "hp": 75,
            "at": 58,
            "df": 122,
            "sa": 95,
            "sd": 75,
            "sp": 69
        },
        "abilities": [
            "Flare Boost",
            "Harvest",
            "Moody"
        ],
        "innates": [
            "Insomnia",
            "Cursed Body",
            "Haunted Spirit"
        ],
        "weightkg": 125,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gourgeist"
        ]
    },
    "Pumpkaboo Super": {
        "id": 710,
        "bs": {
            "hp": 49,
            "at": 44,
            "df": 70,
            "sa": 66,
            "sd": 55,
            "sp": 51
        },
        "abilities": [
            "Frisk",
            "Flare Boost",
            "Moody"
        ],
        "innates": [
            "Insomnia",
            "Cursed Body",
            "Haunted Spirit"
        ],
        "weightkg": 50,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Pumpkaboo"
        ],
        "nfe": true
    },
    "Gourgeist Super": {
        "id": 711,
        "bs": {
            "hp": 85,
            "at": 58,
            "df": 122,
            "sa": 100,
            "sd": 75,
            "sp": 54
        },
        "abilities": [
            "Flare Boost",
            "Harvest",
            "Moody"
        ],
        "innates": [
            "Insomnia",
            "Cursed Body",
            "Haunted Spirit"
        ],
        "weightkg": 125,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127,
        "otherFormes": [
            "Gourgeist"
        ]
    },
    "Bergmite": {
        "id": 712,
        "bs": {
            "hp": 55,
            "at": 69,
            "df": 85,
            "sa": 32,
            "sd": 55,
            "sp": 28
        },
        "abilities": [
            "Sturdy",
            "Ice Body",
            "Battle Armor"
        ],
        "innates": [
            "Permafrost",
            "Impenetrable",
            "Self Sufficient"
        ],
        "weightkg": 995,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Avalugg": {
        "id": 713,
        "bs": {
            "hp": 95,
            "at": 117,
            "df": 184,
            "sa": 44,
            "sd": 86,
            "sp": 28
        },
        "abilities": [
            "Sturdy",
            "Ice Body",
            "Crystallize"
        ],
        "innates": [
            "Permafrost",
            "Impenetrable",
            "Self Sufficient"
        ],
        "weightkg": 5050,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Avalugg Hisuian"
        ]
    },
    "Avalugg Hisuian": {
        "id": 713,
        "bs": {
            "hp": 95,
            "at": 127,
            "df": 184,
            "sa": 34,
            "sd": 76,
            "sp": 38
        },
        "abilities": [
            "Technician",
            "Self Sufficient",
            "Bulletproof"
        ],
        "innates": [
            "Primal Armor",
            "Impenetrable",
            "Strong Jaw"
        ],
        "weightkg": 5050,
        "types": [
            "Ice",
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Avalugg"
        ]
    },
    "Noibat": {
        "id": 714,
        "bs": {
            "hp": 50,
            "at": 30,
            "df": 45,
            "sa": 75,
            "sd": 50,
            "sp": 95
        },
        "abilities": [
            "Frisk",
            "Infiltrator",
            "Loud Bang"
        ],
        "innates": [
            "Ambush",
            "Mountaineer",
            "Nocturnal"
        ],
        "weightkg": 80,
        "types": [
            "Flying",
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Noivern": {
        "id": 715,
        "bs": {
            "hp": 85,
            "at": 70,
            "df": 80,
            "sa": 97,
            "sd": 80,
            "sp": 123
        },
        "abilities": [
            "Aerodynamics",
            "Aerilate",
            "Loud Bang"
        ],
        "innates": [
            "Ambush",
            "Mountaineer",
            "Hyper Aggressive"
        ],
        "weightkg": 850,
        "types": [
            "Flying",
            "Dragon"
        ],
        "genderR": 127
    },
    "Noibat Redux": {
        "id": 714,
        "bs": {
            "hp": 50,
            "at": 75,
            "df": 45,
            "sa": 30,
            "sd": 50,
            "sp": 95
        },
        "abilities": [
            "Hyper Aggressive",
            "Opportunist",
            "Rock Head"
        ],
        "innates": [
            "Levitate",
            "Nocturnal",
            "Vengeance"
        ],
        "weightkg": 80,
        "types": [
            "Rock",
            "Ghost"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Noivern Redux": {
        "id": 715,
        "bs": {
            "hp": 85,
            "at": 97,
            "df": 80,
            "sa": 70,
            "sd": 80,
            "sp": 123
        },
        "abilities": [
            "Hyper Aggressive",
            "Opportunist",
            "Rock Head"
        ],
        "innates": [
            "Levitate",
            "Nocturnal",
            "Vengeance"
        ],
        "weightkg": 850,
        "types": [
            "Rock",
            "Ghost"
        ],
        "genderR": 127
    },
    "Xerneas": {
        "id": 716,
        "bs": {
            "hp": 126,
            "at": 131,
            "df": 95,
            "sa": 131,
            "sd": 98,
            "sp": 99
        },
        "abilities": [
            "Pixilate",
            "Competitive",
            "Self Sufficient"
        ],
        "innates": [
            "Fairy Aura",
            "Illuminate",
            "Soul-Heart"
        ],
        "weightkg": 2150,
        "types": [
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Xerneas Active"
        ]
    },
    "Xerneas Active": {
        "id": 716,
        "bs": {
            "hp": 126,
            "at": 131,
            "df": 95,
            "sa": 131,
            "sd": 98,
            "sp": 99
        },
        "abilities": [
            "Pixilate",
            "Competitive",
            "Self Sufficient"
        ],
        "innates": [
            "Fairy Aura",
            "Illuminate",
            "Soul-Heart"
        ],
        "weightkg": 2150,
        "types": [
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Xerneas"
        ]
    },
    "Yveltal": {
        "id": 717,
        "bs": {
            "hp": 126,
            "at": 131,
            "df": 95,
            "sa": 131,
            "sd": 98,
            "sp": 99
        },
        "abilities": [
            "Opportunist",
            "Fae Hunter",
            "Fearmonger"
        ],
        "innates": [
            "Dark Aura",
            "Air Blower",
            "Giant Wings"
        ],
        "weightkg": 2030,
        "types": [
            "Dark",
            "Flying"
        ],
        "genderR": 2
    },
    "Yveltal Mega": {
        "id": 717,
        "bs": {
            "hp": 126,
            "at": 151,
            "df": 105,
            "sa": 151,
            "sd": 108,
            "sp": 139
        },
        "abilities": [
            "Dark Aura",
            "Dark Aura",
            "Dark Aura"
        ],
        "innates": [
            "Opportunist",
            "Giant Wings",
            "Shadow Shield"
        ],
        "weightkg": 2030,
        "types": [
            "Dark",
            "Flying"
        ],
        "genderR": 127
    },
    "Zygarde": {
        "id": 718,
        "bs": {
            "hp": 108,
            "at": 100,
            "df": 121,
            "sa": 81,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Aura Break",
            "Regenerator",
            "Power Construct"
        ],
        "innates": [
            "Primal Armor",
            "Earthbound",
            "Power Core"
        ],
        "weightkg": 3050,
        "types": [
            "Dragon",
            "Ground"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zygarde 10",
            "Zygarde 10 Power Construct",
            "Zygarde 50 Power Construct",
            "Zygarde Complete"
        ]
    },
    "Zygarde 10": {
        "id": 718,
        "bs": {
            "hp": 74,
            "at": 120,
            "df": 71,
            "sa": 61,
            "sd": 85,
            "sp": 115
        },
        "abilities": [
            "Aura Break",
            "Overwhelm",
            "Draco Morale"
        ],
        "innates": [
            "Primal Maw",
            "Earthbound",
            "Speed Force"
        ],
        "weightkg": 3050,
        "types": [
            "Dragon",
            "Ground"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zygarde"
        ]
    },
    "Zygarde 10 Power Construct": {
        "id": 718,
        "bs": {
            "hp": 74,
            "at": 120,
            "df": 71,
            "sa": 61,
            "sd": 85,
            "sp": 115
        },
        "abilities": [
            "Aura Break",
            "Overwhelm",
            "Power Construct"
        ],
        "innates": [
            "Primal Maw",
            "Earthbound",
            "Speed Force"
        ],
        "weightkg": 3050,
        "types": [
            "Dragon",
            "Ground"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zygarde"
        ]
    },
    "Zygarde 50 Power Construct": {
        "id": 718,
        "bs": {
            "hp": 108,
            "at": 100,
            "df": 121,
            "sa": 81,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Aura Break",
            "Regenerator",
            "Power Construct"
        ],
        "innates": [
            "Primal Armor",
            "Earthbound",
            "Power Core"
        ],
        "weightkg": 3050,
        "types": [
            "Dragon",
            "Ground"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zygarde"
        ]
    },
    "Zygarde Complete": {
        "id": 718,
        "bs": {
            "hp": 216,
            "at": 100,
            "df": 121,
            "sa": 91,
            "sd": 95,
            "sp": 85
        },
        "abilities": [
            "Power Construct",
            "Power Construct",
            "Power Construct"
        ],
        "innates": [
            "Primal Armor",
            "Earthbound",
            "Power Core"
        ],
        "weightkg": 3050,
        "types": [
            "Dragon",
            "Ground"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zygarde"
        ]
    },
    "Diancie": {
        "id": 719,
        "bs": {
            "hp": 50,
            "at": 100,
            "df": 150,
            "sa": 100,
            "sd": 150,
            "sp": 50
        },
        "abilities": [
            "Pixilate",
            "Magic Guard",
            "Regenerator"
        ],
        "innates": [
            "Solid Rock",
            "Levitate",
            "Mountaineer"
        ],
        "weightkg": 88,
        "types": [
            "Rock",
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Diancie Mega"
        ]
    },
    "Diancie Mega": {
        "id": 719,
        "bs": {
            "hp": 50,
            "at": 160,
            "df": 110,
            "sa": 160,
            "sd": 110,
            "sp": 110
        },
        "abilities": [
            "Equinox",
            "Magic Bounce",
            "Reckless"
        ],
        "innates": [
            "Solid Rock",
            "Levitate",
            "Magic Guard"
        ],
        "weightkg": 88,
        "types": [
            "Rock",
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Diancie"
        ]
    },
    "Hoopa": {
        "id": 720,
        "bs": {
            "hp": 80,
            "at": 110,
            "df": 60,
            "sa": 150,
            "sd": 130,
            "sp": 70
        },
        "abilities": [
            "Mystic Power",
            "Illusion",
            "Twist. Dimension"
        ],
        "innates": [
            "Prankster",
            "Vengeance",
            "Hypnotist"
        ],
        "weightkg": 90,
        "types": [
            "Psychic",
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Hoopa Unbound"
        ]
    },
    "Hoopa Unbound": {
        "id": 720,
        "bs": {
            "hp": 80,
            "at": 170,
            "df": 60,
            "sa": 160,
            "sd": 130,
            "sp": 80
        },
        "abilities": [
            "Intimidate",
            "Magician",
            "Long Reach"
        ],
        "innates": [
            "Soul Eater",
            "Hyper Aggressive",
            "Infiltrator"
        ],
        "weightkg": 90,
        "types": [
            "Psychic",
            "Dark"
        ],
        "genderR": 2,
        "otherFormes": [
            "Hoopa"
        ]
    },
    "Volcanion": {
        "id": 721,
        "bs": {
            "hp": 80,
            "at": 110,
            "df": 120,
            "sa": 130,
            "sd": 90,
            "sp": 70
        },
        "abilities": [
            "Drizzle",
            "Drought",
            "Mountaineer"
        ],
        "innates": [
            "Artillery",
            "Storm Drain",
            "Flash Fire"
        ],
        "weightkg": 1950,
        "types": [
            "Fire",
            "Water"
        ],
        "genderR": 2
    },
    "Rowlet": {
        "id": 722,
        "bs": {
            "hp": 68,
            "at": 55,
            "df": 55,
            "sa": 40,
            "sd": 40,
            "sp": 62
        },
        "abilities": [
            "Sniper",
            "Serene Grace",
            "Super Luck"
        ],
        "innates": [
            "Overgrow",
            "Nocturnal",
            "Chlorophyll"
        ],
        "weightkg": 15,
        "types": [
            "Grass",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dartrix": {
        "id": 723,
        "bs": {
            "hp": 78,
            "at": 75,
            "df": 75,
            "sa": 50,
            "sd": 60,
            "sp": 82
        },
        "abilities": [
            "Sniper",
            "Serene Grace",
            "Super Luck"
        ],
        "innates": [
            "Overgrow",
            "Fatal Precision",
            "Keen Edge"
        ],
        "weightkg": 160,
        "types": [
            "Grass",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Decidueye": {
        "id": 724,
        "bs": {
            "hp": 78,
            "at": 107,
            "df": 75,
            "sa": 70,
            "sd": 90,
            "sp": 115
        },
        "abilities": [
            "Deadeye",
            "Keen Edge",
            "Opportunist"
        ],
        "innates": [
            "Overgrow",
            "Sniper",
            "Archer"
        ],
        "weightkg": 366,
        "types": [
            "Grass",
            "Ghost"
        ],
        "genderR": 127,
        "otherFormes": [
            "Decidueye Hisuian"
        ]
    },
    "Decidueye Mega": {
        "id": 724,
        "bs": {
            "hp": 78,
            "at": 127,
            "df": 75,
            "sa": 100,
            "sd": 90,
            "sp": 165
        },
        "abilities": [
            "Hunter's Mark",
            "Hunter's Mark",
            "Hunter's Mark"
        ],
        "innates": [
            "Forest Rage",
            "Sniper",
            "Archer"
        ],
        "weightkg": 366,
        "types": [
            "Grass",
            "Ghost"
        ],
        "genderR": 127
    },
    "Decidueye Hisuian": {
        "id": 724,
        "bs": {
            "hp": 90,
            "at": 120,
            "df": 90,
            "sa": 50,
            "sd": 90,
            "sp": 95
        },
        "abilities": [
            "Archer",
            "Scrappy",
            "Opportunist"
        ],
        "innates": [
            "Overgrow",
            "Sniper",
            "Aerodynamics"
        ],
        "weightkg": 366,
        "types": [
            "Grass",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Decidueye"
        ]
    },
    "Decidueye Hisuian Mega": {
        "id": 724,
        "bs": {
            "hp": 90,
            "at": 150,
            "df": 100,
            "sa": 80,
            "sd": 90,
            "sp": 125
        },
        "abilities": [
            "JunshiSanda",
            "JunshiSanda",
            "JunshiSanda"
        ],
        "innates": [
            "Gladiator",
            "Combat Specialist",
            "Aerodynamics"
        ],
        "weightkg": 366,
        "types": [
            "Grass",
            "Fighting"
        ],
        "genderR": 127
    },
    "Litten": {
        "id": 725,
        "bs": {
            "hp": 45,
            "at": 65,
            "df": 40,
            "sa": 60,
            "sd": 40,
            "sp": 70
        },
        "abilities": [
            "Scare",
            "Moody",
            "Intimidate"
        ],
        "innates": [
            "Blaze",
            "Flame Body",
            "Bad Luck"
        ],
        "weightkg": 43,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Torracat": {
        "id": 726,
        "bs": {
            "hp": 65,
            "at": 85,
            "df": 50,
            "sa": 80,
            "sd": 50,
            "sp": 90
        },
        "abilities": [
            "Bad Luck",
            "Moody",
            "Intimidate"
        ],
        "innates": [
            "Blaze",
            "Flame Body",
            "Striker"
        ],
        "weightkg": 250,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Incineroar": {
        "id": 727,
        "bs": {
            "hp": 100,
            "at": 115,
            "df": 90,
            "sa": 80,
            "sd": 90,
            "sp": 60
        },
        "abilities": [
            "Stall",
            "Scare",
            "Intimidate"
        ],
        "innates": [
            "Blaze",
            "Combat Specialist",
            "Anger Point"
        ],
        "weightkg": 830,
        "types": [
            "Fire",
            "Dark"
        ],
        "genderR": 127
    },
    "Incineroar Mega": {
        "id": 727,
        "bs": {
            "hp": 100,
            "at": 135,
            "df": 110,
            "sa": 100,
            "sd": 110,
            "sp": 80
        },
        "abilities": [
            "Champion's Entrance",
            "Champion's Entrance",
            "Champion's Entrance"
        ],
        "innates": [
            "Hellblaze",
            "Combat Specialist",
            "Forsaken Heart"
        ],
        "weightkg": 830,
        "types": [
            "Fire",
            "Dark"
        ],
        "genderR": 127
    },
    "Popplio": {
        "id": 728,
        "bs": {
            "hp": 50,
            "at": 54,
            "df": 54,
            "sa": 66,
            "sd": 56,
            "sp": 40
        },
        "abilities": [
            "Cute Charm",
            "Pixilate",
            "Prankster"
        ],
        "innates": [
            "Torrent",
            "Serene Grace",
            "Dancer"
        ],
        "weightkg": 75,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Brionne": {
        "id": 729,
        "bs": {
            "hp": 60,
            "at": 69,
            "df": 69,
            "sa": 91,
            "sd": 81,
            "sp": 50
        },
        "abilities": [
            "Competitive",
            "Amplifier",
            "Resonance"
        ],
        "innates": [
            "Torrent",
            "Liquid Voice",
            "Dancer"
        ],
        "weightkg": 175,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Primarina": {
        "id": 730,
        "bs": {
            "hp": 80,
            "at": 74,
            "df": 79,
            "sa": 126,
            "sd": 116,
            "sp": 60
        },
        "abilities": [
            "Competitive",
            "Amplifier",
            "Resonance"
        ],
        "innates": [
            "Torrent",
            "Liquid Voice",
            "Serene Grace"
        ],
        "weightkg": 440,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 127
    },
    "Primarina Mega": {
        "id": 730,
        "bs": {
            "hp": 80,
            "at": 104,
            "df": 94,
            "sa": 146,
            "sd": 141,
            "sp": 70
        },
        "abilities": [
            "Presto",
            "Presto",
            "Presto"
        ],
        "innates": [
            "Riptide",
            "Liquid Voice",
            "Water Absorb"
        ],
        "weightkg": 440,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 127
    },
    "Pikipek": {
        "id": 731,
        "bs": {
            "hp": 35,
            "at": 75,
            "df": 30,
            "sa": 30,
            "sd": 30,
            "sp": 65
        },
        "abilities": [
            "Pickup",
            "Gluttony",
            "Sheer Force"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Skill Link"
        ],
        "weightkg": 12,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Trumbeak": {
        "id": 732,
        "bs": {
            "hp": 55,
            "at": 85,
            "df": 50,
            "sa": 40,
            "sd": 50,
            "sp": 75
        },
        "abilities": [
            "Pickup",
            "Super Luck",
            "Sheer Force"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Skill Link"
        ],
        "weightkg": 148,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Toucannon": {
        "id": 733,
        "bs": {
            "hp": 80,
            "at": 120,
            "df": 95,
            "sa": 75,
            "sd": 95,
            "sp": 60
        },
        "abilities": [
            "Combustion",
            "Super Luck",
            "Sheer Force"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Skill Link"
        ],
        "weightkg": 260,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Toucannon Mega"
        ]
    },
    "Toucannon Mega": {
        "id": 733,
        "bs": {
            "hp": 80,
            "at": 120,
            "df": 110,
            "sa": 135,
            "sd": 110,
            "sp": 70
        },
        "abilities": [
            "Sturdy",
            "Filter",
            "Sheer Force"
        ],
        "innates": [
            "Steel Barrel",
            "Iron Barrage",
            "Pyro Shells"
        ],
        "weightkg": 260,
        "types": [
            "Normal",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Toucannon"
        ]
    },
    "Yungoos": {
        "id": 734,
        "bs": {
            "hp": 48,
            "at": 70,
            "df": 30,
            "sa": 30,
            "sd": 30,
            "sp": 45
        },
        "abilities": [
            "Ambush",
            "Hustle",
            "Opportunist"
        ],
        "innates": [
            "Stakeout",
            "Strong Jaw",
            "Predator"
        ],
        "weightkg": 60,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Gumshoos": {
        "id": 735,
        "bs": {
            "hp": 88,
            "at": 110,
            "df": 80,
            "sa": 55,
            "sd": 80,
            "sp": 45
        },
        "abilities": [
            "Ambush",
            "Analytic",
            "Opportunist"
        ],
        "innates": [
            "Stakeout",
            "Strong Jaw",
            "Predator"
        ],
        "weightkg": 142,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Grubbin": {
        "id": 736,
        "bs": {
            "hp": 47,
            "at": 55,
            "df": 45,
            "sa": 62,
            "sd": 45,
            "sp": 46
        },
        "abilities": [
            "Electrocytes",
            "Mold Breaker",
            "Sap Sipper"
        ],
        "innates": [
            "Swarm",
            "Earthbound",
            "Grip Pincer"
        ],
        "weightkg": 44,
        "types": [
            "Bug",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Charjabug": {
        "id": 737,
        "bs": {
            "hp": 57,
            "at": 55,
            "df": 95,
            "sa": 102,
            "sd": 75,
            "sp": 36
        },
        "abilities": [
            "Generator",
            "Mold Breaker",
            "Battery"
        ],
        "innates": [
            "Swarm",
            "Shell Armor",
            "Volt Absorb"
        ],
        "weightkg": 105,
        "types": [
            "Bug",
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Vikavolt": {
        "id": 738,
        "bs": {
            "hp": 77,
            "at": 95,
            "df": 99,
            "sa": 145,
            "sd": 75,
            "sp": 109
        },
        "abilities": [
            "Speed Boost",
            "Aerodynamics",
            "Overcharge"
        ],
        "innates": [
            "Swarm",
            "Levitate",
            "Electrocytes"
        ],
        "weightkg": 450,
        "types": [
            "Bug",
            "Electric"
        ],
        "genderR": 127
    },
    "Crabrawler": {
        "id": 739,
        "bs": {
            "hp": 62,
            "at": 82,
            "df": 57,
            "sa": 42,
            "sd": 47,
            "sp": 63
        },
        "abilities": [
            "Anger Point",
            "Iron Fist",
            "Defiant"
        ],
        "innates": [
            "Grip Pincer",
            "Hyper Cutter",
            "Moxie"
        ],
        "weightkg": 70,
        "types": [
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Crabominable": {
        "id": 740,
        "bs": {
            "hp": 97,
            "at": 132,
            "df": 97,
            "sa": 62,
            "sd": 87,
            "sp": 43
        },
        "abilities": [
            "Pretentious",
            "Hyper Aggressive",
            "Raging Boxer"
        ],
        "innates": [
            "Super Slammer",
            "Anger Point",
            "Permafrost"
        ],
        "weightkg": 1800,
        "types": [
            "Fighting",
            "Ice"
        ],
        "genderR": 127
    },
    "Crabrawler Redux": {
        "id": 739,
        "bs": {
            "hp": 62,
            "at": 72,
            "df": 77,
            "sa": 32,
            "sd": 57,
            "sp": 53
        },
        "abilities": [
            "Bulletproof",
            "Merciless",
            "Fighter"
        ],
        "innates": [
            "Spike Armor",
            "Hyper Aggressive",
            "Shed Skin"
        ],
        "weightkg": 70,
        "types": [
            "Fighting",
            "Dark"
        ],
        "genderR": 127
    },
    "Crabominable Redux": {
        "id": 740,
        "bs": {
            "hp": 97,
            "at": 122,
            "df": 117,
            "sa": 77,
            "sd": 72,
            "sp": 33
        },
        "abilities": [
            "Merciless",
            "Grip Pincer",
            "Raging Boxer"
        ],
        "innates": [
            "Spike Armor",
            "Super Slammer",
            "Shed Skin"
        ],
        "weightkg": 1800,
        "types": [
            "Fighting",
            "Dark"
        ],
        "genderR": 127
    },
    "Oricorio": {
        "id": 741,
        "bs": {
            "hp": 75,
            "at": 70,
            "df": 70,
            "sa": 108,
            "sd": 70,
            "sp": 103
        },
        "abilities": [
            "Dancer",
            "Prankster",
            "Two Step"
        ],
        "innates": [
            "Serene Grace",
            "Flash Fire",
            "Flock"
        ],
        "weightkg": 34,
        "types": [
            "Fire",
            "Flying"
        ],
        "genderR": 190,
        "otherFormes": [
            "Oricorio Pom Pom",
            "Oricorio Pau",
            "Oricorio Sensu"
        ],
        "nfe": true
    },
    "Oricorio Pom Pom": {
        "id": 741,
        "bs": {
            "hp": 75,
            "at": 70,
            "df": 70,
            "sa": 108,
            "sd": 70,
            "sp": 103
        },
        "abilities": [
            "Dancer",
            "Prankster",
            "Two Step"
        ],
        "innates": [
            "Serene Grace",
            "Lightning Rod",
            "Flock"
        ],
        "weightkg": 34,
        "types": [
            "Electric",
            "Flying"
        ],
        "genderR": 190,
        "otherFormes": [
            "Oricorio"
        ]
    },
    "Oricorio Pau": {
        "id": 741,
        "bs": {
            "hp": 75,
            "at": 70,
            "df": 70,
            "sa": 108,
            "sd": 70,
            "sp": 103
        },
        "abilities": [
            "Dancer",
            "Prankster",
            "Two Step"
        ],
        "innates": [
            "Serene Grace",
            "Psychic Mind",
            "Flock"
        ],
        "weightkg": 34,
        "types": [
            "Psychic",
            "Flying"
        ],
        "genderR": 190,
        "otherFormes": [
            "Oricorio"
        ]
    },
    "Oricorio Sensu": {
        "id": 741,
        "bs": {
            "hp": 75,
            "at": 70,
            "df": 70,
            "sa": 108,
            "sd": 70,
            "sp": 103
        },
        "abilities": [
            "Dancer",
            "Smokey Maneuvers",
            "Two Step"
        ],
        "innates": [
            "Serene Grace",
            "Phantom Pain",
            "Flock"
        ],
        "weightkg": 34,
        "types": [
            "Ghost",
            "Flying"
        ],
        "genderR": 190,
        "otherFormes": [
            "Oricorio"
        ]
    },
    "Oricorio Mega": {
        "id": 741,
        "bs": {
            "hp": 75,
            "at": 70,
            "df": 90,
            "sa": 138,
            "sd": 90,
            "sp": 133
        },
        "abilities": [
            "Dancer",
            "Prankster",
            "Two Step"
        ],
        "innates": [
            "Color Spectrum",
            "Aerialist",
            "Serene Grace"
        ],
        "weightkg": 34,
        "types": [
            "Flying"
        ],
        "genderR": 190
    },
    "Cutiefly": {
        "id": 742,
        "bs": {
            "hp": 40,
            "at": 45,
            "df": 40,
            "sa": 55,
            "sd": 40,
            "sp": 84
        },
        "abilities": [
            "Run Away",
            "Cute Charm",
            "Sweet Veil"
        ],
        "innates": [
            "Levitate",
            "Shield Dust",
            "Effect Spore"
        ],
        "weightkg": 2,
        "types": [
            "Bug",
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Ribombee": {
        "id": 743,
        "bs": {
            "hp": 60,
            "at": 55,
            "df": 60,
            "sa": 95,
            "sd": 70,
            "sp": 124
        },
        "abilities": [
            "Compound Eyes",
            "Friend Guard",
            "Powder Burst"
        ],
        "innates": [
            "Levitate",
            "Shield Dust",
            "Pastel Veil"
        ],
        "weightkg": 5,
        "types": [
            "Bug",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Ribombee Mega"
        ]
    },
    "Ribombee Redux": {
        "id": 743,
        "bs": {
            "hp": 60,
            "at": 105,
            "df": 60,
            "sa": 55,
            "sd": 70,
            "sp": 114
        },
        "abilities": [
            "Shield Dust",
            "Overcharge",
            "Sniper"
        ],
        "innates": [
            "Hover",
            "Archer",
            "Merciless"
        ],
        "weightkg": 5,
        "types": [
            "Bug",
            "Electric"
        ],
        "genderR": 127
    },
    "Ribombee Mega": {
        "id": 743,
        "bs": {
            "hp": 60,
            "at": 55,
            "df": 70,
            "sa": 130,
            "sd": 105,
            "sp": 144
        },
        "abilities": [
            "Fairy Aura",
            "Friend Guard",
            "Dazzling"
        ],
        "innates": [
            "Aerialist",
            "Radiance",
            "Trickster"
        ],
        "weightkg": 5,
        "types": [
            "Bug",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Ribombee"
        ]
    },
    "Rockruff": {
        "id": 744,
        "bs": {
            "hp": 45,
            "at": 65,
            "df": 40,
            "sa": 30,
            "sd": 40,
            "sp": 60
        },
        "abilities": [
            "Steadfast",
            "Vital Spirit",
            "Own Tempo"
        ],
        "innates": [
            "Keen Eye",
            "Opportunist",
            "Rock Head"
        ],
        "weightkg": 92,
        "types": [
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Rockruff Own Tempo"
        ],
        "nfe": true
    },
    "Lycanroc": {
        "id": 745,
        "bs": {
            "hp": 75,
            "at": 115,
            "df": 65,
            "sa": 55,
            "sd": 65,
            "sp": 112
        },
        "abilities": [
            "Speed Force",
            "Tectonize",
            "Violent Rush"
        ],
        "innates": [
            "Sand Veil",
            "Sand Rush",
            "Rock Head"
        ],
        "weightkg": 250,
        "types": [
            "Rock",
            "Ground"
        ],
        "genderR": 127,
        "otherFormes": [
            "Lycanroc Midnight",
            "Lycanroc Dusk"
        ]
    },
    "Lycanroc Midnight": {
        "id": 745,
        "bs": {
            "hp": 85,
            "at": 115,
            "df": 75,
            "sa": 55,
            "sd": 75,
            "sp": 82
        },
        "abilities": [
            "Tough Claws",
            "Anger Point",
            "Predator"
        ],
        "innates": [
            "No Guard",
            "Nocturnal",
            "Hyper Aggressive"
        ],
        "weightkg": 250,
        "types": [
            "Rock",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Lycanroc"
        ]
    },
    "Lycanroc Dusk": {
        "id": 745,
        "bs": {
            "hp": 75,
            "at": 117,
            "df": 65,
            "sa": 55,
            "sd": 65,
            "sp": 110
        },
        "abilities": [
            "Tough Claws",
            "Moxie",
            "Predator"
        ],
        "innates": [
            "Opportunist",
            "Fatal Precision",
            "Rock Head"
        ],
        "weightkg": 250,
        "types": [
            "Rock",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Lycanroc"
        ]
    },
    "Lycanroc Eclipse": {
        "id": 745,
        "bs": {
            "hp": 85,
            "at": 76,
            "df": 55,
            "sa": 85,
            "sd": 75,
            "sp": 111
        },
        "abilities": [
            "Lunar Eclipse",
            "Smokey Maneuvers",
            "Weak Armor"
        ],
        "innates": [
            "Dead Power",
            "To The Bone",
            "Soul Eater"
        ],
        "weightkg": 250,
        "types": [
            "Rock",
            "Ghost"
        ],
        "genderR": 127
    },
    "Lycanroc Twilight": {
        "id": 745,
        "bs": {
            "hp": 92,
            "at": 53,
            "df": 75,
            "sa": 115,
            "sd": 64,
            "sp": 88
        },
        "abilities": [
            "Mind Crunch",
            "On the Prowl",
            "Determination"
        ],
        "innates": [
            "Rockhard Will",
            "Moon Spirit",
            "Dazzling"
        ],
        "weightkg": 250,
        "types": [
            "Rock",
            "Fairy"
        ],
        "genderR": 127
    },
    "Rockruff Own Tempo": {
        "id": 744,
        "bs": {
            "hp": 45,
            "at": 65,
            "df": 40,
            "sa": 30,
            "sd": 40,
            "sp": 60
        },
        "abilities": [
            "Own Tempo",
            "Own Tempo",
            "Own Tempo"
        ],
        "innates": [
            "Keen Eye",
            "Opportunist",
            "Rock Head"
        ],
        "weightkg": 92,
        "types": [
            "Rock"
        ],
        "genderR": 127,
        "otherFormes": [
            "Rockruff"
        ],
        "nfe": true
    },
    "Wishiwashi": {
        "id": 746,
        "bs": {
            "hp": 45,
            "at": 20,
            "df": 20,
            "sa": 25,
            "sd": 25,
            "sp": 40
        },
        "abilities": [
            "Water Veil",
            "Tidal Rush",
            "Hydration"
        ],
        "innates": [
            "Schooling",
            "Regenerator",
            "Multiscale"
        ],
        "weightkg": 3,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Wishiwashi School"
        ]
    },
    "Wishiwashi School": {
        "id": 746,
        "bs": {
            "hp": 45,
            "at": 140,
            "df": 130,
            "sa": 140,
            "sd": 135,
            "sp": 30
        },
        "abilities": [
            "Water Veil",
            "Tidal Rush",
            "Hydration"
        ],
        "innates": [
            "Schooling",
            "Regenerator",
            "Multiscale"
        ],
        "weightkg": 3,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Wishiwashi"
        ]
    },
    "Mareanie": {
        "id": 747,
        "bs": {
            "hp": 60,
            "at": 53,
            "df": 62,
            "sa": 43,
            "sd": 52,
            "sp": 45
        },
        "abilities": [
            "Stall",
            "Battle Armor",
            "Toxic Debris"
        ],
        "innates": [
            "Poison Point",
            "Regenerator",
            "Limber"
        ],
        "weightkg": 80,
        "types": [
            "Poison",
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Toxapex": {
        "id": 748,
        "bs": {
            "hp": 75,
            "at": 63,
            "df": 152,
            "sa": 53,
            "sd": 142,
            "sp": 35
        },
        "abilities": [
            "Battle Armor",
            "Fort Knox",
            "Toxic Debris"
        ],
        "innates": [
            "Poison Touch",
            "Regenerator",
            "Rough Skin"
        ],
        "weightkg": 145,
        "types": [
            "Poison",
            "Water"
        ],
        "genderR": 127
    },
    "Mudbray": {
        "id": 749,
        "bs": {
            "hp": 70,
            "at": 100,
            "df": 70,
            "sa": 45,
            "sd": 55,
            "sp": 45
        },
        "abilities": [
            "Stamina",
            "Unaware",
            "Fortitude"
        ],
        "innates": [
            "Own Tempo",
            "Striker",
            "Overcoat"
        ],
        "weightkg": 1100,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Mudsdale": {
        "id": 750,
        "bs": {
            "hp": 100,
            "at": 125,
            "df": 100,
            "sa": 55,
            "sd": 85,
            "sp": 35
        },
        "abilities": [
            "Own Tempo",
            "Striker",
            "Sheer Force"
        ],
        "innates": [
            "Stamina",
            "Battle Armor",
            "Water Compaction"
        ],
        "weightkg": 9200,
        "types": [
            "Ground"
        ],
        "genderR": 127
    },
    "Dewpider": {
        "id": 751,
        "bs": {
            "hp": 38,
            "at": 60,
            "df": 52,
            "sa": 40,
            "sd": 72,
            "sp": 27
        },
        "abilities": [
            "Spider Lair",
            "Water Veil",
            "Predator"
        ],
        "innates": [
            "Water Bubble",
            "Water Absorb",
            "Overcoat"
        ],
        "weightkg": 40,
        "types": [
            "Water",
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Araquanid": {
        "id": 752,
        "bs": {
            "hp": 68,
            "at": 90,
            "df": 92,
            "sa": 50,
            "sd": 132,
            "sp": 42
        },
        "abilities": [
            "Water Veil",
            "Opportunist",
            "Spider Lair"
        ],
        "innates": [
            "Water Bubble",
            "Water Absorb",
            "Predator"
        ],
        "weightkg": 820,
        "types": [
            "Water",
            "Bug"
        ],
        "genderR": 127
    },
    "Dewpider Redux": {
        "id": 751,
        "bs": {
            "hp": 38,
            "at": 65,
            "df": 72,
            "sa": 40,
            "sd": 27,
            "sp": 47
        },
        "abilities": [
            "Ice Body",
            "Water Absorb",
            "Spider Lair"
        ],
        "innates": [
            "Deep Freeze",
            "Rough Skin",
            "Swarm"
        ],
        "weightkg": 40,
        "types": [
            "Ice",
            "Bug"
        ],
        "genderR": 127
    },
    "Araquanid Redux": {
        "id": 752,
        "bs": {
            "hp": 68,
            "at": 100,
            "df": 112,
            "sa": 60,
            "sd": 52,
            "sp": 82
        },
        "abilities": [
            "Ice Body",
            "Water Absorb",
            "Spider Lair"
        ],
        "innates": [
            "Deep Freeze",
            "Rough Skin",
            "Swarm"
        ],
        "weightkg": 820,
        "types": [
            "Ice",
            "Bug"
        ],
        "genderR": 127
    },
    "Fomantis": {
        "id": 753,
        "bs": {
            "hp": 40,
            "at": 55,
            "df": 35,
            "sa": 50,
            "sd": 35,
            "sp": 35
        },
        "abilities": [
            "Ambush",
            "Chloroplast",
            "Contrary"
        ],
        "innates": [
            "Soothing Aroma",
            "Opportunist",
            "Hyper Cutter"
        ],
        "weightkg": 15,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Lurantis": {
        "id": 754,
        "bs": {
            "hp": 90,
            "at": 100,
            "df": 95,
            "sa": 59,
            "sd": 90,
            "sp": 96
        },
        "abilities": [
            "Tinted Lens",
            "Chloroplast",
            "Contrary"
        ],
        "innates": [
            "Scavenger",
            "Intimidate",
            "Hyper Cutter"
        ],
        "weightkg": 185,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Morelull": {
        "id": 755,
        "bs": {
            "hp": 40,
            "at": 35,
            "df": 55,
            "sa": 65,
            "sd": 75,
            "sp": 15
        },
        "abilities": [
            "Rain Dish",
            "Damp",
            "Scavenger"
        ],
        "innates": [
            "Illuminate",
            "Dry Skin",
            "Poison Absorb"
        ],
        "weightkg": 15,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Shiinotic": {
        "id": 756,
        "bs": {
            "hp": 60,
            "at": 45,
            "df": 80,
            "sa": 90,
            "sd": 100,
            "sp": 30
        },
        "abilities": [
            "Dreamcatcher",
            "Twist. Dimension",
            "Poison Heal"
        ],
        "innates": [
            "Poison Absorb",
            "Fairy Aura",
            "Bad Dreams"
        ],
        "weightkg": 115,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 127
    },
    "Salandit": {
        "id": 757,
        "bs": {
            "hp": 48,
            "at": 71,
            "df": 40,
            "sa": 71,
            "sd": 40,
            "sp": 77
        },
        "abilities": [
            "Half Drake",
            "Competitive",
            "Exploit Weakness"
        ],
        "innates": [
            "Poison Absorb",
            "Poison Touch",
            "Corrosion"
        ],
        "weightkg": 48,
        "types": [
            "Poison",
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Salazzle": {
        "id": 758,
        "bs": {
            "hp": 68,
            "at": 64,
            "df": 60,
            "sa": 111,
            "sd": 60,
            "sp": 117
        },
        "abilities": [
            "Merciless",
            "Competitive",
            "Exploit Weakness"
        ],
        "innates": [
            "Corrosion",
            "Queenly Majesty",
            "Half Drake"
        ],
        "weightkg": 222,
        "types": [
            "Poison",
            "Fire"
        ],
        "genderR": 254
    },
    "Stufful": {
        "id": 759,
        "bs": {
            "hp": 70,
            "at": 75,
            "df": 50,
            "sa": 45,
            "sd": 50,
            "sp": 50
        },
        "abilities": [
            "Scrappy",
            "Guilt Trip",
            "Sheer Force"
        ],
        "innates": [
            "Fluffy",
            "Cute Charm",
            "Unaware"
        ],
        "weightkg": 68,
        "types": [
            "Normal",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Stufful Redux"
        ],
        "nfe": true
    },
    "Bewear": {
        "id": 760,
        "bs": {
            "hp": 120,
            "at": 125,
            "df": 80,
            "sa": 55,
            "sd": 60,
            "sp": 60
        },
        "abilities": [
            "Guts",
            "Unnerve",
            "Sheer Force"
        ],
        "innates": [
            "Fluffy",
            "Unaware",
            "Lumberjack"
        ],
        "weightkg": 1350,
        "types": [
            "Normal",
            "Fighting"
        ],
        "genderR": 127,
        "otherFormes": [
            "Bewear Redux"
        ]
    },
    "Bewear Angry": {
        "id": 760,
        "bs": {
            "hp": 120,
            "at": 135,
            "df": 100,
            "sa": 55,
            "sd": 60,
            "sp": 130
        },
        "abilities": [
            "Blind Rage",
            "Blind Rage",
            "Blind Rage"
        ],
        "innates": [
            "Parental Bond",
            "Combat Specialist",
            "Fur Coat"
        ],
        "weightkg": 1350,
        "types": [
            "Normal",
            "Fighting"
        ],
        "genderR": 127
    },
    "Stufful Redux": {
        "id": 759,
        "bs": {
            "hp": 70,
            "at": 65,
            "df": 60,
            "sa": 65,
            "sd": 45,
            "sp": 35
        },
        "abilities": [
            "Cute Charm",
            "Unaware",
            "Sheer Force"
        ],
        "innates": [
            "Fluffy",
            "Guts",
            "Innards Out"
        ],
        "weightkg": 68,
        "types": [
            "Normal",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Stufful"
        ],
        "nfe": true
    },
    "Bewear Redux": {
        "id": 760,
        "bs": {
            "hp": 120,
            "at": 115,
            "df": 80,
            "sa": 85,
            "sd": 55,
            "sp": 45
        },
        "abilities": [
            "No Guard",
            "Hyper Aggressive",
            "Guilt Trip"
        ],
        "innates": [
            "Fluffy",
            "Entrance",
            "Cute Charm"
        ],
        "weightkg": 1350,
        "types": [
            "Normal",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Bewear"
        ]
    },
    "Bounsweet": {
        "id": 761,
        "bs": {
            "hp": 42,
            "at": 50,
            "df": 30,
            "sa": 30,
            "sd": 30,
            "sp": 52
        },
        "abilities": [
            "Oblivious",
            "Prankster",
            "Supersweet Syrup"
        ],
        "innates": [
            "Guilt Trip",
            "Leaf Guard",
            "Sweet Veil"
        ],
        "weightkg": 32,
        "types": [
            "Grass"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Steenee": {
        "id": 762,
        "bs": {
            "hp": 52,
            "at": 70,
            "df": 40,
            "sa": 40,
            "sd": 40,
            "sp": 82
        },
        "abilities": [
            "Chlorophyll",
            "Soothing Aroma",
            "Friend Guard"
        ],
        "innates": [
            "Striker",
            "Oblivious",
            "Shell Armor"
        ],
        "weightkg": 82,
        "types": [
            "Grass"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Tsareena": {
        "id": 763,
        "bs": {
            "hp": 72,
            "at": 120,
            "df": 90,
            "sa": 50,
            "sd": 90,
            "sp": 108
        },
        "abilities": [
            "Oblivious",
            "Hyper Aggressive",
            "Rivalry"
        ],
        "innates": [
            "Looter",
            "Striker",
            "Queenly Majesty"
        ],
        "weightkg": 214,
        "types": [
            "Grass",
            "Fighting"
        ],
        "genderR": 254
    },
    "Bounsweet Redux": {
        "id": 761,
        "bs": {
            "hp": 38,
            "at": 22,
            "df": 30,
            "sa": 50,
            "sd": 30,
            "sp": 64
        },
        "abilities": [
            "Oblivious",
            "Magic Guard",
            "Inflatable"
        ],
        "innates": [
            "Water Bubble",
            "Limber",
            "Let's Roll"
        ],
        "weightkg": 32,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 254
    },
    "Steenee Redux": {
        "id": 762,
        "bs": {
            "hp": 48,
            "at": 32,
            "df": 40,
            "sa": 70,
            "sd": 40,
            "sp": 94
        },
        "abilities": [
            "Oblivious",
            "Magic Guard",
            "Friend Guard"
        ],
        "innates": [
            "Water Bubble",
            "Limber",
            "Thick Fat"
        ],
        "weightkg": 82,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 254
    },
    "Tsareena Redux": {
        "id": 763,
        "bs": {
            "hp": 68,
            "at": 42,
            "df": 90,
            "sa": 120,
            "sd": 90,
            "sp": 120
        },
        "abilities": [
            "Inflatable",
            "Momentum",
            "Oblivious"
        ],
        "innates": [
            "Water Bubble",
            "Limber",
            "Queenly Majesty"
        ],
        "weightkg": 214,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 254
    },
    "Tsareena Mega": {
        "id": 763,
        "bs": {
            "hp": 68,
            "at": 62,
            "df": 100,
            "sa": 140,
            "sd": 130,
            "sp": 130
        },
        "abilities": [
            "Inflatable",
            "Loud Bang",
            "Prankster"
        ],
        "innates": [
            "Water Bubble",
            "Amplifier",
            "Queenly Majesty"
        ],
        "weightkg": 214,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 254
    },
    "Tsareena Mega Redux": {
        "id": 763,
        "bs": {
            "hp": 68,
            "at": 62,
            "df": 100,
            "sa": 140,
            "sd": 130,
            "sp": 130
        },
        "abilities": [
            "Inflatable",
            "Loud Bang",
            "Prankster"
        ],
        "innates": [
            "Water Bubble",
            "Amplifier",
            "Queenly Majesty"
        ],
        "weightkg": 214,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 254
    },
    "Comfey": {
        "id": 764,
        "bs": {
            "hp": 76,
            "at": 52,
            "df": 90,
            "sa": 82,
            "sd": 110,
            "sp": 100
        },
        "abilities": [
            "Flower Veil",
            "Triage",
            "Grassy Surge"
        ],
        "innates": [
            "Natural Cure",
            "Wonder Skin",
            "Regenerator"
        ],
        "weightkg": 3,
        "types": [
            "Fairy"
        ],
        "genderR": 190
    },
    "Oranguru": {
        "id": 765,
        "bs": {
            "hp": 90,
            "at": 60,
            "df": 80,
            "sa": 90,
            "sd": 110,
            "sp": 60
        },
        "abilities": [
            "Friend Guard",
            "Prankster",
            "Twist. Dimension"
        ],
        "innates": [
            "Gifted Mind",
            "Self Sufficient",
            "Healer"
        ],
        "weightkg": 760,
        "types": [
            "Normal",
            "Psychic"
        ],
        "genderR": 127
    },
    "Passimian": {
        "id": 766,
        "bs": {
            "hp": 90,
            "at": 120,
            "df": 90,
            "sa": 40,
            "sd": 60,
            "sp": 90
        },
        "abilities": [
            "Receiver",
            "Opportunist",
            "Unburden"
        ],
        "innates": [
            "Harvest",
            "Avenger",
            "Long Reach"
        ],
        "weightkg": 828,
        "types": [
            "Fighting"
        ],
        "genderR": 127
    },
    "Wimpod": {
        "id": 767,
        "bs": {
            "hp": 25,
            "at": 65,
            "df": 70,
            "sa": 20,
            "sd": 30,
            "sp": 80
        },
        "abilities": [
            "Wimp Out",
            "Pickup",
            "Guilt Trip"
        ],
        "innates": [
            "Shell Armor",
            "Coward",
            "Looter"
        ],
        "weightkg": 120,
        "types": [
            "Bug",
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Golisopod": {
        "id": 768,
        "bs": {
            "hp": 75,
            "at": 125,
            "df": 140,
            "sa": 60,
            "sd": 90,
            "sp": 40
        },
        "abilities": [
            "Emergency Exit",
            "Tough Claws",
            "Predator"
        ],
        "innates": [
            "Shell Armor",
            "Pretentious",
            "Hyper Cutter"
        ],
        "weightkg": 1080,
        "types": [
            "Bug",
            "Water"
        ],
        "genderR": 127
    },
    "Golisopod Mega": {
        "id": 768,
        "bs": {
            "hp": 75,
            "at": 155,
            "df": 140,
            "sa": 100,
            "sd": 100,
            "sp": 60
        },
        "abilities": [
            "No Turning Back",
            "No Turning Back",
            "No Turning Back"
        ],
        "innates": [
            "Shell Armor",
            "Sturdy",
            "Tough Claws"
        ],
        "weightkg": 1080,
        "types": [
            "Bug",
            "Water"
        ],
        "genderR": 127
    },
    "Sandygast": {
        "id": 769,
        "bs": {
            "hp": 55,
            "at": 55,
            "df": 90,
            "sa": 70,
            "sd": 55,
            "sp": 15
        },
        "abilities": [
            "Fort Knox",
            "Arena Trap",
            "Sand Stream"
        ],
        "innates": [
            "Water Compaction",
            "Self Sufficient",
            "Sand Veil"
        ],
        "weightkg": 700,
        "types": [
            "Ghost",
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Palossand": {
        "id": 770,
        "bs": {
            "hp": 85,
            "at": 75,
            "df": 120,
            "sa": 100,
            "sd": 85,
            "sp": 35
        },
        "abilities": [
            "Fort Knox",
            "Arena Trap",
            "Sand Stream"
        ],
        "innates": [
            "Water Compaction",
            "Sand Guard",
            "Self Sufficient"
        ],
        "weightkg": 2500,
        "types": [
            "Ghost",
            "Ground"
        ],
        "genderR": 127
    },
    "Pyukumuku": {
        "id": 771,
        "bs": {
            "hp": 105,
            "at": 60,
            "df": 200,
            "sa": 30,
            "sd": 200,
            "sp": 5
        },
        "abilities": [
            "Corrosion",
            "Perish Body",
            "Triage"
        ],
        "innates": [
            "Unaware",
            "Pressure",
            "Innards Out"
        ],
        "weightkg": 12,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Type: Null": {
        "id": 772,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 59
        },
        "abilities": [
            "Adaptability",
            "Unaware",
            "Weak Armor"
        ],
        "innates": [
            "Battle Armor",
            "Spike Armor",
            "Protean"
        ],
        "weightkg": 1205,
        "types": [
            "Normal"
        ],
        "genderR": 2
    },
    "Silvally": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Normalize",
            "Unaware",
            "Anger Point"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Scrappy"
        ],
        "weightkg": 1005,
        "types": [
            "Normal"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally Fighting",
            "Silvally Flying",
            "Silvally Poison",
            "Silvally Ground",
            "Silvally Rock",
            "Silvally Bug",
            "Silvally Ghost",
            "Silvally Steel",
            "Silvally Fire",
            "Silvally Water",
            "Silvally Grass",
            "Silvally Electric",
            "Silvally Psychic",
            "Silvally Ice",
            "Silvally Dragon",
            "Silvally Dark",
            "Silvally Fairy"
        ]
    },
    "Silvally Fighting": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Tipping Point",
            "Fighter"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Inner Focus"
        ],
        "weightkg": 1005,
        "types": [
            "Fighting"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Flying": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Cloud Nine",
            "Speed Force"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Aerialist"
        ],
        "weightkg": 1005,
        "types": [
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Poison": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Merciless",
            "Corrosion"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Poison Point"
        ],
        "weightkg": 1005,
        "types": [
            "Poison"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Ground": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Aftershock",
            "Rough Skin"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Earth Eater"
        ],
        "weightkg": 1005,
        "types": [
            "Ground"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Rock": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Battle Armor",
            "Juggernaut"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Mountaineer"
        ],
        "weightkg": 1005,
        "types": [
            "Rock"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Bug": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Tinted Lens",
            "Web Spinner"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Predator"
        ],
        "weightkg": 1005,
        "types": [
            "Bug"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Ghost": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Blood Price",
            "Shadow Tag"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Cursed Body"
        ],
        "weightkg": 1005,
        "types": [
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Steel": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Mirror Armor",
            "Iron Barbs"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Armor Tail"
        ],
        "weightkg": 1005,
        "types": [
            "Steel"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Fire": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Molten Down",
            "Flame Body"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Flash Fire"
        ],
        "weightkg": 1005,
        "types": [
            "Fire"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Water": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Damp",
            "Water Veil"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Marine Apex"
        ],
        "weightkg": 1005,
        "types": [
            "Water"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Grass": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Effect Spore",
            "Self Sufficient"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Raw Wood"
        ],
        "weightkg": 1005,
        "types": [
            "Grass"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Electric": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Generator",
            "Adrenaline Rush"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Lightning Rod"
        ],
        "weightkg": 1005,
        "types": [
            "Electric"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Psychic": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Analytic",
            "Neuroforce"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Magic Bounce"
        ],
        "weightkg": 1005,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Ice": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Ice Dew",
            "Weak Armor"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Freezing Point"
        ],
        "weightkg": 1005,
        "types": [
            "Ice"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Dragon": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Multiscale",
            "Tough Claws"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Overwhelm"
        ],
        "weightkg": 1005,
        "types": [
            "Dragon"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Dark": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Bad Luck",
            "Frisk"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Justified"
        ],
        "weightkg": 1005,
        "types": [
            "Dark"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Silvally Fairy": {
        "id": 773,
        "bs": {
            "hp": 95,
            "at": 95,
            "df": 95,
            "sa": 95,
            "sd": 95,
            "sp": 95
        },
        "abilities": [
            "Unaware",
            "Prankster",
            "Serene Grace"
        ],
        "innates": [
            "RKS System",
            "Primal Armor",
            "Regenerator"
        ],
        "weightkg": 1005,
        "types": [
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Silvally"
        ]
    },
    "Minior": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 100,
            "sa": 60,
            "sd": 100,
            "sp": 60
        },
        "abilities": [
            "Regenerator",
            "Weak Armor",
            "Loose Rocks"
        ],
        "innates": [
            "Shields Down",
            "Shell Armor",
            "Overcoat"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Minior Meteor Orange",
            "Minior Meteor Yellow",
            "Minior Meteor Green",
            "Minior Meteor Blue",
            "Minior Meteor Indigo",
            "Minior Meteor Violet",
            "Minior Core Red",
            "Minior Core Orange",
            "Minior Core Yellow",
            "Minior Core Green",
            "Minior Core Blue",
            "Minior Core Indigo",
            "Minior Core Violet"
        ],
        "nfe": true
    },
    "Minior Orange": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 100,
            "sa": 60,
            "sd": 100,
            "sp": 60
        },
        "abilities": [
            "Regenerator",
            "Weak Armor",
            "Loose Rocks"
        ],
        "innates": [
            "Shields Down",
            "Shell Armor",
            "Overcoat"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2
    },
    "Minior Yellow": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 100,
            "sa": 60,
            "sd": 100,
            "sp": 60
        },
        "abilities": [
            "Regenerator",
            "Weak Armor",
            "Loose Rocks"
        ],
        "innates": [
            "Shields Down",
            "Shell Armor",
            "Overcoat"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2
    },
    "Minior Green": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 100,
            "sa": 60,
            "sd": 100,
            "sp": 60
        },
        "abilities": [
            "Regenerator",
            "Weak Armor",
            "Loose Rocks"
        ],
        "innates": [
            "Shields Down",
            "Shell Armor",
            "Overcoat"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2
    },
    "Minior Blue": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 100,
            "sa": 60,
            "sd": 100,
            "sp": 60
        },
        "abilities": [
            "Regenerator",
            "Weak Armor",
            "Loose Rocks"
        ],
        "innates": [
            "Shields Down",
            "Shell Armor",
            "Overcoat"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2
    },
    "Minior Indigo": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 100,
            "sa": 60,
            "sd": 100,
            "sp": 60
        },
        "abilities": [
            "Regenerator",
            "Weak Armor",
            "Loose Rocks"
        ],
        "innates": [
            "Shields Down",
            "Shell Armor",
            "Overcoat"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2
    },
    "Minior Violet": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 100,
            "sa": 60,
            "sd": 100,
            "sp": 60
        },
        "abilities": [
            "Regenerator",
            "Weak Armor",
            "Loose Rocks"
        ],
        "innates": [
            "Shields Down",
            "Shell Armor",
            "Overcoat"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2
    },
    "Minior Core Red": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 60,
            "sa": 100,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Bulletproof",
            "Lunar Eclipse",
            "Accelerate"
        ],
        "innates": [
            "Shields Down",
            "Equinox",
            "Frisk"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Minior"
        ]
    },
    "Minior Core Orange": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 60,
            "sa": 100,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Bulletproof",
            "Lunar Eclipse",
            "Accelerate"
        ],
        "innates": [
            "Shields Down",
            "Equinox",
            "Frisk"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Minior"
        ]
    },
    "Minior Core Yellow": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 60,
            "sa": 100,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Bulletproof",
            "Lunar Eclipse",
            "Accelerate"
        ],
        "innates": [
            "Shields Down",
            "Equinox",
            "Frisk"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Minior"
        ]
    },
    "Minior Core Green": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 60,
            "sa": 100,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Bulletproof",
            "Lunar Eclipse",
            "Accelerate"
        ],
        "innates": [
            "Shields Down",
            "Equinox",
            "Frisk"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Minior"
        ]
    },
    "Minior Core Blue": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 60,
            "sa": 100,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Bulletproof",
            "Lunar Eclipse",
            "Accelerate"
        ],
        "innates": [
            "Shields Down",
            "Equinox",
            "Frisk"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Minior"
        ]
    },
    "Minior Core Indigo": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 60,
            "sa": 100,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Bulletproof",
            "Lunar Eclipse",
            "Accelerate"
        ],
        "innates": [
            "Shields Down",
            "Equinox",
            "Frisk"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Minior"
        ]
    },
    "Minior Core Violet": {
        "id": 774,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 60,
            "sa": 100,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Bulletproof",
            "Lunar Eclipse",
            "Accelerate"
        ],
        "innates": [
            "Shields Down",
            "Equinox",
            "Frisk"
        ],
        "weightkg": 400,
        "types": [
            "Rock",
            "Flying"
        ],
        "genderR": 2,
        "otherFormes": [
            "Minior"
        ]
    },
    "Komala": {
        "id": 775,
        "bs": {
            "hp": 65,
            "at": 115,
            "df": 95,
            "sa": 55,
            "sd": 95,
            "sp": 65
        },
        "abilities": [
            "Sweet Dreams",
            "Prankster",
            "Scrappy"
        ],
        "innates": [
            "Comatose",
            "Poison Absorb",
            "Sap Sipper"
        ],
        "weightkg": 199,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Turtonator": {
        "id": 776,
        "bs": {
            "hp": 60,
            "at": 78,
            "df": 135,
            "sa": 111,
            "sd": 85,
            "sp": 36
        },
        "abilities": [
            "Flame Body",
            "Flame Shield",
            "Aftermath"
        ],
        "innates": [
            "Shell Armor",
            "Iron Barbs",
            "Dauntless Shield"
        ],
        "weightkg": 2120,
        "types": [
            "Fire",
            "Dragon"
        ],
        "genderR": 127
    },
    "Togedemaru": {
        "id": 777,
        "bs": {
            "hp": 65,
            "at": 108,
            "df": 83,
            "sa": 40,
            "sd": 73,
            "sp": 106
        },
        "abilities": [
            "Sturdy",
            "Lead Coat",
            "Impenetrable"
        ],
        "innates": [
            "Iron Barbs",
            "Lightning Rod",
            "Loose Quills"
        ],
        "weightkg": 33,
        "types": [
            "Electric",
            "Steel"
        ],
        "genderR": 127
    },
    "Mimikyu": {
        "id": 778,
        "bs": {
            "hp": 55,
            "at": 90,
            "df": 80,
            "sa": 50,
            "sd": 105,
            "sp": 96
        },
        "abilities": [
            "Ethereal Rush",
            "Guilt Trip",
            "Keen Edge"
        ],
        "innates": [
            "Disguise",
            "Rattled",
            "Phantom Pain"
        ],
        "weightkg": 7,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Mimikyu Busted"
        ]
    },
    "Mimikyu Busted": {
        "id": 778,
        "bs": {
            "hp": 55,
            "at": 90,
            "df": 80,
            "sa": 50,
            "sd": 105,
            "sp": 96
        },
        "abilities": [
            "Ethereal Rush",
            "Guilt Trip",
            "Keen Edge"
        ],
        "innates": [
            "Disguise",
            "Violent Rush",
            "Phantom Pain"
        ],
        "weightkg": 7,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "genderR": 127,
        "otherFormes": [
            "Mimikyu"
        ]
    },
    "Mimikyu Apex": {
        "id": 778,
        "bs": {
            "hp": 79,
            "at": 90,
            "df": 80,
            "sa": 90,
            "sd": 105,
            "sp": 96
        },
        "abilities": [
            "Predator",
            "Guilt Trip",
            "Opportunist"
        ],
        "innates": [
            "Disguise",
            "Overcoat",
            "Phantom Pain"
        ],
        "weightkg": 7,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "genderR": 127
    },
    "Mimikyu Primal": {
        "id": 778,
        "bs": {
            "hp": 79,
            "at": 120,
            "df": 90,
            "sa": 120,
            "sd": 115,
            "sp": 116
        },
        "abilities": [
            "Shadow Tag",
            "Fearmonger",
            "Opportunist"
        ],
        "innates": [
            "Patchwork",
            "Pretty Princess",
            "Phantom Pain"
        ],
        "weightkg": 7,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "genderR": 127
    },
    "Mimikyu Apex Busted": {
        "id": 778,
        "bs": {
            "hp": 79,
            "at": 90,
            "df": 80,
            "sa": 90,
            "sd": 105,
            "sp": 96
        },
        "abilities": [
            "Predator",
            "Guilt Trip",
            "Opportunist"
        ],
        "innates": [
            "Disguise",
            "Overcoat",
            "Phantom Pain"
        ],
        "weightkg": 7,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "genderR": 127
    },
    "Mimikyu Rayquaza Busted": {
        "id": 778,
        "bs": {
            "hp": 79,
            "at": 120,
            "df": 90,
            "sa": 120,
            "sd": 115,
            "sp": 116
        },
        "abilities": [
            "Shadow Tag",
            "Fearmonger",
            "Opportunist"
        ],
        "innates": [
            "Patchwork",
            "Pretty Princess",
            "Phantom Pain"
        ],
        "weightkg": 7,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "genderR": 127
    },
    "Bruxish": {
        "id": 779,
        "bs": {
            "hp": 68,
            "at": 105,
            "df": 70,
            "sa": 105,
            "sd": 70,
            "sp": 92
        },
        "abilities": [
            "Strong Jaw",
            "Mind Crunch",
            "Dazzling"
        ],
        "innates": [
            "Psychic Mind",
            "Mold Breaker",
            "On the Prowl"
        ],
        "weightkg": 190,
        "types": [
            "Water",
            "Psychic"
        ],
        "genderR": 127,
        "otherFormes": [
            "Bruxish Mega"
        ]
    },
    "Drampa": {
        "id": 780,
        "bs": {
            "hp": 78,
            "at": 60,
            "df": 90,
            "sa": 135,
            "sd": 106,
            "sp": 36
        },
        "abilities": [
            "Berserk",
            "Huge Power",
            "Friend Guard"
        ],
        "innates": [
            "Avenger",
            "Rampage",
            "Fluffy"
        ],
        "weightkg": 1850,
        "types": [
            "Normal",
            "Dragon"
        ],
        "genderR": 127
    },
    "Dhelmise": {
        "id": 781,
        "bs": {
            "hp": 70,
            "at": 131,
            "df": 120,
            "sa": 76,
            "sd": 90,
            "sp": 40
        },
        "abilities": [
            "Water Absorb",
            "Soul Eater",
            "Sheer Force"
        ],
        "innates": [
            "Metallic",
            "Seaweed",
            "Steelworker"
        ],
        "weightkg": 2100,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 2
    },
    "Jangmo-o": {
        "id": 782,
        "bs": {
            "hp": 45,
            "at": 55,
            "df": 65,
            "sa": 45,
            "sd": 45,
            "sp": 45
        },
        "abilities": [
            "Bulletproof",
            "Soundproof",
            "Rough Skin"
        ],
        "innates": [
            "Overcoat",
            "Battle Armor",
            "Mountaineer"
        ],
        "weightkg": 297,
        "types": [
            "Dragon"
        ],
        "genderR": 127
    },
    "Hakamo-o": {
        "id": 783,
        "bs": {
            "hp": 55,
            "at": 75,
            "df": 90,
            "sa": 65,
            "sd": 70,
            "sp": 65
        },
        "abilities": [
            "Bulletproof",
            "Soundproof",
            "Rough Skin"
        ],
        "innates": [
            "Overcoat",
            "Battle Armor",
            "Mountaineer"
        ],
        "weightkg": 470,
        "types": [
            "Dragon",
            "Fighting"
        ],
        "genderR": 127
    },
    "Kommo-o": {
        "id": 784,
        "bs": {
            "hp": 75,
            "at": 110,
            "df": 125,
            "sa": 100,
            "sd": 105,
            "sp": 85
        },
        "abilities": [
            "Bulletproof",
            "Soundproof",
            "Rough Skin"
        ],
        "innates": [
            "Prism Scales",
            "Battle Armor",
            "Prism Armor"
        ],
        "weightkg": 782,
        "types": [
            "Dragon",
            "Fighting"
        ],
        "genderR": 127
    },
    "Tapu Koko": {
        "id": 785,
        "bs": {
            "hp": 70,
            "at": 115,
            "df": 75,
            "sa": 115,
            "sd": 65,
            "sp": 130
        },
        "abilities": [
            "Speed Boost",
            "Generator",
            "Overcharge"
        ],
        "innates": [
            "Levitate",
            "Electro Surge",
            "Drizzle"
        ],
        "weightkg": 205,
        "types": [
            "Electric",
            "Fairy"
        ],
        "genderR": 2
    },
    "Tapu Lele": {
        "id": 786,
        "bs": {
            "hp": 70,
            "at": 85,
            "df": 75,
            "sa": 130,
            "sd": 115,
            "sp": 95
        },
        "abilities": [
            "Prism Scales",
            "Unaware",
            "Majestic Moth"
        ],
        "innates": [
            "Berserk",
            "Psychic Surge",
            "Multiscale"
        ],
        "weightkg": 186,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 2
    },
    "Tapu Bulu": {
        "id": 787,
        "bs": {
            "hp": 70,
            "at": 130,
            "df": 115,
            "sa": 85,
            "sd": 95,
            "sp": 75
        },
        "abilities": [
            "Grass Pelt",
            "Chloroplast",
            "Harvest"
        ],
        "innates": [
            "Mighty Horn",
            "Grassy Surge",
            "Regenerator"
        ],
        "weightkg": 455,
        "types": [
            "Grass",
            "Fairy"
        ],
        "genderR": 2
    },
    "Tapu Fini": {
        "id": 788,
        "bs": {
            "hp": 70,
            "at": 75,
            "df": 115,
            "sa": 95,
            "sd": 130,
            "sp": 85
        },
        "abilities": [
            "Water Veil",
            "Regenerator",
            "Drizzle"
        ],
        "innates": [
            "Breakwater",
            "Misty Surge",
            "Shell Armor"
        ],
        "weightkg": 212,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 2
    },
    "Cosmog": {
        "id": 789,
        "bs": {
            "hp": 43,
            "at": 29,
            "df": 31,
            "sa": 29,
            "sd": 31,
            "sp": 137
        },
        "abilities": [
            "Unaware",
            "Oblivious",
            "Run Away"
        ],
        "innates": [
            "Levitate",
            "Cute Charm",
            "Dust Cloud"
        ],
        "weightkg": 1,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Cosmoem": {
        "id": 790,
        "bs": {
            "hp": 43,
            "at": 29,
            "df": 131,
            "sa": 29,
            "sd": 131,
            "sp": 37
        },
        "abilities": [
            "Sturdy",
            "Ancient Idol",
            "Prism Armor"
        ],
        "innates": [
            "Levitate",
            "Power Core",
            "Shell Armor"
        ],
        "weightkg": 9999,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Solgaleo": {
        "id": 791,
        "bs": {
            "hp": 137,
            "at": 137,
            "df": 107,
            "sa": 113,
            "sd": 89,
            "sp": 97
        },
        "abilities": [
            "Illuminate",
            "Flash Fire",
            "Sun Worship"
        ],
        "innates": [
            "Solar Flare",
            "Full Metal Body",
            "Prism Armor"
        ],
        "weightkg": 2300,
        "types": [
            "Psychic",
            "Steel"
        ],
        "genderR": 2
    },
    "Lunala": {
        "id": 792,
        "bs": {
            "hp": 137,
            "at": 113,
            "df": 89,
            "sa": 137,
            "sd": 107,
            "sp": 97
        },
        "abilities": [
            "Nocturnal",
            "Low Visibility",
            "Magical Dust"
        ],
        "innates": [
            "Lunar Eclipse",
            "Shadow Shield",
            "Dreamcatcher"
        ],
        "weightkg": 1200,
        "types": [
            "Psychic",
            "Ghost"
        ],
        "genderR": 2
    },
    "Nihilego": {
        "id": 793,
        "bs": {
            "hp": 109,
            "at": 53,
            "df": 47,
            "sa": 127,
            "sd": 131,
            "sp": 103
        },
        "abilities": [
            "Clear Body",
            "Corrosion",
            "Soul Eater"
        ],
        "innates": [
            "Beast Boost",
            "Levitate",
            "Hyper Aggressive"
        ],
        "weightkg": 555,
        "types": [
            "Rock",
            "Poison"
        ],
        "genderR": 2
    },
    "Buzzwole": {
        "id": 794,
        "bs": {
            "hp": 107,
            "at": 139,
            "df": 139,
            "sa": 53,
            "sd": 53,
            "sp": 79
        },
        "abilities": [
            "Big Pecks",
            "Compound Eyes",
            "Defiant"
        ],
        "innates": [
            "Beast Boost",
            "Iron Fist",
            "Raging Boxer"
        ],
        "weightkg": 3336,
        "types": [
            "Bug",
            "Fighting"
        ],
        "genderR": 2
    },
    "Pheromosa": {
        "id": 795,
        "bs": {
            "hp": 71,
            "at": 137,
            "df": 37,
            "sa": 137,
            "sd": 37,
            "sp": 151
        },
        "abilities": [
            "Limber",
            "Speed Force",
            "Queenly Majesty"
        ],
        "innates": [
            "Beast Boost",
            "Speed Boost",
            "Striker"
        ],
        "weightkg": 250,
        "types": [
            "Bug",
            "Fighting"
        ],
        "genderR": 2
    },
    "Xurkitree": {
        "id": 796,
        "bs": {
            "hp": 83,
            "at": 89,
            "df": 71,
            "sa": 173,
            "sd": 71,
            "sp": 83
        },
        "abilities": [
            "Transistor",
            "Lightning Rod",
            "Ground Shock"
        ],
        "innates": [
            "Beast Boost",
            "Volt Rush",
            "Infiltrator"
        ],
        "weightkg": 1000,
        "types": [
            "Electric"
        ],
        "genderR": 2
    },
    "Celesteela": {
        "id": 797,
        "bs": {
            "hp": 97,
            "at": 101,
            "df": 103,
            "sa": 107,
            "sd": 101,
            "sp": 61
        },
        "abilities": [
            "Fortitude",
            "Mirror Armor",
            "Self Repair"
        ],
        "innates": [
            "Beast Boost",
            "Battle Armor",
            "Lead Coat"
        ],
        "weightkg": 9999,
        "types": [
            "Steel",
            "Flying"
        ],
        "genderR": 2
    },
    "Kartana": {
        "id": 798,
        "bs": {
            "hp": 59,
            "at": 181,
            "df": 131,
            "sa": 59,
            "sd": 31,
            "sp": 109
        },
        "abilities": [
            "Sweeping Edge",
            "Aerodynamics",
            "Violent Rush"
        ],
        "innates": [
            "Beast Boost",
            "Hyper Cutter",
            "Keen Edge"
        ],
        "weightkg": 1,
        "types": [
            "Grass",
            "Steel"
        ],
        "genderR": 2
    },
    "Kartana Fallen": {
        "id": 798,
        "bs": {
            "hp": 159,
            "at": 181,
            "df": 149,
            "sa": 67,
            "sd": 101,
            "sp": 113
        },
        "abilities": [
            "Pinnacle Blade",
            "Pinnacle Blade",
            "Pinnacle Blade"
        ],
        "innates": [
            "Beast Boost",
            "Blademaster",
            "Aerodynamics"
        ],
        "weightkg": 1,
        "types": [
            "Grass",
            "Steel"
        ],
        "genderR": 127
    },
    "Guzzlord": {
        "id": 799,
        "bs": {
            "hp": 223,
            "at": 101,
            "df": 53,
            "sa": 97,
            "sd": 53,
            "sp": 43
        },
        "abilities": [
            "Fearmonger",
            "Devourer",
            "Grip Pincer"
        ],
        "innates": [
            "Beast Boost",
            "Thick Fat",
            "Jaws of Carnage"
        ],
        "weightkg": 8880,
        "types": [
            "Dark",
            "Dragon"
        ],
        "genderR": 2
    },
    "Necrozma": {
        "id": 800,
        "bs": {
            "hp": 97,
            "at": 107,
            "df": 101,
            "sa": 127,
            "sd": 89,
            "sp": 79
        },
        "abilities": [
            "Neuroforce",
            "Rampage",
            "Mega Launcher"
        ],
        "innates": [
            "Prism Armor",
            "Metallic",
            "Filter"
        ],
        "weightkg": 2300,
        "types": [
            "Psychic"
        ],
        "genderR": 2,
        "otherFormes": [
            "Necrozma Dusk Mane",
            "Necrozma Dawn Wings",
            "Necrozma Ultra"
        ],
        "nfe": true
    },
    "Dusk Mane": {
        "id": 800,
        "bs": {
            "hp": 97,
            "at": 157,
            "df": 127,
            "sa": 113,
            "sd": 109,
            "sp": 77
        },
        "abilities": [
            "Neuroforce",
            "Rampage",
            "Mega Launcher"
        ],
        "innates": [
            "Solar Flare",
            "Impenetrable",
            "Prism Armor"
        ],
        "weightkg": 2300,
        "types": [
            "Psychic",
            "Steel"
        ],
        "genderR": 2
    },
    "Necrozma Ultra": {
        "id": 800,
        "bs": {
            "hp": 97,
            "at": 167,
            "df": 109,
            "sa": 167,
            "sd": 109,
            "sp": 131
        },
        "abilities": [
            "Soul Eater",
            "Rampage",
            "Mega Launcher"
        ],
        "innates": [
            "Beast Boost",
            "Neuroforce",
            "Levitate"
        ],
        "weightkg": 2300,
        "types": [
            "Psychic",
            "Dragon"
        ],
        "genderR": 2,
        "otherFormes": [
            "Necrozma"
        ]
    },
    "Dawn Wings": {
        "id": 800,
        "bs": {
            "hp": 97,
            "at": 113,
            "df": 109,
            "sa": 157,
            "sd": 127,
            "sp": 77
        },
        "abilities": [
            "Neuroforce",
            "Rampage",
            "Mega Launcher"
        ],
        "innates": [
            "Lunar Eclipse",
            "Shadow Shield",
            "Levitate"
        ],
        "weightkg": 2300,
        "types": [
            "Psychic",
            "Ghost"
        ],
        "genderR": 2
    },
    "Magearna": {
        "id": 801,
        "bs": {
            "hp": 80,
            "at": 95,
            "df": 115,
            "sa": 130,
            "sd": 115,
            "sp": 65
        },
        "abilities": [
            "Steelworker",
            "Pixilate",
            "Clear Body"
        ],
        "innates": [
            "Mirror Armor",
            "Soul-Heart",
            "Power Core"
        ],
        "weightkg": 805,
        "types": [
            "Steel",
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Magearna Original Color"
        ]
    },
    "Magearna Original": {
        "id": 801,
        "bs": {
            "hp": 80,
            "at": 95,
            "df": 115,
            "sa": 130,
            "sd": 115,
            "sp": 65
        },
        "abilities": [
            "Steelworker",
            "Pixilate",
            "Clear Body"
        ],
        "innates": [
            "Mirror Armor",
            "Soul-Heart",
            "Power Core"
        ],
        "weightkg": 805,
        "types": [
            "Steel",
            "Fairy"
        ],
        "genderR": 2
    },
    "Marshadow": {
        "id": 802,
        "bs": {
            "hp": 90,
            "at": 125,
            "df": 80,
            "sa": 90,
            "sd": 90,
            "sp": 125
        },
        "abilities": [
            "Technician",
            "Greater Spirit",
            "Phantom Pain"
        ],
        "innates": [
            "Combat Specialist",
            "Phantom Thief",
            "Unseen Fist"
        ],
        "weightkg": 222,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "genderR": 2
    },
    "Poipole": {
        "id": 803,
        "bs": {
            "hp": 67,
            "at": 73,
            "df": 67,
            "sa": 73,
            "sd": 67,
            "sp": 73
        },
        "abilities": [
            "Corrosion",
            "Opportunist",
            "Spider Lair"
        ],
        "innates": [
            "Beast Boost",
            "Poison Touch",
            "Levitate"
        ],
        "weightkg": 18,
        "types": [
            "Poison"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Naganadel": {
        "id": 804,
        "bs": {
            "hp": 79,
            "at": 79,
            "df": 71,
            "sa": 139,
            "sd": 71,
            "sp": 131
        },
        "abilities": [
            "Corrosion",
            "Sniper",
            "Spider Lair"
        ],
        "innates": [
            "Beast Boost",
            "Levitate",
            "Merciless"
        ],
        "weightkg": 1500,
        "types": [
            "Poison",
            "Dragon"
        ],
        "genderR": 2
    },
    "Stakataka": {
        "id": 805,
        "bs": {
            "hp": 59,
            "at": 139,
            "df": 211,
            "sa": 53,
            "sd": 101,
            "sp": 7
        },
        "abilities": [
            "Solid Rock",
            "Self Repair",
            "Juggernaut"
        ],
        "innates": [
            "Beast Boost",
            "Lead Coat",
            "Fort Knox"
        ],
        "weightkg": 8200,
        "types": [
            "Rock",
            "Steel"
        ],
        "genderR": 2
    },
    "Blacephalon": {
        "id": 806,
        "bs": {
            "hp": 53,
            "at": 107,
            "df": 53,
            "sa": 151,
            "sd": 79,
            "sp": 127
        },
        "abilities": [
            "Magic Guard",
            "Inversion",
            "Prankster"
        ],
        "innates": [
            "Beast Boost",
            "Reckless",
            "Pyromancy"
        ],
        "weightkg": 130,
        "types": [
            "Fire",
            "Ghost"
        ],
        "genderR": 2
    },
    "Zeraora": {
        "id": 807,
        "bs": {
            "hp": 88,
            "at": 112,
            "df": 75,
            "sa": 102,
            "sd": 80,
            "sp": 143
        },
        "abilities": [
            "Iron Fist",
            "Power Fists",
            "Speed Boost"
        ],
        "innates": [
            "Speed Force",
            "Volt Absorb",
            "Tough Claws"
        ],
        "weightkg": 445,
        "types": [
            "Electric"
        ],
        "genderR": 2
    },
    "Meltan": {
        "id": 808,
        "bs": {
            "hp": 81,
            "at": 81,
            "df": 81,
            "sa": 63,
            "sd": 35,
            "sp": 34
        },
        "abilities": [
            "Full Metal Body",
            "Steely Spirit",
            "Gooey"
        ],
        "innates": [
            "Magnet Pull",
            "Sturdy",
            "Transistor"
        ],
        "weightkg": 80,
        "types": [
            "Steel"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Melmetal": {
        "id": 809,
        "bs": {
            "hp": 135,
            "at": 143,
            "df": 143,
            "sa": 80,
            "sd": 65,
            "sp": 34
        },
        "abilities": [
            "Full Metal Body",
            "Steelworker",
            "Heatproof"
        ],
        "innates": [
            "Magnet Pull",
            "Iron Fist",
            "Transistor"
        ],
        "weightkg": 800,
        "types": [
            "Steel"
        ],
        "genderR": 2
    },
    "Melmetal Mega": {
        "id": 809,
        "bs": {
            "hp": 135,
            "at": 183,
            "df": 183,
            "sa": 110,
            "sd": 65,
            "sp": 24
        },
        "abilities": [
            "Atomic Punch",
            "Atomic Punch",
            "Atomic Punch"
        ],
        "innates": [
            "Iron Giant",
            "Steely Spirit",
            "Transistor"
        ],
        "weightkg": 800,
        "types": [
            "Steel"
        ],
        "genderR": 2
    },
    "Grookey": {
        "id": 810,
        "bs": {
            "hp": 55,
            "at": 70,
            "df": 50,
            "sa": 40,
            "sd": 40,
            "sp": 65
        },
        "abilities": [
            "Grassy Surge",
            "Intimidate",
            "Grass Pelt"
        ],
        "innates": [
            "Overgrow",
            "Soundproof",
            "Violent Rush"
        ],
        "weightkg": 50,
        "types": [
            "Grass"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Thwackey": {
        "id": 811,
        "bs": {
            "hp": 70,
            "at": 85,
            "df": 70,
            "sa": 55,
            "sd": 60,
            "sp": 80
        },
        "abilities": [
            "Grassy Surge",
            "Intimidate",
            "Grass Pelt"
        ],
        "innates": [
            "Overgrow",
            "Soundproof",
            "Violent Rush"
        ],
        "weightkg": 140,
        "types": [
            "Grass"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Rillaboom": {
        "id": 812,
        "bs": {
            "hp": 100,
            "at": 125,
            "df": 90,
            "sa": 60,
            "sd": 75,
            "sp": 85
        },
        "abilities": [
            "Violent Rush",
            "Intimidate",
            "Grass Pelt"
        ],
        "innates": [
            "Overgrow",
            "Soundproof",
            "Grassy Surge"
        ],
        "weightkg": 900,
        "types": [
            "Grass"
        ],
        "genderR": 31
    },
    "Rillaboom Mega": {
        "id": 812,
        "bs": {
            "hp": 100,
            "at": 150,
            "df": 105,
            "sa": 105,
            "sd": 110,
            "sp": 65
        },
        "abilities": [
            "Rhythmic",
            "Long Reach",
            "Grass Pelt"
        ],
        "innates": [
            "Forest Rage",
            "Higher Rank",
            "Seed Sower"
        ],
        "weightkg": 900,
        "types": [
            "Grass"
        ],
        "genderR": 31
    },
    "Scorbunny": {
        "id": 813,
        "bs": {
            "hp": 50,
            "at": 76,
            "df": 40,
            "sa": 40,
            "sd": 40,
            "sp": 74
        },
        "abilities": [
            "Keen Eye",
            "Libero",
            "Scrappy"
        ],
        "innates": [
            "Blaze",
            "Striker",
            "Limber"
        ],
        "weightkg": 45,
        "types": [
            "Fire"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Raboot": {
        "id": 814,
        "bs": {
            "hp": 65,
            "at": 86,
            "df": 60,
            "sa": 55,
            "sd": 60,
            "sp": 94
        },
        "abilities": [
            "Keen Eye",
            "Libero",
            "Scrappy"
        ],
        "innates": [
            "Blaze",
            "Striker",
            "Limber"
        ],
        "weightkg": 90,
        "types": [
            "Fire"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Cinderace": {
        "id": 815,
        "bs": {
            "hp": 80,
            "at": 120,
            "df": 75,
            "sa": 65,
            "sd": 75,
            "sp": 120
        },
        "abilities": [
            "Keen Eye",
            "Flash Fire",
            "Pyromancy"
        ],
        "innates": [
            "Blaze",
            "Striker",
            "Libero"
        ],
        "weightkg": 330,
        "types": [
            "Fire"
        ],
        "genderR": 31
    },
    "Cinderace Mega": {
        "id": 815,
        "bs": {
            "hp": 80,
            "at": 145,
            "df": 90,
            "sa": 95,
            "sd": 85,
            "sp": 140
        },
        "abilities": [
            "Deadeye",
            "Turboblaze",
            "Defiant"
        ],
        "innates": [
            "Hellblaze",
            "Striker",
            "Libero"
        ],
        "weightkg": 330,
        "types": [
            "Fire"
        ],
        "genderR": 31
    },
    "Sobble": {
        "id": 816,
        "bs": {
            "hp": 50,
            "at": 40,
            "df": 40,
            "sa": 75,
            "sd": 40,
            "sp": 75
        },
        "abilities": [
            "Coward",
            "Swift Swim",
            "Sniper"
        ],
        "innates": [
            "Torrent",
            "Immunity",
            "Run Away"
        ],
        "weightkg": 40,
        "types": [
            "Water"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Drizzile": {
        "id": 817,
        "bs": {
            "hp": 65,
            "at": 60,
            "df": 55,
            "sa": 95,
            "sd": 55,
            "sp": 90
        },
        "abilities": [
            "Sniper",
            "Opportunist",
            "Prankster"
        ],
        "innates": [
            "Torrent",
            "Immunity",
            "Deadeye"
        ],
        "weightkg": 115,
        "types": [
            "Water"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Inteleon": {
        "id": 818,
        "bs": {
            "hp": 75,
            "at": 85,
            "df": 65,
            "sa": 125,
            "sd": 65,
            "sp": 120
        },
        "abilities": [
            "Deadeye",
            "Momentum",
            "Dual Wield"
        ],
        "innates": [
            "Torrent",
            "Opportunist",
            "Sniper"
        ],
        "weightkg": 452,
        "types": [
            "Water"
        ],
        "genderR": 31
    },
    "Inteleon Mega": {
        "id": 818,
        "bs": {
            "hp": 75,
            "at": 125,
            "df": 70,
            "sa": 150,
            "sd": 70,
            "sp": 145
        },
        "abilities": [
            "Deadeye",
            "Terminal Velocity",
            "Super Luck"
        ],
        "innates": [
            "Riptide",
            "Pretentious",
            "Sniper"
        ],
        "weightkg": 452,
        "types": [
            "Water"
        ],
        "genderR": 31
    },
    "Skwovet": {
        "id": 819,
        "bs": {
            "hp": 70,
            "at": 55,
            "df": 55,
            "sa": 35,
            "sd": 35,
            "sp": 25
        },
        "abilities": [
            "Cheap Tactics",
            "Frisk",
            "Looter"
        ],
        "innates": [
            "Gluttony",
            "Pickup",
            "Run Away"
        ],
        "weightkg": 25,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Greedent": {
        "id": 820,
        "bs": {
            "hp": 120,
            "at": 95,
            "df": 95,
            "sa": 55,
            "sd": 75,
            "sp": 20
        },
        "abilities": [
            "Thick Fat",
            "Looter",
            "Self Sufficient"
        ],
        "innates": [
            "Gluttony",
            "Ripen",
            "Oblivious"
        ],
        "weightkg": 60,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Rookidee": {
        "id": 821,
        "bs": {
            "hp": 38,
            "at": 33,
            "df": 35,
            "sa": 47,
            "sd": 35,
            "sp": 57
        },
        "abilities": [
            "Scare",
            "Intimidate",
            "Field Explorer"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Rapid Response"
        ],
        "weightkg": 18,
        "types": [
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Corvisquir": {
        "id": 822,
        "bs": {
            "hp": 68,
            "at": 43,
            "df": 55,
            "sa": 67,
            "sd": 55,
            "sp": 77
        },
        "abilities": [
            "Scare",
            "Intimidate",
            "Competitive"
        ],
        "innates": [
            "Flock",
            "Keen Eye",
            "Technician"
        ],
        "weightkg": 160,
        "types": [
            "Flying"
        ],
        "genderR": 127
    },
    "Corviknight": {
        "id": 823,
        "bs": {
            "hp": 98,
            "at": 53,
            "df": 85,
            "sa": 87,
            "sd": 105,
            "sp": 67
        },
        "abilities": [
            "Intimidate",
            "Chrome Coat",
            "Impenetrable"
        ],
        "innates": [
            "Pressure",
            "Giant Wings",
            "Mirror Armor"
        ],
        "weightkg": 750,
        "types": [
            "Flying",
            "Steel"
        ],
        "genderR": 127
    },
    "Corviknight Mega": {
        "id": 823,
        "bs": {
            "hp": 98,
            "at": 68,
            "df": 110,
            "sa": 117,
            "sd": 145,
            "sp": 57
        },
        "abilities": [
            "Frisk",
            "Air Blower",
            "Impenetrable"
        ],
        "innates": [
            "Wind Rage",
            "Chrome Coat",
            "Mirror Armor"
        ],
        "weightkg": 750,
        "types": [
            "Flying",
            "Steel"
        ],
        "genderR": 127
    },
    "Blipbug": {
        "id": 824,
        "bs": {
            "hp": 25,
            "at": 20,
            "df": 20,
            "sa": 25,
            "sd": 45,
            "sp": 45
        },
        "abilities": [
            "Anticipation",
            "Compound Eyes",
            "Coward"
        ],
        "innates": [
            "Simple",
            "Swarm",
            "Magic Bounce"
        ],
        "weightkg": 80,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dottler": {
        "id": 825,
        "bs": {
            "hp": 50,
            "at": 35,
            "df": 85,
            "sa": 60,
            "sd": 90,
            "sp": 30
        },
        "abilities": [
            "Telepathy",
            "Psychic Surge",
            "Anticipation"
        ],
        "innates": [
            "Compound Eyes",
            "Shell Armor",
            "Magic Bounce"
        ],
        "weightkg": 195,
        "types": [
            "Bug",
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Orbeetle": {
        "id": 826,
        "bs": {
            "hp": 60,
            "at": 45,
            "df": 110,
            "sa": 90,
            "sd": 130,
            "sp": 90
        },
        "abilities": [
            "Power Spot",
            "Psychic Surge",
            "Frisk"
        ],
        "innates": [
            "Analytic",
            "Gravity Well",
            "Magic Bounce"
        ],
        "weightkg": 408,
        "types": [
            "Bug",
            "Psychic"
        ],
        "genderR": 127
    },
    "Orbeetle Mega": {
        "id": 826,
        "bs": {
            "hp": 60,
            "at": 65,
            "df": 130,
            "sa": 120,
            "sd": 150,
            "sp": 100
        },
        "abilities": [
            "Power Spot",
            "Psychic Surge",
            "Magic Bounce"
        ],
        "innates": [
            "Gifted Mind",
            "Magical Dust",
            "Tinted Lens"
        ],
        "weightkg": 408,
        "types": [
            "Bug",
            "Psychic"
        ],
        "genderR": 127
    },
    "Nickit": {
        "id": 827,
        "bs": {
            "hp": 40,
            "at": 58,
            "df": 28,
            "sa": 60,
            "sd": 52,
            "sp": 67
        },
        "abilities": [
            "Technician",
            "Stakeout",
            "Low Blow"
        ],
        "innates": [
            "Pickpocket",
            "Pickup",
            "Run Away"
        ],
        "weightkg": 89,
        "types": [
            "Dark"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Thievul": {
        "id": 828,
        "bs": {
            "hp": 70,
            "at": 88,
            "df": 58,
            "sa": 100,
            "sd": 92,
            "sp": 107
        },
        "abilities": [
            "Technician",
            "Stakeout",
            "Pickup"
        ],
        "innates": [
            "Pickpocket",
            "Low Blow",
            "On the Prowl"
        ],
        "weightkg": 199,
        "types": [
            "Dark"
        ],
        "genderR": 127
    },
    "Gossifleur": {
        "id": 829,
        "bs": {
            "hp": 40,
            "at": 40,
            "df": 60,
            "sa": 40,
            "sd": 85,
            "sp": 10
        },
        "abilities": [
            "Cotton Down",
            "Overcoat",
            "Natural Cure"
        ],
        "innates": [
            "Effect Spore",
            "Regenerator",
            "Sun Worship"
        ],
        "weightkg": 22,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Eldegoss": {
        "id": 830,
        "bs": {
            "hp": 60,
            "at": 50,
            "df": 90,
            "sa": 80,
            "sd": 145,
            "sp": 60
        },
        "abilities": [
            "Cotton Down",
            "Overcoat",
            "Natural Cure"
        ],
        "innates": [
            "Fluffy",
            "Regenerator",
            "Effect Spore"
        ],
        "weightkg": 25,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Wooloo": {
        "id": 831,
        "bs": {
            "hp": 42,
            "at": 55,
            "df": 55,
            "sa": 55,
            "sd": 45,
            "sp": 58
        },
        "abilities": [
            "Sap Sipper",
            "Scrappy",
            "Bulletproof"
        ],
        "innates": [
            "Let's Roll",
            "Fluffy",
            "Rock Head"
        ],
        "weightkg": 60,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dubwool": {
        "id": 832,
        "bs": {
            "hp": 72,
            "at": 80,
            "df": 100,
            "sa": 60,
            "sd": 90,
            "sp": 88
        },
        "abilities": [
            "Sap Sipper",
            "Scrappy",
            "Bulletproof"
        ],
        "innates": [
            "Let's Roll",
            "Fluffy",
            "Rock Head"
        ],
        "weightkg": 430,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Chewtle": {
        "id": 833,
        "bs": {
            "hp": 50,
            "at": 64,
            "df": 50,
            "sa": 38,
            "sd": 38,
            "sp": 44
        },
        "abilities": [
            "Looter",
            "Solid Rock",
            "Swift Swim"
        ],
        "innates": [
            "Strong Jaw",
            "Shell Armor",
            "Growing Tooth"
        ],
        "weightkg": 85,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Drednaw": {
        "id": 834,
        "bs": {
            "hp": 90,
            "at": 115,
            "df": 90,
            "sa": 48,
            "sd": 68,
            "sp": 74
        },
        "abilities": [
            "Shell Armor",
            "Ambush",
            "Rock Head"
        ],
        "innates": [
            "Long Reach",
            "Predator",
            "Strong Jaw"
        ],
        "weightkg": 1155,
        "types": [
            "Water",
            "Rock"
        ],
        "genderR": 127
    },
    "Drednaw Mega": {
        "id": 834,
        "bs": {
            "hp": 90,
            "at": 145,
            "df": 120,
            "sa": 78,
            "sd": 68,
            "sp": 84
        },
        "abilities": [
            "Mountaineer",
            "Dragon's Maw",
            "Loose Rocks"
        ],
        "innates": [
            "Long Reach",
            "Rocky Payload",
            "Primal Maw"
        ],
        "weightkg": 1155,
        "types": [
            "Water",
            "Dragon"
        ],
        "genderR": 127
    },
    "Yamper": {
        "id": 835,
        "bs": {
            "hp": 59,
            "at": 65,
            "df": 50,
            "sa": 65,
            "sd": 50,
            "sp": 76
        },
        "abilities": [
            "Rattled",
            "Static",
            "Defiant"
        ],
        "innates": [
            "Short Circuit",
            "Run Away",
            "Electrocytes"
        ],
        "weightkg": 135,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Boltund": {
        "id": 836,
        "bs": {
            "hp": 69,
            "at": 110,
            "df": 60,
            "sa": 110,
            "sd": 60,
            "sp": 121
        },
        "abilities": [
            "Megabite",
            "Looter",
            "Strong Jaw"
        ],
        "innates": [
            "Ground Shock",
            "Speed Boost",
            "Short Circuit"
        ],
        "weightkg": 340,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Rolycoly": {
        "id": 837,
        "bs": {
            "hp": 30,
            "at": 40,
            "df": 50,
            "sa": 40,
            "sd": 50,
            "sp": 30
        },
        "abilities": [
            "Hot Coals",
            "Solid Rock",
            "Mountaineer"
        ],
        "innates": [
            "Steam Engine",
            "Power Core",
            "Magma Armor"
        ],
        "weightkg": 120,
        "types": [
            "Rock",
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Carkol": {
        "id": 838,
        "bs": {
            "hp": 80,
            "at": 60,
            "df": 90,
            "sa": 60,
            "sd": 70,
            "sp": 50
        },
        "abilities": [
            "Hot Coals",
            "Solid Rock",
            "Mountaineer"
        ],
        "innates": [
            "Steam Engine",
            "Power Core",
            "Magma Armor"
        ],
        "weightkg": 780,
        "types": [
            "Rock",
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Coalossal": {
        "id": 839,
        "bs": {
            "hp": 110,
            "at": 90,
            "df": 90,
            "sa": 90,
            "sd": 120,
            "sp": 30
        },
        "abilities": [
            "Hot Coals",
            "Galvanize",
            "Mountaineer"
        ],
        "innates": [
            "Steam Engine",
            "Power Core",
            "Magma Armor"
        ],
        "weightkg": 3105,
        "types": [
            "Rock",
            "Fire"
        ],
        "genderR": 127
    },
    "Coalossal Mega": {
        "id": 839,
        "bs": {
            "hp": 110,
            "at": 100,
            "df": 100,
            "sa": 140,
            "sd": 140,
            "sp": 40
        },
        "abilities": [
            "Earth Eater",
            "Earth Eater",
            "Earth Eater"
        ],
        "innates": [
            "Steam Engine",
            "Rocky Payload",
            "Tar Toss"
        ],
        "weightkg": 3105,
        "types": [
            "Rock",
            "Fire"
        ],
        "genderR": 127
    },
    "Applin": {
        "id": 840,
        "bs": {
            "hp": 55,
            "at": 55,
            "df": 80,
            "sa": 55,
            "sd": 55,
            "sp": 35
        },
        "abilities": [
            "Thick Fat",
            "Hustle",
            "Bulletproof"
        ],
        "innates": [
            "Overgrow",
            "Shell Armor",
            "Shed Skin"
        ],
        "weightkg": 5,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Flapple": {
        "id": 841,
        "bs": {
            "hp": 70,
            "at": 110,
            "df": 80,
            "sa": 85,
            "sd": 60,
            "sp": 95
        },
        "abilities": [
            "Hustle",
            "Aerodynamics",
            "Unburden"
        ],
        "innates": [
            "Levitate",
            "Fatal Precision",
            "Corrosion"
        ],
        "weightkg": 10,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127
    },
    "Appletun": {
        "id": 842,
        "bs": {
            "hp": 110,
            "at": 100,
            "df": 90,
            "sa": 100,
            "sd": 80,
            "sp": 20
        },
        "abilities": [
            "Soothing Aroma",
            "Aroma Veil",
            "Bulletproof"
        ],
        "innates": [
            "Ripen",
            "Harvest",
            "Thick Fat"
        ],
        "weightkg": 130,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127
    },
    "Silicobra": {
        "id": 843,
        "bs": {
            "hp": 52,
            "at": 35,
            "df": 75,
            "sa": 57,
            "sd": 50,
            "sp": 46
        },
        "abilities": [
            "Sand Rush",
            "Sand Force",
            "Sand Veil"
        ],
        "innates": [
            "Sand Spit",
            "Shed Skin",
            "Mega Launcher"
        ],
        "weightkg": 76,
        "types": [
            "Ground"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Sandaconda": {
        "id": 844,
        "bs": {
            "hp": 72,
            "at": 65,
            "df": 125,
            "sa": 107,
            "sd": 70,
            "sp": 71
        },
        "abilities": [
            "Sand Rush",
            "Sand Force",
            "Sand Guard"
        ],
        "innates": [
            "Sand Spit",
            "Shed Skin",
            "Mega Launcher"
        ],
        "weightkg": 655,
        "types": [
            "Ground"
        ],
        "genderR": 127
    },
    "Sandaconda Mega": {
        "id": 844,
        "bs": {
            "hp": 72,
            "at": 70,
            "df": 135,
            "sa": 142,
            "sd": 85,
            "sp": 106
        },
        "abilities": [
            "Sand Rush",
            "Sand Force",
            "Artillery"
        ],
        "innates": [
            "Dune Terror",
            "Aerilate",
            "Mega Launcher"
        ],
        "weightkg": 655,
        "types": [
            "Ground",
            "Flying"
        ],
        "genderR": 127
    },
    "Cramorant": {
        "id": 845,
        "bs": {
            "hp": 75,
            "at": 90,
            "df": 85,
            "sa": 90,
            "sd": 95,
            "sp": 85
        },
        "abilities": [
            "Predator",
            "Harvest",
            "Swift Swim"
        ],
        "innates": [
            "Gulp Missile",
            "Self Sufficient",
            "Field Explorer"
        ],
        "weightkg": 180,
        "types": [
            "Flying",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Cramorant Gulping",
            "Cramorant Gorging"
        ]
    },
    "Cramorant Gulping": {
        "id": 845,
        "bs": {
            "hp": 75,
            "at": 90,
            "df": 85,
            "sa": 90,
            "sd": 95,
            "sp": 85
        },
        "abilities": [
            "Predator",
            "Gluttony",
            "Swift Swim"
        ],
        "innates": [
            "Gulp Missile",
            "Water Veil",
            "Field Explorer"
        ],
        "weightkg": 180,
        "types": [
            "Flying",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Cramorant"
        ]
    },
    "Cramorant Gorging": {
        "id": 845,
        "bs": {
            "hp": 75,
            "at": 90,
            "df": 85,
            "sa": 90,
            "sd": 95,
            "sp": 85
        },
        "abilities": [
            "Predator",
            "Gluttony",
            "Swift Swim"
        ],
        "innates": [
            "Gulp Missile",
            "Transistor",
            "Field Explorer"
        ],
        "weightkg": 180,
        "types": [
            "Flying",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Cramorant"
        ]
    },
    "Arrokuda": {
        "id": 846,
        "bs": {
            "hp": 41,
            "at": 63,
            "df": 40,
            "sa": 40,
            "sd": 30,
            "sp": 66
        },
        "abilities": [
            "Swift Swim",
            "Momentum",
            "Accelerate"
        ],
        "innates": [
            "Propeller Tail",
            "Speed Force",
            "Reckless"
        ],
        "weightkg": 10,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Barraskewda": {
        "id": 847,
        "bs": {
            "hp": 61,
            "at": 123,
            "df": 60,
            "sa": 60,
            "sd": 50,
            "sp": 136
        },
        "abilities": [
            "Propeller Tail",
            "Swift Swim",
            "Accelerate"
        ],
        "innates": [
            "Speed Boost",
            "Speed Force",
            "Reckless"
        ],
        "weightkg": 300,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Toxel": {
        "id": 848,
        "bs": {
            "hp": 40,
            "at": 38,
            "df": 35,
            "sa": 70,
            "sd": 35,
            "sp": 60
        },
        "abilities": [
            "Rattled",
            "Static",
            "Klutz"
        ],
        "innates": [
            "Plus",
            "Water Absorb",
            "Poison Touch"
        ],
        "weightkg": 110,
        "types": [
            "Electric",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Toxtricity": {
        "id": 849,
        "bs": {
            "hp": 75,
            "at": 75,
            "df": 70,
            "sa": 114,
            "sd": 70,
            "sp": 98
        },
        "abilities": [
            "Technician",
            "Noise Cancel",
            "Intoxicate"
        ],
        "innates": [
            "Bass Boosted",
            "Loud Bang",
            "Water Absorb"
        ],
        "weightkg": 400,
        "types": [
            "Electric",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Toxtricity Low Key"
        ]
    },
    "Toxtricity Mega": {
        "id": 849,
        "bs": {
            "hp": 75,
            "at": 82,
            "df": 90,
            "sa": 144,
            "sd": 90,
            "sp": 121
        },
        "abilities": [
            "Stun Shock",
            "Stun Shock",
            "Stun Shock"
        ],
        "innates": [
            "Sludgy Mix",
            "Amplifier",
            "Noise Cancel"
        ],
        "weightkg": 400,
        "types": [
            "Electric",
            "Poison"
        ],
        "genderR": 127
    },
    "Toxtricity Low Key": {
        "id": 849,
        "bs": {
            "hp": 75,
            "at": 75,
            "df": 70,
            "sa": 114,
            "sd": 70,
            "sp": 98
        },
        "abilities": [
            "Technician",
            "Noise Cancel",
            "Intoxicate"
        ],
        "innates": [
            "Bass Boosted",
            "Loud Bang",
            "Water Absorb"
        ],
        "weightkg": 400,
        "types": [
            "Electric",
            "Poison"
        ],
        "genderR": 127,
        "otherFormes": [
            "Toxtricity"
        ]
    },
    "Toxel Redux": {
        "id": 848,
        "bs": {
            "hp": 40,
            "at": 38,
            "df": 38,
            "sa": 70,
            "sd": 37,
            "sp": 55
        },
        "abilities": [
            "Prankster",
            "Static",
            "Rattled"
        ],
        "innates": [
            "Electrocytes",
            "Loud Bang",
            "Volt Absorb"
        ],
        "weightkg": 110,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127
    },
    "Toxtricity Redux": {
        "id": 849,
        "bs": {
            "hp": 80,
            "at": 65,
            "df": 85,
            "sa": 114,
            "sd": 65,
            "sp": 93
        },
        "abilities": [
            "Hyper Aggressive",
            "Mosh Pit",
            "Power Metal"
        ],
        "innates": [
            "Metallic",
            "Piercing Solo",
            "Bass Boosted"
        ],
        "weightkg": 400,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127
    },
    "Toxtricity Redux Mega": {
        "id": 849,
        "bs": {
            "hp": 80,
            "at": 70,
            "df": 115,
            "sa": 139,
            "sd": 80,
            "sp": 118
        },
        "abilities": [
            "Piercing Solo",
            "Piercing Solo",
            "Piercing Solo"
        ],
        "innates": [
            "Metallic",
            "Power Metal",
            "Bass Boosted"
        ],
        "weightkg": 400,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127
    },
    "Toxtricity Redux Fuzz": {
        "id": 849,
        "bs": {
            "hp": 80,
            "at": 65,
            "df": 65,
            "sa": 114,
            "sd": 85,
            "sp": 93
        },
        "abilities": [
            "Rhythmic",
            "Mosh Pit",
            "Banshee"
        ],
        "innates": [
            "Phantom",
            "Chunky Bass Line",
            "Bass Boosted"
        ],
        "weightkg": 400,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127
    },
    "Toxtricity Redux Fuzz Mega": {
        "id": 849,
        "bs": {
            "hp": 80,
            "at": 70,
            "df": 80,
            "sa": 139,
            "sd": 115,
            "sp": 118
        },
        "abilities": [
            "Chunky Bass Line",
            "Chunky Bass Line",
            "Chunky Bass Line"
        ],
        "innates": [
            "Phantom",
            "Banshee",
            "Bass Boosted"
        ],
        "weightkg": 400,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127
    },
    "Sizzlipede": {
        "id": 850,
        "bs": {
            "hp": 50,
            "at": 65,
            "df": 45,
            "sa": 50,
            "sd": 50,
            "sp": 45
        },
        "abilities": [
            "Flash Fire",
            "Coil Up",
            "Grappler"
        ],
        "innates": [
            "Flame Body",
            "Pyromancy",
            "Predator"
        ],
        "weightkg": 10,
        "types": [
            "Fire",
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Centiskorch": {
        "id": 851,
        "bs": {
            "hp": 100,
            "at": 115,
            "df": 90,
            "sa": 65,
            "sd": 90,
            "sp": 65
        },
        "abilities": [
            "Coil Up",
            "Flash Fire",
            "Molten Down"
        ],
        "innates": [
            "Flaming Jaws",
            "Let's Roll",
            "Hyper Aggressive"
        ],
        "weightkg": 1200,
        "types": [
            "Fire",
            "Bug"
        ],
        "genderR": 127
    },
    "Centiskorch Mega": {
        "id": 851,
        "bs": {
            "hp": 100,
            "at": 165,
            "df": 90,
            "sa": 85,
            "sd": 90,
            "sp": 95
        },
        "abilities": [
            "Mountaineer",
            "Flaming Maw",
            "Dragonslayer"
        ],
        "innates": [
            "Coil Up",
            "Hyper Aggressive",
            "Molten Down"
        ],
        "weightkg": 1200,
        "types": [
            "Fire",
            "Bug"
        ],
        "genderR": 127
    },
    "Clobbopus": {
        "id": 852,
        "bs": {
            "hp": 50,
            "at": 68,
            "df": 65,
            "sa": 50,
            "sd": 60,
            "sp": 32
        },
        "abilities": [
            "Amphibious",
            "Raging Boxer",
            "Self Sufficient"
        ],
        "innates": [
            "Grappler",
            "Regenerator",
            "Stall"
        ],
        "weightkg": 40,
        "types": [
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Grapploct": {
        "id": 853,
        "bs": {
            "hp": 80,
            "at": 118,
            "df": 95,
            "sa": 70,
            "sd": 90,
            "sp": 42
        },
        "abilities": [
            "Self Sufficient",
            "Raging Boxer",
            "Technician"
        ],
        "innates": [
            "Grappler",
            "Regenerator",
            "Tidal Rush"
        ],
        "weightkg": 390,
        "types": [
            "Fighting",
            "Water"
        ],
        "genderR": 127
    },
    "Sinistea": {
        "id": 854,
        "bs": {
            "hp": 40,
            "at": 45,
            "df": 45,
            "sa": 74,
            "sd": 54,
            "sp": 50
        },
        "abilities": [
            "Weak Armor",
            "Dancer",
            "Aroma Veil"
        ],
        "innates": [
            "Ectoplasm",
            "Self Sufficient",
            "Water Absorb"
        ],
        "weightkg": 2,
        "types": [
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Sinistea Antique"
        ],
        "nfe": true
    },
    "Polteageist": {
        "id": 855,
        "bs": {
            "hp": 60,
            "at": 65,
            "df": 65,
            "sa": 134,
            "sd": 114,
            "sp": 70
        },
        "abilities": [
            "Weak Armor",
            "Dancer",
            "Self Sufficient"
        ],
        "innates": [
            "Ectoplasm",
            "Liquified",
            "Water Absorb"
        ],
        "weightkg": 4,
        "types": [
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Polteageist Antique"
        ]
    },
    "Sinistea Antique": {
        "id": 854,
        "bs": {
            "hp": 40,
            "at": 45,
            "df": 45,
            "sa": 74,
            "sd": 54,
            "sp": 50
        },
        "abilities": [
            "Weak Armor",
            "Weak Armor",
            "Cursed Body"
        ],
        "innates": [
            "-------",
            "-------",
            "-------"
        ],
        "weightkg": 2,
        "types": [
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Sinistea"
        ],
        "nfe": true
    },
    "Polteageist Antique": {
        "id": 855,
        "bs": {
            "hp": 60,
            "at": 65,
            "df": 65,
            "sa": 134,
            "sd": 114,
            "sp": 70
        },
        "abilities": [
            "Weak Armor",
            "Weak Armor",
            "Cursed Body"
        ],
        "innates": [
            "-------",
            "-------",
            "-------"
        ],
        "weightkg": 4,
        "types": [
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Polteageist"
        ]
    },
    "Hatenna": {
        "id": 856,
        "bs": {
            "hp": 42,
            "at": 30,
            "df": 45,
            "sa": 56,
            "sd": 53,
            "sp": 39
        },
        "abilities": [
            "Twist. Dimension",
            "Anticipation",
            "Pixilate"
        ],
        "innates": [
            "Magic Guard",
            "Magic Bounce",
            "Healer"
        ],
        "weightkg": 34,
        "types": [
            "Psychic"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Hattrem": {
        "id": 857,
        "bs": {
            "hp": 57,
            "at": 40,
            "df": 65,
            "sa": 86,
            "sd": 73,
            "sp": 49
        },
        "abilities": [
            "Twist. Dimension",
            "Anticipation",
            "Pixilate"
        ],
        "innates": [
            "Magic Guard",
            "Magic Bounce",
            "Hyper Aggressive"
        ],
        "weightkg": 48,
        "types": [
            "Psychic"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Hatterene": {
        "id": 858,
        "bs": {
            "hp": 57,
            "at": 90,
            "df": 95,
            "sa": 136,
            "sd": 103,
            "sp": 29
        },
        "abilities": [
            "Healer",
            "Twist. Dimension",
            "Rampage"
        ],
        "innates": [
            "Pixilate",
            "Magic Bounce",
            "Hyper Aggressive"
        ],
        "weightkg": 51,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 254
    },
    "Hatterene Mega": {
        "id": 858,
        "bs": {
            "hp": 57,
            "at": 110,
            "df": 95,
            "sa": 166,
            "sd": 133,
            "sp": 49
        },
        "abilities": [
            "Raging Goddess",
            "Raging Goddess",
            "Raging Goddess"
        ],
        "innates": [
            "Pixilate",
            "Magic Bounce",
            "Psychic Mind"
        ],
        "weightkg": 51,
        "types": [
            "Psychic",
            "Fairy"
        ],
        "genderR": 254
    },
    "Impidimp": {
        "id": 859,
        "bs": {
            "hp": 45,
            "at": 55,
            "df": 30,
            "sa": 45,
            "sd": 40,
            "sp": 50
        },
        "abilities": [
            "Prankster",
            "Pickpocket",
            "Frisk"
        ],
        "innates": [
            "Scare",
            "Intimidate",
            "Limber"
        ],
        "weightkg": 55,
        "types": [
            "Dark",
            "Fairy"
        ],
        "genderR": 0,
        "nfe": true
    },
    "Morgrem": {
        "id": 860,
        "bs": {
            "hp": 65,
            "at": 75,
            "df": 45,
            "sa": 60,
            "sd": 55,
            "sp": 70
        },
        "abilities": [
            "Prankster",
            "Pickpocket",
            "Frisk"
        ],
        "innates": [
            "Scare",
            "Intimidate",
            "Tangling Hair"
        ],
        "weightkg": 125,
        "types": [
            "Dark",
            "Fairy"
        ],
        "genderR": 0,
        "nfe": true
    },
    "Grimmsnarl": {
        "id": 861,
        "bs": {
            "hp": 95,
            "at": 120,
            "df": 65,
            "sa": 95,
            "sd": 75,
            "sp": 60
        },
        "abilities": [
            "Prankster",
            "Cheap Tactics",
            "Tangling Hair"
        ],
        "innates": [
            "Fur Coat",
            "Intimidate",
            "Scare"
        ],
        "weightkg": 610,
        "types": [
            "Dark",
            "Fairy"
        ],
        "genderR": 0
    },
    "Grimmsnarl Mega": {
        "id": 861,
        "bs": {
            "hp": 95,
            "at": 140,
            "df": 75,
            "sa": 110,
            "sd": 105,
            "sp": 85
        },
        "abilities": [
            "Fearmonger",
            "Fearmonger",
            "Fearmonger"
        ],
        "innates": [
            "Fur Coat",
            "Prankster",
            "Twinkle Toes"
        ],
        "weightkg": 610,
        "types": [
            "Dark",
            "Fairy"
        ],
        "genderR": 0
    },
    "Obstagoon": {
        "id": 862,
        "bs": {
            "hp": 93,
            "at": 100,
            "df": 101,
            "sa": 60,
            "sd": 81,
            "sp": 95
        },
        "abilities": [
            "Cheap Tactics",
            "Defiant",
            "Stamina"
        ],
        "innates": [
            "Pickup",
            "Guts",
            "Poison Heal"
        ],
        "weightkg": 460,
        "types": [
            "Dark",
            "Normal"
        ],
        "genderR": 127
    },
    "Perrserker": {
        "id": 863,
        "bs": {
            "hp": 90,
            "at": 110,
            "df": 100,
            "sa": 65,
            "sd": 70,
            "sp": 60
        },
        "abilities": [
            "Fur Coat",
            "Looter",
            "Iron Barbs"
        ],
        "innates": [
            "Tough Claws",
            "Battle Armor",
            "Steely Spirit"
        ],
        "weightkg": 280,
        "types": [
            "Steel"
        ],
        "genderR": 127
    },
    "Cursola": {
        "id": 864,
        "bs": {
            "hp": 60,
            "at": 95,
            "df": 57,
            "sa": 145,
            "sd": 130,
            "sp": 50
        },
        "abilities": [
            "Perish Body",
            "Rest in Peace",
            "Weak Armor"
        ],
        "innates": [
            "Spectralize",
            "Shadow Shield",
            "Stall"
        ],
        "weightkg": 4,
        "types": [
            "Ghost"
        ],
        "genderR": 190
    },
    "Sirfetch'd": {
        "id": 865,
        "bs": {
            "hp": 92,
            "at": 135,
            "df": 95,
            "sa": 58,
            "sd": 92,
            "sp": 65
        },
        "abilities": [
            "Aerodynamics",
            "Dauntless Shield",
            "Chlorophyll"
        ],
        "innates": [
            "Scrappy",
            "Keen Edge",
            "Long Reach"
        ],
        "weightkg": 1170,
        "types": [
            "Fighting"
        ],
        "genderR": 127
    },
    "Mr. Rime": {
        "id": 866,
        "bs": {
            "hp": 80,
            "at": 110,
            "df": 85,
            "sa": 110,
            "sd": 100,
            "sp": 70
        },
        "abilities": [
            "Prankster",
            "North Wind",
            "Magic Guard"
        ],
        "innates": [
            "Screen Cleaner",
            "Ice Body",
            "Oblivious"
        ],
        "weightkg": 582,
        "types": [
            "Ice",
            "Psychic"
        ],
        "genderR": 127
    },
    "Runerigus": {
        "id": 867,
        "bs": {
            "hp": 58,
            "at": 95,
            "df": 145,
            "sa": 50,
            "sd": 105,
            "sp": 30
        },
        "abilities": [
            "WandrngSprit",
            "Shadow Shield",
            "Ancient Idol"
        ],
        "innates": [
            "Haunted Spirit",
            "Spiteful",
            "Solid Rock"
        ],
        "weightkg": 666,
        "types": [
            "Ground",
            "Ghost"
        ],
        "genderR": 127
    },
    "Milcery": {
        "id": 868,
        "bs": {
            "hp": 65,
            "at": 40,
            "df": 40,
            "sa": 60,
            "sd": 61,
            "sp": 34
        },
        "abilities": [
            "Gooey",
            "Well Baked Body",
            "Pastel Veil"
        ],
        "innates": [
            "Fluffy",
            "Aroma Veil",
            "Self Sufficient"
        ],
        "weightkg": 3,
        "types": [
            "Fairy"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Alcremie": {
        "id": 869,
        "bs": {
            "hp": 75,
            "at": 60,
            "df": 75,
            "sa": 110,
            "sd": 121,
            "sp": 64
        },
        "abilities": [
            "Gooey",
            "Well Baked Body",
            "Pastel Veil"
        ],
        "innates": [
            "Fluffy",
            "Aroma Veil",
            "Self Sufficient"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 254,
        "otherFormes": [
            "Alcremie Ruby Cream",
            "Alcremie Matcha Cream",
            "Alcremie Mint Cream",
            "Alcremie Lemon Cream",
            "Alcremie Salted Cream",
            "Alcremie Ruby Swirl",
            "Alcremie Caramel Swirl",
            "Alcremie Rainbow Swirl"
        ]
    },
    "Alcremie Mega": {
        "id": 869,
        "bs": {
            "hp": 75,
            "at": 80,
            "df": 80,
            "sa": 140,
            "sd": 146,
            "sp": 84
        },
        "abilities": [
            "Natural Cure",
            "Well Baked Body",
            "Misty Surge"
        ],
        "innates": [
            "Fluffy",
            "Super Hot Goo",
            "Self Sufficient"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Alcremie Ruby": {
        "id": 869,
        "bs": {
            "hp": 75,
            "at": 60,
            "df": 75,
            "sa": 110,
            "sd": 121,
            "sp": 64
        },
        "abilities": [
            "Gooey",
            "Well Baked Body",
            "Pastel Veil"
        ],
        "innates": [
            "Fluffy",
            "Aroma Veil",
            "Self Sufficient"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Alcremie Matcha": {
        "id": 869,
        "bs": {
            "hp": 75,
            "at": 60,
            "df": 75,
            "sa": 110,
            "sd": 121,
            "sp": 64
        },
        "abilities": [
            "Gooey",
            "Well Baked Body",
            "Pastel Veil"
        ],
        "innates": [
            "Fluffy",
            "Aroma Veil",
            "Self Sufficient"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Alcremie Mint": {
        "id": 869,
        "bs": {
            "hp": 75,
            "at": 60,
            "df": 75,
            "sa": 110,
            "sd": 121,
            "sp": 64
        },
        "abilities": [
            "Gooey",
            "Well Baked Body",
            "Pastel Veil"
        ],
        "innates": [
            "Fluffy",
            "Aroma Veil",
            "Self Sufficient"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Alcremie Lemon": {
        "id": 869,
        "bs": {
            "hp": 75,
            "at": 60,
            "df": 75,
            "sa": 110,
            "sd": 121,
            "sp": 64
        },
        "abilities": [
            "Gooey",
            "Well Baked Body",
            "Pastel Veil"
        ],
        "innates": [
            "Fluffy",
            "Aroma Veil",
            "Self Sufficient"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Alcremie Salted": {
        "id": 869,
        "bs": {
            "hp": 75,
            "at": 60,
            "df": 75,
            "sa": 110,
            "sd": 121,
            "sp": 64
        },
        "abilities": [
            "Gooey",
            "Well Baked Body",
            "Pastel Veil"
        ],
        "innates": [
            "Fluffy",
            "Aroma Veil",
            "Self Sufficient"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Alcremie Ruby Swirl": {
        "id": 869,
        "bs": {
            "hp": 75,
            "at": 60,
            "df": 75,
            "sa": 110,
            "sd": 121,
            "sp": 64
        },
        "abilities": [
            "Gooey",
            "Well Baked Body",
            "Pastel Veil"
        ],
        "innates": [
            "Fluffy",
            "Aroma Veil",
            "Self Sufficient"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 254,
        "otherFormes": [
            "Alcremie"
        ]
    },
    "Alcremie Caramel": {
        "id": 869,
        "bs": {
            "hp": 75,
            "at": 60,
            "df": 75,
            "sa": 110,
            "sd": 121,
            "sp": 64
        },
        "abilities": [
            "Gooey",
            "Well Baked Body",
            "Pastel Veil"
        ],
        "innates": [
            "Fluffy",
            "Aroma Veil",
            "Self Sufficient"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Alcremie Rainbow": {
        "id": 869,
        "bs": {
            "hp": 75,
            "at": 60,
            "df": 75,
            "sa": 110,
            "sd": 121,
            "sp": 64
        },
        "abilities": [
            "Gooey",
            "Well Baked Body",
            "Pastel Veil"
        ],
        "innates": [
            "Fluffy",
            "Aroma Veil",
            "Self Sufficient"
        ],
        "weightkg": 5,
        "types": [
            "Fairy"
        ],
        "genderR": 254
    },
    "Falinks": {
        "id": 870,
        "bs": {
            "hp": 65,
            "at": 100,
            "df": 100,
            "sa": 70,
            "sd": 60,
            "sp": 75
        },
        "abilities": [
            "Metallic",
            "Hustle",
            "Friend Guard"
        ],
        "innates": [
            "Mighty Horn",
            "Fighting Spirit",
            "Battle Armor"
        ],
        "weightkg": 620,
        "types": [
            "Fighting"
        ],
        "genderR": 2
    },
    "Pincurchin": {
        "id": 871,
        "bs": {
            "hp": 75,
            "at": 101,
            "df": 95,
            "sa": 101,
            "sd": 95,
            "sp": 15
        },
        "abilities": [
            "Lightning Rod",
            "Iron Barbs",
            "Sap Sipper"
        ],
        "innates": [
            "Electromorphosis",
            "Loose Quills",
            "Electro Surge"
        ],
        "weightkg": 10,
        "types": [
            "Water",
            "Electric"
        ],
        "genderR": 127
    },
    "Snom": {
        "id": 872,
        "bs": {
            "hp": 50,
            "at": 45,
            "df": 55,
            "sa": 65,
            "sd": 50,
            "sp": 40
        },
        "abilities": [
            "Freezing Point",
            "Spike Armor",
            "Ice Scales"
        ],
        "innates": [
            "Guilt Trip",
            "Overcoat",
            "Unaware"
        ],
        "weightkg": 38,
        "types": [
            "Ice",
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Frosmoth": {
        "id": 873,
        "bs": {
            "hp": 95,
            "at": 50,
            "df": 75,
            "sa": 105,
            "sd": 110,
            "sp": 65
        },
        "abilities": [
            "Snow Cloak",
            "Shield Dust",
            "Snow Warning"
        ],
        "innates": [
            "Levitate",
            "Majestic Moth",
            "Ice Scales"
        ],
        "weightkg": 420,
        "types": [
            "Ice",
            "Bug"
        ],
        "genderR": 127
    },
    "Stonjourner": {
        "id": 874,
        "bs": {
            "hp": 100,
            "at": 125,
            "df": 135,
            "sa": 20,
            "sd": 60,
            "sp": 70
        },
        "abilities": [
            "Rockhard Will",
            "Striker",
            "Power Spot"
        ],
        "innates": [
            "Mineralize",
            "Juggernaut",
            "Solid Rock"
        ],
        "weightkg": 5200,
        "types": [
            "Rock"
        ],
        "genderR": 127
    },
    "Eiscue": {
        "id": 875,
        "bs": {
            "hp": 85,
            "at": 100,
            "df": 110,
            "sa": 65,
            "sd": 90,
            "sp": 60
        },
        "abilities": [
            "Swift Swim",
            "Slush Rush",
            "Ice Dew"
        ],
        "innates": [
            "Ice Face",
            "Antarctic Bird",
            "Amphibious"
        ],
        "weightkg": 890,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Eiscue Noice Face"
        ]
    },
    "Eiscue Noice Face": {
        "id": 875,
        "bs": {
            "hp": 85,
            "at": 100,
            "df": 70,
            "sa": 65,
            "sd": 55,
            "sp": 135
        },
        "abilities": [
            "Swift Swim",
            "Slush Rush",
            "Ice Dew"
        ],
        "innates": [
            "Ice Face",
            "Antarctic Bird",
            "Amphibious"
        ],
        "weightkg": 890,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "otherFormes": [
            "Eiscue"
        ]
    },
    "Indeedee": {
        "id": 876,
        "bs": {
            "hp": 60,
            "at": 55,
            "df": 55,
            "sa": 110,
            "sd": 95,
            "sp": 120
        },
        "abilities": [
            "Energy Horns",
            "Psychic Surge",
            "Competitive"
        ],
        "innates": [
            "Egoist",
            "Scrappy",
            "Forewarn"
        ],
        "weightkg": 280,
        "types": [
            "Psychic",
            "Normal"
        ],
        "genderR": 0,
        "otherFormes": [
            "Indeedee Female"
        ]
    },
    "Indeedee Female": {
        "id": 876,
        "bs": {
            "hp": 70,
            "at": 55,
            "df": 75,
            "sa": 95,
            "sd": 115,
            "sp": 85
        },
        "abilities": [
            "Hospitality",
            "Psychic Surge",
            "Entrance"
        ],
        "innates": [
            "Telekinetic",
            "Friend Guard",
            "Fluffy"
        ],
        "weightkg": 280,
        "types": [
            "Psychic",
            "Normal"
        ],
        "genderR": 254,
        "otherFormes": [
            "Indeedee"
        ]
    },
    "Morpeko": {
        "id": 877,
        "bs": {
            "hp": 67,
            "at": 101,
            "df": 87,
            "sa": 58,
            "sd": 57,
            "sp": 101
        },
        "abilities": [
            "Electric Burst",
            "Nocturnal",
            "Friend Guard"
        ],
        "innates": [
            "HungerSwitch",
            "Gluttony",
            "Lightning Rod"
        ],
        "weightkg": 30,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Morpeko Hangry"
        ]
    },
    "Morpekyll": {
        "id": 0,
        "bs": {
            "hp": 87,
            "at": 121,
            "df": 78,
            "sa": 62,
            "sd": 85,
            "sp": 121
        },
        "abilities": [
            "Gluttony",
            "Unburden",
            "Pickup"
        ],
        "innates": [
            "Two-Faced",
            "Magic Bounce",
            "Lightning Rod"
        ],
        "weightkg": 0,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127
    },
    "Morpekyll Hangry": {
        "id": 0,
        "bs": {
            "hp": 87,
            "at": 121,
            "df": 78,
            "sa": 62,
            "sd": 85,
            "sp": 121
        },
        "abilities": [
            "Gluttony",
            "Unburden",
            "Menacing Situation"
        ],
        "innates": [
            "Two-Faced",
            "Magic Bounce",
            "Lightning Rod"
        ],
        "weightkg": 0,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127
    },
    "Morpeko Hangry": {
        "id": 877,
        "bs": {
            "hp": 67,
            "at": 101,
            "df": 87,
            "sa": 58,
            "sd": 57,
            "sp": 101
        },
        "abilities": [
            "Doom Blast",
            "Electrocytes",
            "Power Spot"
        ],
        "innates": [
            "HungerSwitch",
            "Gluttony",
            "Lightning Rod"
        ],
        "weightkg": 30,
        "types": [
            "Electric",
            "Dark"
        ],
        "genderR": 127,
        "otherFormes": [
            "Morpeko"
        ]
    },
    "Cufant": {
        "id": 878,
        "bs": {
            "hp": 72,
            "at": 80,
            "df": 49,
            "sa": 40,
            "sd": 49,
            "sp": 40
        },
        "abilities": [
            "Long Reach",
            "Water Absorb",
            "Growing Tooth"
        ],
        "innates": [
            "Heavy Metal",
            "Lead Coat",
            "Sap Sipper"
        ],
        "weightkg": 1000,
        "types": [
            "Steel",
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Copperajah": {
        "id": 879,
        "bs": {
            "hp": 122,
            "at": 130,
            "df": 69,
            "sa": 80,
            "sd": 69,
            "sp": 30
        },
        "abilities": [
            "Long Reach",
            "Water Absorb",
            "Growing Tooth"
        ],
        "innates": [
            "Heavy Metal",
            "Lead Coat",
            "Sap Sipper"
        ],
        "weightkg": 6500,
        "types": [
            "Steel",
            "Water"
        ],
        "genderR": 127
    },
    "Copperajah Mega": {
        "id": 879,
        "bs": {
            "hp": 122,
            "at": 160,
            "df": 109,
            "sa": 80,
            "sd": 109,
            "sp": 20
        },
        "abilities": [
            "Stall",
            "Sap Sipper",
            "Growing Tooth"
        ],
        "innates": [
            "Steely Spirit",
            "Juggernaut",
            "Battle Armor"
        ],
        "weightkg": 6500,
        "types": [
            "Steel",
            "Water"
        ],
        "genderR": 127
    },
    "Dracozolt": {
        "id": 880,
        "bs": {
            "hp": 90,
            "at": 100,
            "df": 90,
            "sa": 80,
            "sd": 70,
            "sp": 75
        },
        "abilities": [
            "Hustle",
            "Surge Surfer",
            "Sand Rush"
        ],
        "innates": [
            "Strong Jaw",
            "Dragon's Maw",
            "Predator"
        ],
        "weightkg": 1900,
        "types": [
            "Electric",
            "Dragon"
        ],
        "genderR": 2
    },
    "Arctozolt": {
        "id": 881,
        "bs": {
            "hp": 90,
            "at": 100,
            "df": 90,
            "sa": 70,
            "sd": 80,
            "sp": 75
        },
        "abilities": [
            "Hustle",
            "Surge Surfer",
            "Slush Rush"
        ],
        "innates": [
            "Strong Jaw",
            "Predator",
            "Ice Dew"
        ],
        "weightkg": 1500,
        "types": [
            "Electric",
            "Ice"
        ],
        "genderR": 2
    },
    "Dracovish": {
        "id": 882,
        "bs": {
            "hp": 90,
            "at": 90,
            "df": 100,
            "sa": 70,
            "sd": 80,
            "sp": 75
        },
        "abilities": [
            "Hustle",
            "Swift Swim",
            "Sand Rush"
        ],
        "innates": [
            "Strong Jaw",
            "Dragon's Maw",
            "Predator"
        ],
        "weightkg": 2150,
        "types": [
            "Water",
            "Dragon"
        ],
        "genderR": 2
    },
    "Dracovish Mega": {
        "id": 882,
        "bs": {
            "hp": 90,
            "at": 110,
            "df": 110,
            "sa": 85,
            "sd": 100,
            "sp": 110
        },
        "abilities": [
            "Jaws of Carnage",
            "Swift Swim",
            "Tidal Rush"
        ],
        "innates": [
            "Berserk DNA",
            "Water Veil",
            "Primal Maw"
        ],
        "weightkg": 2150,
        "types": [
            "Water",
            "Dragon"
        ],
        "genderR": 2
    },
    "Arctovish": {
        "id": 883,
        "bs": {
            "hp": 90,
            "at": 90,
            "df": 100,
            "sa": 80,
            "sd": 70,
            "sp": 75
        },
        "abilities": [
            "Hustle",
            "Swift Swim",
            "Slush Rush"
        ],
        "innates": [
            "Strong Jaw",
            "Ice Scales",
            "Predator"
        ],
        "weightkg": 1750,
        "types": [
            "Water",
            "Ice"
        ],
        "genderR": 2
    },
    "Duraludon": {
        "id": 884,
        "bs": {
            "hp": 70,
            "at": 95,
            "df": 115,
            "sa": 120,
            "sd": 50,
            "sp": 85
        },
        "abilities": [
            "Light Metal",
            "Heavy Metal",
            "Electrocytes"
        ],
        "innates": [
            "Steel Barrel",
            "Mega Launcher",
            "Stalwart"
        ],
        "weightkg": 400,
        "types": [
            "Steel",
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Duraludon Partner": {
        "id": 884,
        "bs": {
            "hp": 70,
            "at": 120,
            "df": 105,
            "sa": 100,
            "sd": 50,
            "sp": 90
        },
        "abilities": [
            "Mirror Armor",
            "Light Metal",
            "Draco Morale"
        ],
        "innates": [
            "Steelworker",
            "Mega Launcher",
            "Stalwart"
        ],
        "weightkg": 400,
        "types": [
            "Steel",
            "Dragon"
        ],
        "genderR": 127
    },
    "Duraludon Mega": {
        "id": 884,
        "bs": {
            "hp": 70,
            "at": 155,
            "df": 135,
            "sa": 110,
            "sd": 75,
            "sp": 90
        },
        "abilities": [
            "Mirror Armor",
            "Light Metal",
            "Draco Morale"
        ],
        "innates": [
            "Steelworker",
            "Mega Launcher",
            "Long Reach"
        ],
        "weightkg": 400,
        "types": [
            "Steel",
            "Dragon"
        ],
        "genderR": 127
    },
    "Dreepy": {
        "id": 885,
        "bs": {
            "hp": 28,
            "at": 70,
            "df": 30,
            "sa": 50,
            "sd": 30,
            "sp": 92
        },
        "abilities": [
            "Clear Body",
            "Speed Boost",
            "Ill Will"
        ],
        "innates": [
            "Levitate",
            "Infiltrator",
            "Ectoplasm"
        ],
        "weightkg": 20,
        "types": [
            "Dragon",
            "Ghost"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Drakloak": {
        "id": 886,
        "bs": {
            "hp": 68,
            "at": 90,
            "df": 50,
            "sa": 70,
            "sd": 50,
            "sp": 102
        },
        "abilities": [
            "Clear Body",
            "Speed Boost",
            "Parental Bond"
        ],
        "innates": [
            "Levitate",
            "Infiltrator",
            "Ectoplasm"
        ],
        "weightkg": 110,
        "types": [
            "Dragon",
            "Ghost"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dragapult": {
        "id": 887,
        "bs": {
            "hp": 88,
            "at": 120,
            "df": 75,
            "sa": 100,
            "sd": 75,
            "sp": 142
        },
        "abilities": [
            "Clear Body",
            "Speed Boost",
            "Parental Bond"
        ],
        "innates": [
            "Levitate",
            "Infiltrator",
            "Ectoplasm"
        ],
        "weightkg": 500,
        "types": [
            "Dragon",
            "Ghost"
        ],
        "genderR": 127
    },
    "Zacian": {
        "id": 888,
        "bs": {
            "hp": 92,
            "at": 130,
            "df": 115,
            "sa": 80,
            "sd": 115,
            "sp": 138
        },
        "abilities": [
            "Scare",
            "Intimidate",
            "Steelworker"
        ],
        "innates": [
            "Intrepid Sword",
            "Anger Point",
            "Pixilate"
        ],
        "weightkg": 1100,
        "types": [
            "Fairy"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zacian Crowned Sword"
        ],
        "nfe": true
    },
    "Zacian Crowned": {
        "id": 888,
        "bs": {
            "hp": 92,
            "at": 170,
            "df": 115,
            "sa": 80,
            "sd": 115,
            "sp": 148
        },
        "abilities": [
            "Crowned Sword",
            "-------",
            "-------"
        ],
        "innates": [
            "Steelworker",
            "Battle Armor",
            "Keen Edge"
        ],
        "weightkg": 1100,
        "types": [
            "Fairy",
            "Steel"
        ],
        "genderR": 2
    },
    "Zamazenta": {
        "id": 889,
        "bs": {
            "hp": 92,
            "at": 130,
            "df": 115,
            "sa": 80,
            "sd": 115,
            "sp": 138
        },
        "abilities": [
            "Scare",
            "Intimidate",
            "Steelworker"
        ],
        "innates": [
            "Dauntless Shield",
            "Stamina",
            "Fighting Spirit"
        ],
        "weightkg": 2100,
        "types": [
            "Fighting"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zamazenta Crowned Shield"
        ],
        "nfe": true
    },
    "Zamazenta Crowned": {
        "id": 889,
        "bs": {
            "hp": 92,
            "at": 110,
            "df": 155,
            "sa": 80,
            "sd": 155,
            "sp": 128
        },
        "abilities": [
            "Crowned Shield",
            "-------",
            "-------"
        ],
        "innates": [
            "Steelworker",
            "Battle Armor",
            "Lead Coat"
        ],
        "weightkg": 2100,
        "types": [
            "Fighting",
            "Steel"
        ],
        "genderR": 2
    },
    "Eternatus": {
        "id": 890,
        "bs": {
            "hp": 140,
            "at": 85,
            "df": 95,
            "sa": 145,
            "sd": 95,
            "sp": 130
        },
        "abilities": [
            "Corrosion",
            "Berserk DNA",
            "Power Core"
        ],
        "innates": [
            "Levitate",
            "Mega Launcher",
            "Primal Armor"
        ],
        "weightkg": 9500,
        "types": [
            "Poison",
            "Dragon"
        ],
        "genderR": 2,
        "otherFormes": [
            "Eternatus Eternamax"
        ]
    },
    "Eternatus Primal": {
        "id": 890,
        "bs": {
            "hp": 140,
            "at": 105,
            "df": 105,
            "sa": 185,
            "sd": 115,
            "sp": 140
        },
        "abilities": [
            "Corrosion",
            "Artillery",
            "Power Core"
        ],
        "innates": [
            "Levitate",
            "Master Hand",
            "Primal Armor"
        ],
        "weightkg": 9500,
        "types": [
            "Poison",
            "Dragon"
        ],
        "genderR": 2
    },
    "Kubfu": {
        "id": 891,
        "bs": {
            "hp": 60,
            "at": 100,
            "df": 60,
            "sa": 53,
            "sd": 50,
            "sp": 82
        },
        "abilities": [
            "Anger Point",
            "Violent Rush",
            "Precise Fist"
        ],
        "innates": [
            "Unseen Fist",
            "Fighting Spirit",
            "Inner Focus"
        ],
        "weightkg": 120,
        "types": [
            "Fighting"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Urshifu": {
        "id": 892,
        "bs": {
            "hp": 100,
            "at": 150,
            "df": 90,
            "sa": 60,
            "sd": 60,
            "sp": 100
        },
        "abilities": [
            "Discipline",
            "Violent Rush",
            "Pretentious"
        ],
        "innates": [
            "Unseen Fist",
            "Combat Specialist",
            "Precise Fist"
        ],
        "weightkg": 1050,
        "types": [
            "Fighting",
            "Dark"
        ],
        "genderR": 31,
        "otherFormes": [
            "Urshifu Rapid Strike Style"
        ]
    },
    "Urshifu Mega": {
        "id": 892,
        "bs": {
            "hp": 100,
            "at": 200,
            "df": 120,
            "sa": 60,
            "sd": 70,
            "sp": 110
        },
        "abilities": [
            "Way of Precision",
            "Way of Precision",
            "Way of Precision"
        ],
        "innates": [
            "Final Blow",
            "Combat Specialist",
            "Pretentious"
        ],
        "weightkg": 1050,
        "types": [
            "Fighting",
            "Dark"
        ],
        "genderR": 31
    },
    "Urshifu Rapid Strike Style": {
        "id": 892,
        "bs": {
            "hp": 90,
            "at": 140,
            "df": 100,
            "sa": 60,
            "sd": 60,
            "sp": 110
        },
        "abilities": [
            "Fatal Precision",
            "Swift Swim",
            "Pretentious"
        ],
        "innates": [
            "Unseen Fist",
            "Combat Specialist",
            "Precise Fist"
        ],
        "weightkg": 1050,
        "types": [
            "Fighting",
            "Water"
        ],
        "genderR": 31,
        "otherFormes": [
            "Urshifu"
        ]
    },
    "Urshifu Rapid Strike Style Mega": {
        "id": 892,
        "bs": {
            "hp": 90,
            "at": 170,
            "df": 100,
            "sa": 70,
            "sd": 80,
            "sp": 150
        },
        "abilities": [
            "Way of Swiftness",
            "Way of Swiftness",
            "Way of Swiftness"
        ],
        "innates": [
            "Final Blow",
            "Combat Specialist",
            "Technician"
        ],
        "weightkg": 1050,
        "types": [
            "Fighting",
            "Water"
        ],
        "genderR": 31
    },
    "Zarude": {
        "id": 893,
        "bs": {
            "hp": 105,
            "at": 120,
            "df": 105,
            "sa": 70,
            "sd": 95,
            "sp": 105
        },
        "abilities": [
            "Hyper Aggressive",
            "Gorilla Tactics",
            "Grassy Surge"
        ],
        "innates": [
            "Tough Claws",
            "Leaf Guard",
            "Overgrow"
        ],
        "weightkg": 700,
        "types": [
            "Dark",
            "Grass"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zarude Dada"
        ]
    },
    "Zarude Dada": {
        "id": 893,
        "bs": {
            "hp": 105,
            "at": 100,
            "df": 105,
            "sa": 70,
            "sd": 115,
            "sp": 105
        },
        "abilities": [
            "Parental Bond",
            "Chloroplast",
            "Grassy Surge"
        ],
        "innates": [
            "Friend Guard",
            "Jungle's Guard",
            "Overgrow"
        ],
        "weightkg": 700,
        "types": [
            "Fairy",
            "Grass"
        ],
        "genderR": 2,
        "otherFormes": [
            "Zarude"
        ]
    },
    "Regieleki": {
        "id": 894,
        "bs": {
            "hp": 80,
            "at": 100,
            "df": 50,
            "sa": 100,
            "sd": 50,
            "sp": 200
        },
        "abilities": [
            "Overcharge",
            "Illuminate",
            "Electric Burst"
        ],
        "innates": [
            "Transistor",
            "Ground Shock",
            "Static"
        ],
        "weightkg": 1450,
        "types": [
            "Electric"
        ],
        "genderR": 2
    },
    "Regidrago": {
        "id": 895,
        "bs": {
            "hp": 200,
            "at": 100,
            "df": 50,
            "sa": 100,
            "sd": 50,
            "sp": 80
        },
        "abilities": [
            "Predator",
            "Intimidate",
            "Scare"
        ],
        "innates": [
            "Dragon's Maw",
            "Mega Launcher",
            "Overwhelm"
        ],
        "weightkg": 2000,
        "types": [
            "Dragon"
        ],
        "genderR": 2
    },
    "Glastrier": {
        "id": 896,
        "bs": {
            "hp": 100,
            "at": 145,
            "df": 130,
            "sa": 65,
            "sd": 110,
            "sp": 30
        },
        "abilities": [
            "ChillngNeigh",
            "-------",
            "-------"
        ],
        "innates": [
            "Permafrost",
            "Stamina",
            "Whiteout"
        ],
        "weightkg": 8000,
        "types": [
            "Ice"
        ],
        "genderR": 2
    },
    "Spectrier": {
        "id": 897,
        "bs": {
            "hp": 100,
            "at": 65,
            "df": 60,
            "sa": 145,
            "sd": 80,
            "sp": 130
        },
        "abilities": [
            "Grim Neigh",
            "-------",
            "-------"
        ],
        "innates": [
            "Shadow Shield",
            "Scare",
            "Speed Boost"
        ],
        "weightkg": 445,
        "types": [
            "Ghost"
        ],
        "genderR": 2
    },
    "Spectrier Cloud": {
        "id": 897,
        "bs": {
            "hp": 100,
            "at": 80,
            "df": 80,
            "sa": 115,
            "sd": 60,
            "sp": 145
        },
        "abilities": [
            "Adrenaline Rush",
            "Adrenaline Rush",
            "Adrenaline Rush"
        ],
        "innates": [
            "Slipstream",
            "Weather Control",
            "Fluffy"
        ],
        "weightkg": 445,
        "types": [
            "Flying"
        ],
        "genderR": 127
    },
    "Calyrex": {
        "id": 898,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 100,
            "sa": 100,
            "sd": 100,
            "sp": 100
        },
        "abilities": [
            "Wonder Skin",
            "Multiscale",
            "Anticipation"
        ],
        "innates": [
            "Harvest",
            "Grassy Surge",
            "Crowned King"
        ],
        "weightkg": 77,
        "types": [
            "Psychic",
            "Grass"
        ],
        "genderR": 2,
        "otherFormes": [
            "Calyrex Ice Rider",
            "Calyrex Shadow Rider"
        ]
    },
    "Calyrex Cloud Rider": {
        "id": 898,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 100,
            "sa": 135,
            "sd": 80,
            "sp": 165
        },
        "abilities": [
            "Adrenaline Rush",
            "Adrenaline Rush",
            "Adrenaline Rush"
        ],
        "innates": [
            "Slipstream",
            "Weather Control",
            "Fluffy"
        ],
        "weightkg": 77,
        "types": [
            "Psychic",
            "Flying"
        ],
        "genderR": 2
    },
    "Calyrex Ice Rider": {
        "id": 898,
        "bs": {
            "hp": 100,
            "at": 165,
            "df": 150,
            "sa": 85,
            "sd": 130,
            "sp": 50
        },
        "abilities": [
            "As One",
            "As One",
            "As One"
        ],
        "innates": [
            "Permafrost",
            "Stamina",
            "Whiteout"
        ],
        "weightkg": 77,
        "types": [
            "Psychic",
            "Ice"
        ],
        "genderR": 2,
        "otherFormes": [
            "Calyrex"
        ]
    },
    "Calyrex Shadow Rider": {
        "id": 898,
        "bs": {
            "hp": 100,
            "at": 85,
            "df": 80,
            "sa": 165,
            "sd": 100,
            "sp": 150
        },
        "abilities": [
            "As One",
            "As One",
            "As One"
        ],
        "innates": [
            "Shadow Shield",
            "Fearmonger",
            "Speed Boost"
        ],
        "weightkg": 77,
        "types": [
            "Psychic",
            "Ghost"
        ],
        "genderR": 2,
        "otherFormes": [
            "Calyrex"
        ]
    },
    "Wyrdeer": {
        "id": 899,
        "bs": {
            "hp": 123,
            "at": 105,
            "df": 82,
            "sa": 65,
            "sd": 85,
            "sp": 65
        },
        "abilities": [
            "Inversion",
            "Intimidate",
            "Mystic Power"
        ],
        "innates": [
            "North Wind",
            "Mighty Horn",
            "Illuminate"
        ],
        "weightkg": 951,
        "types": [
            "Normal",
            "Psychic"
        ],
        "genderR": 127
    },
    "Kleavor": {
        "id": 900,
        "bs": {
            "hp": 70,
            "at": 135,
            "df": 95,
            "sa": 45,
            "sd": 70,
            "sp": 85
        },
        "abilities": [
            "Sheer Force",
            "Cutthroat",
            "Sturdy"
        ],
        "innates": [
            "Fossilized",
            "Keen Edge",
            "Technician"
        ],
        "weightkg": 100,
        "types": [
            "Bug",
            "Rock"
        ],
        "genderR": 127
    },
    "Sneasler": {
        "id": 903,
        "bs": {
            "hp": 80,
            "at": 130,
            "df": 60,
            "sa": 40,
            "sd": 80,
            "sp": 120
        },
        "abilities": [
            "Unburden",
            "Intoxicate",
            "Hyper Aggressive"
        ],
        "innates": [
            "Tough Claws",
            "Poison Touch",
            "Mountaineer"
        ],
        "weightkg": 430,
        "types": [
            "Fighting",
            "Poison"
        ],
        "genderR": 127
    },
    "Overqwil": {
        "id": 904,
        "bs": {
            "hp": 85,
            "at": 115,
            "df": 95,
            "sa": 65,
            "sd": 65,
            "sp": 85
        },
        "abilities": [
            "Swift Swim",
            "Skill Link",
            "Intimidate"
        ],
        "innates": [
            "Merciless",
            "Aftermath",
            "Toxic Debris"
        ],
        "weightkg": 605,
        "types": [
            "Dark",
            "Poison"
        ],
        "genderR": 127
    },
    "Enamorus": {
        "id": 905,
        "bs": {
            "hp": 74,
            "at": 115,
            "df": 70,
            "sa": 135,
            "sd": 80,
            "sp": 106
        },
        "abilities": [
            "Pure Love",
            "Pixilate",
            "Contrary"
        ],
        "innates": [
            "Pixie Power",
            "Queenly Majesty",
            "Weather Control"
        ],
        "weightkg": 480,
        "types": [
            "Fairy",
            "Flying"
        ],
        "genderR": 254,
        "otherFormes": [
            "Enamorus Therian"
        ],
        "nfe": true
    },
    "Enamorus Therian": {
        "id": 905,
        "bs": {
            "hp": 74,
            "at": 115,
            "df": 110,
            "sa": 135,
            "sd": 100,
            "sp": 46
        },
        "abilities": [
            "Pure Love",
            "Pixilate",
            "Contrary"
        ],
        "innates": [
            "Pixie Power",
            "Fluffy",
            "Weather Control"
        ],
        "weightkg": 480,
        "types": [
            "Fairy",
            "Flying"
        ],
        "genderR": 254,
        "otherFormes": [
            "Enamorus"
        ]
    },
    "Sprigatito": {
        "id": 906,
        "bs": {
            "hp": 40,
            "at": 66,
            "df": 54,
            "sa": 45,
            "sd": 45,
            "sp": 70
        },
        "abilities": [
            "Soothing Aroma",
            "On the Prowl",
            "Flourish"
        ],
        "innates": [
            "Overgrow",
            "Protean",
            "Long Reach"
        ],
        "weightkg": 41,
        "types": [
            "Grass"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Floragato": {
        "id": 907,
        "bs": {
            "hp": 66,
            "at": 80,
            "df": 63,
            "sa": 60,
            "sd": 63,
            "sp": 88
        },
        "abilities": [
            "Spike Armor",
            "On the Prowl",
            "Flourish"
        ],
        "innates": [
            "Overgrow",
            "Protean",
            "Long Reach"
        ],
        "weightkg": 122,
        "types": [
            "Grass"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Meowscarada": {
        "id": 908,
        "bs": {
            "hp": 81,
            "at": 110,
            "df": 70,
            "sa": 81,
            "sd": 70,
            "sp": 123
        },
        "abilities": [
            "Magician",
            "Magic Bounce",
            "Magic Guard"
        ],
        "innates": [
            "Overgrow",
            "Protean",
            "Long Reach"
        ],
        "weightkg": 312,
        "types": [
            "Grass",
            "Dark"
        ],
        "genderR": 31
    },
    "Meowscarada Mega": {
        "id": 908,
        "bs": {
            "hp": 81,
            "at": 140,
            "df": 70,
            "sa": 121,
            "sd": 70,
            "sp": 153
        },
        "abilities": [
            "Conjurer Of Deceit",
            "Conjurer Of Deceit",
            "Conjurer Of Deceit"
        ],
        "innates": [
            "Forest Rage",
            "Protean",
            "Long Reach"
        ],
        "weightkg": 312,
        "types": [
            "Grass",
            "Dark"
        ],
        "genderR": 31
    },
    "Fuecoco": {
        "id": 909,
        "bs": {
            "hp": 72,
            "at": 45,
            "df": 59,
            "sa": 63,
            "sd": 45,
            "sp": 36
        },
        "abilities": [
            "Banshee",
            "Immolate",
            "Rattled"
        ],
        "innates": [
            "Blaze",
            "Unaware",
            "Amplifier"
        ],
        "weightkg": 98,
        "types": [
            "Fire"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Crocalor": {
        "id": 910,
        "bs": {
            "hp": 86,
            "at": 55,
            "df": 78,
            "sa": 90,
            "sd": 62,
            "sp": 49
        },
        "abilities": [
            "Banshee",
            "Immolate",
            "Rattled"
        ],
        "innates": [
            "Blaze",
            "Unaware",
            "Amplifier"
        ],
        "weightkg": 307,
        "types": [
            "Fire"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Skeledirge": {
        "id": 911,
        "bs": {
            "hp": 104,
            "at": 75,
            "df": 100,
            "sa": 110,
            "sd": 80,
            "sp": 66
        },
        "abilities": [
            "Banshee",
            "Immolate",
            "Rattled"
        ],
        "innates": [
            "Blaze",
            "Unaware",
            "Amplifier"
        ],
        "weightkg": 3265,
        "types": [
            "Fire",
            "Ghost"
        ],
        "genderR": 31
    },
    "Skeledirge Mega": {
        "id": 911,
        "bs": {
            "hp": 104,
            "at": 95,
            "df": 120,
            "sa": 130,
            "sd": 100,
            "sp": 86
        },
        "abilities": [
            "Banshee",
            "Banshee",
            "Banshee"
        ],
        "innates": [
            "Hellblaze",
            "Flaming Soul",
            "Amplifier"
        ],
        "weightkg": 3265,
        "types": [
            "Fire",
            "Ghost"
        ],
        "genderR": 31
    },
    "Quaxly": {
        "id": 912,
        "bs": {
            "hp": 55,
            "at": 65,
            "df": 45,
            "sa": 50,
            "sd": 45,
            "sp": 60
        },
        "abilities": [
            "Cute Charm",
            "Dancer",
            "Dazzling"
        ],
        "innates": [
            "Torrent",
            "Striker",
            "Water Veil"
        ],
        "weightkg": 61,
        "types": [
            "Water"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Quaxwell": {
        "id": 913,
        "bs": {
            "hp": 70,
            "at": 85,
            "df": 65,
            "sa": 65,
            "sd": 65,
            "sp": 70
        },
        "abilities": [
            "Moxie",
            "Dancer",
            "Dazzling"
        ],
        "innates": [
            "Torrent",
            "Striker",
            "Water Veil"
        ],
        "weightkg": 215,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 31,
        "nfe": true
    },
    "Quaquaval": {
        "id": 914,
        "bs": {
            "hp": 85,
            "at": 120,
            "df": 80,
            "sa": 85,
            "sd": 75,
            "sp": 90
        },
        "abilities": [
            "Moxie",
            "Dancer",
            "Dazzling"
        ],
        "innates": [
            "Torrent",
            "Striker",
            "Water Veil"
        ],
        "weightkg": 619,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 31
    },
    "Quaquaval Mega": {
        "id": 914,
        "bs": {
            "hp": 85,
            "at": 140,
            "df": 115,
            "sa": 85,
            "sd": 95,
            "sp": 115
        },
        "abilities": [
            "Gladiator",
            "Gladiator",
            "Gladiator"
        ],
        "innates": [
            "Riptide",
            "Moxie",
            "Samba"
        ],
        "weightkg": 619,
        "types": [
            "Water",
            "Fighting"
        ],
        "genderR": 31
    },
    "Lechonk": {
        "id": 915,
        "bs": {
            "hp": 54,
            "at": 60,
            "df": 65,
            "sa": 35,
            "sd": 50,
            "sp": 35
        },
        "abilities": [
            "Lingering Aroma",
            "Strong Jaw",
            "Pickup"
        ],
        "innates": [
            "Thick Fat",
            "Gluttony",
            "Pastel Veil"
        ],
        "weightkg": 102,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Oinkologne": {
        "id": 916,
        "bs": {
            "hp": 100,
            "at": 110,
            "df": 100,
            "sa": 59,
            "sd": 85,
            "sp": 65
        },
        "abilities": [
            "Lingering Aroma",
            "Strong Jaw",
            "Pickup"
        ],
        "innates": [
            "Thick Fat",
            "Gluttony",
            "Pastel Veil"
        ],
        "weightkg": 1200,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Tarountula": {
        "id": 917,
        "bs": {
            "hp": 35,
            "at": 41,
            "df": 45,
            "sa": 29,
            "sd": 40,
            "sp": 20
        },
        "abilities": [
            "Spider Lair",
            "Web Spinner",
            "Bulletproof"
        ],
        "innates": [
            "Let's Roll",
            "Insomnia",
            "Stakeout"
        ],
        "weightkg": 40,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Spidops": {
        "id": 918,
        "bs": {
            "hp": 90,
            "at": 85,
            "df": 92,
            "sa": 55,
            "sd": 86,
            "sp": 52
        },
        "abilities": [
            "Web Spinner",
            "Spider Lair",
            "Subdue"
        ],
        "innates": [
            "Ambush",
            "Exploit Weakness",
            "Stakeout"
        ],
        "weightkg": 165,
        "types": [
            "Bug"
        ],
        "genderR": 127
    },
    "Nymble": {
        "id": 919,
        "bs": {
            "hp": 33,
            "at": 46,
            "df": 40,
            "sa": 21,
            "sd": 25,
            "sp": 45
        },
        "abilities": [
            "Tinted Lens",
            "Justified",
            "Opportunist"
        ],
        "innates": [
            "Violent Rush",
            "Swarm",
            "Striker"
        ],
        "weightkg": 10,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Lokix": {
        "id": 920,
        "bs": {
            "hp": 71,
            "at": 102,
            "df": 78,
            "sa": 52,
            "sd": 55,
            "sp": 92
        },
        "abilities": [
            "Avenger",
            "Justified",
            "Opportunist"
        ],
        "innates": [
            "Showdown Mode",
            "Swarm",
            "Striker"
        ],
        "weightkg": 175,
        "types": [
            "Bug",
            "Dark"
        ],
        "genderR": 127
    },
    "Pawmi": {
        "id": 921,
        "bs": {
            "hp": 45,
            "at": 50,
            "df": 20,
            "sa": 40,
            "sd": 25,
            "sp": 70
        },
        "abilities": [
            "Adrenaline Rush",
            "Iron Fist",
            "Generator"
        ],
        "innates": [
            "Volt Absorb",
            "Volt Rush",
            "Avenger"
        ],
        "weightkg": 25,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Pawmo": {
        "id": 922,
        "bs": {
            "hp": 60,
            "at": 75,
            "df": 40,
            "sa": 50,
            "sd": 40,
            "sp": 95
        },
        "abilities": [
            "Adrenaline Rush",
            "Iron Fist",
            "Generator"
        ],
        "innates": [
            "Volt Absorb",
            "Volt Rush",
            "Avenger"
        ],
        "weightkg": 65,
        "types": [
            "Electric",
            "Fighting"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Pawmot": {
        "id": 923,
        "bs": {
            "hp": 70,
            "at": 115,
            "df": 70,
            "sa": 70,
            "sd": 60,
            "sp": 115
        },
        "abilities": [
            "Adrenaline Rush",
            "Iron Fist",
            "Generator"
        ],
        "innates": [
            "Volt Absorb",
            "Volt Rush",
            "Avenger"
        ],
        "weightkg": 410,
        "types": [
            "Electric",
            "Fighting"
        ],
        "genderR": 127
    },
    "Tandemaus": {
        "id": 924,
        "bs": {
            "hp": 50,
            "at": 50,
            "df": 45,
            "sa": 40,
            "sd": 45,
            "sp": 75
        },
        "abilities": [
            "Friend Guard",
            "Pickup",
            "Normalize"
        ],
        "innates": [
            "Own Tempo",
            "Parental Bond",
            "Technician"
        ],
        "weightkg": 18,
        "types": [
            "Normal"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Maushold": {
        "id": 925,
        "bs": {
            "hp": 74,
            "at": 75,
            "df": 70,
            "sa": 65,
            "sd": 75,
            "sp": 111
        },
        "abilities": [
            "Friend Guard",
            "Pickup",
            "Normalize"
        ],
        "innates": [
            "Own Tempo",
            "Parental Bond",
            "Technician"
        ],
        "weightkg": 23,
        "types": [
            "Normal"
        ],
        "genderR": 2,
        "otherFormes": [
            "Maushold Four"
        ]
    },
    "Maushold Four": {
        "id": 925,
        "bs": {
            "hp": 74,
            "at": 75,
            "df": 70,
            "sa": 65,
            "sd": 75,
            "sp": 111
        },
        "abilities": [
            "Friend Guard",
            "Pickup",
            "Normalize"
        ],
        "innates": [
            "Own Tempo",
            "Parental Bond",
            "Technician"
        ],
        "weightkg": 23,
        "types": [
            "Normal"
        ],
        "genderR": 2,
        "otherFormes": [
            "Maushold"
        ]
    },
    "Fidough": {
        "id": 926,
        "bs": {
            "hp": 37,
            "at": 55,
            "df": 70,
            "sa": 30,
            "sd": 55,
            "sp": 65
        },
        "abilities": [
            "Gluttony",
            "Aroma Veil",
            "Strong Jaw"
        ],
        "innates": [
            "Well Baked Body",
            "Shield Dust",
            "Self Sufficient"
        ],
        "weightkg": 109,
        "types": [
            "Fairy"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Fidough Partner": {
        "id": 926,
        "bs": {
            "hp": 80,
            "at": 75,
            "df": 70,
            "sa": 50,
            "sd": 85,
            "sp": 75
        },
        "abilities": [
            "Sharing Is Caring",
            "Soothing Aroma",
            "Pretty Privilege"
        ],
        "innates": [
            "Well Baked Body",
            "Regenerator",
            "Pickup"
        ],
        "weightkg": 109,
        "types": [
            "Fairy"
        ],
        "genderR": 127
    },
    "Fidough Mega": {
        "id": 926,
        "bs": {
            "hp": 80,
            "at": 110,
            "df": 110,
            "sa": 55,
            "sd": 110,
            "sp": 70
        },
        "abilities": [
            "Misty Surge",
            "Rising Dough",
            "Pretty Privilege"
        ],
        "innates": [
            "Well Baked Body",
            "Natural Recovery",
            "Crust Coat"
        ],
        "weightkg": 109,
        "types": [
            "Fairy"
        ],
        "genderR": 127
    },
    "Dachsbun": {
        "id": 927,
        "bs": {
            "hp": 57,
            "at": 80,
            "df": 115,
            "sa": 50,
            "sd": 80,
            "sp": 105
        },
        "abilities": [
            "Gluttony",
            "Aroma Veil",
            "Strong Jaw"
        ],
        "innates": [
            "Well Baked Body",
            "Shield Dust",
            "Self Sufficient"
        ],
        "weightkg": 149,
        "types": [
            "Fairy"
        ],
        "genderR": 127
    },
    "Smoliv": {
        "id": 928,
        "bs": {
            "hp": 41,
            "at": 35,
            "df": 45,
            "sa": 58,
            "sd": 51,
            "sp": 30
        },
        "abilities": [
            "Cute Charm",
            "Friend Guard",
            "Ripen"
        ],
        "innates": [
            "Chloroplast",
            "Overcoat",
            "Earth Eater"
        ],
        "weightkg": 65,
        "types": [
            "Grass",
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Dolliv": {
        "id": 929,
        "bs": {
            "hp": 52,
            "at": 53,
            "df": 60,
            "sa": 78,
            "sd": 78,
            "sp": 33
        },
        "abilities": [
            "Triage",
            "Friend Guard",
            "Ripen"
        ],
        "innates": [
            "Chloroplast",
            "Overcoat",
            "Cute Charm"
        ],
        "weightkg": 119,
        "types": [
            "Grass",
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Arboliva": {
        "id": 930,
        "bs": {
            "hp": 78,
            "at": 69,
            "df": 90,
            "sa": 125,
            "sd": 109,
            "sp": 39
        },
        "abilities": [
            "Triage",
            "Friend Guard",
            "Absorbant"
        ],
        "innates": [
            "Seed Sower",
            "Overcoat",
            "Harvest"
        ],
        "weightkg": 482,
        "types": [
            "Grass",
            "Normal"
        ],
        "genderR": 127
    },
    "Squawkabilly": {
        "id": 931,
        "bs": {
            "hp": 90,
            "at": 45,
            "df": 106,
            "sa": 76,
            "sd": 90,
            "sp": 85
        },
        "abilities": [
            "Power Spot",
            "Intimidate",
            "Friend Guard"
        ],
        "innates": [
            "Airborne",
            "Flock",
            "Parroting"
        ],
        "weightkg": 24,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127,
        "otherFormes": [
            "Squawkabilly White Plumage",
            "Squawkabilly Yellow Plumage",
            "Squawkabilly Blue Plumage"
        ],
        "nfe": true
    },
    "Squawkabilly White": {
        "id": 931,
        "bs": {
            "hp": 90,
            "at": 45,
            "df": 100,
            "sa": 76,
            "sd": 90,
            "sp": 85
        },
        "abilities": [
            "Power Spot",
            "Intimidate",
            "Friend Guard"
        ],
        "innates": [
            "Airborne",
            "Flock",
            "Parroting"
        ],
        "weightkg": 24,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127
    },
    "Squawkabilly Yellow": {
        "id": 931,
        "bs": {
            "hp": 90,
            "at": 45,
            "df": 100,
            "sa": 76,
            "sd": 90,
            "sp": 85
        },
        "abilities": [
            "Power Spot",
            "Intimidate",
            "Friend Guard"
        ],
        "innates": [
            "Airborne",
            "Flock",
            "Parroting"
        ],
        "weightkg": 24,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127
    },
    "Squawkabilly Blue": {
        "id": 931,
        "bs": {
            "hp": 90,
            "at": 45,
            "df": 100,
            "sa": 76,
            "sd": 90,
            "sp": 85
        },
        "abilities": [
            "Power Spot",
            "Intimidate",
            "Friend Guard"
        ],
        "innates": [
            "Airborne",
            "Flock",
            "Parroting"
        ],
        "weightkg": 24,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127
    },
    "Squawkabilly Green Plumage": {
        "id": 931,
        "bs": {
            "hp": 90,
            "at": 45,
            "df": 100,
            "sa": 76,
            "sd": 90,
            "sp": 85
        },
        "abilities": [
            "Power Spot",
            "Intimidate",
            "Friend Guard"
        ],
        "innates": [
            "Airborne",
            "Flock",
            "Parroting"
        ],
        "weightkg": 24,
        "types": [
            "Normal",
            "Flying"
        ],
        "genderR": 127
    },
    "Nacli": {
        "id": 932,
        "bs": {
            "hp": 55,
            "at": 60,
            "df": 75,
            "sa": 35,
            "sd": 40,
            "sp": 25
        },
        "abilities": [
            "Salt Circle",
            "Sturdy",
            "Regenerator"
        ],
        "innates": [
            "Purifying Salt",
            "Loose Rocks",
            "Impenetrable"
        ],
        "weightkg": 160,
        "types": [
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Naclstack": {
        "id": 933,
        "bs": {
            "hp": 60,
            "at": 60,
            "df": 100,
            "sa": 35,
            "sd": 65,
            "sp": 35
        },
        "abilities": [
            "Salt Circle",
            "Sturdy",
            "Regenerator"
        ],
        "innates": [
            "Purifying Salt",
            "Loose Rocks",
            "Impenetrable"
        ],
        "weightkg": 105,
        "types": [
            "Rock"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Garganacl": {
        "id": 934,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 130,
            "sa": 45,
            "sd": 90,
            "sp": 35
        },
        "abilities": [
            "Salt Circle",
            "Juggernaut",
            "Regenerator"
        ],
        "innates": [
            "Purifying Salt",
            "Loose Rocks",
            "Impenetrable"
        ],
        "weightkg": 2400,
        "types": [
            "Rock"
        ],
        "genderR": 127
    },
    "Charcadet": {
        "id": 935,
        "bs": {
            "hp": 40,
            "at": 50,
            "df": 40,
            "sa": 50,
            "sd": 40,
            "sp": 35
        },
        "abilities": [
            "Weak Armor",
            "Defiant",
            "Competitive"
        ],
        "innates": [
            "Battle Armor",
            "Simple",
            "Flash Fire"
        ],
        "weightkg": 105,
        "types": [
            "Fire"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Armarouge": {
        "id": 936,
        "bs": {
            "hp": 85,
            "at": 60,
            "df": 100,
            "sa": 125,
            "sd": 80,
            "sp": 75
        },
        "abilities": [
            "Weak Armor",
            "White Smoke",
            "Artillery"
        ],
        "innates": [
            "Battle Armor",
            "Mega Launcher",
            "Flash Fire"
        ],
        "weightkg": 850,
        "types": [
            "Fire",
            "Psychic"
        ],
        "genderR": 127
    },
    "Ceruledge": {
        "id": 937,
        "bs": {
            "hp": 75,
            "at": 125,
            "df": 80,
            "sa": 60,
            "sd": 100,
            "sp": 85
        },
        "abilities": [
            "Weak Armor",
            "Moxie",
            "Ethereal Rush"
        ],
        "innates": [
            "Battle Armor",
            "Hyper Cutter",
            "Dual Wield"
        ],
        "weightkg": 620,
        "types": [
            "Fire",
            "Ghost"
        ],
        "genderR": 127
    },
    "Tadbulb": {
        "id": 938,
        "bs": {
            "hp": 71,
            "at": 31,
            "df": 45,
            "sa": 66,
            "sd": 45,
            "sp": 45
        },
        "abilities": [
            "Damp",
            "Unaware",
            "Generator"
        ],
        "innates": [
            "Electromorphosis",
            "Dry Skin",
            "Static"
        ],
        "weightkg": 4,
        "types": [
            "Electric"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Bellibolt": {
        "id": 939,
        "bs": {
            "hp": 109,
            "at": 64,
            "df": 95,
            "sa": 110,
            "sd": 95,
            "sp": 45
        },
        "abilities": [
            "Damp",
            "Unaware",
            "Thick Fat"
        ],
        "innates": [
            "Electromorphosis",
            "Dry Skin",
            "Static"
        ],
        "weightkg": 1130,
        "types": [
            "Electric"
        ],
        "genderR": 127
    },
    "Wattrel": {
        "id": 940,
        "bs": {
            "hp": 40,
            "at": 40,
            "df": 35,
            "sa": 55,
            "sd": 40,
            "sp": 70
        },
        "abilities": [
            "Competitive",
            "Impulse",
            "Wind Power"
        ],
        "innates": [
            "Volt Absorb",
            "Terminal Velocity",
            "Air Blower"
        ],
        "weightkg": 26,
        "types": [
            "Electric",
            "Flying"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Kilowattrel": {
        "id": 941,
        "bs": {
            "hp": 70,
            "at": 70,
            "df": 60,
            "sa": 105,
            "sd": 60,
            "sp": 125
        },
        "abilities": [
            "Competitive",
            "Impulse",
            "Air Blower"
        ],
        "innates": [
            "Volt Absorb",
            "Terminal Velocity",
            "Wind Power"
        ],
        "weightkg": 386,
        "types": [
            "Electric",
            "Flying"
        ],
        "genderR": 127
    },
    "Maschiff": {
        "id": 942,
        "bs": {
            "hp": 60,
            "at": 78,
            "df": 60,
            "sa": 40,
            "sd": 51,
            "sp": 51
        },
        "abilities": [
            "Intimidate",
            "Avenger",
            "Friend Guard"
        ],
        "innates": [
            "Guard Dog",
            "Strong Jaw",
            "Jaws of Carnage"
        ],
        "weightkg": 160,
        "types": [
            "Dark"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Mabosstiff": {
        "id": 943,
        "bs": {
            "hp": 80,
            "at": 120,
            "df": 90,
            "sa": 60,
            "sd": 70,
            "sp": 85
        },
        "abilities": [
            "Intimidate",
            "Avenger",
            "Friend Guard"
        ],
        "innates": [
            "Guard Dog",
            "Strong Jaw",
            "Jaws of Carnage"
        ],
        "weightkg": 61,
        "types": [
            "Dark"
        ],
        "genderR": 127
    },
    "Shroodle": {
        "id": 944,
        "bs": {
            "hp": 40,
            "at": 65,
            "df": 35,
            "sa": 40,
            "sd": 35,
            "sp": 75
        },
        "abilities": [
            "Prankster",
            "Growing Tooth",
            "Unburden"
        ],
        "innates": [
            "Poison Touch",
            "Cheap Tactics",
            "Pickpocket"
        ],
        "weightkg": 7,
        "types": [
            "Poison",
            "Normal"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Grafaiai": {
        "id": 945,
        "bs": {
            "hp": 63,
            "at": 95,
            "df": 65,
            "sa": 80,
            "sd": 72,
            "sp": 110
        },
        "abilities": [
            "Unburden",
            "Technician",
            "Prankster"
        ],
        "innates": [
            "Poison Touch",
            "Cheap Tactics",
            "Scrappy"
        ],
        "weightkg": 272,
        "types": [
            "Poison",
            "Normal"
        ],
        "genderR": 127
    },
    "Bramblin": {
        "id": 946,
        "bs": {
            "hp": 50,
            "at": 65,
            "df": 30,
            "sa": 45,
            "sd": 35,
            "sp": 70
        },
        "abilities": [
            "Infiltrator",
            "Desert Cloak",
            "Loose Quills"
        ],
        "innates": [
            "Wind Rider",
            "Let's Roll",
            "Nosferatu"
        ],
        "weightkg": 6,
        "types": [
            "Grass",
            "Ghost"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Brambleghast": {
        "id": 947,
        "bs": {
            "hp": 65,
            "at": 115,
            "df": 70,
            "sa": 80,
            "sd": 70,
            "sp": 100
        },
        "abilities": [
            "Infiltrator",
            "Desert Cloak",
            "Loose Quills"
        ],
        "innates": [
            "Wind Rider",
            "Let's Roll",
            "Nosferatu"
        ],
        "weightkg": 60,
        "types": [
            "Grass",
            "Ghost"
        ],
        "genderR": 127
    },
    "Toedscool": {
        "id": 948,
        "bs": {
            "hp": 40,
            "at": 40,
            "df": 35,
            "sa": 50,
            "sd": 100,
            "sp": 70
        },
        "abilities": [
            "Poison Heal",
            "Long Reach",
            "Arena Trap"
        ],
        "innates": [
            "Stall",
            "Absorbant",
            "Mycelium Might"
        ],
        "weightkg": 330,
        "types": [
            "Ground",
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Toedscruel": {
        "id": 949,
        "bs": {
            "hp": 80,
            "at": 70,
            "df": 65,
            "sa": 80,
            "sd": 120,
            "sp": 100
        },
        "abilities": [
            "Poison Heal",
            "Long Reach",
            "Arena Trap"
        ],
        "innates": [
            "Stall",
            "Absorbant",
            "Mycelium Might"
        ],
        "weightkg": 580,
        "types": [
            "Ground",
            "Grass"
        ],
        "genderR": 127
    },
    "Klawf": {
        "id": 950,
        "bs": {
            "hp": 70,
            "at": 100,
            "df": 115,
            "sa": 35,
            "sd": 55,
            "sp": 75
        },
        "abilities": [
            "Regenerator",
            "Grip Pincer",
            "Ambush"
        ],
        "innates": [
            "Shell Armor",
            "Anger Shell",
            "Sturdy"
        ],
        "weightkg": 790,
        "types": [
            "Rock"
        ],
        "genderR": 127
    },
    "Capsakid": {
        "id": 951,
        "bs": {
            "hp": 50,
            "at": 62,
            "df": 40,
            "sa": 62,
            "sd": 40,
            "sp": 50
        },
        "abilities": [
            "Moody",
            "Chlorophyll",
            "Solar Flare"
        ],
        "innates": [
            "Water Absorb",
            "Growing Tooth",
            "Pyromancy"
        ],
        "weightkg": 30,
        "types": [
            "Grass"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Scovillain": {
        "id": 952,
        "bs": {
            "hp": 65,
            "at": 108,
            "df": 65,
            "sa": 108,
            "sd": 65,
            "sp": 75
        },
        "abilities": [
            "Moody",
            "Chlorophyll",
            "Solar Flare"
        ],
        "innates": [
            "Water Absorb",
            "Multi Headed",
            "Pyromancy"
        ],
        "weightkg": 150,
        "types": [
            "Grass",
            "Fire"
        ],
        "genderR": 127
    },
    "Rellor": {
        "id": 953,
        "bs": {
            "hp": 41,
            "at": 50,
            "df": 60,
            "sa": 50,
            "sd": 58,
            "sp": 30
        },
        "abilities": [
            "Compound Eyes",
            "Scavenger",
            "Shed Skin"
        ],
        "innates": [
            "Let's Roll",
            "Stench",
            "Speed Boost"
        ],
        "weightkg": 10,
        "types": [
            "Bug"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Rabsca": {
        "id": 954,
        "bs": {
            "hp": 75,
            "at": 50,
            "df": 85,
            "sa": 115,
            "sd": 100,
            "sp": 45
        },
        "abilities": [
            "Telepathy",
            "Twist. Dimension",
            "Stall"
        ],
        "innates": [
            "Parental Bond",
            "Psychic Mind",
            "Levitate"
        ],
        "weightkg": 35,
        "types": [
            "Bug",
            "Psychic"
        ],
        "genderR": 127
    },
    "Flittle": {
        "id": 955,
        "bs": {
            "hp": 30,
            "at": 35,
            "df": 30,
            "sa": 55,
            "sd": 30,
            "sp": 75
        },
        "abilities": [
            "Speed Boost",
            "Frisk",
            "Mystic Power"
        ],
        "innates": [
            "Levitate",
            "Egoist",
            "Psychic Mind"
        ],
        "weightkg": 15,
        "types": [
            "Psychic"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Espathra": {
        "id": 956,
        "bs": {
            "hp": 95,
            "at": 60,
            "df": 60,
            "sa": 101,
            "sd": 60,
            "sp": 105
        },
        "abilities": [
            "Speed Boost",
            "Majestic Bird",
            "Mystic Power"
        ],
        "innates": [
            "Egoist",
            "Frisk",
            "Psychic Mind"
        ],
        "weightkg": 900,
        "types": [
            "Psychic"
        ],
        "genderR": 127
    },
    "Tinkatink": {
        "id": 957,
        "bs": {
            "hp": 50,
            "at": 55,
            "df": 45,
            "sa": 35,
            "sd": 64,
            "sp": 62
        },
        "abilities": [
            "Steelworker",
            "Readied Action",
            "Opportunist"
        ],
        "innates": [
            "Super Slammer",
            "Rattled",
            "Mold Breaker"
        ],
        "weightkg": 89,
        "types": [
            "Fairy",
            "Steel"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Tinkatuff": {
        "id": 958,
        "bs": {
            "hp": 65,
            "at": 65,
            "df": 55,
            "sa": 45,
            "sd": 82,
            "sp": 82
        },
        "abilities": [
            "Steelworker",
            "Readied Action",
            "Opportunist"
        ],
        "innates": [
            "Super Slammer",
            "Long Reach",
            "Mold Breaker"
        ],
        "weightkg": 591,
        "types": [
            "Fairy",
            "Steel"
        ],
        "genderR": 254,
        "nfe": true
    },
    "Tinkaton": {
        "id": 959,
        "bs": {
            "hp": 85,
            "at": 75,
            "df": 77,
            "sa": 70,
            "sd": 105,
            "sp": 94
        },
        "abilities": [
            "Steely Spirit",
            "Readied Action",
            "Opportunist"
        ],
        "innates": [
            "Super Slammer",
            "Long Reach",
            "Mold Breaker"
        ],
        "weightkg": 1128,
        "types": [
            "Fairy",
            "Steel"
        ],
        "genderR": 254
    },
    "Tinkaton Mega": {
        "id": 959,
        "bs": {
            "hp": 85,
            "at": 110,
            "df": 107,
            "sa": 105,
            "sd": 105,
            "sp": 94
        },
        "abilities": [
            "Demolitionist",
            "Demolitionist",
            "Demolitionist"
        ],
        "innates": [
            "Super Slammer",
            "Long Reach",
            "Mold Breaker"
        ],
        "weightkg": 1128,
        "types": [
            "Fairy",
            "Steel"
        ],
        "genderR": 254
    },
    "Wiglett": {
        "id": 960,
        "bs": {
            "hp": 15,
            "at": 55,
            "df": 30,
            "sa": 35,
            "sd": 35,
            "sp": 95
        },
        "abilities": [
            "Accelerate",
            "Wimp Out",
            "Coward"
        ],
        "innates": [
            "Gooey",
            "Field Explorer",
            "Rattled"
        ],
        "weightkg": 18,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Wugtrio": {
        "id": 961,
        "bs": {
            "hp": 35,
            "at": 100,
            "df": 50,
            "sa": 50,
            "sd": 70,
            "sp": 120
        },
        "abilities": [
            "Accelerate",
            "Rattled",
            "Coward"
        ],
        "innates": [
            "Gooey",
            "Field Explorer",
            "Multi Headed"
        ],
        "weightkg": 54,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Bombirdier": {
        "id": 962,
        "bs": {
            "hp": 70,
            "at": 103,
            "df": 85,
            "sa": 60,
            "sd": 85,
            "sp": 82
        },
        "abilities": [
            "Big Pecks",
            "Stygian Rush",
            "Unburden"
        ],
        "innates": [
            "Mountaineer",
            "Rocky Payload",
            "Retriever"
        ],
        "weightkg": 429,
        "types": [
            "Flying",
            "Dark"
        ],
        "genderR": 127
    },
    "Finizen": {
        "id": 963,
        "bs": {
            "hp": 70,
            "at": 45,
            "df": 40,
            "sa": 45,
            "sd": 40,
            "sp": 75
        },
        "abilities": [
            "Swift Swim",
            "Justified",
            "Water Veil"
        ],
        "innates": [
            "Adaptability",
            "Damp",
            "Tidal Rush"
        ],
        "weightkg": 602,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Palafin": {
        "id": 964,
        "bs": {
            "hp": 100,
            "at": 70,
            "df": 72,
            "sa": 53,
            "sd": 62,
            "sp": 100
        },
        "abilities": [
            "Friend Guard",
            "Tidal Rush",
            "Damp"
        ],
        "innates": [
            "Zero To Hero",
            "Justified",
            "Water Veil"
        ],
        "weightkg": 602,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Palafin Hero"
        ]
    },
    "Palafin Hero": {
        "id": 964,
        "bs": {
            "hp": 100,
            "at": 160,
            "df": 97,
            "sa": 106,
            "sd": 87,
            "sp": 100
        },
        "abilities": [
            "Friend Guard",
            "Avenger",
            "Damp"
        ],
        "innates": [
            "Zero To Hero",
            "Justified",
            "Adaptability"
        ],
        "weightkg": 602,
        "types": [
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Palafin"
        ]
    },
    "Varoom": {
        "id": 965,
        "bs": {
            "hp": 45,
            "at": 70,
            "df": 63,
            "sa": 30,
            "sd": 45,
            "sp": 47
        },
        "abilities": [
            "Speed Force",
            "Heavy Metal",
            "Aftermath"
        ],
        "innates": [
            "Speed Boost",
            "Filter",
            "Overcoat"
        ],
        "weightkg": 350,
        "types": [
            "Steel",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Revavroom": {
        "id": 966,
        "bs": {
            "hp": 80,
            "at": 119,
            "df": 90,
            "sa": 54,
            "sd": 67,
            "sp": 90
        },
        "abilities": [
            "Speed Force",
            "Stall",
            "Toxic Spill"
        ],
        "innates": [
            "Speed Boost",
            "Filter",
            "Overcoat"
        ],
        "weightkg": 1200,
        "types": [
            "Steel",
            "Poison"
        ],
        "genderR": 127
    },
    "Cyclizar": {
        "id": 967,
        "bs": {
            "hp": 70,
            "at": 95,
            "df": 65,
            "sa": 85,
            "sd": 65,
            "sp": 121
        },
        "abilities": [
            "Multiscale",
            "Unburden",
            "Reckless"
        ],
        "innates": [
            "Shed Skin",
            "Field Explorer",
            "Regenerator"
        ],
        "weightkg": 630,
        "types": [
            "Dragon",
            "Normal"
        ],
        "genderR": 127
    },
    "Orthworm": {
        "id": 968,
        "bs": {
            "hp": 70,
            "at": 85,
            "df": 145,
            "sa": 60,
            "sd": 55,
            "sp": 65
        },
        "abilities": [
            "Sand Guard",
            "Iron Fist",
            "Grounded"
        ],
        "innates": [
            "Earth Eater",
            "Aftershock",
            "Unaware"
        ],
        "weightkg": 3100,
        "types": [
            "Steel"
        ],
        "genderR": 127
    },
    "Glimmet": {
        "id": 969,
        "bs": {
            "hp": 48,
            "at": 35,
            "df": 42,
            "sa": 105,
            "sd": 60,
            "sp": 60
        },
        "abilities": [
            "Loose Quills",
            "Toxic Debris",
            "Power Spot"
        ],
        "innates": [
            "Corrosion",
            "Neurotoxin",
            "Sturdy"
        ],
        "weightkg": 80,
        "types": [
            "Rock",
            "Poison"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Glimmora": {
        "id": 970,
        "bs": {
            "hp": 83,
            "at": 55,
            "df": 90,
            "sa": 130,
            "sd": 81,
            "sp": 86
        },
        "abilities": [
            "Corrosion",
            "Sturdy",
            "Power Spot"
        ],
        "innates": [
            "Toxic Debris",
            "Merciless",
            "Accelerate"
        ],
        "weightkg": 450,
        "types": [
            "Rock",
            "Poison"
        ],
        "genderR": 127
    },
    "Greavard": {
        "id": 971,
        "bs": {
            "hp": 50,
            "at": 61,
            "df": 60,
            "sa": 30,
            "sd": 55,
            "sp": 34
        },
        "abilities": [
            "Ethereal Rush",
            "Phantom Pain",
            "Fluffy"
        ],
        "innates": [
            "Pickup",
            "Cursed Body",
            "Soul Eater"
        ],
        "weightkg": 350,
        "types": [
            "Ghost"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Houndstone": {
        "id": 972,
        "bs": {
            "hp": 72,
            "at": 101,
            "df": 100,
            "sa": 50,
            "sd": 97,
            "sp": 68
        },
        "abilities": [
            "Ethereal Rush",
            "Phantom Pain",
            "Fluffy"
        ],
        "innates": [
            "Scare",
            "Haunted Spirit",
            "Soul Eater"
        ],
        "weightkg": 150,
        "types": [
            "Ghost"
        ],
        "genderR": 127
    },
    "Flamigo": {
        "id": 973,
        "bs": {
            "hp": 82,
            "at": 115,
            "df": 74,
            "sa": 75,
            "sd": 64,
            "sp": 90
        },
        "abilities": [
            "Quick Feet",
            "Scrappy",
            "Costar"
        ],
        "innates": [
            "Vital Spirit",
            "Flock",
            "Aerilate"
        ],
        "weightkg": 370,
        "types": [
            "Flying",
            "Fighting"
        ],
        "genderR": 127
    },
    "Cetoddle": {
        "id": 974,
        "bs": {
            "hp": 108,
            "at": 68,
            "df": 45,
            "sa": 30,
            "sd": 40,
            "sp": 43
        },
        "abilities": [
            "Slush Rush",
            "Cute Charm",
            "Let's Roll"
        ],
        "innates": [
            "Thick Fat",
            "Freezing Point",
            "Scavenger"
        ],
        "weightkg": 150,
        "types": [
            "Ice"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Cetitan": {
        "id": 975,
        "bs": {
            "hp": 170,
            "at": 113,
            "df": 65,
            "sa": 45,
            "sd": 55,
            "sp": 73
        },
        "abilities": [
            "Whiteout",
            "Slush Rush",
            "Sheer Force"
        ],
        "innates": [
            "Thick Fat",
            "Let's Roll",
            "Predator"
        ],
        "weightkg": 7000,
        "types": [
            "Ice"
        ],
        "genderR": 127
    },
    "Veluza": {
        "id": 976,
        "bs": {
            "hp": 102,
            "at": 102,
            "df": 83,
            "sa": 78,
            "sd": 65,
            "sp": 70
        },
        "abilities": [
            "Mold Breaker",
            "Regenerator",
            "Hydrate"
        ],
        "innates": [
            "Keen Edge",
            "Torrent",
            "Hyper Cutter"
        ],
        "weightkg": 90,
        "types": [
            "Water",
            "Psychic"
        ],
        "genderR": 127
    },
    "Dondozo": {
        "id": 977,
        "bs": {
            "hp": 150,
            "at": 100,
            "df": 115,
            "sa": 65,
            "sd": 65,
            "sp": 35
        },
        "abilities": [
            "Unaware",
            "Oblivious",
            "Gluttony"
        ],
        "innates": [
            "Water Veil",
            "Predator",
            "Juggernaut"
        ],
        "weightkg": 2200,
        "types": [
            "Water"
        ],
        "genderR": 127
    },
    "Tatsugiri": {
        "id": 978,
        "bs": {
            "hp": 68,
            "at": 50,
            "df": 60,
            "sa": 120,
            "sd": 95,
            "sp": 82
        },
        "abilities": [
            "Commander",
            "Multiscale",
            "Tactical Retreat"
        ],
        "innates": [
            "Torrent",
            "High Tide",
            "Opportunist"
        ],
        "weightkg": 80,
        "types": [
            "Dragon",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Tatsugiri Curly",
            "Tatsugiri Droopy",
            "Tatsugiri Stretchy"
        ],
        "nfe": true
    },
    "Tatsugiri Curly": {
        "id": 978,
        "bs": {
            "hp": 68,
            "at": 50,
            "df": 60,
            "sa": 120,
            "sd": 95,
            "sp": 82
        },
        "abilities": [
            "Commander",
            "Multiscale",
            "Tactical Retreat"
        ],
        "innates": [
            "Torrent",
            "High Tide",
            "Opportunist"
        ],
        "weightkg": 80,
        "types": [
            "Dragon",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Tatsugiri"
        ]
    },
    "Tatsugiri Droopy": {
        "id": 978,
        "bs": {
            "hp": 68,
            "at": 50,
            "df": 60,
            "sa": 120,
            "sd": 95,
            "sp": 82
        },
        "abilities": [
            "Commander",
            "Multiscale",
            "Tactical Retreat"
        ],
        "innates": [
            "Torrent",
            "High Tide",
            "Opportunist"
        ],
        "weightkg": 80,
        "types": [
            "Dragon",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Tatsugiri"
        ]
    },
    "Tatsugiri Stretchy": {
        "id": 978,
        "bs": {
            "hp": 68,
            "at": 50,
            "df": 60,
            "sa": 120,
            "sd": 95,
            "sp": 82
        },
        "abilities": [
            "Commander",
            "Multiscale",
            "Tactical Retreat"
        ],
        "innates": [
            "Torrent",
            "High Tide",
            "Opportunist"
        ],
        "weightkg": 80,
        "types": [
            "Dragon",
            "Water"
        ],
        "genderR": 127,
        "otherFormes": [
            "Tatsugiri"
        ]
    },
    "Annihilape": {
        "id": 979,
        "bs": {
            "hp": 110,
            "at": 115,
            "df": 80,
            "sa": 50,
            "sd": 90,
            "sp": 90
        },
        "abilities": [
            "Shallow Grave",
            "Menacing Situation",
            "Defiant"
        ],
        "innates": [
            "Hyper Aggressive",
            "Rage Point",
            "Vengeful Spirit"
        ],
        "weightkg": 560,
        "types": [
            "Fighting",
            "Ghost"
        ],
        "genderR": 127
    },
    "Clodsire": {
        "id": 980,
        "bs": {
            "hp": 130,
            "at": 85,
            "df": 80,
            "sa": 85,
            "sd": 100,
            "sp": 35
        },
        "abilities": [
            "Wonder Skin",
            "Unaware",
            "Damp"
        ],
        "innates": [
            "Toxic Debris",
            "Water Absorb",
            "Rough Skin"
        ],
        "weightkg": 2230,
        "types": [
            "Poison",
            "Ground"
        ],
        "genderR": 127
    },
    "Farigiraf": {
        "id": 981,
        "bs": {
            "hp": 120,
            "at": 75,
            "df": 75,
            "sa": 115,
            "sd": 75,
            "sp": 60
        },
        "abilities": [
            "Cud Chew",
            "Contrary",
            "Sap Sipper"
        ],
        "innates": [
            "Armor Tail",
            "Mind Crunch",
            "Scare"
        ],
        "weightkg": 1600,
        "types": [
            "Normal",
            "Psychic"
        ],
        "genderR": 127
    },
    "Great Tusk": {
        "id": 984,
        "bs": {
            "hp": 115,
            "at": 131,
            "df": 131,
            "sa": 53,
            "sd": 53,
            "sp": 87
        },
        "abilities": [
            "Spike Armor",
            "Battle Armor",
            "Thick Fat"
        ],
        "innates": [
            "Protosynthesis",
            "Mighty Horn",
            "Aftershock"
        ],
        "weightkg": 3200,
        "types": [
            "Ground",
            "Fighting"
        ],
        "genderR": 2
    },
    "Scream Tail": {
        "id": 985,
        "bs": {
            "hp": 115,
            "at": 65,
            "df": 99,
            "sa": 65,
            "sd": 115,
            "sp": 111
        },
        "abilities": [
            "Armor Tail",
            "Huge Power",
            "Fur Coat"
        ],
        "innates": [
            "Protosynthesis",
            "Nosferatu",
            "Tangling Hair"
        ],
        "weightkg": 80,
        "types": [
            "Fairy",
            "Psychic"
        ],
        "genderR": 2
    },
    "Brute Bonnet": {
        "id": 986,
        "bs": {
            "hp": 111,
            "at": 127,
            "df": 99,
            "sa": 79,
            "sd": 99,
            "sp": 55
        },
        "abilities": [
            "Fungal Infection",
            "Adaptability",
            "Mycelium Might"
        ],
        "innates": [
            "Protosynthesis",
            "Regenerator",
            "Solar Power"
        ],
        "weightkg": 210,
        "types": [
            "Grass",
            "Dark"
        ],
        "genderR": 2
    },
    "Flutter Mane": {
        "id": 987,
        "bs": {
            "hp": 55,
            "at": 55,
            "df": 55,
            "sa": 135,
            "sd": 135,
            "sp": 135
        },
        "abilities": [
            "Vengeful Spirit",
            "Soul Eater",
            "Guilt Trip"
        ],
        "innates": [
            "Protosynthesis",
            "Ill Will",
            "Frenzied Phantom"
        ],
        "weightkg": 40,
        "types": [
            "Ghost",
            "Fairy"
        ],
        "genderR": 2
    },
    "Slither Wing": {
        "id": 988,
        "bs": {
            "hp": 85,
            "at": 135,
            "df": 79,
            "sa": 85,
            "sd": 105,
            "sp": 81
        },
        "abilities": [
            "Fluffy",
            "Hustle",
            "Fire Scales"
        ],
        "innates": [
            "Protosynthesis",
            "Majestic Moth",
            "Powder Burst"
        ],
        "weightkg": 920,
        "types": [
            "Bug",
            "Fighting"
        ],
        "genderR": 2
    },
    "Sandy Shocks": {
        "id": 989,
        "bs": {
            "hp": 85,
            "at": 81,
            "df": 97,
            "sa": 121,
            "sd": 85,
            "sp": 101
        },
        "abilities": [
            "Ground Shock",
            "Overcharge",
            "Scrapyard"
        ],
        "innates": [
            "Protosynthesis",
            "Multi Headed",
            "Transistor"
        ],
        "weightkg": 600,
        "types": [
            "Electric",
            "Ground"
        ],
        "genderR": 2
    },
    "Iron Treads": {
        "id": 990,
        "bs": {
            "hp": 90,
            "at": 112,
            "df": 120,
            "sa": 72,
            "sd": 70,
            "sp": 106
        },
        "abilities": [
            "Let's Roll",
            "Watch Your Step",
            "Sturdy"
        ],
        "innates": [
            "Quark Drive",
            "Impenetrable",
            "Mega Launcher"
        ],
        "weightkg": 2400,
        "types": [
            "Ground",
            "Steel"
        ],
        "genderR": 2
    },
    "Iron Bundle": {
        "id": 991,
        "bs": {
            "hp": 56,
            "at": 80,
            "df": 114,
            "sa": 124,
            "sd": 60,
            "sp": 136
        },
        "abilities": [
            "Mountaineer",
            "Pickup",
            "Snow Warning"
        ],
        "innates": [
            "Quark Drive",
            "Cold Rebound",
            "Impulse"
        ],
        "weightkg": 110,
        "types": [
            "Ice",
            "Water"
        ],
        "genderR": 2
    },
    "Iron Hands": {
        "id": 992,
        "bs": {
            "hp": 154,
            "at": 140,
            "df": 108,
            "sa": 50,
            "sd": 68,
            "sp": 50
        },
        "abilities": [
            "Iron Fist",
            "Lead Coat",
            "Long Reach"
        ],
        "innates": [
            "Quark Drive",
            "Power Core",
            "Static"
        ],
        "weightkg": 3807,
        "types": [
            "Fighting",
            "Electric"
        ],
        "genderR": 2
    },
    "Iron Jugulis": {
        "id": 993,
        "bs": {
            "hp": 94,
            "at": 80,
            "df": 86,
            "sa": 122,
            "sd": 80,
            "sp": 108
        },
        "abilities": [
            "Hubris",
            "Intimidate",
            "Mega Launcher"
        ],
        "innates": [
            "Quark Drive",
            "Multi Headed",
            "Rapid Response"
        ],
        "weightkg": 1110,
        "types": [
            "Dark",
            "Flying"
        ],
        "genderR": 2
    },
    "Iron Moth": {
        "id": 994,
        "bs": {
            "hp": 80,
            "at": 70,
            "df": 60,
            "sa": 140,
            "sd": 110,
            "sp": 110
        },
        "abilities": [
            "Molten Down",
            "Shield Dust",
            "Corrosion"
        ],
        "innates": [
            "Quark Drive",
            "Majestic Moth",
            "Overcoat"
        ],
        "weightkg": 360,
        "types": [
            "Fire",
            "Poison"
        ],
        "genderR": 2
    },
    "Iron Thorns": {
        "id": 995,
        "bs": {
            "hp": 100,
            "at": 134,
            "df": 110,
            "sa": 70,
            "sd": 84,
            "sp": 72
        },
        "abilities": [
            "Fearmonger",
            "Solid Rock",
            "Light Metal"
        ],
        "innates": [
            "Quark Drive",
            "Sharp Edges",
            "Self Repair"
        ],
        "weightkg": 3030,
        "types": [
            "Rock",
            "Electric"
        ],
        "genderR": 2
    },
    "Frigibax": {
        "id": 996,
        "bs": {
            "hp": 65,
            "at": 75,
            "df": 45,
            "sa": 35,
            "sd": 45,
            "sp": 55
        },
        "abilities": [
            "Mountaineer",
            "Ice Body",
            "Ice Dew"
        ],
        "innates": [
            "Thermal Exchange",
            "Heatproof",
            "Freezing Point"
        ],
        "weightkg": 170,
        "types": [
            "Dragon",
            "Ice"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Arctibax": {
        "id": 997,
        "bs": {
            "hp": 90,
            "at": 95,
            "df": 66,
            "sa": 45,
            "sd": 65,
            "sp": 62
        },
        "abilities": [
            "Freezing Point",
            "Whiteout",
            "Keen Edge"
        ],
        "innates": [
            "Thermal Exchange",
            "Heatproof",
            "Overwhelm"
        ],
        "weightkg": 300,
        "types": [
            "Dragon",
            "Ice"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Baxcalibur": {
        "id": 998,
        "bs": {
            "hp": 115,
            "at": 145,
            "df": 92,
            "sa": 75,
            "sd": 86,
            "sp": 87
        },
        "abilities": [
            "Freezing Point",
            "Whiteout",
            "Keen Edge"
        ],
        "innates": [
            "Thermal Exchange",
            "Heatproof",
            "Overwhelm"
        ],
        "weightkg": 2100,
        "types": [
            "Dragon",
            "Ice"
        ],
        "genderR": 127
    },
    "Gimmighoul": {
        "id": 999,
        "bs": {
            "hp": 65,
            "at": 30,
            "df": 70,
            "sa": 75,
            "sd": 70,
            "sp": 10
        },
        "abilities": [
            "Surprise!",
            "Coward",
            "Metallic"
        ],
        "innates": [
            "Good As Gold",
            "Super Luck",
            "Prankster"
        ],
        "weightkg": 50,
        "types": [
            "Ghost"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Gimmighoul Roaming": {
        "id": 999,
        "bs": {
            "hp": 65,
            "at": 30,
            "df": 25,
            "sa": 75,
            "sd": 45,
            "sp": 80
        },
        "abilities": [
            "Surprise!",
            "Coward",
            "Metallic"
        ],
        "innates": [
            "Good As Gold",
            "Super Luck",
            "Prankster"
        ],
        "weightkg": 50,
        "types": [
            "Ghost"
        ],
        "genderR": 2
    },
    "Gholdengo": {
        "id": 1000,
        "bs": {
            "hp": 87,
            "at": 60,
            "df": 95,
            "sa": 133,
            "sd": 91,
            "sp": 84
        },
        "abilities": [
            "Sharing Is Caring",
            "Prankster",
            "Friend Guard"
        ],
        "innates": [
            "Good As Gold",
            "Steely Spirit",
            "Super Luck"
        ],
        "weightkg": 300,
        "types": [
            "Steel",
            "Ghost"
        ],
        "genderR": 2
    },
    "Wo Chien": {
        "id": 1001,
        "bs": {
            "hp": 125,
            "at": 70,
            "df": 100,
            "sa": 95,
            "sd": 135,
            "sp": 55
        },
        "abilities": [
            "Grass Pelt",
            "Soul Linker",
            "Pressure"
        ],
        "innates": [
            "Tablets Of Ruin",
            "Stall",
            "Absorbant"
        ],
        "weightkg": 742,
        "types": [
            "Dark",
            "Grass"
        ],
        "genderR": 2
    },
    "Chien Pao": {
        "id": 1002,
        "bs": {
            "hp": 80,
            "at": 130,
            "df": 80,
            "sa": 90,
            "sd": 65,
            "sp": 135
        },
        "abilities": [
            "Unaware",
            "Hyper Aggressive",
            "Snow Warning"
        ],
        "innates": [
            "Sword Of Ruin",
            "Arctic Fur",
            "Strong Jaw"
        ],
        "weightkg": 1522,
        "types": [
            "Dark",
            "Ice"
        ],
        "genderR": 2
    },
    "Chien Pao Mega": {
        "id": 1002,
        "bs": {
            "hp": 80,
            "at": 160,
            "df": 100,
            "sa": 110,
            "sd": 85,
            "sp": 145
        },
        "abilities": [
            "Sword of Damnation",
            "Sword of Damnation",
            "Sword of Damnation"
        ],
        "innates": [
            "Apex Predator",
            "Frostmaw",
            "Primal Maw"
        ],
        "weightkg": 1522,
        "types": [
            "Dark",
            "Ice"
        ],
        "genderR": 2
    },
    "Ting Lu": {
        "id": 1003,
        "bs": {
            "hp": 165,
            "at": 110,
            "df": 125,
            "sa": 55,
            "sd": 80,
            "sp": 45
        },
        "abilities": [
            "Aftershock",
            "Loose Rocks",
            "Bad Luck"
        ],
        "innates": [
            "Vessel Of Ruin",
            "Pressure",
            "Thick Skin"
        ],
        "weightkg": 6997,
        "types": [
            "Dark",
            "Ground"
        ],
        "genderR": 2
    },
    "Chi Yu": {
        "id": 1004,
        "bs": {
            "hp": 55,
            "at": 80,
            "df": 80,
            "sa": 145,
            "sd": 120,
            "sp": 100
        },
        "abilities": [
            "Hellblaze",
            "Fire Scales",
            "Evaporate"
        ],
        "innates": [
            "Beads Of Ruin",
            "Turboblaze",
            "Molten Down"
        ],
        "weightkg": 49,
        "types": [
            "Dark",
            "Fire"
        ],
        "genderR": 2
    },
    "Roaring Moon": {
        "id": 1005,
        "bs": {
            "hp": 105,
            "at": 139,
            "df": 71,
            "sa": 55,
            "sd": 101,
            "sp": 119
        },
        "abilities": [
            "Equinox",
            "Moxie",
            "Mold Breaker"
        ],
        "innates": [
            "Protosynthesis",
            "Overwhelm",
            "Fearmonger"
        ],
        "weightkg": 3800,
        "types": [
            "Dragon",
            "Dark"
        ],
        "genderR": 2
    },
    "Iron Valiant": {
        "id": 1006,
        "bs": {
            "hp": 74,
            "at": 130,
            "df": 90,
            "sa": 120,
            "sd": 60,
            "sp": 116
        },
        "abilities": [
            "Equinox",
            "Hubris",
            "Dual Wield"
        ],
        "innates": [
            "Quark Drive",
            "Long Reach",
            "Gallantry"
        ],
        "weightkg": 350,
        "types": [
            "Fairy",
            "Fighting"
        ],
        "genderR": 2
    },
    "Koraidon": {
        "id": 1007,
        "bs": {
            "hp": 100,
            "at": 135,
            "df": 115,
            "sa": 85,
            "sd": 100,
            "sp": 135
        },
        "abilities": [
            "Combat Specialist",
            "Turboblaze",
            "Aftershock"
        ],
        "innates": [
            "Orichalcum Pulse",
            "Dragon's Maw",
            "Winged King"
        ],
        "weightkg": 3030,
        "types": [
            "Fighting",
            "Dragon"
        ],
        "genderR": 2
    },
    "Miraidon": {
        "id": 1008,
        "bs": {
            "hp": 100,
            "at": 85,
            "df": 100,
            "sa": 135,
            "sd": 115,
            "sp": 135
        },
        "abilities": [
            "Surge Surfer",
            "Thundercall",
            "Terminal Velocity"
        ],
        "innates": [
            "Hadron Engine",
            "Dragon's Maw",
            "Iron Serpent"
        ],
        "weightkg": 2400,
        "types": [
            "Electric",
            "Dragon"
        ],
        "genderR": 2
    },
    "Walking Wake": {
        "id": 1009,
        "bs": {
            "hp": 99,
            "at": 83,
            "df": 91,
            "sa": 125,
            "sd": 83,
            "sp": 109
        },
        "abilities": [
            "Drought",
            "Sun Worship",
            "Catastrophe"
        ],
        "innates": [
            "Protosynthesis",
            "Overwhelm",
            "Multiscale"
        ],
        "weightkg": 2800,
        "types": [
            "Water",
            "Dragon"
        ],
        "genderR": 2
    },
    "Iron Leaves": {
        "id": 1010,
        "bs": {
            "hp": 90,
            "at": 104,
            "df": 88,
            "sa": 108,
            "sd": 70,
            "sp": 130
        },
        "abilities": [
            "Blademaster",
            "Dazzling",
            "Filter"
        ],
        "innates": [
            "Quark Drive",
            "Surge Surfer",
            "Momentum"
        ],
        "weightkg": 1250,
        "types": [
            "Grass",
            "Psychic"
        ],
        "genderR": 2
    },
    "Dipplin": {
        "id": 1011,
        "bs": {
            "hp": 95,
            "at": 80,
            "df": 110,
            "sa": 95,
            "sd": 80,
            "sp": 40
        },
        "abilities": [
            "Draco Morale",
            "Regenerator",
            "Supersweet Syrup"
        ],
        "innates": [
            "Sticky Hold",
            "Shell Armor",
            "Super Hot Goo"
        ],
        "weightkg": 44,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127,
        "nfe": true
    },
    "Poltchageist": {
        "id": 1012,
        "bs": {
            "hp": 40,
            "at": 45,
            "df": 45,
            "sa": 74,
            "sd": 54,
            "sp": 50
        },
        "abilities": [
            "Ill Will",
            "Self Sufficient",
            "Water Absorb"
        ],
        "innates": [
            "Heatproof",
            "Cursed Body",
            "Soul Eater"
        ],
        "weightkg": 11,
        "types": [
            "Grass",
            "Ghost"
        ],
        "genderR": 2,
        "nfe": true
    },
    "Sinistcha": {
        "id": 1013,
        "bs": {
            "hp": 71,
            "at": 60,
            "df": 106,
            "sa": 121,
            "sd": 80,
            "sp": 70
        },
        "abilities": [
            "Ill Will",
            "Self Sufficient",
            "Hospitality"
        ],
        "innates": [
            "Heatproof",
            "Cursed Body",
            "Soul Eater"
        ],
        "weightkg": 22,
        "types": [
            "Grass",
            "Ghost"
        ],
        "genderR": 2
    },
    "Okidogi": {
        "id": 1014,
        "bs": {
            "hp": 88,
            "at": 128,
            "df": 115,
            "sa": 58,
            "sd": 86,
            "sp": 80
        },
        "abilities": [
            "Hyper Aggressive",
            "No Guard",
            "Guts"
        ],
        "innates": [
            "Toxic Chain",
            "Guard Dog",
            "Anger Point"
        ],
        "weightkg": 922,
        "types": [
            "Poison",
            "Fighting"
        ],
        "genderR": 0
    },
    "Munkidori": {
        "id": 1015,
        "bs": {
            "hp": 88,
            "at": 75,
            "df": 66,
            "sa": 130,
            "sd": 80,
            "sp": 116
        },
        "abilities": [
            "Merciless",
            "Forewarn",
            "Prankster"
        ],
        "innates": [
            "Toxic Chain",
            "Monkey Business",
            "Exploit Weakness"
        ],
        "weightkg": 122,
        "types": [
            "Poison",
            "Psychic"
        ],
        "genderR": 0
    },
    "Fezandipiti": {
        "id": 1016,
        "bs": {
            "hp": 82,
            "at": 90,
            "df": 75,
            "sa": 83,
            "sd": 125,
            "sp": 100
        },
        "abilities": [
            "Corrosion",
            "Dazzling",
            "Technician"
        ],
        "innates": [
            "Toxic Chain",
            "Prankster",
            "Majestic Bird"
        ],
        "weightkg": 301,
        "types": [
            "Poison",
            "Fairy"
        ],
        "genderR": 0
    },
    "Ogerpon": {
        "id": 1017,
        "bs": {
            "hp": 80,
            "at": 120,
            "df": 84,
            "sa": 60,
            "sd": 96,
            "sp": 110
        },
        "abilities": [
            "Prankster",
            "Raw Wood",
            "Defiant"
        ],
        "innates": [
            "Long Reach",
            "Overgrow",
            "Super Slammer"
        ],
        "weightkg": 398,
        "types": [
            "Grass"
        ],
        "genderR": 254,
        "otherFormes": [
            "Ogerpon Hearthflame Mask",
            "Ogerpon Cornerstone Mask",
            "Ogerpon Cornerstone Mask",
            "Ogerpon Wellspring Mask"
        ]
    },
    "Ogerpon Hearthflame": {
        "id": 1017,
        "bs": {
            "hp": 80,
            "at": 120,
            "df": 84,
            "sa": 60,
            "sd": 96,
            "sp": 110
        },
        "abilities": [
            "Hyper Aggressive",
            "Flaming Soul",
            "Mold Breaker"
        ],
        "innates": [
            "Long Reach",
            "Blaze",
            "Super Slammer"
        ],
        "weightkg": 398,
        "types": [
            "Grass",
            "Fire"
        ],
        "genderR": 254
    },
    "Ogerpon Cornerstone": {
        "id": 1017,
        "bs": {
            "hp": 80,
            "at": 120,
            "df": 84,
            "sa": 60,
            "sd": 96,
            "sp": 110
        },
        "abilities": [
            "Loose Rocks",
            "Impenetrable",
            "Sturdy"
        ],
        "innates": [
            "Long Reach",
            "Rockhard Will",
            "Super Slammer"
        ],
        "weightkg": 398,
        "types": [
            "Grass",
            "Rock"
        ],
        "genderR": 254
    },
    "Ogerpon Wellspring": {
        "id": 1017,
        "bs": {
            "hp": 80,
            "at": 120,
            "df": 84,
            "sa": 60,
            "sd": 96,
            "sp": 110
        },
        "abilities": [
            "Water Veil",
            "Tidal Rush",
            "Cloud Nine"
        ],
        "innates": [
            "Long Reach",
            "Torrent",
            "Super Slammer"
        ],
        "weightkg": 398,
        "types": [
            "Grass",
            "Water"
        ],
        "genderR": 254
    },
    "Archaludon": {
        "id": 1018,
        "bs": {
            "hp": 90,
            "at": 105,
            "df": 130,
            "sa": 125,
            "sd": 65,
            "sp": 85
        },
        "abilities": [
            "Light Metal",
            "Generator",
            "Stamina"
        ],
        "innates": [
            "Steel Barrel",
            "Mega Launcher",
            "Full Metal Body"
        ],
        "weightkg": 100,
        "types": [
            "Steel",
            "Dragon"
        ],
        "genderR": 127
    },
    "Hydrapple": {
        "id": 1019,
        "bs": {
            "hp": 106,
            "at": 80,
            "df": 110,
            "sa": 135,
            "sd": 80,
            "sp": 44
        },
        "abilities": [
            "Self Sufficient",
            "Regenerator",
            "Supersweet Syrup"
        ],
        "innates": [
            "Multi Headed",
            "Shell Armor",
            "Super Hot Goo"
        ],
        "weightkg": 100,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127
    },
    "Gouging Fire": {
        "id": 1020,
        "bs": {
            "hp": 105,
            "at": 115,
            "df": 121,
            "sa": 65,
            "sd": 93,
            "sp": 91
        },
        "abilities": [
            "Battle Armor",
            "Fearmonger",
            "Juggernaut"
        ],
        "innates": [
            "Protosynthesis",
            "Tough Claws",
            "Turboblaze"
        ],
        "weightkg": 100,
        "types": [
            "Fire",
            "Dragon"
        ],
        "genderR": 2
    },
    "Raging Bolt": {
        "id": 1021,
        "bs": {
            "hp": 125,
            "at": 63,
            "df": 91,
            "sa": 137,
            "sd": 99,
            "sp": 75
        },
        "abilities": [
            "Power Spot",
            "Pressure",
            "Overcharge"
        ],
        "innates": [
            "Protosynthesis",
            "Overwhelm",
            "Teravolt"
        ],
        "weightkg": 100,
        "types": [
            "Electric",
            "Dragon"
        ],
        "genderR": 2
    },
    "Iron Boulder": {
        "id": 1022,
        "bs": {
            "hp": 90,
            "at": 120,
            "df": 80,
            "sa": 68,
            "sd": 108,
            "sp": 124
        },
        "abilities": [
            "Mold Breaker",
            "Mighty Horn",
            "Violent Rush"
        ],
        "innates": [
            "Quark Drive",
            "Keen Edge",
            "Solid Rock"
        ],
        "weightkg": 100,
        "types": [
            "Rock",
            "Psychic"
        ],
        "genderR": 2
    },
    "Iron Crown": {
        "id": 1023,
        "bs": {
            "hp": 90,
            "at": 72,
            "df": 100,
            "sa": 122,
            "sd": 98,
            "sp": 108
        },
        "abilities": [
            "Competitive",
            "Technician",
            "Fearmonger"
        ],
        "innates": [
            "Quark Drive",
            "Mystic Blades",
            "Sweeping Edge"
        ],
        "weightkg": 100,
        "types": [
            "Steel",
            "Psychic"
        ],
        "genderR": 2
    },
    "Terapagos": {
        "id": 1024,
        "bs": {
            "hp": 105,
            "at": 105,
            "df": 110,
            "sa": 105,
            "sd": 110,
            "sp": 85
        },
        "abilities": [
            "Wonder Skin",
            "Prism Scales",
            "Weather Control"
        ],
        "innates": [
            "Tera Shell",
            "Adaptability",
            "Natural Cure"
        ],
        "weightkg": 100,
        "types": [
            "Normal"
        ],
        "genderR": 127,
        "otherFormes": [
            "Terapagos Stellar"
        ]
    },
    "Terapagos Primal": {
        "id": 1024,
        "bs": {
            "hp": 170,
            "at": 115,
            "df": 110,
            "sa": 150,
            "sd": 110,
            "sp": 65
        },
        "abilities": [
            "Wonder Skin",
            "Magic Bounce",
            "Mirror Armor"
        ],
        "innates": [
            "Teraform Zero",
            "Adaptability",
            "Terastal Treasure"
        ],
        "weightkg": 100,
        "types": [
            "Stellar"
        ],
        "genderR": 127
    },
    "Pecharunt": {
        "id": 1025,
        "bs": {
            "hp": 88,
            "at": 88,
            "df": 160,
            "sa": 88,
            "sd": 88,
            "sp": 88
        },
        "abilities": [
            "Merciless",
            "Shadow Shield",
            "Corrosion"
        ],
        "innates": [
            "Levitate",
            "Toxic Chain",
            "Poison Puppeteer"
        ],
        "weightkg": 100,
        "types": [
            "Poison",
            "Ghost"
        ],
        "genderR": 127
    },
    "Phantowl": {
        "id": 1026,
        "bs": {
            "hp": 105,
            "at": 60,
            "df": 90,
            "sa": 96,
            "sd": 126,
            "sp": 55
        },
        "abilities": [
            "Tinted Lens",
            "Spectralize",
            "Low Visibility"
        ],
        "innates": [
            "Moon Spirit",
            "Wonder Skin",
            "Majestic Bird"
        ],
        "weightkg": 638,
        "types": [
            "Ghost",
            "Flying"
        ],
        "genderR": 127
    },
    "Duelumber": {
        "id": 1027,
        "bs": {
            "hp": 90,
            "at": 130,
            "df": 140,
            "sa": 30,
            "sd": 90,
            "sp": 40
        },
        "abilities": [
            "Raging Boxer",
            "Rock Head",
            "Loose Rocks"
        ],
        "innates": [
            "Raw Wood",
            "Sturdy",
            "Juggernaut"
        ],
        "weightkg": 100,
        "types": [
            "Rock",
            "Fighting"
        ],
        "genderR": 127
    },
    "Arachtres": {
        "id": 1029,
        "bs": {
            "hp": 100,
            "at": 130,
            "df": 80,
            "sa": 60,
            "sd": 80,
            "sp": 100
        },
        "abilities": [
            "Spider Lair",
            "Sniper",
            "Exploit Weakness"
        ],
        "innates": [
            "Terrify",
            "Menacing Situation",
            "Merciless"
        ],
        "weightkg": 470,
        "types": [
            "Bug",
            "Poison"
        ],
        "genderR": 127
    },
    "Flairgrance": {
        "id": 1030,
        "bs": {
            "hp": 121,
            "at": 72,
            "df": 89,
            "sa": 99,
            "sd": 140,
            "sp": 29
        },
        "abilities": [
            "Aroma Veil",
            "Lingering Aroma",
            "Fairy Aura"
        ],
        "innates": [
            "Soothing Aroma",
            "Pixilate",
            "Fragrant Daze"
        ],
        "weightkg": 270,
        "types": [
            "Fairy",
            "Poison"
        ],
        "genderR": 127
    },
    "Arashinne": {
        "id": 1032,
        "bs": {
            "hp": 93,
            "at": 58,
            "df": 57,
            "sa": 128,
            "sd": 107,
            "sp": 111
        },
        "abilities": [
            "Power Spot",
            "Pretty Privilege",
            "Ground Shock"
        ],
        "innates": [
            "Electrocytes",
            "Gluttony",
            "Retriever"
        ],
        "weightkg": 74,
        "types": [
            "Electric",
            "Fairy"
        ],
        "genderR": 127
    },
    "Dreadnaut": {
        "id": 1033,
        "bs": {
            "hp": 100,
            "at": 131,
            "df": 140,
            "sa": 96,
            "sd": 103,
            "sp": 30
        },
        "abilities": [
            "Steelworker",
            "Juggernaut",
            "Stall"
        ],
        "innates": [
            "Metallic",
            "Old Mariner",
            "Soul Eater"
        ],
        "weightkg": 7000,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 2
    },
    "Boarlock": {
        "id": 1034,
        "bs": {
            "hp": 120,
            "at": 65,
            "df": 65,
            "sa": 110,
            "sd": 130,
            "sp": 60
        },
        "abilities": [
            "Fur Coat",
            "Psychic Surge",
            "Fortitude"
        ],
        "innates": [
            "Power Core",
            "Thick Fat",
            "Magic Bounce"
        ],
        "weightkg": 1060,
        "types": [
            "Psychic"
        ],
        "genderR": 127
    },
    "Heliomodo": {
        "id": 1035,
        "bs": {
            "hp": 70,
            "at": 61,
            "df": 52,
            "sa": 134,
            "sd": 94,
            "sp": 120
        },
        "abilities": [
            "Generator",
            "Drought",
            "Electrocytes"
        ],
        "innates": [
            "Solar Power",
            "Dry Skin",
            "Shiny Lightning"
        ],
        "weightkg": 510,
        "types": [
            "Electric",
            "Fire"
        ],
        "genderR": 127
    },
    "Sopranice": {
        "id": 1036,
        "bs": {
            "hp": 75,
            "at": 50,
            "df": 75,
            "sa": 125,
            "sd": 125,
            "sp": 90
        },
        "abilities": [
            "Beautiful Music",
            "Dancer",
            "Psychic Surge"
        ],
        "innates": [
            "Resonance",
            "Snow Song",
            "Amplifier"
        ],
        "weightkg": 0,
        "types": [
            "Ice",
            "Psychic"
        ],
        "genderR": 254
    },
    "Beefender": {
        "id": 1037,
        "bs": {
            "hp": 60,
            "at": 124,
            "df": 60,
            "sa": 78,
            "sd": 60,
            "sp": 112
        },
        "abilities": [
            "Beast Boost",
            "Aerodynamics",
            "Tag"
        ],
        "innates": [
            "Pressure",
            "Mighty Horn",
            "Anger Point"
        ],
        "weightkg": 1000,
        "types": [
            "Bug",
            "Flying"
        ],
        "genderR": 0
    },
    "Salazarus": {
        "id": 1038,
        "bs": {
            "hp": 85,
            "at": 104,
            "df": 85,
            "sa": 36,
            "sd": 85,
            "sp": 85
        },
        "abilities": [
            "King's Wrath",
            "Big Pecks",
            "Hustle"
        ],
        "innates": [
            "Corrosion",
            "Half Drake",
            "Moxie"
        ],
        "weightkg": 489,
        "types": [
            "Poison",
            "Fire"
        ],
        "genderR": 0
    },
    "Gooschase": {
        "id": 1040,
        "bs": {
            "hp": 98,
            "at": 120,
            "df": 80,
            "sa": 55,
            "sd": 100,
            "sp": 55
        },
        "abilities": [
            "Restraining Order",
            "Intimidate",
            "Scare"
        ],
        "innates": [
            "Overwatch",
            "Tough Claws",
            "Subdue"
        ],
        "weightkg": 460,
        "types": [
            "Normal"
        ],
        "genderR": 127
    },
    "Lepastry": {
        "id": 1039,
        "bs": {
            "hp": 112,
            "at": 82,
            "df": 99,
            "sa": 96,
            "sd": 96,
            "sp": 65
        },
        "abilities": [
            "Unburden",
            "Sugar Rush",
            "Pastel Veil"
        ],
        "innates": [
            "Gooey",
            "Super Slammer",
            "Readied Action"
        ],
        "weightkg": 400,
        "types": [
            "Fairy",
            "Fighting"
        ],
        "genderR": 127
    },
    "Tortemple": {
        "id": 1042,
        "bs": {
            "hp": 90,
            "at": 100,
            "df": 160,
            "sa": 110,
            "sd": 70,
            "sp": 20
        },
        "abilities": [
            "Stamina",
            "White Smoke",
            "Mountaineer"
        ],
        "innates": [
            "Drought",
            "Shell Armor",
            "Hot Coals"
        ],
        "weightkg": 0,
        "types": [
            "Fire"
        ],
        "genderR": 127
    },
    "Brontonana": {
        "id": 1043,
        "bs": {
            "hp": 123,
            "at": 88,
            "df": 82,
            "sa": 123,
            "sd": 84,
            "sp": 100
        },
        "abilities": [
            "Ripen",
            "Grass Pelt",
            "Dragon's Maw"
        ],
        "innates": [
            "Big Leaves",
            "Immunity",
            "Seed Sower"
        ],
        "weightkg": 2810,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127
    },
    "Dredwood": {
        "id": 1044,
        "bs": {
            "hp": 111,
            "at": 130,
            "df": 106,
            "sa": 85,
            "sd": 92,
            "sp": 76
        },
        "abilities": [
            "Tough Claws",
            "Higher Rank",
            "Grassy Surge"
        ],
        "innates": [
            "Raw Wood",
            "Vengeful Spirit",
            "Monster Mash"
        ],
        "weightkg": 5000,
        "types": [
            "Ghost",
            "Grass"
        ],
        "genderR": 127
    },
    "Corm": {
        "id": 1045,
        "bs": {
            "hp": 50,
            "at": 45,
            "df": 55,
            "sa": 50,
            "sd": 65,
            "sp": 40
        },
        "abilities": [
            "Grass Pelt",
            "Chlorophyll",
            "Overcoat"
        ],
        "innates": [
            "Self Sufficient",
            "Harvest",
            "Seed Sower"
        ],
        "weightkg": 38,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Cormoth": {
        "id": 1046,
        "bs": {
            "hp": 95,
            "at": 50,
            "df": 100,
            "sa": 90,
            "sd": 100,
            "sp": 65
        },
        "abilities": [
            "Grass Pelt",
            "Chlorophyll",
            "Overcoat"
        ],
        "innates": [
            "Self Sufficient",
            "Harvest",
            "Seed Sower"
        ],
        "weightkg": 0,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Popcorm": {
        "id": 1047,
        "bs": {
            "hp": 95,
            "at": 110,
            "df": 90,
            "sa": 50,
            "sd": 90,
            "sp": 65
        },
        "abilities": [
            "Unburden",
            "Solar Power",
            "Puffy"
        ],
        "innates": [
            "Aerodynamics",
            "Levitate",
            "Skill Link"
        ],
        "weightkg": 0,
        "types": [
            "Grass",
            "Fire"
        ],
        "genderR": 127
    },
    "Cormoth Mega": {
        "id": 1046,
        "bs": {
            "hp": 95,
            "at": 70,
            "df": 135,
            "sa": 100,
            "sd": 135,
            "sp": 65
        },
        "abilities": [
            "Grass Pelt",
            "Butter Up",
            "Overcoat"
        ],
        "innates": [
            "Self Sufficient",
            "Big Leaves",
            "Seed Sower"
        ],
        "weightkg": 0,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Popcorm Mega": {
        "id": 1047,
        "bs": {
            "hp": 95,
            "at": 120,
            "df": 60,
            "sa": 110,
            "sd": 100,
            "sp": 115
        },
        "abilities": [
            "Butter Up",
            "Solar Power",
            "Technician"
        ],
        "innates": [
            "Puffy",
            "Skill Link",
            "Levitate"
        ],
        "weightkg": 0,
        "types": [
            "Grass",
            "Fire"
        ],
        "genderR": 127
    },
    "Blizzard Maw": {
        "id": 1048,
        "bs": {
            "hp": 111,
            "at": 117,
            "df": 101,
            "sa": 73,
            "sd": 103,
            "sp": 65
        },
        "abilities": [
            "Freezing Point",
            "Growing Tooth",
            "Cryo Proficiency"
        ],
        "innates": [
            "Protosynthesis",
            "Permafrost",
            "Primal Maw"
        ],
        "weightkg": 0,
        "types": [
            "Ice",
            "Dark"
        ],
        "genderR": 2
    },
    "Lumber Sloth": {
        "id": 1049,
        "bs": {
            "hp": 109,
            "at": 135,
            "df": 91,
            "sa": 85,
            "sd": 89,
            "sp": 61
        },
        "abilities": [
            "Overcoat",
            "Forest Rage",
            "Flash Fire"
        ],
        "innates": [
            "Protosynthesis",
            "Tough Claws",
            "Flammable Coat"
        ],
        "weightkg": 0,
        "types": [
            "Fire",
            "Grass"
        ],
        "genderR": 2
    },
    "Lumbering Sloth Engulfed": {
        "id": 1049,
        "bs": {
            "hp": 109,
            "at": 135,
            "df": 65,
            "sa": 85,
            "sd": 65,
            "sp": 111
        },
        "abilities": [
            "Hyper Aggressive",
            "Forest Rage",
            "Volcano Rage"
        ],
        "innates": [
            "Protosynthesis",
            "Tough Claws",
            "Pyromancy"
        ],
        "weightkg": 0,
        "types": [
            "Fire",
            "Grass"
        ],
        "genderR": 2
    },
    "Iron Carapace": {
        "id": 1050,
        "bs": {
            "hp": 92,
            "at": 64,
            "df": 98,
            "sa": 132,
            "sd": 70,
            "sp": 114
        },
        "abilities": [
            "Coil Up",
            "Speed Force",
            "Short Circuit"
        ],
        "innates": [
            "Quark Drive",
            "Turboblaze",
            "Megabite"
        ],
        "weightkg": 590,
        "types": [
            "Electric",
            "Steel"
        ],
        "genderR": 2
    },
    "Magnemous": {
        "id": 1051,
        "bs": {
            "hp": 80,
            "at": 120,
            "df": 125,
            "sa": 70,
            "sd": 60,
            "sp": 125
        },
        "abilities": [
            "Violent Rush",
            "Pyroclastic Flow",
            "Shell Armor"
        ],
        "innates": [
            "Grip Pincer",
            "Exploit Weakness",
            "Venoblaze Pincers"
        ],
        "weightkg": 0,
        "types": [
            "Poison",
            "Fire"
        ],
        "genderR": 127
    },
    "Kaiosea": {
        "id": 1052,
        "bs": {
            "hp": 90,
            "at": 122,
            "df": 70,
            "sa": 65,
            "sd": 110,
            "sp": 108
        },
        "abilities": [
            "Lightning Rod",
            "Multiscale",
            "Hydrate"
        ],
        "innates": [
            "Mighty Horn",
            "Water Veil",
            "Supreme Overlord"
        ],
        "weightkg": 920,
        "types": [
            "Water",
            "Flying"
        ],
        "genderR": 127
    },
    "Slyduck": {
        "id": 1053,
        "bs": {
            "hp": 80,
            "at": 156,
            "df": 55,
            "sa": 96,
            "sd": 55,
            "sp": 136
        },
        "abilities": [
            "Fearmonger",
            "Fatal Precision",
            "Ambush"
        ],
        "innates": [
            "From the Shadows",
            "Malicious",
            "Dark Aura"
        ],
        "weightkg": 0,
        "types": [
            "Dark"
        ],
        "genderR": 127
    },
    "Shyduck": {
        "id": 1054,
        "bs": {
            "hp": 90,
            "at": 86,
            "df": 86,
            "sa": 86,
            "sd": 86,
            "sp": 86
        },
        "abilities": [
            "Anger Point",
            "Low Blow",
            "Soul Linker"
        ],
        "innates": [
            "Fur Coat",
            "Analytic",
            "Dark Aura"
        ],
        "weightkg": 0,
        "types": [
            "Dark"
        ],
        "genderR": 127
    },
    "Marbeep": {
        "id": 1055,
        "bs": {
            "hp": 70,
            "at": 40,
            "df": 45,
            "sa": 65,
            "sd": 45,
            "sp": 30
        },
        "abilities": [
            "Honey Gather",
            "Gooey",
            "Compound Eyes"
        ],
        "innates": [
            "Levitate",
            "Fluffy",
            "Run Away"
        ],
        "weightkg": 23,
        "types": [
            "Bug"
        ],
        "genderR": 127
    },
    "Fluffbee": {
        "id": 1056,
        "bs": {
            "hp": 85,
            "at": 55,
            "df": 60,
            "sa": 80,
            "sd": 60,
            "sp": 40
        },
        "abilities": [
            "Honey Gather",
            "Gooey",
            "Compound Eyes"
        ],
        "innates": [
            "Levitate",
            "Fluffy",
            "Run Away"
        ],
        "weightkg": 90,
        "types": [
            "Bug"
        ],
        "genderR": 127
    },
    "Amphybuzz": {
        "id": 1057,
        "bs": {
            "hp": 110,
            "at": 75,
            "df": 90,
            "sa": 115,
            "sd": 90,
            "sp": 50
        },
        "abilities": [
            "Honey Gather",
            "Gooey",
            "Compound Eyes"
        ],
        "innates": [
            "Levitate",
            "Fluffy",
            "Giant Wings"
        ],
        "weightkg": 387,
        "types": [
            "Bug",
            "Fairy"
        ],
        "genderR": 127
    },
    "Amphybuzz Mega": {
        "id": 1057,
        "bs": {
            "hp": 110,
            "at": 95,
            "df": 105,
            "sa": 155,
            "sd": 110,
            "sp": 55
        },
        "abilities": [
            "Queen's Mourning",
            "Queenly Majesty",
            "Mold Breaker"
        ],
        "innates": [
            "Imposing Wings",
            "Fluffy",
            "Aerodynamics"
        ],
        "weightkg": 387,
        "types": [
            "Bug",
            "Fairy"
        ],
        "genderR": 127
    },
    "Bariong": {
        "id": 1058,
        "bs": {
            "hp": 100,
            "at": 100,
            "df": 85,
            "sa": 140,
            "sd": 115,
            "sp": 60
        },
        "abilities": [
            "Multiscale",
            "Clear Body",
            "Dragon's Maw"
        ],
        "innates": [
            "Ice Scales",
            "Ice Cold Hunter",
            "Arcane Force"
        ],
        "weightkg": 0,
        "types": [
            "Ice",
            "Dragon"
        ],
        "genderR": 127
    },
    "Crabruiser": {
        "id": 1059,
        "bs": {
            "hp": 107,
            "at": 145,
            "df": 129,
            "sa": 77,
            "sd": 87,
            "sp": 43
        },
        "abilities": [
            "Denting Blows",
            "Grip Pincer",
            "Soul Crusher"
        ],
        "innates": [
            "Spike Armor",
            "Jackhammer",
            "Battle Armor"
        ],
        "weightkg": 0,
        "types": [
            "Fighting",
            "Dark"
        ],
        "genderR": 127
    },
    "Phanfernal": {
        "id": 1060,
        "bs": {
            "hp": 95,
            "at": 78,
            "df": 142,
            "sa": 135,
            "sd": 85,
            "sp": 65
        },
        "abilities": [
            "Speed Boost",
            "Scare",
            "Soul Eater"
        ],
        "innates": [
            "Phantom",
            "Flash Fire",
            "Monster Mash"
        ],
        "weightkg": 680,
        "types": [
            "Fire",
            "Grass"
        ],
        "genderR": 127
    },
    "Skulberus": {
        "id": 1061,
        "bs": {
            "hp": 100,
            "at": 135,
            "df": 90,
            "sa": 60,
            "sd": 80,
            "sp": 115
        },
        "abilities": [
            "Moxie",
            "Stygian Rush",
            "Strong Jaw"
        ],
        "innates": [
            "Nocturnal",
            "Guard Dog",
            "Shadow Tag"
        ],
        "weightkg": 1650,
        "types": [
            "Dark"
        ],
        "genderR": 127
    },
    "Velozel": {
        "id": 1062,
        "bs": {
            "hp": 95,
            "at": 80,
            "df": 70,
            "sa": 80,
            "sd": 70,
            "sp": 155
        },
        "abilities": [
            "Impulse",
            "Momentum",
            "Air Blower"
        ],
        "innates": [
            "Aerodynamics",
            "Overcoat",
            "Looter"
        ],
        "weightkg": 138,
        "types": [
            "Flying"
        ],
        "genderR": 127
    },
    "Bewarden": {
        "id": 0,
        "bs": {
            "hp": 130,
            "at": 120,
            "df": 70,
            "sa": 100,
            "sd": 60,
            "sp": 70
        },
        "abilities": [
            "No Guard",
            "Serene Grace",
            "Sheer Force"
        ],
        "innates": [
            "Fluffiest",
            "Entrance",
            "Cute Charm"
        ],
        "weightkg": 0,
        "types": [
            "Normal",
            "Fairy"
        ],
        "genderR": 127
    },
    "Bubbleo": {
        "id": 1068,
        "bs": {
            "hp": 72,
            "at": 85,
            "df": 69,
            "sa": 50,
            "sd": 48,
            "sp": 52
        },
        "abilities": [
            "Violent Rush",
            "Accelerate",
            "Scare"
        ],
        "innates": [
            "Predator",
            "Nocturnal",
            "Moxie"
        ],
        "weightkg": 200,
        "types": [
            "Water",
            "Poison"
        ],
        "genderR": 222
    },
    "Hydroar": {
        "id": 1069,
        "bs": {
            "hp": 100,
            "at": 125,
            "df": 85,
            "sa": 60,
            "sd": 60,
            "sp": 87
        },
        "abilities": [
            "Violent Rush",
            "Accelerate",
            "Terrify"
        ],
        "innates": [
            "Predator",
            "Nocturnal",
            "Moxie"
        ],
        "weightkg": 540,
        "types": [
            "Water",
            "Poison"
        ],
        "genderR": 222
    },
    "Hydroar F": {
        "id": 1069,
        "bs": {
            "hp": 100,
            "at": 125,
            "df": 85,
            "sa": 60,
            "sd": 60,
            "sp": 87
        },
        "abilities": [
            "Violent Rush",
            "Accelerate",
            "Terrify"
        ],
        "innates": [
            "Predator",
            "Nocturnal",
            "Moxie"
        ],
        "weightkg": 540,
        "types": [
            "Water",
            "Poison"
        ],
        "genderR": 222
    },
    "Granitun": {
        "id": 0,
        "bs": {
            "hp": 110,
            "at": 100,
            "df": 90,
            "sa": 105,
            "sd": 120,
            "sp": 30
        },
        "abilities": [
            "Unaware",
            "Looter",
            "Friend Guard"
        ],
        "innates": [
            "Apple Pie",
            "Harvest",
            "Thick Fat"
        ],
        "weightkg": 0,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127
    },
    "Fujiflap": {
        "id": 0,
        "bs": {
            "hp": 80,
            "at": 125,
            "df": 85,
            "sa": 85,
            "sd": 60,
            "sp": 120
        },
        "abilities": [
            "Hustle",
            "Aerodynamics",
            "Air Blower"
        ],
        "innates": [
            "Aerialist",
            "Overwhelm",
            "Corrosion"
        ],
        "weightkg": 0,
        "types": [
            "Grass",
            "Dragon"
        ],
        "genderR": 127
    },
    "Knaiver": {
        "id": 1071,
        "bs": {
            "hp": 50,
            "at": 80,
            "df": 60,
            "sa": 45,
            "sd": 60,
            "sp": 75
        },
        "abilities": [
            "Pollinate",
            "Hyper Cutter",
            "Intimidate"
        ],
        "innates": [
            "Levitate",
            "Swarm",
            "Technician"
        ],
        "weightkg": 40,
        "types": [
            "Bug"
        ],
        "genderR": 127
    },
    "Scizor": {
        "id": 212,
        "bs": {
            "hp": 70,
            "at": 130,
            "df": 100,
            "sa": 55,
            "sd": 80,
            "sp": 65
        },
        "abilities": [
            "Light Metal",
            "Grip Pincer",
            "Intimidate"
        ],
        "innates": [
            "Pollinate",
            "Hyper Cutter",
            "Technician"
        ],
        "weightkg": 1180,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Scizor Mega"
        ]
    },
    "Scizor Mega": {
        "id": 212,
        "bs": {
            "hp": 70,
            "at": 150,
            "df": 140,
            "sa": 65,
            "sd": 100,
            "sp": 75
        },
        "abilities": [
            "Sniper",
            "Shed Skin",
            "Pollinate"
        ],
        "innates": [
            "Tough Claws",
            "Hyper Cutter",
            "Technician"
        ],
        "weightkg": 1180,
        "types": [
            "Bug",
            "Steel"
        ],
        "genderR": 127,
        "otherFormes": [
            "Scizor"
        ]
    },
    "Sagaracas": {
        "id": 1064,
        "bs": {
            "hp": 90,
            "at": 66,
            "df": 92,
            "sa": 106,
            "sd": 92,
            "sp": 75
        },
        "abilities": [
            "Chlorophyll",
            "Self Sufficient",
            "Reservoir"
        ],
        "innates": [
            "Sharp Edges",
            "Super Slammer",
            "Huge Power"
        ],
        "weightkg": 60,
        "types": [
            "Grass"
        ],
        "genderR": 127
    },
    "Lucineon": {
        "id": 1072,
        "bs": {
            "hp": 83,
            "at": 69,
            "df": 76,
            "sa": 127,
            "sd": 106,
            "sp": 106
        },
        "abilities": [
            "Protean",
            "Storm Drain",
            "Dazzling"
        ],
        "innates": [
            "Imposing Wings",
            "Serene Grace",
            "Illuminate"
        ],
        "weightkg": 450,
        "types": [
            "Water",
            "Fairy"
        ],
        "genderR": 127
    },
    "Crawdauntles": {
        "id": 0,
        "bs": {
            "hp": 86,
            "at": 160,
            "df": 105,
            "sa": 75,
            "sd": 77,
            "sp": 65
        },
        "abilities": [
            "Swift Swim",
            "Dauntless Shield",
            "Adaptability"
        ],
        "innates": [
            "Hyper Cutter",
            "Shell Armor",
            "Grip Pincer"
        ],
        "weightkg": 0,
        "types": [
            "Water",
            "Dark"
        ],
        "genderR": 127
    },
    "Iron Voca": {
        "id": 1070,
        "bs": {
            "hp": 94,
            "at": 56,
            "df": 120,
            "sa": 112,
            "sd": 70,
            "sp": 118
        },
        "abilities": [
            "Punk Rock",
            "Pixie Power",
            "Tangling Hair"
        ],
        "innates": [
            "Quark Drive",
            "Fairy Tale",
            "Amplifier"
        ],
        "weightkg": 226,
        "types": [
            "Steel",
            "Normal"
        ],
        "genderR": 2
    },
    "Frostula": {
        "id": 1073,
        "bs": {
            "hp": 85,
            "at": 120,
            "df": 132,
            "sa": 50,
            "sd": 58,
            "sp": 112
        },
        "abilities": [
            "Ice Body",
            "Cryo Architect",
            "Spider Lair"
        ],
        "innates": [
            "Deep Freeze",
            "Rough Skin",
            "Snow Warning"
        ],
        "weightkg": 1800,
        "types": [
            "Ice",
            "Bug"
        ],
        "genderR": 127
    },
    "Goodra Mega": {
        "id": 706,
        "bs": {
            "hp": 90,
            "at": 125,
            "df": 85,
            "sa": 140,
            "sd": 170,
            "sp": 90
        },
        "abilities": [
            "Poison Absorb",
            "Overcoat",
            "Drizzle"
        ],
        "innates": [
            "Acidic Slime",
            "Sap Sipper",
            "Shell Armor"
        ],
        "weightkg": 1505,
        "types": [
            "Dragon",
            "Water"
        ],
        "genderR": 127
    },
    "Slowbro Mega Galarian": {
        "id": 80,
        "bs": {
            "hp": 95,
            "at": 150,
            "df": 110,
            "sa": 150,
            "sd": 70,
            "sp": 15
        },
        "abilities": [
            "Unaware",
            "Artillery",
            "Regenerator"
        ],
        "innates": [
            "Gunman",
            "Quick Draw",
            "Stall"
        ],
        "weightkg": 785,
        "types": [
            "Poison",
            "Psychic"
        ],
        "genderR": 127
    },
    "Slowking Mega Galarian": {
        "id": 199,
        "bs": {
            "hp": 95,
            "at": 70,
            "df": 150,
            "sa": 135,
            "sd": 110,
            "sp": 30
        },
        "abilities": [
            "Poison Absorb",
            "Analytic",
            "Unaware"
        ],
        "innates": [
            "Corrupted Mind",
            "Shell Armor",
            "Permanence"
        ],
        "weightkg": 795,
        "types": [
            "Poison",
            "Psychic"
        ],
        "genderR": 127
    },
    "Iron Exo": {
        "id": 1063,
        "bs": {
            "hp": 70,
            "at": 75,
            "df": 90,
            "sa": 140,
            "sd": 140,
            "sp": 75
        },
        "abilities": [
            "Teravolt",
            "Dual Wield",
            "Volt Rush"
        ],
        "innates": [
            "Artillery",
            "Exploit Weakness",
            "Quark Drive"
        ],
        "weightkg": 970,
        "types": [
            "Ghost",
            "Electric"
        ],
        "genderR": 2
    },
    "Dududunsparce": {
        "id": 1065,
        "bs": {
            "hp": 145,
            "at": 115,
            "df": 80,
            "sa": 120,
            "sd": 85,
            "sp": 55
        },
        "abilities": [
            "Mighty Horn",
            "Tipping Point",
            "Unaware"
        ],
        "innates": [
            "Super Luck",
            "Let's Roll",
            "Serene Grace"
        ],
        "weightkg": 7700,
        "types": [
            "Normal",
            "Ground"
        ],
        "genderR": 127
    }
};
var SS = (0, util_1.extend)(true, {}, SM, SS_PATCH, REDUX_PATCH);
var PLA_PATCH = {};
var SV_PATCH = {};
var SV = (0, util_1.extend)(true, {}, SS, SV_PATCH, PLA_PATCH);
exports.SPECIES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Species = (function () {
    function Species(gen) {
        this.gen = gen;
    }
    Species.prototype.get = function (id) {
        return SPECIES_BY_ID[this.gen][id];
    };
    Species.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = SPECIES_BY_ID[this.gen];
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3, 3];
                    id = _c;
                    return [4, this.get(id)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Species;
}());
exports.Species = Species;
var Specie = (function () {
    function Specie(name, data) {
        this.kind = 'Species';
        this.id = (0, util_1.toID)(name);
        this.name = name;
        var baseStats = {};
        baseStats.hp = data.bs.hp;
        baseStats.atk = data.bs.at;
        baseStats.def = data.bs.df;
        baseStats.spa = gen >= 2 ? data.bs.sa : data.bs.sl;
        baseStats.spd = gen >= 2 ? data.bs.sd : data.bs.sl;
        baseStats.spe = data.bs.sp;
        this.baseStats = baseStats;
        if (data.otherFormes) {
            this.otherFormes = data.otherFormes;
            if (gen >= 9 && !['toxtricity', 'urshifu'].includes(this.id)) {
                this.otherFormes = this.otherFormes.filter(function (f) { return !f.endsWith('-Gmax'); });
                if (!this.otherFormes.length)
                    this.otherFormes = undefined;
                if (this.otherFormes)
                    this.otherFormes = __spreadArray([], __read(new Set(this.otherFormes)), false);
            }
        }
        (0, util_1.assignWithout)(this, data, Specie.EXCLUDE);
    }
    Specie.EXCLUDE = new Set(['bs', 'otherFormes']);
    return Specie;
}());
var SPECIES_BY_ID = [];
var gen = 0;
try {
    for (var SPECIES_1 = __values(exports.SPECIES), SPECIES_1_1 = SPECIES_1.next(); !SPECIES_1_1.done; SPECIES_1_1 = SPECIES_1.next()) {
        var species = SPECIES_1_1.value;
        var map = {};
        for (var specie in species) {
            if (gen >= 2 && species[specie].bs.sl)
                delete species[specie].bs.sl;
            var m = new Specie(specie, species[specie]);
            map[(0, util_1.toID)(m.name)] = m;
        }
        SPECIES_BY_ID.push(map);
        gen++;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (SPECIES_1_1 && !SPECIES_1_1.done && (_a = SPECIES_1["return"])) _a.call(SPECIES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=species.js.map