

import { units } from "../configs/units.js"
import { terrains} from "../configs/terrains.js"

import { getUnitsStats } from "./get-units-stats.js"

function getPowerRatings(army1, army2){
    
    const powerBaseLine = Math.max(army1.strength, army2.strength)
    
    const army1PowerRatio = Math.round( ( army1.strength / powerBaseLine ) * 10000 ) / 10000
    const army2PowerRatio = Math.round( ( army2.strength / powerBaseLine ) * 10000 ) / 10000
    
    return {
        army1: army1PowerRatio,
        army2: army2PowerRatio
    }
}

export function getRating(army1, army2){
    
    console.warn(army1, army2)
    getUnitsStats(army1, army2)
    
    const powerRating = getPowerRatings(army1, army2)
    return {
        powerRating
    }
        
}