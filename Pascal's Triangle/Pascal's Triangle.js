/*
Description

In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula
(n k) = n!/k!(n−k)!
where n denotes a row of the triangle, and k is a position of a term in the row.

Pascal's Triangle
You can read Wikipedia article on Pascal's Triangle for more information.

Task
Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]

Note
Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on selected method 
of calculations, intermediate values can be larger.
*/

function pascalsTriangle(n) {
  const result = [];
  let row = [1];

  for (let i = 0; i < n; i++) {
    result.push(...row);

    const next = [1];
    for (let j = 1; j < row.length; j++) {
      next.push(row[j - 1] + row[j]);
    }
    next.push(1);

    row = next;
  }

  return result;
}
