
import { terrains } from "../../../configs/terrains.js"
import { getMeleeAttackScore } from "./get-melee-score.js"
import { getRangeAttackScore } from "./get-range-score.js"
import { getChargeAttackScore } from "./get-charge-score.js"
import { units } from "../../../configs/units.js"


function getUnitAttackStats(unit, enemyArmy, terrain){
    
    const attackStats = { avgScore: 0 }
    
    for(let targetId in enemyArmy.units) {
    
        const target = units[targetId]
        const targetProportion = enemyArmy.units[targetId].armyProportion
        
        const meleeScore = getMeleeAttackScore(unit, target, terrain)
        const rangeScore = getRangeAttackScore(unit, target, terrain)
        const chargeScore = getChargeAttackScore(unit, target, terrain)
        
        const weightedAvgScore = (
            (meleeScore**2 + rangeScore**2 + chargeScore**2) /
            (meleeScore + rangeScore + chargeScore)
        )
        
        attackStats[targetId] = {
            meleeScore,
            rangeScore,
            chargeScore,
            avgScore: weightedAvgScore
        }
        
         
        attackStats.avgScore += attackStats[targetId].avgScore * targetProportion
    }
     
    return attackStats
}


export function getAttackStats(army, enemyArmy) {
    
    const attackStats = { avgScore: 0 }
    
    for(let unitId in army.units){
        attackStats[unitId] = { avgScore: 0}
        
        for(let terrain in terrains){
            
            const unit = units[unitId]
            const calculatedAttackStats = getUnitAttackStats(unit, enemyArmy, terrain)
            
            attackStats[unitId][terrain] = calculatedAttackStats
            attackStats[unitId].avgScore += calculatedAttackStats.avgScore * terrains[terrain].weight
            attackStats.avgScore += calculatedAttackStats.avgScore * army.units[unitId].armyProportion * terrains[terrain].weight
            
            //debugger 
        }
    }
    
    return attackStats
}