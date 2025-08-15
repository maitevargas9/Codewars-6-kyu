/*
Description

Task

A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. 
For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced 
with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) 
substitution ciphers.

Example
For string1 = "aacb" and string2 = "aabc", the output should be true
Any ciphertext alphabet that starts with acb... would make this transformation possible.
For string1 = "aa" and string2 = "bc", the output should be false

Input/Output
[input] string string1
A string consisting of lowercase characters.
Constraints: 1 ≤ string1.length ≤ 10.
[input] string string2
A string consisting of lowercase characters of the same length as string1.
Constraints: string2.length = string1.length.
[output] a boolean value
*/

function isSubstitutionCipher(string1, string2) {
  return [...string1].every(
    (val, idx) => string1.indexOf(val) === string2.indexOf(string2[idx])
  );
}
