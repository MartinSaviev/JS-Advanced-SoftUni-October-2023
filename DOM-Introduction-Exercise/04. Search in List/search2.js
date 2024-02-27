function search() {
   const towns = document.getElementsByTagName('li');
   const searching = document.getElementById('searchText').value.toLowerCase();
   let matches = 0;
   Array.from(towns).forEach(city => {

      city.style.fontWeight = 'normal';
      city.style.textDecoration = '';

      if (city.textContent.toLocaleLowerCase().includes(searching)) {
         city.style.fontWeight = 'bold';
         city.style.textDecoration = 'underline';
         matches++;
      }

   });
   return document.getElementById('result').textContent = `${matches} matches found`;
}