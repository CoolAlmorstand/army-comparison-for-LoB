import { terrains } from "../../configs/terrains.js"
import { units } from "../../configs/units.js"


function getTotalAttack(army){
    
    let totalAttack = 0
    
    for(let unitId in army.units){
        totalAttack += army.attackStats[unitId].avgScore * army.units[unitId].amount
    }
    
    return totalAttack
}

function getTotalDefense(army){
    
    let totalDefense = 0
    
    for(let unitId in army.units){
        totalDefense += army.defenseStats[unitId].avgScore * army.units[unitId].amount
    }
    
    return totalDefense
}

export function getStrengthStats(army){
    
    const strength = getTotalAttack(army) * getTotalDefense(army)
    
    return strength
}