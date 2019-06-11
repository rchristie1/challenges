/*Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rea rrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.)*/

const palPerm = (s1, s2) => {
  
  //convert the incoming items into an array
  const items = [...s1, ...s2]
  
  //create a cache to store the items and the count 
  let cache = {};
  let count = 0;

  for(let i = 0; i < items.length; i++) {
    // if the item isnt in the cache already, add it witha val of false
    if (!(items[i] in cache)) {
      cache[items[i]] = false;
    } else {
      //if it is already stored then flip the value each time a new one is added
        cache[items[i]] = !cache[items[i]];      
    }
    
  }

  const values = Object.values(cache);

  //now loop through the cache
  for(let i = 0; i < values.length; i++) {

    // increment the counter everytime there is a false value
    if(values[i] === false){
      count++;
    }
  }

  // if there are more than one cases of this then it is false;a
return count > 1 ? false : true; 
 
}

palPerm('tact', 'caoa');


// const palPerm = (s1, s2) => {
//   if (!s1 && !s2) {
//     return console.log('Not Valid');
//   }

//   // get the larger item for looping
//   const longWord = s1.length > s2.length ? s1 : s2;
//   const smallWord = s1.length < s2.length ? s1 : s2;

//   //will store letters from the long word that dont exist in the short word
//   let longWordStripped = [];

//   //cache to store unique values
//   let cache = {};

//   count = 0;

//   for (let i = 0; i < longWord.length; i++) {
//     //if the larger word has values the same as the small word then add to new array
//     if ([...smallWord].includes(longWord[i])) {
//       longWordStripped.push(longWord[i]);
//     } else if (!(longWord[i] in cache)) {
//       //if not we add them to the cache and keep count
//       //but if the count is higher than 2 that means it cant be true
//       if (count > 1) {
//         return 'Will not work';
//       }
//       count++;
//       cache[longWord[i]] = [i];
//     }
//   }

//   //lastly we compare the arrays to see if the remainig arrays equate
//   console.log([...s2].sort().join('') === longWordStripped.sort().join(''));
// };

// palPerm('atcot', 'cat');
