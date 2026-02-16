/*
👉 Goal: Logic building with comparisons

6️⃣ Count Even & Odd

Count how many even and odd numbers.

7️⃣ Find Smallest Number

Find the minimum element.

8️⃣ Reverse Array (Print Only)

Print array in reverse order (don’t modify).

9️⃣ Check Element Exists

Check if a given number exists in the array.

🔟 Copy One Array into Another


Copy all elements into a new array using a loop.
*/
let array1 = [];
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function CountEvenOdd() {
  let even = [];
  let odd = [];
  let evenCount = 0;
  let oddCount = 0;
  console.log(" NOTE : Enter Elements seperating each by adding ','  ");
  r1.question("Enter Elements in Array  ", (value1) => {
    array1 = value1.split(",").map(Number);
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] % 2 == 0) {
        even.push(array1[i]);
        evenCount++;
      } else {
        odd.push(array1[i]);
        oddCount++;
      }
    }
    console.log(
      `Even Numbers : [${even}] | Even Count : ${evenCount}\n Odd Numbers : [${odd}] | Odd Count : ${oddCount}`,
    );
    console.log("\n");
    Display();
  });
}
function SmallestValue() {
  if (array1.length === 0) {
    console.log(
      `\n \t X please enter elements in array first ! (click 1 to add elements) \n`,
    );
    Display();
  } else {
    let smallestValue = 1000;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] < smallestValue) {
        smallestValue = array1[i];
      }
    }
    console.log(`Smallest Value in Array1=[${array1}] is ${smallestValue}\n`);
    Display();
  }
}
function ReversingValue() {
  let reversedArray = [];
  for (let i = array1.length; i >= 0; i--) {
    reversedArray.push(array1[i]);
  }
  console.log(
    `Original Array =[${array1}] --> Reversed Array = [${reversedArray}]\n`,
  );
  Display();
}
function ExistenceElement() {
  r1.question("Enter a value to check if it is present : ", (value) => {
    value = Number(value);
    for (let i = 0; i <= array1.length; i++) {
      if (value === array1[i]) {
        console.log(
          `Value exist  | Value you entered ${value} -> exists -> (${i}th index) value: ${array1[i]} \n`,
        );
      }
    }
    Display();
  });
}
function CopyingArray() {
  let newArray = [];
  console.log(`previous array : array[${array1}]  `);
  console.log(`copying array1 to other array ...`);
  newArray = [...array1];
  console.log(`New Array : newArray[${newArray}]`);
  console.log("\n");
  Display();
}
function Display() {
  console.log(
    "-------------------------------Arrays (level2)--------------------------------",
  );
  console.log(
    "= Note: we are having same array that is taken as input to perform every case =",
  );
  console.log(
    "----------------------------------------------------------------------------",
  );

  console.log("1. Counting Evens & Odds from Array");
  console.log("2. Finding Smallest from Array");
  console.log("3. Reversing Array");
  console.log("4. Checking Existence of element in Array");
  console.log("5. Copies one Array into another new array using loop");

  r1.question("Enter your choice : ", (value) => {
    let choice = Number(value);
    switch (choice) {
      case 1:
        CountEvenOdd();
        break;
      case 2:
        SmallestValue();
        break;
      case 3:
        ReversingValue();
        break;
      case 4:
        ExistenceElement();
        break;
      case 5:
        CopyingArray();
        break;
      default:
        console.log(" you entered wrong choice ");
        break;
    }
  });
}
Display();
