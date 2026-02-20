/*
Description

Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)
*/

export function findMissingLetter(array: string[]): string {
  for (let i = 0; i < array.length - 1; i++) {
    const current = array[i].charCodeAt(0);
    const next = array[i + 1].charCodeAt(0);

    if (next !== current + 1) {
      return String.fromCharCode(current + 1);
    }
  }

  return "";
}
