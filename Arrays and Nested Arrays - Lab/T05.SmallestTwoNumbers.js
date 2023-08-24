function smallestTwoNumbers(input) {

    let smallestNumbers = input.sort((a, b) => a - b).splice(0, 2);
    console.log(smallestNumbers.join(' '));

}

smallestTwoNumbers([30, 15, 50, 5])