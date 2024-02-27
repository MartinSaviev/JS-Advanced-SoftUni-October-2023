function solve() {

  let inputText = document.getElementById('input').value;
  let splitText = inputText.split('.').filter(s => s !== '');
  let addText = document.getElementById('output');

  while (splitText.length > 0) {

    let threeSentence = splitText.splice(0, 3).join('. ') + '.';

    let paragraph = document.createElement('p');
    paragraph.textContent = threeSentence;
    addText.appendChild(paragraph);
    
  }

}