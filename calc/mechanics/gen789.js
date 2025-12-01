"use strict";
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
exports.__esModule = true;

var util_1 = require("../util");
var items_1 = require("../items");
var move_1 = require("../move");
var result_1 = require("../result");
var util_2 = require("./util");
function calculateSMSSSV(gen, attacker, defender, move, field, defenderFriend) {
    var e_1, _a;
    var _b, _c, _d, _e, _f, _g, _h, _j;
    if (defender.hasAbility('Big Leaves')) {
        (_b = defender.innates) === null || _b === void 0 ? void 0 : _b.push('Chloroplast', 'Chlorophyll', 'Harvest', 'Leaf Guard', 'Solar Power');
    }
    if (attacker.hasAbility('Big Leaves')) {
        (_c = attacker.innates) === null || _c === void 0 ? void 0 : _c.push('Chloroplast', 'Chlorophyll', 'Harvest', 'Leaf Guard', 'Solar Power');
    }
    if (defender.hasAbility('Prismatic Fur')) {
        (_d = defender.innates) === null || _d === void 0 ? void 0 : _d.push('Color Change', 'Protean', 'Fur Coat', 'Ice Scales');
    }
    if (attacker.hasAbility('Prismatic Fur')) {
        (_e = attacker.innates) === null || _e === void 0 ? void 0 : _e.push('Color Change', 'Protean', 'Fur Coat', 'Ice Scales');
    }
    if (attacker.hasAbility('Iron Barrage')) {
        (_f = attacker.innates) === null || _f === void 0 ? void 0 : _f.push('Sighting System', 'Mega Launcher');
    }
    if (attacker.hasAbility('Solar Flare')) {
        (_g = attacker.innates) === null || _g === void 0 ? void 0 : _g.push('Chloroplast', 'Immolate');
    }
    (0, util_2.checkAirLock)(attacker, field);
    (0, util_2.checkAirLock)(defender, field);
    if (defenderFriend)
        (0, util_2.checkAirLock)(defenderFriend, field);
    (0, util_2.checkClueless)(attacker, field);
    (0, util_2.checkClueless)(defender, field);
    if (defenderFriend)
        (0, util_2.checkClueless)(defenderFriend, field);
    (0, util_2.checkForecast)(attacker, field.weather);
    (0, util_2.checkForecast)(defender, field.weather);
    (0, util_2.checkItem)(attacker, field.isMagicRoom);
    (0, util_2.checkItem)(defender, field.isMagicRoom);
    (0, util_2.checkWonderRoom)(attacker, field.isWonderRoom);
    (0, util_2.checkWonderRoom)(defender, field.isWonderRoom);
    (0, util_2.checkSeedBoost)(attacker, field);
    (0, util_2.checkSeedBoost)(defender, field);
    (0, util_2.checkDauntlessShield)(attacker, gen);
    (0, util_2.checkDauntlessShield)(defender, gen);
    if (defenderFriend === null || defenderFriend === void 0 ? void 0 : defenderFriend.hasAbility('Friend Guard'))
        field.defenderSide.isFriendGuard = true;
    (0, util_2.checkMalicious)(gen, attacker, defender);
    (0, util_2.checkMalicious)(gen, defender, attacker);
    if (defenderFriend)
        (0, util_2.checkMalicious)(gen, defenderFriend, attacker);
    (0, util_2.checkNoTurningBack)(attacker);
    (0, util_2.checkNoTurningBack)(defender);
    (0, util_2.checkStatRaises)(attacker, field);
    (0, util_2.checkStatRaises)(defender, field);
    (0, util_2.checkBleed)(attacker, defender);
    (0, util_2.checkBleed)(defender, attacker);
    (0, util_2.checkLuckyHalo)(attacker);
    (0, util_2.checkLuckyHalo)(defender);

    (0, util_2.checkMonkeyBusiness)(gen, attacker, defender);
    (0, util_2.checkMonkeyBusiness)(gen, defender, attacker);

    
    (0, util_2.computeFinalStats)(gen, attacker, defender, field, 'def', 'spd', 'spe');
    (0, util_2.checkIntimidate)(gen, attacker, defender);
    (0, util_2.checkIntimidate)(gen, defender, attacker);
    if (defenderFriend)
        (0, util_2.checkIntimidate)(gen, defenderFriend, attacker);
    (0, util_2.checkScare)(gen, attacker, defender);
    (0, util_2.checkScare)(gen, defender, attacker);
    if (defenderFriend)
        (0, util_2.checkScare)(gen, defenderFriend, attacker);

    if (defenderFriend)
        (0, util_2.checkMonkeyBusiness)(gen, defenderFriend, attacker);
    (0, util_2.checkCounterBuffingAbility)(attacker);
    (0, util_2.checkCounterBuffingAbility)(attacker);
    (0, util_2.checkDownload)(attacker, defender, field.isWonderRoom);
    (0, util_2.checkDownload)(defender, attacker, field.isWonderRoom);
    (0, util_2.checkIntrepidSword)(attacker, gen);
    (0, util_2.checkIntrepidSword)(defender, gen);
    (0, util_2.checkBerserkDNA)(attacker, gen);
    (0, util_2.checkBerserkDNA)(defender, gen);

    (0, util_2.checkWeatherBoostAbil)(attacker, field);
    (0, util_2.checkWeatherBoostAbil)(defender, field);


    (0, util_2.checkBleed)(attacker, defender);
    (0, util_2.checkBleed)(defender, attacker);
    (0, util_2.checkLuckyHalo)(attacker);
    (0, util_2.checkLuckyHalo)(defender);
    (0, util_2.computeFinalStats)(gen, attacker, defender, field, 'atk', 'spa');
    if (defenderFriend === null || defenderFriend === void 0 ? void 0 : defenderFriend.hasAbility('CuriusMedicn'))
        defender.stats = defender.rawStats;
    if (defenderFriend === null || defenderFriend === void 0 ? void 0 : defenderFriend.hasAbility('Steely Spirit'))
        (_h = defender.innates) === null || _h === void 0 ? void 0 : _h.push('Steely Spirit');
    if (defenderFriend === null || defenderFriend === void 0 ? void 0 : defenderFriend.hasAbility('Weather Control'))
        (_j = defender.innates) === null || _j === void 0 ? void 0 : _j.push('Weather Control');
    (0, util_2.checkInfiltrator)(attacker, field.defenderSide);
    (0, util_2.checkInfiltrator)(defender, field.attackerSide);
    if (attacker.hasAbility('Deadeye') ||
        (attacker.hasAbility('Roundhouse') && move.flags.kick) ||
        (attacker.hasAbility('Gifted Mind') && move.category == 'Status') ||
        (attacker.hasAbility('Sweeping Edge', 'Blademaster') && move.flags.slicing)) {
        move.acc = 100;
    }

    if (typeof move.flags === "undefined") {
        move.flags = {};
    }

    if (attacker.hasAbility('Brawling Wyvern') && move.hasType('Dragon')) {
        move.flags.punch = 1;
    }

    if (attacker.hasAbility('Reverberate') && move.hasType('Normal')) {
        move.flags.sound = 1;
    }

    if (attacker.hasAbility('Mixed Martial Arts') && move.hasType('Normal')) {
        move.flags.punch = 1;
        move.flags.kick = 1;
    }

    if (attacker.hasAbility('Taekkyeon')) {
        move.flags.dance = 1;
    }
    if (attacker.hasAbility('Festivities')) {
        if (move.flags.dance) {
            move.flags.sound = 1;
        }
        if (move.flags.sound) {
            move.flags.dance = 1;
        }
    }
    if (attacker.hasAbility('JunshiSanda')) {
        if (move.flags.kick || move.flags.punch) {
            move.flags.punch = 1;
            move.flags.kick = 1;
        }
    }
    if ((attacker.hasItem('Punching Glove') && move.flags.punch) || (attacker.hasItem('Protective Pads'))) {
        move.flags.contact = 0;
    }
    if (move.acc) {
        if (attacker.hasAbility('Compound Eyes', 'Illuminate', 'Keen Eye', 'Victory Star')) {
            move.acc = Math.round(move.acc * 1.2);
        }
        if (attacker.hasAbility('Hustle')) {
            move.acc = Math.round(move.acc * 0.9);
        }
        if (attacker.hasAbility('Radiance')) {
            move.acc = Math.round(move.acc * 1.2);
        }
    }
    if (attacker.hasAbility('Inner Focus', 'Unlocked Potential', 'Way of Precision') && move.name === 'Focus Blast') {
        move.acc = 100;
    }
    if (defender.hasAbility('Wonder Skin', 'Wonder Scale') && move.category == 'Status') {
        move.acc = 50;
    }
    if (attacker.hasAbility('Infernal Rage') && move.hasType('Fire')) {
        move.recoil = [1, 200];
    }
    var desc = {
        attackerName: attacker.name,
        attackerTera: attacker.teraType,
        moveName: move.name,
        defenderName: defender.name,
        defenderTera: defender.teraType,
        isDefenderDynamaxed: defender.isDynamaxed,
        isWonderRoom: field.isWonderRoom
    };
    var result = new result_1.Result(gen, attacker, defender, move, field, 0, desc);
    var breaksProtect = move.breaksProtect || move.isZ || attacker.isDynamaxed ||
        (attacker.hasAbility('Unseen Fist', 'Final Blow') && move.flags.contact) || attacker.hasAbility('Demolitionist');
    if (field.defenderSide.isProtected && !breaksProtect) {
        desc.isProtected = true;
        return result;
    }
    if (move.name === 'Pain Split') {
        var average = Math.floor((attacker.curHP() + defender.curHP()) / 2);
        var damage_1 = defender.curHP() - average;
        result.damage = damage_1;
        return result;
    }

    var defenderIgnoresAbility = !!defender.hasAbility('Fort Knox', 'Wonder Skin', 'Wonder Scale', 'Staineless Steel', 'Prim and Proper');

    var attackerIgnoresAbility = !!attacker.hasAbility('Mold Breaker', 'Teravolt', 'Turboblaze', 'Blind Rage');
    var moveIgnoresAbility = move.named('G-Max Drum Solo', 'G-Max Fire Ball', 'G-Max Hydrosnipe', 'Light That Burns the Sky', 'Menacing Moonraze Maelstrom', 'Moongeist Beam', 'Photon Geyser', 'Searing Sunraze Smash', 'Sunsteel Strike', 'Shell Side Arm', 'Horn Drill', 'Wring Out', 'Rider Kick');
    if (defenderIgnoresAbility && attackerIgnoresAbility) {
        defenderIgnoresAbility = false;
        attackerIgnoresAbility = false;
    }
    if (!defenderIgnoresAbility && !defender.hasAbility('Poison Heal') &&
        (attackerIgnoresAbility || moveIgnoresAbility)) {
        if (attackerIgnoresAbility) {
            desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
        }
        if (defender.hasItem('Ability Shield')) {
            desc.defenderItem = defender.item;
        }
        else {
            defender.removeAllAbilities();
        }
    }
    if (defender.hasAbility('Neutralizing Gas') || attacker.hasAbility('Neutralizing Gas')) {
        defender.removeAllAbilities();
        attacker.removeAllAbilities();
    }
    if (defender.hasAbility('Hemotoxin') && attacker.hasStatus('psn', 'tox')) {
        attacker.removeAllAbilities();
    } else if (attacker.hasAbility('Hemotoxin') && defender.hasStatus('psn', 'tox')) {
        defender.removeAllAbilities();
    }

    if (defenderIgnoresAbility) {
        // TODO: remove all offensive abilities except 
    }

    var isCritical = !defender.hasAbility('Battle Armor', 'Shell Armor', 'Bad Luck', 'Scarecrow') &&
        (move.isCrit || (attacker.hasAbility('Merciless', 'Depravity', 'Relentless') && (defender.hasStatus('psn', 'tox', 'par', 'bld') ||
            defender.boosts.spe < 0)) || (attacker.hasAbility('Heaven Asunder') && move.named("Spacial Rend"))) &&
        move.timesUsed === 1;
    var type = move.type;
    if (move.named('Weather Ball')) {
        var holdingUmbrella = attacker.hasItem('Utility Umbrella');
        type =
            field.hasWeather('Sun', 'Harsh Sunshine') && !holdingUmbrella ? 'Fire'
                : field.hasWeather('Rain', 'Heavy Rain') && !holdingUmbrella ? 'Water'
                    : field.hasWeather('Sand') ? 'Rock'
                        : field.hasWeather('Hail', 'Snow') ? 'Ice'
                            : 'Normal';
        desc.weather = field.weather;
        desc.moveType = defender.hasAbility('Weather Control') ? 'Normal' : type;
    }
    else if (move.named('Judgment') && attacker.item && attacker.item.includes('Plate')) {
        type = (0, items_1.getItemBoostType)(attacker.item);
    }
    else if (move.named('Techno Blast') && attacker.item && attacker.item.includes('Drive')) {
        type = (0, items_1.getTechnoBlast)(attacker.item);
    }
    else if (move.named('Multi Attack') && attacker.item && attacker.item.includes('Memory')) {
        type = (0, items_1.getMultiAttack)(attacker.item);
    }
    else if (move.named('Natural Gift') && attacker.item && attacker.item.includes('Berry')) {
        var gift = (0, items_1.getNaturalGift)(gen, attacker.item);
        type = gift.t;
        desc.moveType = type;
        desc.attackerItem = attacker.item;
    }
    else if (move.named('Nature Power') ||
        (move.named('Terrain Pulse') && (0, util_2.isGrounded)(attacker, field))) {
        type =
            field.hasTerrain('Electric') ? 'Electric'
                : field.hasTerrain('Grassy') ? 'Grass'
                    : field.hasTerrain('Misty') ? 'Fairy'
                        : field.hasTerrain('Psychic') ? 'Psychic'
                            : 'Normal';
        desc.terrain = field.terrain;
        desc.moveType = type;
    }
    else if (move.named('Revelation Dance')) {
        if (attacker.teraType) {
            type = attacker.teraType;
        }
        else {
            type = attacker.types[0];
        }
    }
    else if (move.named('Raging Bull')) {
        type = attacker.types[0];
    }

    const multiTypeMoves = {
        "Muddy Water": ["Ground", "Water"],
        "Flying Press": ["Fighting", "Flying"],
        "Aura Wheel": ["Electric", "Dark"],
        "Scorched Earth": ["Fire", "Ground"],
    }

    if (multiTypeMoves[move.name]) {
        var t1 = multiTypeMoves[move.name][0]
        var t2 = multiTypeMoves[move.name][1]
        
        var t1Multiplier = typeChart[t1][defender.types[0]]
        var t2Multiplier = typeChart[t2][defender.types[0]]
        
        if (defender.types[1]) {
            t1Multiplier = t1Multiplier * typeChart[t1][defender.types[1]]
            t2Multiplier = t2Multiplier * typeChart[t2][defender.types[1]]
        } 

        if (t2Multiplier > t1Multiplier) {
            console.log(`type changed to ${t2}`)
            type = t2
        }
    }
    var hasAteAbilityTypeChange = false;
    var isAerilate = false;
    var isPixilate = false;
    var isDraconicMight = false;
    var isStainlessSteel = false
    var isDeviate = false
    var isRefrigerate = false;
    var isGalvanize = false;
    var isLiquidVoice = false;
    var isNormalize = false;
    var isPollinate = false;
    var isIntoxicate = false;
    var isHydrate = false;
    var isTectonize = false;
    var isFightingSpirit = false;
    var isCrystallize = false;
    var isSuperconductor = false;
    var isImmolate = false;
    var isSpectralize = false;
    var isDraconize = false;
    var isMineralize = false;
    var isEmanate = false;
    var isFertalize = false;
    var isBanshee = false;
    var isSnowSong = false;
    var isPowerMetal = false;
    var noTypeChange = move.named('Revelation Dance', 'Judgment', 'Nature Power', 'Techno Blast', 'Multi Attack', 'Natural Gift', 'Weather Ball', 'Terrain Pulse', 'Struggle') || (move.named('Tera Blast') && attacker.teraType);
    if (!move.isZ && !noTypeChange) {
        var normal = move.hasType('Normal');
        if ((isAerilate = !!attacker.hasAbility('Aerilate') && normal)) {
            type = 'Flying';
        }
        else if ((isGalvanize = !!attacker.hasAbility('Galvanize') && normal)) {
            type = 'Electric';
        }
        else if ((isLiquidVoice = !!attacker.hasAbility('Liquid Voice') && !!move.flags.sound)) {
            type = 'Water';
        }
        else if ((isSnowSong = !!attacker.hasAbility('Snow Song') && !!move.flags.sound)) {
            type = 'Ice';
        }
        else if ((isPowerMetal = !!attacker.hasAbility('Power Metal') && !!move.flags.sound)) {
            type = 'Steel';
        }
        else if ((isPixilate = !!attacker.hasAbility('Pixilate', 'Twinkle Toes') && normal)) {
            type = 'Fairy';
        }
        else if ((isDraconicMight = !!attacker.hasAbility('Draconic Might') && normal)) {
            type = 'Dragon';
        }
        else if ((isStainlessSteel= !!attacker.hasAbility('Stainless Steel') && normal)) {
            type = 'Steel';
        }
        else if ((isDeviate = !!attacker.hasAbility('Deviate') && normal)) {
            type = 'Dark';
        }
        else if ((isRefrigerate = !!attacker.hasAbility('Refrigerate') && normal)) {
            type = 'Ice';
        }
        else if ((isNormalize = !!attacker.hasAbility('Normalize'))) {
            type = 'Normal';
        }
        else if ((isPollinate = !!attacker.hasAbility('Pollinate', 'Steel Beetle') && normal)) {
            type = 'Bug';
        }
        else if ((isIntoxicate = !!attacker.hasAbility('Intoxicate', 'Sludgy Mix') && normal)) {
            type = 'Poison';
        }
        else if ((isHydrate = !!attacker.hasAbility('Hydrate') && normal)) {
            type = 'Water';
        }
        else if ((isTectonize = !!attacker.hasAbility('Tectonize') && normal)) {
            type = 'Ground';
        }
        else if ((isFightingSpirit = !!attacker.hasAbility('Fighting Spirit', 'Qigong') && normal)) {
            type = 'Fighting';
        }
        else if ((isCrystallize = !!attacker.hasAbility('Crystallize')) && move.hasType('Rock')) {
            type = 'Ice';
        }
        else if ((isSuperconductor = !!attacker.hasAbility('Superconductor')) && move.hasType('Steel')) {
            type = 'Ice';
        }
        else if ((isImmolate = !!attacker.hasAbility('Immolate') && normal)) {
            type = 'Fire';
        }
        else if ((isSpectralize = !!attacker.hasAbility('Spectralize') && normal)) {
            type = 'Ghost';
        }
        else if ((isDraconize = !!attacker.hasAbility('Draconize') && normal)) {
            type = 'Dragon';
        }
        else if ((isMineralize = !!attacker.hasAbility('Mineralize') && normal)) {
            type = 'Rock';
        }
        else if ((isEmanate = !!attacker.hasAbility('Emanate', 'Enlightened') && normal)) {
            type = 'Psychic';
        }
        else if ((isEmanate = !!attacker.hasAbility('Fertlize') && normal)) {
            type = 'Grass';
        }
        else if ((isBanshee = !!attacker.hasAbility('Banshee')) && normal && !!move.flags.sound) {
            type = 'Ghost';
        }

        if (isGalvanize || isPixilate || isRefrigerate || isAerilate || isNormalize || isPollinate ||
            isIntoxicate || isHydrate || isTectonize || isFightingSpirit || isCrystallize || isSuperconductor || isImmolate ||
            isSpectralize || isDraconize || isMineralize || isEmanate) {
            desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
            hasAteAbilityTypeChange = true;
        }
        else if (isLiquidVoice || isBanshee) {
            desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
        }
    }
    if (attacker.hasAbility('Sand Song') && move.flags.sound) {
        type = 'Ground';
    }
    if (move.named('Tera Blast') && attacker.teraType) {
        type = attacker.teraType;
    }
    move.type = type;
    var additionnalPriority = getPriorityAdditionnal(attacker, move, defender);
    move.priority += additionnalPriority;
    move.priority = Math.min(move.priority, 5);
    if (additionnalPriority)
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    if (attacker.hasAbility('Sighting System')) {
        if (move.acc ? move.acc : 100 < 80) {
            move.priority = -7;
        }
        move.acc = 100;
    }
    var isGhostRevealed = !!attacker.hasAbility('Scrappy', 'Blind Rage') || field.defenderSide.isForesight;
    var isRingTarget = defender.hasItem('Ring Target') && !defender.hasAbility('Klutz');
    var typeEffectiveness = 1;

    const typeGainAbilities = [
        [["Dragonfly", "Draconic Might", "Half Drake"], "Dragon"],
        [['Aquatic', 'Aquatic Dweller'], "Water"],
        [["Staineless Steel", "Metallic"], "Steel"],
        [['Tender Affection', 'Fairy Tale'], 'Fairy'],
        [['Hover'], 'Psychic'],
        [['Turboblaze'], 'Fire'],
        [['Teravolt'], 'Electric'],
        [['Grounded'], 'Ground'],
        [['Ice Age'], 'Ice'],
        [['Phantom'], 'Ghost']
    ]

    for (const typeGain of typeGainAbilities) {
        if (typeGain[0].includes(defender.ability) || typeGain[0].filter(ab => defender.innates.includes(ab)).length > 0 ) {
            defender.types.push(typeGain[1])
        }
        if (typeGain[0].includes(attacker.ability) || typeGain[0].filter(ab => attacker.innates.includes(ab)).length > 0 ) {
            attacker.types.push(typeGain[1])
        }
    }



    try {
        for (var _k = __values(defender.types), _l = _k.next(); !_l.done; _l = _k.next()) {
            var defenderType = _l.value;
            if (!defenderType)
                continue;
            typeEffectiveness *= (0, util_2.getMoveEffectiveness)(gen, move, defenderType, defender, attacker, isGhostRevealed, field.isGravity, isRingTarget);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_l && !_l.done && (_a = _k["return"])) _a.call(_k);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (defender.teraType) {
        typeEffectiveness = (0, util_2.getMoveEffectiveness)(gen, move, defender.teraType, defender, attacker, isGhostRevealed, field.isGravity, isRingTarget);
    }
    if (typeEffectiveness === 0 && move.named('Thousand Arrows')) {
        typeEffectiveness = 1;
    }
    if (typeEffectiveness === 0 && move.hasType('Ground') &&
        defender.hasItem('Iron Ball') && !defender.hasAbility('Klutz')) {
        typeEffectiveness = 1;
    }
    if (move.hasType('Dark') && (defender.hasAbility('Radiance') || (defenderFriend === null || defenderFriend === void 0 ? void 0 : defenderFriend.hasAbility('Radiance')))) {
        typeEffectiveness = 0;
    }
    if (isNormalize || (move.hasType('Psychic') && attacker.hasAbility('Corrupted Mind')) || (move.isCrit && attacker.hasAbility('Overrule'))) {
        typeEffectiveness = Math.max(typeEffectiveness, 1);
    }
    if (attacker.hasAbility('Unown Power') && (move.name.includes("Hidden Power") || move.name.includes("Secret Power"))) {
        typeEffectiveness = Math.min(typeEffectiveness, 2);
    }
    if ((defender.hasAbility('Tera Shell', 'Teraform Zero') && defender.curHP() === defender.maxHP()) || defender.hasAbilityActive('Soothsayer')) {
        typeEffectiveness = Math.max(typeEffectiveness, 0.5);
    }
    move.typeEffectiveness = typeEffectiveness;
    if (typeEffectiveness === 0) {
        return result;
    }

    if (attacker.hasAbility("Fatal Precision") && typeEffectiveness > 1) {
        isCritical = true;
    }
    if ((move.named('Sky Drop') &&
        (defender.hasType('Flying') || defender.weightkg >= 200 || field.isGravity)) ||
        (move.named('Synchronoise') && !defender.hasType(attacker.types[0]) &&
            (!attacker.types[1] || !defender.hasType(attacker.types[1]))) ||
        (move.named('Dream Eater') &&
            (!(defender.hasStatus('slp') || defender.hasAbility('Comatose')))) ||
        (move.named('Steel Roller') && !field.terrain) ||
        (move.named('Poltergeist') && !defender.item)) {
        return result;
    }
    if ((field.hasWeather('Harsh Sunshine') && move.hasType('Water')) ||
        (field.hasWeather('Heavy Rain') && move.hasType('Fire'))) {
        desc.weather = field.weather;
        return result;
    }
    if (field.hasWeather('Strong Winds') && defender.hasType('Flying') &&
        gen.types.get((0, util_1.toID)(move.type)).effectiveness['Flying'] > 1) {
        typeEffectiveness /= 2;
        desc.weather = field.weather;
    }

    if ((defender.hasAbility('Wonder Guard') && typeEffectiveness <= 1) ||
        (move.hasType('Ice') && defender.hasAbility('Ice Dew')) ||
        (move.hasType('Grass') && defender.hasAbility('Sap Sipper')) ||
        (move.hasType('Fire') && defender.hasAbility('Flash Fire', 'Well Baked Body', 'Thermal Exchange', 'Elemental Vortex')) ||
        (move.hasType('Water') && defender.hasAbility('Dry Skin', 'Storm Drain', 'Water Absorb', 'Evaporate', 'Elemental Vortex', 'Reservoir')) ||
        (move.hasType('Poison') && defender.hasAbility('Poison Absorb')) ||
        (move.hasType('Electric') &&
            defender.hasAbility('Lightning Rod', 'Motor Drive', 'Volt Absorb')) ||
        (move.hasType('Ground') &&
            !field.isGravity && !move.named('Thousand Arrows') && !defender.hasItem('Iron Ball') &&
            (defender.hasAbility('Levitate', 'Imposing Wings', 'Dragonfly', 'Aerialist', 'Hover', 'Fey Flight') && !(attacker.hasAbility('Bone Zone') && move.flags.bone))) ||
        (move.flags.bullet && defender.hasAbility('Bulletproof')) ||
        (move.flags.sound && !move.named('Clangorous Soul') && defender.hasAbility('Soundproof', 'Parroting', 'Noise Cancel')) ||
        (move.priority > 0 && defender.hasAbility('Queenly Majesty', 'Dazzling', 'Sand Guard', 'Armor Tail', 'Sun Basking', 'Sepia Lens')) ||
        (move.hasType('Ground') && defender.hasAbility('Earth Eater', 'Desolate Sun')) ||
        (move.flags.weather && defender.hasAbility('Delta Stream' ,'Guardian Coat')) ||
        (move.flags.wind && defender.hasAbility('Wind Rider'))) {
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
        return result;
    }
    if (move.hasType('Ground') && !move.named('Thousand Arrows') &&
        !field.isGravity && defender.hasItem('Air Balloon')) {
        desc.defenderItem = defender.item;
        return result;
    }
    if (move.priority > 0 && field.hasTerrain('Psychic') && (0, util_2.isGrounded)(defender, field)) {
        desc.terrain = field.terrain;
        return result;
    }
    var weightBasedMove = move.named('Heat Crash', 'Heavy Slam', 'Low Kick', 'Grass Knot');
    if (defender.isDynamaxed && weightBasedMove) {
        return result;
    }
    if (defender.hasAbility('Color Change')) {
        defender.types = [(0, util_2.colorChangeTyping)(move.type)];
    }
    desc.HPEVs = "".concat(defender.evs.hp, " HP");
    var fixedDamage = (0, util_2.handleFixedDamageMoves)(attacker, move);
    if (fixedDamage) {
        if (attacker.hasAbility('Parental Bond', 'Hyper Aggressive', 'Multi Headed')) {
            result.damage = [fixedDamage, (0, util_2.pokeRound)(fixedDamage * 0.25)];
            desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
        }
        else {
            result.damage = fixedDamage;
        }
        return result;
    }
    if (move.named('Final Gambit')) {
        result.damage = attacker.curHP();
        return result;
    }
    if (move.named('Guardian of Alola')) {
        var zLostHP = Math.floor((defender.curHP() * 3) / 4);
        if (field.defenderSide.isProtected && attacker.item && attacker.item.includes(' Z')) {
            zLostHP = Math.ceil(zLostHP / 4 - 0.5);
        }
        result.damage = zLostHP;
        return result;
    }
    if (move.named('Nature\'s Madness', 'Super Fang', 'Ruination')) {
        var lostHP = field.defenderSide.isProtected ? 0 : Math.floor(defender.curHP() / 2) || 1;
        result.damage = lostHP;
        return result;
    }
    if (move.named('Spectral Thief')) {
        var stat = void 0;
        for (stat in defender.boosts) {
            if (defender.boosts[stat]) {
                attacker.boosts[stat] +=
                    attacker.hasAbility('Contrary') ? -defender.boosts[stat] : defender.boosts[stat];
                if (attacker.boosts[stat] > 6)
                    attacker.boosts[stat] = 6;
                if (attacker.boosts[stat] < -6)
                    attacker.boosts[stat] = -6;
                attacker.stats[stat] = (0, util_2.getModifiedStat)(attacker.rawStats[stat], attacker.boosts[stat]);
            }
        }
    }
    if (move.hits > 1) {
        desc.hits = move.hits;
    }
    var turnOrder = attacker.stats.spe > defender.stats.spe ? 'first' : 'last';
    var basePower = calculateBasePowerSMSSSV(gen, attacker, defender, move, field, hasAteAbilityTypeChange, desc);
    if (basePower === 0) {
        return result;
    }
    move.bp = basePower;
    var attack = calculateAttackSMSSSV(gen, attacker, defender, move, field, desc, !!isCritical);
    var attackSource = move.named('Foul Play') ? defender : attacker;
    if (move.named('Photon Geyser', 'Light That Burns The Sky') ||
        (move.named('Tera Blast') && attackSource.teraType)) {
        move.category = attackSource.stats.atk > attackSource.stats.spa ? 'Physical' : 'Special';
    }
    if (attacker.hasAbility('Equinox')) {
        move.category = attacker.stats.atk > attacker.stats.spa ? 'Physical' : 'Special';
    }
    if (attacker.hasAbility('Power Fists') && move.flags.punch) {
        move.category = 'Special';
    }
    if (attacker.hasAbility('Mystic Blades') && move.flags.slicing) {
        move.category = 'Special';
    }
    if (attacker.hasAbility('Mythical Arrows') && move.flags.arrow) {
        move.category = 'Special';
    }
    if (attacker.hasItem('Swirly Glasses')) {
        if (move.category === 'Special') {
            move.category = 'Physical';
        }
        else if (move.category == 'Physical') {
            move.category = 'Special';
        }
    }
    const useHighestOffenseMoves = ["Tachyon Cutter", "Malignant Chain", "Tera Starstorm", "Water Pledge", "Fire Pledge", "Grass Pledge", "Tri Attack", "Blast Burn", "Hydro Cannon", "Frenzy Plant", "Rock Wrecker", "Attack Order", "Relic Song", "Prismatic Laser", "Multi Attack", "Photon Geyser", "Pika Papow", "Veevee Volley", "Black Magic", "Bleakwind Storm", "Wildbolt Storm", "Sandsear Storm", "Springtide Storm", "Spectral Serenade", "Mystical Power", "Banished Power"]


    var attackStat = (move.named('Shell Side Arm') && (0, util_2.getShellSideArmCategory)(attacker, defender) === 'Physical') 
        ? 'atk'
        : move.named('Body Press')
            ? 'def'
            : (attacker.hasAbility('Mind Crunch', 'Megabite') && move.flags.bite) || (attacker.hasAbility('Magical Fists') && move.flags.punch)
                ? 'spa'
                : move.category === 'Special'
                    ? 'spa'
                    : 'atk';

    if (useHighestOffenseMoves.includes(move.name)) {
       attackStat = (attackSource.stats.atk > attackSource.stats.spa) ? 'atk' : 'spa' 
    }
    

    var defense = calculateDefenseSMSSSV(gen, attacker, defender, move, field, desc, !!isCritical);
    var targetWeakestDefense = (attacker.hasAbility('Exploit Weakness') && defender.status) || move.named('Shell Side Arm') || (attacker.hasAbility('Deadeye') && (move.flags.pulse || move.flags.arrow));
    
    var hitsPhysical = false;

    
    if (targetWeakestDefense) {
        hitsPhysical = (0, util_2.getShellSideArmCategory)(attacker, defender) === 'Physical'
    } else {
        hitsPhysical = move.overrideDefensiveStat === 'def' ||
        ((move.category === 'Physical') && !(attacker.hasAbility('Power Edge') && move.flags.slicing));
    }

    var defenseStat = hitsPhysical ? 'def' : 'spd';
    if (defender.hasAbility('Blur')) {
        defenseStat = 'spe'
    }


    var baseDamage = (0, util_2.getBaseDamage)(attacker.level, basePower, attack, defense);
    if (field.gameType === 'Doubles' && (attacker.hasAbility('Amplifier', 'Bass Boosted') &&
        move.flags.sound) || (attacker.hasAbility('Artillery', 'Super Scope') && move.flags.sound)) {
        move.target = 'allAdjacentFoes';
    }
    var isSpread = field.gameType !== 'Singles' &&
        ['allAdjacent', 'allAdjacentFoes'].includes(move.target);
    if (isSpread) {
        baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 3072) / 4096);
    }
    if (attacker.hasAbility('Parental Bond (Child)', 'Hyper Aggressive 2nd', 'Multi Headed 2nd', 'Raging Goddess 2nd', 'Balloon Blitz 2nd', 'Frenzied Phantom 2nd')) {
        baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 1024) / 4096);
    }
    if (attacker.hasAbility('Primal Maw 2nd', 'Devourer 2nd', 'Metallic Jaws 2nd')) {
        baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 1638) / 4096);
    }
    if (attacker.hasAbility('Multi Headed 3rd')) {
        baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 614) / 4096);
    }
    if (attacker.hasAbility('Raging Boxer 2nd', 'Steel Beetle 2nd')) {
        baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 1638) / 4096);
    }
    if (attacker.hasAbility('Dual Wield') && move.flags.pulse) {
        baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 3072) / 4096);
    }
    if (attacker.hasAbility('Dual Wield 2nd')) {
        baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 3072) / 4096);
    }

    if (field.hasWeather('Fog') && move.named('Ominous Wind')) {
        baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 8192) / 4096);
        desc.weather = field.weather;
    }

    if ((field.hasWeather('Sun') && move.named('Hydro Steam') && !attacker.hasItem('Utility Umbrella')) ||
        (field.hasWeather('Rain') && move.named('Boiling Flame') && !attacker.hasItem('Utility Umbrella'))) {
        baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 6144) / 4096);
        desc.weather = field.weather;
    }
    else if (!defender.hasItem('Utility Umbrella')) {
        if ((field.hasWeather('Sun', 'Harsh Sunshine') && move.hasType('Fire')) ||
            (field.hasWeather('Rain', 'Heavy Rain') && move.hasType('Water'))) {
            baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 6144) / 4096);
            desc.weather = field.weather;
        }
        else if ((field.hasWeather('Sun') && move.hasType('Water') && !attacker.hasAbility('Nika')) ||
            (field.hasWeather('Rain') && move.hasType('Fire'))) {
            baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 2048) / 4096);
            desc.weather = field.weather;
        }
    }
    if (attacker.hasAbility('Catastrophe') || defender.hasAbility('Catastrophe')) {
        if ((field.hasWeather('Sun', 'Harsh Sunshine') && move.hasType('Water')) ||
            (field.hasWeather('Rain', 'Heavy Rain') && move.hasType('Fire'))) {
            baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 6144) / 4096);
            desc.weather = field.weather;
        }
    }
    if (field.hasWeather('Sun') && move.category === 'Physical' && attacker.hasAbility('Sun Basking')) {
        baseDamage = (0, util_2.pokeRound)((0, util_2.OF32)(baseDamage * 2048) / 4096);
    }
    if (hasTerrainSeed(defender) &&
        field.hasTerrain(defender.item.substring(0, defender.item.indexOf(' '))) &&
        items_1.SEED_BOOSTED_STAT[defender.item] === defenseStat) {
        desc.defenderItem = defender.item;
    }
    if (isCritical) {
        desc.isCritical = isCritical;
        if (attacker.hasAbility('Sniper', 'To The Bone', 'Super Sniper')) {
            baseDamage = Math.floor((0, util_2.OF32)(baseDamage * 2.25));
            desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
        }
        else {
            baseDamage = Math.floor((0, util_2.OF32)(baseDamage * 1.5));
        }
    }
    var stabMod = 4096;
    if (attacker.hasOriginalType(move.type) || attacker.hasAbility('Mystic Power', 'Unown Power') &&
        !attacker.hasAbility('Sand Song')) {
        stabMod += 2048;
    }
    else if (attacker.hasAbility('Protean', 'Libero', 'Pattern Change', 'RKS System') && !attacker.teraType) {
        stabMod += 2048;
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    var teraType = attacker.teraType;
    if (teraType === move.type) {
        stabMod += 2048;
        desc.attackerTera = teraType;
    }
    if (attacker.hasAbility('Adaptability', 'RKS System') && attacker.hasType(move.type)) {
        stabMod += teraType && attacker.hasOriginalType(teraType) ? 1024 : 2048;
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Color Spectrum') && attacker.hasType(move.type)) {
        stabMod += 819;
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Aquatic', 'Amphibious') && !attacker.hasType('Water') &&
        move.hasType('Water')) {
        stabMod += 2048;
    }
    if (attacker.hasAbility('Dragonfly') && !attacker.hasType('Dragon') &&
        move.hasType('Dragon')) {
        stabMod += 2048;
    }
    if (attacker.hasAbility('Draconic Might') && !attacker.hasType('Dragon') &&
        move.hasType('Dragon')) {
        stabMod += 2048;
    }
    if (attacker.hasAbility('Stainless Steel') && !attacker.hasType('Steel') &&
        move.hasType('Steel')) {
        stabMod += 2048;
    }
    if (attacker.hasAbility('Tender Affection','Lunar Eclipse','Moon Spirit') && !attacker.hasType('Fairy') &&
        move.hasType('Fairy')) {
        stabMod += 2048;
    }

    if (attacker.hasAbility('Acidic Slime') && !attacker.hasType('Poison') &&
        move.hasType('Poison')) {
        stabMod += 2048;
    }
    if (attacker.hasAbility('Lunar Eclipse', 'Moon Spirit') && !attacker.hasType('Dark') &&
        move.hasType('Dark')) {
        stabMod += 2048;
    }
    if (attacker.hasAbility('Aurora Borealis') && !attacker.hasType('Ice') &&
        move.hasType('Ice')) {
        stabMod += 2048;
    }
    if (attacker.hasAbility('Solar Flare') && !attacker.hasType('Fire') &&
        move.hasType('Fire')) {
        stabMod += 2048;
    }
    if (attacker.hasAbility('Old Mariner') && !attacker.hasType('Water') &&
        move.hasType('Water')) {
        stabMod += 2048;
    }
    if (attacker.hasAbility('Arcane Force')) {
        stabMod += 2048;
    }
    var applyBurn = attacker.hasStatus('brn') &&
        move.category === 'Physical' &&
        !attacker.hasAbility('Guts') &&
        !move.named('Facade', 'Bravado');
    desc.isBurned = applyBurn;
    var applyFrostbite = attacker.hasStatus('frz') &&
        move.category === 'Special' &&
        !attacker.hasAbility('Determination') &&
        !move.named('Facade', 'Bravado');
    desc.isFrostbitten = applyFrostbite;
    var applyInfatuation = attacker.hasStatus('inf');
    var finalMods = calculateFinalModsSMSSSV(gen, attacker, defender, move, field, desc, !!isCritical, typeEffectiveness, hitsPhysical);
    var protect = false;
    if (field.defenderSide.isProtected &&
        (attacker.isDynamaxed || (move.isZ && attacker.item && attacker.item.includes(' Z')))) {
        protect = true;
        desc.isProtected = true;
    }
    if (defender.hasAbilityActive('Cheating Death')) {
        if (move.hits <= 2) {
            protect = true;
            desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
        }
        else {
            desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
            move.hits -= 2;
        }
    }
    var finalMod = (0, util_2.chainMods)(finalMods, 41, 131072);
    var contributionDamage;
    if (attacker.hasAbility('Parental Bond') && move.hits === 1 && !isSpread) {
        var child = attacker.clone();
        child.remplaceAbility('Parental Bond', 'Parental Bond (Child)');
        (0, util_2.checkMultihitBoost)(gen, child, defender, move, field, desc);
        contributionDamage = calculateSMSSSV(gen, child, defender, move, field).damage;
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    var contribution = calcContribution(gen, attacker, move, field);
    if (move.hits === 1 && contribution) {
        var child = contribution.child;
        var childMove = contribution.move;
        (0, util_2.checkMultihitBoost)(gen, child, defender, move, field, desc);
        contributionDamage = calculateSMSSSV(gen, child, defender, childMove, field).damage;
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    var damage = [];
    for (var i_1 = 0; i_1 < 16; i_1++) {
        damage[i_1] =
            (0, util_2.getFinalDamage)(baseDamage, i_1, typeEffectiveness, applyBurn, applyFrostbite, stabMod, finalMod, protect, applyInfatuation);
    }
    if (move.dropsStats && move.timesUsed > 1) {
        var simpleMultiplier = attacker.hasAbility('Simple') ? 2 : 1;
        desc.moveTurns = "over ".concat(move.timesUsed, " turns");
        var hasWhiteHerb = attacker.hasItem('White Herb');
        var usedWhiteHerb = false;
        var dropCount = attacker.boosts[attackStat];
        var _loop_1 = function (times) {
            var newAttack = (0, util_2.getModifiedStat)(attack, dropCount);
            var damageMultiplier = 0;
            damage = damage.map(function (affectedAmount) {
                if (times) {
                    var newBaseDamage = (0, util_2.getBaseDamage)(attacker.level, basePower, newAttack, defense);
                    var newFinalDamage = (0, util_2.getFinalDamage)(newBaseDamage, damageMultiplier, typeEffectiveness, applyBurn, applyFrostbite, stabMod, finalMod, protect, applyInfatuation);
                    damageMultiplier++;
                    return affectedAmount + newFinalDamage;
                }
                return affectedAmount;
            });
            if (attacker.hasAbility('Contrary')) {
                dropCount = Math.min(6, dropCount + move.dropsStats);
                desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
            }
            else {
                dropCount = Math.max(-6, dropCount - move.dropsStats * simpleMultiplier);
                if (attacker.hasAbility('Simple')) {
                    desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
                }
            }
            if (hasWhiteHerb && attacker.boosts[attackStat] < 0 && !usedWhiteHerb) {
                dropCount += move.dropsStats * simpleMultiplier;
                usedWhiteHerb = true;
                desc.attackerItem = attacker.item;
            }
        };
        for (var times = 0; times < move.timesUsed; times++) {
            _loop_1(times);
        }
    }
    desc.attackBoost =
        move.named('Foul Play') ? defender.boosts[attackStat] : attacker.boosts[attackStat];
    if (contributionDamage) {
        if (contributionDamage.length == damage.length) {
            var tempArray = [];
            for (var i = 0; i < damage.length; i++) {
                tempArray[i] = contributionDamage[i] + damage[i];
            }
            result.damage = tempArray;
        }
        else {
            result.damage = [damage, contributionDamage];
        }
    }
    else {
        result.damage = damage;
    }
    return result;
}
exports.calculateSMSSSV = calculateSMSSSV;
function calculateBasePowerSMSSSV(gen, attacker, defender, move, field, hasAteAbilityTypeChange, desc) {
    var _a;
    var turnOrder = attacker.stats.spe > defender.stats.spe ? 'first' : 'last';
    var basePower;
    switch (move.name) {
        case 'Roar of Time':
            if (attacker.hasAbility('Temporal Rupture')) {
                basePower = 100;
                move.flags.sound = 0;
                desc.moveBP = basePower;
            }     
            break;
        case 'Antarctic Bird':
            basePower = move.bp * (move.hasType('Ice', 'Flying') ? 1.3 : 1);
            desc.moveBP = basePower;
            break;
        case 'Payback':
            basePower = move.bp * (turnOrder === 'last' ? 2 : 1);
            desc.moveBP = basePower;
            break;
        case 'Bolt Beak':
        case 'Fishious Rend':
            basePower = move.bp * (turnOrder !== 'last' ? 2 : 1);
            desc.moveBP = basePower;
            break;
        case 'Pursuit':
            var switching = field.defenderSide.isSwitching === 'out';
            basePower = move.bp * (switching ? 2 : 1);
            if (switching)
                desc.isSwitching = 'out';
            desc.moveBP = basePower;
            break;
        case 'Electro Ball':
            var r = Math.floor(attacker.stats.spe / defender.stats.spe);
            basePower = r >= 4 ? 150 : r >= 3 ? 120 : r >= 2 ? 80 : r >= 1 ? 60 : 40;
            if (defender.stats.spe === 0)
                basePower = 40;
            desc.moveBP = basePower;
            break;
        case 'Gyro Ball':
            basePower = Math.min(150, Math.floor((25 * defender.stats.spe) / attacker.stats.spe) + 1);
            if (attacker.stats.spe === 0)
                basePower = 1;
            desc.moveBP = basePower;
            break;
        case 'Punishment':
            basePower = Math.min(200, 60 + 20 * (0, util_2.countBoosts)(gen, defender.boosts));
            desc.moveBP = basePower;
            break;
        case 'Low Kick':
        case 'Grass Knot':
            var w = defender.weightkg * (0, util_2.getWeightFactor)(defender);
            basePower = w >= 200 ? 120 : w >= 100 ? 100 : w >= 50 ? 80 : w >= 25 ? 60 : w >= 10 ? 40 : 20;
            desc.moveBP = basePower;
            break;
        case 'Hex':
        case 'Plasma Pulse':
        case 'Infernal Parade':
            basePower = move.bp * (defender.status || defender.hasAbility('Comatose') ? 2 : 1);
            desc.moveBP = basePower;
            break;
        case 'Barb Barrage':
            basePower = move.bp * (defender.hasStatus('psn', 'tox') ? 2 : 1);
            desc.moveBP = basePower;
            break;
        case 'Heavy Slam':
        case 'Heat Crash':
            var wr = (attacker.weightkg * (0, util_2.getWeightFactor)(attacker)) /
                (defender.weightkg * (0, util_2.getWeightFactor)(defender));
            basePower = wr >= 5 ? 120 : wr >= 4 ? 100 : wr >= 3 ? 80 : wr >= 2 ? 60 : 40;
            desc.moveBP = basePower;
            break;
        case 'Stored Power':
        case 'Power Trip':
            basePower = 20 + 20 * (0, util_2.countBoosts)(gen, attacker.boosts);
            desc.moveBP = basePower;
            break;
        case 'Acrobatics':
            basePower = move.bp * (attacker.hasItem('Flying Gem') || !attacker.item ? 1.5 : 1);
            desc.moveBP = basePower;
            break;
        case 'Assurance':
            basePower = move.bp * (defender.hasAbility('Parental Bond (Child)') ? 2 : 1);
            break;
        case 'Wake Up Slap':
            basePower = move.bp * (defender.hasStatus('slp') || defender.hasAbility('Comatose') ? 2 : 1);
            desc.moveBP = basePower;
            break;
        case 'Smelling Salts':
            basePower = move.bp * (defender.hasStatus('par') ? 2 : 1);
            desc.moveBP = basePower;
            break;
        case 'Weather Ball':
            basePower = move.bp * (field.weather && !field.hasWeather('Strong Winds') ? 2 : 1);
            if (field.hasWeather('Sun', 'Harsh Sunshine', 'Rain', 'Heavy Rain') &&
                attacker.hasItem('Utility Umbrella'))
                basePower = move.bp;
            desc.moveBP = basePower;
            break;
        case 'Terrain Pulse':
            basePower = move.bp * ((0, util_2.isGrounded)(attacker, field) && field.terrain ? 2 : 1);
            desc.moveBP = basePower;
            break;
        case 'Rising Voltage':
            basePower = move.bp * (((0, util_2.isGrounded)(defender, field) && field.hasTerrain('Electric')) ? 2 : 1);
            desc.moveBP = basePower;
            break;
        case 'Psyblade':
            basePower = move.bp * (field.hasTerrain('Electric') ? 1.5 : 1);
            if (field.hasTerrain('Electric')) {
                desc.moveBP = basePower;
                desc.terrain = field.terrain;
            }
            break;
        case 'Fling':
            basePower = 90;
            desc.moveBP = basePower;
            desc.attackerItem = attacker.item;
            break;
        case 'Dragon Energy':
        case 'Eruption':
        case 'Water Spout':
            basePower = Math.max(1, Math.floor((150 * attacker.curHP()) / attacker.maxHP()));
            desc.moveBP = basePower;
            break;
        case 'Flail':
        case 'Reversal':
            var p = Math.floor((48 * attacker.curHP()) / attacker.maxHP());
            basePower = p <= 1 ? 200 : p <= 4 ? 150 : p <= 9 ? 100 : p <= 16 ? 80 : p <= 32 ? 40 : 20;
            desc.moveBP = basePower;
            break;
        case 'Natural Gift':
            if ((_a = attacker.item) === null || _a === void 0 ? void 0 : _a.includes('Berry')) {
                var gift = (0, items_1.getNaturalGift)(gen, attacker.item);
                basePower = gift.p;
                desc.attackerItem = attacker.item;
                desc.moveBP = move.bp;
            }
            else {
                basePower = move.bp;
            }
            break;
        case 'Nature Power':
            move.category = 'Special';
            move.secondaries = true;
            switch (field.terrain) {
                case 'Electric':
                    basePower = 90;
                    desc.moveName = 'Thunderbolt';
                    break;
                case 'Grassy':
                    basePower = 90;
                    desc.moveName = 'Energy Ball';
                    break;
                case 'Misty':
                    basePower = 95;
                    desc.moveName = 'Moonblast';
                    break;
                case 'Psychic':
                    basePower = 90;
                    desc.moveName = 'Psychic';
                    break;
                default:
                    basePower = 80;
                    desc.moveName = 'Tri Attack';
            }
            break;
        case 'Water Shuriken':
            basePower = attacker.named('Greninja Ash') && attacker.hasAbility('Battle Bond') ? 20 : 15;
            desc.moveBP = basePower;
            break;
        case 'Triple Axel':
        case 'Whirling Strikes':
        case 'Triple Tremor':
            basePower = move.hits === 2 ? 30 : move.hits === 3 ? 40 : 20;
            desc.moveBP = basePower;
            break;
        case 'Triple Kick':
            basePower = move.hits === 2 ? 15 : move.hits === 3 ? 30 : 10;
            desc.moveBP = basePower;
            break;
        case 'Crush Grip':
        case 'Wring Out':
            basePower = 100 * Math.floor((defender.curHP() * 4096) / defender.maxHP());
            basePower = Math.floor(Math.floor((120 * basePower + 2048 - 1) / 4096) / 100) || 1;
            desc.moveBP = basePower;
            break;
        default:
            basePower = move.bp;
    }
    if (basePower === 0) {
        return 0;
    }
    if (move.named('Breakneck Blitz', 'Bloom Doom', 'Inferno Overdrive', 'Hydro Vortex', 'Gigavolt Havoc', 'Subzero Slammer', 'Supersonic Skystrike', 'Savage Spin Out', 'Acid Downpour', 'Tectonic Rage', 'Continental Crush', 'All Out Pummeling', 'Shattered Psyche', 'Never Ending Nightmare', 'Devastating Drake', 'Black Hole Eclipse', 'Corkscrew Crash', 'Twinkle Tackle')) {
        desc.moveBP = move.bp;
    }
    var bpMods = calculateBPModsSMSSSV(gen, attacker, defender, move, field, desc, basePower, hasAteAbilityTypeChange, turnOrder);
    basePower = (0, util_2.OF16)(Math.max(1, (0, util_2.pokeRound)((basePower * (0, util_2.chainMods)(bpMods, 41, 2097152)) / 4096)));
    if (attacker.teraType && move.type === attacker.teraType &&
        attacker.hasType(attacker.teraType) && move.hits === 1 &&
        move.priority <= 0 && move.bp > 0 && !move.named('Dragon Energy', 'Eruption', 'Water Spout') &&
        basePower < 60 && gen.num >= 9) {
        basePower = 60;
        desc.moveBP = 60;
    }
    return basePower;
}
exports.calculateBasePowerSMSSSV = calculateBasePowerSMSSSV;
function calculateBPModsSMSSSV(gen, attacker, defender, move, field, desc, basePower, hasAteAbilityTypeChange, turnOrder) {
    var bpMods = [];
    var resistedKnockOffDamage = !defender.item ||
        (defender.named('Dialga Origin') && defender.hasItem('Adamant Crystal')) ||
        (defender.named('Palkia Origin') && defender.hasItem('Lustrous Globe')) ||
        (defender.name.includes('Giratina Origin') && defender.item.includes('Griseous')) ||
        (defender.name.includes('Arceus') && defender.item.includes('Plate')) ||
        (defender.name.includes('Genesect') && defender.item.includes('Drive')) ||
        (defender.named('Groudon', 'Groudon Primal') && defender.hasItem('Red Orb')) ||
        (defender.named('Kyogre', 'Kyogre Primal') && defender.hasItem('Blue Orb')) ||
        (defender.name.includes('Silvally') && defender.item.includes('Memory')) ||
        defender.item.includes(' Z') ||
        (defender.named('Zacian') && defender.hasItem('Rusted Sword')) ||
        (defender.named('Zamazenta') && defender.hasItem('Rusted Shield') ||
            (defender.named('Venomicon Epilogue') && defender.hasItem('Vile Vial')));
    if (!resistedKnockOffDamage && defender.item) {
        var item = gen.items.get((0, util_1.toID)(defender.item));
        resistedKnockOffDamage = !!item.megaEvolves && defender.name.includes(item.megaEvolves);
    }
    if ((move.named('Bitter Malice', 'Infernal Parade', 'Barb Barrage') && defender.hasStatus('brn', 'psn', 'tox', 'frz', 'bld'))) {
        bpMods.push(6144);
        desc.moveBP = basePower * 1.5;
    }
    if ((move.named('Facade', 'Bravado') && attacker.hasStatus('brn', 'psn', 'tox', 'frz', 'bld')) ||
        (move.named('Brine') && defender.curHP() <= defender.maxHP() / 2) ||
        (move.named('Venoshock') && defender.hasStatus('psn', 'tox')) ||
        (move.named('Lash Out') && ((0, util_2.countBoosts)(gen, attacker.boosts) < 0))) {
        bpMods.push(8192);
        desc.moveBP = basePower * 2;
    }
    else if (move.named('Expanding Force') && (0, util_2.isGrounded)(attacker, field) && field.hasTerrain('Psychic')) {
        move.target = 'allAdjacentFoes';
        bpMods.push(6144);
        desc.moveBP = basePower * 1.5;
    }
    else if ((move.named('Knock Off') && !resistedKnockOffDamage) ||
        (move.named('Misty Explosion') && (0, util_2.isGrounded)(attacker, field) && field.hasTerrain('Misty')) ||
        (move.named('Grav Apple') && field.isGravity)) {
        bpMods.push(6144);
        desc.moveBP = basePower * 1.5;
    }
    else if (move.named('Solar Beam', 'Solar Blade') &&
        field.hasWeather('Rain', 'Heavy Rain', 'Sand', 'Hail', 'Snow') &&
        !attacker.hasAbility('Chloroplast')) {
        bpMods.push(2048);
        desc.moveBP = basePower / 2;
        desc.weather = field.weather;
    }
    else if (move.named('Collision Course', 'Electro Drift')) {
        var isGhostRevealed = !!attacker.hasAbility('Scrappy', 'Blind Rage') || field.defenderSide.isForesight;
        var isRingTarget = defender.hasItem('Ring Target') && !defender.hasAbility('Klutz');
        var types = defender.teraType ? [defender.teraType] : defender.types;
        var type1Effectiveness = (0, util_2.getMoveEffectiveness)(gen, move, types[0], defender, attacker, isGhostRevealed, field.isGravity, isRingTarget);
        var type2Effectiveness = types[1] ? (0, util_2.getMoveEffectiveness)(gen, move, types[1], defender, attacker, isGhostRevealed, field.isGravity, isRingTarget) : 1;
        var type3Effectiveness = types[2]
            ? (0, util_2.getMoveEffectiveness)(gen, move, types[2], defender, attacker, isGhostRevealed, field.isGravity, isRingTarget)
            : 1;
        if (type1Effectiveness * type2Effectiveness * type3Effectiveness >= 2) {
            bpMods.push(5461);
            desc.moveBP = basePower * (5461 / 4096);
        }
    } else if (move.named('Rollout', 'Ice Ball') && attacker.hasAbilityActive("Let's Roll")) {
        bpMods.push(8192);
        desc.moveBP = basePower * 2;
    }
    if (field.attackerSide.isHelpingHand) {
        bpMods.push(6144);
        desc.isHelpingHand = true;
    }
    var terrainMultiplier = gen.num > 7 ? 5325 : 6144;
    if ((0, util_2.isGrounded)(attacker, field)) {
        if ((field.hasTerrain('Electric') && move.hasType('Electric')) ||
            (field.hasTerrain('Grassy') && move.hasType('Grass')) ||
            (field.hasTerrain('Toxic') && move.hasType('Poison')) ||
            (field.hasTerrain('Psychic') && move.hasType('Psychic'))) {
            bpMods.push(terrainMultiplier);
            desc.terrain = field.terrain;
        }
    }
    if (field.hasTerrain('Grassy') && move.hasType('Grass') && attacker.hasAbility('Flourish')) {
        bpMods.push(6144);
    }
    if ((0, util_2.isGrounded)(defender, field)) {
        if ((field.hasTerrain('Misty') && move.hasType('Dragon')) ||
            (field.hasTerrain('Grassy') && move.named('Bulldoze', 'Earthquake'))) {
            bpMods.push(2048);
            desc.terrain = field.terrain;
        }
    }
    bpMods = bpMods.concat(abilityBoosts(attacker, move, basePower));
    if (field.attackerSide.isInfatuated) {
        desc.isInfatuated = true;
        bpMods.push(2048);
    }
    var aura = "".concat(move.type, " Aura");
    var isAttackerAura = attacker.hasAbility(aura);
    var isDefenderAura = defender.hasAbility(aura);
    var isUserAuraBreak = attacker.hasAbility('Aura Break') || defender.hasAbility('Aura Break');
    var isFieldAuraBreak = field.isAuraBreak;
    var isFieldFairyAura = (field.isFairyAura || attacker.hasAbility('Pixie Power')) && move.type === 'Fairy';
    var isFieldDarkAura = field.isDarkAura && move.type === 'Dark';
    var auraActive = isAttackerAura || isDefenderAura || isFieldFairyAura || isFieldDarkAura;
    var auraBreak = isFieldAuraBreak || isUserAuraBreak;
    if (auraActive) {
        if (auraBreak) {
            bpMods.push(3072);
            desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
            desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
        }
        else {
            bpMods.push(5448);
            if (isAttackerAura) {
                desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
            }
            if (isDefenderAura) {
                desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
            }
        }
    }
    if ((attacker.hasAbility('Sheer Force') &&
        (move.secondaries || move.named('Order Up')) && !move.isMax) ||
        (attacker.hasAbility('Analytic', 'Calculative', 'Strategic Pause') &&
            (turnOrder !== 'first' || field.defenderSide.isSwitching === 'out')) ||
        (attacker.hasAbility('Tough Claws', 'Apex Predator') && move.flags.contact) ||
        (attacker.hasAbility('Blood Price')) ||
        (attacker.hasAbility('Mind Crunch', 'Megabite') && move.flags.bite) ||
        (attacker.hasAbility('Punk Rock', 'Bass Boosted', 'Sludgy Mix') || attacker.hasAbility('Amplifier') && move.flags.sound)) {
        bpMods.push(5325);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (move.priority > 0 && attacker.hasAbility('Higher Rank')) {
        bpMods.push(4915);
    }
    if (attacker.hasAbility('Bass Boosted') && move.flags.sound) {
        bpMods.push(5325);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Fossilized') && move.hasType('Rock')) {
        bpMods.push(4915);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (attacker.hasAbility('Plasma Lamp') && move.hasType('Fire', 'Electric')) {
        bpMods.push(4915);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (field.attackerSide.isBattery && move.category === 'Special') {
        bpMods.push(5325);
        desc.isBattery = true;
    }
    if (field.attackerSide.isPowerSpot) {
        bpMods.push(5325);
        desc.isPowerSpot = true;
    }
    if (field.attackerSide.isDefenseCurl && move.name === 'Rollout' || move.name === 'Ice Ball') {
        bpMods.push(8192);
    }
    if (attacker.hasAbility('Rivalry') && ![attacker.gender, defender.gender].includes('N')) {
        if (attacker.gender === defender.gender) {
            bpMods.push(5120);
            desc.rivalry = 'buffed';
        }
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (!move.isMax && hasAteAbilityTypeChange) {
        bpMods.push(4506);
    }
    if ((attacker.hasAbility('Reckless', 'Rock Head') && (move.recoil || move.hasCrashDamage))) {
        bpMods.push(4915);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Iron Fist', 'Combat Specialist', 'Nika', 'Atomic Punch', 'Magical Fists') && move.flags.punch) {
        bpMods.push(5325);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Venoblaze Pincers') && move.category == "Physical") {
        bpMods.push(4915);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasItem('Punching Glove') && move.flags.punch) {
        bpMods.push(4506);
        desc.attackerItem = attacker.item;
    }
    if (defender.hasAbility('Heatproof', 'Iron Giant') && move.hasType('Fire')) {
        bpMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    else if (defender.hasAbility('Dry Skin') && move.hasType('Fire')) {
        bpMods.push(5120);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (attacker.hasAbility('Supreme Overlord') && attacker.alliesFainted) {
        var powMod = [4096, 4506, 4915, 5325, 5734, 6144];
        bpMods.push(powMod[Math.min(5, attacker.alliesFainted)]);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
        desc.alliesFainted = attacker.alliesFainted;
    }
    if (attacker.hasAbilityActive('Dreamcatcher')) {
        bpMods.push(8192);
    }
    if (attacker.hasItem("".concat(move.type, " Gem"))) {
        bpMods.push(5325);
        desc.attackerItem = attacker.item;
    }
    else if ((((attacker.hasItem('Adamant Crystal') && attacker.named('Dialga Origin')) ||
        (attacker.hasItem('Adamant Orb') && attacker.named('Dialga'))) &&
        move.hasType('Steel', 'Dragon')) ||
        (((attacker.hasItem('Lustrous Orb') &&
            attacker.named('Palkia')) ||
            (attacker.hasItem('Lustrous Globe') && attacker.named('Palkia Origin'))) &&
            move.hasType('Water', 'Dragon')) ||
        (((attacker.hasItem('Griseous Orb') || attacker.hasItem('Griseous Core')) &&
            (attacker.named('Giratina Origin') || attacker.named('Giratina'))) &&
            move.hasType('Ghost', 'Dragon')) ||
        (attacker.hasItem('Vile Vial') &&
            attacker.named('Venomicon Epilogue') &&
            move.hasType('Poison', 'Flying')) ||
        (attacker.hasItem('Soul Dew') &&
            attacker.named('Latios', 'Latias', 'Latios Mega', 'Latias Mega') &&
            move.hasType('Psychic', 'Dragon')) ||
        attacker.item && move.hasType((0, items_1.getItemBoostType)(attacker.item))) {
        bpMods.push(4915);
        desc.attackerItem = attacker.item;
    }
    else if ((attacker.hasItem('Muscle Band') && move.category === 'Physical') ||
        (attacker.hasItem('Wise Glasses') && move.category === 'Special')) {
        bpMods.push(4505);
        desc.attackerItem = attacker.item;
    }
    return bpMods;
}
exports.calculateBPModsSMSSSV = calculateBPModsSMSSSV;
function calculateAttackSMSSSV(gen, attacker, defender, move, field, desc, isCritical) {
    if (isCritical === void 0) { isCritical = false; }
    var attack;
    var attackSource = move.named('Foul Play') ? defender : attacker;
    if (move.named('Photon Geyser', 'Light That Burns The Sky') ||
        (move.named('Tera Blast') && attackSource.teraType)) {
        move.category = attackSource.stats.atk > attackSource.stats.spa ? 'Physical' : 'Special';
    }

    const useHighestOffenseMoves = ["Tachyon Cutter", "Malignant Chain", "Tera Starstorm", "Water Pledge", "Fire Pledge", "Grass Pledge", "Tri Attack", "Blast Burn", "Hydro Cannon", "Frenzy Plant", "Rock Wrecker", "Attack Order", "Relic Song", "Prismatic Laser", "Multi Attack", "Photon Geyser", "Pika Papow", "Veevee Volley", "Black Magic", "Bleakwind Storm", "Wildbolt Storm", "Sandsear Storm", "Springtide Storm", "Spectral Serenade", "Mystical Power", "Banished Power"]


    var attackStat = (move.named('Shell Side Arm') && (0, util_2.getShellSideArmCategory)(attacker, defender) === 'Physical') 
        ? 'atk'
        : move.named('Body Press')
            ? 'def'
            : (attacker.hasAbility('Mind Crunch', 'Megabite') && move.flags.bite) || (attacker.hasAbility('Magical Fists') && move.flags.punch)
                ? 'spa'
                : move.category === 'Special'
                    ? 'spa'
                    : 'atk';

    if (useHighestOffenseMoves.includes(move.name)) {
       attackStat = (attackSource.stats.atk > attackSource.stats.spa) ? 'atk' : 'spa' 
    }


    desc.attackEVs =
        move.named('Foul Play')
            ? (0, util_2.getEVDescriptionText)(gen, defender, attackStat, defender.nature)
            : (0, util_2.getEVDescriptionText)(gen, attacker, attackStat, attacker.nature);
    if (attackSource.boosts[attackStat] === 0 ||
        (isCritical && attackSource.boosts[attackStat] < 0)) {
        attack = attackSource.rawStats[attackStat];
    }

    if ((attacker.hasAbility('Momentum') && move.flags.contact) || (attacker.hasAbility('Impulse') && !move.flags.contact) || attacker.hasAbility('Max Acceleration')) {
        // choice scarf doesn't boost abilities that change attack stat to spe
        if (attacker.item == "Choice Scarf") {
            attacker.stats.spe = (0, util_2.pokeRound)(attacker.stats.spe * 2/3);
        }       
        attack = attacker.stats.spe;
        attackStat = 'spe';
    }


    if (attacker.hasAbility('Ancient Idol')) {
        if (move.category === 'Physical') {
            attackStat = 'def';
        }
        else {
            attackStat = 'spd';
        }
    }

    // Anything that changes what stat the attack uses goes above here


    if (defender.hasAbility('Unaware', 'Sword of Damnation', 'Contempt')) {
        attack = attackSource.rawStats[attackStat];
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    else {
        attack = attackSource.stats[attackStat];
        desc.attackBoost = attackSource.boosts[attackStat];
    }
    if (attacker.hasAbility('Hustle')) {
        attack = (0, util_2.pokeRound)(attack * 1.40);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Roundhouse') && move.flags.kick) {
        if (defender.stats.def > defender.stats.spd) {
            defender.stats.def = defender.stats.spd;
        }
    }

    if ((attacker.hasAbility('Speed Force') && move.flags.contact) || attacker.hasAbility('Slipstream')) {
        attack = attack + (0, util_2.pokeRound)((attacker.stats.spe * 0.20));
    }
    
    if (attacker.hasAbility('Terminal Velocity') && move.category === 'Special') {
        attack += (0, util_2.pokeRound)((attacker.stats.spe * 0.20));
    }
    if (attacker.hasAbility('Juggernaut', 'Iron Giant') && move.flags.contact) {
        attack = attack + (0, util_2.pokeRound)((attacker.stats.def * 0.20));
    }
    if (attacker.hasAbility('Power Core') && defender.hasAbility('Unaware', 'Sword of Damnation', 'Contempt')) {
        if (move.category === 'Physical') {
            attack = attackSource.rawStats[attackStat] + (0, util_2.pokeRound)((attacker.stats.def * 0.20));
        }
        else {
            attack = attackSource.rawStats[attackStat] + (0, util_2.pokeRound)((attacker.stats.spd * 0.20));
        }
    }
    else if (attacker.hasAbility('Power Core') && !defender.hasAbility('Unaware', 'Sword of Damnation', 'Contempt')) {
        if (move.category === 'Physical') {
            attack = attacker.stats.atk + (0, util_2.pokeRound)((attacker.stats.def * 0.20));
        }
        else {
            attack = attacker.stats.spa + (0, util_2.pokeRound)((attacker.stats.spd * 0.20));
        }
    }
    
    var atMods = calculateAtModsSMSSSV(gen, attacker, defender, move, field, desc, isCritical);
    attack = (0, util_2.OF16)(Math.max(1, (0, util_2.pokeRound)((attack * (0, util_2.chainMods)(atMods, 410, 131072)) / 4096)));
    return attack;
}
exports.calculateAttackSMSSSV = calculateAttackSMSSSV;
function calculateAtModsSMSSSV(gen, attacker, defender, move, field, desc, isCritical) {
    var e_2, _a;
    if (isCritical === void 0) { isCritical = false; }
    var atMods = [];
    if (attacker.hasAbilityActive('Violent Rush', "Champion's Entrance") && move.category === 'Physical') {
        atMods.push(4915);
    }
    if (attacker.hasAbilityActive('Showdown Mode') && move.category === 'Physical') {
        atMods.push(4915);
    }
    if (attacker.hasAbilityActive('Rapid Response') && move.category === 'Special') {
        atMods.push(4915);
    }
    if ((attacker.hasAbility('Flock', 'Aerialist') && move.hasType('Flying')) ||
        (attacker.hasAbility('Short Circuit') && move.hasType('Electric')) ||
        (attacker.hasAbility('Vengeance') && move.hasType('Ghost')) ||
        (attacker.hasAbility('Torrent') && move.hasType('Water')) ||
        (attacker.hasAbility('Overgrow') && move.hasType('Grass')) ||
        (attacker.hasAbility('Blaze') && move.hasType('Fire')) ||
        (attacker.hasAbility('Fighter') && move.hasType('Fighting')) ||
        (attacker.hasAbility('Rockhard Will') && move.hasType('Rock')) ||
        (attacker.hasAbility('Psychic Mind') && move.hasType('Psychic')) ||
        (attacker.hasAbility('Swarm') && move.hasType('Bug'))) {
        if (attacker.curHP() <= attacker.maxHP() / 3) {
            atMods.push(6144);
        }
        else {
            atMods.push(4915);
        }
    }

    if (attacker.hasAbility('Exploit Weakness', 'Relentless') && defender.status) {
        atMods.push(5120);
    }
    try {
        for (var _b = __values(['Liquid Voice', 'Power Metal', 'Snow Song', 'Banshee', 'Sand Song']), _c = _b.next(); !_c.done; _c = _b.next()) {
            var soundAbil = _c.value;
            if (attacker.hasAbility(soundAbil) && move.flags.sound) {
                atMods.push(4915);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    if ((attacker.hasAbilityActive('Slow Start') &&
        (move.category === 'Physical' || (move.category === 'Special' && move.isZ))) ||
        (attacker.hasAbility('Defeatist') && attacker.curHP() <= attacker.maxHP() / 3)) {
        atMods.push(2048);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if ((attacker.hasAbility('Rite Of Spring') &&
        field.hasWeather('Sun', 'Harsh Sunshine') &&
        move.category === 'Special') ||
        (attacker.named('Cherrim') &&
            attacker.hasAbility('Flower Gift') &&
            field.hasWeather('Sun', 'Harsh Sunshine') &&
            move.category === 'Physical') ||
        (attacker.hasAbility('Gorilla Tactics') && move.category === 'Physical' &&
            !attacker.isDynamaxed)) {
        atMods.push(6144);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
        desc.weather = field.weather;
    }
    if (field.attackerSide.isFlowerGift &&
        field.hasWeather('Sun', 'Harsh Sunshine') &&
        move.category === 'Physical') {
        atMods.push(6144);
        desc.weather = field.weather;
        desc.isFlowerGiftAttacker = true;
    }
    if ((attacker.hasAbility('Guts') && attacker.status && move.category === 'Physical') ||
        (attacker.hasAbility('Determination') && attacker.status && move.category === 'Special') ||
        (move.category === 'Special' && attacker.hasAbilityActive('Plus', 'Minus'))) {
        atMods.push(6144);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbilityActive('Flash Fire') && move.hasType('Fire')) {
        atMods.push(6144);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, 'Flash Fire');
    }
    if (attacker.hasAbility('Dead Power')) {
        atMods.push(6144);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Dragon\'s Maw') && move.hasType('Dragon')) {
        atMods.push(5325);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Transistor') && move.hasType('Electric')) {
        atMods.push(6144);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Combustion') && move.hasType('Fire')) {
        atMods.push(6144);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbilityActive('Stakeout', 'Overwatch')) {
        atMods.push(8192);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if ((attacker.hasAbilityActive('Readied Action', 'Demolitionist')) && move.category === 'Physical') {
        atMods.push(8192);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Water Bubble') && move.hasType('Water')) {
        atMods.push(8192);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }

    if (attacker.hasAbility('Deep Freeze') && move.hasType('Water', 'Ice')) {
        atMods.push(8192);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Raw Wood') && move.hasType('Grass')) {
        atMods.push(4915);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Doom Blast') && move.hasType('Dark')) {
        atMods.push(5530);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Two-Faced') && move.hasType('Dark', 'Electric')) {
        atMods.push(5530);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Aquatic Dweller', 'Aquatic Ruler') && move.hasType('Water')) {
        atMods.push(6144);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Flame Bubble') && move.hasType('Water')) {
        atMods.push(8192);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Pure Power') && move.category === 'Physical') {
        atMods.push(8192);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Huge Power') && move.category === 'Physical') {
        atMods.push(8192);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Feline Prowess') && move.category === 'Special') {
        atMods.push(8192);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if ((attacker.hasAbility('Forest Rage') && move.hasType('Grass')) ||
        (attacker.hasAbility('Riptide') && move.hasType('Water')) ||
        (attacker.hasAbility('Purgatory') && move.hasType('Ghost')) ||
        (attacker.hasAbility('Gladiator') && move.hasType('Fighting')) ||
        (attacker.hasAbility('We Will Rock You') && move.hasType('Rock')) ||
        (attacker.hasAbility('Hellblaze') && move.hasType('Fire'))) {
        if (attacker.curHP() <= attacker.maxHP() / 3) {
            atMods.push(7373);
        }
        else {
            atMods.push(5325);
        }
    }
    if ((defender.hasAbility('Thick Fat') && move.hasType('Fire', 'Ice')) ||
        (defender.hasAbility('Purifying Salt') && move.hasType('Ghost'))) {
        atMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (isCritical && defender.hasAbility('Bad Omen')) {
        atMods.push(1024);
    }
    if (defender.hasAbility('Water Bubble') && move.hasType('Fire')) {
        atMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Stainless Steel') && move.hasType('Ghost', 'Dark')) {
        atMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Firefighter') && attacker.hasType('Fire')) {
        atMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Deep Freeze') && move.hasType('Fire')) {
        atMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Raw Wood') && move.hasType('Grass')) {
        atMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    var isTabletsOfRuinActive = (defender.hasAbility('Tablets Of Ruin') || field.isTabletsOfRuin) &&
        !attacker.hasAbility('Tablets Of Ruin');
    var isVesselOfRuinActive = (defender.hasAbility('Vessel Of Ruin') || field.isVesselOfRuin) &&
        !attacker.hasAbility('Vessel Of Ruin');
    if ((isTabletsOfRuinActive && move.category === 'Physical') ||
        (isVesselOfRuinActive && move.category === 'Special')) {
        if (defender.hasAbility('Tablets Of Ruin') || defender.hasAbility('Vessel Of Ruin')) {
            desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
        }
        else {
            desc[move.category === 'Special' ? 'isVesselOfRuin' : 'isTabletsOfRuin'] = true;
        }
        atMods.push(3072);
    }
    if ((attacker.hasAbility('Protosynthesis') &&
        (field.hasWeather('Sun') || attacker.hasItem('Booster Energy'))) ||
        (attacker.hasAbility('Greater Spirit') && (field.hasWeather('Fog'))) ||
        (attacker.hasAbility('Greater Spirit') && (field.hasWeather('Fog'))) ||
        (attacker.hasAbility('Quark Drive') &&
            (field.hasTerrain('Electric') || attacker.hasItem('Booster Energy')))) {
        if ((move.category === 'Physical' &&
            (0, util_2.getQPBoostedStat)(attacker) === 'atk') ||
            (move.category === 'Special' && (0, util_2.getQPBoostedStat)(attacker) === 'spa')) {
            atMods.push(5325);
            desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
        }
    }
    if ((attacker.hasAbility('Hadron Engine') && move.category === 'Special' &&
        field.hasTerrain('Electric') && (0, util_2.isGrounded)(attacker, field)) ||
        (attacker.hasAbility('Orichalcum Pulse') && move.category === 'Physical' &&
            field.hasWeather('Sun', 'Harsh Sunshine') && !attacker.hasItem('Utility Umbrella'))) {
        atMods.push(5461);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasItem('Light Ball') && !move.isZ) {
        if (attacker.named('Raichu', 'Raichu Alolan')) {
            atMods.push(6144);
        }
        else if (attacker.named('Pikachu')) {
            atMods.push(8192);
        }
        desc.attackerItem = attacker.item;
    }
    else if ((attacker.hasItem('Thick Club') &&
        attacker.named('Cubone', 'Marowak', 'Marowak Alola', 'Marowak Alola Totem') &&
        move.category === 'Physical') ||
        (attacker.hasItem('Deep Sea Tooth') &&
            attacker.named('Clamperl') &&
            move.category === 'Special')) {
        atMods.push(8192);
        desc.attackerItem = attacker.item;
    }
    else if (!move.isZ && !move.isMax &&
        ((attacker.hasItem('Choice Band') && move.category === 'Physical') ||
            (attacker.hasItem('Choice Specs') && move.category === 'Special'))) {
        atMods.push(6144);
        desc.attackerItem = attacker.item;
    }



    if (attacker.hasAbility('Firefighter') && defender.hasType('Fire')) {
        atMods.push(6144);
    }

    if (field.defenderSide.isFearful) {
        atMods.push(6144);
    }
    if (defender.hasStatus('bld') && attacker.hasAbility('Blood Stigma')) {
        atMods.push(6144);
    }
    if (attacker.hasAbility('Earthbound') && move.hasType('Ground')) {
        atMods.push(5120);
    }
    if (attacker.hasAbility('Electrocytes') && move.hasType('Electric')) {
        atMods.push(5120);
    }
    if (attacker.hasAbility('Levitate', 'Imposing Wings', 'Fey Flight') && move.hasType('Flying')) {
        atMods.push(5120);
    }
    if (attacker.hasAbility('Aerialist') && move.hasType('Flying')) {
        atMods.push(5120);
    }
    if (attacker.hasAbility('Sage Power') && move.category === 'Special') {
        atMods.push(6144);
    }
    if (attacker.hasAbility('Majestic Bird') && move.category === 'Special') {
        atMods.push(6144);
    }
    if (attacker.hasAbility('Power Fists') && move.flags.punch) {
        atMods.push(5325);
    }
    return atMods;
}
exports.calculateAtModsSMSSSV = calculateAtModsSMSSSV;
function calculateDefenseSMSSSV(gen, attacker, defender, move, field, desc, isCritical) {
    if (isCritical === void 0) { isCritical = false; }
    if (attacker.hasAbilityActive('Grip Pincer'))
        move.ignoreDefensive = true;
    var defense;
    var targetWeakestDefense = (attacker.hasAbility('Exploit Weakness') && defender.status) || move.named('Shell Side Arm') || (attacker.hasAbility('Deadeye') && (move.flags.pulse || move.flags.arrow));
    
    var hitsPhysical = false;
    
    if (targetWeakestDefense) {
        hitsPhysical = (0, util_2.getShellSideArmCategory)(attacker, defender) === 'Physical'
    } else {
        hitsPhysical = move.overrideDefensiveStat === 'def' ||
        ((move.category === 'Physical') && !(attacker.hasAbility('Power Edge') && move.flags.slicing));
    }

    var defenseStat = hitsPhysical ? 'def' : 'spd';
    
    // todo: check choice scarf
    if (defender.hasAbility('Blur') && move.flags.contact) {
        defenseStat = 'spe'
    }
    if (defender.hasAbility('Elude') && !move.flags.contact) {
        defenseStat = 'spe'
    }




    desc.defenseEVs = (0, util_2.getEVDescriptionText)(gen, defender, defenseStat, defender.nature);
    if (defender.boosts[defenseStat] === 0 ||
        (isCritical && defender.boosts[defenseStat] > 0) ||
        move.ignoreDefensive) {
        defense = defender.rawStats[defenseStat];
    }
    else if (attacker.hasAbility('Unaware', 'Sword of Damnation', 'Contempt')) {
        defense = defender.rawStats[defenseStat];
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    else {
        defense = defender.stats[defenseStat];
        desc.defenseBoost = defender.boosts[defenseStat];
    }
    if (field.hasWeather('Sand') && defender.hasType('Rock') && !hitsPhysical) {
        if (defender.hasAbility('Sand Guard', 'Sepia Lens')) {
            defense = (0, util_2.pokeRound)((defense * 2));
        }
        else {
            defense = (0, util_2.pokeRound)((defense * 3) / 2);
        }
        desc.weather = field.weather;
    }

    if (defender.hasAbility('Guardian Coat') && move.flags.contact) {
        defense = (0, util_2.pokeRound)(defense * 1.2);
    }
    if (field.hasWeather('Hail', 'Snow') && defender.hasType('Ice') && hitsPhysical) {
        defense = (0, util_2.pokeRound)((defense * 3) / 2);
        desc.weather = field.weather;
    }

    var dfMods = calculateDfModsSMSSSV(gen, attacker, defender, move, field, desc, isCritical, !!hitsPhysical);
    return (0, util_2.OF16)(Math.max(1, (0, util_2.pokeRound)((defense * (0, util_2.chainMods)(dfMods, 410, 131072)) / 4096)));
}
exports.calculateDefenseSMSSSV = calculateDefenseSMSSSV;
function calculateDfModsSMSSSV(gen, attacker, defender, move, field, desc, isCritical, hitsPhysical) {
    var _a;
    if (isCritical === void 0) { isCritical = false; }
    if (hitsPhysical === void 0) { hitsPhysical = false; }
    var dfMods = [];
    if (defender.hasAbility('Overcoat') && move.category == 'Special') {
        dfMods.push(4915);
    }
    if ((defender.hasAbility('Immunity') && move.type == 'Poison') ||
        (defender.hasAbility('Water Compaction') && move.type == 'Water')) {
        dfMods.push(8192);
    }
    if (field.hasWeather('Fog') && defender.hasType('Ghost', 'Psychic')) {
        dfMods.push(4915);
    }
    if (defender.hasAbility('Marvel Scale') && defender.status && hitsPhysical) {
        dfMods.push(6144);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    else if (defender.named('Cherrim') &&
        defender.hasAbility('Flower Gift') &&
        field.hasWeather('Sun', 'Harsh Sunshine') &&
        !hitsPhysical) {
        dfMods.push(6144);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
        desc.weather = field.weather;
    }
    else if (field.defenderSide.isFlowerGift &&
        field.hasWeather('Sun', 'Harsh Sunshine') &&
        !hitsPhysical) {
        dfMods.push(6144);
        desc.weather = field.weather;
        desc.isFlowerGiftDefender = true;
    }
    else if (defender.hasAbility('Grass Pelt') &&
        field.hasTerrain('Grassy') &&
        hitsPhysical) {
        dfMods.push(6144);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Fur Coat') && hitsPhysical) {
        dfMods.push(8192);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Apple Enlightenment') && hitsPhysical) {
        dfMods.push(8192);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    var isSwordOfRuinActive = (attacker.hasAbility('Sword Of Ruin', 'Sword of Damnation') || field.isSwordOfRuin) &&
        !defender.hasAbility('Sword Of Ruin', 'Sword of Damnation');
    var isBeadsOfRuinActive = (attacker.hasAbility('Beads Of Ruin') || field.isBeadsOfRuin) &&
        !defender.hasAbility('Beads Of Ruin');
    if ((isSwordOfRuinActive && hitsPhysical) ||
        (isBeadsOfRuinActive && !hitsPhysical)) {
        if (attacker.hasAbility('Sword Of Ruin', 'Sword of Damnation') || attacker.hasAbility('Beads Of Ruin')) {
            desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
        }
        else {
            desc[hitsPhysical ? 'isSwordOfRuin' : 'isBeadsOfRuin'] = true;
        }
        dfMods.push(3072);
    }
    if ((defender.hasAbility('Protosynthesis') &&
        (field.hasWeather('Sun') || attacker.hasItem('Booster Energy'))) ||
        (defender.hasAbility('Greater Spirit') &&
            (field.hasWeather('Fog'))) ||
        (defender.hasAbility('Quark Drive') &&
            (field.hasTerrain('Electric') || attacker.hasItem('Booster Energy')))) {
        if ((hitsPhysical && (0, util_2.getQPBoostedStat)(defender) === 'def') ||
            (!hitsPhysical && (0, util_2.getQPBoostedStat)(defender) === 'spd')) {
            desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
            dfMods.push(5325);
        }
    }
    if ((defender.hasItem('Eviolite') && ((_a = gen.species.get((0, util_1.toID)(defender.name))) === null || _a === void 0 ? void 0 : _a.nfe)) ||
        (!hitsPhysical && defender.hasItem('Assault Vest')) ||
        (hitsPhysical && defender.hasItem('Tactical Vest'))) {
        dfMods.push(6144);
        desc.defenderItem = defender.item;
    }
    else if ((defender.hasItem('Metal Powder') && defender.named('Ditto') && hitsPhysical) ||
        (defender.hasItem('Deep Sea Scale') && defender.named('Clamperl') && !hitsPhysical)) {
        dfMods.push(8192);
        desc.defenderItem = defender.item;
    }
    return dfMods;
}
exports.calculateDfModsSMSSSV = calculateDfModsSMSSSV;
function calculateFinalModsSMSSSV(gen, attacker, defender, move, field, desc, isCritical, typeEffectiveness, hitsPhysical) {
    if (isCritical === void 0) { isCritical = false; }
    var finalMods = [];
    if (field.hasWeather('Sand') && defender.hasAbility('Dune Terror')) {
        finalMods.push(2662);
        desc.weather = field.weather;
    }
    if (field.defenderSide.isReflect && hitsPhysical &&
        !isCritical && !field.defenderSide.isAuroraVeil) {
        finalMods.push(field.gameType !== 'Singles' ? 2732 : 2048);
        desc.isReflect = true;
    }
    else if (field.defenderSide.isLightScreen && !hitsPhysical &&
        !isCritical && !field.defenderSide.isAuroraVeil) {
        finalMods.push(field.gameType !== 'Singles' ? 2732 : 2048);
        desc.isLightScreen = true;
    }
    if (field.defenderSide.isAuroraVeil && !isCritical) {
        finalMods.push(field.gameType !== 'Singles' ? 2732 : 2048);
        desc.isAuroraVeil = true;
    }
    if (attacker.hasAbility('Overcharge', 'Depravity') && defender.hasType('Electric') &&
        move.type === 'Electric') {
        finalMods.push(8192);
    }
    if (attacker.hasAbility('Hydro Circuit')) {
        if (move.type === 'Electric') {
            finalMods.push(6144);
        }
        if (move.type === 'Water') {
            move.drain = [1, 4];
        }
    }
    if (attacker.hasAbility('Pretty Princess') && (0, util_2.checkLoweredStats)(defender)) {
        finalMods.push(6144);
    }
    if (attacker.hasAbility('Raging Moth') && move.hasType('Fire')) {
        finalMods.push(5734);
    }
    if (defender.hasAbility('Raw Wood') && move.hasType('Grass')) {
        finalMods.push(2048);
    }
    if (attacker.hasAbility('Raw Wood') && move.hasType('Grass')) {
        finalMods.push(4915);
    }
    if (attacker.hasAbility('Neuroforce', 'Calculative') && typeEffectiveness > 1) {
        finalMods.push(5530);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (attacker.hasAbility('Tinted Lens', 'Bone Zone', 'Sepia Lens', 'Drake Of Rage') && typeEffectiveness < 1) {
        finalMods.push(8192);
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (defender.isDynamaxed && move.named('Dynamax Cannon', 'Behemoth Blade', 'Behemoth Bash')) {
        finalMods.push(8192);
    }
    if (defender.hasAbility('Multiscale', 'Shadow Shield', 'Ominous Shroud') &&
        defender.curHP() === defender.maxHP() &&
        (!field.defenderSide.isSR && (!field.defenderSide.spikes || defender.hasType('Flying')) ||
            defender.hasItem('Heavy-Duty Boots')) && !attacker.hasAbility('Parental Bond (Child)', 'Hyper Aggressive 2nd', 'Multi Headed 2nd', 'Multi Headed 3rd', 'Primal Maw 2nd', 'Devourer 2nd', 'Raging Boxer 2nd', 'Steel Beetle 2nd', 'Dual Wield 2nd', 'Raging Goddess 2nd', 'Balloon Blitz 2nd', 'Frenzied Phantom 2nd', 'Metallic Jaws 2nd')) {
        finalMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (attacker.hasAbility('Long Reach') && !move.flags.contact) {
        finalMods.push(4915);
    }
    else if (attacker.hasAbility('Long Reach')) {
        move.flags.contact = 0;
    }
    if (attacker.hasAbility('Big Pecks') && move.flags.contact) {
        finalMods.push(5325);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Liquified')) {
        if (move.flags.contact) {
            finalMods.push(2048);
            desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
        }
        if (move.hasType('Water')) {
            finalMods.push(8192);
            desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
        }
    }
    if (defender.hasAbility('Fluffy', 'Puffy') && move.flags.contact ||
        (defender.hasAbility('Furnace') && move.hasType('Fire'))) {
        finalMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Rivalry') && ![attacker.gender, defender.gender].includes('N')) {
        if (attacker.gender != defender.gender) {
            finalMods.push(3072);
        }
        desc.attackerAbility = (0, util_2.addSpacedStr)(desc.attackerAbility, attacker.descAbility);
    }
    if (defender.hasAbility('Parry') && move.flags.contact) {
        finalMods.push(3277);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbilityActive('Madness Enhancement')) {
        finalMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Fluffiest') && move.flags.contact ||
        (defender.hasAbility('Furnace') && move.hasType('Fire'))) {
        finalMods.push(1024);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if ((defender.hasAbility('Ice Scales') && !hitsPhysical)) {
        finalMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if ((defender.hasAbility('Punk Rock', 'Sludgy Mix') && move.flags.sound)) {
        finalMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if ((defender.hasAbility('Bass Boosted') && move.flags.sound)) {
        finalMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if ((defender.hasAbility('Fire Scales') && !hitsPhysical)) {
        finalMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if ((defender.hasAbility('Chrome Coat') && !hitsPhysical) || defender.hasAbility('Terastal Treasure')) {
        finalMods.push(2458);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Solid Rock', 'Filter', 'Prism Armor', 'Permafrost', 'Refrigerator', 'Flame Shield') &&
        typeEffectiveness > 1) {
        finalMods.push(2662);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Thick Skin') &&
        typeEffectiveness > 1) {
        finalMods.push(2867);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Lead Coat') && hitsPhysical) {
        finalMods.push(2458);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Battle Armor')) {
        finalMods.push(3277);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Crust Coat')) {
        finalMods.push(3277);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbilityActive('Stall', 'Breakwater')) {
        finalMods.push(2867);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Shell Armor')) {
        finalMods.push(3277);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Faraday Cage')) {
        finalMods.push(3277);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Dream State')) {
        finalMods.push(3277);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Ultra Instinct')) {
        finalMods.push(3277);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Magma Armor') && move.hasType('Water', 'Ice')) {
        finalMods.push(2867);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Primal Armor') && typeEffectiveness > 1) {
        finalMods.push(2048);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Prism Scales') && !hitsPhysical) {
        finalMods.push(2867);
    }
    if (defender.hasAbility('Christmas Spirit') && field.hasWeather('Hail')) {
        finalMods.push(2048);
    }
    if (defender.hasAbility('Nocturnal') && move.hasType('Dark', 'Fairy')) {
        finalMods.push(3072);
    }
    if (attacker.hasAbility('Nocturnal') && move.hasType('Dark')) {
        finalMods.push(5120);
    }
    if (attacker.hasAbility('Dune Terror') && move.hasType('Ground')) {
        finalMods.push(4915);
    }
    if (field.defenderSide.isFriendGuard) {
        finalMods.push(2048);
        desc.isFriendGuard = true;
    }
    if (defender.hasAbility('Fluffy', 'Puffy') && move.hasType('Fire')) {
        finalMods.push(8192);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (defender.hasAbility('Fluffiest') && move.hasType('Fire')) {
        finalMods.push(16384);
        desc.defenderAbility = (0, util_2.addSpacedStr)(desc.defenderAbility, defender.descAbility);
    }
    if (attacker.hasAbility('Giant Wings', 'Imposing Wings', 'Wind Rage') && move.flags.wind) {
        finalMods.push(5325);
    }
    if ((attacker.hasAbility('Electric Burst') && move.hasType('Electric')) ||
        (attacker.hasAbility('Infernal Rage') && move.hasType('Fire'))) {
        finalMods.push(5530);
    }
    if (attacker.hasAbility('Marine Apex') && (defender.hasAbility('Infiltrator') || defender.hasType('Water'))) {
        finalMods.push(6144);
    }
    if (attacker.hasAbility('Nosferatu') && move.flags.contact) {
        finalMods.push(4915);
    }
    if ((attacker.hasAbility('Lumberjack') && defender.hasType('Grass')) || (attacker.hasAbility('Dragonslayer') && defender.hasType('Dragon')) ||
        (attacker.hasAbility('Fae Hunter') && defender.hasType('Fairy')) || (attacker.hasAbility('Monster Hunter') && defender.hasType('Dark'))) {
        finalMods.push(6144);
    }
    if (attacker.hasItem('Expert Belt') && typeEffectiveness > 1 && !move.isZ) {
        finalMods.push(4915);
        desc.attackerItem = attacker.item;
    }
    else if (attacker.hasItem('Life Orb')) {
        finalMods.push(5325);
        desc.attackerItem = attacker.item;
    }
    else if (attacker.hasItem('Metronome') && move.timesUsedWithMetronome >= 1) {
        var timesUsedWithMetronome = Math.floor(move.timesUsedWithMetronome);
        if (timesUsedWithMetronome <= 4) {
            finalMods.push(4096 + timesUsedWithMetronome * 819);
        }
        else {
            finalMods.push(8192);
        }
        desc.attackerItem = attacker.item;
    }
    if (attacker.hasAbility('Arcane Force') && typeEffectiveness > 1 && !move.isZ) {
        finalMods.push(4506);
    }
    if (attacker.hasAbility('Winged King') && typeEffectiveness > 1 && !move.isZ) {
        finalMods.push(5448);
    }
    if (attacker.hasAbility('Iron Serpent') && typeEffectiveness > 1 && !move.isZ) {
        finalMods.push(5448);
    }
    if (move.hasType((0, items_1.getBerryResistType)(defender.item)) &&
        (typeEffectiveness > 1 || move.hasType('Normal')) &&
        !attacker.hasAbility('Unnerve', 'As One', 'As One Ice Rider', 'As One Shadow Rider')) {
        if (defender.hasAbility('Ripen')) {
            finalMods.push(1024);
        }
        else {
            finalMods.push(2048);
        }
        desc.defenderItem = defender.item;
        defender.item = "";
    }
    if (defender.hasAbility('Lethargy') || defender.hasAbility('Arctic Fur')) {
        finalMods.push(2662);
    }
    if (defender.hasAbility('Fossilized') && move.hasType('Rock')) {
        finalMods.push(2048);
    }
    return finalMods;
}
exports.calculateFinalModsSMSSSV = calculateFinalModsSMSSSV;
function hasTerrainSeed(pokemon) {
    return pokemon.hasItem('Electric Seed', 'Misty Seed', 'Grassy Seed', 'Psychic Seed');
}
function calcContribution(gen, attacker, move, field) {
    if (attacker.hasAbility('Pyro Shells') && move.flags.pulse) {
        var child = attacker.clone();
        child.remplaceAbility('Pyro Shells', '');
        var childMove = new move_1.Move(gen, 'Outburst');
        childMove.bp = 50;
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Thundercall') && move.hasType('Electric')) {
        var child = attacker.clone();
        child.remplaceAbility('Thundercall', '');
        var childMove = new move_1.Move(gen, 'Smite');
        childMove.bp = 24;
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Volcano Rage') && move.hasType('Fire')) {
        var child = attacker.clone();
        child.remplaceAbility('Volcano Rage', '');
        var childMove = new move_1.Move(gen, 'Eruption');
        childMove.bp = 50;
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Two Step') && move.flags.dance) {
        var child = attacker.clone();
        child.remplaceAbility('Two Step', '');
        var childMove = new move_1.Move(gen, 'Revelation Dance');
        childMove.bp = 50;
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('High Tide') && move.hasType('Water')) {
        var child = attacker.clone();
        child.remplaceAbility('Surf', '');
        var childMove = new move_1.Move(gen, 'Surf');
        childMove.bp = 50;
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Frost Burn') && move.hasType('Fire')) {
        var child = attacker.clone();
        child.remplaceAbility('Frost Burn', '');
        var childMove = new move_1.Move(gen, 'Ice Beam');
        childMove.bp = 40;
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Hyper Aggressive', 'Raging Goddess', 'Balloon Blitz', 'Frenzied Phantom')) {
        var child = attacker.clone();
        child.remplaceAbility('Hyper Aggressive', 'Hyper Aggressive 2nd');
        child.remplaceAbility('Frenzied Phantom', 'Frenzied Phantom 2nd');
        child.remplaceAbility('Raging Goddess', 'Raging Goddess 2nd');
        child.remplaceAbility('Balloon Blitz', 'Balloon Blitz 2nd');
        var childMove = move.clone();
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Multi Headed')) {
        var child = attacker.clone();
        child.remplaceAbility('Multi Headed', 'Multi Headed 2nd');
        var childMove = move.clone();
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Multi Headed 2nd') && attacker.heads === 3) {
        var child = attacker.clone();
        child.remplaceAbility('Multi Headed 2nd', 'Multi Headed 3rd');
        var childMove = move.clone();
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Raging Boxer', 'Steel Beetle') && move.flags.punch) {
        var child = attacker.clone();
        child.remplaceAbility('Raging Boxer', 'Raging Boxer 2nd');
        child.remplaceAbility('Steel Beetle', 'Steel Beetle 2nd');
        var childMove = move.clone();
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Primal Maw', 'Devourer', 'Metallic Jaws') && move.flags.bite) {
        var child = attacker.clone();
        child.remplaceAbility('Primal Maw', 'Primal Maw 2nd');
        child.remplaceAbility('Devourer', 'Devourer 2nd');
        child.remplaceAbility('Metallic Jaws', 'Metallic Jaws 2nd');
        var childMove = move.clone();
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Dual Wield') && move.flags.pulse) {
        var child = attacker.clone();
        child.remplaceAbility('Dual Wield', 'Dual Wield 2nd');
        var childMove = move.clone();
        return {
            child: child,
            move: childMove
        };
    }
    else if (attacker.hasAbility('Cheap Tactics') && field.attackerSide.isSwitching === 'in') {
        var child = attacker.clone();
        child.remplaceAbility('Cheap Tactics', 'Cheap Tactics 2nd');
        var childMove = new move_1.Move(gen, 'Scratch');
        return {
            child: child,
            move: childMove
        };
    }
    return undefined;
}
function getPriorityAdditionnal(attacker, move, defender) {
    var add = 0;
    if (attacker.hasAbility('Triage') && move.drain) {
        add += 1;
    }
    if (attacker.hasAbility('Gale Wings') && move.hasType('Flying') &&
        attacker.curHP() === attacker.maxHP()) {
        add += 1;
    }
    if (attacker.hasAbility('Presto') && move.flags.sound &&
        attacker.curHP() === attacker.maxHP()) {
        add += 1;
    }
    if (attacker.hasAbility('Pretty Privilege') && move.hasType('Fairy') &&
        attacker.curHP() === attacker.maxHP()) {
        add += 1;
    }
    if (attacker.hasAbility('Flaming Soul', 'Flame Bubble') && move.hasType('Fire') &&
        attacker.curHP() === attacker.maxHP()) {
        add += 1;
    }
    if (attacker.hasAbility('Stygian Rush') && move.hasType('Dark') &&
        attacker.curHP() === attacker.maxHP()) {
        add += 1;
    }
    if (attacker.hasAbility('Tidal Rush') && move.hasType('Water') &&
        attacker.curHP() === attacker.maxHP()) {
        add += 1;
    }
    if (attacker.hasAbility('Early Grave') && move.hasType('Ghost') &&
        attacker.curHP() === attacker.maxHP()) {
        add += 1;
    }
    if (attacker.hasAbility('Volt Rush') && move.hasType('Electric') &&
        attacker.curHP() == attacker.maxHP()) {
        add += 1;
    }
    if (attacker.hasAbility('Blitz Boxer') && move.flags.punch &&
        attacker.curHP() == attacker.maxHP()) {
        add += 1;
    }
    if (attacker.hasAbility('Opportunist') && (defender.curHP() / defender.maxHP() < 0.5) &&
        !['allAdjacent', 'allAdjacentFoes'].includes(move.target)) {
        add += 1;
    }
    if (attacker.hasAbility('Frozen Soul') && move.hasType('Ice') &&
        attacker.curHP() === attacker.maxHP()) {
        add += 1;
    }
    if (attacker.hasAbility('Perfectionist') && move.bp < 25) {
        add += 1;
    }
    if (attacker.hasAbilityActive('Coil Up') && move.flags.bite) {
        add += 1;
    }
    return add;
}
function abilityBoosts(attacker, move, basePower) {
    var bpMods = [];
    if (attacker.hasAbility('Technician', "Kunoichi's Blade") && basePower <= 60) {
        bpMods.push(6144);
    }
    if (attacker.hasAbility('Flare Boost') &&
        attacker.hasStatus('brn') && move.category === 'Special')
        bpMods.push(6144);
    if (attacker.hasAbility('Toxic Boost') &&
        attacker.hasStatus('psn', 'tox') && move.category === 'Physical')
        bpMods.push(6144);
    if (attacker.hasAbility('Mega Launcher', 'Master Hand', 'Super Scope', 'Gunman') && move.flags.pulse)
        bpMods.push(5325);
    if (attacker.hasAbility('Strong Jaw', 'Devourer', 'Devourer 2nd') && move.flags.bite)
        bpMods.push(5325);
    if (attacker.hasAbility('Shocking Maw') && move.flags.bite)
        bpMods.push(5325);
    if (attacker.hasAbility('Flaming Maw') && move.flags.bite)
        bpMods.push(5325);
    if (attacker.hasAbility('Rocky Payload') && (move.flags["throw"] || move.hasType('Rock')))
        bpMods.push(6144);
    if (attacker.hasAbility('Archer') && move.flags.arrow)
        bpMods.push(5325);
    if (attacker.hasAbility('Mythical Arrows') && move.flags.arrow)
        bpMods.push(5325);
    if (attacker.hasAbility('Super Slammer') && move.flags.hammer)
        bpMods.push(5325);
    if (attacker.hasAbility('Steely Spirit') && move.hasType('Steel'))
        bpMods.push(5325);
    if (attacker.hasAbility('Steelworker', 'Atomic Punch') && move.hasType('Steel'))
        bpMods.push(5325);
    if (attacker.hasAbility('Airborne') && move.hasType('Flying'))
        bpMods.push(5325);
    if (attacker.hasAbility('Striker') && move.flags.kick)
        bpMods.push(5325);
    if (attacker.hasAbility('Twinkle Toes') && move.flags.kick)
        bpMods.push(5325);
    if (attacker.hasAbility('Combat Specialist') && move.flags.kick)
        bpMods.push(5325);
    if (attacker.hasAbility('Samba') && move.flags.kick)
        bpMods.push(5325);
    if (attacker.hasAbility('Keen Edge', "Blade's Essence") && move.flags.slicing)
        bpMods.push(5325);
    if (attacker.hasAbility('Mystic Blades', "Blade's Essence") && move.flags.slicing)
        bpMods.push(5325);
    if (attacker.hasAbility('Blademaster') && move.flags.slicing)
        bpMods.push(5325);
    if (attacker.hasAbility('Power Edge') && move.flags.slicing)
        bpMods.push(5325);
    if (attacker.hasAbility('Mighty Horn', "Hunter's Horn", 'Energy Horn', 'Venom Crown') && move.flags.horn)
        bpMods.push(5325);
    if (attacker.hasAbility('Field Explorer') && move.flags.field)
        bpMods.push(6144);
    return bpMods;
}
//# sourceMappingURL=gen789.js.map