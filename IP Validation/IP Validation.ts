/*
Description

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:

Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

export function isValidIP(str: string): boolean {
  const parts = str.split(".");

  if (parts.length !== 4) {
    return false;
  }

  for (const part of parts) {
    if (!/^\d+$/.test(part)) {
      return false;
    }

    if (part.length > 1 && part.startsWith("0")) {
      return false;
    }

    const num = Number(part);

    if (num < 0 || num > 255) {
      return false;
    }
  }

  return true;
}
