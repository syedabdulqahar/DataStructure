/**
 * LEVEL 3 — Insertion Problems

👉 Goal: Understand shifting elements

1️⃣1️⃣ Insert at End (Without push)
arr = [1, 2, 3]
insert 4

1️⃣2️⃣ Insert at Beginning

Insert an element at index 0.

1️⃣3️⃣ Insert at Specific Index

Insert 50 at index 2.

[10, 20, 30, 40]

1️⃣4️⃣ Insert in Sorted Array

Insert 25 into:

[10, 20, 30, 40]

1️⃣5️⃣ Multiple Insertions

Insert 3 elements one by one at the end.
 */
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let array1 = [];
function case1() {
  r1.question(
    "Insert Elements in array seperating eachby comma ! ",
    (value) => {
      array1 = value.split(",").map(Number);
      console.log(array1);
      display();
    },
  );
}
function case2() {
  r1.question("Insert at the begining :", (value) => {
    array1.unshift(Number(value));
    console.log(array1);
  });
}
function case3() {
  r1.question(
    "Insert the index and value you want to push in array i.e(index,value):",
    (value) => {
      value = value.split(",").map(Number);
      let index = value[0];
      let element = value[1];
      for (let i = 0; i < array1.length; i++) {
        if (i === index) {
          array1[i] = element;
        }
      }
      console.log(array1);

      display();
    },
  );
}
function case4() {
  r1.question("Insert element in array (sorted form) : ", (value) => {
    let inserted = Number(value);
    let index = 0;
    for (let i = 0; i < array1.length; i++) {
      if (inserted < array1[i]) {
        index = i;
        break;
      }
    }
    array1.splice(index, 0, inserted);
    console.log(`Sorted Array = ${array1} \n`);

    display();
  });
}
let case5Array = [];
function case5() {
  let count = 0;
  function ask() {
    if (count === 3) {
      console.log(`Final Array : ${case5Array}`);
    }
    r1.question(`Enter element ${count} : `, (value) => {
      let num = Number(value);
      case5Array.push(num);
      count++;
      ask();
    });
  }
  ask();
}

function display() {
  console.log(
    "-------------------------------- Arrays (lvl 3)---------------------------------------",
  );
  console.log(
    "= Note : Each of the following is using same array which is taken as input from 1 =",
  );
  console.log(
    "-------------------------------------------------------------------------------",
  );
  console.log("1. Insert into array without push");
  console.log("2. Insert at begining ");
  console.log("3. Insert at user input index ");
  console.log("4. Insert in sorted array ");
  console.log("5. Inserting three elements one by one at the end ");
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
      case 5:
        case5();
        break;
      default:
        console.log("You entered wrong number as a choice");
    }
  });
}
display();
