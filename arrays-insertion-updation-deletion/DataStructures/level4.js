/**
 * 
 * 🔴 LEVEL 4 — Deletion Problems

👉 Goal: Left shifting & resizing array

1️⃣6️⃣ Delete Last Element (Without pop)
1️⃣7️⃣ Delete First Element

Remove element at index 0.

1️⃣8️⃣ Delete from Specific Index

Delete element at index 2.

1️⃣9️⃣ Delete by Value

Delete first occurrence of a given number.

2️⃣0️⃣ Delete All Occurrences

Remove all occurrences of a number.
 */
const { validateHeaderName } = require("http");
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
const case1 = () => {
  r1.question(
    "Enter elements in array | (seperating elements with comma ',') : ",
    (value) => {
      value = value.split(",").map(Number);
      console.log(value);
      for (let i = 0; i < value.length; i++) {
        arr.push(value[i]);
      }
      arr.shift();
      console.log(`array =  [${arr}] `);
      console.log(`\tRemoving last Element ..`);
      arr = arr.slice(0, arr.length - 1);
      console.log(`-Last Element Removed : [${arr}]`);
      console.log(`\tRemoving First Element ...`);

      let newarr = [];
      for (let i = 1; i < arr.length; i++) {
        newarr.push(arr[i]);
      }
      arr = newarr;
      console.log(`-First Element Removed : [${arr}] \n`);

      console.log(`\t Final/Global Array : [${arr}] \n`);
      display();
    },
  );
};
const case2 = () => {
  r1.question(
    `Enter index from where you want to be delete element in Array [${arr}] : `,
    (value) => {
      let num = Number(value);
      arr.splice(value, 1);
      console.log(`-Value deleted at user input index of Array = [${arr}] \n`);
      console.log(`\t Final/Global Array : [${arr}] \n`);

      display();
    },
  );
};
const case3 = () => {
  r1.question(
    `Enter a value in array [${arr}] which you want to delete : `,
    (value) => {
      let valueDelete = Number(value);
      let final = arr.indexOf(valueDelete);
      arr.splice(final, 1);
      console.log(`Array after removing ${valueDelete} => [${arr}] \n`);
      display();
    },
  );
};
const case4 = () => {
  console.log(`Deleting all occurences in array ! array[${arr}]`);
  arr.splice(0, arr.length);
  console.log(`Final Array = [${arr}]`);
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
  console.log("1. Delete Last Element & First Element");
  console.log("2. Delete from specific index");
  console.log("3. Delete by giving a specific value");
  console.log("4. Deleting all occurences ");
  r1.question("- Enter Your Choice : ", (value) => {
    let choice = Number(value);
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

      default:
        console.log("You entered wrong number as a choice");
    }
  });
}
display();
