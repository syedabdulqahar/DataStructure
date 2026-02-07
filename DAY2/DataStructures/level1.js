/*
    1️⃣ Print All Elements

Traverse an array and print each element.

[10, 20, 30, 40]

2️⃣ Count Elements

Find the total number of elements without using .length.

3️⃣ Sum of Array

Find the sum of all elements.

4️⃣ Print Even Numbers

Print only even elements from the array.

5️⃣ Find Largest Number

Find the largest element using a loop.
  */

const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let array1 = []; //initialized Global Array
function PrintElements() {
  //Entering Elements in array from user
  //store it in number in arrray
  //Loop through array
  r1.question(
    `Enter Element in array (seperate each element with comma ",") : `,
    (value) => {
      value = value.split(",");
      value = value.map(Number);

      for (let i = 0; i < value.length; i++) {
        array1.push(value[i]);
      }
      console.log("\t Whole array : ");
      console.log(`\t ${array1}`);
      console.log("\t Printing Elements :");
      for (let i = 0; i < array1.length; i++) {
        console.log(`\t    array1[${i}] = ${array1[i]}`);
      }
      console.log("\n");

      display();
    },
  );
}
function CountElements() {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    console.log(`\t Element ${i} of array1 was ${array1[i]} `);
    count++;
  }
  console.log(`\t Count of Array1 is : ${count}`);
  console.log("\n");
  display();
}
function SumofArray() {
  if (array1.length === 0) {
    console.log(`\n \t X please input array by pressing 1 from the following `);
    console.log("\n");
    display();
  } else {
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
      sum = sum + array1[i];
    }
    console.log(`\t Sum of array1= [${array1}] is =  ${sum} \n`);
    display();
  }
}

function EvenNumber() {
  console.log(
    `Checking Even Number from array1[${array1.length}] = [${array1}] .... `,
  );
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 == 0) {
      console.log(`Number [${array1[i]}] is Even at array1[${i}]`);
    }
  }
  console.log("\n");
  display();
}
function LargestNumber() {
  if (array1.length === 0) {
    console.log(
      `\n \t X Array is Empty ! Please enter array elements by pressing choice 1 `,
    );
    console.log("\n");
    display();
  } else {
    let largest = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] > largest) {
        largest = array1[i];
      }
    }
    console.log(`Largest Value from array1[${array1}] is ${largest}`);
    console.log("\n");
    display();
  }
}
function display() {
  console.log(
    "-------------------------------- Arrays ---------------------------------------",
  );
  console.log(
    "= Note : Each of the following is using same array which is taken as input from 1 =",
  );
  console.log(
    "-------------------------------------------------------------------------------",
  );
  console.log("1. Print elements of Array \t Note: 2 is dependent on 1");
  console.log("2. Count elements in Array");
  console.log("3. Sum of Array");
  console.log("4. Even Numbers in array ");
  console.log("5. Largest Number in array ");
  r1.question("- Enter Your Choice : ", (value) => {
    let choice = Number(value);
    switch (choice) {
      case 1:
        PrintElements();
        break;
      case 2:
        CountElements();
        break;
      case 3:
        SumofArray();
        break;
      case 4:
        EvenNumber();
        break;
      case 5:
        LargestNumber();
        break;
      default:
        console.log("You entered wrong number as a choice");
    }
  });
}
display();
