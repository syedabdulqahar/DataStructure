/**
 * 🔵 LEVEL 5 — Logic / Interview Level 🔥

👉 Goal: Real thinking, not syntax

2️⃣1️⃣ Remove Duplicates

Without using Set.

2️⃣2️⃣ Find Second Largest

Find second maximum element.

2️⃣3️⃣ Left Rotate Array

Rotate array left by 1 position.

2️⃣4️⃣ Right Rotate Array

Rotate array right by 1 position.

2️⃣5️⃣ Move All Zeros to End
[0, 1, 0, 3, 12]

💡 Rules (Important)

✔ Use for loops only
❌ No push, pop, splice, shift, unshift
✔ Focus on index logic
 */
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
const case0 = () => {
  r1.question(
    "Enter Elements in array i.e seperate each element with ',' : ",
    (value) => {
      value = value.split(",").map(Number);
      arr = [...value];
      console.log(`Array = [${arr}] \n`);
      display();
    },
  );
};
const case1 = () => {
  console.log(`- Removing Duplicates in Array`);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  console.log(`Array after removal of duplication = Array[${arr}] `);
};
const case2 = () => {
  let largestNumber = -1;
  let count = 0;
  console.log(`Checking the Second Largest Value from Array=[${arr}]`);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
      count++;
    }
  }
  console.log(`Largest Number ${largestNumber}`);
};
function display() {
  console.log(
    "-------------------------------- Arrays (lvl 4)---------------------------------------",
  );
  console.log(
    "= Note : Each of the following is using same array which is taken as input from 1 =",
  );
  console.log(
    "-------------------------------------------------------------------------------",
  );
  console.log("0. [ Enter an Array ]");
  console.log("1. Removing Duplicates");
  console.log("2. Finding Second Largest");
  console.log("3. Left Rotate Array");
  console.log("4. Right Rotate Array ");
  console.log("5. Moving all 0's to end ");
  r1.question("- Enter Your Choice : ", (value) => {
    let choice = Number(value);
    switch (choice) {
      case 0:
        case0();
        break;
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

      default:
        console.log("You entered wrong number as a choice");
    }
  });
}
display();
