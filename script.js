// 1. Create a function that prints "Hello Javascript".


function hello() {
  console.log("Hello Javascript");
}

hello();



// 2. Create a function that takes two numbers as parameters and returns their sum.

function add(a, b) {
  return a + b;
}

console.log(add(2, 9));



// 3. Make a function with a default parameter that prints "Hi" followed by the name passed to it. If no name is passed, it should print "Hi Guest".


function greet(name = "Guest") {
  console.log(`Hi ${name}`);
}

greet("Harsh");
greet();




// 4. Use rest parameters to make a function that adds unlimited numbers.

function sumOfNums(...num) {
  let ans = num.reduce((acc, val) => {
    return acc + val;
  }, 0);
  console.log(ans);
}

sumOfNums(2, 3, 4, 6, 7,);



// 5. Create an IIFE that prints "I run instantly!".

(() => {
  console.log("I run instantly");
})();



// 6. Make a nested function where the inner one prints a variable from the outer one.

function outer() {
  let a = 12;
  function inner() {
    console.log(a);
  }
  inner();
}

outer();



// 7. Create an array of 5 fruits. Add a fruit to the end and remove from the beginning.

let arrFruits = ["Mango", "Apple", "Banana", "Papaya", "Grapes"];

arrFruits.push("Guavava");
arrFruits.shift();

console.log(arrFruits);



// 8. Use a for loop to print all elements of an array.

for (let i = 0; i < arrFruits.length; i++) {
  console.log(arrFruits[i]);
}



// 9. Create an object person with keys name, age and city and print each key's value.

let obj = {
  name: "Harsh",
  age: 19,
  city: "Bhopal"
}

for (let key in obj) {
  console.log(obj[key]);
}



// 10. Use setTimeout to log "Time's up!" after 2 seconds.

setTimeout(() => {
  console.log("Time's up!");
},2000)


