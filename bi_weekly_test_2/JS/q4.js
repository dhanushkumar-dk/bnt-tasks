function chain(value) {
  return {
    add: function (num) {
      value += num;
      return this;
    },
    subtract: function (num) {
      value -= num;
      return this;
    },
    result: function () {
      return value;
    },
  };
}

console.log(chain(5).add(2).subtract(1).result()); // Output: 6
