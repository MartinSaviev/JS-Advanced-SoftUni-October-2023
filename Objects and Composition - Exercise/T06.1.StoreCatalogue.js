function storeCatalogue(data) {

    let array = [];
    for (const line of data) {

        let [name, value] = line.split(' : ');

        let firstChar = name[0];

        let foundObject = array.find((o) => Object.keys(o)[0] === firstChar);
        if (!foundObject) {

            array.push({ [firstChar]: { [name]: value } })
        } else {
            foundObject[firstChar][name] = value;
        }
    }

    let sorted = array.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));

    for (const key of sorted) {

        let printKeys = key;

        for (const char in printKeys) {

            console.log(char);

            let sortedProducts = Object.keys(printKeys[char]).sort();
            
            for (const objName of sortedProducts) {
                console.log(`${objName}: ${printKeys[char][objName]}`);
            }
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