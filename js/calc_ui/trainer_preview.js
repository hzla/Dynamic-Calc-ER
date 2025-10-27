
// Default trainer name list
function get_trainer_names() {
    var all_poks = SETDEX_BW
    var trainer_names = [] 

    for (const [pok_name, poks] of Object.entries(all_poks)) {
        var pok_tr_names = Object.keys(poks)
        for (i in pok_tr_names) {
           var trainer_name = pok_tr_names[i]
           var sub_index = poks[trainer_name]["sub_index"]
           trainer_names.push(`${pok_name} (${trainer_name})[${sub_index}]`) 
        }      
    }
    return trainer_names
}

// Used for making next/prev button function
function get_custom_trainer_names() {
    var all_poks = setdex
    var trainer_names = {} 

    for (const [pok_name, poks] of Object.entries(all_poks)) {
        var pok_tr_names = Object.keys(poks)
        for (i in pok_tr_names) {
           var trainer_name = pok_tr_names[i]
           var sub_index = poks[trainer_name]["sub_index"]

           // If there's a mastersheet
           if (npoint_data["order"]) {
                // If this trainer is listed in the mastersheet
                if (npoint_data["order"][poks[trainer_name]["tr_id"]]) {
                    next = npoint_data["order"][poks[trainer_name]["tr_id"]]["next"]
                    prev = npoint_data["order"][poks[trainer_name]["tr_id"]]["prev"]
                    setdex[pok_name][trainer_name]["next"] = next
                    setdex[pok_name][trainer_name]["prev"] = prev
                }      
           }
           if (sub_index == 0) {
                trainer_names[poks[trainer_name]["tr_id"] || 0] = `${pok_name} (${trainer_name})[${sub_index}]`
           }     
        }      
    }
    return trainer_names
}
    

// Gets the trainers list of pokemon
function get_trainer_poks(trainer_name)
{
    var all_poks = SETDEX_BW
    var matches = []

    trainer_name = trainer_name.replace("*", "")
    var og_trainer_name = trainer_name.split("(")[1].split(")")[0]


    if (og_trainer_name) {
        og_trainer_name = og_trainer_name.replace(/.?\)/, "")
    }


    for (i in TR_NAMES) {

        if (TR_NAMES[i].split("(")[1].split(")")[0] == og_trainer_name) {
            matches.push(TR_NAMES[i])
        }
    }

    return matches
}

// Get the current selected trainer pokemon
function get_current_in() {
    var setInfo = $('.set-selector')[3].value
    var pok_name = setInfo.split(" (")[0]
    var tr_name = setInfo.split(" (")[1].replace(")", "").split("[")[0]

    box_rolls()
    return SETDEX_BW[pok_name][tr_name]
}

function setOpposing(id) {
    // if in multi battle mode and user selects pokemon from already set partner, switch partners
    if (partnerName && id.includes(partnerName)) {
        partnerName = $('.set-selector .select2-chosen')[1].innerHTML
        if (partnerName) {
            partnerName = partnerName.replace(/\s?\)/, "").replace(/\s$/, "")
            console.log(`Switching partners: ${partnerName}`)
        }
        localStorage.partnerName = partnerName
    }

    currentTrainerSet = id
    localStorage["right"] = currentTrainerSet

    $('.opposing').val(currentTrainerSet)
    $('.opposing').change()
    $('.opposing .select2-chosen').text(currentTrainerSet)
    if ($('.info-group.opp > * > .forme').is(':visible')) {
        $('.info-group.opp > * > .forme').change()
    }
    if ($('#player-poks-filter:visible').length > 0) {
       box_rolls() 
    } 
}
