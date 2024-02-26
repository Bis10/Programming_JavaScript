// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

let distance, time;
while (distance != 0){
  distance = parseFloat(prompt('Enter the distance in km to calculate average speed or 0 to exit'));
if (distance == 0){
    break;
}
let time = parseFloat(prompt('Enter the time in hours:'));
let averageSpeed = distance/time;
console.log(`Àverage speed :${averageSpeed.toFixed(4)} km/h and distance ${distance}km / time ${time}hr `)};