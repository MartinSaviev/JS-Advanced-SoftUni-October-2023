function lockedProfile() {

    let getProfileButton = Array.from(document.querySelectorAll('.profile button'));

    for (const element of getProfileButton) {
        element.addEventListener('click', showMore);
    }

    function showMore(ev) {
        let toggle = ev.target.parentNode.querySelector('div');

        let unlockValue = ev.target.parentNode.querySelector('input[value="unlock"]').checked;
        
        let text = ev.target.parentNode.querySelector('button');
        
        if (toggle.style.display === 'none' || toggle.style.display === '') {
            if (unlockValue) {
                toggle.style.display = 'inline';
                text.textContent = 'Hide it'
            }
        } else {
            toggle.style.display = 'none';
            text.textContent = 'Show more'
        }
    }
}