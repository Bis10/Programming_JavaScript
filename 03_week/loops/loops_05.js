// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

let sum = 0;
let count = 0;
let number;

do {
    number = parseFloat(prompt("Enter a number (enter 0 to terminate):")); 
    if (!isNaN(number)) {
        sum += number;
        count++;
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
} while (number !== 0);{
    let average;
    if( count > 0 ){
        average = sum/count;

    }
    else {average = 0}
}

alert("Average of the entered numbers is: " + average);

// let sum= 0;
// let counter = 0;
// do{
//   let input = Number(prompt('enter a number'));
//   sum += input;
//   counter++;
// }while(counter !== 0);
// console.log(`Àverage was ${sum/counter}`);

