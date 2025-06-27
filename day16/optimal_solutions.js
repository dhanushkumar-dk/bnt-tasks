let str = "hello";
console.log(str.split(""));
console.log(str.split("").reverse());
console.log(str.split("").reverse().join(""));

// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr); // "olleh"

// Remove duplicates
// 1. Set()
let numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let uniqueNumbers;
uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// 2. filter
uniqueNumbers = numbers.filter((value, index, array) => {
  return array.indexOf(value) === index;
});
