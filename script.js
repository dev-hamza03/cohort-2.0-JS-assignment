// =========================================================
// 🌱 LEVEL 1 – PURE BEGINNER PRACTICE
// =========================================================


// 1. Print numbers from 1 to 100  
for (let i = 1; i <= 100; i++) {
  console.log(i);
}


// 2. Print only even numbers from 1 to 20  
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// 3. Print numbers from 10 to 1  
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


// 4. Print the word "Yes" 5 times  
for (let i = 1; i <= 5; i++) {
  console.log("Yes");
}


// 5. Print whether numbers from 1 to 10 are even or odd  
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(`${i} is an Even number`);
  else console.log(`${i} is an Odd number`);
}


// 6. Ask the user for a number and say if it's positive or negative  
let inputNum = prompt("Enter your number");

if (inputNum === null) {
  alert("You pressed the cancel button");
} 
else if (inputNum.trim() === "") {
  alert("Please enter a number");
} 
else {
  let num = parseInt(inputNum);

  if (isNaN(num)) {
    alert("Please enter a valid number");
  } 
  else {
    if (num >= 0) console.log(`${num} is a positive number`);
    else console.log(`${num} is a negative number`);
  }
}


// 7. Ask user's age and check if eligible to vote  
let inputAge = prompt("Enter your age");

if (inputAge === null) {
  console.error("You pressed cancel button");
}
else if (inputAge.trim() === "") {
  alert("Please enter your age");
}
else {
  let ageConvertNum = +(inputAge);

  if (isNaN(ageConvertNum)) {
    alert("Please enter a valid age");
  }
  else {
    if (ageConvertNum >= 18) console.log("Eligible to vote");
    else console.log("Not eligible to vote");
  }
}


// 8. Print multiplication table of 5  
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}


// 9. Count how many numbers between 1 and 15 are greater than 8  
let count = 0;

for (let i = 1; i <= 15; i++) {
  if (i > 8) {
    count++;
  }
}

console.log(`Numbers greater than 8: ${count}`);


// 10. Ask user for password and print access status  
let correctPass = "harsh12";
let inputPass = prompt("Enter your password");

if (inputPass === null) {
  console.error("You pressed cancel button");
}
else if (inputPass.trim() === "") {
  alert("Please enter your password");
}
else {
  if (inputPass === correctPass) console.log("Access granted");
  else console.log("Access denied");
}


// =========================================================
// ⚙️ LEVEL 2 – SLIGHTLY TOUGHER BUT LOGICAL
// =========================================================


// 11. Allow only 3 attempts to enter correct password  
let correctPassword = "harsh1234";
let attempts = 0;
let maxAttempts = 3;

while (attempts < maxAttempts) {
  let inputPassword = prompt("Enter your password");
  attempts++;

  if (inputPassword === null) {
    console.error("You pressed cancel button");
    break;
  }
  else if (inputPassword.trim() === "") {
    alert("Please enter something");
    alert(`Attempts left: ${maxAttempts - attempts}`);
    continue;
  }
  else if (inputPassword.trim() === correctPassword) {
    console.log("Access granted");
    break;
  }
  else {
    alert(`Wrong password! Attempts left: ${maxAttempts - attempts}`);
    continue;
  }
}

if (attempts === 3) {
  console.log("Account locked");
}


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”  
let stopWord = "stop";
let countYes = 0;

let inputWord = prompt("Enter your word");

if (inputWord === null) {
  console.error("You pressed cancel");
}
else {
  while (inputWord.toLowerCase() !== stopWord.toLowerCase()) {
    if (inputWord.trim() === "") {
      alert("Please enter something");
    }
    else if (inputWord.trim().toLowerCase() === "yes") {
      countYes++;
    }

    inputWord = prompt("Enter your word");

    if (inputWord === null) {
      console.error("You pressed cancel");
      break;
    }
  }

  console.log(`You typed "Yes" ${countYes} times`);
}


// 13. Print numbers divisible by 7 from 1 to 50  
for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}


// 14. Sum of all odd numbers from 1 to 30  
let sumOdd = 0;

for (let i = 1; i <= 30; i++) {
  if (i % 2 === 1) {
    sumOdd += i;
  }
}

console.log(`Sum of all odd numbers: ${sumOdd}`);


// 15. Keep asking for a number until user enters even  
let inputEvenNum = prompt("Enter your number");

while (true) {
  if (inputEvenNum === null) {
    console.error("You pressed cancel button");
    break;
  }
  else if (inputEvenNum.trim() === "") {
    alert("Please enter something");
  }
  else if (isNaN(inputEvenNum)) {
    alert("Please enter a valid number");
  }
  else if (+inputEvenNum % 2 === 0) {
    console.log(`Great! Even number entered: ${inputEvenNum}`);
    break;
  }
  else {
    alert(`Try again! You entered an odd number: "${inputEvenNum}"`);
  }

  inputEvenNum = prompt("Enter your number");
}


// 16. Print numbers between two user inputs  
let inputNum1 = prompt("Enter first number");
let inputNum2 = prompt("Enter second number");

if (inputNum1 === null || inputNum2 === null) {
  console.error("You pressed cancel");
}
else if (inputNum1.trim() === "" || inputNum2.trim() === "") {
  alert("Please enter something");
}
else if (isNaN(inputNum1) || isNaN(inputNum2)) {
  alert("Please enter valid numbers");
}
else if (+inputNum1 >= +inputNum2) {
  alert("First number should not be bigger than second number");
}
else {
  for (let i = +inputNum1; i <= +inputNum2; i++) {
    console.log(i);
  }
}


// 17. Print only first 3 odd numbers from 1 to 20  
let counterFor3 = 0;

for (let i = 1; i <= 20; i++) {
  if (counterFor3 === 3) {
    break;
  }

  if (i % 2 === 1) {
    console.log(i);
    counterFor3++;
  }
}


// 18. Ask user 5 numbers. Count how many are positive  
let countPosNeg = 0;
let positiveCount = 0;

while (countPosNeg < 5) {
  let inputNumber = prompt("Enter your number");
  countPosNeg++;

  if (inputNumber === null) {
    console.log("You pressed cancel");
    break;
  }
  else if (inputNumber.trim() === "") {
    alert("Please enter something");
  }
  else if (isNaN(inputNumber)) {
    alert("Please enter a valid number");
  }
  else if (+inputNumber < 0) {
    console.log(`${inputNumber} is a negative number`);
  }
  else {
    console.log(`${inputNumber} is a positive number`);
    positiveCount++;
  }
}

console.log(`Total positive numbers are: ${positiveCount}`);


// 19. ATM Simulator – Allow 3 withdrawals  
let amount = 1000;
let startWithdrawal = 0;
let maxWithdrawal = 3;

while (startWithdrawal < maxWithdrawal) {
  let withdrawalAmount = prompt("Enter withdrawal amount");

  if (withdrawalAmount === null) {
    console.error("You pressed cancel button");
    break;
  }
  else if (withdrawalAmount.trim() === "") {
    alert("Please enter something");
    continue;
  }
  else if (isNaN(withdrawalAmount)) {
    alert("Please enter a valid number");
    continue;
  }
  else if (+withdrawalAmount <= amount) {
    console.log(`Amount withdrawn: ₹${withdrawalAmount}, Balance left: ₹${amount - withdrawalAmount}`);
    amount -= withdrawalAmount;
    startWithdrawal++;
  }
  else {
    console.log("Insufficient balance");
    break;
  }
}
