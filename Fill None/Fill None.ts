/*
Description

Task
Write a function that accepts a list that can contain missing data, and an integer representing the method on how to fill the 
missing data if there is any. Missing data is represented as None. The list will only contain integers and None values.

Note that depending on the language you attempt this kata with, None corresponds to:
None (Python)
undefined (Javascript and TypeScript)
Nothing (Haskell)
null (C#)

The fill method rules are outlined below:
Fill method: 
-1: backwards 
0: nearest      
1: forwards

Example
arr = [None, 1, None, None, None, 2, None]
fill(arr, -1) == [1, 1, 2, 2, 2, 2, None]  # None replaced by closest int on the right
fill(arr,  0) == [1, 1, 1, 1, 2, 2, 2]     # None replaced by closest int. If equidistant, choose the smallest int
fill(arr,  1) == [None, 1, 1, 1, 1, 2, 2]  # None replaced by closest int on the left

Notes
[] should return []
[None] should return [None]
Arrays will only contain integers and None values
*/

export function fill(
  arr: Array<number | undefined>,
  method = 0
): Array<number | undefined> {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1 && arr[0] === undefined) {
    return [undefined];
  }

  if (method === -1) {
    let num: number | undefined = undefined;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === undefined) {
        if (num !== undefined) {
          arr[i] = num;
        }
      } else {
        num = arr[i];
      }
    }
  } else if (method === 0) {
    let num_indx = arr
      .map((val, index) => (val !== undefined ? index : undefined))
      .filter((val) => val !== undefined) as number[];
    if (num_indx.length === 0) {
      return arr;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        let deltas = num_indx.map((x) => Math.abs(i - x));
        let m = Math.min(...deltas);
        let c = deltas.filter((delta) => delta === m).length;

        if (c === 1) {
          arr[i] = arr[num_indx[deltas.indexOf(m)]];
        } else {
          let firstIndex = num_indx[deltas.indexOf(m)];
          let lastIndex = num_indx[deltas.lastIndexOf(m)];
          if ((arr[firstIndex] ?? 0) > (arr[lastIndex] ?? 0)) {
            arr[i] = arr[lastIndex];
          } else {
            arr[i] = arr[firstIndex];
          }
        }
      }
    }
  } else if (method === 1) {
    let num: number | undefined = undefined;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        if (num !== undefined) {
          arr[i] = num;
        }
      } else {
        num = arr[i];
      }
    }
  }
  return arr;
}
