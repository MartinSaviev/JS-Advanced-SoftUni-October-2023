function diagonalAttack(input) {

    let newArray = [];

    for (let firstRoll = 0; firstRoll < input.length; firstRoll++) {

        let currRolls = input[firstRoll].split(' ').map(Number);
        newArray.push(currRolls);
        
    }
    let currElement = 0;
    for (let roll = 0; roll < newArray.length; roll++) {

        for (let col = roll; col <= roll; col++) {

            currElement += newArray[roll][col];
        }
    }

}
diagonalAttack(
    [    '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'])