/*
Description

Story & Task
You're a pretty busy billionaire, and you often fly your personal Private Jet to remote places. Usually travel doesn't bother you, but this 
time you are unlucky: it's New Year's Eve, and since you have to fly halfway around the world, you'll probably have to celebrate New Year's 
Day in mid-air!
Your course lies west of your current location and crosses several time zones. The pilot told you the exact schedule: it is known that you 
will take off at takeOffTime, and in minutes[i] after takeoff you will cross the i-th border between time zones. After crossing each border 
you will have to set your wrist watch one hour earlier (every second matters to you, so you can't let your watch show incorrect time). It 
is guaranteed that you won't cross the IDL (International Dateline), i.e. after crossing each time zone border your current time will be set 
one hour back.
You've been thinking about this situation and realized that it might be a good opportunity to celebrate New Year's Day more than once, i.e. 
each time your wrist watch shows 00:00. Assuming that you set your watch immediately after the border is crossed, how many times will you be 
able to celebrate this New Year's Day with a nice bottle of champagne? Note that the answer should include celebrations both in mid-air and 
on the ground (it doesn't matter if the plane landed in the last time zone before the midnight or not, you'll not let the last opportunity to 
celebrate New Year slip through your fingers).

Example
For takeOffTime = "23:35" and minutes = [60, 90, 140] the output should be 3.
Here is the list of events by the time zones:
initial time zone:
at 23:35 your flight starts;
at 00:00 you celebrate New Year for the first time;
at 00:35 (60 minutes after the take off) you cross the first border;
time zone -1:
at 23:35 you cross the border (00:35 by your initial time zone);
at 00:00 you celebrate New Year for the second time 
(01:00 by your initial time zone);
at 00:05 (90 minutes after the take off) you cross the second border;
time zone -2:
at 23:05 you cross the border;
at 23:55 (140 minutes after the take off) you cross another border;
time zone -3:
at 22:55 you cross the border;
at 00:00 you celebrate New Year for the third time.
Thus, the output should be 3. That's a lot of champagne!

Input/Output
[input] string takeOffTime
The take off time in the 24-hour format "HH:MM". It is guaranteed that the given time is valid.
The "00:00" time corresponds to the midnight of 31st of December / 1st of January. Any other time is before the new year (31st of December).
[input] integer array minutes
A strictly increasing array of integers. minutes[i] stands for the number of minutes from the take off to crossing the i-th time zone border.
Constraints:
0 ≤ minutes.length ≤ 20
1 ≤ minutes[i] ≤ 1500
[output] an integer
The number of times you will be able to celebrate New Year's Day.
*/

function newYearCelebrations(takeOffTime, minutes) {
  const [h, m] = takeOffTime.split(":").map(Number);
  const MIDNIGHT = 1440;
  let localTime = h * 60 + m;
  let celebrations = 0;

  let prev = localTime === 0 ? MIDNIGHT : localTime;

  if (localTime === 0) {
    celebrations++;
  }

  for (let i = 0; i < minutes.length; i++) {
    const elapsed = i === 0 ? minutes[0] : minutes[i] - minutes[i - 1];
    const next = prev + elapsed;

    if (prev < MIDNIGHT && next >= MIDNIGHT) {
      celebrations++;
    }

    prev = next - 60;

    if (prev === MIDNIGHT) {
      celebrations++;
    }
  }

  if (prev < MIDNIGHT) {
    celebrations++;
  }

  return celebrations;
}
