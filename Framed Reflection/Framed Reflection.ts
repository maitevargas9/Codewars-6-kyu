/*
Description

100th Kata

You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with 
the mirror frame. Example: 'Hello World' Words in your solution should be left-aligned.
*/

export function mirror(text: string): string {
  const words = text
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  const maxLength = Math.max(...words.map((word) => word.length));
  const border = "*".repeat(maxLength + 4);
  const mirroredText = words
    .map((word) => `* ${word.padEnd(maxLength)} *`)
    .join("\n");
  return `${border}\n${mirroredText}\n${border}`;
}
