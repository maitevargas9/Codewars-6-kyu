/*
Description

Replace the pair of exclamation marks and question marks to spaces(from the left to the right).
A pair of exclamation marks and question marks must has the same number of "!" and "?".

That is: "!" and "?" is a pair; "!!" and "??" is a pair; "!!!" and "???" is a pair; and so on..

Examples
replace("!!") === "!!"
replace("!??") === "!??"
replace("!?") === "  "
replace("!!??") === "    "
replace("!!!????") === "!!!????"
replace("!??!!") === "!    "
replace("!????!!!?") === " ????!!! " 
replace("!?!!??!!!?") === "      !!!?"
*/

function replace(s) {
  const n = s.match(/(.)\1*/g) || [];
  for (let i = 0; i < n.length; i++) {
    if (!n[i].includes(" ")) {
      if (n[i].includes("!")) {
        const pairIndex = n.findIndex(
          (s) => s.length === n[i].length && s.includes("?")
        );
        if (pairIndex !== -1) {
          n[i] = " ".repeat(n[i].length);
          n[pairIndex] = " ".repeat(n[i].length);
        }
      }
    }
  }
  return n.join("");
}
