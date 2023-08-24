function cookingByNumbers(num, p1, p2, p3, p4, p5, p6) {

    let number = Number(num);

    let arrOfCommands = [p1, p2, p3, p4, p5, p6]

    for (let i = 0; i < arrOfCommands.length; i++) {

        let currCommands = arrOfCommands[i];

        switch (currCommands) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;

            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;

            case 'spice':
                number += 1;
                console.log(number);
                break;

            case 'bake':
                number *= 3;
                console.log(number);
                break;

            case 'fillet':
                let percentNumber = number * 0.20;
                number -= percentNumber;
                console.log(number);
                break;
        }
       
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')