// Write a method that capitalizes each word in a string like a book title
// Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'

const titleize = (title) => {
  let ignore = ['a', 'and', 'of', 'over', 'the'];
  let words = title.split(" ");
  for(let i = 0; i < words.length; i++){
    if (i === 0){
      words[i] = words[0].slice(0, 1).toUpperCase().concat(words[0].slice(1));
    } else if (!ignore.includes(words[i])) {
      words[i] = words[i].slice(0, 1).toUpperCase().concat(words[i].slice(1));
    }
  }
  return words.join(" ");
};


console.log(titleize("the bridge over the river kwai"));
