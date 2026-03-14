-- Description
-- The Padovan sequence is the sequence of integers defined by the initial values
-- P(0) = P(1) = P(2) = 1
-- and the recurrence relation
-- P(n) = P(n-2) + P(n-3)
-- The first few values of P(n) are:
-- 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151, 200, 265, ...
-- Task
-- Your task is to write a method that returns nth Padovan number
-- write your SQL statement here: 
-- you are given a table 'padovan' with column 'n'.
-- return a table with:
-- this column and your result in a column named 'res'
-- ordered ascending by 'n'
-- distinct results (remove duplicates)

WITH RECURSIVE seq AS (
    SELECT 0 AS i, 1::BIGINT AS p0, 1::BIGINT AS p1, 1::BIGINT AS p2
    UNION ALL
    SELECT i + 1,
           p1 AS p0,
           p2 AS p1,
           p0 + p1 AS p2
    FROM seq
    WHERE i < (SELECT MAX(n) FROM padovan)
)
SELECT DISTINCT p.n, 
       CASE 
           WHEN p.n = 0 THEN 1
           WHEN p.n = 1 THEN 1
           WHEN p.n = 2 THEN 1
           ELSE seq.p2
       END AS res
FROM padovan p
LEFT JOIN seq ON seq.i = p.n - 3
ORDER BY p.n;