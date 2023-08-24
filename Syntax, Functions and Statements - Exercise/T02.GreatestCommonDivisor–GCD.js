function GCD(first, second) {

    let firstNumber = Number(first);
    let secondNumber = Number(second);


    while (firstNumber !== secondNumber) {

        if (firstNumber > secondNumber) {
            
            firstNumber -= secondNumber;
        } else {
            secondNumber-=firstNumber;
        }
    }
    console.log(firstNumber);
}

GCD(15, 5)
GCD(2154, 458)
