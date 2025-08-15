/*
Description

Task
Amin and Sam are playing a game in which Amin gives Sam two binary numbers a and b, written as strings, and asks him 
to calculate the minimum number of right rotate of string a that minimize the Hamming distance between a and b. Help 
Sam answer this question for the given a and b.

A Hamming distance between strings of equal length a and b is defined as the number of positions i, such that a[i] ≠ 
b[i].

Input
2 strings, a and b, of the same length consisting of "0" and "1" characters.

Output
The lowest possible number of right-rotations of a required to minimize the Hamming distance between a and b.

Examples
Example #1: for a = "100" and b = "001" the output should be 2.
After 0 rotation, a = 100,
                      | |
                  b = 001
the Hamming distance between a and b is 2.
After 1 rotation, a = 010,
                       ||
                  b = 001
the Hamming distance between a and b is 2.
After 0 rotation, a = 001,
                      
                  b = 001
the Hamming distance between a and b is 0.
0 is the minimum Hamming distance, 
so the answer is 2(it means 2nd retation).
Example #2: for a = "10010011" and b = "00100101" the output should be 7.
After 0 rotation, a = 10010011,
                      | || ||
                  b = 00100101
the Hamming distance between a and b is 5.
After 1 rotation, a = 11001001,
                      ||| ||
                  b = 00100101
the Hamming distance between a and b is 5.
After 2 rotation, a = 11100100,
                      ||     |
                  b = 00100101
the Hamming distance between a and b is 3.
After 3 rotation, a = 01110010,
                       | | |||
                  b = 00100101
the Hamming distance between a and b is 5.
After 4 rotation, a = 00111001,
                         |||
                  b = 00100101
the Hamming distance between a and b is 3.
After 5 rotation, a = 10011100,
                      | |||  |
                  b = 00100101
the Hamming distance between a and b is 5.
After 6 rotation, a = 01001110,
                       || | ||
                  b = 00100101
the Hamming distance between a and b is 5.
After 7 rotation, a = 00100111,
                            |
                  b = 00100101
the Hamming distance between a and b is 1.
1 is the minimum Hamming distance, 
so the answer is 7(it means 7th retation).
*/

function hammingRotate(a, b) {
  let minDist = Infinity;
  let minRot = 0;

  for (let i = 0; i < a.length; i++) {
    let rotated = a.slice(-i) + a.slice(0, a.length - i);

    let dist = 0;
    for (let j = 0; j < a.length; j++) {
      if (rotated[j] !== b[j]) {
        dist++;
      }
    }

    if (dist < minDist) {
      minDist = dist;
      minRot = i;
    }
  }

  return minRot;
}
