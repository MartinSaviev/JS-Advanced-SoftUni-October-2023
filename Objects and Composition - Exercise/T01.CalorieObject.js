function calorieObject(input) {

    let object = {};

    for (let i = 0; i < input.length; i += 2) {

        let firstElement = input[i];
        let secundElement = input[i+1];
        secundElement = Number(secundElement)

        object[firstElement] = secundElement;

    }

    console.log(object);

}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);