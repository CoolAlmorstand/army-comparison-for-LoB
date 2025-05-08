

import { chargeResistanceModifier } from "../../../configs/config.js"

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}


function getHpModifier(attackerHpProportion, defenderHpProportion) {

  const MAX = 0.25;

  if (defenderHpProportion === 0) {
    return MAX;
  }

  return clamp(
    (attackerHpProportion / defenderHpProportion - 1) * 0.75,
    -1,
    MAX
  )
}

export function getOrgModifier(attackerOrgProportion, defenderOrgProportion) {
  const MAX = 0.25;

  if (defenderOrgProportion === 0) {
    return MAX;
  }

  return clamp(
    (attackerOrgProportion / defenderOrgProportion - 1) * 0.25,
    -1,
    MAX
  )
}

function getChargeResistance(target, targetOrgProportion){
    
    const currentOrg = Math.round(target.organization * targetOrgProportion)

    if(currentOrg >= chargeResistanceModifier.start){
        return target.maxChargeResistance
    }
    
    const start = Math.min(target.organization, chargeResistanceModifier.start)
    const depreciationRatio = chargeResistanceModifier.depreciationRatio
    const maxResistannceLoss = chargeResistanceModifier.maxResistanceLoss
    
    const chargeReistanceLoss = clamp( ( (start - currentOrg) * depreciationRatio), 0, maxResistannceLoss)
    
    const currentChargeReistance = target.maxChargeResistance - chargeReistanceLoss
    
    
    return currentChargeReistance 
}
    

function getChargePenetrationEffectiveness(attackerOrgProportion) {
  const effectiveness = 1.6 * attackerOrgProportion + -0.6;
  return clamp(effectiveness, 0, 1);
}

export function getBaseChargeAttack(unit, target, terrain, unitOrgProportion, targetOrgProportion) {
     
    // assumes both attacker has full org since all units loses charge pen at the same rate

    const hpModifier = 0.25
    const orgModifier = getOrgModifier(unitOrgProportion, targetOrgProportion)
    
    const terrainAttackModifier = unit.terrainModifiers?.[terrain]?.meleeAttack || 0
    const terrainDefenseModifier = target.terrainModifiers?.[terrain]?.meleeDefense || 0
    
    const baseChargeDamage = unit.chargeBonus * (
        1 +
        hpModifier +
        orgModifier +
        terrainAttackModifier -
        terrainDefenseModifier
    )
        
    const effectiveChargePenetration = unit.chargePenetration * getChargePenetrationEffectiveness(unitOrgProportion)
    const chargeResistance = getChargeResistance(target, targetOrgProportion)
    
    const chargeEffectModifier = 1 + Math.min(effectiveChargePenetration - chargeResistance, 0 )
  
    const healthDamage = baseChargeDamage * chargeEffectModifier
    const orgDamage = ( healthDamage / target.maxHp) * 10 * unit.meleeWeapon.orgDamageRatio
    
    const score = orgDamage / target.organization
    
    return score 
}
    
    
export function getChargeAttackScore(unit, target, terrain){
    
    if(!unit.attackTypes.includes("charge")) { return 0 }
    
    let chargeAttackScore = 0
    
    for(let unitOrg = unit.organization; unitOrg >= 0; unitOrg--){
        for(let targetOrg = target.organization; targetOrg >= 0; targetOrg--){
             
            const unitOrgProportion = unitOrg / unit.organization
            const targetOrgProportion = targetOrg / target.organization
            
            const score = getBaseChargeAttack(unit, target, terrain, unitOrgProportion, targetOrgProportion)
            
            chargeAttackScore += score / ( (unit.organization + 1) * ( target.organization + 1) )
        }
    }
    
    return chargeAttackScore
}