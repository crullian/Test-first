var Mammal = function(name) {
  this.name = name;
  this.offspring = [];
}

Mammal.prototype.sayHello = function() {
  return "My name is " + this.name + ", I'm a Mammal";
}
Mammal.prototype.haveBaby = function() {
  var child = new Mammal("Baby " + this.name);
  this.offspring.push(child);
  return child;
}

var Cat = function(name, color) {
  this.name = name;
  this.color = color;
  this.haveBaby = function(color) {
    var child = new Cat("Baby " + this.name, color);
    this.offspring.push(child);
    return child;
  }
}

Cat.prototype = new Mammal();

// // all function objects have a .prototype property
// // all objects have an internal linkage to another Object's prototype
// // it is represented by [[Prototype]] or .__proto__
// var Mammal = function(name) {
//   this.name = name;
//   this.offspring = [];
// };

// Mammal.prototype.sayHello = function() {
//   return "My name is " + this.name + ", I'm a Mammal";
// };

// Mammal.prototype.haveBaby = function() {
//   var child = new Mammal("Baby " + this.name);
//   this.offspring.push(child);
//   return child;
// };

// //
// // this throws an error...shouldn't this be defined after the declaration of Cat?
// // Cat.prototype = new Mammal();

// var Cat = function(name, color) {
//   this.name = name;
//   this.color = color;
//   // this.offspring = [];
//   this.haveBaby = function(color) {
//     console.log('color is : ' + color);
//     var child = new Cat("Baby " + this.name, color); //?

//     this.offspring.push(child);
//     return child;
//   };
// };

// // Object.create(Mammal.prototype);

// // setup inheritance of cat to mammal
// Cat.prototype = new Mammal();

// // {name: undefiend,
// //  offspring: ["fredsBaby"]
// // }

// // var fred = new Cat();
// // var mike = new Cat();
// // mike.__proto__
// // fred.__proto__
// // mike.offspring;
// // Cat.prototype = {
// //   sayHello: function(){},
// //   haveBaby: function(){]}

// //   __proto__: Mammal.prototype {}
// // }