




export const shellDamageModifiers = {
    start: 60,
    end: 20,
    minimum: 0,
    maximum: 0.8
}

export const chargeResistanceModifier = {
    start: 115,
    maxResistanceLoss: 100,
    // how much charg res do you lose per 1org lose
    depreciationRatio: 2,
}


// this this tge avg for clamp( (A/B) - 1, -1, 0.5) accross all values of A and B ranging 0 - 1
export const proportionAvg = -0.23611111111111

export const tileWidth = 16

//export const terrains = ["forest", "land", "village", "river"]
export const terrains = ["land"]

