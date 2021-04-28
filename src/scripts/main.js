console.log("Welcome to the main module")
import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants, useHarvest } from "./harvester.js";
import { Catalog } from "./catalog.js";


const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plantsUsed = usePlants()

harvestPlants(plantsUsed)

const harvestedFood = useHarvest()
console.log('harvestedFood: ', harvestedFood);

const htmlElementCropTypes = document.querySelector(".container")

htmlElementCropTypes.innerHTML = Catalog(harvestedFood)