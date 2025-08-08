<?php 
/*
Description

Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - 
are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return 
"Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(string $l, string $r): string {
  $l = array_sum(str_split(str_replace(['!', '?'], ['2,','3,'], $l)));
  $r = array_sum(str_split(str_replace(['!', '?'], ['2,','3,'], $r)));
  return $l > $r ? 'Left' : ($l == $r ? 'Balance' : 'Right');
}
?>