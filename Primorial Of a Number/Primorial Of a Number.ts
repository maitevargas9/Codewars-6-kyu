/*
Description

Definition (Primorial Of a Number)
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, 
only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# 
and it is the product of the first n prime numbers.

Task
Given a number N, calculate its primorial.
*/

export function numPrimorial(n: number) {
  let primes = [],
    curr = 2;
  while (primes.length < n) {
    if (isPrime(curr)) {
      primes.push(curr);
    }
    curr++;
  }
  return primes.reduce((a, b) => a * b, 1);
}

function isPrime(n: number): boolean {
  if (n < 4) {
    return true;
  }
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
