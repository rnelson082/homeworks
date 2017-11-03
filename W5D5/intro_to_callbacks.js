window.setTimeout(function () {
  alert('HAMMERTIME');
}, 5000)


function hammertime (time){
  window.setTimeout(function () {
  alert(`${time} is HAMMERTIME`);
}, 5000)

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("Do you want tea?", function(ans){
  reader.question("Do you want biscuits?", function(ans2){
    console.log(`so you ${ans} want tea and you ${ans2} want biscuits`)

    reader.close();
  })
})


function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();

console.log(Noodles.chase(Markov))
console.log(Noodles.chase.call(Markov, Noodles))
console.log(Noodles.chase.apply(Markov, [Noodles]))
