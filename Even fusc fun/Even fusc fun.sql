-- Description
-- A fusc function is defined as:
-- fusc(1) = 1
-- fusc(2n) = fusc(n)
-- fusc(2n+1) = fusc(n) + fusc(n+1)
-- We are interested in the next closest number m such that m >= n and fusc(m) % 2 == 0.
-- Input: n > 0
-- For example the fusc sequence up to 6th element is:
-- [1 1 2 1 3 2]
-- Examples:
-- closestEvenFusc(1) = 3
-- closestEvenFusc(2) = 3
-- closestEvenFusc(3) = 3
-- closestEvenFusc(4) = 6
-- write your SQL statement here: 
-- you are given a table 'closest_even_fusc' with column 'n'
-- return this column and your result in a column named 'm'
-- order results by 'n' ascending

WITH RECURSIVE
input AS (SELECT DISTINCT n FROM closest_even_fusc),
candidates AS (
  SELECT n, n AS m FROM input
  UNION ALL
  SELECT c.n, c.m + 1
  FROM candidates c
  WHERE c.m - c.n < 6
    AND NOT (
      WITH RECURSIVE fusc(a, b, k) AS (
        SELECT 1::BIGINT, 0::BIGINT, c.m
        UNION ALL
        SELECT
          CASE WHEN k % 2 = 0 THEN a ELSE a + b END,
          CASE WHEN k % 2 = 0 THEN a + b ELSE a END,
          k / 2
        FROM fusc WHERE k > 0
      )
      SELECT a % 2 = 0 FROM fusc WHERE k = 0
    )
)
SELECT n,
  CASE WHEN n % 3 = 0 THEN n
       ELSE n + (3 - n % 3)
  END AS m
FROM closest_even_fusc
ORDER BY n;