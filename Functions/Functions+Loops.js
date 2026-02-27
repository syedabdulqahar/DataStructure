const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter size of diamond you want to have : ", (value) => {
  let size = Number(value);
  //First half of diamond
  for (let i = 0; i < size; i++) {
    let str = "";
    //spaces loop
    for (let j = 0; j < size - i; j++) {
      str += "-";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      str += "*";
    }
    for (let l = 0; l < size - i; l++) {
      str += "-";
    }
    console.log(str);
  }
  //second half of diamond
  for (let i = 0; i < size; i++) {
    let str = "";
    //spaces loop
    for (let j = 0; j <= i; j++) {
      str += "-";
    }
    //reversed pyramid
    for (let k = 0; k < 2 * (size - i) - 1; k++) {
      str += "*";
    }
    for (let l = 0; l <= i; l++) {
      str += "-";
    }
    console.log(str);
  }
});
