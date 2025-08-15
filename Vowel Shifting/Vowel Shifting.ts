/*
Description

You get a text and have to shift the vowels by n positions to the right. (Negative value for n should 
shift to the left.)

Position means the vowel's position if taken as one item in a list of all vowels within the string.

A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Vowels are "aeiou" / "AEIOU".

If text is null or empty, then simply return back the original text.

Example:
text = "This is a test!"
n = 1
output = "Thes is i tast!"
text = "This is a test!"
n = 3
output = "This as e tist!"
*/

export function vowelShift(text: string | null, n: number): string | null {
  if (!text) {
    return text;
  }
  const chars = [...text];
  const vowelIdxs = chars
    .map((c, i) => ("aeiouAEIOU".includes(c) ? i : -1))
    .filter((i) => i >= 0);
  const vowels = vowelIdxs.map((i) => chars[i]);
  const len = vowels.length;
  vowelIdxs.forEach(
    (idx, i) => (chars[idx] = vowels[(i - (n % len) + len) % len])
  );
  return chars.join("");
}
