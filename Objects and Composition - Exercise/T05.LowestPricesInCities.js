function lowestPriceInCities(input) {

    let orderList = {};

    for (const line of input) {

        let [town, product, price] = line.split(' | ');

        if (!orderList[product]) {

            orderList[product] = {};
        }

        orderList[product][town]= Number(price);

    }
    
    for (const [product,towns] of Object.entries(orderList)) {
        
        const sortTownAndPrice = Object.entries(towns);

        const sorted = sortTownAndPrice.sort((a,b)=> a[1]-b[1]);

        const [town,price] = sorted[0];
        console.log(`${product} -> ${price} (${town})`);
        
    }
}

lowestPriceInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])