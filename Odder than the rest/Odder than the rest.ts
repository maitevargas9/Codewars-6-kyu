/*
Description

Integral numbers can be even or odd.
Even numbers satisfy n = 2m ( with m also integral ) and we will ( completely arbitrarily ) think of odd numbers as n = 2m + 1.
Now, some odd numbers can be more odd than others: when for some n, m is more odd than for another's. Recursively. :]
Even numbers are just not odd.

Task
Given a finite list of integral ( not necessarily non-negative ) numbers, determine the number that is odder than the rest.
If there is no single such number, no number is odder than the rest; return Nothing, null or a similar empty value.

Examples
oddest([1,2]) => 1
oddest([1,3]) => 3
oddest([1,5]) => null

Hint
Click here.
How odd is -1 ?
*/

export function oddest(a: number[]): number | null {
  const oddness = (n: number): number => {
    if (n === -1) {
      return Infinity;
    }

    let x = Math.abs(n + 1);
    let count = 0;

    while (x > 0 && x % 2 === 0) {
      count++;
      x /= 2;
    }

    return count;
  };

  let max = -1;
  let result: number | null = null;
  let unique = true;

  for (const n of a) {
    const o = oddness(n);

    if (o > max) {
      max = o;
      result = n;
      unique = true;
    } else if (o === max) {
      unique = false;
    }
  }

  return unique ? result : null;
}
