/*
Description

Often, we see results of gallups, like this:
Prefer red: 3.5%
Prefer green: 4.5%
Prefer yellow: 22.0%
Prefer blue: 70.0%
and you begin to wonder: how many people did they really ask? If the numbers are simple, like 20%, 40%, and 40%, 
you know that they asked 5 people (or 10, or 15, or more, but we are interested in the minimum number of people).

Task
Your task is, complete function gallup. Function accepts argument percentages(a floating number array of percentages). 
The result should be the minimum number of people(We know that this number is always less than 10000). If no valid result, return -1.

Example
For percentages = [20,40,40], The output should be 5.
gallup of 5 people may be:    1    2    2
percentages of results:      1/5  2/5  2/5
rounding to 0 decimal place: 20%  40%  40%
For percentages = [33.3,33.3,33.3], The output should be 3.
gallups of 3 people may be:     1     1      1
percentages of results:       1/3    1/3    1/3
rounding to 1 decimal place: 33.3%  33.3%  33.3%
For percentages = [33,67], The output should be 3.
gallups of 3 people may be:    1      2
percentages of results:       1/3    2/3
rounding to 0 decimal place:  33%    67%
For percentages = [100.0000], The output should be 1.
For percentages = [50,51], The output should be 200.
gallups of 200 people may be:      99             101
percentages of results:       99/200(0.495)   101/200(0.505)
rounding to 0 decimal place:       50%            51%
For percentages = [49,50], The output should be -1.
No such a number of people in the range(1,10000)
*/

function gallup(percentages) {
  const maxN = 10000;

  let decimals = 0;
  for (let p of percentages) {
    const s = p.toString();
    if (s.includes(".")) {
      decimals = Math.max(decimals, s.split(".")[1].length);
    }
  }

  const scale = 10n ** BigInt(decimals);

  const data = percentages.map((p) => {
    const s = p.toString();
    const parts = s.split(".");
    const d = parts[1] ? parts[1].length : 0;

    let P = BigInt(parts.join(""));

    if (d < decimals) {
      P *= 10n ** BigInt(decimals - d);
    }

    return P;
  });

  for (let n = 1; n < maxN; n++) {
    const bigN = BigInt(n);

    let minSum = 0n;
    let maxSum = 0n;
    let valid = true;

    for (let P of data) {
      const denom = 200n * scale;

      const low = (bigN * (2n * P - 1n) + denom - 1n) / denom;

      const high = (bigN * (2n * P + 1n) - 1n) / denom;

      if (low > high) {
        valid = false;
        break;
      }

      minSum += low;
      maxSum += high;
    }

    if (!valid) {
      continue;
    }

    if (minSum <= bigN && bigN <= maxSum) {
      return n;
    }
  }

  return -1;
}
