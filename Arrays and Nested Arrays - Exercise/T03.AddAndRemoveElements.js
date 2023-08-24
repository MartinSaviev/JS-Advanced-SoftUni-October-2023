function addAndRemoveElements(input) {

    let numberArray = [];
    for (let i = 0; i < input.length; i++) {

        let command = input[i];
        if (command === 'add') {
            numberArray.push(i + 1);
        } else {

            numberArray.pop();

        }
    }

    if (numberArray.length > 0) {

        console.log(numberArray.join('\n'));

    } else {
        console.log('Empty');

    }
}

addAndRemoveElements(
    ['add',
        'add',
        'add',
        'add'])
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'])
addAndRemoveElements(['remove',
    'remove',
    'remove'])