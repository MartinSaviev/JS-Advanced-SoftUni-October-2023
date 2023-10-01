function lowestPriceInCities(input) {
    let products = [];

    for (const line of input) {
        let [town, product, price] = line.split(' | ');

        let existingProduct = products.find(p => p.name === product);

        if (!existingProduct) {
            existingProduct = {
                name: product,
                towns: {}
            };
            products.push(existingProduct);
        }

        existingProduct.towns[town] = Number(price);
    }

    for (const product of products) {
        const sortedTowns = Object.entries(product.towns).sort((a, b) => a[1] - b[1]);
        const [town, price] = sortedTowns[0];
        console.log(`${product.name} -> ${price} (${town})`);
    }
    
}

lowestPriceInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);