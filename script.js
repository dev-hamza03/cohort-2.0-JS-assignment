// 🟡 Level 2 – Functional Thinking & Logic Tasks
// (Intermediate)

// 1. Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.

function runTwice(func) {
  func();
  func();
}

runTwice(function () {
  console.log("Hyy")
});



// 2. Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable.


// pure function

function hello(name = "guest") {
  return `Hello ${name}`;
}

console.log(hello("Harsh"));

// Impure function

let a = 1;

function doubleNum(val = 0) {
  a++
  console.log(`Double of ${val} is : ${val * a}`)
}

doubleNum(12);



// 3. Write a function that uses object destructuring
// inside parameters to extract and print `name` and
// `age`.


function printNameAge({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

printNameAge({ name: "harsh", age: 26 });



// 4. Demonstrate the difference between normal
// function and arrow function when used as object
// methods (the `this` issue).









// 5. Given an array of numbers, use `map()` to create a
// new array where each number is squared.


let arrNum = [1, 2, 3, 4, 4, 5, 6, 8];

let sqaredArr = arrNum.map((val) => {
  return val * val;
});

console.log(sqaredArr);


// 6. Use `filter()` to get only even numbers from an
// array.


let arrNums = [22, 45, 54, 75, 67, 80];

let evenNumArr = arrNums.filter((val) => {
  return val % 2 === 0;
});

console.log(evenNumArr);



// 7. Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`.

let arrSalry = [1000, 2000, 3000];

let totalSalariesArr = arrSalry.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(totalSalariesArr);



// 8. Create an array of names and use `some()` and
// `every()` to test a condition (e.g., all names longer than
// 3 chars).

let namesArr = ["Harsh", "Sarthack", "Ankit"];

let isMore3Chars = namesArr.every((val) => {
  return val.length > 3;
});

console.log(isMore3Chars);



// 9. Create an object `user` and test the behavior of
// `Object.freeze()` and `Object.seal()` by
// adding/changing keys.


let user = {
  name: "Harsh",
  age: 26,
  city: "Bhopal"
};

Object.freeze(user);
// Object.seal(user);

user.name = "Sharma";



// freeze() → can’t change anything
// seal() → can't add anything new but can only change existing values 




// 10. Create a nested object (`user → address → city`) and
// access the city name inside it.


let obj = {
  user: {
    name: "Harsh",
    address: {
      city: "Bhopal"
    }
  }
};

let { city } = obj.user.address;

console.log(city);
