exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

    let result;

    let firstPromise = new Promise((resolve, reject) => {
      
      setTimeout(() => {

        resolve(value);

      }, 100);

    });

    return firstPromise;

  },

  manipulateRemoteData: function(url) {

    let request = Promise.resolve($.ajax(url));

    return request.then(function(data) {
      
    let names = data.people.map(function(p) {return p.name;})
    return Promise.resolve(names.sort());
    });

  }

};
