function reverseString(str) {
  let rev_str = "";

  for (let i = 0; i < str.length; i++) {
    rev_str = str.charAt(i) + rev_str;
  }

  return rev_str;
}

// console.log(reverseString("hello"));

// ---------------------------------------------------------------------------------------------------------------------------------------------------

function palindrome(str) {
  if (str.toLowerCase() === reverseString(str.toLowerCase())) {
    console.log("Palindrome");
  } else {
    console.log("Not a Palindrome");
  }
}

// palindrome("madam");
// palindrome("Madam");
// palindrome("hello");

// ---------------------------------------------------------------------------------------------------------------------------------------------------

function findLargesElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var arr = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// findLargesElement(arr);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

function countVowels(str) {
  let vowlst = ["a", "e", "i", "o", "u"];
  let noofvowels = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i).toLowerCase();
    if (vowlst.includes(ch)) {
      noofvowels += 1;
    }
  }
  console.log(noofvowels + " vowels in the word " + str);
}

// countVowels("hello");
// countVowels("Elephant");
// countVowels("Dhanush");
// countVowels("paragraph");

// ---------------------------------------------------------------------------------------------------------------------------------------------------

function factorial(num) {
  fact = 1;

  if (num === 0 || num === 1) {
    console.log(`factorial of ${num} is ${fact}`);
  } else if (num > 0) {
    for (let i = 2; i <= num; i++) {
      fact = fact * i;
    }
  }

  console.log(`factorial of ${num} is ${fact}`);
}

// factorial(0);
// factorial(1);
// factorial(2);
// factorial(5);
// factorial(10);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// function isPrimeNum(num) {
//   if (num === 0 || num === 1) {
//     return false;
//   } else if (num === 2 || num === 3) {
//     return true;
//   } else if (num % 2 === 0 || num % 3 === 0) {
//     return false;
//   }
//   for (let i = 5; i < Math.sqrt(num); i += 6) {
//     if (num % i === 0 || (num % i) + 2 === 0) {
//       return false;
//     }
//   }

//   return true;
// }

function isPrimeNum(num) {
  if (num === 0 || num === 1) {
    return false;
  } else if (num === 2 || num === 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i <= Math.sqrt(num); i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrimeNum(1));
// console.log(isPrimeNum(2));
// console.log(isPrimeNum(3));
// console.log(isPrimeNum(3));

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${isPrimeNum(i)}`);
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //

      if (arr[i] === arr[j]) {
        // let p1 = arr.slice(0, j);
        // let p2 = arr.slice(j + 1, arr.length);
        // arr = [...p1, ...p2];

        arr = [...arr.slice(0, j), ...arr.slice(j + 1, arr.length)];
      }
    }
  }

  console.log(arr);
}

arr = [1, 2, 1, 3, 4, 5, 2, 3];
// removeDuplicates(arr);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

function sumOfArrElements(arr) {
  let result = arr.reduce((acc, val) => acc + val);
  return result;
}

// console.log(sumOfArrElements(arr));

// const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Fibonacci

function fibonacci(num) {
  if (num < 1) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num == 2) {
    return [0, 1];
  }

  let n1 = 0,
    n2 = 1;
  let result = [n1, n2];
  for (let i = 3; i <= num; i++) {
    result.push(n1 + n2);
    let temp = n1;
    n1 = n2;
    n2 = temp + n2;
  }
  return result;
}

// console.log(fibonacci(10));
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Non Repeating Chars of a string

function firstNonRepeating(arr) {
  //
  for (let i = 0; i < arr.length - 1; i++) {
    //
    let flag = true,
      v = null;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i != j) {
        flag = false;
      } else {
        v = arr[i];
      }
    }

    if (flag) {
      console.log(`The first non repeating number in array is ${v}`);
      break;
    }
  }
}

arr = [1, 2, 1, 3, 4, 5, 2, 3];
// firstNonRepeating(arr);
