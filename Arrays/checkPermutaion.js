/* Given two strings, write a method to decide if one is a permutation of the
other. */

const isPermutation = (s1, s2) => {
    const stringOne = [...s1].sort().join('');
    const stringTwo = [...s2].sort().join('');

    console.log(stringOne, stringTwo)

    stringOne === stringTwo ? true : false;
}


isPermutation('abba', 'bbaa')

export default isPermutation;