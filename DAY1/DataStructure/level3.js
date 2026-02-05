/*
  Write a function that prints all odd numbers between two given numbers.

Write a function that returns the factorial of a number.
Example: 5! = 120

Write a function that checks whether a number is a palindrome.
Example:

121 → true

123 → false

Write a function that calculates the sum of all even numbers from 1 to n.

Write a function that prints the first n Fibonacci numbers.
*/
const { stdin, stdout } = require("process");
const readline = require("readline");
const r1 = readline.createInterface({
  input: stdin,
  output: stdout,
});
function case1() {
  let arr = [];
  console.log(
    `Note: You are Requested to entere "," in order to seperate min range and max range`,
  );
  r1.question(
    "Enter minRange and maxRange to prind odd Numbers : ",
    (value) => {
      arr = value.split(",").map(Number);
      let minRange = arr[0];
      let maxRange = arr[1];
      console.log(
        `Check odd Numbers from the range of ${minRange} to ${maxRange} `,
      );
      for (i = minRange; i <= maxRange; i++) {
        if (i % 2 != 0) {
          console.log(`Number ${i} is odd`);
        }
      }
      console.log("\n");
      display();
    },
  );
}
function case2() {
  r1.question("Enter a value to check its factorial : ", (value) => {
    let value1 = Number(value);
    let factorial1 = 1;
    while (value != 0) {
      factorial1 = factorial1 * value;
      value--;
    }
    console.log(`\t Factorial of Number ${value1} is ${factorial1} `);
    console.log("\n");
    display();
  });
}
function case3() {
  let Num;
  r1.question(
    "Enter a Number to check whether if it is palindrome ? : ", //string input
    (value) => {
      Num = Number(value);
      console.log(`Original Number : ${Num}`);
      let original = Num;
      let reversed = 0; //initializing is important
      while (Num !== 0) {
        reversed = reversed * 10 + (Num % 10);
        Num = Math.floor(Num / 10);
      }
      console.log(`Reversed Number : ${reversed}`);
      if (original === reversed) {
        console.log(
          `\t Number is palindrom  | < ${original} >  ===  < ${reversed} > `,
        );
      } else {
        console.log(
          `\t Number is NOT palindrom  | < ${original} >  ===  < ${reversed} > `,
        );
      }
      console.log("\n");
      display();
    },
  );
}
function case4() {
  r1.question(
    "Enter N as a Max Range to calculate of number between 1 to n  :  ",
    (value) => {
      let num = Number(value);
      let sum = 0;
      for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
          sum = sum + i;
        }
      }
      console.log(` \t Sum of Even Number between 1 to ${num} = ${sum}`);
      console.log("\n");
      display();
    },
  );
}
function case5() {
  let Num = 0;
  r1.question("Enter a number to check its fabiconni : ", (value) => {
    Num = Number(value);
    let a = 0;
    let b = 1;

    for (let i = 0; i < Num; i++) {
      console.log(a);
      let next = a + b;
      a = b;
      b = next;
    }
    console.log("\n");
    display();
  });
}

function display() {
  console.log("What do you want (Just press Numbers) ?");
  console.log("1. To Print Odd Number between Dynamic Ranges ");
  console.log("2. To Check Factorial of the Number ");
  console.log("3. To check Palindrome ");
  console.log(
    "4. To calculate Sum of all EVEN elements  (1 to n) N will be Entered by User",
  );
  console.log("5. To check FABICONNI of a user input range ");

  let choice;
  r1.question("Enter Your Choice : ", (value) => {
    choice = Number(value);
    switch (choice) {
      case 1:
        case1();
        break;
      case 2:
        case2();
        break;
      case 3:
        case3();
        break;
      case 4:
        case4();
        break;
      case 5:
        case5();
        break;
      default:
        console.log(`You Entered Wrong Number`);
    }
  });
}
display();
