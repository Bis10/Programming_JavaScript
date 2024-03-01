/* Task 1
Create a JavaScript object named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here
const library = [
    {
    title:'21 Lessons for the 21st Century',
    author:'Yuval Noah Harari',
    yearPublished: 2018,
},
{
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    yearPublished: 1988,
},
{
    title: 'Karnali Blues',
    author: 'Buddhisagar',
    yearPublished: 2010,

},
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log("\n",library[0].title, "\n"); 
library[1].yearPublished = 2024;
console.log(library[1].yearPublished, "\n");

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library[0].genres = 'Social Philosophy',
library[0]['isAvailable'] = true;
console.log(library[0], "\n");

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
 
function Book ( title, author, yearPublished, genres){
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
}
const book1 = new Book('Love the way you lie', 'Andy Sandy', 1990, 'Humour');
console.log(book1, "\n");

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

function createBook(title, author, yearPublished, genres){
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
}
let title = prompt ('Enter the title of the book.');
let author = prompt ('Enter the author of the book:');
let yearPublished = prompt('Enter the year published:');
let genres = prompt('Enter the genres:');
const newBook = new createBook (title, author, parseInt(yearPublished), genres);
console.log(newBook);



/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
const library = [
    {
    title:'21 Lessons for the 21st Century',
    author:'Yuval Noah Harari',
    yearPublished: 2018,
},
{
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    yearPublished: 1988,
},
{
    title: 'Karnali Blues',
    author: 'Buddhisagar',
    yearPublished: 2010,

},
];
const jsonString = JSON.stringify(library);
console.log(jsonString);

const jsonString1 = '[{"title":"21 Lessons for the 21st Century","author":"Yuval Noah Harari","yearPublished":2018},{"title":"The Alchemist","author":"Paulo Coelho","yearPublished":1988},{"title":"Karnali Blues","author":"Buddhisagar","yearPublished":2010}]';
const library1 = JSON.parse(jsonString1);
console.log(library1);
