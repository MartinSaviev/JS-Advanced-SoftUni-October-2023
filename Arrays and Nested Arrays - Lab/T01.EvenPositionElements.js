function evenPositionElement(input) {

    let evenElements = input.filter((a, i) => i % 2 === 0);
    console.log(evenElements.join(' '));

}

evenPositionElement(['20', '30', '40', '50', '60'])