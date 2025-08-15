/*
Description

An integral:
∫ab f(x) dx ∫ ab
​	
f(x)dx
can be approximated by the so-called Simpson’s rule:
b − a 3 n (f(a) + f(b) + 4 ∑ i = 1 n / 2 f(a + (2i − 1) h) + 2 ∑ i = 1 n / 2 − 1 f(a + 2 i h)) 3n b − a (f(a) + f(b) + 4 
∑ i = 1 n/2 f(a + (2i − 1) h) + 2 ∑ i = 1 n / 2 − 1 f(a + 2 i h ))
Here  h = (b - a) / n, n being an even integer and a <= b.

We want to try Simpson's rule with the function f:
f(x) = 32 sin(x) 3 f(x) = 2 3 sin(x) 3
 
The task is to write a function called simpson with parameter n which returns the value of the integral of f on the interval 
[0, pi] (pi being 3.14159265359...).

Notes:
Don't round or truncate your results. See in "RUN EXAMPLES" the function assertFuzzyEquals or testing.
n will always be even.
We know that the exact value of the integral of f on the given interval is 2.
Please ask before translating.

Complement: you can see: https://www.codewars.com/kata/5562ab5d6dca8009f7000050/ about rectangle method and trapezoidal rule
*/

export const simpson = (n: number): number => {
  const fn = (arr: number | number[]): number | number[] => {
    if (typeof arr === "number") {
      return (3 / 2) * Math.pow(Math.sin(arr), 3);
    } else {
      return arr.map((x) => (3 / 2) * Math.pow(Math.sin(x), 3));
    }
  };

  const fa = fn(0) as number;
  const fb = fn(Math.PI) as number;
  const h = Math.PI / n;

  const firstTermI = Array.from(
    { length: n / 2 },
    (_, i) => (2 * (i + 1) - 1) * h
  );
  const secondTermI = Array.from(
    { length: n / 2 - 1 },
    (_, i) => 2 * (i + 1) * h
  );

  const firstSum = (fn(firstTermI) as number[]).reduce(
    (acc, val) => acc + val,
    0
  );
  const secondSum = (fn(secondTermI) as number[]).reduce(
    (acc, val) => acc + val,
    0
  );

  return (fa + fb + 4 * firstSum + 2 * secondSum) * (Math.PI / (3 * n));
};
