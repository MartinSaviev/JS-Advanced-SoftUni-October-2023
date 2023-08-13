function SumOfNumbers(num1, num2) {

    let firstNumber = Number(num1);
    let secondNumber = Number(num2);

    let result = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        result += i;

    }
    return result;
}

let result = SumOfNumbers('1', '5')
console.log(result);