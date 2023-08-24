function negativeOrPositiveNumbers(input) {

    let array = [];

    for (let i = 0; i < input.length; i++) {

        let currentNumber = input[i];
        if (currentNumber < 0) {
            array.unshift(currentNumber);
        } else {
            array.push(currentNumber);
        }
    }
    console.log(array.join('\n'));

}

negativeOrPositiveNumbers([7, -2, 8, 9])
negativeOrPositiveNumbers([3, -2, 0, -1]);