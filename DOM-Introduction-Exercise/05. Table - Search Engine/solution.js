function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let lineCells = Array.from(document.querySelectorAll('tbody tr'));
   let searchField = document.getElementById('searchField');


   function onClick() {

      for (let i = 0; i < lineCells.length; i++) {
         lineCells[i].classList.remove('select');
         let line = Array.from(lineCells[i].children);


         for (const nameMailCourse of line) {

            if (nameMailCourse.textContent.includes(searchField.value) && searchField.value !== '') {
               lineCells[i].classList.add('select');
            }

         }
      }
      searchField.value = ''
   }
}