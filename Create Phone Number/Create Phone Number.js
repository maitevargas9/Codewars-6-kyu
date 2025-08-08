/*
Description

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers 
in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers) {
  if (numbers.length !== 10 || numbers.some((num) => num < 0 || num > 9)) {
    throw new Error(
      "Invalid input: Array must contain exactly 10 integers between 0 and 9."
    );
  }

  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}
