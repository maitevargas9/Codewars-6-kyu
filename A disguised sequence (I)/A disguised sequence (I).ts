/*
Description

Given u0 = 1, u1 = 2

And the relation 6 un un + 1 − 5u n un + 2 + un + 1 un + 2 = 0

Calculate un for any integer n ≥ 0.

Examples:
n = 17, u17 = 131072
n = 21, u21 = 2097152

Remark:
You can take two points of view to do this kata:
the first one purely algorithmic from the definition of un
​the second one - not at all mandatory, but as a complement - 
is to get a bit your head around and find which sequence is hidden behind un.
*/

export function fcn(n: number): number {
  return Math.pow(2, n);
}
