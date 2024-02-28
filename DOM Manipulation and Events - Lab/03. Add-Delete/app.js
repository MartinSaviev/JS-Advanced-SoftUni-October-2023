function addItem() {

    const ulItems = document.getElementById('items');
    const inputText = document.getElementById('newItemText');

    let li = document.createElement('li');
    let link = document.createElement('a');

    li.textContent = inputText.value;
    li.appendChild(link);

    link.href = '#';
    link.textContent = '[Delete]'

    ulItems.appendChild(li);

    link.addEventListener('click', onDelete)

    function onDelete(ev) {
        ev.target.parentElement.remove()
    }
    inputText.value = '';

}