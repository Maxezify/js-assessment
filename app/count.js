exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

    let timerMachine;

    timerEngine();

    function timerEngine() {

      if (start < end) {

      timerMachine = setTimeout(timerEngine, 100);

      }

     console.log(start++);

    }

    return {
      cancel: function() {

        clearTimeout(timerMachine);

      }

    };

    }

};
