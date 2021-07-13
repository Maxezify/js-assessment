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

    let arr2 = [];

    let request = new XMLHttpRequest();
    
    request.open('GET', url);

    request.responseType = 'json';

    request.send();

    request.onload = function() {

      let elements = request.response;

      for (let i = 0; i < elements.people.length; i++) {

        let result = elements.people[i].name;

        arr2.push(result);

        }

      arr2.sort();

      console.log(arr2);

      //return arr2;

    }

  }

};
