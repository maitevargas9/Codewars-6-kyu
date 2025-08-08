/*
Description

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of 
these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/

function solution(number) {
  let arr = [];
  let multiple = [];

  for (let i = 0; i < number; i++) {
    arr.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiple.push(i);
    }
  }

  const sumTotal = multiple.reduce((sum, num) => sum + num, 0);

  return sumTotal;
}
