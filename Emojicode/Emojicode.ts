/*
Description

In this challenge, you have to create two functions to convert an emoji string to the "emojicode" format, and back.

Emoji strings consist solely of Unicode emojis, and each of the emojis can be represented with a single Unicode code point. 
There is no combining characters, variant selectors, joiners, direction modifiers, color modifiers, groups of people, or any 
other emojis which consist of more than a single code point.

Emojicode string is a string of space separated code points of Unicode emojis. Every code point is formatted as its decimal 
value, stringified into a sequence of Unicode emoji keycap digits.

Examples
The emoji "SMILING FACE WITH SMILING EYES" 😊 is encoded as U+1F60A. The decimal value of its code point is 128522. After 
converting the value to a string and using emoji keycaps for digits, the emojicode is "1️⃣2️⃣8️⃣5️⃣2️⃣2️⃣".
The three emojis SEE-/HEAR-/SPEAK-NO-EVIL MONKEY are represented by code points U+1F648, U+1F649, and U+1F64A, which are 
decimal 128584, 128585 and 128586, respectively. Therefore, the string "🙈🙉🙊" after conversion to emojicode results in 
"1️⃣2️⃣8️⃣5️⃣8️⃣4️⃣ 1️⃣2️⃣8️⃣5️⃣8️⃣5️⃣ 1️⃣2️⃣8️⃣5️⃣8️⃣6️⃣".

Tests size
At the moment of the writing, Unicode Emoji Standard includes ~1380 emojis which can be represented with a single Unicode code 
point (see References below). Each of these emojis is tested at least once for conversion in both directions, with fixed tests. 
Additionally, small random tests check 50 strings of 1-5 emojis and 200 strings of 20-50 emojis, for conversion in both 
directions.

References
List of Unicode emojis
*/

export function toEmojicode(emojis: string): string {
  return [...emojis]
    .map((x) => `${x.codePointAt(0)}`.replace(/./g, (n) => `${n}\uFE0F\u20E3`))
    .join(" ");
}

export function toEmojis(emojicode: string): string {
  return emojicode
    .split(" ")
    .map((x) => String.fromCodePoint(+x.split("\uFE0F\u20E3").join("")))
    .join("");
}
