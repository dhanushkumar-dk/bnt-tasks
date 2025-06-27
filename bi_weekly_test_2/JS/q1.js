let str = "aabbbcc";

let freq = {};
let maxChar = "";
let maxCount = 0;

for (let char of str) {
  // Count frequency
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }

  // Update max character and count
  if (freq[char] > maxCount) {
    maxChar = char;
    maxCount = freq[char];
  }
}

console.log("Most occurring character:", maxChar);
console.log("Occurs:", maxCount, "times");
