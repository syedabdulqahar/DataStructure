class Node {
  constructor(value, address = null) {
    this.value = value;
    this.address = address;
  }
}
const n1 = new Node(16, 100);
console.log(n1);
