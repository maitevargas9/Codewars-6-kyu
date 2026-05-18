/*
Description

You've been tasked with with writing the function that generates a fighter jet's heads up display. The display's projector is only capable 
of displaying ASCII characters in rows and columns. It's a terrible system, but if you don't pull through, they'll find someone else who will.

The computer provides the size of the HUD's screen in characters [x,y], the position of the center of the crosshair in screen coordinates 
[x,y], speed, heading and altitude, which must be displayed at the left-middle, top-middle, right middle locations of the screen respectively.

e.g.

getHUD([7,7], [2,3], [5,6,7])

'   6   '
'   |   '
' --|-- '
'5  |  7'
'       '
'       '
'       '

The screen dimensions are always positive integers. The top left of the screen is coordinates (0,0). The crosshair position is always integers. 
The cross hair consists of three pipes ('|') and four dashes ('-'), unless some or all is offscreen. Speed, Heading and Altitude are positive 
single digit integers. They should always be displayed regardless of crosshair position. Should a screen dimension be even, the middle is in 
between 2 coordinates, pick the lower coordinate. For instance, if width is 4, the middle is in between coordinates 1 and 2, so pick 1.
*/

export function getHUD(
  screenSize: number[],
  position: number[],
  sha: number[]
): string[] {
  const [width, height] = screenSize;
  const [cx, cy] = position;
  const [speed, heading, altitude] = sha;

  const midX = Math.floor((width - 1) / 2);
  const midY = Math.floor((height - 1) / 2);

  const grid: string[][] = Array.from({ length: height }, () =>
    Array(width).fill(" ")
  );

  const parts: Array<[number, number, string]> = [
    [cx, cy - 1, "|"],
    [cx, cy, "|"],
    [cx, cy + 1, "|"],
    [cx - 1, cy, "-"],
    [cx - 2, cy, "-"],
    [cx + 1, cy, "-"],
    [cx + 2, cy, "-"]
  ];

  for (const [x, y, ch] of parts) {
    if (x >= 0 && x < width && y >= 0 && y < height) {
      grid[y][x] = ch;
    }
  }

  grid[0][midX] = String(heading);
  grid[midY][0] = String(speed);
  grid[midY][width - 1] = String(altitude);

  return grid.map((row) => row.join(""));
}
