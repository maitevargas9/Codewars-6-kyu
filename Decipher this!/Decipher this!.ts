/*
Description

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces

Examples
'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go'
*/

export function decipherThis(str: string): string {
  return str
    .split(" ")
    .map((word) => {
      const charCodeMatch = word.match(/^\d+/);
      if (!charCodeMatch) {
        return word;
      }

      const charCode = String.fromCharCode(Number(charCodeMatch[0]));
      const rest = word.slice(charCodeMatch[0].length);

      if (rest.length > 1) {
        return charCode + rest[rest.length - 1] + rest.slice(1, -1) + rest[0];
      }

      return charCode + rest;
    })
    .join(" ");
}
