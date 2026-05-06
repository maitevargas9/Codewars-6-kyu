/*
Description

An Invitation
Most of us played with toy blocks growing up. It was fun and you learned stuff. So what else can you do but rise to the challenge when a 
3-year old exclaims, "Look, I made a square!", then pointing to a pile of blocks, "Can you do it?"

Our Blocks
Just to play along, of course we'll be viewing these blocks in two dimensions. Depth now being disregarded, it turns out the pile has four 
different sizes of block: 1x1, 1x2, 1x3, and 1x4. The smallest one represents the area of a square, the other three are rectangular, and all 
differ by their width. Integers matching these four widths are used to represent the blocks in the input.

The Square
Well, the kid made a 4x4 square from this pile, so you'll have to match that. Noticing the way they fit together, you realize the structure 
must be built in fours rows, one row at a time, where the blocks must be placed horizontally. With the known types of block, there are five 
types of row you could build:
1 four-unit block
1 three-unit block plus 1 one-unit bock (in either order)
2 two-unit blocks
1 two-unit block plus 2 one-unit blocks (in any order)
4 one-unit blocks

Some Notes
Amounts for all four block sizes will each vary from 0 to 16.
The total size of the pile will also vary from 0 to 16.
A valid square doesn't have to use all given blocks.
The order of rows is irrelevant.

Some Examples
Given 1, 3, 2, 2, 4, 1, 1, 3, 1, 4, 2 there are many ways you could construct a square. Here are three possibilities, as described by their 
four rows:

ONE
1 four-unit block
2 two-unit blocks
1 four-unit block
4 one-unit blocks
TWO
1 three-unit block plus 1 one-unit block
2 two-unit blocks
1 four-unit block
1 one-unit block plus 1 three-unit block
THREE
2 two-unit blocks
1 three-unit block plus 1 one-unit block
1 four-unit block
2 one-unit blocks plus 1 two-unit block
Given 1, 3, 2, 4, 3, 3, 2 there is no way to complete the task, as you could only build three rows of the correct length. The kid will not be 
impressed.
NONE
1 four-unit block
2 two-unit blocks
1 three-unit block plus 1 one-unit block
(here only sadness)

Input
blocks ~ array of random integers (1 <= x <= 4)

Output
true or false ~ whether you can build a square
*/

export function buildSquare(blocks: number[]): boolean {
  let c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0;

  for (const b of blocks) {
    if (b === 1) {
      c1++;
    } else if (b === 2) {
      c2++;
    } else if (b === 3) {
      c3++;
    } else if (b === 4) {
      c4++;
    }
  }

  for (let r4 = 0; r4 <= 4; r4++) {
    for (let r31 = 0; r31 <= 4 - r4; r31++) {
      for (let r22 = 0; r22 <= 4 - r4 - r31; r22++) {
        for (let r211 = 0; r211 <= 4 - r4 - r31 - r22; r211++) {
          const r1111 = 4 - r4 - r31 - r22 - r211;

          const need1 = r31 * 1 + r211 * 2 + r1111 * 4;
          const need2 = r22 * 2 + r211 * 1;
          const need3 = r31 * 1;
          const need4 = r4 * 1;

          if (need1 <= c1 && need2 <= c2 && need3 <= c3 && need4 <= c4) {
            return true;
          }
        }
      }
    }
  }

  return false;
}
