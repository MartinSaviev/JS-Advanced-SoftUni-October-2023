function attachGradientEvents() {

    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', OnMouseMove);
    function OnMouseMove(ev) {

        let move = Math.floor(ev.offsetX / gradient.clientWidth * 100);
        result.textContent = move + '%';

    }

}