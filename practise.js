for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5 - i; j++) {
    str = str + " ";
  }
  for (let k = 1; k <= 2 * i + 1; k++) {
    str = str + "-";
  }
  console.log(str);
}
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str = str + " ";
  }
  for (let k = 5 * 2 - i; k > 0; k--) {
    str = str + "-";
  }
  console.log(str);
}
