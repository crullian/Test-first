function countWords(str) {
  var arr = str.split(" ");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += 1;
  }
  return total;
}

function makeAdder(A) {
  function adderOf2function(B) {
    return A + B;
  }
  return adderOf2function;
}

function forEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

function map(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  };
  return newArr;
}

function filter(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function contains(arr, elem) {
  for (var i in arr) {
    if (arr[i] === elem) {
      return true;
    }
  }
  return false;
}

function reduce(arr, strt, func) {

  for (var i = 0; i < arr.length; i++) {
    strt = func(strt, arr[i]);
  }
  return strt;
}

function countWordsInReduce(a, b) {
  var array = b.split(" ");
  for (var i = 0; i < array.length; i++) {
    a += 1;
  }
  return a;
}

function sum(arr) {
  function add(a, b) {
    return a + b;
  };
  return reduce(arr, 0, add);
}

function every(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      return false;
    }
  }
  return true;
}

function any(arr, func) {
  if (typeof func === "undefined") {
    func = function(a) {
      return a;
    };
  }
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return true;
    }
  }
  return false;
}

// function once(func) { // Question about this one!
//   var hasRun = false;
//   return function() {
//     if (hasRun === true) {
//       func();
//     }
//     hasRun = true;
//   }
// }

// num var to 0
// once function is called, and it accepts a function as a parameter
// the return value of the once function is assigned to the increment variable.
// the once function returns a function object
// when we check the num value it is set to 1;

function once(func) {
  var runAlready = false;
  // debugger;
  return function notTheOnceFunction() {
    // debugger;
    if (!runAlready) {
      func();
      runAlready = true;
    }

  }

}

// func();



// var hasRun = false;

// if (hasRun === true) {
// }
// hasRun = true;


// function once(func) {
//   var hasRun = false;
//   if (hasRun === true) {
//     hasRun = true;
//     return func();
//   } else {
//     return function() {};
//   }
// }


// HA!