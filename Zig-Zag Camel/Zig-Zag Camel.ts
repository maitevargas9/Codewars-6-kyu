/*
Description

A camel at the base of a large sand dune wants to get to the top of it to see what is on the other side.

The dune distance d and height h are as shown below:
                              ....+
                          ........|      
                      ............|             
                  ................| h
              ....................|
          ........................|
Camel ----------------------------+
                    d
Steep dunes don't worry him because this is a smart camel!
When the slope is > 30 degrees, then instead of going straight up he will zig-zag back and forth so the climb is not so steep.

source: imgur.com

Kata Task
Given d and h then what is the shortest amount of walking for our smart camel to get to the top of the sand dune?
*/

export function zigZagCamel(d: number, h: number): number {
  const slopeAngle = Math.atan(h / d);
  const maxAngle = Math.PI / 6;

  if (slopeAngle <= maxAngle) {
    return Math.sqrt(d * d + h * h);
  }

  return h / Math.sin(maxAngle);
}
