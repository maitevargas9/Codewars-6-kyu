/*
Description

You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from its current position. The cat can jump at most (j) characters, and 
cannot jump over the dog.

So:
if j = 5:
..C.....m...D returns 'Caught!' <-- not more than j characters between the cat and the mouse
.....C............m......D returns 'Escaped!' <-- as there are more than j characters between the two, the cat cannot jump far 
enough
if j = 10:
...m.........C...D returns 'Caught!' <-- Cat can jump far enough and jump is not over dog
...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse
Finally, if not all three animals are present, return 'boring without all three'
*/

export function catMouse(x: string, j: number): string {
  let dogPosition = x.indexOf("D");
  let catPosition = x.indexOf("C");
  let mousePosition = x.indexOf("m");
  if (dogPosition === -1 || catPosition === -1 || mousePosition === -1) {
    return "boring without all three";
  } else if (Math.abs(catPosition - mousePosition) > j) {
    return "Escaped!";
  }
  return dogPosition > Math.min(catPosition, mousePosition) &&
    dogPosition < Math.max(catPosition, mousePosition)
    ? "Protected!"
    : "Caught!";
}
