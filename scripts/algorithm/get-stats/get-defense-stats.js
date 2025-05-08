


import { terrains } from "../../configs/terrains.js"
import { units } from "../../configs/units.js"





export function getDefenseStats(army, enemyArmy){
    
    const defenseStats = { avgScore: 0 }
    
    for(let unitId in army.units){
        
        const unitDefenseStat = { avgScore: 0 }
       
        for(let terrain in terrains){
            const terrainDefenseStat = { avgScore: 0 }
            
            for(let attackerId in enemyArmy.units){
                
                const attackerProportion = enemyArmy.units[attackerId].armyProportion
                
                const attackerMeleeAttackScore = enemyArmy.attackStats[attackerId][terrain][unitId].meleeScore
                const attackerRangeAttackScore = enemyArmy.attackStats[attackerId][terrain][unitId].rangeScore
                const attackerChargeAttackScore = enemyArmy.attackStats[attackerId][terrain][unitId].chargeScore

                
                const meleeScore = attackerMeleeAttackScore ? 1 / attackerMeleeAttackScore : 0
                const rangeScore = attackerRangeAttackScore ? 1 / attackerRangeAttackScore : 0
                const chargeScore = attackerChargeAttackScore ? 1 / attackerChargeAttackScore : 0
                
                // don't take a defense score of 0 into account 
                const avgDefenseScore = (
                    ( meleeScore + rangeScore + chargeScore) /
                    (Math.min(Math.ceil(meleeScore), 1) + Math.min(Math.ceil(rangeScore), 1) + Math.min(Math.ceil(chargeScore), 1) )
                )
                
                terrainDefenseStat[attackerId] = {
                    meleeScore,
                    rangeScore,
                    chargeScore,
                    avgScore: avgDefenseScore
                }
                
                terrainDefenseStat.avgScore += avgDefenseScore * attackerProportion
            }
            unitDefenseStat[terrain] = terrainDefenseStat
            unitDefenseStat.avgScore += terrainDefenseStat.avgScore * terrains[terrain].weight
        }
        defenseStats[unitId] = unitDefenseStat
        defenseStats.avgScore += unitDefenseStat.avgScore * army.units[unitId].armyProportion
    }
    
    return defenseStats
}
                
                