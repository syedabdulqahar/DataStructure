for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5 - i; j++) {
    str = str + " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    str = str + "-";
  }
  console.log(str);
}
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += " ";
  }
  for (let k = 0; k < 2 * (5 - i) - 1; k++) {
    str += "-";
  }
  console.log(str);
}
