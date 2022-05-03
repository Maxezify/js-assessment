exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {

    return fn.call(obj);

  },

  alterObjects: function(constructor, greeting) {

    return constructor.prototype.greeting = greeting;

  },

  iterate: function(obj) {

    let elements = [];

    for (element in obj) {

      if (obj.hasOwnProperty(element)) {

      elements.push(element + ': ' + obj[element]);

      }

    }

  return elements;

  }
};
