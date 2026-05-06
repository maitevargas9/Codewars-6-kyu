/*
Description

You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:
"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"
Words are made up of lowercase letters.
The string will never be null and will never be empty.
words will be separated by a single space character
the string will have neither leading nor trailing spaces
*/

export function sortTheInnerContent(words: string): string {
  return words
    .split(" ")
    .map((word) => {
      if (word.length <= 2) {
        return word;
      }
      const inner = word.slice(1, -1).split("").sort().reverse().join("");
      return word[0] + inner + word[word.length - 1];
    })
    .join(" ");
}
