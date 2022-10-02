exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    listfiles = [];

    function dataFiles(data) {

      let a;
      let file;
      let files = [];

      for (i = 0, a = files.length; i < a; i++) {

        file = files[i];


      }

    }

    return listfiles;

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

      let fibTab = [1, 1];

      for (let i = 2; i < n; i++) {

         let a = fibTab[i - 1];

         let b = fibTab[i - 2];

         fibTab.push(a + b);

      };

      return fibTab[n - 1];

  },

  validParentheses: function(n) {

  }
};
