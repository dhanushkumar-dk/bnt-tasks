// ------------------------  Type of  --------------------------------------

let undef;

console.log("Undefined Value for Variable " + typeof undef);
console.log("Number " + typeof 0);
console.log("Number inside quotes " + typeof "0");
console.log("Type casting of str num to int num " + typeof Number("0"));
console.log("String " + typeof "alphabet");
console.log("String converted to number " + Number("Hello"));
console.log("String + Number " + typeof ("0" + 2));

console.log("Number " + typeof Boolean(0));
console.log("Number " + typeof false);

// ---------------------  Task 2  -----------------------------------------

console.log("Hello " + 20);

// ---------------------  Task 3  -----------------------------------------

let string_name = "malayalam";
let rev_name = "";

for (let i = 0; i < string_name.length; i++) {
  rev_name = string_name.charAt(i) + rev_name;
}

console.log(string_name === rev_name);

// ---------------------  Task 4, 12  -----------------------------------------

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);
console.log(typeof arr);

arr.push(8);
console.log(arr);

arr.pop();
console.log(arr);

let len_arr = arr.length;
console.log(len_arr);

let lstindof_exmp = "hello";
console.log(lstindof_exmp.lastIndexOf("l"));

let lstindof_exmp1 = [1, 2, 3, 1, 4, 5];
console.log(lstindof_exmp1.lastIndexOf(1));

console.log(arr);
delete arr[3];
console.log(arr);

arr.unshift(0);
console.log(arr);

let first = arr.shift();
console.log(first); // 0
console.log(arr); // [1, 2, 3,...]

// ---------------------  Task 5  -----------------------------------------

console.log(Number("0"));
console.log(Number(1.0));

console.log(String(1.0));
console.log(String(1.5));
console.log(typeof String(1.0));

console.log(parseFloat(1));

// ---------------------  Task 6  -----------------------------------------

console.log(Number("hello"));

// ---------------------  Task 7  -----------------------------------------

let name = "Dhanush";
let age = 22;

Number.isFinite(age);
Number.isFinite(name);
Number.isFinite(Number("hello"));
Number.isFinite(NaN);
Number.isFinite(Infinity);

// ---------------------  Task 8  -----------------------------------------

parseInt("42"); // 42
parseInt("42.99"); // 42 (cuts off decimal part)
parseInt("1010", 8); // 10 (binary to decimal)
parseInt("abc"); // NaN
parseInt("12abc34"); // 12 (stops at non-digit)

// ---------------------  Task 9  -----------------------------------------

parseFloat("3.14"); // 3.14
parseFloat("42"); // 42
parseFloat("12.34abc"); // 12.34
parseFloat("abc"); // NaN

// ---------------------  Task 10  -----------------------------------------

let ch = 1;
// let ch = 7;
// let ch = 8;
switch (ch) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tueday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Enter valid input");
}

// ---------------------  Task 11  -----------------------------------------

{
  var x = 10;
  let y = 20;
}
console.log(x); //  10 var is  global variable
// console.log(y); //  let is block scoped or local variable

// --------------------- Hoisting

console.log(a); // undefined (var is hoisted)
var a = 5;

console.log(b); // ReferenceError (let is hoisted but in TDZ)
// let b = 10;

// ---------------------  Task 13  -----------------------------------------

let arr_splice = [1, 2, 3, 4, 5];
arr_splice.splice(2, 2); // remove 2 items starting from index 2
console.log(arr_splice); // [1, 2, 5]

let arr_splice_ = [1, 2, 5];
arr_splice_.splice(2, 0, 3, 4); // add 3 and 4 at index 2 without deleting
console.log(arr_splice_); // [1, 2, 3, 4, 5]

// ---------------------  Task 14  -----------------------------------------

let arr1 = [0, 1, 2, 3];
let arr2 = [4, 5, 6, 7];

console.log(arr1.concat(arr2));

// ---------------------  Task 15  -----------------------------------------

let merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// ---------------------  Task 16  -----------------------------------------
let student = {
  name: "Dhanush",
  age: 21,
  department: "CSE",
  marks: [85, 90, 92],
};

console.log(student.name); // "Dhanush"
console.log(student["age"]); // 21
console.log(student.department); // "CSE"
console.log((student.marks[0] = 100));
console.log(student.marks[0]);

// ---------------------  Task 17  -----------------------------------------

let person = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
    console.log(`and I'm ${this.age} years old`);
  },
};

// Create a new object based on `person`
let student_1 = Object.create(person);

student_1.name = "Dhanush";
student_1.age = 22;

student_1.greet(); // "Hello, my name is Dhanush"
