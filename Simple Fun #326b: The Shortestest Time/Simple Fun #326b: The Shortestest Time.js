/*
Description

Task
John is a programmer. He treasures his time very much, more than his legs even. He lives on the n floor of a building. 
Every morning he will go downstairs as quickly as possible to begin his great work today.

And the fastest way down is out the window. Assume floors of 5 meters, g = 10 m/s², ignore air resistance and ignore any 
time needed to heal his legs. Programmers don't need legs.

Given the following argument:
n: An integer. The floor of John (0-based).
Please calculate the time it takes for John to reach the ground.

Example
For n = 4, the output should be 2.
For n = 0, the output should be 0.
For n = 7, the output should be 2.6457513110645907.

Note
These are Dutch floors. They are numbered 0-based. (0 is usually called "begane grond".)
John jumps from the top of his floor.
Your answer should be correct to a relative error of 1e-9.
*/

function shortestestTime(n) {
  const g = 10;
  const floorHeight = 5;

  const height = n * floorHeight;

  const time = Math.sqrt((2 * height) / g);

  return time;
}
