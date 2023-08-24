function rotateArray(input,rotate) {

    for (let i = 0; i < rotate; i++) {

        let current = input.pop();
        input.unshift(current);
        
    }
    console.log(input.join(' '));
    
}
rotateArray(['1',
'2',
'3',
'4'],
2)