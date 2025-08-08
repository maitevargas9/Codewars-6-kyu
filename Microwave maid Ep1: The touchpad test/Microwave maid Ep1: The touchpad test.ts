/*
Description

The Royal Household is opening a new vacancy of microwave oven maid, who will heat up dishes for Queen Elizabeth II. 
All candidates must pass several very difficult tests and training in boot camp. Good luck, recruit!

The touchpad test.

On a microwave the maximum number that you can enter for minutes or seconds is 99. Hence, the time can be represented 
in two ways:
using the standard method where seconds go up to 59 only,
using an alternative method where seconds can go up to 99 just like minutes do.
A good microwave maid can't waste her time moving finger unnecessarily from one button to another to set the timer.

Given the time required to heat up the food in seconds, you must return a string of digits that the maid has to input 
using one of the aforementioned methods such that the number of different consecutive digits is minimal. If the number 
of differences is the same, pick the shorter string. If both string have the same length too, use the standard method.

Example 1:
input = 71
method 1: "111" (1 minute and 11 seconds)
method 2: "71" (0 minutes and 71 seconds)
return "111" since it has fewer different consecutive digits

Example 2:
input = 72
method 1: "112" (1 minute and 12 seconds)
method 2: "72" (0 minutes and 72 seconds)
return "72" since the number of different consecutive digits is the same but "72" has fewer digits than "112"

Example 3:
input = 3690
method 1: "6130" (61 minutes and 30 seconds)
method 2: "6090" (60 minutes and 90 seconds)
return "6130" (the standard way) since both the number of different consecutive digits and the number of digits are 
the same
*/

export function getBestCombination(time: number): string {
  const getStandardFormat = (time: number): string => {
    if (time <= 60) return time.toString();

    const seconds: number = time % 60;
    const minutes: number = Math.floor(time / 60);

    const formattedSeconds: string = seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2
    });

    return `${minutes}${formattedSeconds}`;
  };

  const getOverflownFormat = (time: number): string => {
    if (time < 100) return time.toString();

    const seconds: number = time % 60;
    const standardTime = getStandardFormat(time);

    if (seconds >= 40) return standardFormat;

    const overflown = Number.parseInt(standardTime) - 40;

    return overflown.toString();
  };

  const getUniqueDigits = (time: string): number => {
    let count = 1;
    for (let i = 0; i < time.length - 1; i++)
      if (time[i] != time[i + 1]) count++;

    return count;
  };

  const getFewerDigits = (standard: string, overflown: string): string => {
    return getUniqueDigits(standard) < getUniqueDigits(overflown)
      ? standard
      : overflown;
  };

  const getShorter = (standard: string, overflown: string): string => {
    return standard.length < overflown.length ? standard : overflown;
  };

  const standardFormat = getStandardFormat(time);
  const overflownFormat = getOverflownFormat(time);

  if (getUniqueDigits(standardFormat) != getUniqueDigits(overflownFormat)) {
    return getFewerDigits(standardFormat, overflownFormat);
  }
  if (standardFormat.length != overflownFormat.length) {
    return getShorter(standardFormat, overflownFormat);
  }

  return standardFormat;
}
