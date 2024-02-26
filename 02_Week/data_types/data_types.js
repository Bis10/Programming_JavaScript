/*
- Create a variable named age and assign it an integer value.
- Create a variable named name and assign it a string value.
- Create a variable named isStudent and assign it a boolean value.
- Create a variable named hobbies and assign it an array containing a few string values (e.g., hobbies).
- Create an info object with two properties: schoolName (a string) and grade (an integer).

- Use console.log() to print each variable to the console.

- Use the typeof operator to check the data type of each variable and print the result using console.log(). */

const age = 24;
const name = "David";
const isStudent = true;
const hobbies = ["Playing_Football", "Travelling", "Watching_Movies", "Hiking"];
const info= {
    schoolName: "Business_School_Helsinki",
    grade:4
};
console.log("Age:", age);
console.log("Name:", name);
console.log("Is Student:", isStudent);
console.log("Hobbies:",hobbies);
console.log("Info:", info, "\n");
console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof hobbies);
console.log(typeof info);