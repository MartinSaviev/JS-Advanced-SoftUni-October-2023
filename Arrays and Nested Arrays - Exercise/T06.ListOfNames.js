function listOfNames(input) {

    let orderNames = input.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < orderNames.length; i++) {

        console.log(`${i+1}.${orderNames[i]}`);

    }

}
listOfNames(["John", "Bob", "Christina", "Ema"])