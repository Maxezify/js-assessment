exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

if (Array.prototype.indexOf(2)) {

  return arr.indexOf(item);

}

  },



  sum: function(arr) {
 
  /*let sumArr = arr.reduce(function(a,b){

    return a + b;

  });

  return sumArr;*/

  let result = 0;

  for (let i = 0; i < arr.length; i++) {

  result += arr[i]; 

  }

  return result;
  
  },



  remove: function(arr, item) {

    let plus = 0;

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] != item) {

        plus++;

      }

      arr.splice(arr[i], plus);
  
    }
  
    return arr;

  },



  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

    arr.push(item);

    return arr;

  },




  truncate: function(arr) {

    /*
    
    ENLEVE SEULEMENT LA VALEUR
    
    arr.slice(0,-1);

    return arr;*/

    arr.pop();

    return arr;

  },



  prepend: function(arr, item) {

    arr.unshift(item);

    return arr;

  },



  curtail: function(arr) {

    arr.shift();

    return arr;

  },



  concat: function(arr1, arr2) {

   let arr3 = arr1.concat(arr2);

   return arr3;

  },



  insert: function(arr, item, index) {

    arr.splice(2,0,'z');

    return arr;

  },



  count: function(arr, item) {

    let number = 0;

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] === item) {

      number = number+1;

      }

    }

    return number;

  },




  duplicates: function(arr) {

let arr2 = [];

let filters = arr.sort();

for (let i = 0; i < filters.length; i++) {

if (filters[i++] === filters[i]) {

  arr2.push(filters[i]);

  }

}

return arr2;

  },




  square: function(arr) {

    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
     
      let result = Math.pow(arr[i], 2);

      arr2.push(result);

    }

  return arr2;

  },





  findAllOccurrences: function(arr, target) {

    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] === target)  {

        arr2.push(i);

      }

    }

    return arr2;

  }
};
