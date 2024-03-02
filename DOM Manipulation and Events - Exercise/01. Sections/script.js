function create(input) {

   let body = input;

   let parentDiv = document.getElementById('content');

   for (const text of body) {

      let paragraph = document.createElement('p');
      paragraph.textContent = text;
      paragraph.style.display = 'none';
      
      let div = document.createElement('div');
      div.appendChild(paragraph);
      parentDiv.appendChild(div);

      div.addEventListener('click',showText)
   }

   function showText(ev) {

      ev.target.children[0].style.display = 'block'
   }

}