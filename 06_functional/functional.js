function countWords(str) {
  var arr = str.split(" ");
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += 1;
  };
  return result;
}

function makeAdder(num1) {
  return function(num2) {
    return num1 + num2;
  };
}

function forEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  };
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
      newArr.push(arr[i])
    }
  };
  return newArr;
}

function contains(coll, elem) {
  var result;
  for (var i in coll) {
    if (coll[i] === elem) {
      return true;
    }
  }
  return false;
}

function reduce(arr, total, func) {
  for (var i = 0; i < arr.length; i++) {

    total = func(total, arr[i]);
  }
  return total;
};

function countWordsInReduce(result, str) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    result += 1;
  }
  return result;
};

function sum(arr) {
  function add(a, b) {
    return a + b;
  }
  return reduce(arr, 0, add);
}

function every(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      return false;
    }
  };
  return true;
}

function any(arr, func) {
  if (typeof func === "undefined") {
    func = function(a) {
      return a;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return true;
    }
  };
  return false;
}

function once(func) {
  var hasRun = false;
  return function() {
    if (hasRun) {
      func()
    }

    hasRun = true;
  }
}



////Oh