/*
Description

In the middle of the night, when you lose sleep, you always help yourself to sleep by counting sheep.
"one sheep, two sheep, three sheep, ...sheep, ...sleep, sleep, Zzz.."

Task
You are given a string matrix sheep. Each row separated by \n. It contains only characters s,h,e,e,p.
Your task is to count the numbers of character s,h,e,e,p with + shape or x shape in any order. like these:
 s    h    p   .....
hee  eep  hee  .....
 p    s    s   .....
 
s h  h e  p h  .....
 e    e    e   .....
e p  p s  e s  .....
a character can be used more than one time in the different shapes. For example:
ssh                                    s h        s
hee                                     e        hee
epp  there are 2 shapes in the matrix: e p  and   p
Still not understand the task? Look at the following example ;-)

Example
For sheep = 
ssh
hee
eep
the output should be 1.
For sheep = 
ssh
hee
epp
the output should be 2.
For sheep = 
hsh
hee
eep
the output should be 0.
For sheep = 
sshhss
heeeeh
eppppe
the output should be 4.
For sheep = 
sshee
heesp
epphe
the output should be 6.

Note
10 < sheep.length <= 10000
*/

function count(sheep) {
  const grid = sheep.split("\n");
  const rows = grid.length;
  const cols = grid[0].length;

  const target = { s: 1, h: 1, e: 2, p: 1 };

  function isValid(chars) {
    const freq = {};
    for (const c of chars) {
      freq[c] = (freq[c] || 0) + 1;
    }

    for (const k in target) {
      if (freq[k] !== target[k]) {
        return false;
      }
    }
    return Object.keys(freq).length === 4;
  }

  let result = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i > 0 && i < rows - 1 && j > 0 && j < cols - 1) {
        const plus = [
          grid[i][j],
          grid[i - 1][j],
          grid[i + 1][j],
          grid[i][j - 1],
          grid[i][j + 1]
        ];
        if (isValid(plus)) {
          result++;
        }
      }

      if (i > 0 && i < rows - 1 && j > 0 && j < cols - 1) {
        const x = [
          grid[i][j],
          grid[i - 1][j - 1],
          grid[i - 1][j + 1],
          grid[i + 1][j - 1],
          grid[i + 1][j + 1]
        ];
        if (isValid(x)) {
          result++;
        }
      }
    }
  }

  return result;
}
