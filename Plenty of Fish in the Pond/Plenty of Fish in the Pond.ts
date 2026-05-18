/*
Description

Introduction
Fish are an integral part of any ecosystem. Unfortunately, fish are often seen as high maintenance. Contrary to popular belief, 
fish actually reduce pond maintenance as they graze on string algae and bottom feed from the pond floor. They also make very enjoyable 
pets, providing hours of natural entertainment.

Task
In this Kata you are fish in a pond that needs to survive by eating other fish. You can only eat fish that are the same size or smaller 
than yourself. You must create a function that takes a shoal of fish as an input string. From this you must work out how many fish you 
can eat and ultimately the size you will grow to and return this as an integer.

Rules
Your size starts at 1
The shoal string will contain fish integers between 0-9
0 = algae and wont help you feed.
The fish integer represents the size of the fish (1-9).
You can only eat fish the same size or less than yourself.
You can eat the fish in any order you choose to maximize your size.
You can and only eat each fish once.
The bigger fish you eat, the faster you grow. A size 2 fish equals two size 1 fish, size 3 fish equals three size 1 fish, and so on.
Your size increments by one each time you reach the amounts below.

Increase your size
Your size will increase depending how many fish you eat and on the size of the fish. This chart shows the amount of size 1 fish you have 
to eat in order to increase your size.
Current size	Amount extra needed for next size	Total size 1 fish	Increase to size
1	4	4	2
2	8	12	3
3	12	24	4
4	16	40	5
5	20	60	6
6	24	84	7

Example 1
"11112222" => 3
=> 4 fish of size 1
=> 4 fish of size 2
You eat the 4 fish of size 1 (4 * 1 = 4) which increases your size to 2
Now that you are size 2 you can eat the fish that are sized 1 or 2.
You then eat the 4 fish of size 2 (4 * 2 = 8) which increases your size to 3

Example 2
shoal = "111111111111" => 3
=> 12 fish of size 1
You eat the 4 fish of size 1 (4 * 1 = 4) which increases your size to 2
You then eat the remainding 8 fish of size 1 (8 * 1 = 8) which increases your size to 3
*/

export function fish(shoal: String): Number {
  let size = 1;

  const count = new Array(10).fill(0);
  for (const c of shoal) {
    const v = Number(c);
    if (v > 0) {
      count[v]++;
    }
  }

  let growth = 0;

  let changed = true;
  while (changed) {
    changed = false;

    for (let i = 1; i <= size; i++) {
      if (count[i] > 0) {
        growth += count[i] * i;
        count[i] = 0;
        changed = true;
      }
    }

    while (growth >= size * 4) {
      growth -= size * 4;
      size++;
      changed = true;

      for (let i = 1; i <= size; i++) {
        if (count[i] > 0) {
          growth += count[i] * i;
          count[i] = 0;
        }
      }
    }
  }

  return size;
}
