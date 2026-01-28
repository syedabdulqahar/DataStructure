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
console.log("3. Check Whether a giver number is prime or not");
console.log(`4. Find the largest number from these values :  10,45,23,99,2`);
console.log(`5. Count how many digits are in a number`);

const { count } = require("console");
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
  console.log("--------------  Reversed Number  --------------------");
  r1.question("Enter A Number to reverse it : ", (value) => {
    valuetoReverse = Number(value);
    let reversedNumber = 0;
    if (valuetoReverse >= 0 && valuetoReverse <= 9) {
      console.log(`Reversed Number : ${valuetoReverse}`);
    }
    while (valuetoReverse !== 0) {
      reversedNumber = reversedNumber * 10 + (valuetoReverse % 10); //0+3
      valuetoReverse = Math.floor(valuetoReverse / 10);
    }
    console.log(`Reversed Number : ${reversedNumber}`);
  });
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
      console.log("3 wala chala");
      break;
    case 4:
      console.log("4 wala chala");
      break;
    case 5:
      console.log("5 wala chala");
      break;

    default:
      console.log("default");
  }
});
