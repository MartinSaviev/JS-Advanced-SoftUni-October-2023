function search() {
    let getListElements = Array.from(document.querySelectorAll('#towns li'));
    let input = document.getElementById('searchText');
    let result = document.getElementById("result");
 
    let counter = 0;
    for (const town of getListElements) {
       
       town.style.textDecoration = 'none';
       town.style.fontWeight = 'normal';
 
       if (town.textContent.toLocaleLowerCase().includes(input.value.toLocaleLowerCase()) && input.value !== '') {
          town.style.textDecoration = 'underline';
          town.style.fontWeight = 'bold';
          counter++;
       }
    }
    input.value = ''
    result.textContent = `${counter} matches found`
 
 }