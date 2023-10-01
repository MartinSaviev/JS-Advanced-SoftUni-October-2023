function storeCatalogue(input) {

    let sortedCatalogue = input.sort((a, b) => a.localeCompare(b));
    
    let products = {};

    for (const key in sortedCatalogue) {
        sortedCatalogue[key] = sortedCatalogue[key].split(' : ').join(': ')
        let firstLetter = sortedCatalogue[key][0];

        if (!products.hasOwnProperty(firstLetter)) {
            products[firstLetter] = [];
        }
        products[firstLetter].push(sortedCatalogue[key]);

    }

    for (const key in products) {
        console.log(`${key}`);

        let print = products[key];

        for (const key in print) {
            console.log(`  ${print[key]}`);

        }
    }
}

storeCatalogue(
    ['Apricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'])