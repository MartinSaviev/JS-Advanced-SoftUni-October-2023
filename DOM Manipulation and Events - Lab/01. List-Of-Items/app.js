function addItem() {
    const ulItems = document.getElementById('items');

    console.log(ulItems);

    const inputText = document.getElementById('newItemText');

    let li = document.createElement('li');
    li.textContent = inputText.value;
    ulItems.appendChild(li);
    inputText.value = '';

}