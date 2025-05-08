

import { terrains } from "../../../configs/terrains.js"

function getTotalTiles(unit, terrain, weapon) {
    
    const terrainProjectileAbsorption = terrains[terrain]?.projectileAbsorption?.[weapon.id] || 0

    if(!terrainProjectileAbsorption){ return null }
    
    // the amount of tiles this unit can shoot through before having 0 dmg or running out of range
    const maxTiles = Math.min( Math.ceil( ( 1 / terrainProjectileAbsorption ) - 1), Math.ceil( unit.totalRange / 16 ) )
    return maxTiles
}

function getRangeAttack(unit, target, terrain, range) {
    
    const weapon = unit.rangeWeapons[range]
    
    const baseTerrainProjectileAbsorption = terrains[terrain]?.projectileAbsorption?.[weapon.id] || 0
    const weaponDamageResistance = target.category.weaponDamageResistance?.[weapon.id] || 0
    const unitTerrainAttackModifier = unit.terrainModifiers?.[terrain]?.rangeAttack || 0
    const rangeModifier = unit.rangeDamageModifier?.[range] || 0
    
    const shellDamageResistance = (
        weapon.type == "shell" ? target.avgShellDmgReduction : 0 
    )
    
    const shellAofBonus = (
        weapon.type == "shell" ? weapon.aofBonus : 0 
    )
    
    const orgDamageModifier = 1 - shellDamageResistance

    let damageModifier = Math.max(
    (
        1 -
        weaponDamageResistance +
        shellAofBonus+
        unitTerrainAttackModifier
    ), 0)
    
    const baseAvgDamage = unit.rangeAttack * ( 1 + ( rangeModifier / 2 ) )
    
    if(!baseTerrainProjectileAbsorption) {
    
        const healthDamage = baseAvgDamage * damageModifier
        
        const orgDamage = (
            ( healthDamage / target.maxHp ) * 
            10 * 
            weapon.orgDamageRatio * 
            orgDamageModifier
        )
         
        
        return orgDamage
    }
    
    //simulates shooting through from 1 tile through x tile returns weighted avg
    else {
        const totalTiles = getTotalTiles(unit, terrain, weapon)
        
        let totalSquaredDmg = 0
        let totalDmg = 0
        
        for(let tiles = 1; tiles <= totalTiles; tiles++) {
            
            const terrainProjectileAbsorption = Math.min(baseTerrainProjectileAbsorption * tiles, 1)
            const healthDamage = baseAvgDamage * ( damageModifier - terrainProjectileAbsorption)
        
            const orgDamage = (
                ( healthDamage / target.maxHp ) * 
                10 * 
                weapon.orgDamageRatio * 
                orgDamageModifier
            )
            
            totalSquaredDmg += orgDamage**2
            totalDmg += orgDamage
            
             
        }
        
        const score = totalSquaredDmg / totalDmg
        return score
    }
}





export function getRangeAttackScore(unit, target, terrain){

    if(!unit.attackTypes.includes("range")) { return 0 }
    
    let avgOrgDamage = 0
    
    for(let range in unit.ranges){
        
        const rangeProportion = unit.ranges[range] / unit.totalRange
        const orgDamage = getRangeAttack(unit, target, terrain, range)
        
        avgOrgDamage += orgDamage * rangeProportion
    }
    
    return avgOrgDamage / target.organization
}