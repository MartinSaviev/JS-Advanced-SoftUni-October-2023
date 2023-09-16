function ExtractIncreasingSubsetFromArray(input) {

    let resultArray = [];

    for (let i = 0; i < input.length; i++) {

        let currNumber = input[i];

        if (i === 0) {

            resultArray.push(currNumber);

        } else if (resultArray[resultArray.length - 1] <= currNumber) {

            resultArray.push(currNumber);
        }
    }

    return resultArray;
}

ExtractIncreasingSubsetFromArray(

    [0,1, 3, 8, 4, 10, 12, 3, 2, 24])