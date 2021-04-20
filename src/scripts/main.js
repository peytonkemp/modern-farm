console.log("Welcome to the main module")
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";


const asparagusSeed = createAsparagus()
const yearlyPlan = createPlan()

console.log(asparagusSeed)





addPlant()
usePlants()
console.log('yearlyPlan: ', yearlyPlan);

