/*
Description

The integer 64 is the first integer that has all of its digits even and furthermore, is a perfect square.

The second one is 400 and the third one 484.

Give the numbers of this sequence that are in the range [a,b] (both values inclusive)

Examples:
Even digit squares between 100 to 1000:  [400, 484]  (the output should be sorted)
Even digit squares between 1000 to 4000: []

Features of the random tests:
number of tests = 167
maximum value for a = 1e10
maximum value for b = 1e12

You do not have to check the entries; a and b are always positive integers and a < b.

Happy coding!!
*/

export const evenDigitSquares = (a: number, b: number): number[] => {
  let first: number = Math.floor(a ** 0.5) + 1;
  let second: number = Math.floor(b ** 0.5) + 1;
  let lst: number[] = [];
  for (first; first < second; first++) {
    if (first % 2 == 0 && /^[02468]+$/.test(String(first * first))) {
      lst.push(first * first);
    }
  }
  return lst;
};
