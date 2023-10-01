function sumTable() {

    let priceAllElements = document.querySelectorAll('tbody tr td')

    let totalPrice = document.getElementById('sum');

    let array = Array.from(priceAllElements);
    let sum = 0;

    for (let i = 0; i < array.length - 2; i++) {
        let currElement = array[i]

        if (i % 2 == 1) {

            let currValue = currElement.textContent;
            currValue = Number(currValue);
            sum += currValue;
        }
    }
    totalPrice.textContent = sum;
   
}