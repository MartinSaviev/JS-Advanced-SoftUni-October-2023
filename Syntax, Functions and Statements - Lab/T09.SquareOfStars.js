function SquareofStars(input) {

    let square =[];
    for (let r = 1; r <= input; r++) {

        for (let c = 1; c <= input; c++) {

            square.push('*');
        }
        console.log(square.join(' '));
        square =[];
    }

}
SquareofStars(5)