/*
Description

For a given string s find the character c (or C) with longest consecutive repetition and return:
[c, l]: [string, number]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:
["", 0]
*/

export function longestRepetition(text: string): [string, number] {
  if (text.length === 0) {
    return ["", 0];
  }

  let maxChar = text[0];
  let maxLen = 1;

  let currentChar = text[0];
  let currentLen = 1;

  for (let i = 1; i < text.length; i++) {
    if (text[i] === currentChar) {
      currentLen++;
    } else {
      currentChar = text[i];
      currentLen = 1;
    }

    if (currentLen > maxLen) {
      maxLen = currentLen;
      maxChar = currentChar;
    }
  }

  return [maxChar, maxLen];
}
