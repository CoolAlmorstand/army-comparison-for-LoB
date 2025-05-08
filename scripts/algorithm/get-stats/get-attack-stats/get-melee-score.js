
function getBaseDamage(unit, target){
    
    return unit.meleeAttack * (unit.meleeAttack / (unit.meleeAttack + target.meleeDefense) )
     
}


export function getMeleeAttackScore(unit, target, terrain) {
    
    if(!unit.attackTypes.includes("melee") ) { return 0 }
    
    const baseDamage = getBaseDamage(unit, target)
    
    const terrainAttackModifier = unit.terrainModifiers?.[terrain]?.meleeAttack || 0
    const terrainDefenseModifier = unit.terrainModifiers?.[terrain]?.meleeDefense || 0

    const weaponDamageResistance = target.category.damageResistance?.[unit.meleeWeapon?.id] || 0
    
    const damageModifier = Math.max(
    (
        1 + 
        terrainAttackModifier - 
        terrainDefenseModifier - 
        weaponDamageResistance
    ), 0)

    const healthDamage = baseDamage * damageModifier
    const orgDamage = ( ( healthDamage / target.maxHp ) * 10 ) * unit.meleeWeapon.orgDamageRatio
    
    const score = orgDamage / target.organization
    
    return score
}