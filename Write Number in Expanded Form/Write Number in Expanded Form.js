/*
Description

Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:
12 --> "10 + 2"
45 --> "40 + 5"
70304 --> "70000 + 300 + 4"

NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  let str = num.toString();
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let digit = str[i];
    let placeValue = Math.pow(10, str.length - i - 1);

    if (digit !== "0") {
      result.push(digit * placeValue);
    }
  }

  return result.join(" + ");
}
