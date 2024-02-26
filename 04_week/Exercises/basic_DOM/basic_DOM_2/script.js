/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
/*Margit solution*/
const button = document.querySelector("#addFruitBtn");

const addDetails = () => {
  const fruitInput = document.querySelector("#fruitInput"); // what we need to input as a string. Trim is to trim the whitespaces.
  const fruitList = document.querySelector('#fruitList'); // The list where we append our child the unordered list.
  if (fruitInput){
    const newLi = document.createElement("li"); // creating new element name newLi not the same list from html.
    newLi.textContent = fruitInput.value.trim(); // newLi should be the same what we input.
    fruitList.appendChild(newLi); // append child newLi to fruitList.
    fruitInput.value = ' '; // after inputing the fruits name we need to clear the input field.

  } else{
    alert('Please enter a fruit name');
  }

};
button.addEventListener("click", addDetails);



/*const fruitIn = document.querySelector("#fruitInput");
const addFruit = document.querySelector("#addFruitBtn");
const fruitList = document.querySelector("#fruitList");
addFruit.addEventListener("click",()=> {
    const addFruit = fruitIn.value;
    const li = document.createElement("li");
    li.textContent = addFruit;
    fruitList.appendChild(li);
    fruitIn.value = " ";
});*/
