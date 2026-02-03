/*
Description

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

using System;
using System.Collections.Generic;

public static class Kata
{
  public static string AlphabetPosition(string text)
  {
    var positions = new List<string>();

    foreach (char c in text.ToLower())
    {
      if (c >= 'a' && c <= 'z')
      {
        int pos = c - 'a' + 1;
        positions.Add(pos.ToString());
      }
    }

    return string.Join(" ", positions);
  }
}