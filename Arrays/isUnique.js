/* Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? */

function isUnique(text) {
  //check if the string is valid or just a space
  !text || (text === ' ' && console.log('input must be a string with a length > 0'));

  //create a cache to store the existing strings
  let cache = {};

  // loop over all the strings in from the input
  for (let i = 0; i < text.length; i++) {
    // if the character appears in the string and its not a space then return
    if (text[i] in cache && text[i] !== ' ') {
      return console.log('Not unique');
    }

    //else add the new value to the cache and keep looping
    cache[text[i]] = [i];
  }

  console.log('unique');
}

isUnique('chek if this string has all unique chars');
