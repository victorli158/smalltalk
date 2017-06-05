// Write your myBind method so that it can take both
// bind-time arguments and call-time arguments.

// Function.prototype.myBind1 = function (ctx) {
//
//
// };


Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    this.apply(ctx, bindArgs.concat(callArgs));
  };
};



class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind2(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind2(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind2(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

//  no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays2 = markov.says.myBind2(breakfast);
notMarkovSays2("meow", "me");
// Breakfast says meow to me!
// true
