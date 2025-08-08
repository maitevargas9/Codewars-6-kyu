/*
Description

John has invited some friends. His list is:
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that makes this string uppercase gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result 
between parentheses separated by a comma.

So the result of function meeting(s) will be:
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, 
BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".
*/

function meeting(s) {
  const guests = s.split(";");
  const sortedGuests = guests
    .map((guest) => guest.split(":"))
    .sort((a, b) => {
      if (a[1].toUpperCase() === b[1].toUpperCase()) {
        return a[0].toUpperCase().localeCompare(b[0].toUpperCase());
      }
      return a[1].toUpperCase().localeCompare(b[1].toUpperCase());
    })
    .map((guest) => `(${guest[1].toUpperCase()}, ${guest[0].toUpperCase()})`);
  return sortedGuests.join("");
}
