-- Description
-- Your task is to return the amount of white rectangles in a NxN spiral. Your font may differ, if we talk of white rectangles, 
-- we talk about the symbols in the top row.
-- Notes:
-- As a general rule, the white snake cannot touch itself.
-- The size will be at least 5.
-- The test cases get very large, it is not feasible to calculate the solution with a loop.
-- Examples
-- For example, a spiral with size 5 should look like this:
-- ⬜⬜⬜⬜⬜
-- ⬛⬛⬛⬛⬜
-- ⬜⬜⬜⬛⬜
-- ⬜⬛⬛⬛⬜
-- ⬜⬜⬜⬜⬜
-- And return the value 17 because the total amount of white rectangles is 17.
-- A spiral with the size 7 would look like this:
-- ⬜⬜⬜⬜⬜⬜⬜
-- ⬛⬛⬛⬛⬛⬛⬜
-- ⬜⬜⬜⬜⬜⬛⬜
-- ⬜⬛⬛⬛⬜⬛⬜
-- ⬜⬛⬜⬜⬜⬛⬜
-- ⬜⬛⬛⬛⬛⬛⬜
-- ⬜⬜⬜⬜⬜⬜⬜
-- And return the value 31 because the total amount of white rectangles is 31.
-- A spiral with the size 8 would look like this:
-- ⬜⬜⬜⬜⬜⬜⬜⬜
-- ⬛⬛⬛⬛⬛⬛⬛⬜
-- ⬜⬜⬜⬜⬜⬜⬛⬜
-- ⬜⬛⬛⬛⬛⬜⬛⬜
-- ⬜⬛⬜⬛⬛⬜⬛⬜
-- ⬜⬛⬜⬜⬜⬜⬛⬜
-- ⬜⬛⬛⬛⬛⬛⬛⬜
-- ⬜⬜⬜⬜⬜⬜⬜⬜
-- And return the value 39 because the total amount of white rectangles is 39.
-- A spiral with the size 9 would look like this:
-- ⬜⬜⬜⬜⬜⬜⬜⬜⬜
-- ⬛⬛⬛⬛⬛⬛⬛⬛⬜
-- ⬜⬜⬜⬜⬜⬜⬜⬛⬜
-- ⬜⬛⬛⬛⬛⬛⬜⬛⬜
-- ⬜⬛⬜⬜⬜⬛⬜⬛⬜
-- ⬜⬛⬜⬛⬛⬛⬜⬛⬜
-- ⬜⬛⬜⬜⬜⬜⬜⬛⬜
-- ⬜⬛⬛⬛⬛⬛⬛⬛⬜
-- ⬜⬜⬜⬜⬜⬜⬜⬜⬜
-- And return the value 49 because the total amount of white rectangles is 49.
-- A spiral with the size 10 would look like this:
-- ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
-- ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
-- ⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜
-- ⬜⬛⬛⬛⬛⬛⬛⬜⬛⬜
-- ⬜⬛⬜⬜⬜⬜⬛⬜⬛⬜
-- ⬜⬛⬜⬛⬛⬜⬛⬜⬛⬜
-- ⬜⬛⬜⬛⬛⬛⬛⬜⬛⬜
-- ⬜⬛⬜⬜⬜⬜⬜⬜⬛⬜
-- ⬜⬛⬛⬛⬛⬛⬛⬛⬛⬜
-- ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
-- And return the value 59 because the total amount of white rectangles is 59.
-- write your SQL statement here: 
-- you are given a table 'spiral' with column 'n'.
-- create a query with:
-- this column and your result in a column named 'res'
-- ordered ascending by 'n'
SELECT
  n,
  CAST(
    n * n - CEILING((n - 1) * (n - 1) / 2.0) AS BIGINT
  ) AS res
FROM
  spiral
ORDER BY
  n ASC;