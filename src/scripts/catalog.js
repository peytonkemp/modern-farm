export const Catalog = (harvestedFood) => {
    let HTML = ""

    for (const crop of harvestedFood) {
        HTML += `<section class="plant">${crop.type}</section>`

    }
    return HTML

}