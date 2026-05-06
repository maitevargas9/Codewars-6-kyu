/*
Description

The area between the vertex of the parabola and x-axis

1-) Warning
If you don't know about the following topics, you will have problems in this kata:
Quadratic equations
Parabola
Integral

2-) Explanation
I will give you 3 values as input in the kata. These are a , b , c. The value of a will never be given as 0. These values are the 
coefficients of the following equation.
f(x)=ax^2+bx+c
The graph of this equation is a parabola.
This kata asks you for the area between the vertex of the parabola and the x-axis.
Don't forget that an area cannot be negative.

3-) Details
If the equation does not have real roots, you should return 0. Because there isn't any area.
If the equation has a single real root, you should return 0. Because the area is empty.
If the equation has 2 distinct real roots, you should return the real area.
Given values will be between -4000 and +4000. Because the result should be under the DOUBLE_MAX value.
I set up the tolerance to 1e-5 for the decimal errors.
*/

export function areaBetweenRoots(a: number, b: number, c: number): number {
  const D = b * b - 4 * a * c;

  return D <= 0 ? 0 : Math.pow(D, 1.5) / (6 * a * a);
}
