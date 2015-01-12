function repeat(str, num) {
  var newStr = "";
  for (var i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
  // Another cheaper way:
  // var strArr = [];
  // for (var i = 0; i < num; i++) {
  //   strArr.push(str);
  // }
  // return strArr.join();
}

function join(arr, delim) {
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    str += arr[i];
    if (delim && i != arr.length - 1) { // setting a var to arr.length saves some time in the loop.
      str += delim; // could check for delim outside of for loop.
    }

  }
  return str;
}

// function sum(arr) {
//   var total = 0;
//   for (var i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

function sum(arr) {
  var sum = 0;
  var i = arr.length;
  while (i--) { // while loop stops on a falsey value.
    sum += arr[i];
    // arr.forEach(function(i) {
    //   sum += i
    // })
  }
  return sum;
}


function paramify(obj) {
  var result = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) { // in a for in loop always do this to avoid accessing prototype properties
      result.push(key + "=" + obj[key]);
    }
  }
  result = result.sort().join("&");
  return result;
}

// Non recursive:
// function factorial(num) {
//   var product = 1;
//   for (var i = 0; i < num; i++) {
//     product *= i;
//   };
//   return product;
// }

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

  // or simply using the above join function: return join(arguments, "");
}



// loops