function biggerHalf(input) {

    let sortArray = input.sort((a, b) => {
        return a - b;
    })
    if (sortArray.length % 2 == 0) {

        let halfArray = sortArray.slice(sortArray.length / 2);
        return halfArray;

    } else {
        let halfArray = sortArray.slice(sortArray.length / 2);
        return halfArray;
    }

}

biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6]);