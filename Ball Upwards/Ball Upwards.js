/*
Description

You throw a ball vertically upwards with an initial speed v0 (in km per hour).

The height h of the ball at each time t is given by h = v0⋅t−0.5⋅g⋅t⋅t, where g is the Earth's gravity (g≈9.81m/s2).

A device is recording at every tenth of second the height of the ball.

For example, with v0 = 15 km/h, the device gets something of the following form: (0, 0.0), (1, 0.367...), (2, 0.637...), 
(3, 0.808...), (4, 0.881..) ... where the first number is the time in tenths of a second and the second number the 
height in meter.

Task
Write a function with a parameter v0 (in km per hour) that returns the time in tenth of second of the maximum height 
recorded by the device.

Examples
Given initial speed v0 = 15 --> should return 4
Given initial speed v0 = 25 --> should return 7

Notes
Remember to convert the velocity from km/h to m/s or from m/s to km/h when necessary.
The maximum height recorded by the device is not necessarily the maximum height reached by the ball.
*/

function maxBall(v0) {
  const g = 9.81;
  const v = v0 / 3.6;
  let n = 0;

  while (true) {
    const t1 = n * 0.1;
    const t2 = (n + 1) * 0.1;
    const h1 = v * t1 - 0.5 * g * t1 * t1;
    const h2 = v * t2 - 0.5 * g * t2 * t2;

    if (h2 < h1) {
      break;
    }
    n++;
  }

  return n;
}
