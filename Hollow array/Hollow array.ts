/*
Description

An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of 
non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,
else false.
*/

export function isHollow(x: number[]): boolean {
  if (!x.length) {
    return false;
  }

  const resultb: number[] = [];
  for (let i = 0; i < x.length && x[i] !== 0; i++) {
    resultb.push(i);
  }

  const resulta: number[] = [];
  for (let i = x.length - 1; i >= 0 && x[i] !== 0; i--) {
    resulta.push(i);
  }

  const resultc = new Set([...resultb, ...resulta]);

  const resultd = x.filter((_, i) => !resultc.has(i));

  return (
    resultd.every((i) => i === 0) &&
    resultd.length >= 3 &&
    resultb.length === resulta.length
  );
}
