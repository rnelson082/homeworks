function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping1()//in block, in block

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x); //const stay s true to its scope
  }
  console.log(x);
}

// mysteryScoping2()// my guess: error? //ans: in block, out of block

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping3()//my_guess:  out of block, out of block. //ans: ERROR

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x); //goes by order of console.log
  }
  console.log(x);
}

// mysteryScoping4()//:my guess: out fo block, in block. //ans: the reverse

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}
// mysteryScoping5() // ok im getting this right: in block, out of block
//ans: error.  COME ON MAN

//
// madLib
//
// Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.
//
// For example,
const madLib = (verb, adj, noun) => {
  console.log("Mad Lib result:", `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`)
}

madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."


// // isSubstring
//
// Input
//
// A String, called searchString.
// A String, called subString.
// Output: A Boolean. true if the subString is a part of the searchString.
//

const isSubstring = (str, substr) => {
  let strArr = str.split(' ')
  console.log("isSubstring result:", strArr.includes(substr) ? true : false)
}

isSubstring("time to program", "time")
// // true
//
isSubstring("Jump for joy", "joys")
// // false
// // Phase II - JS Looping Constructs
// //
// // Carry on! Know your loops!
// //
// // fizzBuzz
// //
// // 3 and 5 are magic numbers.
// //
// // Define a function fizzBuzz(array) that takes an array and returns a new array of every number in the array that is divisible by either 3 or 5, but not both.

function fizzBuzz(array){
  var fbarray = []
  for(var i = 0; i < array.length; i++){
    if(array[i] % 5 === 0 && array[i] % 3 === 0){
      fbarray
    } else if(array[i] % 5 === 0){
      fbarray.push(array[i])
    } else if(array[i] % 3 === 0){
      fbarray.push(array[i])
    }
  }
  console.log("FizzBuzz numbers:", fbarray)
}

let randomArray = Array.apply(null, Array(10)).map(function() { return Math.floor(Math.random() * 100 % 100); }) //i am not that tight, i found this on stack overflow.

fizzBuzz(randomArray)
//

function isPrime(n){
  var primeNums = []
  for(var i = 0; i < n; i++){
    n % i === 0 ? primeNums.push(i) : "do nothing"
  }
  // console.log("Are we prime:", primeNums, primeNums.length <= 2)
  return primeNums.length <= 1
}

// // isPrime
// //
// // Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.
//
 isPrime(2)
// // true
//
 isPrime(10)
// // false
//
 isPrime(15485863)
// // true
//
 isPrime(3548563)
// // false
// //
// //

const sumOfNPrimes = (n) => {
  var addThese = []
  var i = 2
  if (n === 0){
    console.log("n is 0, therefore, sum is 0",0)
    return 0
  }
  while (addThese.length < n){
    if (isPrime(i)){
      addThese.push(i)
    }
    i++
  }

  summedPrimes = addThese.reduce((acc,el)=>acc+el)
  console.log("Sum of primes", addThese, summedPrimes)
}
// // sumOfNPrimes
// //
// // Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers. Hint: use isPrime as a helper method.
//
sumOfNPrimes(0)
// //0
sumOfNPrimes(1)
// //2
sumOfNPrimes(4)
// //17
