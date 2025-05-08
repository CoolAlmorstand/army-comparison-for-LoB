export const categories = {
    infantry: {
        id: "infantry",
        enfiladeFireModifier: { damage: 0.75, orgDamage: 0.5 },
        rearFireModifier: { orgDamage: 0.75 },
        chargeResistance: { min: 0, max: 1 }
    },

    lightInfantry: {
        id: "lightInfantry",
        enfiladeFireModifier: { damage: 0.75, orgDamage: 0.5 },
        rearFireModifier: { orgDamage: 0.75 },
        chargeResistance: { min: 0, max: 1 }
    },

    artillery: {
        id: "artillery",
        weaponDamageResistance: {
            musket: -0.35,
            lightMusket: -0.40,
            bayonet: -0.60,
            calvarySabre: -0.70,
            cannonBall: 0.55,
            calvaryLance: -0.50,
            lightCannonBall: 0.30,
            explosiveShell: 0.65,
            calvarySword: -0.50
        },
        chargeResistance: { min: -0.5, max: 0.5 }
    },

    lightCavalry: {
        id: "lightCavalry",
        weaponDamageResistance: {
            musket: -0.45,
            lightMusket: -0.40,
            bayonet: -0.30,
            cannonBall: -0.25,
            cavalryLance: -0.05,
            lightCannonBall: -0.25,
            explosiveShell: -0.25,
            cavalrySword: -0.35,
            canisterFire: -0.25,
            lightCanisterFire: -0.25,
            howitzerCanister: -0.25
        },
        chargeResistance: { min: 0, max: 1 }
    },

    cavalry: {
        id: "cavalry",
        weaponDamageResistance: {
            musket: -0.45,
            lightMusket: -0.40,
            bayonet: -0.20,
            cannonBall: -0.25,
            cavalryLance: -0.05,
            lightCannonBall: -0.25,
            explosiveShell: -0.25,
            canisterFire: -0.25,
            lightCanisterFire: -0.25,
            howitzerCanister: -0.25
        },
        chargeResistance: { min: 0, max: 1 }
    },

    heavyCavalry: {
        id: "heavyCavalry",
        weaponDamageResistance: {
            musket: -0.40,
            lightMusket: -0.40,
            bayonet: -0.25,
            cavalrySabre: 0.50,
            cannonBall: -0.25,
            cavalryLance: -0.20,
            lightCannonBall: -0.25,
            explosiveShell: -0.25,
            canisterFire: -0.25,
            lightCanisterFire: -0.25,
            howitzerCanister: -0.25
        },
        chargeResistance: { min: 0, max: 1 }
    }
}