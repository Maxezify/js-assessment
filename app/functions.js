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

  const element = [];

  const fn2 = function(numero) {

    return function(){

      return fn(numero);

    }

  };

  for (let i=0; i<arr.length; i++) {

  element.push(fn2(arr[i]));

  }

  return element;

  },

  partial: function(fn, str1, str2) {

    //console.log(fn);
    //console.log(str1);
    //console.log(str2);

    function partialelement(greeting) {

      return fn.call(null, str1, str2, greeting);

    }

    return partialelement;

  },

  useArguments: function() {

    let total = 0;

    for (let i=0; i < arguments.length; i++) {

      total += arguments[i];

      }
      
    return total;

  },

  callIt: function(fn) {

    //console.log(fn);

    const arbitrary = Array.prototype.slice.call(arguments, 1, arguments.length);

    fn.apply(null, arbitrary);

  },

  partialUsingArguments: function(fn) {

    //console.log(fn);

    let arbitrary = Array.prototype.slice.call(arguments, 1, arguments.length);

    ExampleArgument = function() {

      const examplePartial = arbitrary.concat(Array.prototype.slice.call(arguments));

      return fn.apply(null, examplePartial);

    }

    return ExampleArgument;

  },

  curryIt: function(fn) {

    //console.log(fn);

    const curryThis = function(x)  {

      return function(y)  {

        return function(z) {

          return x / y * z;

        };

      };

    }

    return curryThis;

  }
};
