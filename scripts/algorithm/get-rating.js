

import { getArmysStats } from "./get-stats/get-armys-stats.js"



function getPowerRating(army1, army2){
    
    const baseLine = Math.max(army1.strength, army2.strength)
    const army1RelativeStrength = army1.strength / baseLine
    const army2RelativeStrength = army2.strength / baseLine

    return { army1RelativeStrength, army2RelativeStrength}
}

export function getRating(army1, army2){

    getArmysStats(army1, army2)
    
    const powerRating = getPowerRating(army1, army2)
    
    return { powerRating }
}
    