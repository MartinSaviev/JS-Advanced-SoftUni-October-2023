function diagonalSum(input) {

    let firstDiagonalElement = 0;
    let lastDiagonalElement = 0;

    for (let i = 0; i < input.length; i++) {

        firstDiagonalElement += input[i][i];

        lastDiagonalElement += input[i][input.length - 1 - i];


    }

    console.log(`${firstDiagonalElement} ${lastDiagonalElement}`);
    
}

diagonalSum(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)
diagonalSum (
    [[20, 40],
    [10, 60]]
)
