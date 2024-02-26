/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.

const content = document.getElementById("content");
const button = document.getElementById("button");
function myfunction(){
    content.textContent = "Hello, World!"};
button.addEventListener("click", myfunction);
*/


/*Margit solution:*/

/*const textChanger = () =>{ // this is arrow function.
    const textPlaceholder = document.getElementById("content");
 textPlaceholder.textContent ='Hello World!';
};*/

function textChanger(){ // this is normal function.
    const textPlaceholder = document.getElementById("content");
 textPlaceholder.textContent ='Hello World!';
};