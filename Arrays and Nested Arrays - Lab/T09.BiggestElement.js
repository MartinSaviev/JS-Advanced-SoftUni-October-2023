function biggestElement(input) {

    let newArray = [];

    for (let i = 0; i < input.length; i++) {

        let currEl = input[i];
        for (let z = 0; z < currEl.length; z++) {

            newArray.push(currEl[z]);

        }
    }

    let maxElement = newArray.sort((a, b) => a - b).splice(-1)[0]
    return maxElement;

}

let result = biggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);

    console.log(result);
