/*
Description

Task
An airline company is trying to arrange the seats for passengers on a plane. The company has two membership tiers: Premium and Standard.
Premium customers receive preferential treatment and are always assigned to first class. Standard customers are assigned to coach and will 
only be moved up to first class if coach is full and there are available first-class seats. Furthermore, Premium customers have priority, 
meaning that Standard customers may be removed from the flight if necessary to make room in first class for all Premium customers. Premium 
customers may never be left off a flight, and there will always be enough first-class seats to accommodate all Premium customers. Passengers 
are always assigned from the front of the plane backwards.

Your task is to arrange customers, given an array of available seats (with 'f' denoting a first class seat and 'c' denoting a coach seat), 
a number of premium customers, and a number of standard customers. Return an array of premium customers ('p') and standard customers ('s') 
assigned to seats corresponding to those in seats. Use spaces to denote empty seats.

Input/Output
[input] string array seats
An array consisting of 'f' and 'c' denoting where first-class and coach seats are located on the plane (where the number of 'f' seats is at 
least equal to premium).
[input] integer premium
The number of Premium passengers (who must be assigned to first class).
[input] integer standard
The number of Standard passengers (placed in coach unless there is no room).
[output] string array
An array containing where Premium ('p') and Standard ('s') passengers will sit, along with spaces denoting empty seats.

Example
For seats = ['f', 'f', 'f', 'c', 'c', 'c'], premium = 2, and standard = 5
the output should be ['p', 'p', 's', 's', 's', 's']
In this example, first-class seats are given out to Premium customers first, leaving one unoccupied. This unoccupied seat is taken by an 
"overflow" Standard passenger who couldn't fit into the 3 coach seats. There is no seat for the fifth Standard passenger, so they are left 
behind.
*/

function airlineSeating(seats, premium, standard) {
  const result = Array(seats.length).fill(" ");

  for (let i = 0; i < seats.length && premium > 0; i++) {
    if (seats[i] === "f") {
      result[i] = "p";
      premium--;
    }
  }

  for (let i = 0; i < seats.length && standard > 0; i++) {
    if (seats[i] === "c" && result[i] === " ") {
      result[i] = "s";
      standard--;
    }
  }

  for (let i = 0; i < seats.length && standard > 0; i++) {
    if (seats[i] === "f" && result[i] === " ") {
      result[i] = "s";
      standard--;
    }
  }

  return result;
}
