function diagonalAttack(input) {

    let newArray = [];

    let sumNumbersLeftDiagonal = 0;
    let sumNumbersRightDiagonal = 0;

    for (let firstRoll = 0; firstRoll < input.length; firstRoll++) {
        let currRolls = input[firstRoll].split(' ').map(Number);
        newArray.push(currRolls);
    }

    for (let row = 0; row < newArray.length; row++) {
        
        let currNumberLeft = newArray[row][row];
        let currNumberRight = newArray[row][newArray[row].length - 1 - row];

        sumNumbersLeftDiagonal += currNumberLeft;
        sumNumbersRightDiagonal += currNumberRight;
    }

    if (sumNumbersLeftDiagonal === sumNumbersRightDiagonal) {

        for (let row = 0; row < newArray.length; row++) {
            for (let col = 0; col < newArray[row].length; col++) {

                if (col !== row && col !== newArray[row].length - 1 - row) {
                    newArray[row][col] = sumNumbersLeftDiagonal;
                }
            }
        }
    }

    for (const element of newArray) {
        console.log(element.join(' '));
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0'])


