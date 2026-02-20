-- Description
-- I love Fibonacci numbers in general, but I must admit I love some more than others.
-- I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.
-- For example:
-- nthFibo(4) == 2
-- Because 2 is the 4th number in the Fibonacci Sequence.
-- For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
-- write your SQL statement here: 
-- you are given a table 'fibo' with column 'n'.
-- return a table with:
-- this column and your result in a column named 'res'
-- ordered ascending by 'n'
-- distinct results (remove duplicates)

WITH RECURSIVE fib(seq_n, a, b) AS (
  SELECT 1::BIGINT, 0::BIGINT, 1::BIGINT
  UNION ALL
  SELECT seq_n + 1, b, a + b
  FROM fib
  WHERE seq_n < (SELECT MAX(n) FROM fibo)
)
SELECT DISTINCT f.n, fib.a AS res
FROM (SELECT DISTINCT n FROM fibo) f
JOIN fib ON fib.seq_n = f.n
ORDER BY f.n;