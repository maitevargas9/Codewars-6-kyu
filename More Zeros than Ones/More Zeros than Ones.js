/*
Description

Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) 
containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order 
in the final array as they first appeared in the input string.

Examples
'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']

All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/

function moreZeros(s) {
  const result = [];
  const seen = new Set();

  for (let char of s) {
    const ascii = char.charCodeAt(0);
    const binary = ascii.toString(2);

    const ones = binary.split("1").length - 1;
    const zeros = binary.split("0").length - 1;

    if (zeros > ones && !seen.has(char)) {
      result.push(char);
      seen.add(char);
    }
  }

  return result;
}
