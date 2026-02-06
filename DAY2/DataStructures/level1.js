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
  let arr = [];

  r1.question("Enter size of array : ", (value) => {
    let Size = Number(value);

    let count = 0;

    function takeInput() {
      if (count < Size) {
        r1.question(`Enter Element ${count}: `, (val) => {
          arr.push(Number(val)); // element add hoga
          count++;
          takeInput(); // next input
        });
      } else {
        console.log("Array elements are:", arr);
        r1.close();
      }
    }

    takeInput();
  });
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
