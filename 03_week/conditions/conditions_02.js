/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

 //getTemperature(input);
 //const input = 
 
function getTemperature(celcius){
    if (celcius <15){
        console.log("You should wear a jacket");
    }
    else{
        console.log("It is warm outside");
    }
}
getTemperature(Number(prompt('What is the current temperature?')));
// function getTemperature(){
//     let promptInput = Number(prompt('give me a number'));
//     console.log(typeof promptInput);
// }

// getTemperature(Number(prompt('What is the current temperature?'))); //Elaboration
// let example = prompt('What is the current temperature?');
// let number = Number(example)
// getTemperature(number);