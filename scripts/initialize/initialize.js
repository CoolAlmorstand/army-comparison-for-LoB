



import { units } from "../configs/units.js"
import { chargeResistanceModifier, shellDamageModifiers} from "../configs/config.js"


function getAvgShellResistance(unit){
    
    const start = shellDamageModifiers.start
    const end = shellDamageModifiers.end
    const minimum = shellDamageModifiers.minimum
    const maximum = shellDamageModifiers.maximum
    
    // ratio where the dmg reduction is lowest
    const minDmgReductionRatio = Math.max(unit.organization - start, 0) / unit.organization
    // ratio where dmg reduction is highes
    const maxDmgReductionRatio = Math.min(unit.organization, end) / unit.organization
    //ratio where dmg in the linear decline range (between start and end)
    const linearDmgReductionRatio = 1 - (maxDmgReductionRatio + minDmgReductionRatio)
    
    const minimumReductionOfUnit = Math.min(unit.organization >= start ? minimum : ( start - unit.organization ) * ( ( (maximum - minimum) / (start - end) ) ), maximum )
    
    //avg damage in the linear decline range (between start and end)
    const avgLinearDmgReduction = (maximum + minimumReductionOfUnit) / 2
    
    const avgDamageReduction = (
        (minimum * minDmgReductionRatio) +
        (avgLinearDmgReduction * linearDmgReductionRatio) +
        (maximum * maxDmgReductionRatio)
    )

    return avgDamageReduction
}


function getAvgChargeResistance(unit){
    
    const start = chargeResistanceModifier.start
    const depreciationRatio = chargeResistanceModifier.depreciationRatio
    const maxResistanceLoss = chargeResistanceModifier.maxResistanceLoss
    
    // amount of org loss to get to minimum charge res
    const maxOrgLoss = maxResistanceLoss / depreciationRatio
    
    // the maximum resistance loss that this unit can have 
    const maxResistanceLossOfUnit = Math.min(unit.organization, maxOrgLoss) * depreciationRatio


    // the lowest possible value of a units charge resistance 
    const minimumChargeRes = unit.maxChargeResistance - maxResistanceLossOfUnit

    //average resistance in the linear decline range (between max and min resistance)
    const avgOfLinearChargeRes = ( minimumChargeRes + unit.maxChargeResistance ) / 2
    
    // ratio of where the charge res would be at the maximum 
    const maxChargeResRatio = Math.max(unit.organization - start, 0) / unit.organization
    
    // ratio of where's the charge res is at the lowest 
    const minChargeResRatio = Math.max(Math.min(unit.organization, start) - maxOrgLoss, 0 )  / unit.organization

    
    const linearChargeResRatio = 1 - (maxChargeResRatio + minChargeResRatio)
    
    const avgChargeResistance = (
        ( unit.maxChargeResistance * maxChargeResRatio ) +
        ( minimumChargeRes * minChargeResRatio) +
        ( avgOfLinearChargeRes * linearChargeResRatio)
    )
    
    return avgChargeResistance / 100
}


function initializeUnits() {
    
    for(let unit of Object.values(units) ) {
        unit.avgChargeResistance = getAvgChargeResistance(unit)
        unit.avgShellDmgReduction = getAvgShellResistance(unit)
    }
}


function getTotalUnits(army){
    
    let total = 0
    for(let unitId in army.units){
        
        total += army.units[unitId].amount
    }
    return total
}

export function InitializeArmy(army) {
    
    army.totalUnits = getTotalUnits(army)

    for(let unitId in army.units) {
        
        const unit = army.units[unitId]
        unit.armyProportion = unit.amount / army.totalUnits
    }
}
export function initialize(){
    
    initializeUnits()
}