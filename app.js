let myFirstName = "Christopher";
let myMiddleName = "Lynn";
let myLastName = "Stillwell";
let myFullName = myFirstName + " " + myMiddleName + " " + myLastName; // Concatenation of 'myFirstname', 'myMiddleName' and 'myLastName'.


const UNITED_STATES = 50;

let numberNine = 5 + 4;


if(myFirstName.charCodeAt(0) == 76 | myFirstName.charCodeAt(0) == 108) {
    alert("Back of the line!");
} else {
    alert("Next!");
};


sayHello();

function sayHello() {
    alert("Hello World!");
};

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18); // Displays alert() message.
checkAge("John", 17); // Displays alert() message.

let favVeggies = ["Carrots", "toms", "celery", "Spinach", "Broccoli", "snappeas"];

for(var i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]); 

var myRonnie = {
    name: "Ronnie",
    age: 29
};

var myBobbie = {
    name: "Bobbie",
    age: 24
};

var myRicki = {
    name: "Ricki",
    age: 30
};

var myMike = {
    name: "Mike",
    age: 20
};

var myBrosif = {
    name: "Brosif",
    age: 16
};

var myFriends = [myRonnie, myBobbie, myRicki, myMike, myBrosif];
// console.log(myFriends[0].name); // Should print: "Ronnie".
// console.log(myFriends[3].age); // Should print: 20.

for(var i = 0; i < myFriends.length; i++) {
    checkAge(myFriends[i].name, myFriends[i].age);
};

getLength("Hello World"); // Should return: 11.

// Function that accepts an Integer ('age') associated with a String ('name') and checks if it is greater than 21.
function checkAge(name, age) {
    if(age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } else {
        // Do nothing. 
    }
};

// Function that accepts any String and returns the number of characters in the String.
// If the String is of even length, the message - "The world is even", should be displayed.
// Is the String is of odd length, the message - "The world is an odd place", should be displayed.
function getLength(anyWord) {
    // console.log(anyWord.length);
    let myWordLength = anyWord.length;
    // console.log(myWordLength);
    if(myWordLength % 2 == 0) {
        console.log("The world is even!"); // Even.
    } else {
        console.log("The world is an odd place!"); // Odd.
    };
};
