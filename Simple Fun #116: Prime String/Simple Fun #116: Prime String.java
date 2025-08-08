/*
Description

Task
The string is called prime if it cannot be constructed by concatenating some (more than one) equal strings together.
For example, "abac" is prime, but "xyxy" is not("xyxy"="xy"+"xy").
Given a string determine if it is prime or not.

Input/Output
[input] string s
string containing only lowercase English letters
[output] a boolean value
true if the string is prime, false otherwise
*/

public class Kata {

  public static boolean primeString(String s) {
    int len = s.length();
    for (int i = 1; i <= len / 2; i++) {
      if (len % i == 0) {
        String sub = s.substring(0, i);
        StringBuilder repeated = new StringBuilder();
        for (int j = 0; j < len / i; j++) {
          repeated.append(sub);
        }
        if (repeated.toString().equals(s)) {
          return false;
        }
      }
    }
    return true;
  }
}
