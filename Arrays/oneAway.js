/*One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, pIe -> true
pales. pale -> true
pale. bale -> true
pale. bake -> false
Hints: #23, #97, #130*/

const oneAway = (s1, s2) => {
    //find the longest and shortest strings
  const long = s1.length >= s2.length ? s1 : s2;
  const short = s1.length >= s2.length ? s2 : s1;

  //create a cache and a counter
  let cache = {};
  let count = 1;

  // simple/quick test cases
  if (s1 === s2) {
    return true;
  }
  if (long - short > 1) {
    return false;
  }

  for (let i = 0, j = 0; long.length > i; i++, j++) {
    //add each item that is being looped to the cache
    cache[long[i]] = i;
    //when no match is found on the second string decrease the counter
    if (!(short[j] in cache)) {
      count--;
      //if the counter gets below zero there are too many differences
      if (count < 0) {
        return false;
      }
    }
  }

  return true;
};

oneAway('bale', 'pale');
