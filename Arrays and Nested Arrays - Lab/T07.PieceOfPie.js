function pieceOfPie(input, start, end) {

    let array = [];

    for (let i = 0; i < input.length; i++) {

        let currNamePie = input[i];

        if (currNamePie === start) {

            for (let c = i; c < input.length; c++) {
                array.push(input[c]);

                if (input[c] === end) {
                    
                    return array;
                }
            }

        }
    }
}

let result = pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')

console.log(result);