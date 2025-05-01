    



const forest = {
    weight: 0,
    //projectile absorptions
    musket: 0.2,
    lightMusket: 0.16,
    cannonBall: 0.18,
    heavyCannonBall: 0.15,
    lightCannonBall: 0.2,
    explosiveShell: 0.02,
    cannisterFire: 0.2,
    heavyCanisterFire: 0.2,
    lightCanisterFire: 0.2,
    howitzerCanister: 0.2
}

const village = {
    weight: 0,
    // projectile absorption 
    musket: 0.6,
    lightMusket: 0.55,
    cannonBall: 0.5,
    heavyCannonBall: 0.45,
    lightCannonBall: 0.6,
    explosiveShell: 0.04,
    cannisterFire: 0.6,
    heavyCanisterFire: 0.6,
    lightCanisterFire: 0.6,
    howitzerCanister: 0.6
}

const land = {
    weight: 1
}
export const terrains = {
    land,
    forest,
    village
}