
$(document).ready(function() {
   $('#save-upload').on('change', parseFile); 
})


// LITTLE ENDIAN !
function readNbytes(bof, nBytes, bytes){
    var resBytes = bytes[bof];
    for (var i = 1; i< nBytes; i++){
        resBytes = resBytes | (bytes[bof + i] << i*8)
    }
    return (resBytes >>> 0)
}

function readTeamSize(ofsSector, bytes){
    let oft = ofsSector + 564;
    let sizeTeam = readNbytes(oft,4,bytes);
    return sizeTeam; 
}

function readBox(ofs ,bytes, missedBytes, remainingUnread, maxOfs) {
    var monList = []
    if (missedBytes){
        var nbToFill = 80 - missedBytes.length
        var bytesFilling = bytes.slice(ofs, ofs + nbToFill)
        var mergedBytes = new Uint8Array(80)
        mergedBytes.set(missedBytes);
        mergedBytes.set(bytesFilling, missedBytes.length);
        ofs += nbToFill;
        var mon = readMonBox(0, mergedBytes);
        if (mon) monList.push(createGEN3mon(mon))
        if (! remainingUnread--) return {list: monList, mof: null, remainingUnread: 0};
    }
    for (; (ofs + 80) <= maxOfs; ofs+=80){
        var mon = readMonBox(ofs, bytes);
        if (mon) monList.push(createGEN3mon(mon))
        if (! remainingUnread--) return {list: monList, mof: null, remainingUnread: 0};
    }
    if (ofs != maxOfs) {
        missedBytes = bytes.slice(ofs, maxOfs)
    } else {
        missedBytes = null
    }
    return { list: monList, mof: missedBytes, remainingUnread: remainingUnread}
}

function getFooterData(startOffset, endOffset, bytes) {
    var SIZE_SECTOR = 4096;
    var TI, //TEAM / ITEM
        SI, //Save index
        PC = [], // PC
        GS = [] // Game Sector testing purpose
        
    for (var ofs = startOffset; ofs < endOffset; ofs += SIZE_SECTOR){
        var off = ofs + 4084 //offset footer
        var sID = readNbytes(off,2,bytes)//Sector ID
        if (sID == 2){
            TI = ofs
        } else if (sID >= 5){
            PC[sID - 5] = 0x9000
        } else {
            GS[sID] = ofs
        }
        var CS = readNbytes(off +2 ,2,bytes); //Checksum
        var SG = readNbytes(off +4 ,2,bytes); //Signature
        SI =readNbytes(off +8 ,2,bytes); //Save Index
    }
    if (SI == 65535) SI = 0; //javascript aint build for binary
    return {
        SI: SI,
        TI: TI,
        PC: PC,
        GS: GS,
    }
}
function readBit(num, startPos, numBits) {
    // Create a mask to extract the N bits
    const mask = (1 << numBits) - 1;
    
    // Extract the N bits from the specified position
    const extractedBits = (num >> startPos) & mask;

    return extractedBits;
}


function readPokemonBox(start, bytes){
    const mon = {
        moves: [],
        pp: [],
    }
    mon.personality = readNbytes(start, 4 ,bytes)
    mon.otId = readNbytes(start + 4, 4 ,bytes)
    
    const word5 = readNbytes(start + 8, 4, bytes)
    mon.moves[0] = readBit(word5, 0, 11)
    mon.experience = readBit(word5, 11, 21)
    
    const word6 = readNbytes(start + 12, 4, bytes)
    mon.moves[1] = readBit(word6, 0, 11)
    mon.moves[2] = readBit(word6, 11, 11)
    mon.friendship = readBit(word6, 22, 8)
    mon.isEventMon = readBit(word6, 30, 1)
    mon.isAlpha = readBit(word6, 31, 1)

    const word7 = readNbytes(start + 16, 4, bytes)
    mon.species = readBit(word7, 0, 16)

    mon.moves[3] = readBit(word7, 16, 11)
    mon.hptype = readBit(word7, 27, 5)

    const word8 = readNbytes(start + 20, 4, bytes)
    mon.heldItem =  readBit(word8, 0, 10)
    mon.nature = readBit(word8, 10, 5)
    mon.isEgg = readBit(word8, 15, 1)
    mon.language = readBit(word8, 16, 3)
    mon.metLevel = readBit(word8, 19, 7)
    mon.isShiny = readBit(word8, 26, 2)
    mon.maxShiny = readBit(word8, 28, 2)
    mon.ability = readBit(word8, 30, 2)

    mon.hpEV = readNbytes(start + 24, 1, bytes)
    mon.attackEV = readNbytes(start + 25, 1, bytes)
    mon.defenseEV = readNbytes(start + 26, 1, bytes)
    mon.speedEV = readNbytes(start + 27, 1, bytes)
    mon.spAttackEV = readNbytes(start + 28, 1, bytes)
    mon.spDefenseEV = readNbytes(start + 29, 1, bytes)

    mon.metLocation = readNbytes(start + 30, 1, bytes)
    //mon.OTName = bytes.slice(start + 31, start + 38)
    //mon.nick = bytes.slice(start + 39, start + 51)
    const endBit =  readNbytes(start + 51, 1, bytes)
    mon.pokeball = readBit(endBit, 0, 5)
    mon.speedDown = readBit(endBit, 6, 1)
    mon.otGender = readBit(endBit, 7, 1)
    mon.isDisabled = readBit(endBit, 8, 1)

    mon.markings = readNbytes(start + 52, 1, bytes)
    return mon
}

function readSubStructure(OTID, personV, start, bytes){
    var key = OTID ^ personV;
    var substructSelector = [
		[0, 1, 2, 3],
		[0, 1, 3, 2],
		[0, 2, 1, 3],
		[0, 3, 1, 2],
		[0, 2, 3, 1],
		[0, 3, 2, 1],
		[1, 0, 2, 3],
		[1, 0, 3, 2],
		[2, 0, 1, 3],
		[3, 0, 1, 2],
		[2, 0, 3, 1],
		[3, 0, 2, 1],
		[1, 2, 0, 3],
		[1, 3, 0, 2],
		[2, 1, 0, 3],
		[3, 1, 0, 2],
		[2, 3, 0, 1],
		[3, 2, 0, 1],
		[1, 2, 3, 0],
		[1, 3, 2, 0],
		[2, 1, 3, 0],
		[3, 1, 2, 0],
		[2, 3, 1, 0],
		[3, 2, 1, 0],
    ]
    var selected = substructSelector[(personV >>> 0) % 24]
    var ss0 = [0,0]
	var ss1 = [0,0]
	var ss2 = [0,0]
	var ss3 = [0,0]
    for (var i = 0; i<3; i++){
        ss0[i] = readNbytes(start + 32 + selected[0] * 12 + i * 4 ,4, bytes) ^ key;
        ss1[i] = readNbytes(start + 32 + selected[1] * 12 + i * 4 ,4, bytes) ^ key;
        ss2[i] = readNbytes(start + 32 + selected[2] * 12 + i * 4 ,4, bytes) ^ key;
        ss3[i] = readNbytes(start + 32 + selected[3] * 12 + i * 4 ,4, bytes) ^ key;
    }
    //var 
    var mon = {};

    mon.species = ss0[0] & 0xFFFF;
	mon.heldItem = ss0[0] >> 16;
	mon.experience = ss0[1];
	mon.ppBonuses = ss0[2] & 0xFF;
	mon.friendship = (ss0[2] >> 8) & 0xFF;

    mon.moves = [
		ss1[0] & 0xFFFF,
		ss1[0] >> 16,
		ss1[1] & 0xFFFF,
		ss1[1] >> 16
    ]
	mon.pp = [
		ss1[2] & 0xFF,
		(ss1[2] >> 8) & 0xFF,
		(ss1[2] >> 16) & 0xFF,
		(ss1[2] >> 24) & 0xFF
    ]

    mon.hpEV = ss2[0] & 0xFF
	mon.attackEV = (ss2[0] >> 8) & 0xFF
	mon.defenseEV = (ss2[0] >> 16) & 0xFF
	mon.speedEV = (ss2[0] >> 24) & 0xFF
	mon.spAttackEV = ss2[1] & 0xFF
	mon.spDefenseEV = (ss2[1] >> 8) 
    
	mon.cool = (ss2[1] >> 16) & 0xFF
	mon.beauty = (ss2[1] >> 24) & 0xFF
	mon.cute = ss2[2] & 0xFF
	mon.smart = (ss2[2] >> 8) & 0xFF
	mon.tough = (ss2[2] >> 16) & 0xFF
	mon.sheen = (ss2[2] >> 24) & 0xFF
	mon.pokerus = ss3[0] & 0xFF
	mon.metLocation = (ss3[0] >> 8) & 0xFF

	let flags = ss3[0] >> 16
	mon.metLevel = flags & 0x7F
	mon.metGame = (flags >> 7) & 0xF
    mon.hiddenNature = (flags >> 10);
	mon.otGender = (flags >> 15) & 0x1
    flags = ss3[1]
	mon.hpIV = flags >> 1 & 0x1F
	mon.attackIV = (flags >> 5) & 0x1F
	mon.defenseIV = (flags >> 10) & 0x1F
	mon.speedIV = (flags >> 15) & 0x1F
	mon.spAttackIV = (flags >> 20) & 0x1F
	mon.spDefenseIV = (flags >> 25) & 0x1F
    mon.isEgg = (flags >> 30) & 0x1
    mon.zeroSpe = (flags >> 31) & 0x1
    
    flags = ss3[2]
    mon.pokeball = flags & 0xF;
    mon.altAbility = (flags >> 5) & 3;
	mon.coolRibbon = flags & 7
	mon.beautyRibbon = (flags >> 3) & 7
	mon.cuteRibbon = (flags >> 6) & 7
	mon.smartRibbon = (flags >> 9) & 7
	mon.toughRibbon = (flags >> 12) & 7
	mon.championRibbon = (flags >> 15) & 1
	mon.winningRibbon = (flags >> 16) & 1
	mon.victoryRibbon = (flags >> 17) & 1
	mon.artistRibbon = (flags >> 18) & 1
	mon.effortRibbon = (flags >> 19) & 1
	mon.marineRibbon = (flags >> 20) & 1
	mon.landRibbon = (flags >> 21) & 1
	mon.skyRibbon = (flags >> 22) & 1
	mon.countryRibbon = (flags >> 23) & 1
	mon.nationalRibbon = (flags >> 24) & 1
	mon.earthRibbon = (flags >> 25) & 1
	mon.worldRibbon = (flags >> 26) & 1
    return mon
}

//80 bytes
function readMonBox(start, bytes){
    var personality = readNbytes(start, 4, bytes);
    if (!personality) return false
    var otId = readNbytes(start + 4, 4, bytes);
    //var nickName = readNbytes(start + 8, 10, bytes);
    //var lang = readNbytes(start + 18, 1, bytes);
    //var eggName = readNbytes(start + 19, 1, bytes);
    //var OTname = readNbytes(start + 20, 7, bytes);
    //var markings = readNbytes(start + 27, 1, bytes);
    //var checksum = readNbytes(start + 28, 2, bytes);
    //var wtf = readNbytes(start + 30, 2, bytes);
    //var data = readNbytes(start + 32, 48, bytes);
    //var mon = readSubStructure(otId, personality, start,bytes);

    const mon = readPokemonBox(start, bytes)
    mon.personality = personality;
    mon.otId = otId;
    //Box trick
    mon.level = lvlCap //getGEN3level(mon.experience, mon.species);
    return mon
}
//100 bytes
function readMonParty(start, bytes){
    const mon = readPokemonBox(start, bytes)
    mon.pp = [
        readNbytes(start + 53, 1, bytes),
        readNbytes(start + 54, 1, bytes),
        readNbytes(start + 55, 1, bytes),
        readNbytes(start + 56, 1, bytes)
    ]

    mon.status = readNbytes(start + 57, 4, bytes);
    mon.level = readNbytes(start + 61, 1, bytes);
    console.log(mon.level)
    mon.mail = readNbytes(start + 62, 1, bytes);
    mon.liveStat = {
        currentHP: readNbytes(start + 64, 2, bytes),
        totalHP: readNbytes(start + 66, 2, bytes),
        atk : readNbytes(start + 68, 2, bytes),
        def : readNbytes(start + 70, 2, bytes),
        spe : readNbytes(start + 72, 2, bytes),
        spa : readNbytes(start + 74, 2, bytes),
        spd : readNbytes(start + 76, 2, bytes)
    }
    return mon
}
function slowCurve(n){
    return Math.floor((5*(n**3))/4)
}
function fastCurve(n){
    return Math.floor((4*(n**3))/5)
}
function medfastCurve(n){
    return n**3
}
function medslowCurve(n){
    return Math.floor((6 * (n)**3) / 5) - (15 * (n)**2) + (100 * n) - 140
}
function erraticCurve(n){
    if (n<=50) return Math.floor(((100 - n)*n**3)/50)
    if (n<=68) return Math.floor(((150 - n)*n**3)/100)
    if (n<=98) return Math.floor(Math.floor((1911 - 10 * n) / 3) * n**3 / 500)
    return Math.floor((160 - n) * n**3 / 100)
}
function flutuatingCurve(n){
    if (n<15) return Math.floor((Math.floor((n + 1) / 3) + 24) * n**3 / 50)
	if (n<=36) return Math.floor((n + 14) * n**3 / 50)
	return Math.floor((Math.floor(n / 2) + 32) * n**3 / 50)
}
const curveMap = {
    'GROWTH_MEDIUM_SLOW': medslowCurve,
    'GROWTH_FAST': fastCurve,
    'GROWTH_MEDIUM_FAST': medfastCurve,
    'GROWTH_SLOW': slowCurve,
    'GROWTH_ERRATIC': erraticCurve,
}
function getGEN3expRequired(species,level) {
	const fn  = curveMap[gameData.growT[species.stats.grow]]
    if (!fn){
        flutuatingCurve(level)
    } else {
        fn(level)
    }
}

function getGEN3level(exp, species){
    var level = 1
	while (exp >= getGEN3expRequired(species,level+1)) {
        level=level+1
    }
	return level
}

function getGEN3Ability(mon){
    return mon.altAbility
}
function getRandomAbi(mon, ability){
    //wrong will not correct because meh flemme
    ability = gameData.abilities.indexOf(ability)
    var randomizedAbility = (ability + mon.species + mon.personality) % abilities.length 
    randomizedAbility += 1
    return gameData.abilities[randomizedAbility]
}

function getGEN3Nature(mon){
    //mon.hiddenNature = mon.personality % 25;
    if (mon.hiddenNature == 26){
        return gameData.natureT[mon.personality % 25]
    }
    return gameData.natureT[mon.hiddenNature]
}
const HPTYPE = [
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Steel",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
]
function getGEN3HP(mon) {
    var hptype = ((mon.hpIV%2 + (2*(mon.attackIV%2))+(4*(mon.defenseIV%2))+(8*(mon.speedIV%2))+(16*(mon.spAttackIV%2))+(32*(mon.spDefenseIV%2)))*5)/21 
    return HPTYPE[Math.floor(hptype)]
}
function createGEN3mon(mon){
    var poke = {};
    poke.person = mon.personality;
    const itemsLen = gameData.items.length
    for (let i = 0; i < itemsLen; i++){
        const item = gameData.items[i]
        if (mon.heldItem == item.id){
            poke.item = i
            break
        }
    }
    const speciesLen = gameData.species.length
    for (let i =0; i < speciesLen; i++){
        const specie = gameData.species[i]
        if (mon.species === specie.id) {
            poke.species = i
            break
        }
    }
    /*if (window.randomAbi){
        var ability = pokedex[poke.species].abilities[mon.altAbility]
        poke.ability = getRandomAbi(mon, ability)
        poke.innates = [
            getRandomAbi(mon, pokedex[poke.species].innates[0]),
            getRandomAbi(mon, pokedex[poke.species].innates[1]),
            getRandomAbi(mon, pokedex[poke.species].innates[2]),
        ]
    } else {*/
        //poke.ability = getGEN3Ability(mon);
    //}
    poke.ability = mon.ability
    poke.level = lvlCap;
    poke.nature = gameData.natureT[mon.nature]//getGEN3Nature(mon);
    poke.ivs = {
        hp: mon.hpIV,
        at: mon.attackIV,
        df: mon.defenseIV,
        sa: mon.spAttackIV,
        sd: mon.spDefenseIV,
        sp: mon.speedIV
    };
    poke.evs = {
        hp: mon.hpEV,
        at: mon.attackEV,
        df: mon.defenseEV,
        sa: mon.spAttackEV,
        sd: mon.spDefenseEV,
        sp: mon.speedEV
    };
    poke.hPWR = mon.hptype//getGEN3HP(mon)
    poke.moves = [];
    for (var i=0; i<4; i++) {
        const moveID = mon.moves[i]
        var move = gameData.moves[moveID]
        if (!move){
            console.warn(`unknown move id ${moveID}`)
            continue
        }
        if (move.id === mon.moves[i]){
            poke.moves[i] = mon.moves[i]
        } else {
            const movesLen = gameData.moves.length
            for (let m=0; m < movesLen; m++){
                if (gameData.moves[m].id === mon.moves[i]) {
                    poke.moves[i] = m
                    break
                }
            }
        }
        /*if (move == "Hidden Power") {
            move = move + " " + poke.hPWR;
        }*/  
    }

    poke.zeroSpe = mon.zeroSpe;
    var genderRatio = gameData.species[poke.species].stats.gender
    var pGender = mon.personality % 256
    if (genderRatio == 255){
        poke.gender = 'N'
    } else if (genderRatio != 0 && genderRatio < pGender ){
        poke.gender = 'F'
    } else {
        poke.gender = 'M'
    }

    var speciesName = gameData.species[mon.species].name

    showdown_paste += speciesName
    if (poke.item) {
        showdown_paste += ` @ ${poke.item}`
    }
    showdown_paste += "\n"
    showdown_paste += `Level: ${lvlCap}\n`
    showdown_paste += `${poke.nature} Nature\n`
    showdown_paste += `Ability: ${pokedex[speciesName]["abilities"][mon.ability]} / ${pokedex[speciesName]["innates"][0]} / ${pokedex[speciesName]["innates"][1]} / ${pokedex[speciesName]["innates"][2]}\n`
    showdown_paste += `EVs: ${poke.evs.hp} Hp / ${poke.evs.at} Atk / ${poke.evs.df} Def / ${poke.evs.sa} Spa / ${poke.evs.sd} Spd / ${poke.evs.se} Spe\n`

    for (move_id of poke.moves) {
        console.log(move_id)
        showdown_paste += `- ${gameData.moves[move_id].name}\n`
    }
    showdown_paste += "\n"
    return poke
}


function parseFile(file){
    if (!file) return
    if (file.target) file = file.target.files[0]
    var reader = new FileReader();
    
    showdown_paste = ""

    lvlCap = $('#lvl-cap').val()

	reader.onload = function (e) {
		var bytes = new Uint8Array(e.target.result);
        //size check, for now only emerald.
        if (bytes.length != 131072 && bytes.length != 131088) {
            console.warn("Not a pokemon emerald game", bytes.length)
            return
        }
        var SIZE_SECTOR = 4096;
        var DATA_FIELD = 3968;
        var COUNT_MAIN = 14; 
        var SIZE_MAIN = COUNT_MAIN * SIZE_SECTOR;

        const RSave = getFooterData(0, 114688, bytes)

        try {
            var teamsize = readTeamSize(RSave.TI, bytes)
            var teamOffset = RSave.TI + 568;
            var teamList = []
            for (var i = 0; i< teamsize; i++){
                var mon = readMonParty(teamOffset + (i * 76), bytes)
                try{
                    mon = createGEN3mon(mon)
                } catch(e){
                    console.warn(`Failed to created this pokemon from savefile, reason: ${e}`)
                    continue
                }
                
                const evs = mon.evs
                teamList.push({
                    spc: mon.species,
                    isShiny: false,
                    abi: mon.ability,
                    moves: mon.moves,
                    item: mon.item,
                    ivs: [31, 31, 31, 31, 31, mon.zeroSpe ? 0 : 31],
                    evs: [evs.hp, evs.at, evs.df, evs.sa, evs.sd, evs.sp],
                    nature: gameData.natureT.indexOf(mon.nature)
                });
            }
                      
           
            // get the numbers of pokemon to read from the settings
            var remainingUnread = 1;
            var missedBytes = null
            var monList = [];
            for (var boxI = 0; boxI < RSave.PC.length; boxI++){
                var boxOfs = RSave.PC[boxI];
                var maxOfs = RSave.PC[boxI] + 3968;
                if (boxI == 0) {
                    boxOfs += 4
                }
                if (boxI == 8) {
                    maxOfs = RSave.PC[boxI] + 2000;
                }
                var box = readBox(boxOfs, bytes, missedBytes, remainingUnread, maxOfs)
                missedBytes = box.mof
                monList = monList.concat(box.list)
                remainingUnread = box.remainingUnread
                if (remainingUnread == 0) break;
            }

            console.log(teamList)
            console.log(monList)

        } catch (e) {
            console.warn(e)
        }
        $('.import-team-text').val(showdown_paste)
    }
    
    reader.readAsArrayBuffer(file);
};

