// Map

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Filter
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

// Reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// Map Filter Reduce

const number = [1, 2, 3, 4, 5, 6];

const result = number
  .filter((num) => num % 2 === 0) // [2, 4, 6]
  .map((num) => num * 10) // [20, 40, 60]
  .reduce((acc, val) => acc + val); // 120

console.log(result); // 120
