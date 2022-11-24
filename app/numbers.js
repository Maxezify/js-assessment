exports = typeof window === "undefined" ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    let binary = num.toString(2);
    return "00000000".slice(0, -binary.length) + binary;
  },

  multiply: function (a, b) {
    return (a * 10 * (b * 10)) / 100;
  },
};
