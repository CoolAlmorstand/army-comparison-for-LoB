

import { weapons } from "./weapons.js"
import { categories } from "./category.js"

const lineInfantry = {
    id: "lineInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 150,
    meleeDefense: 28,
    maxChargeResistance: 1,
    
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
            meleeAttack: -0.8,
            meleeDefense: -0.5,
            movement: -0.75,
            rangeAttack: -0.5
        },
        
        road: {
            movement: 0.3
        },
        
        forest: {
            //0.5
            meleeDefense: 0.5,
            movement: -0.2
        },
        
        village: {
            meleeDefense: 0.8,
            movement: -0.2
        }
    }
}

const lightInfantry = {
    id: "lightInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 165,
    meleeDefense: 28,
    maxChargeResistance: 1,

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
            meleeAttack: -0.8, 
            meleeDefense: -0.4,
            movement: -0.7,
            rangeAttack: 0.5
        },
        
        road: {
            movement: 30,
        },
        
        forest: {
            meleeDefense: 0.6,
            movement: -0.15
        },

        village: {
            meleeDefense: 0.9,
            movement: -0.15
        }
    }
};

const guardInfantry = {
    id: "gaurdInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 180,
    meleeDefense: 30,
    maxChargeResistance: 1,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 41,
    meleeWeapon: weapons.melee.bayonet,
    chargeBonus: 45,
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
            meleeAttack: -0.8, 
            meleeDefense: -0.5,
            movement: -0.75,
            rangeAttack: 0.5
        },
        
        road: {
            movement: 30,
        },
        
        forest: {
            meleeDefense: 0.5,
            movement: -0.2
        },

        village: {
            meleeDefense: 0.8,
            movement: -0.2,
            rangeAttack: -0.1
        }
    }
}


const militiaInfantry = {
    id: "militiaInfantry",
    category: categories.infantry,

    maxHp: 800,
    organization: 115,
    meleeDefense: 24,
    maxChargeResistance: 0.7,
    
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
            meleeDefense: -0.5,
        },
        
        water: {
            meleeAttack: -0.85,
            movement: -0.75,
            rangeAttack: -0.5
        },

        road: {
            meleeDefense: -0.4,
            movement: 0.3
        },
        
        forest: {
            meleeDefense: 0.5,
            movement: -0.2
        },
        
        village: {
            meleeDefense: 0.8,
            movement: -0.2,
            rangeAttack: -0.1
        }
    }
}   

const dragoon = {
    id: "dragoon",
    category: categories.cavalry,

    maxHp: 500,
    organization: 160,
    meleeDefense: 25,
    maxChargeResistance: 1,

    attackTypes: ["melee", "charge"],

    meleeAttack: 39,
    meleeWeapon: weapons.melee.dragoonSword,
    chargeBonus: 50,
    chargePenetration: 0.05,

    movement: 145,
    orgRadius: 75,
    orgRadiusBonus: 1.5,
    
    terrainModifiers: {
        water: {
            meleeAttack: -0.8,
            meleeDefense: -0.5,
            movement: -0.75
        },
        
        road: {
            movement: 0.2,
        },
        
        forest: {
            meleeAttack: -0.5,
            meleeDefense: -0.2,
            movement: -0.4
        },
        
        village: {
            meleeAttack: -0.8,
            meleeDefense: -0.2,
            movement: -0.4
        },
    }
}


const lancer = {
    id: "lancer",
    category: categories.lightCavalry,

    maxHp: 550,
    organization: 160,
    meleeDefense: 20,
    maxChargeResistance: 1,

    attackTypes: ["melee", "charge"],

    meleeAttack: 36,
    meleeWeapon: weapons.melee.cavalryLance,
    chargeBonus: 65,
    chargePenetration: 0.25,

    movement: 155,
    orgRadius: 76,
    orgRadiusBonus: 1.5,

    terrainModifiers: {
        water: {
            meleeAttack: -0.8,
            meleeDefense: -0.5,
            movement: -0.5
        },

        road: {
            movement: 0.2,
        },

        forest: {
            meleeAttack: -0.5,
            meleeDefense: -0.2,
            movement: -0.4
        },

        village: {
            meleeAttack: -0.8,
            meleeDefense: -0.2,
            movement: -0.4
        },
    }
}


const hussar = {
    id: "hussar",
    category: categories.lightCavalry,

    maxHp: 550,
    organization: 150,
    meleeDefense: 20,
    maxChargeResistance: 1,

    attackTypes: ["melee", "charge"],

    meleeAttack: 36,
    meleeWeapon: weapons.melee.cavalrySabre,
    chargeBonus: 60,
    chargePenetration: 0,

    movement: 155,
    orgRadius: 76,
    orgRadiusBonus: 1.5,

    terrainModifiers: {
        water: {
            meleeAttack: -0.8,
            meleeDefense: -0.5,
            movement: -0.5
        },

        road: {
            movement: 0.2,
        },

        forest: {
            meleeAttack: -0.5,
            meleeDefense: -0.2,
            movement: -0.4
        },

        village: {
            meleeAttack: -0.8,
            meleeDefense: -0.2,
            movement: -0.4
        },
    }
}


const cuirassier = {
    id: "cuirassier",
    category: categories.heavyCavalry,

    maxHp: 500,
    organization: 165,
    meleeDefense: 27,
    maxChargeResistance: 0.15,

    attackTypes: ["melee", "charge"],

    meleeAttack: 41,
    meleeWeapon: weapons.melee.cavalrySword,
    chargeBonus: 65,
    chargePenetration: 0.10,

    movement: 140,
    orgRadius: 120,
    orgRadiusBonus: 2,

    terrainModifiers: {
        water: {
            meleeAttack: -0.8,
            meleeDefense: -0.5,
            movement: -0.5
        },

        road: {
            movement: 0.2,
        },

        forest: {
            meleeAttack: -0.5,
            meleeDefense: -0.2,
            movement: -0.4
        },

        building: {
            meleeAttack: -0.8,
            meleeDefense: -0.2,
            movement: -0.4
        },
    }
}

const fourPoundFootArtillery = {
    id: "fourPoundFootArtillery",
    category: categories.artillery,

    maxHp: 600,
    organization: 150,
    meleeDefense: 8,
    maxChargeResistance: 0.5,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 6,
    meleeWeapon: weapons.melee.artillerySabre,
    chargeBonus: 5,
    chargePenetration: 0,

    rangeAttack: 29,
    totalRange: 340,
    ranges: { close: 110, mid: 200, long: 340 },
    rangeDamageModifier: { close: 0.65, mid: 0, long: -0.75 },
    rangeWeapons: {
        close: weapons.range.canisterFire4lb,
        mid: weapons.shell.cannonBall4lb,
        long: weapons.shell.cannonBall4lb
    },

    movement: 90,
    limberMovement: 60,
    chargeResistance: -0.5,
    orgRadius: 32,
    orgRadiusBonus: 0.6,
    
    terrainModifiers: {
        water: {
            meleeAttack: -0.8,
            meleeDefense: -0.5,
            movement: -0.5,
            rangeAttack: -1
        },

        road: {
            movement: 0.4
        },
        
        forest: {
            meleeDefense: 0.5,
            movement: -0.4,
            rangeAttack: -0.3,
        },
        
        village: {
            meleeDefense: 0.8,
            movement: 0.2
        }
    }
}

const sixInchHowitzer = {
    id: "sixInchHowitzer",
    category: categories.artillery,

    maxHp: 600,
    organization: 150,
    meleeDefense: 8,
    maxChargeResistance: 0.5,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 6,
    meleeWeapon: weapons.melee.artillerySabre,
    chargeBonus: 5,
    chargePenetration: 0,

    rangeAttack: 22,
    totalRange: 340,
    ranges: { close: 69, mid: 200, long: 340 },
    rangeDamageModifier: { close: 3, mid: 0, long: -0.4 },
    rangeWeapons: {
        close: weapons.range.howitzerCanisterFire,
        mid: weapons.shell.explosiveShell,
        long: weapons.shell.explosiveShell
    },

    movement: 90,
    limberMovement: 60,
    chargeResistance: -0.5,
    orgRadius: 32,
    orgRadiusBonus: 0.6,

    terrainModifiers: {
        water: {
            meleeAttack: -0.8,
            meleeDefense: -0.5,
            movement: -0.5,
            rangeAttack: -1
        },

        road: {
            movement: 0.4
        },

        forest: {
            meleeDefense: 0.5,
            movement: -0.4,
            rangeAttack: -0.3
        },

        village: {
            meleeDefense: 0.4,
            movement: -0.2,
            rangeAttack: -0.3,
        }
    }
}

const sixPoundHorseArtillery = {
    id: "sixPoundHorseArtillery",
    category: categories.artillery,

    maxHp: 600,
    organization: 150,
    meleeDefense: 8,
    maxChargeResistance: 0.5,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 6,
    meleeWeapon: weapons.melee.artillerySabre,
    chargeBonus: 5,
    chargePenetration: 0,

    rangeAttack: 33,
    totalRange: 370,
    ranges: { close: 120, mid: 230, long: 370 },
    rangeDamageModifier: { close: 0.75, mid: 0, long: -0.75 },
    rangeWeapons: {
        close: weapons.range.cannisterFire6lb,
        mid: weapons.shell.cannonBall6lb,
        long: weapons.shell.cannonBall6lb
    },

    movement: 135,
    limberMovement: 50,
    chargeResistance: -0.5,
    orgRadius: 32,
    orgRadiusBonus: 0.6,
    
    terrainModifiers: {
        water: {
            meleeAttack: -0.8,
            meleeDefense: -0.5,
            movement: -0.5,
            rangeAttack: -1
        },

        road: {
            movement: 0.4
        },
        
        forest: {
            meleeDefense: 0.5,
            movement: -0.4,
            rangeAttack: -0.3,
        },
        
        village: {
            meleeDefense: 0.4,
            movement: -0.2,
            rangeAttack: -0.3,
        }
    }
}


const eightPoundFootArtillery = {
    id: "eightPoundFootArtillery",
    category: categories.artillery,

    maxHp: 600,
    organization: 150,
    meleeDefense: 8,
    maxChargeResistance: 0.5,

    attackTypes: ["range", "melee", "charge"],

    meleeAttack: 6,
    meleeWeapon: weapons.melee.artillerySabre,
    chargeBonus: 5,
    chargePenetration: 0,

    rangeAttack: 36,
    totalRange: 400,
    ranges: { close: 130, mid: 235, long: 400 },
    rangeDamageModifier: { close: 0.85, mid: 0, long: -0.85 },
    rangeWeapons: {
        close: weapons.range.canisterFire,
        mid: weapons.shell.cannonBall,
        long: weapons.shell.cannonBall
    },

    movement: 80,
    limberMovement: 45,
    chargeResistance: -0.5,
    orgRadius: 32,
    orgRadiusBonus: 0.6,
    
    terrainModifiers: {
        water: {
            meleeAttack: -0.8,
            meleeDefense: -0.5,
            movement: -0.5,
            rangeAttack: -1
        },

        road: {
            movement: 0.4
        },
        
        forest: {
            meleeDefense: 0.5,
            movement: -0.4,
            rangeAttack: -0.3,
        },
        
        village: {
            meleeDefense: 0.4,
            movement: -0.2,
            rangeAttack: -0.3,
        }
    }
}


const twelvePoundFootArtillery = {
    id: "twelvePoundFootArtillery",
    category: categories.artillery,

    maxHp: 600,
    organization: 150,
    meleeDefense: 8,
    maxChargeResistance: 0.5,

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
            meleeAttack: -0.8,
            meleeDefense: -0.5,
            movement: -0.5,
            rangeAttack: -1
        },

        road: {
            movement: 0.4
        },
        
        forest: {
            meleeDefense: 0.5,
            movement: -0.4,
            rangeAttack: -0.3,
        },
        
        village: {
            meleeDefense: 0.4,
            movement: -0.2,
            rangeAttack: -0.3,
        }
    }
}


export const units = {
    lineInfantry,
    militiaInfantry,
    lightInfantry, 
    guardInfantry,
    dragoon,
    lancer,
    hussar,
    cuirassier,
    fourPoundFootArtillery,
    sixInchHowitzer,
    sixPoundHorseArtillery,
    eightPoundFootArtillery,
    twelvePoundFootArtillery
}