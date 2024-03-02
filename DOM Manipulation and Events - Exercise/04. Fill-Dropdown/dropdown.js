function addItem() {
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    let menu = document.getElementById('menu');

    let options = document.createElement('option');
    options.text = inputText.value;
    options.value = inputValue.value;
    menu.appendChild(options);


    inputText.value = '';
    inputValue.value = '';
}