/*
Description

Task
Given an array of integers, sum consecutive even numbers and consecutive odd numbers. Repeat the process while it 
can be done and return the length of the final array.

Example
For arr = [2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]
The result should be 6.
[2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]  -->
         2+2+6       0+2+0     5+5+7+7       3+3+9
[2, 1,   10,    5,    2,        24,     4,   15   ] -->
                               2+24+4
[2, 1,   10,    5,             30,           15   ]
The length of final array is 6

Input/Output
[input] integer array arr
A non-empty array,
1 ≤ arr.length ≤ 1000
0 ≤ arr[i] ≤ 1000
[output] an integer
The length of the final array
*/

import java.util.*;

public class Solution {

  public static int sumGroups(int[] arr) {
    List<Integer> list = new ArrayList<>();
    for (int num : arr) list.add(num);

    boolean changed;
    do {
      changed = false;
      List<Integer> newList = new ArrayList<>();
      int i = 0;
      while (i < list.size()) {
        int curr = list.get(i);
        int sum = curr;
        int j = i + 1;
        while (j < list.size() && (list.get(j) % 2 == curr % 2)) {
          sum += list.get(j);
          j++;
        }
        if (j > i + 1) changed = true;
        newList.add(sum);
        i = j;
      }
      list = newList;
    } while (changed);

    return list.size();
  }
}
