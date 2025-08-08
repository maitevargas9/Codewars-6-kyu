/*
Description

Find the longest successive exclamation marks and question marks combination in the string. A successive exclamation marks 
and question marks combination must contains two part: a substring of "!" and a substring "?", they are adjacent.

If more than one result are found, return the one which at left side; If no such a combination found, return "".

Examples
find("!!") === ""
find("!??") === "!??"
find("!?!!") === "?!!"
find("!!???!????") === "!!???"
find("!!???!?????") === "!?????"
find("!????!!!?") === "????!!!" 
find("!?!!??!!!?") === "??!!!"

Note
Please don't post issue about difficulty or duplicate.
*/

function find(s) {
  let t = "";

  for (let el of s) {
    if (t === "" || t[t.length - 1] === el) {
      t += el;
    } else {
      t += " " + el;
    }
  }

  t = t.split(" ");
  if (t.length === 1) {
    return "";
  }

  let m = t[0].length + t[1].length;
  let ind = 0;

  for (let i = 1; i < t.length - 1; i++) {
    if (t[i].length + t[i + 1].length > m) {
      m = t[i].length + t[i + 1].length;
      ind = i;
    }
  }

  return t[ind] + t[ind + 1];
}
