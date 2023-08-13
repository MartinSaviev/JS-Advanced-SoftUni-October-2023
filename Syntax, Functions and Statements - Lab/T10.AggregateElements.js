function aggregateElements(input) {

    let sumElements = input.reduce((a, b) => a + b, 0);
    console.log(sumElements);

    let inverse = input.reduce((x, y) => x + 1 / y, 0)
    console.log(inverse);

    let concatElements = [].concat(input);
    console.log(concatElements.join(''));

}

aggregateElements([1, 2, 3])