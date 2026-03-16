/*
Description

Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

The time should be in HH:MM format.

Examples:
digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)

Notes
Result should be a valid 24-hour time, between 00:00 and 23:59.
Only inputs which have valid answers are tested.
*/

export function latestClock(
  a: number,
  b: number,
  c: number,
  d: number
): string {
  const digits = [a, b, c, d];
  let max = -1;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === i) {
        continue;
      }
      for (let k = 0; k < 4; k++) {
        if (k === i || k === j) {
          continue;
        }
        for (let l = 0; l < 4; l++) {
          if (l === i || l === j || l === k) {
            continue;
          }

          const hour = digits[i] * 10 + digits[j];
          const min = digits[k] * 10 + digits[l];

          if (hour < 24 && min < 60) {
            const total = hour * 60 + min;
            if (total > max) {
              max = total;
            }
          }
        }
      }
    }
  }

  const h = Math.floor(max / 60);
  const m = max % 60;

  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}
