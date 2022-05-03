exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  return str.split('').filter(suppAmount()).join('');  

  function suppAmount(element) {

    if (element > amount) {

      element.pop();

    }
  }

  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

    return str.split('').reverse().join('');

  }
};
