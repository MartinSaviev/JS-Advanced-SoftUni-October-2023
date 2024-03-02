function solve() {

    let [input, output] = Array.from(document.querySelectorAll('textarea'));
    let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
    let tbody = document.querySelector('tbody');

    generateBtn.addEventListener('click', generate)
    buyBtn.addEventListener('click', onBuy)

    function generate() {

        let data = JSON.parse(input.value);

        for (const item of data) {

            const row = document.createElement('tr');
            console.log(item);
            row.appendChild(createColum('img', item.img));
            row.appendChild(createColum('p', item.name));
            row.appendChild(createColum('p', item.price));
            row.appendChild(createColum('p', item.decFactor));
            row.appendChild(createColum('input', 'checkbox'));

            tbody.appendChild(row);
        }
    }

    function createColum(type, content) {

        const result = document.createElement('td');
        let inner;
        if (type === 'img') {

            inner = document.createElement('img');
            inner.src = content

        } else if (type === 'p') {
            inner = document.createElement('p');
            inner.textContent = content
        } else {
            inner = document.createElement('input');
            inner.type = content
        }
        result.appendChild(inner);
        return result;
    }

    function onBuy(event) {
        let checkedElements = Array.from(event.target.parentElement.querySelectorAll('input[type=checkbox]'));
        let arrayFurniture = []
        let totalPrice = 0;
        let averageDescriptionFactor = 0
        let counter = 0;
        for (const check of checkedElements) {
            if (check.checked === true) {
                let nameFurniture = check.parentElement.parentElement.children[1].children[0].textContent.trim();
                let price = check.parentElement.parentElement.children[2].children[0].textContent.trim();
                let factor = check.parentElement.parentElement.children[3].children[0].textContent.trim();
                totalPrice += Number(price);
                averageDescriptionFactor += Number(factor);

                arrayFurniture.push(nameFurniture)
                counter++;
            }
        }
        output.value = `Bought furniture: ${arrayFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDescriptionFactor / counter}`;
    }
}