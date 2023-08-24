function sameNumbers(input) {

    const numbers = input.toString()
        .split('')
        .map(Number);

    let isTrue = true;
    const firstNumber = numbers[0];

    for (let i = 0; i < numbers.length; i++) {

        let secondNumber = numbers[i + 1];

        if (secondNumber === undefined) {
            break;
        }

        if (firstNumber !== secondNumber) {

            isTrue = false;
            break;
        }

    }

    let sumAllDigits = numbers.reduce((a, b) => a + b, 0);

    if (isTrue) {
        console.log(true);

    } else {
        console.log(false);

    }
    console.log(sumAllDigits);

}

sameNumbers(21);
sameNumbers(333);

