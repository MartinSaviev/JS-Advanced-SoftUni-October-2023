function solve() {
   const btnAdd = Array.from(document.getElementsByClassName('add-product'));
   const btnCheckout = document.getElementsByClassName('checkout')[0];
   const textArea = document.querySelector('textarea');

   for (const btn of btnAdd) {
      btn.addEventListener('click', onAddProduct);
   }
   let products = [];
   let allProductsPrice = 0;
   function onAddProduct(ev) {
      const divElement = ev.target.parentElement.parentElement;
      let productName = divElement.getElementsByClassName('product-title')[0].textContent;
      let productPrice = Number(divElement.getElementsByClassName('product-line-price')[0].textContent);
      console.log(productPrice);
      if (!products.includes(productName)) {

         products.push(productName)
         
      }
      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      allProductsPrice += productPrice;

   }
   btnCheckout.addEventListener('click', onCheckout)

   function onCheckout() {
      textArea.textContent += `You bought ${products.join(', ')} for ${allProductsPrice.toFixed(2)}.`
      for (const btn of btnAdd) {
         btn.removeEventListener('click', onAddProduct);
      }
      btnCheckout.removeEventListener('click', onCheckout);
   }
}