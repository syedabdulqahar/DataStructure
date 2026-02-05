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
          console.log(`Number ${i} is ddd`);
        }
      }
    },
  );
  display();
}
function case2() {
  r1.question("Enter a value to check its factorial : ", (value) => {
    let value1 = Number(value);
    let factorial1 = 1;
    while (value != 0) {
      factorial1 = factorial1 * value;
      value--;
    }
    console.log(`Factorial of Number ${value1} is ${factorial1} `);
  });
  display();
}
function case3() {}

function display() {
  console.log("What do you want (Just press Numbers) ?");
  console.log("1. To Print Odd Number between Dynamic Ranges ");
  console.log("2. To Check Factorial of the Number ");
  console.log("3. To check Palindrome ");
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
      default:
        console.log(`You Entered Wrong Number`);
    }
  });
}
display();
