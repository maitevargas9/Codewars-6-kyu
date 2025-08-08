/*
Description

Your task is to return duplicated objects from an array.

You will receive two arrays, objs and keys. Duplicate objects mean that the object properties defined on keys are 
duplicated, for example:
// keys
[ 'x', 'y' ]
// objs
{ x: 1, y: 1 },
{ x: 2, y: 2 },
{ x: 1, z: 1 },
{ x: 1, y: 1, z: 3 },

The expected result is:
{ x: 1, y: 1 },
{ x: 1, y: 1, z: 3 },

Because x and y repeat on the first and last element, so they will be picked up.

If a key is not present in the object the value of this property will be considered "not defined" native value for 
the current language.
*/

export function duplicated(arr: any[], keys: string[]): any[] {
  const duplicates: any[] = [];
  const seen: Map<string, number[]> = new Map();

  arr.forEach((obj, index) => {
    if (keys.every((key) => obj.hasOwnProperty(key))) {
      const keyString = keys.map((key) => obj[key]).join("|");
      const indices = seen.get(keyString) || [];
      indices.push(index);
      seen.set(keyString, indices);
    }
  });

  for (const indices of seen.values()) {
    if (indices.length > 1) {
      duplicates.push(...indices);
    }
  }

  return duplicates.sort((a, b) => a - b).map((index) => arr[index]);
}
