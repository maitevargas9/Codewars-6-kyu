-- Description
-- Georg Cantor's in one of his proofs used following sequence:
-- 1/1 1/2 1/3 1/4 1/5 ... 
-- 2/1 2/2 2/3 2/4 ...
-- 3/1 3/2 3/3 ... 
-- 4/1 4/2 ... 
-- 5/1 ... 
-- There are many ways to order those expressions.
-- So sequence is:
-- 1/1, 1/2, 2/1, 3/1, 2/2, 1/3, 1/4 ...
-- Your task is to return nth element of this sequence.
-- Input: n - positive integer (max 268435455)
-- Output: string - nth expression of sequence - 'a/b' where a and b are integers.
-- write your SQL statement here: 
-- you are given a table 'cantor' with column 'n'
-- return a table with this column and your result in a column named 'res'.

SELECT
  n,
  CASE
    WHEN d % 2 = 0
      THEN pos::TEXT || '/' || (d - pos + 1)::TEXT
    ELSE (d - pos + 1)::TEXT || '/' || pos::TEXT
  END AS res
FROM (
  SELECT
    n,
    CEIL((-1 + SQRT(1 + 8*n)) / 2)::INT AS d,
    n - ((CEIL((-1 + SQRT(1 + 8*n)) / 2)::INT - 1) *
         CEIL((-1 + SQRT(1 + 8*n)) / 2)::INT / 2) AS pos
  FROM cantor
) t;