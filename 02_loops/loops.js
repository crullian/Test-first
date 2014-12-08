function repeat(str, num) {
  var newStr = "";
  for (var i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

function join(arr, limit) {
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    str += arr[i];
    if (limit && i != arr.length - 1) {
      str += limit;
    }

  }
  return str;
}

function sum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function paramify(obj) {
  var result = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key + "=" + obj[key]);
    }
  }

  result = result.sort().join("&");
  return result;
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

function concat_string(args) {
  var newStr = "";
  for (var i = 0; i < arguments.length; i++) {
    newStr += arguments[i];
  }
  return newStr;
}






