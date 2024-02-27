function solve() {

  const inputText = document.getElementById('text').value.toLowerCase();
  const inputTextNameConverter = document.getElementById('naming-convention').value.toLowerCase();
  const resultText = document.getElementById('result');

  let resultArray = [];
  let words = inputText.split(' ');

  if (inputTextNameConverter === 'camel case') {
    cycleWords(words)
  }
  else if (inputTextNameConverter === 'pascal case') {
    cycleWords(words)
  } else {
    resultText.textContent = 'Error!'
    return;
  }

  function cycleWords(words) {
    for (let i = 0; i < words.length; i++) {

      if (i === 0 && inputTextNameConverter === 'camel case') {
        resultArray.push(words[i]);

      } else {
        createWord(words[i]);
      }
    }
  }
  
  function createWord(word) {
    resultArray.push(word.substring(0, 1).toUpperCase() + word.substring(1));
  }

  resultArray = resultArray.join('');
  resultText.textContent = resultArray;
}