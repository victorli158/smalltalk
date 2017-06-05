// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e'])  // 'ollhe'


const jumbleSort = (str, alphabet = 'abcdefghijklmnopqrstuvwxyz') => {
  let newArr = [];
  alphabet.split("").forEach(letter => {
    for(let i = 0; i < str.length; i++){
      if (str[i] === letter){
        newArr.push(letter);
      }
    }
  });
  return newArr.join("");
};


console.log(jumbleSort("hello")); // ehllo
