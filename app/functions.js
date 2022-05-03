exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {

    return fn.apply(this, arr);

  },

  speak: function(fn, obj) {

    return fn.call(obj);

  },

  functionFunction: function(str) {

  let element = str + ', ';

  return function(str) {

    return element + str;

  }

  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

    let total = 0;

    for (let i=0; i < arguments.length; i++) {

      total += arguments[i];

      }
      
    return total;

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
