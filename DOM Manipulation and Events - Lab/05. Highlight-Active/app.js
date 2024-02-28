function focused() {

    let section = Array.from(document.querySelectorAll('input[type="text"]'));

    for (const element of section) {

        element.addEventListener('focus', mouseFocused);
        element.addEventListener('blur', onBlur);

    }

    function mouseFocused(ev) {

        ev.target.parentElement.classList.add('focused');
    }

    function onBlur(ev) {

        ev.target.parentElement.classList.remove('focused');
    }
}