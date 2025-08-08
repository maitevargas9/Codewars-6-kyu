<?php 
/*
Description

Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make 
their amount equal on both sides.

Notes:
Words are separated with spaces
Each word will include at least 1 letter
There will be no exclamation marks in the middle of a word

Examples
remove("Hi!") === "Hi"
remove("!Hi! Hi!") === "!Hi! Hi"
remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
*/

function remove(string $s): string {
  return implode(' ', array_map(function($w) {
    preg_match('/^!+/', $w, $startMatch);
    preg_match('/!+$/', $w, $endMatch);
    $startEx = isset($startMatch[0]) ? strlen($startMatch[0]) : 0;
    $endEx = isset($endMatch[0]) ? strlen($endMatch[0]) : 0;
    $word = preg_replace('/(^!+)|(!+$)/', '', $w);
    $preservedEx = str_repeat('!', min($startEx, $endEx));
    return $preservedEx . $word . $preservedEx;
  }, explode(' ', $s)));
}
?>