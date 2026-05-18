/*
Description

Range from 0 to Roman Numerals
console.log(0..X) //[0,1,2,3,4,5,6,7,8,9]
console.log(0..IV) //[0,1,2,3]
console.log(0..III) //[0,1,2]
console.log(0..XIX) //[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
*/

const romanValues: [string, number][] = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

const maxNum = 3999;

for (let n = 1; n <= maxNum; n++) {
  let remaining = n;
  let roman = "";
  for (const [symbol, value] of romanValues) {
    while (remaining >= value) {
      roman += symbol;
      remaining -= value;
    }
  }

  Object.defineProperty(Number.prototype, roman, {
    get() {
      const start = Math.min(Number(this), n);
      const end = Math.max(Number(this), n);
      const range = Array.from({ length: end - start }, (_, i) => start + i);
      return Number(this) <= n ? range : range.reverse();
    },
    configurable: true
  });
}
