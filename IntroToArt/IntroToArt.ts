/*
Description

Help prepare for the entrance exams to art school.

It is known in advance that this year, the school chose the symmetric letter “W” as the object for the image, and the only 
condition for its image is only the size that is not known in advance, so as training, you need to come up with a way that 
accurately depicts the object.

Write a function that takes an integer as height and returns a list of strings with a line-by-line image of the object.

Below is an example function:
# height = 3 should return:
[
  "*   *   *",
  " * * * * ",
  "  *   *  "
]
# height = 5 should return:
[
  "*       *       *",
  " *     * *     * ",
  "  *   *   *   *  ",
  "   * *     * *   ",
  "    *       *    "
]
Return an empty list for height < 2.
*/

export function getW(height: number): string[] {
  if (height < 2) {
    return [];
  }

  const width = 4 * (height - 1) + 1;
  const mid = Math.floor(width / 2);
  const result: string[] = [];

  for (let i = 0; i < height; i++) {
    const row = new Array(width).fill(" ");

    const leftOuter = i;
    const rightOuter = width - 1 - i;
    const leftInner = mid - i;
    const rightInner = mid + i;

    row[leftOuter] = "*";
    row[rightOuter] = "*";
    row[leftInner] = "*";
    row[rightInner] = "*";

    result.push(row.join(""));
  }

  return result;
}
