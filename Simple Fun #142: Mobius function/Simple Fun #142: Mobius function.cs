/*
Description

Task
Compute the Mobius function μ(n) for a given value of n.
For a given n, the Mobius function is equal to:
0 if n is divisible by the square of any prime number. For example n = 4, 8, 9 are all divisible by the square of at 
least one prime number.
1 if n is not divisible by the square of any prime numbers, and has an even number of prime factors. For example 
n = 6, 10, 21 satisfy these conditions (e.g. 21 = 3 * 7 so it has an even number (2) of distinct prime factors 
and is not divisible by the square of any prime numbers).
-1 otherwise. For example n = 3, 5, 7, 30.

Input/Output
You will be given an integer n; you must return an integer - the Mobius function of n.
Performance requirements:
2 <= n <= 1e12
*/

namespace myjinxin {
  using System;

  public class Kata {
    public int Mobius(double n) {
      if (n < 1 || n != Math.Floor(n)) {
        return 0;
      }

      long number = (long)n;
      int count = 0;

      if (number % 2 == 0) {
        number /= 2;
        count++;
        if (number % 2 == 0) {
          return 0;
        }
      }

      for (long i = 3; i * i <= number; i += 2) {
        if (number % i == 0) {
          number /= i;
          count++;
          if (number % i == 0) {
            return 0;
          }
        }
      }

      if (number > 1) {
        count++;
      }

      return (count % 2 == 0) ? 1 : -1;
    }
  }
}