function A() {
  let count = 0;

  count++;
  console.log(count);
}

let C = A();
C(); //1
C(); //2
C(); //3
console.log(count);
