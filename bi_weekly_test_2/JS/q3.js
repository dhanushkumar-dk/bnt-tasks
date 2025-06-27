let word = "JavaScript is powerful";
let words = word.split(" ");

let counts = [];
words.forEach((wordLen) => counts.push(wordLen.length));

// console.log(counts); // 10 2 8

let bigword = null;
counts.forEach((word) => {
  if (word > bigword) {
    bigword = word;
  }
});

let bwindex = counts.indexOf(bigword);

console.log(words[bwindex]);

// --------------------------------------------------------
