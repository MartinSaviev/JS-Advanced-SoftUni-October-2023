function magicMatrices(matrix) {

    let isMatrix = true;
    let firstRow = 0;

    for (let f = 0; f < matrix.length; f++) {

        for (let f1 = 0; f1 < matrix.length; f1++) {

            firstRow += matrix[f][f1];

        }

        break;
    }

    for (let row = 0; row < matrix.length; row++) {

        let sumRow = 0;
        let sumCol = 0;

        for (let innerRow = 0; innerRow < matrix.length; innerRow++) {

            sumRow += matrix[row][innerRow];

        }

        printNumber = [];
        for (let col = 0; col < matrix.length; col++) {

            sumCol += matrix[col][row];
        }

        if ((sumRow !== firstRow) || (firstRow !== sumCol)) {
            isMatrix = false;
            break;

        }

    }
    if (isMatrix) {
        console.log(true);

    } else {
        console.log(false);

    }
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])