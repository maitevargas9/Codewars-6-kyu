/*
Description

What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. 
The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], 
['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.
Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:
Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.

Examples (input -> output):
* 2427 -> ['Friday']
* 2185 -> ['Saturday']
* 2860 -> ['Thursday', 'Friday']
*/

export function mostFrequentDays(year: number): string[] {
  const isLeapYear = (year: number) => {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        return year % 400 === 0;
      }
      return true;
    }
    return false;
  };
  const daysInYear = isLeapYear(year) ? 366 : 365;
  const firstDayOfYear = new Date(year, 0, 1).getDay();
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const dayCounts = new Array(7).fill(0);
  const adjustedStartDay = (firstDayOfYear + 6) % 7;

  for (let i = 0; i < 7; i++) {
    dayCounts[i] = Math.floor(daysInYear / 7);
  }

  for (let i = 0; i < daysInYear % 7; i++) {
    dayCounts[(adjustedStartDay + i) % 7]++;
  }
  const maxCount = Math.max(...dayCounts);
  const result = [];

  for (let i = 0; i < 7; i++) {
    if (dayCounts[i] === maxCount) {
      result.push(daysOfWeek[i]);
    }
  }

  return result;
}
