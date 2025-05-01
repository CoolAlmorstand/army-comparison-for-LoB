import { units } from "../configs/units.js"
import { terrains } from "../configs/terrains.js"
import { categories } from "../configs/category.js"


export function getUnitsDefenseStats(army, enemyArmy){
    
    const defenseStats = {
        avgDefenseScore: 0
    }
    
    for(let unitId in army.units){
        const unit = units[unitId]
        defenseStats[unitId] = {
            avgDefenseScore: 0
        }
        for(let terrain in terrains){
        
            defenseStats[unitId][terrain] = {
                avgDefenseScore: 0
            }
            
            let totalAttack = 0
            
            for(let attackerId in enemyArmy.units){
            
                const attacker = enemyArmy.attackStats[attackerId]
                
                totalAttack += attacker[terrain][unitId].avgAttackScore * enemyArmy.units[attackerId].amount
            }
            
            const avgDefenseScore = 1 / totalAttack

            defenseStats[unitId][terrain].avgDefenseScore = unit.organization / totalAttack
            defenseStats[unitId].avgDefenseScore += avgDefenseScore * terrains[terrain].weight 
            defenseStats.avgDefenseScore += avgDefenseScore * terrains[terrain].weight * army.units[unitId].armyProportion
        }
    }
    
    return defenseStats
}
                