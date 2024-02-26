


const form = document.querySelector('.form-container');
const priceCalc = ()=> {
const typeSelect = document.querySelector('#type');
const checkboxes = document.querySelectorAll('input[type="checkbox"]'); // to check the checkboxes if they are checked or not.
const priceBanner =  document.querySelector('#totalPrice');
let totalAmount = parseInt(typeSelect.value); // convert string to numbers.
for (const item of checkboxes){  // for of can be only used in arrays and nodelist.
if(item.checked){
    totalAmount += parseInt(item.value);
}

}
priceBanner.textContent = `$${totalAmount}`;

};

form.addEventListener('change', priceCalc);