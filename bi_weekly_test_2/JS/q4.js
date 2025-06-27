let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result1 = numbers.map((num) => num * 3);
let result2 = numbers.map((num) => num * 3).filter((num) => num % 2 !== 0);
let result3 = numbers
  .map((num) => num * 3)
  .filter((num) => num % 2 !== 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(result1);
console.log(result2);
console.log(result3);

// function chain(num) {
//   let arr = [];
//   for (let i = 0; i < num; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// let result = chain(5).add(2);
// console.log(result);
