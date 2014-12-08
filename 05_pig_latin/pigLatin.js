function translate(str) {

  var arr = str.split(" ");
  var vowels = "aeiou";
  var cons = "bcdfghjklmnpqrstvwxz"
  var newStr = [];

  for (var i = 0; i < arr.length; i++) {
    if (vowels.indexOf(arr[i][0]) > -1) {
      newStr.push(arr[i] + "ay");
    } else {
      if (arr[i][0] === "s" && arr[i][1] === "c" && arr[i][2] === "h") {
        newStr.push(arr[i].substr(3) + arr[i].substr(0, 3) + "ay");
      } else if (arr[i][0] === "q" && arr[i][1] === "u") {
        newStr.push(arr[i].substr(2) + arr[i].substr(0, 2) + "ay");
      } else if (arr[i][1] === "q" && arr[i][2] === "u") {
        newStr.push(arr[i].substr(3) + arr[i].substr(0, 3) + "ay");
      } else if (cons.indexOf(arr[i][1]) > -1) {
        newStr.push(arr[i].substr(2) + arr[i].substr(0, 2) + "ay");
      } else {
        newStr.push(arr[i].substr(1) + arr[i].substr(0, 1) + "ay");
      }
    }

  }
  return newStr.join(" ");
}