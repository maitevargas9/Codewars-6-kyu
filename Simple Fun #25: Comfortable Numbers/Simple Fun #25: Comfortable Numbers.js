/*
Description

Task

Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is 
the sum of x's digits.

How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [L, R], and each number feels comfortable with 
the other?

Example
For L = 10 and R = 12, the output should be 2

Here are all values of s(x) to consider:
s(10) = 1, so 10 is comfortable with 9 and 11;
s(11) = 2, so 11 is comfortable with 9, 10, 12 and 13;
s(12) = 3, so 12 is comfortable with 9, 10, 11, 13, 14 and 15.
Thus, there are 2 pairs of numbers comfortable 
with each other within the segment [10; 12]: 
(10, 11) and (11, 12).

Input/Output
[input] integer L
Constraints: 1 ≤ L ≤ R ≤ 1000
[input] integer R
Constraints: 1 ≤ L ≤ R ≤ 1000
[output] an integer
The number of pairs satisfying all the above conditions.
*/

function comfortableNumbers(L, R) {
  let pairs = 0;
  for (let a = L; a < R; a++) {
    for (
      let b = a + 1;
      b <= a + [...`${a}`].reduce((pre, curr) => pre + +curr, 0) && b <= R;
      b++
    ) {
      if (b - [...`${b}`].reduce((pre, curr) => pre + +curr, 0) <= a) {
        pairs++;
      }
    }
  }
  return pairs;
}
