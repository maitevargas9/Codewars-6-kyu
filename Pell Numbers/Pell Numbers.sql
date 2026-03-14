-- Description
-- The Pell sequence is the sequence of integers defined by the initial values
-- P(0) = 0, P(1) = 1
-- and the recurrence relation
-- P(n) = 2 * P(n-1) + P(n-2)
-- The first few values of P(n) are
-- 0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, ..
-- Task
-- Your task is to return the nth Pell number
-- write your SQL statement here: 
-- you are given a table 'pell' with column 'n'.
-- return a table with:
-- this column and your result in a column named 'res'
-- ordered ascending by 'n'
-- distinct results (remove duplicates)

WITH RECURSIVE seq AS (
    SELECT 0 AS i, 0::BIGINT AS p0, 1::BIGINT AS p1
    UNION ALL
    SELECT i + 1,
           p1 AS p0,
           2 * p1 + p0 AS p1
    FROM seq
    WHERE i < (SELECT MAX(n) FROM pell)
)
SELECT DISTINCT p.n, seq.p0 AS res
FROM pell p
JOIN seq ON seq.i = p.n - 1
ORDER BY p.n;