/*
Description

Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:
i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array

All other instructions are no-ops and have no effect.

Examples
Program "iiisdoso" should return numbers [8, 64].
Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
*/

export function parse(data: string): number[] {
  let value = 0;
  const result: number[] = [];

  for (const char of data) {
    switch (char) {
      case "i":
        value++;
        break;
      case "d":
        value--;
        break;
      case "s":
        value *= value;
        break;
      case "o":
        result.push(value);
        break;
      default:
        break;
    }
  }

  return result;
}
