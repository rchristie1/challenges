/*String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
Hints: #92, # 11 0*/

const stringCompression = input => {
  //create  a caache and a variable to gold the new string
  let cache = {};
  let newStr = '';
  for (let i = 0; i < input.length; i++) {
    // create a default counter for each letter and initialize it to 1
    let letterCount = 1;
    //if we find the letter in the cache edit the values
    if (input[i] in cache) {
      //because the value already exists in the cache we are going to incremet the counter
      //tied to this item by 1
      cache[input[i]]++;
      let cacheValue = cache[input[i]];
      //if the previous key and the current key are the same then replace the previous key+count with the new one
      if (input[i] === input[i - 1]) {
        newStr = newStr.replace(`${input[i]}${cacheValue - 1}`, `${input[i]}${cacheValue}`);
      } else {
        //if not then we have to reinitialize cache value to 1
        cache[input[i]] = letterCount;
        newStr += `${input[i]}${letterCount}`;
      }
    } else {
      // if it doesnt exist in the cache, it to the cache and the string
      cache[input[i]] = letterCount;
      newStr += `${input[i]}${letterCount}`;
    }
  }
  return newStr;
};

stringCompression('aabcccccaaa');

const stringCompression = input => {
  let cache = {};
  for (let i = 0; i < input.length; i++) {
    // create a counter
    let letterCounter = 1;

    //increase the counter everytime a new item is found in the cache
    if (input[i] in cache) {
      cache[input[i]]++;
    } else {
      cache[input[i]] = letterCounter;
    }
  }
  const values = Object.values(cache);

  return Object.keys(cache).map((d, i) => `${d}: ${values[i]}`);
};

stringCompression('aabcccccaaa');
