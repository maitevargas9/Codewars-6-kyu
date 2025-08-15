/*
Description

You have to build a pyramid.

This pyramid should be built from characters from a given string.

You have to create the code for these four methods:
public static string WatchPyramidFromTheSide(string characters)
public static string WatchPyramidFromAbove(string characters)
public static int CountVisibleCharactersOfThePyramid(string characters)
public static int CountAllCharactersOfThePyramid(string characters)

The first method ("FromTheSide") shows the pyramid as you would see from the side.
The second method ("FromAbove") shows the pyramid as you would see from above.
The third method ("CountVisibleCharacters") should return the count of all characters, that are visible from outside 
the pyramid.
The forth method ("CountAllCharacters") should count all characters of the pyramid. Consider that the pyramid is 
completely solid and has no holes or rooms in it.

Every character will be used for building one layer of the pyramid. So the length of the given string will be the 
height of the pyramid. Every layer will be built with stones from the given character. There is no limit of stones.
The pyramid should have perfect angles of 45 degrees.

Example: Given string: "abc"
Pyramid from the side:
  c
 bbb
aaaaa
Pyramid from above:
aaaaa
abbba
abcba
abbba
aaaaa
Count of visible stones/characters: 25
Count of all used stones/characters: 35

There is no meaning in the order or the choice of the characters. It should work the same for example "aaaaa" or "54321".
Hint: Your output for the side must always be a rectangle! So spaces at the end of a line must not be deleted or trimmed!
If the string is null or empty, you should exactly return this value for the watch-methods and -1 for the count-methods.
*/

export function watchPyramidFromTheSide(
  characters: string | null
): string | null {
  if (!characters) {
    return characters;
  }

  const height = characters.length;
  const width = 2 * height - 1;
  const lines = [];

  for (let i = 0; i < height; i++) {
    const char = characters[height - 1 - i];
    const count = 2 * i + 1;
    const padding = " ".repeat(height - 1 - i);
    lines.push(padding + char.repeat(count) + padding);
  }

  return lines.join("\n");
}

export function watchPyramidFromAbove(
  characters: string | null
): string | null {
  if (!characters) {
    return characters;
  }

  const n = characters.length;
  const size = 2 * n - 1;
  const grid: string[][] = Array.from({ length: size }, () =>
    Array(size).fill("")
  );

  for (let layer = 0; layer < n; layer++) {
    const char = characters[layer];
    for (let i = layer; i < size - layer; i++) {
      grid[layer][i] = char; // top
      grid[size - layer - 1][i] = char;
      grid[i][layer] = char; // left
      grid[i][size - layer - 1] = char;
    }
  }

  return grid.map((row) => row.join("")).join("\n");
}

export function countVisibleCharactersOfThePyramid(
  characters: string | null
): number {
  if (!characters) {
    return -1;
  }

  const size = 2 * characters.length - 1;
  return size * size;
}

export function countAllCharactersOfThePyramid(
  characters: string | null
): number {
  if (!characters) {
    return -1;
  }

  const n = characters.length;
  let total = 0;

  for (let i = 0; i < n; i++) {
    const size = 2 * (i + 1) - 1;
    total += size * size;
  }

  return total;
}
