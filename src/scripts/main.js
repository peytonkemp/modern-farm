console.log("Welcome to the main module")
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan()

const asparagusSeed = createAsparagus()

console.log(usePlants())


addPlant()
usePlants()
plantSeeds()
