
import { units } from "../configs/units.js"
import { terrains } from "../configs/terrains.js"


function getAvgTerrainProjectileAbsorption(unit, terrain, range, weapon) {
    
    if(!terrains[terrain] || !terrains[terrain][weapon.id] ) { return 1 }
    
    // the range before this
    const previousRange = range == "long" ? "mid" : range == "mid" ? "close" : null
    const previousTiles = ( unit.ranges[previousRange] || 0 ) / 16
    
    const baseDmgReduction = terrains[terrain][weapon.id]
    const dmgReductionOffset = baseDmgReduction * Math.ceil(previousTiles)

    const rangeDelta = unit.ranges[range] - ( unit.ranges[previousRange] || 0 )
    
    const startingTileRemainder = previousTiles ? 1 - ( previousTiles % 1 ) : 0
    const totalTiles = ( rangeDelta / 16 )
    const endTileRemainder = ( totalTiles - startingTileRemainder ) % 1
    
    const fullTiles = totalTiles - startingTileRemainder - endTileRemainder
    const sumOfFullTiles = fullTiles * ( ( fullTiles + 1 ) / 2 )

    const startingTileReduction = dmgReductionOffset * startingTileRemainder
    const totalFullTilesReduction = ( dmgReductionOffset * fullTiles) + ( baseDmgReduction * sumOfFullTiles )
    
    const endTileReduction = (
        (endTileRemainder * baseDmgReduction * Math.ceil(totalTiles - startingTileRemainder) ) + 
        (endTileRemainder * dmgReductionOffset)
    )
    
    const reduction = Math.min( ( ( startingTileReduction + totalFullTilesReduction + endTileReduction ) / totalTiles ), 1)

    return 1 - reduction
}


function getUnitRangeScore(terrain, unit, target) {
    
    if(!unit.attackTypes.includes("range") ) { return 0 }
    
    let avgRangeAttack = 0
    for(let range in unit.ranges) {
    
        const baseRngAttack = unit.rangeAttack
        
        const rangeProportion = unit.ranges[range] / unit.totalRange
        const rangeDamageModifier =  1 + ( unit.rangeDamageModifier[range] / 2 )

        const weapon = unit.rangeWeapons[range]
        const weaponDmgRes = target.category[`${[weapon.id]}DamageResistance`] || 1
        
        const terrainDamageRes = getAvgTerrainProjectileAbsorption(unit, terrain, range, weapon)
        
        const shellDamageResistance = 1 - ( weapon.type == "shell" ? target.avgShellDmgReduction : 0 )
        const shellAreaOfAffectBonus = weapon.shellAreaOfAffectBonus || 1
        
        const healthDamage = ( 
            baseRngAttack * 
            rangeDamageModifier * 
            terrainDamageRes * 
            weaponDmgRes
        )
        
        const orgDamage = (
            (healthDamage / target.maxHp) * 
            10 * 
            weapon.orgDamageRatio * 
            shellDamageResistance * 
            shellAreaOfAffectBonus
        )
        
        avgRangeAttack += orgDamage * rangeProportion
    }
    
    return avgRangeAttack / target.organization 
}


function getMeleeAttackScore(terrain, unit, target){

    if(!unit.attackTypes.includes("melee") ){ return 0 }

    const weapon = unit.meleeWeapon
    const weaponDmgRes = target.category[`${weapon.id}DamageResistance`] || 1
    const terrainDmgModifier = unit.terrainModifiers?.[terrain]?.meleeAttack || 1
    const terrainDamageRes = target.terrainModifiers?.[terrain]?.meleeDefense || 1

    const meleeAttack = unit.meleeAttack * weaponDmgRes * terrainDmgModifier
    const healthDamage = meleeAttack * ( meleeAttack / ( meleeAttack + ( target.meleeDefense * terrainDamageRes ) ) )
    const orgDamage = ( healthDamage / target.maxHp ) * 10 * weapon.orgDamageRatio
    
    return orgDamage / target.organization
}


function getChargeAttackScore(terrain, unit, target) {
    
    if(!unit.attackTypes.includes("charge") ){ return 0 }

    const terrainDamageRes = target.terrainModifiers?.[terrain]?.meleeDefense || 1

    const avgChargeResistance = target.avgChargeResistance / 100
    
    const weapon = unit.meleeWeapon
    const weaponDmgRes = target.category[`${weapon.id}DamageResistance`] || 1
    const terrainDmgModifier = unit.terrainModifiers?.[terrain]?.meleeAttack || 1
    const meleeAttack = unit.meleeAttack * weaponDmgRes * terrainDmgModifier

    const meleeRatio = meleeAttack / ( meleeAttack + ( target.meleeDefense * terrainDamageRes ) )
    const healthDamage = ( unit.chargeBonus * (1 - (avgChargeResistance - unit.chargePenetration ) ) ) * meleeRatio
    
    const orgDamage = ( healthDamage / unit.maxHp ) * 10 * unit.meleeWeapon.orgDamageRatio
    
    if(!orgDamage){
        debugger
    }
    return orgDamage / target.organization
}


export function getUnitsAttackStats(army, enemyArmy) {
    
    const atttackStats = {
        avgAttackScore: 0
    }
    for(let unitId in army.units){
        atttackStats[unitId] = {
            avgAttackScore: 0
        }
        for(let terrain in terrains){
            atttackStats[unitId][terrain] = {
                avgAttackScore: 0
            }
            for(let targetId in enemyArmy.units){
            
                atttackStats[unitId][terrain][targetId] = {
                    avgAttackScore: 0
                }
                
                const unit = units[unitId]
                const target = units[targetId]
                
                if(!target) { debugger }
                
                const rangeScore = getUnitRangeScore(terrain, unit, target )
                const meleeScore = getMeleeAttackScore(terrain, unit, target )
                const chargeScore = getChargeAttackScore(terrain, unit, target )
                
                const totalScore = rangeScore + meleeScore + chargeScore
                const weightedAvgAttackScore = totalScore == 0 ? 0 : (
                    (
                        (rangeScore ** 2 ) +
                        (meleeScore ** 2) +
                        ( chargeScore ** 2)
                    ) / (totalScore)
                )
                
                atttackStats[unitId][terrain][targetId]["range"] = rangeScore
                atttackStats[unitId][terrain][targetId]["melee"] = meleeScore
                atttackStats[unitId][terrain][targetId]["charge"] = chargeScore

                atttackStats[unitId][terrain][targetId].avgAttackScore = weightedAvgAttackScore
                atttackStats[unitId][terrain].avgAttackScore += weightedAvgAttackScore * enemyArmy.units[targetId].armyProportion 
                atttackStats[unitId].avgAttackScore +=  weightedAvgAttackScore * enemyArmy.units[targetId].armyProportion * terrains[terrain].weight
                atttackStats.avgAttackScore += weightedAvgAttackScore * enemyArmy.units[targetId].armyProportion * terrains[terrain].weight * army.units[unitId].armyProportion
            }
        }
    }
    
    return atttackStats
}