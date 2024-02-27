function toggle() {

    let button = document.querySelector('.button');
    let divClass = document.getElementById('extra')
    
    if (button.textContent === 'More') {

        button.textContent = 'Less'
        divClass.style.display = 'block'
        
    } else {

        button.textContent = 'More'
        divClass.style.display = 'none'
    }

}