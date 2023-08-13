function stringLength(firstWord, secondWord,thirdWord) {

    let sum = firstWord.length + secondWord.length + thirdWord.length;

    let average = Math.floor(sum / 3);

    console.log(sum);
    
    console.log(average);
    
}
stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3');