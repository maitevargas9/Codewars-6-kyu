/*
Description

Problem
During a preparation of programming contest, its jury is usually faced with many difficult tasks. One of them is to 
select a problem simple enough to most, if not all, contestants to solve.

The difficulty here lies in diverse meanings of the term "simple" amongst the jury members. So, the jury uses the 
following procedure to reach a consensus:
each member weights each proposed problem with a positive integer "complexity rating" 
(not necessarily different for different problems, value range 1 to 100). 
The jury member calls "simplest" those problems that he gave the minimum complexity rating, 
and "hardest" those problems that he gave the maximum complexity rating.
The ratings received from all jury members are then compared, and a problem is declared as "very simple", if it was 
called as "simplest" by more than a half of the jury, and was called as "hardest" by nobody.

Task
You are given a 2D integer array ratings. Each subarray represents the complexity rating of a jury member. 
i.e. [1,1,1,2]. It means that there are total 4 problems, and the jury member gave complexity rating 1,1,1,2 
for each problem. All the subarray have the same length.

Your task is to compare all the ratings, find out the simpleset problem, return their index(0-based) using an 
array(in ascending order). If no simpleset problem found, return an empty array.

Example
For ratings =
[
[1,2,3,4],
[5,6,7,8],
[10,20,30,40],
[70,80,90,100]
]
the output should be [0]

           problem 0    problem 1    problem 2    problem 3

member-1       1            2            3            4
member-2       5            6            7            8
member-3      10           20           30           40
member-4      70           80           90          100
All the members rate problem 0 as the simplest problem.
So, the result is [0]
For ratings =
[
[1,1,1,2],
[5,90,21,40],
[10,10,9,10],
[3,4,3,5]
]
the output should be [2]

           problem 0    problem 1    problem 2    problem 3

member-1       1            1            1            2
member-2       5           90           21           40
member-3      10           10            9           10
member-4       3            4            3            5
For problem 0, member 1,2,4 rating it as simplest problem(more than half), 
But member 3 rating it as hardest problem.
For problem 1, only member 1 rating it as simplest problem(1).
For problem 2, member 1,3,4 rating it as simplest problem(more than half),
And nobody rating it as hardest problem. 
For problem 3, no member rating it as simplest problem.
So, the result is [2]
For ratings =
[
[1,2,1,1],
[4,3,3,3],
[5,5,6,5],
[7,7,8,8]
]
the output should be [].
Each problem has at least one member rating as hardest problem.

Note
1 < ratings.length <= 100
1 < ratings[i].length <= 100
For a problem set, you can assume that each mamber will give at least two different rating values.
*/

function simplestProblem(ratings) {
  const m = ratings.length;
  const n = ratings[0].length;

  const simplestCount = Array(n).fill(0);
  const isHardest = Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    const memberRatings = ratings[i];
    const min = Math.min(...memberRatings);
    const max = Math.max(...memberRatings);

    for (let j = 0; j < n; j++) {
      if (memberRatings[j] === min) {
        simplestCount[j]++;
      }
      if (memberRatings[j] === max) {
        isHardest[j] = true;
      }
    }
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (simplestCount[i] > m / 2 && !isHardest[i]) {
      result.push(i);
    }
  }

  return result;
}
