/* 
Description

Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates 
where the 13th of a month lands on a Friday in the given range of year(s).

The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where
months do not have leading zeroes and are separated with forward slashes.

If no end year is given, only return friday the thirteenths during the start year.

Examples
fridayTheThirteenths(1999, 2000) 
returns "8/13/1999 10/13/2000"  
fridayTheThirteenths(2014, 2015) 
returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"  
fridayTheThirteenths(2000)
returns "10/13/2000"
*/

function fridayTheThirteenths(start, end) {
  const dates = [];
  if (!end) {
    end = start;
  }
  for (let i = start; i <= end; i++) {
    for (let j = 0; j < 12; j++) {
      const date = new Date(i, j, 13);
      if (date.getDay() === 5) {
        dates.push(
          `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        );
      }
    }
  }
  return dates.join(" ");
}
