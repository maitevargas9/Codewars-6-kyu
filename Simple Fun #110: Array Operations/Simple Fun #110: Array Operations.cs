/*
Description

Task
You are given an array of integers a and a non-negative number of operations k, applied to the array. Each operation 
consists of two parts:
Find the maximum element value of the array;
Replace each element a[i] with (maximum element value - a[i]).
How will the array look like after k such operations?

Example
For a = [-4, 0, -1, 0] and k = 2, the output should be [0, 4, 3, 4].
Initial array: [-4, 0, -1, 0]
1st operation: 
Find the maximum value --> 0
Replace each element:  --> [(0 - -4), (0 - 0), (0 - -1), (0 - 0)]
                       --> [4, 0, 1, 0]
2nd operation: 
Find the maximum value --> 4
Replace each element:  --> [(4 - 4), (4 - 0), (4 - 1), (4 - 0)]
                       --> [0, 4, 3, 4]
For a = [0, -1, 0, 0, -1, -1, -1, -1, 1, -1] and k = 1,
the output should be [1, 2, 1, 1, 2, 2, 2, 2, 0, 2].
Initial array: [0, -1, 0, 0, -1, -1, -1, -1, 1, -1]
1st operation: 
Find the maximum value --> 1
Replace each element:  
--> [(1-0),(1- -1),(1-0),(1-0),(1- -1),(1- -1),(1- -1),(1- -1),(1-1),(1- -1)]
--> [1, 2, 1, 1, 2, 2, 2, 2, 0, 2]

Input/Output
[input] integer array a
The initial array.
Constraints:
1 <= a.length <= 100
-100 <= a[i] <= 100
[input] integer k
non-negative number of operations.
Constraints: 0 <= k <= 100000
[output] an integer array
The array after k operations.
*/

namespace myjinxin {
  using System;
  using System.Linq;

  public class Kata {
    public int[] ArrayOperations(int[] a, int k) {
      for (int i = 0; i < k; i++) {
        var max = a.Max();
        a = a.Select(e => max - e).ToArray();
      }
      return a;
    }
  }
}