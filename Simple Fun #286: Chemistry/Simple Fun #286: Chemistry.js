/*
Description

Task
A young scientist Bob went to a new planet AlphaX239 to explore its nature. Having arrived at the new planet, Bob made an amazing discovery: 
the chemistry on that planet was very different from ours, here, on Earth He started to explore it right away, and here's what he found out:

```

Just like on Earth, there are chemical elements on AlphaX239. Each element has a string name which consists of no more than 100 lowercase and 
uppercase English letters and digits.
All substances on AlphaX239 can be represented as X(a)Y(b), where X and Y are some elements, and a and b are integers not greater than 10^9.
If for some substance represented as X(a)Y(b) a and b has a common divisor d, then X(a/d)Y(b/d) is the same substance as X(a)Y(b).
If substances X(a)Y(b) reacts with Z(c)T(d), two new substances appear: Z(c)Y(b) and X(a)T(d).``` After discovering these properties, Bob 
started to conduct experiments on various substances. Now he needs your help!

Given two substance formulas first and second, return the substances obtained in the chemical reaction between them. The substances should be 
returned with the lowest possible coefficients (they can be lowered using the third rule), and in the order given in the fourth rule.

Input/Output
[input] string first
Correct formula of the first substance.
[input] string second
Correct formula of the second substance.
[output] a string array
Array of two elements, substances obtained in the chemical reaction.

Example
For first = "Ba(1)Cl(2)" and second = "H(2)SO4(1)",
the output should be ["H(1)Cl(1)","Ba(1)SO4(1)"].
The result of the reaction is ["H(2)Cl(2)","Ba(1)SO4(1)"], which can be shortened to ["H(1)Cl(1)","Ba(1)SO4(1)"].
*/

function chemistry(first, second) {
  function parse(s) {
    const re = /([A-Za-z0-9]+)\((\d+)\)/g;
    const parts = [...s.matchAll(re)];
    return [
      { el: parts[0][1], n: BigInt(parts[0][2]) },
      { el: parts[1][1], n: BigInt(parts[1][2]) }
    ];
  }

  function gcd(a, b) {
    while (b !== 0n) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function reduce(a, b) {
    const g = gcd(a, b);
    return [a / g, b / g];
  }

  function build(e1, n1, e2, n2) {
    const [r1, r2] = reduce(n1, n2);
    return `${e1}(${r1})${e2}(${r2})`;
  }

  const [X, Y] = parse(first);
  const [Z, T] = parse(second);

  const s1 = build(Z.el, Z.n, Y.el, Y.n);
  const s2 = build(X.el, X.n, T.el, T.n);

  return [s1, s2];
}
