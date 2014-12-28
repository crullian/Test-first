function f2c(temp) {
  return Math.floor(((temp - 32) * 5) / 9);
}

function c2f(temp) {
  return ((temp * 9) / 5) + 32;
}

var Temperature = function() {
  this.setFahrenheit = function(degreesF) {
    privDegrees = degreesF;
  };

  this.fahrenheit = function() {
    return privDegrees;
  };

  this.celcius = function() {
    return Math.floor(((privDegrees - 32) * 5) / 9);
  };

  this.setCelcius = function() {
    //privDegrees = ((degreesC * 9) / 5) + 32;
  };

}