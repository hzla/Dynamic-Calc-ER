// Functions managing UI for right side player box

function sort_box_by_set(attr) {
    var box = $('.player-poks'),
    mons = box.children('.trainer-pok');
 
    mons.sort(function(a,b){
        mon1_id = a.getAttribute('data-id')
        mon1_species = mon1_id.split(" (")[0]
        mon1_data = setdex[mon1_species]["My Box"]

        mon2_id = b.getAttribute('data-id')
        mon2_species = mon2_id.split(" (")[0]
        mon2_data = setdex[mon2_species]["My Box"]

        var an = mon1_data[attr],
            bn = mon2_data[attr];
     
        if(an > bn) {
            return 1;
        }
        if(an < bn) {
            return -1;
        }
        return 0;
    });   
    mons.detach().appendTo(box);
}

function setBoxToLevelCap() {
    const levelCap = parseInt($('#lvl-cap').val())
    if (confirm(`Set Box to level ${levelCap}?`)) {
        for (set in customSets) {
            customSets[set]["My Box"].level = levelCap
            setdex[set]['My Box'].level = levelCap
        }
        localStorage.customsets = JSON.stringify(customSets)
        updateBoxAnim()
    }
}

$('#lvl-cap').on('contextmenu', function(e) {
    e.preventDefault()
    setBoxToLevelCap()
})

function sort_box_by_dex(attr) {
    var box = $('.player-poks'),
    mons = box.children('.trainer-pok');
 
    mons.sort(function(a,b){
        mon1_id = a.getAttribute('data-id')
        mon1_species = mon1_id.split(" (")[0]
        mon1_data = pokedex[mon1_species]

        mon2_id = b.getAttribute('data-id')
        mon2_species = mon2_id.split(" (")[0]
        mon2_data = pokedex[mon2_species]

        var an = mon1_data[attr],
            bn = mon2_data[attr];
     
        

        if(an > bn) {
            return 1;
        }
        if(an < bn) {
            return -1;
        }
        return 0;
    });   
    mons.detach().appendTo(box);
}

function abv(s) {
    if (($('.player-party').width() / s.length <= 50)) {
        if (s.split(" ")[1]) {
            return (s.split(" ")[0][0] + " " + s.split(" ")[1]).slice(0,13)
        } else {
            return s.slice(0,13)
        }
        
    } else {
        return s
    }
}

function sort_box_by_name(aToZ = true) {
    var box = $('.player-poks'),
    mons = box.children('.trainer-pok');
 
    mons.sort(function(a,b){
        mon1_id = a.getAttribute('data-id');
        mon1_species = mon1_id.split(" (")[0];

        mon2_id = b.getAttribute('data-id');
        mon2_species = mon2_id.split(" (")[0];

        if(mon1_species > mon2_species) {
            return aToZ ? 1 : -1;
        }
        if(mon1_species < mon2_species) {
            return aToZ ? -1 : 1;
        }
        return 0;
    });   
    mons.detach().appendTo(box);
}

function displayParty() {
    var destination = $('.player-party')
    $('.player-party').html("")


    if (currentParty.length > 0) {
        $('.player-party').css('display', 'flex')
        $('#clear-party').css('display', 'inline-block')

        if (saveUploaded) {
            $('#edge').css('display', 'inline-block')
        }

        for (i in currentParty) {



            try {
                species_name = currentParty[i]
                if (!setdex[species_name]) {
                    continue;
                }
                var sprite_name = species_name.toUpperCase().replaceAll(" ","_").replaceAll(".","").replaceAll("’","").replaceAll(":","_")
                var set_data = setdex[species_name]["My Box"]
                var data_id = species_name + " (My Box)"
            } catch {
                $('.player-party').html("")
                $('.player-party').hide()
                $('#clear-party').hide()
                $('#edge').hide()
                break;
            }

            
            var pok = `<div class="trainer-pok-container">
                <img class="trainer-pok left-side" src="./img/sprites/${sprite_name}.png" data-id="${data_id}">`
            for (let i in [1,2,3,4]) {
                if (set_data['moves'][i]) {
                   pok += `<div class="bp-info">${abv(set_data['moves'][i].replace("Hidden Power", "HP"))}</div>` 
               } else {
                   pok += `<div class="bp-info"> - </div>` 
               }
                
            }
            pok += `</div>`
            
            destination.append(pok)
        }
    }
}


function get_box() {
    var names = get_trainer_names()
    encounters = getEncounters()

    var box = []

    var box_html = ""

    for (i in names) {
        if (names[i].includes("My Box")) {
            box.push(names[i].split("[")[0])

            var pok_name = names[i].split(" (")[0].toUpperCase().replaceAll(" ","_").replaceAll(".","").replaceAll(".","").replaceAll("’","").replaceAll(":","_")
            
            if (encounters && encounters[names[i].split(" (")[0]] && !encounters[names[i].split(" (")[0]].alive) {
                continue
            }

            var pok = `<img class="trainer-pok left-side ${sprite_style}" src="./img/sprites/${pok_name}.png" data-id="${names[i].split("[")[0]}">`

            box_html += pok
        }   
    }


    $('.player-poks').html(box_html)
    sort_box_by_name()

    if ($('.trainer-pok.left-side').length >= 10) {
        $('#search-row').css('display', 'flex')
    }
    filter_box()

    return box
}

function filter_box() {
    let search_string = $('#search-box').val().toLowerCase()
    let container = $('.trainer-pok-list.player-poks')

    // Hide Prevos
    if (localStorage.hidePrevos == '1' && typeof customSets != 'undefined') {
        container.find('.pokesprite').show()
        for (set in customSets) {
            let set_id = `${set} (My Box)`
            if (shouldHidePrevo(set)) {
               container.find(`[data-id='${set_id}']`).hide()
            }
        }
    }

    // Return if search string is too short
    if (search_string.length < 2) {
        container.find('.pokesprite').removeClass('active')
        return
    }

    container.find('.pokesprite').removeClass('active')
    for (set in customSets) {

        // remove megas
        baseSet = set
        if (set.includes("-Mega")) {
            baseSet = set.replace("-Mega-X", "").replace("-Mega-Y", "").replace("-Mega-D", "").replace("-Mega-O", "").replace("-Mega", "")
        }
        
        let setInfo = JSON.stringify(customSets[set]).toLowerCase()
        let pokedexInfo = JSON.stringify(pokedex[set]).toLowerCase()
        let set_id = `${set} (My Box)`

        let learnset = ""

        try {
            learnset = JSON.stringify(learnsets[baseSet.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()]).toLowerCase()
        } catch {
            console.log(`ls not found for ${baseSet}`)
        }        
        if (setInfo.includes(search_string) || set.includes(search_string) || pokedexInfo.includes(search_string)) {
            container.find(`[data-id='${set_id}']`).addClass('active')
        }

        if (learnsets) {
            if (learnset.includes(search_string)) {
                container.find(`[data-id='${set_id}']`).addClass('active')
            }
        }
    }
}

function box_rolls() {
    if (!parseInt(localStorage.boxrolls)) {
        return
    }
    var box = get_box()

    var dealt_min_roll = $("#min-dealt").val()
    var taken_max_roll = $("#max-taken").val()



    if ($("#min-dealt").val() == "") {
        dealt_min_roll=10000000
    } 

    if ($("#max-taken").val() == "") {
        taken_max_roll=-100000
    }

    

    $('.killer').removeClass('killer')
    $('.defender').removeClass('defender')
    $('.faster').removeClass('faster')

    var p1field = createField();
    var p2field = p1field.clone().swap();

    var p1info = $("#p2");
    var p1 = createPokemon(p1info);
    var p1hp = $('#p2').find('#currentHpL1').val()
    var p1speed = parseInt($('.total.totalMod')[1].innerHTML)

    if (p1.ability == "Intimidate") {
        p1.ability = "Minus"
    }

    var killers = []
    var defenders = []
    var faster = []
    for (m = 0; m < box.length; m++) {
        if (p1.level < 1) {
            break;
        }
        var mon = createPokemon(box[m])
        var monSpeed = mon.rawStats.spe

        if (mon.ability == "Intimidate") {
            mon.ability = "Minus"
        }

        if (monSpeed > p1speed) {
            faster.push({"set": box[m]})
            $(`.trainer-pok[data-id='${box[m]}']`).addClass('faster')
        }

        var monHp = mon.originalCurHP
        var selected_move_index = $('#filter-move option:selected').index()


        var all_results = calculateAllMoves(damageGen, p1, p1field, mon, p2field, false);
        var opposing_results = all_results[0]
        var player_results = all_results[1]

        var defend_count = 0


 
        for (j = 0; j < 4; j++) {
            player_dmg = player_results[j].damage

            if (can_kill(player_dmg, p1hp * dealt_min_roll / 100)) {
                killers.push({"set": box[m], "move": player_results[j].move.originalName})
                $(`.trainer-pok[data-id='${box[m]}']`).addClass('killer')
            }

            opposing_dmg = opposing_results[j].damage

            if (!can_topkill(opposing_dmg, monHp * taken_max_roll / 100) && (selected_move_index == 0 || j == selected_move_index - 1)) {
                defend_count += 1
                if (defend_count == 4 || selected_move_index > 0) {
                    defenders.push({"set": box[m], "move": opposing_results[j].move.originalName})
                    $(`.trainer-pok[data-id='${box[m]}']`).addClass('defender')
                }         
            }
        }
    }
    return {"killers": killers, "defenders": defenders, "faster": faster}  
}



// check if ai mon has >= 50% chance kills player
function can_kill(damages, hp) {
    kill_count = 0
    for (n in damages) {
        if (damages[n] >= hp) {
            kill_count += 1
        }
    }
    return (kill_count >= 16)
}

// check if ai mon highest roll kills player
function can_topkill(damages, hp) {
    if (hp < 0) return true;
    kill_count = 0

    if (damages.length == 2) {
        damages = damages[0].map((val, i) => val + damages[1][i])
    }

    for (n in damages) {
        if (damages[n] > hp) {
            kill_count += 1
        }
    }
    return (kill_count > 0)
}

function get_current_learnset() {
    var pok_name = createPokemon($("#p1")).name.replace(" Mega", "")

    let lvlUp = false
    let tutors = []
    let evos = []
    let abils = []

    for (let monData of gameData.species) {
        if (monData.name == pok_name) {
            lvlUp = monData.levelUpMoves
            tutors = monData.tutor
            evos = monData.evolutions
            break;
        }
    }
    
    if (lvlUp) {
       $("#learnset-show").show()  
    } else {
        return;
    }  

    var ls_html = ""

    for (let i = 0; i < lvlUp.length; i++) {
        var lvl = lvlUp[i].lv
        var mv_name = gameData.moves[lvlUp[i].id].name
        ls_html += `<div class='ls-row'><div class='ls-level'>${lvl}</div><div class='ls-name'>${mv_name}</div></div>`
    }
    $(".lvl-up-moves").html(ls_html)

    var tm_html = ""
    for (let i = 0; i < tutors.length; i++) {
        var mv_name = gameData.moves[tutors[i]].name
        tm_html += `<div class='ls-row'><div class='ls-level'>Tutor:</div><div class='ls-name'>${mv_name}</div></div>`
    }
    $(".tms").html(tm_html)
    
    let evo_html = ""


    abils = []


    abils = [$('#abilityL1').val(), $('#innatesL1').val(), $('#innatesL2').val(),$('#innatesL3').val()]

    for (let evo of evos) {        
        evo_html += `<div class='ls-row'><div class='ls-level'>Lvl: ${evo.rs}</div><div class='ls-name'>${evo.in}</div></div>`
    }

    for (let ab of abils) {        
        evo_html += `<div class='ls-row ab-row'><div class='ls-level'>${ab}</div><div class='ls-name'>${abilityDesc[ab]}</div></div>`
    }


    $(".evos").html(evo_html)   

}







