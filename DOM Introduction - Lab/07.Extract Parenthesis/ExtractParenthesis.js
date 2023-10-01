function extract() {

    let getText = document.getElementById('content');

    let text = getText.textContent;

    let pattern = /\(([A-Za-z\s]+)\)/g;

    let array = [];

    let match = pattern.exec(text);

    while (match) {

        array.push(`${match[1]}; `);
        match = pattern.exec(text);

    }

    return(array.join(' '));
}