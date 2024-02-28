function deleteByEmail() {
    
    const tbody = Array.from(document.querySelectorAll('tbody')[0].children);
    let input = document.querySelector('input[name="email"]');
    let result = document.getElementById('result');

    for (let i = 0; i < tbody.length; i++) {

        if (tbody[i].children[1].textContent === input.value) {
            tbody[i].remove()
            result.textContent = 'Deleted';

        }else {
            result.textContent = 'Not found.';
        }
    }
    input.value = '';
}