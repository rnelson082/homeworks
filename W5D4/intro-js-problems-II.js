// Phase I: Callbacks
//
// Write a function titleize that takes an array of names and a function (callback). titleize should use Array.prototype.map to create a new array full of titleized versions of each name - titleize meaning "Roger" should be made to read "Mx. Roger Jingleheimer Schmidt". Then pass this new array of names to the callback, which should use Array.prototype.forEach to print out each titleized name.
function titleize(array, callback){
  result = array.map(word=>callback(word))
  result.forEach(fullname=>console.log(fullname))
}

const printCallback = (word) => {
  return `Mx. ${word[0].toUpperCase()}${word.slice(1)} Jingleheimer Schmidt`;
}

titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt
// undefined


// Phase II: Constructors, Prototypes, and this
//
// First write a constructor function for an elephant. Each elephant should have a name, height (in inches), and array of tricks in gerund form (e.g. "painting a picture" rather than "paint a picture").
//
// Next write a few prototype functions that will be shared among all elephants:

function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks;
};


Elephant.prototype.trumpet = function(){
  // console.log(`${this.name} the elephant goes phrRRR!`)
  return `${this.name} the elephant goes phrRRR!`
};

Elephant.prototype.grow = function(){
  return `${this.name} is now ${this.height} and 12 inches!`
}

Elephant.prototype.addTrick = function(newTrick){
  this.tricks.push(newTrick)
  console.log("New Tricks!", this.tricks)
}

Elephant.prototype.play = function(){

  var randomTrick = this.tricks[(Math.floor(Math.random() * this.tricks.length))]
  console.log(`${this.name} is ${randomTrick}`)
}
var ray = new Elephant("ray","10ft",["eat","fight","sleep"])
console.log(ray.trumpet())
console.log(ray.grow())
console.log(ray.addTrick("skipping"))
console.log(ray.play())

// Elephant.prototype.trumpet: should print "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
// Elephant.prototype.grow: should increase the elephant's height by 12 inches
// Elephant.prototype.addTrick(trick): add a new trick to their existing repertoire
// Elephant.prototype.play: print out a random trick, e.g. "(name) is (trick)!"
// Hint: look up some JS Math methods!


// First, let's make a few elephants so we have a small herd. Feel free to copy the code below, or to make your own with any attributes you like. Make sure to store all of our elephants in an array.

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);
//
let herd = [ellie, charlie, kate, micah];

Elephant.prototype.paradeHelper = function(elephant){
  return elephant.play()
}

console.log(herd.forEach(e=>e.paradeHelper(e)))

console.log(Elephant.prototype.paradeHelper(ellie))


// // Now let's create a function called paradeHelper that we'll use to have an elephant parade. It should take a single elephant as an argument; this way, we can pass it as a callback to forEach when called on our herd. Make sure to store it as a property on the Elephant object. You can populate it with any console.log statement you want to build your parade (e.g. "_______ is trotting by!").
//
// // For example:
//
// Elephant.paradeHelper(micah);
// // Micah is trotting by!
// undefined
