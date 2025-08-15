/*
Description

Write a function that will simplify a compound fraction. As input, it should accept three arguments as integers: 
integer, numerator, and denominator. It should return an array with three items, all integers: [integer, numerator, 
    denominator]. If there should be no integer, or no fraction resulting from simplification, just return zeros in 
    their place.

There is a convenience function you can use called toString(integer, numerator, denominator). It also takes three 
integer values, and returns a string of the compound fraction for logging, etc.

For example:
// 4 3/2 (four and three halves)
simplify(4, 3, 2); // == [5, 1, 2]
// becomes 5 1/2 (five and one half)
// 15/12 (fifteen twelfths)
simplify(0, 15, 12); // == [1, 1, 4]
// becomes 1 1/4 (one and one quarter)

Note: Beware of 0 denominators and numerators.
*/

export function simplify(
  integer: number,
  numerator: number,
  denominator: number
): number[] {
  if (denominator) {
    const gcd = (a: number, b: number): number => (a ? gcd(b % a, a) : b);
    const d = gcd(numerator, denominator);
    numerator /= d;
    denominator /= d;
    if (numerator >= denominator) {
      integer += (numerator / denominator) | 0;
      numerator %= denominator;
    }
    if (!numerator) {
      denominator = 0;
    }
  } else {
    numerator = 0;
  }
  return [integer, numerator, denominator];
}
