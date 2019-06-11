/* check if 2 stings are a permutation */
const isPermutation = (s1, s2) => {
  const stringOne = [...s1].sort().join('');
  const stringTwo = [...s2].sort().join('');
  return stringOne === stringTwo ? true : false;
};

/*Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. (an you do this in place?*/
const rotate = matrix => {
  let n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n - 2 * i - 1; j++) {
      t = matrix[i + j][n - 1 - i];
      matrix[i + j][n - 1 - i] = matrix[i][i + j];
      matrix[i][i + j] = t;

      t = matrix[n - 1 - i][n - 1 - i - j];
      matrix[n - 1 - i][i] = matrix[i][i + j];
      matrix[i][i + j] = t;

      t = matrix[n - 1 - i - j][i];
      matrix[n - 1 - i - j][i] = matrix[i][i + j];
      matrix[i][i + j] = t;
    }
  }

  console.log(matrix);
  return matrix;
};

// /*2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list.8

test('Permutiaon', () => {
  expect(isPermutation('abba', 'bbaa')).toBeTruthy();
});

// test('Rotate Matrix', () => {
//   expect(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([[7, 8, 9], [1, 2, 3], [4, 5, 6]]);
// });
