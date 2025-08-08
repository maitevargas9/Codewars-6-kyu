/*
Description

Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater 
than one.

Example:
13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the asnwer will be 2 (=13-11)
*/

export function minDistance(n: number): number {
  let divisors: number[] = [];
  for (let i = 1; i < n / 2 + 1; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return Math.min(...divisors.map((x, y) => (divisors[y + 1] || n) - x));
}
