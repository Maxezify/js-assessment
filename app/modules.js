exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {

    let elements = {

      name: str2,
      greeting: str1

    };

    function sayIt(elements) {

    return elements.greeting + ', ' + elements.name;

    }

    return sayIt();

  }

};
