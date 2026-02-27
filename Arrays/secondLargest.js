const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter Elements in array : ", (value) => {
  let arr = [];
  let largestNum = 0;
  let secondLargest = 0;
  value = value.split(",").map(Number);
  console.log(value);
  for (let i = 0; i < value.length; i++) {
    arr.push(value[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largestNum) {
      secondLargest = arr[i];
    }
  }
  console.log(largestNum);
  console.log(secondLargest);
});
