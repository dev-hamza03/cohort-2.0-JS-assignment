// Js assignment 27-oct-2025

// Introduction to JavaScript

// 1. Open any website → right-click → Inspect → Console → type: document.title

// -> tried it on sheriyans.com and got 'Sheryians Coding School | Learn Coding in India'



// 2. Try: alert(“Hello from Sheryians!”)

alert("Hello from Sheryians!");



// 3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what
// is JS?”

// -> HTML is the "skeleton", CSS is the "clothes" and JS is "brain".



// 4. Write one example of where you’ve seen JS being used (like popup,
// animation, etc.)

// -> I've seen the JS on sheriyans.com/src seeing the animations.




// Goal: Observe what JS does on a webpage.










// Linking JavaScript Files

// 1. Create an HTML file and link a JS file like this:

// -> Linked successfully 👍🏻



// 2. In app.js, write: console.log("Connected!");

// -> Done 👍🏻



// 3. Move the script tag to the <head> section and see what happens.

// -> Nothing happens because the script runs before the HTML loads.



// 4. Try using defer:
// <script defer src="script1.js"></script>
// <script defer src="script2.js"></script>

// -> Tried it, but nothing new happened (defer just ensures scripts load after HTML).



// Goal: Understand how to connect JS with HTML.










// Running JS in Browser Console

// 1. Open console and type: 2 + 2

// -> typed in console and get 4



// 2. Type: alert(“Hi”)

// -> tried it and get "Hi" alert 



// 3. Try: prompt(“Your name?”)

// -> tried it and get prompt asking your name



// 4. Type: let city = “Bhopal”; city

// -> tried it and get "Bhopal" on console











// Variables and Keywords (var, let, const)

// 1. Declare your name using all three

var a = "Hamza";
let b = "Sheriyans";
const c = "School";



// 2. Try reassigning them

a = "Khan";

b = "Not Your College";

// c = "Community"; // ❌ Not possible because const is constant and we cannot reassign its value.




// 3. Create a variable inside curly braces using let and log it outside.
// 4. Predict output before running.
{
    let fruit = "Mango";
}

// console.log(fruit); // ❌ Shows error: fruit is not defined
// because let and const are block level scoped, so they cannot be accessed outside the block.




// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)

const studentName = "Akash";

const discount = 20;

const hoursInDay = 24;












// Logging and Interaction (console, alert, prompt)

// 1. Log name, age, and city using console.log, console.info, console.warn.
let name = "Hamza";
let age = 19;
let city = "Lakhimpur";

console.log(name);
console.info(age);
console.warn(city);



// 2. Use prompt to take user’s name → alert a welcome message.
let userInput = prompt("Enter your name:");
alert(`${userInput}, welcome!`);



// 3. Log typeof of user’s input.
console.log(typeof userInput); // string




// 4. Try: let age = prompt("Enter age:"); console.log(age + 5); observe what happens.
let Age = prompt("Enter age:");
console.log(Age + 5);

// → I noticed that if I entered 10 in the prompt, the console shows 105.









// Working with Strings

// 1. let msg = "I love Sheryians";
let msg = "I love Sheryians";



// 2. Try msg.slice(2, 6) and predict the result.
msg.slice(2, 6); // "love"



// 3. Try msg.split(" ") and count words.
msg.split(" "); // ["I", "love", "Sheryians"] → 3 words



// 4. Try msg.replace("love", "study at").
msg.replace("love", "study at"); // "I study at Sheryians"



// 5. Template string example:
let name1 = "Hamza";
console.log(`Hey ${name1}, welcome to JS!`);


// 6. Check if msg.includes("love")
msg.includes("love"); // true








// Statements and Semicolons

// 1. Remove semicolon and check if code still runs.

// -> yes after removing semicolon code is still running




// 2. Combine two statements in one line and see if it breaks.

// let d = 20 let f = 22   -> This shows the errors

let d = 20; let f = 22   // -> this is possible because semicolon sperates them, 




// 3. Write 3 console.log statements without semicolons and predict output.

console.log("heloo")   // hello
console.log("hyy")      // hyy
console.log("hyy helloo")    // hyy helloo








// Comments

// 1. Write your name as a single-line comment.

// Hamza



// 2. Write a 3-line comment explaining what your code does.

// so first we taking input from user, user's name by prompt
// and then with the help of template literals 
// we show the name with alert a welcome message.



// 3. Hide one console.log using comment and check output.

// console.log("Hello everyone");     // no output because it's commented









// Expressions vs Statements

// 1. Type 5 + 10 (expression).
// 2. Type let x = 10; (statement).
// 3. Which one gives a value immediately?

// -> 5 + 10 gives 15 value immediately



// 4. Try: let y = (5 + 10) * 2; console.log(y)

let y = (5 + 10) * 2;
console.log(y); // 30


// 5. Write one line explaining the difference between both

// -> Expression is like a math answer (5 + 10 = 15), and a statement is like giving a command (let x = 10;).








{
    /// Data Types

    // 1. Declare variables of different data types
    let age = 25;
    let name = "Harsh";
    let isStudent = true;
    let skills = ["JS", "HTML"];
    let user = { city: "Bhopal" };
    let x = null;
    let y;
    let z = Symbol("id");



    // 2. Log typeof each variable
    console.log(typeof age);       // number
    console.log(typeof name);      // string
    console.log(typeof isStudent); // boolean
    console.log(typeof skills);    // object    // arrays are also objects in JS
    console.log(typeof user);      // object
    console.log(typeof x);         // object    // this is a known JS quirk
    console.log(typeof y);         // undefined
    console.log(typeof z);         // symbol




    // 3. Change one value and recheck typeof
    age = "25";
    console.log(typeof age);       // string (changed from number to string)



    // 4. Try adding a number and string together
    console.log(10 + "5");         // "105" → number + string becomes a string

}







// Special Values

// 1. Log 1 / 0, 0 / 0, Number("abc"), undefined + 1
// 2. What appears (Infinity, NaN, etc.)

console.log(1 / 0);          // Infinity
console.log(0 / 0);          // NaN (Not a Number)
console.log(Number("abc"));  // NaN
console.log(undefined + 1);  // NaN



// 3. One line explaining when to use null vs undefined

// -> we use null when we plan to assign a value later, and undefined means the value has not been assigned yet.






{

    // Primitive vs Reference

    // 1. let x = 5; let y = x; y = 10; console.log(x, y)

    let x = 5;
    let y = x;
    y = 10;
    console.log(x, y);  // 5 10




    // 2. let obj1 = { name: "Harsh" }; let obj2 = obj1; obj2.name = "Sheryians";
    // console.log(obj1.name)

    let obj1 = { name: "Harsh" };
    let obj2 = obj1;
    obj2.name = "Sheryians";
    console.log(obj1.name);  // Sheryians




    // 3. Observe which one changes together.

    // -> In primitive types, each variable keeps its own copy of the value.
    // -> In reference types (here objects), both variables share the same data, so changing one also changes the other.




    // 4. Draw memory boxes on paper to visualize the difference.

    // Primitive:  x = 5, y = x (both are in separate boxes)
    // Reference: obj1 = {name: "Harsh"}, obj2 = obj1 (both point to the same box, so if one changes, the other changes too)


}