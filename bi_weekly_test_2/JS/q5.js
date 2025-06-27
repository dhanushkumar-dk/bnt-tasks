// Hoisting

console.log(a + 1);
// console.log(b); // let variable produce error
var a = 0;
let b = 0;

// console.log(c); //undefined
// console.log(d); //error
{
  var c = 0;
  let d = 0;
  //   console.log(b + 1); // after declaration will work
  //   console.log(a + 1); // after declaration will work
}

console.log(a + 1);
console.log(b + 1);
console.log(c + 1);
// console.log(d); // let inside block can not be accessed, it produce error
