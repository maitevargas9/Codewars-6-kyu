-- Description
-- In mathematics, a Diophantine equation is a polynomial equation, usually in two or more unknowns, such that only the integer solutions 
-- are sought or studied.
-- the task is to find the number of pairs of x and y are
-- x^2 + y^3 = n  which n <= 1e+18 x >= 0 y >= 0
-- Examples:
-- DEquations.Solve(9) => return 2;
-- DEquations.Solve(10000000000000000000) => return 1;
-- write your SQL statement here: 
-- you are given a table 'dequations' with column 'n'
-- return a table with:
-- this column and your result in a column named 'res'
-- ordered ascending by 'n'
-- distinct results (remove duplicates)

WITH RECURSIVE
nums AS (
  SELECT DISTINCT n FROM dequations
),
cubes(n, y, y3) AS (
  SELECT n, 0::NUMERIC, 0::NUMERIC FROM nums
  UNION ALL
  SELECT n, y + 1, (y+1)*(y+1)*(y+1)
  FROM cubes
  WHERE (y+1)*(y+1)*(y+1) <= n
),
checks AS (
  SELECT
    n,
    n - y3 AS rem,
    ROUND(SQRT((n - y3)::FLOAT8))::NUMERIC AS sx
  FROM cubes
),
verified AS (
  SELECT n,
    COUNT(*) FILTER (
      WHERE (sx-1)*(sx-1) = rem
         OR sx*sx = rem
         OR (sx+1)*(sx+1) = rem
    ) AS res
  FROM checks
  GROUP BY n
)
SELECT n, res
FROM verified
ORDER BY n;