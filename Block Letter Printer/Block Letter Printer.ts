/*
Description

Write a function that accepts a string consisting only of ASCII letters and space(s) and returns that string in block letters of 5 characters 
width and 7 characters height, with one space between characters.

Rules
The block letters should consist of corresponding capital letters.
It's irrelevant whether input consists of lower or upper case letters.
Any leading and/or trailing spaces in input should be ignored.
Empty strings or such containing only spaces should return an empty string.
The remaining spaces (between letters and/or words) are to be treated as any other character. This means that there will be six spaces in 
output for a space in input, or a multiple of six, if there were more spaces - plus the one from preceding character!
Trailing spaces should be removed in the resulting string (and also in its' substrings!).
In order to facilitate debugging, test failure messages mangle the output: spaces are replaced with the bullet character U+2022, while 
end-of-line characters \n are visible.

Preloaded Map
To ease your work and reduce the amount of hardcoding in your solution, there is a preloaded map/dictionary named alpha / ALPHA (depending 
on your language) that associates a lowercase character (including the space character) to a collection of the 7 string segments that make 
up the character from top to bottom. See the initial code in your language for more details.

Example
The input string "heLLo WorLD" should result in an output that looks like this:

H   H EEEEE L     L      OOO        W   W  OOO  RRRR  L     DDDD
H   H E     L     L     O   O       W   W O   O R   R L     D   D
H   H E     L     L     O   O       W   W O   O R   R L     D   D
HHHHH EEEEE L     L     O   O       W W W O   O RRRR  L     D   D
H   H E     L     L     O   O       W W W O   O R R   L     D   D
H   H E     L     L     O   O       W W W O   O R  R  L     D   D
H   H EEEEE LLLLL LLLLL  OOO         W W   OOO  R   R LLLLL DDDD

As most of the characters can be printed in many different ways (think of Q, F or W), here is what they're expected to look like:

 AAA  BBBB   CCC  DDDD  EEEEE FFFFF  GGG  H   H IIIII JJJJJ K   K L     M   M N   N  OOO  PPPP   QQQ  RRRR   SSS  TTTTT U   U V   V W   W X   X Y   Y ZZZZZ
A   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     MM MM NN  N O   O P   P Q   Q R   R S   S   T   U   U V   V W   W X   X Y   Y     Z
A   A B   B C     D   D E     F     G     H   H   I       J K K   L     M M M N   N O   O P   P Q   Q R   R S       T   U   U V   V W   W  X X   Y Y     Z
AAAAA BBBB  C     D   D EEEEE FFFFF G GGG HHHHH   I       J KK    L     M   M N N N O   O PPPP  Q   Q RRRR   SSS    T   U   U V   V W W W   X     Y     Z
A   A B   B C     D   D E     F     G   G H   H   I       J K K   L     M   M N   N O   O P     Q Q Q R R       S   T   U   U V   V W W W  X X    Y    Z
A   A B   B C   C D   D E     F     G   G H   H   I       J K  K  L     M   M N  NN O   O P     Q  QQ R  R  S   S   T   U   U  V V  W W W X   X   Y   Z
A   A BBBB   CCC  DDDD  EEEEE F      GGG  H   H IIIII JJJJ  K   K LLLLL M   M N   N  OOO  P      QQQQ R   R  SSS    T    UUU    V    W W  X   X   Y   ZZZZZ
*/

import { alpha } from "./preloaded";

export function blockPrint(input: string): string {
  const trimmed = input.trim();

  if (!trimmed) {
    return "";
  }

  const chars = trimmed.toLowerCase().split("");
  const rows: string[] = [];

  for (let i = 0; i < 7; i++) {
    const lineParts: string[] = [];

    for (const ch of chars) {
      lineParts.push(alpha[ch][i]);
    }

    rows.push(lineParts.join(" ").replace(/\s+$/, ""));
  }

  return rows.join("\n");
}
