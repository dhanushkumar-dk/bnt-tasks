let n1 = [1, 2, 3];
let n2 = [2, 4, 5];

let uniqueFromN1 = n1.filter((val) => !n2.includes(val));

let uniqueFromN2 = n2.filter((val) => !n1.includes(val));

let res = uniqueFromN1.concat(uniqueFromN2);

console.log(res); // [1, 3, 4, 5]
