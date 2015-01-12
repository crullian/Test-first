var Mammal = function(name) {
  this.name = name;
  this.offspring = [];
}

Mammal.prototype.sayHello = function() {
  return "My name is " + this.name + ", I'm a Mammal";
}

Mammal.prototype.haveBaby = function() {
  var baby = new Mammal("Baby " + this.name);
  this.offspring.push(baby);
  return baby;
}

var Cat = function(name, color) {
  this.name = name;
  this.color = color;
  this.offspring = [];
  this.haveBaby = function(color) {
    var baby = new Cat("Baby " + this.name, color);
    this.offspring.push(baby);
    return baby;
  }
}



Cat.prototype = Object.create(Mammal.prototype);