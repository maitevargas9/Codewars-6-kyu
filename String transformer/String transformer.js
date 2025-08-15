/*
Description

Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:
"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

function stringTransformer(str) {
  let transformed = str
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char) => {
          return char === char.toLowerCase()
            ? char.toUpperCase()
            : char.toLowerCase();
        })
        .join("");
    })
    .join(" ");

  return transformed.split(" ").reverse().join(" ");
}
