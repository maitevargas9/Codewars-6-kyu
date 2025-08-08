/*
Description

Let us define two sums v(n, p) and u(n, p):
v(n,p) = ∑ k=0 n(−1) k×p×4 n−k ×(k n−k)
u(n,p) = ∑ k=0 n(−1) k×p×4 n−k ×(k 2n−k+1)

Task:
Calculate v(n, p) and u(n, p) with two brute-force functions v1(n, p) and u1(n, p).
Try v1(n, p) and u1(n, p) for small values of n and p and guess the results of u(n, p) and v(n, p)
Using 2) write v_eff(n, p) and u_eff(n, p) (or vEff(n, p) and uEff(n, p) or v-eff(n, p) and u-eff(n, p)) 
to efficiently calculate v and u for bigger values of n and p.
-- (This third part is not tested in JS, CS, TS, C++, C, PHP, Crystal, Rust, Swift, R, Nim, Fortran, NASM, Haxe, 
Pascal, Lua since there you don't have big integers to control your guess in part 2. See note below for "Shell").
 
Examples:
v1(12, 70) --> 1750
u1(13, 18) --> 252

Extra points:-)
For the mathy ones: find a relation between v(n, p), v(n-1, p) and u(n-1, p) :-)

Notes
Erlang, Prolog: only uEff(u_eff) and vEff(v_eff) are tested.
Factor: only ueff and veff are tested.
Forth: only ueff and veff are tested with small numbers.
Shell: only v1(n, p)is tested (use the solution you find for v_eff(n, p).
If you have found u_eff(n, p) and v_eff(n, p) you can use them to calculate u(n, p) and v(n, p).
You could see: https://en.wikipedia.org/wiki/Binomial_coefficient for a refresh about binomial coefficients.
*/

export function binomialCoefficient(n: number, k: number): number {
  if (k < 0 || k > n) {
    return 0;
  }
  if (k === 0 || k === n) {
    return 1;
  }
  let res = 1;
  for (let i = 0; i < k; i++) {
    res *= n - i;
    res /= i + 1;
  }
  return res;
}

export function v1(n: number, p: number): number {
  let sum = 0;
  for (let k = 0; k <= n; k++) {
    sum +=
      Math.pow(-1, k) *
      p *
      Math.pow(4, n - k) *
      binomialCoefficient(2 * n - k, k);
  }
  return sum;
}

export function u1(n: number, p: number): number {
  let sum = 0;
  for (let k = 0; k <= n; k++) {
    sum +=
      Math.pow(-1, k) *
      p *
      Math.pow(4, n - k) *
      binomialCoefficient(2 * n - k + 1, k);
  }
  return sum;
}
