/*
Description

Georg Cantor's in one of his proofs used following sequence:
1/1 1/2 1/3 1/4 1/5 ... 
2/1 2/2 2/3 2/4 ...
3/1 3/2 3/3 ... 
4/1 4/2 ... 
5/1 ... 

So sequence is:
1/1, 1/2, 2/1, 3/1, 2/2, 1/3, 1/4 ...

Your task is to return nth element of this sequence.

Input: n - positive integer (max 268435455)
Output: string - nth expression of sequence - 'a/b' where a and b are integers.
*/

export function cantor(n: number): string {
  let d = Math.ceil((-1 + Math.sqrt(1 + 8 * n)) / 2);

  const prev = ((d - 1) * d) / 2;
  const pos = n - prev;

  let numerator: number, denominator: number;
  if (d % 2 === 0) {
    numerator = pos;
    denominator = d - pos + 1;
  } else {
    numerator = d - pos + 1;
    denominator = pos;
  }

  return `${numerator}/${denominator}`;
}
