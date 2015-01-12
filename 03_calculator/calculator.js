function Calculator() {

  var total = 0;

  // var result = [];
  // this.value = function(result) {
  //   if (typeof result === "undefined") {
  //     return 0;
  //   } else {
  //     for (var i = 0; i < result.length; i++) {
  //       result += result[i];
  //     }
  //   }
  //   return result;
  // };

  this.value = function() { // or Calcuator.prototype.value
    return total;
  }

  // { value: function(){
  //     return total;
  //   },
  // }

  this.add = function(num) {
    total = total + num;
  };

  // { value: function(){
  // //     return total;
  // //   },
  //   add: function(num){
  //     total+= num;
  //   }
  // // }
  this.subtract = function(num) {
    total = total - num;
  }


};

// Or 

// function Calculator() {
//   this.currentValue = 0;
// }

// Calculator.prototype.value = function() {
//   return this.currentValue;
// }

// Calculator.prototype.add = function(val) {
//   this.currentValue += val;
// }

// Calculator.prototype.subtract = function(val) {
//   this.currentValue -= val;
// }
