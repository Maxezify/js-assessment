exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {

    /*let files = [];

    for (let key in data) {

      if (key === 'files') {

        for (let i = 0; i < data[key].length; i++) {

          if (typeof data[key][i] !== 'object') {

            files.push(data[key][i]);

          } else {

            files = files.concat(this.listFiles(data[key][i]));

          }
        }
      }
    }

    return files;*/

    var result = [];

    function listData(data) {

      if (typeof data === 'string') {

        result.push(data);

      } else { 
        
        if (data instanceof Object) {

          for (var i = 0; i < data.files.length; i++) {
            
            listData(data.files[i]);
          }
        }
      }
    }

    function Subdirname(data) {

      if (data instanceof Object) {

        if (data.dir === dirName) {

          listData(data);

        } else {

            for (var i = 0; i < data.files.length; i++) {

              Subdirname(data.files[i]);

            }
        }
      }
    }

    if (dirName) {

      Subdirname(data);

    } else {

      listData(data);

    }

    return result;
  },

  permute: function (arr) {

    let length = arr.length;

    let result = [arr.slice()];

    let c = new Array(length).fill(0);

    let i = 1, k, p;

while (i < length) {

  if (c[i] < i) {

    k = i % 2 && c[i];

    p = arr[i];

    arr[i] = arr[k];

    arr[k] = p;

    ++c[i];

    i = 1;

    result.push(arr.slice());

  } else {

    c[i] = 0;

    ++i;

  }
}
return result;
},

  fibonacci: function (n) {
    let fibTab = [1, 1];

    for (let i = 2; i < n; i++) {
      let a = fibTab[i - 1];

      let b = fibTab[i - 2];

      fibTab.push(a + b);
    }

    return fibTab[n - 1];
  },

  validParentheses: function (n) {

    if (n == 0) {
        
      return [""];

      }

    let result = [];

    for (let i = 0; i < n; ++i) {

        let onLeft = this.validParentheses(i);

        let onRight = this.validParentheses(n - i - 1);

        for (let l = 0; l < onLeft.length; ++l) {

            for (let r = 0; r < onRight.length; ++r) {

                result.push("(" + onLeft[l] + ")" + onRight[r]);

              }
          }
      } 

    return result;
  },
};
