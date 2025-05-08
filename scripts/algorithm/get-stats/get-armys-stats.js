
import { getAttackStats } from "./get-attack-stats/get-attack-stats.js"
import { getDefenseStats } from "./get-defense-stats.js"
import { getStrengthStats } from "./get-strength-stats.js"
            

export function getArmysStats(army1, army2) {
    
    army1.attackStats = getAttackStats(army1, army2)
    army2.attackStats = getAttackStats(army2, army1)
    
    army1.defenseStats = getDefenseStats(army1, army2)
    army2.defenseStats = getDefenseStats(army2, army1)
    
    army1.strength = getStrengthStats(army1)
    army2.strength = getStrengthStats(army2)
    
}




