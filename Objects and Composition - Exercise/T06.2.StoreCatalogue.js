function storeCatalogue(data) {

    let catalogue = {};

    for (const line of data) {

        let [product, price] = line.split(' : ');
        price = Number(price);

        let firstChar = product.substring(0, 1);

        if (!catalogue.hasOwnProperty(firstChar)) {

            catalogue[firstChar] = { [product]: price };
        } else {
            catalogue[firstChar][product] = price;
        }
    }

    let sort = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    for (const key of sort) {

        console.log(key[0]);
        let objProduct = key[1];

        let sortProducts = Object.entries(objProduct).sort((a, b) => a[0].localeCompare(b[0]));

        for (const product of sortProducts) {

            let productName = product[0];
            let productPrice = product[1];
            console.log(`${productName}: ${productPrice}`);

        }

    }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)