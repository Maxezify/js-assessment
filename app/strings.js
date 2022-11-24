exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    let regex = new RegExp("(.)(?=\\1{" + amount + "})", "g");
    return str.replace(regex, "");
  },

  wordWrap: function (str, cols) {},

  reverseString: function (str) {
    return str.split("").reverse().join("");
  },
};
