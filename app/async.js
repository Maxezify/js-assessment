exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

    let result;

    let firstPromise = new Promise((resolve) => {
      
      setTimeout(() => {

        resolve(value);

      }, 100);

    });

    firstPromise.then((value) => {

      console.log(value);

    });

    return firstPromise;

  },

  manipulateRemoteData: function(url) {

  }
};
