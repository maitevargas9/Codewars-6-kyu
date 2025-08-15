/*
Description

Task
Given a string str, find the shortest possible string which can be achieved by adding characters to the end of initial 
string to make it a palindrome.

Example
For str = "abcdc", the output should be "abcdcba".

Input/Output
[input] string str
A string consisting of lowercase latin letters.
Constraints: 3 ≤ str.length ≤ 10.
[output] a string
*/

function buildPalindrome(str) {
  for (let i = 0; i <= str.length; i++) {
    if (str === [...str].reverse().join(``)) {
      return str;
    }
    str =
      str.slice(0, str.length - i) +
      str[i] +
      str.slice(str.length - i, str.length);
  }
}
