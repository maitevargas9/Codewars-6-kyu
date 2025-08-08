/*
Description

Remove the minimum number of exclamation marks from the start/end of each word in the sentence 
to make their amount equal on both sides.

Notes:
Words are separated with spaces
Each word will include at least 1 letter
There will be no exclamation marks in the middle of a word

Examples
remove("Hi!") === "Hi"
remove("!Hi! Hi!") === "!Hi! Hi"
remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
*/

function remove(s) {
  return s
    .split(" ")
    .map((x) => {
      let start = x.match(/^!+/) ? x.match(/^!+/)[0].length : 0,
        end = x.match(/!+$/) ? x.match(/!+$/)[0].length : 0,
        word = x.replace(/(^!+)|(!+$)/g, "");
      return (
        "!".repeat(Math.min(start, end)) +
        word +
        "!".repeat(Math.min(start, end))
      );
    })
    .join(" ");
}
