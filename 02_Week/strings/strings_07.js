/**
Refine the concatInitials function to return a string that combines the firstNameInitial followed by the lastNameInitial.
 */

function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial + lastNameInitial;
}

// Sample usage - do not modify
//let string1 = "Jack", string2 = "Daniel";
/* let firstNameInitial = string1.substring(1, -4);
let lastNameInitial = string2.substring(1, -5);
console.log(firstNameInitial + lastNameInitial); */



console.log(concatInitials('J', 'D')); // "JD"
console.log(concatInitials('S', 'B')); // "SB"
