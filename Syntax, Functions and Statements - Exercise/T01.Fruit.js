function fruitTask(fruit, grams, price) {

    let weight = grams*price/1000; 
    let kilograms = grams/1000;

    let toFixedWeight = weight.toFixed(2)
    let tofixedKilograms = kilograms.toFixed(2)
   
    console.log(`I need $${toFixedWeight} to buy ${tofixedKilograms} kilograms ${fruit}.`);

}

fruitTask('orange', 2500, 1.80)