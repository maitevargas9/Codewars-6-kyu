-- Description
-- Task
-- There's a wolf who lives in the plane forest, which is located on the Cartesian coordinate system. When going on the hunt, 
-- the wolf starts at point (0, 0) and goes spirally.
-- The wolf finally found something to eat at point (x, y). Your task is to calculate the number of turns he had to make to get to that point.
-- Input/Output
-- [input] integer x
-- x coordinate of the final point.
-- -1000000 ≤ x ≤ 1000000
-- [input] integer y
-- y coordinate of the final point.
-- -1000000 ≤ y ≤ 1000000
-- [output] an integer
-- The number of turns.
-- Example
-- For x = 1 and y = 1, the output should be 1.
-- Path:(0,0) --> (1,0) --> (1,1), 1 turn at (1,0)
-- For x = 1 and y = -1, the output should be 4.
-- Path:(0,0) --> (1,0) --> (1,1) --> (-1,1) --> (-1,-1) --> (1,-1),
-- 4 turns at (1,0), (1,1), (-1,1), (-1,-1)
-- write your SQL statement here:
-- you are given a table 'turns_on_road' with columns 'x' and 'y'
-- all types are BigInt
-- return a table with these columns and your result in a column named 'res'.
SELECT
  x,
  y,
  CASE
    WHEN x = 0
    AND y = 0 THEN 0
    ELSE 4 * (GREATEST (ABS(x), ABS(y)) - 1) + CASE
      WHEN x = GREATEST (ABS(x), ABS(y))
      AND y > - (GREATEST (ABS(x), ABS(y)) - 1) THEN 1
      WHEN y = GREATEST (ABS(x), ABS(y))
      AND x < GREATEST (ABS(x), ABS(y)) THEN 2
      WHEN x = - GREATEST (ABS(x), ABS(y))
      AND y < GREATEST (ABS(x), ABS(y)) THEN 3
      WHEN y = - GREATEST (ABS(x), ABS(y))
      AND x > - GREATEST (ABS(x), ABS(y)) THEN 4
      ELSE 0
    END
  END AS res
FROM
  turns_on_road;