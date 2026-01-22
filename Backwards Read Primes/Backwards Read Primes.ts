/*
Description

Backwards-read-primes are primes that when read backwards in base 10 (from right to left) are a different prime. 
(This rules out primes which are palindromes.)

Examples:
13 17 31 37 71 73
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task
Find all Backwards-read-primes between two positive given numbers (both inclusive), the second one always being 
greater than or equal to the first one. The resulting array or the resulting string will be ordered following 
the natural order of the prime numbers.

Examples (in general form):
(start = 2, end = 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
(start = 9900, end = 10000) => [9923, 9931, 9941, 9967]
(start = 501, end = 599) => []
See "Sample Tests" for your language.

Notes
Forth: Return only the first backwards-read prime between start and end or 0 if you don't find any
Ruby: Don't use the Prime class, it's disabled.
*/

export function backwardsPrime(start: number, stop: number): number[] {
  const isPrime = (n: number): boolean => {
    if (n < 2) {
      return false;
    }
    if (n === 2) {
      return true;
    }
    if (n % 2 === 0) {
      return false;
    }

    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  const reverseNumber = (n: number): number =>
    parseInt(n.toString().split("").reverse().join(""), 10);

  const result: number[] = [];

  for (let i = start; i <= stop; i++) {
    if (!isPrime(i)) {
      continue;
    }

    const reversed = reverseNumber(i);

    if (reversed !== i && isPrime(reversed)) {
      result.push(i);
    }
  }

  return result;
}
