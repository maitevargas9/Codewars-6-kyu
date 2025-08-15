/*
Description

Task
Given a sequence of integers, check whether it is possible to obtain a strictly increasing sequence by erasing no more 
than one element from it.

Example
For sequence = [1, 3, 2, 1], the output should be false;
For sequence = [1, 3, 2], the output should be true.

Input/Output
[input] integer array sequence
Constraints: 2 ≤ sequence.length ≤ 1000, -10000 ≤ sequence[i] ≤ 10000.
[output] a boolean value
true if it is possible, false otherwise.
*/

function almostIncreasingSequence(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    if (
      sequence
        .filter((_, j) => j !== i)
        .every((x, y, z) => y === z.length - 1 || x < z[y + 1])
    ) {
      return true;
    }
  }
  return false;
}
