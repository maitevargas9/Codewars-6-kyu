/*
Description

Task

Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering its 
characters and replacing them with digits (leading zeros are not allowed) where same characters always map to the same digits 
and different characters always map to different digits.

If there is no solution, return -1

Examples
"ab"  -->  81
"zzz" -->  -1  // There are no 3-digit square numbers with identical digits
"aba" --> 900  // It can be obtained after reordering the initial string into "baa"

Input/Output
[input] string s
Constraints: 2 ≤ s.length < 10.
[output] an integer
*/

function constructSquare(s) {
  let len = s.length,
    n = +"9".repeat(len);
  s = s
    .split("")
    .filter((d, i, a) => a.indexOf(d) == i)
    .map((v) => s.split("").filter((x) => x == v).length)
    .sort()
    .join("");
  while (n) {
    let sqrt = Math.sqrt(n);
    if (sqrt % 1 == 0) {
      let num = n.toString().split("");
      if (
        num
          .filter((d, i, a) => a.indexOf(d) == i)
          .map((v) => num.filter((x) => x == v).length)
          .sort()
          .join("") == s
      ) {
        return n;
      }
      n -= (sqrt - 1) * 2 + 1;
    } else {
      n--;
    }
    if (n.toString().length < len) {
      break;
    }
  }
  return -1;
}
