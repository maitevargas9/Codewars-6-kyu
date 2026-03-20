/*
Description

Task
The string is called prime if it cannot be constructed by concatenating some (more than one) equal strings together.
For example, "abac" is prime, but "xyxy" is not("xyxy"="xy"+"xy").
Given a string determine if it is prime or not.

Input/Output
[input] string s
string containing only lowercase English letters
[output] a boolean value
true if the string is prime, false otherwise
*/

function primeString(s) {
  const n = s.length;

  for (let len = 1; len <= n / 2; len++) {
    if (n % len === 0) {
      const sub = s.slice(0, len);
      if (sub.repeat(n / len) === s) {
        return false;
      }
    }
  }

  return true;
}
