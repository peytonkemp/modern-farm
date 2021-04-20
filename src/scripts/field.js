let allPlants = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        seed.forEach(item => allPlants.push(item));
    } else {
        allPlants.push(seed);
    }
}

export const usePlants = () => {
    return allPlants.slice
}
