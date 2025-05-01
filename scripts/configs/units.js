

import { weapons } from "./weapons.js"
import { categories } from "./category.js"

const lineInfantry = {
    id: "lineInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 150,
    meleeDefense: 28,
    maxChargeResistance: 100,
    
    attackTypes: ["range", "melee", "charge"],
    
    meleeAttack: 37,
    meleeWeapon: weapons.melee.bayonet,
    chargeBonus: 22,
    chargePenetration: 0.1,
    
    rangeAttack: 24,
    totalRange: 100,
    ranges: { close: 25, mid: 50, long: 100 },
    rangeDamageModifier: { close: 0.5, mid: 0, long: -0.5 },
    rangeWeapons: {
        close: weapons.range.musket,
        mid: weapons.range.musket,
        long: weapons.range.musket
    },

    movement: 25,
    orgRadius: 48,
    orgRadiusBonus: 1.6,

    terrainModifiers: {
    
        water: {
            meleeAttack: 1 + -0.8,
            meleeDefense: 1 + -0.5,
            movement: 1 + -0.75,
            rangeAttack: 1 + -0.5
        },
        
        road: {
            movement: 1 + 0.3
        },
        
        forest: {
            //0.5
            meleeDefense: 1 + 0.5,
            movement: 1 + -0.2
        },
        
        village: {
            meleeDefense: 1 + 0.8,
            movement: 1 + -0.2
        }
    }
}

const lightInfantry = {
    id: "lightInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 165,
    meleeDefense: 28,
    maxChargeResistance: 100,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 37,
    meleeWeapon: weapons.melee.bayonet,
    chargeBonus: 28,
    chargePenetration: 0.1,

    rangeAttack: 30,
    totalRange: 100,
    ranges: { close: 25, mid: 50, long: 100 },
    rangeDamageModifier: { close: 0.7, mid: 0, long: -0.55 },
    rangeWeapons: {
        close: weapons.range.musket,
        mid: weapons.range.musket,
        long: weapons.range.musket
    },

    movement: 90,
    orgRadius: 48,
    orgRadiusBonus: 1.6,

    terrainModifiers: {
        water: {
            meleeAttack: 1 + -0.8, 
            meleeDefense: 1 + -0.4,
            movement: 1 + -0.7,
            rangeAttack: 1 + 0.5
        },
        
        road: {
            movement: 30,
        },
        
        forest: {
            meleeDefense: 1 + 0.6,
            movement: 1 + -0.15
        },

        village: {
            meleeDefense: 1 + 0.9,
            movement: 1 + -0.15
        }
    }
};

const guardInfantry = {
    id: "gaurdInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 180,
    meleeDefense: 30,
    maxChargeResistance: 100,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 41,
    meleeWeapon: weapons.melee.bayonet,
    chargeBonus: 40,
    chargePenetration: 0.5,

    rangeAttack: 26,
    totalRange: 100,
    ranges: { close: 25, mid: 50, long: 100 },
    rangeDamageModifier: { close: 0.6, mid: 0, long: -0.65 },
    rangeWeapons: {
        close: weapons.range.musket,
        mid: weapons.range.musket,
        long: weapons.range.musket
    },

    movement: 25,
    orgRadius: 72,
    orgRadiusBonus: 3,

    terrainModifiers: {
        water: {
            meleeAttack: 1 + -0.8, 
            meleeDefense: 1 + -0.5,
            movement: 1 + -0.75,
            rangeAttack: 1 + 0.5
        },
        
        road: {
            movement: 30,
        },
        
        forest: {
            meleeDefense: 1 + 0.5,
            movement: 1 + -0.2
        },

        village: {
            meleeDefense: 1 + 0.8,
            movement: 1 + -0.2
        }
    }
};

const dragoon = {
    id: "dragoon",
    category: categories.cavalry,

    maxHp: 800,
    organization: 160,
    meleeDefense: 25,
    maxChargeResistance: 100,

    attackTypes: ["melee", "charge"],

    meleeAttack: 39,
    meleeWeapon: weapons.melee.dragoonSword,
    chargeBonus: 50,
    chargePenetration: 0.05,

    rangeAttack: 26,
    totalRange: 145,

    movement: 145,
    orgRadius: 75,
    orgRadiusBonus: 1.5,
    
    terrainModifiers: {
        water: {
            meleeAttack: 1 + -0.8,
            meleeDefense: 1 + -0.5,
            movement: 1 + -0.75
        },
        
        road: {
            movement: 1 + 0.2,
        },
        
        forest: {
            meleeAttack: 1 + -0.5,
            meleeDefense: 1 + -0.2,
            movement: 1 + -0.4
        },
        
        village: {
            meleeAttack: 1 + -0.8,
            meleeDefense: 1 + -0.2,
            movement: 1 + -0.4
        },
    }
}

const militiaInfantry = {
    id: "militiaInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 100,
    meleeDefense: 21,
    maxChargeResistance: 40,
    
    attackTypes: ["range", "melee", "charge"],
    
    meleeAttack: 20,
    meleeWeapon: weapons.melee.bayonet,
    chargeBonus: 16,
    chargePenetration: 0.1,
    
    rangeAttack: 17,
    totalRange: 100,
    ranges: { close: 25, mid: 50, long: 100 },
    rangeDamageModifier: { close: 0.6, mid: 0, long: -0.65 },
    rangeWeapons: {
        close: weapons.range.musket,
        mid: weapons.range.musket,
        long: weapons.range.musket
    },

    movement: 75,
    orgRadius: 0,
    orgRadiusBonus: 0,

    terrainModifiers: {
        land: {
            meleeDefense: 1 + -0.4,
        },
        
        water: {
            meleeAttack: 1 + -0.85,
            movement: 1 + -0.75,
            rangeAttack: 1 + -0.5
        },

        road: {
            meleeDefense: 1 + -0.4,
            movement: 1 + 0.3
        },
        
        forest: {
            meleeDefense: 1 + 0.5,
            movement: 1 + -0.2
        },
        
        village: {
            meleeDefense: 1 + 0.8,
            movement: 1 + -0.2
        }
    }
}


const twelvePoundFootArtillery = {
    id: "twelvePoundFootArtillery",
    category: categories.artillery,

    maxHp: 600,
    organization: 150,
    meleeDefense: 8,
    maxChargeResistance: 50,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 6,
    meleeWeapon: weapons.melee.artillerySabre,
    chargeBonus: 5,
    chargePenetration: 0,

    rangeAttack: 36,
    totalRange: 500,
    ranges: { close: 145, mid: 250, long: 500 },
    rangeDamageModifier: { close: 1, mid: 0, long: -0.75 },
    rangeWeapons: {
        close: weapons.range.canisterFire,
        mid: weapons.shell.cannonBall,
        long: weapons.shell.cannonBall
    },

    movement: 75,
    limberMovement: 25,
    chargeResistance: -0.5,
    orgRadius: 32,
    orgRadiusBonus: 0.6,
    
    terrainModifiers: {
        water: {
            meleeAttack: 1 + -0.8,
            movement: 1 + -0.75,
            rangeAttack: 1 + -1
        },

        road: {
            movement: 1 + 0.4
        },
        
        forest: {
            meleeDefense: 1 + 0.5,
            movement: 1 + -0.4,
            rangeAttack: 1 + -0.3,
        },
        
        village: {
            meleeDefense: 1 + 0.8,
            movement: 1 + -0.2
        }
    }
}


export const units = {
    lineInfantry,
    militiaInfantry,
    lightInfantry, 
    guardInfantry,
    dragoon, 
    twelvePoundFootArtillery
}