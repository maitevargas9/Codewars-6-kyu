/*
Description

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

export function cleanString(s: string): string {
  const result: string[] = [];

  for (const char of s) {
    if (char === "#") {
      result.pop();
    } else {
      result.push(char);
    }
  }

  return result.join("");
}
