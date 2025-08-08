/*
Description

Remove odd number continuous exclamation marks and question marks(from the left to the right), until no continuous 
exclamation marks and question marks exist. Please note: One exclamation mark or question mark is not a continuous 
exclamation marks or question marks. The string only contains ! and ?.

Examples
remove("") === ""
remove("!") === "!"
remove("!!") === "!!"
remove("!!!") === ""
remove("!??") === "!??"
remove("!???") === "!"
remove("!!!??") === "??"
remove("!!!???") === ""
remove("!??") === "!??"
remove("!???!!") === ""
("!???!!" --> "!!!" --> "")
remove("!????!!!?") === "!"
("!????!!!?" --> "!?????" --> "!")

Note
Please don't post issue about difficulty or duplicate.
*/

function remove(s) {
  while ((s.match(/(.)\1{2,}/g) || []).some((l) => l.length % 2)) {
    s = s
      .match(/(.)\1*/g)
      .filter((x) => x.length < 3 || !(x.length % 2))
      .join("");
  }
  return s;
}
