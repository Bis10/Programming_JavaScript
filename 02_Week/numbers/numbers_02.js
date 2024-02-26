// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.

// Sample usage - do not modify
//console.log(fahrenheitToCelsius(21)); // "-6,1"
function fahrenheitToCelsius(Fahrenheit){
    let answer = ((Fahrenheit -32) * 5)/9;
 return answer.toFixed(1);
}
console.log(fahrenheitToCelsius(21)); // "-6,1"
// let Fahrenheit = 21;
// let Celsius = (Fahrenheit - 32)/1.8;
// let Celsius1 = Celsius.toFixed(1);
// console.log("Celcius:", Celsius1);
