/*
Description

Substitute two equal letters by the next letter of the alphabet (two letters convert to one):
"aa" => "b", "bb" => "c", .. "zz" => "a".
The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:
let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"

Notes
The order of letters in the result is not important.
The letters "zz" transform into "a".
There will only be lowercase letters.
*/

export function lastSurvivors(str: string): string {
  let chars = str.split("");

  while (true) {
    const freq: Record<string, number> = {};
    for (const c of chars) {
      freq[c] = (freq[c] || 0) + 1;
    }

    let changed = false;
    const nextChars: string[] = [];

    for (const [char, count] of Object.entries(freq)) {
      const pairs = Math.floor(count / 2);
      const leftovers = count % 2;

      if (pairs > 0) {
        changed = true;
      }

      if (leftovers > 0) {
        nextChars.push(char);
      }

      for (let i = 0; i < pairs; i++) {
        const nextChar = String.fromCharCode(
          ((char.charCodeAt(0) - 97 + 1) % 26) + 97
        );
        nextChars.push(nextChar);
      }
    }

    if (!changed) {
      break;
    }
    chars = nextChars;
  }

  return chars.sort().join("");
}
