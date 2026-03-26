/*
Description

You are a junior employee hired to work in an office for a meager salary, but you are full of ambition to conquer the universe of professional
heights. You were shown your workplace, which has a computer, but it is password protected. Your coworkers decided to play a joke on you by 
setting a password on your computer. They left you a bunch of stickers with a strange sequence of characters, always starting with a digit and 
continuing with arrows. Some stickers have an additional digit starting with *. Taking one sticker in your hands and looking at the keyboard, 
you realize that this is probably the computer's PIN code, encoded as a sequence of arrows, but which of the stickers contains the correct 
sequence? It seems that among the stickers there are impossible combinations of arrows that go beyond the limits of the numeric keypad. You 
try to enter the first PIN code from the sticker, get confused by the arrows, and decide to write a function to decode the PIN code with arrows.
Fortunately, you have your laptop with you.

+---+---+---+     +---sticker---+ 
| 7 | 8 | 9 |     |             |
+---+---+---+     |  1→↑→       |
| 4 | 5 | 6 |     |             |
+---+---+---+     |             |
| 1 | 2 | 3 |     +-------------+
+---+---+---+   presumably encoded
| 0 |                1256
+---+

Task
Your task is to write a decoder function for the arrow pin code that takes a string as input and returns a list containing a sequence of digits.
The sticker contains between 4 and 8 characters.
The PIN code on the sticker always begins with a digit and contains at least one arrow.
There are no more than four types of arrows on the stickers ↓, ↑, →, ←.
In addition to the first digit, the sticker may contain another digit with an asterisk *n, which probably indicates the number of times the 
previous key was pressed. The digit is always in the range 0 < *n < 10.
The sticker may contain an incorrect PIN code consisting of an incorrect combination of arrows that goes beyond the digital keypad. In this 
case, return [].

Examples
correct sequence of arrows
"1→↑→"       ==>   [1, 2, 5, 6]
"1*2↓"       ==>   [1, 1, 1, 0]
"0*2↑"       ==>   [0, 0, 0, 1]
"0↑↑↑"       ==>   [0, 1, 4, 7]
"5↓*1←↑↓"    ==>   [5, 2, 2, 1, 4, 1]
"1→→↑↑←←↓↓"  ==>   [1, 2, 3, 6, 9, 8, 7, 4, 1]
incorrect sequence of arrows
"0↑↑↑↑"      ==>   []
"8↑*5→"      ==>   []
"0←*2←"      ==>   []
"8↑↑↑"       ==>   []
"3↓←*4↑"     ==>   []
"6→←→↓↑"     ==>   []
*/

export function decArrowPinCode(sticker: string): number[] {
  const pos: Record<number, [number, number]> = {
    7: [0, 0],
    8: [0, 1],
    9: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    1: [2, 0],
    2: [2, 1],
    3: [2, 2],
    0: [3, 0]
  };

  const numFromPos = (r: number, c: number): number | null => {
    for (const [digit, [dr, dc]] of Object.entries(pos)) {
      if (dr === r && dc === c) {
        return Number(digit);
      }
    }
    return null;
  };

  const moves: Record<string, [number, number]> = {
    "↑": [-1, 0],
    "↓": [1, 0],
    "←": [0, -1],
    "→": [0, 1]
  };

  const result: number[] = [];
  let i = 0;

  const startDigit = Number(sticker[0]);

  if (isNaN(startDigit) || !(startDigit in pos)) {
    return [];
  }

  result.push(startDigit);
  let [row, col] = pos[startDigit];
  i++;

  while (i < sticker.length) {
    if (sticker[i] === "*") {
      i++;

      if (i >= sticker.length) {
        return [];
      }

      const count = Number(sticker[i]);

      if (isNaN(count) || count <= 0 || count >= 10) {
        return [];
      }

      const last = result[result.length - 1];

      for (let k = 0; k < count; k++) {
        result.push(last);
      }
      i++;
      continue;
    }

    const arrow = sticker[i];

    if (!moves[arrow]) {
      return [];
    }

    const [dr, dc] = moves[arrow];
    const newRow = row + dr;
    const newCol = col + dc;
    const next = numFromPos(newRow, newCol);

    if (next === null) {
      return [];
    }

    row = newRow;
    col = newCol;
    result.push(next);
    i++;
  }

  return result;
}
