/**
 * Level 1: Variables + Basic Loops

Print numbers from 1 to 10 using a loop.

Print all even numbers between 1 and 50.

Find the sum of numbers from 1 to 100.

Store a number in a variable and print its multiplication table (e.g., table of 5).

Count how many numbers between 1 and 100 are divisible by 3.
 */
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("1. Print numbers from 1 to 10 using a loop");
console.log("2. Print all even numbers between 1 to 50 ");
console.log("3. Find the sum of numbers from 1 to 100");
console.log(
  "4. Store a number in a variable and print its multiplication table",
);
console.log("5. Count how many number between 1 and 100 are divisible by 3");
r1.question("Enter Your choice : ", (choice) => {
  choice = Number(choice);
  switch (choice) {
    case 1:
      Loop();
      break;
    case 2:
      EvenNumbers();
      break;
    case 3:
      SumOfNumbers();
      break;
    case 4:
      MultiplicationTable();
      break;
    case 5:
      Count3Divisibles();
      break;
    default:
      console.log("Invalid Choice");
  }
});
function Loop() {
  console.log("--------- Loop --------------");
  let i = 1;
  for (i = 1; i <= 10; i++) {
    console.log(`element ${i} = ${i}`);
  }
  console.log("-----------------------------");
}
function EvenNumbers() {
  console.log("--------- Even Numbers ---------");
  console.log(`Even Numbers between 1 and 50 List :`);
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      console.log(`element at index ${i}, ${i}`);
    }
  }
  console.log("------------------------------");
}
function SumOfNumbers() {
  console.log("--------- Sum of Numbers (0-100)---------");
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  console.log(`Sum of elements between 0 and 100 are  : ${sum}`);
}
function MultiplicationTable() {
  console.log("---------- Multiplication Table --------");
  const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let a;
  r2.question("Enter a value to calculate its Multiplication Table : ", (a) => {
    a = Number(a);
    console.log(`Table of ${a} :`);
    for (let i = 1; i <= 10; i++) {
      console.log(` ${a} x ${i} = ${a * i} `);
    }
    console.log("-------------------------------------------");
  });
}
function Count3Divisibles() {
  let count = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
      count++;
    }
  }
  console.log(
    ` range of loop is 0 to 100 So Number of numbers divisible by 3 are : ${count}`,
  );
}
