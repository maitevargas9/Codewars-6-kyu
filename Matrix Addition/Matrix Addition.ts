/*
Description

Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed 
into the function will be of size N x N (square), containing only integers.

How to sum two matrices:
Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the 
solution matrix. (Except for C where solution matrix will be a 1d pseudo-multidimensional array).

Visualization:
|1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
|3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
|1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|

Example
matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
//      +
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] )
// returns:
  [ [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4] ]
*/

type matrix = number[][];

export function matrixAddition(a: matrix, b: matrix): matrix {
  const N = a.length;
  const result: matrix = [];

  for (let i = 0; i < N; i++) {
    const row: number[] = [];
    for (let j = 0; j < N; j++) {
      row.push(a[i][j] + b[i][j]);
    }
    result.push(row);
  }

  return result;
}
