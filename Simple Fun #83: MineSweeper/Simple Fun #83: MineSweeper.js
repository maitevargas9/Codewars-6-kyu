/*
Description

Task
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number 
in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we 
want to create a Minesweeper game setup.

Example
For
matrix = [[true, false, false],
            [false, true, false],
            [false, false, false]]```
the output should be
minesweeper(matrix) = [[1, 2, 1], [2, 1, 1], [1, 1, 1]]``` Check out the image below for better understanding:

Input/Output
[input] 2D boolean array matrix
A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.
Constraints:
2 ≤ matrix.length ≤ 10,
2 ≤ matrix[0].length ≤ 10.
[output] 2D integer array
Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the 
neighboring cells. Two cells are called neighboring if they share at least one corner.
*/

function minesweeper(matrix) {
  let n = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  return matrix.map((r, i) =>
    r.map(
      (_, j) => n.filter(([r, c]) => (r = matrix[r + i]) && r[c + j]).length
    )
  );
}
