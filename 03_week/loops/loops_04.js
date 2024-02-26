// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

let eventCount = 0;

for (let numbers = 0; numbers < 20; numbers++) {
  let userInput = parseFloat(prompt("Input 20 numbers:"));

  if (isNaN(userInput)) {
    alert("Is not a number.");
  } else {
    if (userInput % 2 === 0 && userInput !== 0) {
      eventCount++;
    }
  }
}

console.log(eventCount);
