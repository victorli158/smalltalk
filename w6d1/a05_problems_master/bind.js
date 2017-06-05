function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.meow = function() {
  console.log(`Meow, I'm ${this.name}.`);
};


function myBind(){
  let args = Array.from(arguments);
  let thing = args[0];
  let bindArgs = args.slice(1);
  let funct = this;
  () => {
    let callArgs = arguments;
    funct.call(thing, callArgs.concat())

  }

}

// let ariel = new Cat("Areil", "John");
// ariel.meow();
//
// function Person(name, job){
//   this.name = name;
//   this.job = job;
// }
//
// let john = new Person("John", "Software Engineer");
// myBind(john, Cat.prototype.meow);
