/*International Morse Code defines a standard encoding where each 
letter is mapped to a series of dots and dashes, as follows: "a" 
maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.*/
const uniqueMorseRepresentations = words => {
  const codes = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  const alpha = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'q',
    'y',
    'z',
  ];

  let morseCode = [];

  for (let i = 0; i < words.length; i++) {
    const letterIndex = alpha.indexOf(words[i]);

    if (letterIndex) {
      morseCode = [...morseCode, codes[letterIndex]].join('');
    }
  }

  return morseCode;
};
/*Given an array A of non-negative integers, return an array consisting
 of all the even elements of A, followed by all the odd elements of A. */
const sortArrayByParity = A => {
  let newArr = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      newArr.splice(0, 0, A[i]);
    } else {
      newArr = [...newArr, A[i]];
    }
  }
  return newArr;
};
/* Given a binary matrix A, we want to flip the image horizontally, then 
invert it, and return the resulting image.
To flip an image horizontally means that each row of the image is reversed.  
For example, flipping [1, 1, 0] horizontally results in [0, 1, 1]. */
const flipAndInvertImage = input => {
  let output = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length - 1; j++) {
      let inverse = '';

      if (input[i][j] === 1) {
        inverse = 0;
      } else {
        inverse = 1;
      }
      output = [...output, input[i][j] === 1 ? 0 : 1];
      console.log(input[i].length);
    }
    // console.log(`inverse : ${inverse}, normal Input ${input[i][j]}`);
  }

  return output;
};
/* Implement function ToLowerCase() that has a string parameter str, 
and returns the same string in lowercase. */
const toLowerCase = str => {
  return str.toLowerCase();
};
/*In a array A of size 2N, there are N+1 unique elements, and exactly 
one of these elements is repeated N times. */
const repeatedNTimes = arr => {
  let cache = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in cache) {
      return arr[i];
    }
    cache[arr[i]] = i;
  }
  return console.log('no duplicates found');
};
/*Given an array of integers A sorted in non-decreasing order, return 
an array of the squares of each number, also in sorted non-decreasing order. */
const sortedSquares = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = [...newArr, Math.pow(arr[i], 2)];
  }

  return newArr.sort((a, b) => a - b);
};
/*There is a robot starting at position (0, 0), the origin, on a 2D plane.
Given a sequence of its moves, judge if this robot ends up at (0, 0) after 
it completes its moves. */
const judgeCircle = moves => {
  let position = [0, 0];
  const final = [0, 0];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'L' || moves[i] === 'R') {
      position[0] += moves[i] === 'R' ? 1 : -1;
    } else if (moves[i] === 'U' || moves[i] === 'D') {
      position[1] += moves[i] === 'U' ? 1 : -1;
    }
  }
  return position.join('') === '00' ? true : false;
};

////////// Tests //////////
test('Linked Lists', () => {
  expect(uniqueMorseRepresentations('gin')).toBe('--...-.');
});
test('905. Sort Array By Parity', () => {
  expect(sortArrayByParity([3, 1, 2, 4])).toStrictEqual([4, 2, 3, 1] || [2, 4, 1, 3] || [2, 4, 1, 3] || [4, 2, 1, 3]);
});
test('709. To Lower Case', () => {
  expect(toLowerCase('Toronto Raptors')).toBe('toronto raptors');
});
test('961. N-Repeated Element in Size 2N Array', () => {
  expect(repeatedNTimes([2, 1, 2, 5, 3, 2])).toBe(2);
});
test('977. Squares of a Sorted Array', () => {
  expect(sortedSquares([-4, -1, 0, 3, 10])).toStrictEqual([0, 1, 9, 16, 100]);
});
test('657. Robot Return to Origin', () => {
  expect(judgeCircle('RL')).toBe(true)
});

// test('832. Flipping an Image', () => {
//   expect(flipAndInvertImage([[1,1,0,0], [1,0,0,1], [0,1,1,1], [1,0,1,0]]))
//   .toStrictEqual([[0,0,1,1], [1,0,0,1], [0,0,0,1], [0,1,0,1]]);
// });
