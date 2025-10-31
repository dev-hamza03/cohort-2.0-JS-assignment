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


hello()   // hello is not a function
var hello = function () {
    console.log("Hi");          
}


// What gets hoisted?
// -> Variables declared with 'var' and all function declarations are hoisted.

// What does not get hoisted fully?
// -> Variables declared with 'let' and 'const' are not hoisted properly — 
// they exist in the Temporal Dead Zone and give an error if accessed before initialization.
 

