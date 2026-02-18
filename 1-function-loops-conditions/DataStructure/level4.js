/*
1. Write a function that finds the sum of digits of a number.
    Example: 123 → 6
2. Write a function that counts how many times a loop runs until a number becomes 0 (by dividing it by 2 each time).

3. Print this pattern using loops:

*
**
***
****
*****


4. Print this pattern:

*****
****
***
**
*
5. pattern 3
1
12
123
1234
12345

Write a function that swaps two numbers without using a third variable.*/
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function findingSum() {
  r1.question(
    "Enter a number more than 1 digit to calculate its sum : ",
    (value) => {
      let num = Number(value);
      let originalNum = num;
      let reversed = 0;

      while (num !== 0) {
        reversed = reversed + (num % 10);
        num = Math.floor(num / 10);
      }
      let result = reversed;
      console.log(`Enter Number was ${originalNum} and is sum is ${result}`);
      console.log("\n");
      display();
    },
  );
}

function CountingLoop() {
  console.log("Counting how Many time a loop is iterating");
  let count = 0;
  for (let i = 10; i > 0; i = Math.floor(i / 2)) {
    //Math.floor important
    count = count + 1;
  }
  console.log(`for range of 10 loop iterates ${count} times`);
  console.log("\n");
  display();
}
function pattern1() {
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
  console.log("\n");
  display();
}
function pattern2() {
  for (let i = 0; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
      process.stdout.write("*");
    }
    console.log();
  }
  console.log("\n");
  display();
}
function pattern3() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j}`);
    }
    console.log();
  }
  console.log("\n");

  display();
}
function SwapNumber() {
  let arr = [];
  console.log();
  r1.question("Enter Number 1 for swapping : ", (value) => {
    let a = Number(value);
    r1.question("Enter Number 2 for swapping : ", (value) => {
      let b = Number(value);
      console.log(`Original -> a: ${a} | b: ${b}`);
      a = a + b; //15
      b = a - b;
      a = a - b;
      console.log(`Swapped -> a: ${a} | b: ${b}`);
      console.log("\n");
      display();
    });
  });
}
function display() {
  console.log("1. Find sum of the Number (more than one digit )");
  console.log("2. Counting Iteration of the loop");
  console.log("3. Making pattern left triangle using Loops");
  console.log("4. Making pattern left triangle bottom up using Loops");
  console.log("5. Making pattern with Numbers left triangle using Loops");
  console.log("6. Swapping Numbers not using temp or third variable ");

  let choice = 0;
  r1.question("Enter your choice : ", (value) => {
    choice = Number(value);
    switch (choice) {
      case 1:
        findingSum();
        break;
      case 2:
        CountingLoop();
        break;
      case 3:
        pattern1();
        break;
      case 4:
        pattern2();
        break;
      case 5:
        pattern3();
        break;
      case 6:
        SwapNumber();
        break;
    }
  });
}
display();
