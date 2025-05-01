



function getTotalAttack(army){
    
    let totalAttack = 0
    
    for(let unitId in army.units){
        
        const unit = army.units[unitId]
        totalAttack += army.attackStats[unitId].avgAttackScore * unit.amount 
    }
    
    return totalAttack
}

function getTotalDefense(army){

    let totalDefense = 0
    for(let unitId in army.units){
        const unit = army.units[unitId]
        totalDefense += army.defenseStats[unitId].avgDefenseScore * unit.amount
    }
    
    return totalDefense
}

export function getArmyStrength(army1, army2) {
    
    army1.totalAttack = getTotalAttack(army1)
    army1.totalDefense = getTotalDefense(army1)
    
    army2.totalAttack = getTotalAttack(army2)
    army2.totalDefense = getTotalDefense(army2)
    
    army1.strength = army1.totalAttack * army1.totalDefense
    army2.strength = army2.totalAttack * army2.totalDefense
}