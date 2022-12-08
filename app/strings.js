exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    let regex = new RegExp("(.)(?=\\1{" + amount + "})", "g");
    return str.replace(regex, "");
  },

  wordWrap: function (str, cols) {

    let formated = '';
    let arraywords = [];

    arraywords = str.split(' ');

    formated = arraywords[0];

    for (let i = 1; i < arraywords.length; i++) {

        if (arraywords[i].length > cols) {

            formated += '\n' + arraywords[i];

        } else {

            if (formated.length + arraywords[i].length > cols) {

                formated += '\n' + arraywords[i];

            } else {

                formated += ' ' + arraywords[i];

            }
        }
    }

    return formated;

  },

  reverseString: function (str) {
    return str.split("").reverse().join("");
  },
};
