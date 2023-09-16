function sortArray(input) {

    let sortArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

    sortArray.forEach(element => {
        console.log(element);
    });
}

sortArray(['alpha',
    'beta', 'gama'])