export const categories = {
    infantry: {
        id: "infantry",
        enfiladeFireModifier: { damage: 0.75, orgDamage: 0.5, },
        rearFireModifier: { orgDamage: 0.75, },
        chargeResistance: { min: 0, max: 1 }
    },
    
    lightInfantry: {
        id: "lightInfantry",
        enfiladeFireModifier: { damage: 0.75, orgDamage: 0.5 },
        rearFireModifier: { orgDamage: 0.75, },
        chargeResistance: { min: 0, max: 1 }
    },
    
    artillery: {
        id: "artillery",
        musketDamageResistance: 1 - -0.35,
        lightMusketDamageResistance: 1 - -0.40,
        bayonetDamageResistance: 1 - -0.60,
        calvarySabreDamageResistance: 1 - -0.70,
        cannonBallDamageResistance: 1 - 0.45,
        calvaryLanceDamageResistance: 1 - -0.50,
        lightCannonBallDamageResistance: 1 - 0.70,
        explosiveShellDamageResistance: 1 - 0.35,
        chargeResistance: { min: -0.5, max: 0.5 },
        calvarySwordDamageResistance: -0.50
    },
    
    lightCalvary: {
        id: "lightCalvary",
        musketDamageResistance: 1 - -0.45,
        lightMusketDamageResistance: 1 - -0.40,
        bayonetDamageResistance: 1 - -0.30,
        cannonBallDamageResistance: 1 - -0.25,
        cavalryLanceDamageResistance: 1 - -0.05,
        lightCannonBallDamageResistance: 1 - -0.25,
        explosiveShellDamageResistance: 1 - -0.25,
        cavalrySwordDamageResistance: 1 - -0.35,
        canisterFireDamageResistance: 1 - -0.25,
        lightCanisterFireDamageResistance: 1 - -0.25,
        howitzerCanisterDamageResistance: 1 - -0.25,
        chargeResistance: { min: 0, max: 1 }

    },
    
    cavalry: {
        id: "cavalry",
        musketDamageResistance: 1 - -0.45,
        lightMusketDamageResistance: 1 - -0.40,
        bayonetDamageResistance: 1 - -0.20,
        cannonBallDamageResistance: 1 - -0.25,
        cavalryLanceDamageResistance: 1 - -0.05,
        lightCannonBallDamageResistance: 1 - -0.25,
        explosiveShellDamageResistance: 1 - -0.25,
        canisterFireDamageResistance: 1 - -0.25,
        lightCanisterFireDamageResistance: 1 - -0.25,
        howitzerCanisterDamageResistance: 1 - -0.25,
        chargeResistance: { min: 0, max: 1 }
    },
    
    heavyCavalry: {
        id: "heavyCavalry",
        musketDamageResistance: 1 - -0.40,
        lightMusketDamageResistance: 1 - -0.40,
        bayonetDamageResistance: 1 - -0.25,
        cavalrySabreDamageResistance: 1 - 0.50,
        cannonBallDamageResistance: 1 - -0.25,
        cavalryLanceDamageResistance: 1 - -0.20,
        lightCannonBallDamageResistance: 1 - -0.25,
        explosiveShellDamageResistance: 1 - -0.25,
        canisterFireDamageResistance: 1 - -0.25,
        lightCanisterFireDamageResistance: 1 - -0.25,
        howitzerCanisterDamageResistance: 1 - -0.25,
        chargeResistance: { min: 0, max: 1 }
    }
}
