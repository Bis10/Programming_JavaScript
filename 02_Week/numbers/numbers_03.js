/*
- Create a variable named 'num1' and assign it a floating-point value.
- Create a variable named 'num2' and assign it a different floating-point value.

- Round both 'num1' and 'num2' to the nearest integer and store the results in variables 'roundedNum1' and 'roundedNum2'.
- Calculate the square root of 'roundedNum1' and store it in a variable named 'sqrtNum1'.
- Find the larger number between 'roundedNum1' and 'roundedNum2' and store it in a variable named 'maxNum'.

- Use console.log() to print 'roundedNum1', 'roundedNum2', 'sqrtNum1', and 'maxNum' to the console.
- Use the typeof operator to check the data type of each new variable and print the result using console.log().
*/
let num1 = 20.2589;
let roundedNum1 = Number.parseInt(num1);
console.log(roundedNum1);
let sqrt1 = 20;
let sqrtNum1 = Math.sqrt(20);
console.log(sqrtNum1);
let num2 = 36.4578;
let roundedNum2 = Number.parseInt(num2);
console.log(roundedNum2);
let sqrt2 = 36;
let sqrtNum2 = Math.sqrt(36);
console.log(sqrtNum2);
let maxNum1 = 20;
let maxNum2 = 36;
let maxNum = Math.max(maxNum1, maxNum2);
console.log(maxNum);
console.log(typeof roundedNum1);
console.log(typeof roundedNum2);
console.log(typeof sqrtNum1);
console.log(typeof sqrtNum2);
console.log(typeof maxNum);
