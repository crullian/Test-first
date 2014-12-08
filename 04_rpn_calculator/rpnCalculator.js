function Calculator() {

  var total = [0];

  this.value = function() {
    return total[total.length - 1];
  }

  this.plus = function() {
    total.push(this.pop() + this.pop());
  }

  this.minus = function() {
    var secNum = this.pop();
    var firstNum = this.pop();
    total.push(firstNum - secNum); // Order matters!
  }

  this.times = function() {
    total.push(this.pop() * this.pop());
  }

  this.divide = function() {
    var secNum = this.pop();
    var firstNum = this.pop();
    total.push(firstNum / secNum); // Order matters!
  }

  this.push = function(num) {
    total.push(num);
  }

  this.pop = function() {
    var result = total.pop();
    if (typeof result === "undefined") {
      throw "calculator is empty"
    }
    return result;
  }
};