export const weapons = {
    range: {
        musket: {
            id: "musket",
            orgDamageRatio: 60,
            shootingAngle: 80
        },
    
        lightMusket: {
            id: "lightMusket",
            orgDamageRatio: 60,
            shootingAngle: 80
        },
        
        canisterFire4lb: {
            type: "range",
            id: "canisterFire4lb",
            damageModifier: 0.65, // +65%
            orgDamageRatio: 50,
            enfiladeFire: true,
            longRange: 110,
            shootingAngle: 60,
            projectilePenetration: 0.5 // 50%
        },
        
        cannisterFire6lb: {
            type: "range",
            id: "cannisterFire6lb",
            damageModifier: 0.75,
            orgDamageRatio: 50,
            enfiladeFire: true,
            shootingAngle: 60,
            projectilePenetration: 0.5,
        
            range: {
                long: 120
            }
        },
        
        canisterFire: {
            id: "canisterFire",
            orgDamageRatio: 51,
            shootingAngle: 60
        },
        
        lightCanisterFire: {
            id: "lightCanisterFire",
            orgDamageRatio: 51,
            shootingAngle: 60
        },
        
        howitzerCanisterFire: {
            id: "howitzerCanisterFire",
            orgDamageRatio: 56,
            shootingAngle: 60
        }
    },
    
    shell: {
        lightCannonBall: {
            id: "lightCannonBall",
            type: "shell",
            orgDamageRatio: 45,
            aofBonus : 1.5,
            shootingAngle: 60
        },
        
        cannonBall4lb: {
            id: "cannonBall4lb",
            type: "shell",
            aofBonus : 1.5,
            orgDamageRatio: 45,
            enfiladeFire: true,
            shootingAngle: 60,
            arcHeight: 0.5,
        
            range: {
                mid: 200,
                long: 340
            },
        
            longRangeAttackModifier: -0.75,
            projectilePenetration: 0.75,
        
            areaOfEffect: {
                type: "trapezoidal",
                topWidth: 24,
                bottomWidth: 16,
                height: 52,
                absorption: 2.0 // +200%
            },
        
            diminishByTargetOrg: {
                from: 120,
                to: 90,
                by: -40
            }
        },
        
        cannonBall6lb: {
            id: "cannonBall6lb",
            type: "shell",
            aofBonus : 1.5,
            orgDamageRatio: 50,
            enfiladeFire: true,
            shootingAngle: 60,
            arcHeight: 0.5,
        
            range: {
                mid: 230,
                long: 370
            },
        
            longRangeAttackModifier: -0.75,
            projectilePenetration: 0.75,
        
            areaOfEffect: {
                type: "trapezoidal",
                topWidth: 25,
                bottomWidth: 17,
                height: 56,
                absorption: 2.0 // +200%
            },
        
            diminishByTargetOrg: {
                from: 120,
                to: 90,
                by: -40
            }
        },
        
        cannonBall: {
            id: "cannonBall",
            type: "shell",
            orgDamageRatio: 48,
            aofBonus : 1.5,
            shootingAngle: 60
        },
        
        explosiveShell: {
            id: "explosiveShell",
            type: "shell",
            orgDamageRatio: 50,
            aofBonus : 1.5,
            shootingAngle: 60
        }
    },
    
    melee: {
        bayonet: {
            id: "bayonet",
            damageModifier: 1,
            orgDamageRatio: 60
        },
        
        dragoonSword: {
            id: "dragoonSword",
            damageModifier: 1,
            orgDamageRatio: 60
        },
        
        artillerySabre: {
            id: "artillerySabre",
            damageModifier: 1,
            orgDamageRatio: 60
        },
        
        cavalrySabre: {
            id: "cavalrySabre",
            damageModifier: 1,
            orgDamageRatio: 60
        },
        
        cavalryLance: {
            id: "cavalryLance",
            damageModifier: 1,
            orgDamageRatio: 60
        },
        
        cavalrySword: {
            id: "cavalrySword",
            damageModifier: 1,
            orgDamageRatio: 60
        }
    }
}