

import { units } from "../configs/units.js"
import { terrains} from "../configs/terrains.js"

import { getUnitsAttackStats } from "./get-units-attack-stats.js"
import { getUnitsDefenseStats } from "./get-units-defense-stats.js"
import { getArmyStrength } from "./get-army-strength.js"

export function getUnitsStats(army1, army2) {
    
    army1.attackStats = getUnitsAttackStats(army1, army2)
    army2.attackStats = getUnitsAttackStats(army2, army1)
    
    army1.defenseStats = getUnitsDefenseStats(army1, army2)
    army2.defenseStats = getUnitsDefenseStats(army2, army1)
    
    getArmyStrength(army1, army2)
}
