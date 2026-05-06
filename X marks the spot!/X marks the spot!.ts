/*
Description

Write a function that takes in a positive integer n and returns an n x n matrix with an X in the middle. 
The X will be represented by 1's and the rest will be 0's.

Examples
5 --->   [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]]
6  --->  [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]]
*/

export function x(n: number): number[][] {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  const mid = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    matrix[i][i] = 1;
    matrix[i][n - 1 - i] = 1;
  }

  return matrix;
}
