/**
 * 
1. Print all numbers between 1 and 100 that are:
      divisible by 3 → print "Fizz"
      divisible by 5 → print "Buzz"
      divisible by both → print "FizzBuzz"
2. Given a number, reverse it using a loop.
    Example: 123 → 321
3. Check whether a given number is prime or not.
4. Find the largest number from these values:
      10, 45, 23, 99, 2
(Use variables + loop)
5.  Count how many digits are in a number

 */
console.log(`1. Print all numbers between 1 and 100 that are:
          divisible by 3 → print "Fizz"
          divisible by 5 → print "Buzz"
          divisible by both → print "FizzBuzz"`);
console.log(`2. Given a number, reverse it using a loop.
          Example: 123 → 321`);
console.log("3. Check Whether a giver number is PRIME or not");
console.log(`4. Find the largest number from these values :  10,45,23,99,2`);
console.log(`5. Find the largest number from dynamic array ?`);
console.log(`6. Count how many digits are in a number ? `);

const { stdin, stdout } = require("process");
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function CheckDivisible() {
  console.log("----------Check Divisibles --------");
  console.log(`- fizz for number divisible by 5
- buzz for divisible by 3
- fizzbuzz for divisible by both`);
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} fizzbuzz`);
    } else if (i % 5 == 0) {
      console.log(`${i} fizz`);
    } else if (i % 3 == 0) {
      console.log(`${i} buzz`);
    }
  }
  console.log("-------------------------------");
}
function ReverseNumber() {
  r1.question("Enter A Number to Reverse it : ", (value) => {
    valuetoreverse = Number(value);
    if (valuetoreverse >= 0 && valuetoreverse <= 9) {
      console.log(`Reversed value : ${valuetoreverse}`);
      return;
    }
    let reversedValue = 0;
    while (valuetoreverse != 0) {
      reversedValue = reversedValue * 10 + (valuetoreverse % 10); //123 123%10=3 |
      valuetoreverse = Math.floor(valuetoreverse / 10);
    }
    console.log(`Reversed Value : ${reversedValue}`);
  });
}
function PrimeCheck() {
  r1.question("Enter a Number to check if it is prime or not : ", (value) => {
    Number = Number(value);
    if (Number % 2 == 0) {
      console.log(`Number ${Number} is Prime `);
    }
    console.log(`${Number} is Not Prime`);
  });
}
function LargestValue() {
  let arr = [10, 45, 60, 20, 10];
  console.log(`Array to check : ${arr}`);
  let largest = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(`${largest} is the highest`);
}
function dynamicLargestValue() {
  r1.question(
    "Enter value in form of string to check which is largest element ? : ",
    (value) => {
      let array = value.split(",");
      let FinalArrray = [];
      for (let i = 0; i < array.length; i++) {
        FinalArrray.push(Number(array[i]));
      }
      let largestValue = 0;
      for (let i = 0; i < FinalArrray.length; i++) {
        if (FinalArrray[i] > largestValue) {
          largestValue = FinalArrray[i];
        }
      }
      console.log(
        `Largest Value from the array you entered is : ${largestValue}`,
      );
    },
  );
}
function CountNumber() {
  r1.question(
    "Enter the Number to check its size or count of integers used in it ?",
    (value) => {
      let inputNumber = value;
      let count = Number(inputNumber.length);
      console.log(`Number of Digits Entered by user is : ${count}`);
    },
  );
}
r1.question("Enter Your Choice : ", (choice) => {
  choice = Number(choice);
  console.log(choice);
  switch (choice) {
    case 1:
      CheckDivisible();
      break;
    case 2:
      ReverseNumber();
      break;
    case 3:
      PrimeCheck();
      break;
    case 4:
      LargestValue();
      break;
    case 5:
      dynamicLargestValue();
      break;
    case 6:
      CountNumber();
      break;

    default:
      console.log("default");
  }
});
