for (let a = 0; a < 5; a++) {
  if (a === 0 || a === 4 || a === 2) {
    let str = "";
    for (let b = 0; b < 5; b++) {
      str += "*";
    }
    console.log(str);
  } else {
    console.log("*");
  }
}
