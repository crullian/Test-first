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

function reduce() {

}

function sum() {

}

function every() {

}

function any() {

}

function once() {

}

// HA!