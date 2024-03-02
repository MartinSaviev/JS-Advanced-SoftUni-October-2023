function encodeAndDecodeMessages() {

    let textAreaEncode = document.querySelector('textarea[placeholder="Write your message here..."]');
    let textareaDecode = document.querySelector('textarea[placeholder="No messages..."]')
    let buttons = Array.from(document.querySelectorAll('#main button'));

    for (let i = 0; i < buttons.length; i++) {

        buttons[0].addEventListener('click', encode);
    }

    let newText = '';

    function encode() {

        let textArea = textAreaEncode.value

        for (let i = 0; i < textArea.length; i++) {

            let currEl = textArea[i].charCodeAt(0) + 1;
            newText += String.fromCharCode(currEl);
        }

        textareaDecode.value = newText;
        newText = '';
        textAreaEncode.value = '';

    }

    for (let i = 0; i <= buttons.length; i++) {

        buttons[1].addEventListener('click', deCode);
    }

    let textDecode = '';

    function deCode() {

        let textArea = textareaDecode.value
        textareaDecode.value = '';

        for (let i = 0; i < textArea.length; i++) {

            let currEl = textArea[i].charCodeAt(0) - 1;
            textDecode += String.fromCharCode(currEl);
        }

        textareaDecode.value = textDecode;
    }
}