function f2c(temp) {
  return Math.floor(((temp - 32) * 5) / 9);
}

function c2f(temp) {
  return ((temp * 9) / 5) + 32;
}

function Temperature() {

  //var privDegF;

  this.setFahrenheit = function(degF) {
    privDegF = degF;
  }

  this.fahrenheit = function() {
    return privDegF;
  }

  this.setCelcius = function(degC) {
    privDegF = ((degC * 9) / 5) + 32;
  }

  this.celcius = function() {
    return Math.floor(((privDegF - 32) * 5) / 9);
  }
}


// privDegrees = ((degreesC * 9) / 5) + 32;