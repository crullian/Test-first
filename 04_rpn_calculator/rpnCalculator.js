var Calculator = function() {
  var total = [];

  this.value = function() {
    return total[total.length - 1];
  };

  this.plus = function() {
    var num1 = this.pop();
    var num2 = this.pop();
    total.push(num1 + num2);
  }

  this.minus = function() {
    var num1 = this.pop();
    var num2 = this.pop();
    total.push(num2 - num1);
  }

  this.times = function() {
    var num1 = this.pop();
    var num2 = this.pop();
    total.push(num1 * num2);
  }

  this.divide = function() {
    var num1 = this.pop();
    var num2 = this.pop();
    total.push(num2 / num1);
  }

  this.push = function(num) {
    total.push(num);
  }

  this.pop = function() {
    var result = total.pop();
    if (typeof result === "undefined") {
      throw "calculator is empty";
    } else {
      return result;
    }
  }
};