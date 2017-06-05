// Write a method that translates a sentence into pig latin. You may want a helper method.
// 'apple' => 'appleay'
// 'pearl' => 'earlpay'
// 'quick' => 'ickquay'

const pigLatin = (word) => {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  if(vowel.includes(word[0])){
    return word.concat("ay");
  } else if(word[0] === "q") {
    return word.slice(2).concat(word.slice(0, 2)).concat("ay");
  } else {
    return pigLatin(word.slice(1).concat(word.slice(0, 1)));
  }
};



console.log(pigLatin("quick"));
console.log(pigLatin("banana"));
console.log(pigLatin("apple"));
console.log(pigLatin("an apple a day helps you learn javascript"));
