// Assignment - 29 Oct

// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise)

// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

let a = 10;
let b = 3;

console.log(a + b);    // 13
console.log(a - b);    // 7
console.log(a * b);    // 30
console.log(a % b);    // 1


// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

let x = 5;
x += 3;
x -= 3;
x *= 3;
x /= 3;

// x = 5


// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

let count = 5;
console.log(count);   // 5
count++
console.log(count);   // 6

count--
console.log(count);   // 5


// d. Compare two values: 5 == “5” and 5 === “5”
// .
// Observe difference.

// -> == only checks the digit or value which is so it is giveing true.

// -> === checks the value as well as data type also so it returns false because 5 is a number and "5" is a string.


// e. Check if 10 is greater than 5, less than 20, and equal to 10.

console.log(10 > 5);
console.log(10 < 20);
console.log(10 === 10);


// f. Try logical AND and OR:
// true && false
// true || false
// !(true)


console.log(true && false); // false → both must be true for AND
console.log(true || false); // true  → only one needs to be true for OR
console.log(!(true));       // false → NOT operator inverts the value




// g. Predict the result of:

// (5 > 3 && 10 > 8),     // true
// (5 > 3 || 10 < 8)      // true



// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).




// 2. Variable Hoisting in JavaScript

// a. Predict output of:
// console.log(a);        // Undefined
// var a = 10


// b. Predict output of:
// console.log(b);      // referencecError : cannot access b abfore initialization.
// let b = 10


// c. Predict output of:
// test();
// function test() { console.log("Hello") }     // "Hello"


// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log(“Hi”) }


// hello()   // hello is not a function
// var hello = function () {
//     console.log("Hi");
// }


// What gets hoisted?
// -> Variables declared with 'var' and all function declarations are hoisted.

// What does not get hoisted fully?
// -> Variables declared with 'let' and 'const' are not hoisted properly — 
// they exist in the Temporal Dead Zone and give an error if accessed before initialization.









// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
// If age > 18 → log “Adult”
// .
// Else → log “Minor”

let inputAge = parseInt(prompt("Enter your age"));

if (inputAge > 18) {
    console.log("Adult");
}

else {
    console.log("Minor");
}



// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”


let marks = 75;

if (marks >= 90) {
    console.log("A grade");
}

else if (marks >= 75) {
    console.log("B grade");
}

else if (marks >= 50) {
    console.log("C grade");
}

else {
    console.log("Fail");
}



// c. Create a variable city = “Bhopal”
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

let city = "Bhopal";

if (city === "Bhopal") {
    console.log("MP");
}

else if (city === "Delhi") {
    console.log("Capital");
}

else {
    console.log("Unknown City");
}




// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

let score = 40;

let evalScore = (score > 35 ? "Pass" : "Fail");

console.log(evalScore);


// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

let temp = 40;

let measureTemp = temp > 30 ? "Hot" : "Pleasant";

console.log(measureTemp);



// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”

switch (2) {
    case 1: console.log("Monday")
        break
    case 2: console.log("Tuesday");
        break
    case 3: console.log("Wednesday");
        break
    case 4: console.log("Thursday");
        break
    case 5: console.log("Friday");
        break
    case 6: console.log("Saturday");
        break
    case 7: console.log("Sunday");
        break
    default: console.log("Invalid Day");
}

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”


let age1 = 20;
let country = "India";

if (age1 > 18 && country == "India") {
    console.log("Eligible for Vote");
}

else {
    console.log("Not Eligible for Vote");
}


