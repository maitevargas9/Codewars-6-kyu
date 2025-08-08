/*
Description

Task

Create a type IsOdd that will receive a number N (IsOdd<N extends number>). The type should return true if the provided number 
is odd, and false if it's not.

Additional Notes:
The number will always be an integer
Range for N is: − 10 9 < N < 10 9
 
 
Examples
type A = IsOdd<13>;     // A = true
type B = IsOdd<12>;     // B = false
type C = IsOdd<0>;      // C = false
type D = IsOdd<1>;      // D = true
type E = IsOdd<103456>; // E = false
type F = IsOdd<-25>;    // F = true

Good luck!
*/

export type IsOdd<N extends number> = `${N}` extends `${infer _}1`
  ? true
  : `${N}` extends `${infer _}3`
  ? true
  : `${N}` extends `${infer _}5`
  ? true
  : `${N}` extends `${infer _}7`
  ? true
  : `${N}` extends `${infer _}9`
  ? true
  : false;
