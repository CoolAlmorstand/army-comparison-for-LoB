
//import "./ui/app.js"

import { initialize, InitializeArmy} from "./initialize/initialize.js"

import { getArmysStats } from "./algorithm/get-stats/get-armys-stats.js"

import { units } from "./configs/units.js"
import "./ui/app.js"
// import { getRating } from "./get-stats/get-rating.js"
import { getChargeAttackScore, getBaseChargeAttack } from "./algorithm/get-stats/get-attack-stats/get-charge-score.js"




// const army1 = {
    // units: {
        // militiaInfantry: {
            // amount: 1
        // }
    // }
// }

// const army2 = {
    // units: {
        // guardInfantry: {
            // amount: 1
        // }
    // }
// }

initialize()
// InitializeArmy(army1)
// InitializeArmy(army2)
// const unit = units.guardInfantry
// const target = units.militiaInfantry
// const terrain = "land"


