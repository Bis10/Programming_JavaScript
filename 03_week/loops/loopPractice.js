/*const person = { name: 'Alice', age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
Exercise 1)
Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too.*/

/*let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let sum = 0;
for (let i=0; i < arr_1.length; i++){
    sum += arr_1[i];
   
}
console.log(sum);
// --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 
let sum1 = 0;
for(let i = 0; i < arr_2.length; i++){
    sum1 += arr_2[i];
}
console.log(sum1)// --> 351
// // Example output: 
console.log(`${sum} + ${sum1}`, " = ", sum + sum1);
// // 276 + 351 = 627*/

// Exercise 2)
// Using a for loop print all even numbers up to and including n. Don’t include 0.

/*let n1 = 22; 
for (let i = 2; i <= n1; i+=2){
    console.log(i);
}*/
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line*/

// Exercise 3)
// Using a for loop output the elements in reverse order

/*let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = arr.length-1; i >= 0; i--){
    console.log(arr[i]);*/

// Example output:
// true 3  be  false cannot  true 9 what 43 OR each item on a new line
/*Exercise 4)
Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.*/

/*let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
let sumArray =[ ];
for ( let i = 0; i < arr_3.length; i++){
    sumArray.push(arr_3[i] + arr_4[i]);
}
console.log(sumArray);*/
// Example output:
// [12, 7, 16]

// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

// let distance, time;
// while (distance != 0){
//     distance = parseFloat(prompt("Input distance in kilometers:"));
//     if (distance == 0){
//         break;
//     }
// let time = parseFloat(prompt('Enter the time in hours:'));
// let averageSpeed = distance/time;
// console.log(`Àverage speed :${averageSpeed.toFixed(4)} km/h and distance is ${distance} km /  time is ${time} hr `)};

// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.
/*let eventCount = 0;
for (numbers = 0; numbers <= 20; numbers++) {
  let userInput = parseFloat(prompt("Input 20 numbers:"));
  if (userInput % 2 == 0 && userInput != 0) {
    eventCount++;
  }
}
console.log(eventCount);*/
// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.
let sum = 0;
let count = 0;
let number;
Do(userInput = parseFloat(prompt("Enter any numbers or 0 to terminate")))
if(!isNaN(userInput))
sum += number;
count++;{
}else{
        if(userInput === 0))
        break;
}
console.log()
