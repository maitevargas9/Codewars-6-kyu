/*
Description

Convert the continuous exclamation marks or question marks to a digit, Use all the digits to form a number. 
If this number is a prime number, return it. If not, divide this number by the smallest factor that it is 
greater than 1, until it becomes a prime number.

You can assume that all test results are greater than 1 and the length of a continuous substring(! or ?) is 
always less than 10.

Examples
convert("!!") == 2
convert("!??") == 3
(12 --> 6 --> 3)
convert("!???") == 13
convert("!!!??") == 2
(32 --> 16 --> 8 --> 4 --> 2)
convert("!!!???") == 11
(33 --> 11)
convert("!???!!") == 11
(132 --> 66 --> 33 --> 11)
convert("!????!!!?") == 53 
(1431 --> 477 --> 159 --> 53)
convert("!!!!!!!???????") == 11 
(77 --> 11)
*/

function convert(s) {
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function smallestFactor(num) {
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        return i;
      }
    }
  }

  const number = parseInt(
    s
      .replace(/!+/g, (match) => match.length)
      .replace(/\?+/g, (match) => match.length)
  );

  let result = number;

  while (!isPrime(result)) {
    const factor = smallestFactor(result);
    result = result / factor;
  }

  return result == 1 ? null : result;
}
