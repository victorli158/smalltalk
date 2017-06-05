function isSubstring(phrase, subphrase) {
  return phrase.includes(subphrase);
}

function multByNine(x) {
  console.log(x * 9);
}

function isSubstring(phrase, substring) {
  return phrase.includes(substring);
}

function firstTenDivisibleBy(num){
  var numbers = [];
  var i = num;
  while (numbers.length < 10) {
    if (i % num === 0){
      numbers.push(i);
    }
    i++;
  }
  return numbers;
}

Array.prototype.myEach = function(func) {
  for(let i = 0; i < this.length; i++){
    func(this[i]);
  }
  return this;
};



function isPrime(number) {
  if (number < 2) { return false; }

  for (let i = 2; i < number; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}

function sumOfPrimes(num){
  let sum = 0;
  let count = 0;
  let n = 2;
  while (count < num) {
    if (isPrime(n)) {
      sum += n;
      count++;
    }
    n++;
  }
  return sum;
}

function titleize(array) {
  var titled = array.map(function(name) {
    var named = name;
    return 'Mx. ${named} Jingleheimer Schmidt';
  });
  return titled;
}

function eachOne(array) {
  for(let i = 0; i < array.length; i++){
    return array[i];
  }
}


function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  return "bloogaloogaloooooo";
};


function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
}

window.setTimeout(5000, function() {
  alert('HAMMERTIME');
});

window.setTimeout(function () {
  alert('HAMMER TIME!');
});

const hammerTime = function(time) {
  window.setTimeout(() => console.log(`${time} is hammertime.`));
};

Array.prototype.myEach = function(func) {
  for(let i = 0; i < this.length; i++){
    func(this[i]);
  }
};

const multByTwo = function(n){
  return n * 2;
};

Array.prototype.myMap = function(func) {
  let newArr = [];
  newArr.push(this.myEach(func));
  return newArr;
};

var Dog = require("./dog.js");

function Animal(name){
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log("woof, I am " + this.name);
};

var Surrogate = function(){};
Surrogate.prototype = Animal.prototype;

Dog.prototype = new Surrogate();

Dog.prototype.woof = function(){
  console.log("woof, I am " + this.name);
};

var Surrogate = function ()


Dog.prototype = Object.create(Animal.prototype)
