/*
Description

Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a 
dash mark.

Ex:
274 -> '2-7-4'
6815 -> '68-1-5'
*/

export function dashatize(num: number): string {
  return num
    .toString()
    .replace(/([13579])/g, "-$1-")
    .replace(/\-+/g, "-")
    .replace(/^\-/, "")
    .replace(/\-$/, "");
}
