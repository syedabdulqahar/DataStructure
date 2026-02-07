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
function PrintElements() {
  //Entering Elements in array from user
  //store it in number in arrray
  //Loop through array
  r1.question(
    `Enter Element in array (seperate each element with comma ",") : `,
    (value) => {
      value = value.split(",");
      value = value.map(Number);
      let array1 = [];

      for (let i = 0; i < value.length; i++) {
        array1.push(value[i]);
      }
      console.log("Whole array : ");
      console.log(array1);
      console.log("Printing Elments :");
      for (let i = 0; i < array1.length; i++) {
        console.log(`${i} = ${array1[i]}`);
      }
    },
  );
}

function display() {
  console.log("--------  Arrays -----");
  console.log("1. Print elements of Array");
  console.log("2. Count elements in Array");
  console.log("3. Sum of Array");
  console.log("4. Even Numbers in array ");
  console.log("5. Largest Number in array ");
  r1.question("Enter Your Choice ", (value) => {
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
