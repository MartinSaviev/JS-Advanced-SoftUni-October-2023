function processOddPositions(input) {

    let oddPositionsNumbers = input.filter((v, i) => i % 2 === 1)
    .map(v => v * 2)
    .reverse();

    let result = oddPositionsNumbers.join(' ');
    return result

}

let result = processOddPositions([10, 15, 20, 25]);
console.log(result);