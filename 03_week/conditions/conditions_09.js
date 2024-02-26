// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.

let userInput = prompt(
  "Ask me Yes or No question?");
let randomNumber = Math.floor(Math.random() * 8);

switch (randomNumber) {
  case 1:
    alert("That is strange! You look like alien.");
    break;
  case 2:
    alert("Not your cup of tea.");
    break;
  case 3:
    alert("Go home your are drunk.");
    break;
  case 4:
    alert("How is that even possible.");
    break;
  case 5:
    alert("Yes but see no body cares.");
    break;
  case 6:
    alert("Well! That look similar to me.");
    break;
  case 7:
    alert("Keep diggin you will find gold.");
  case 8:
    alert("Don't try it at home.");
  default:
    alert("Invalid input. Please answer 'yes' or 'no'.");
}
