-- Description
-- Checkerboard Resolution
-- In this kata we will be counting the the black squares on a special checkerboard. It is special because it has a resolution which 
-- determines how the black and white squares are laid out.
-- The resolution refers to the dimensions of squares of a single colour. See below for an example with dimensions 11x6:
-- With resolution = 1:
-- Number of black squares = 33
-- And now with resolution = 2:
-- Number of black squares = 32
-- And one more example, resolution = 5:
-- Number of black squares = 31
-- Credit to awesomead for the pretty images!
-- As you may have noticed the top left square is always white, and we are counting the individual black squares on the board.
-- Task
-- You are required to write a function that will take in three parameters:
-- width -> The width of the board
-- height -> The height of the board
-- resolution -> The size of the coloured squares on the checkerboard (as shown above)
-- And returns the total count of all individual black squares.
-- Additional Info
-- All inputs will be valid
-- 0 <= width <= 10**32
-- 0 <= height <= 10**32
-- 1 <= resolution <= 10**32
-- Good luck!
-- write your SQL statement here: 
-- you are given a table 'checkerboard' with columns 'w' (width), 'h' (height), 'r' (resolution)
-- all types are BigInt, so the limits in SQL are not as high as in other languages
-- return a table with these columns and your result in a column named 'res'.

SELECT
  w, h, r,
  (
    r * r * (((w/r+1)/2) * (h/r/2) + (w/r/2) * ((h/r+1)/2))
    + (w%r) * r  * (CASE WHEN (w/r)%2=1 THEN (h/r+1)/2 ELSE h/r/2 END)
    + r * (h%r)  * (CASE WHEN (h/r)%2=1 THEN (w/r+1)/2 ELSE w/r/2 END)
    + (w%r)*(h%r)* (CASE WHEN ((w/r)+(h/r))%2=1 THEN 1 ELSE 0 END)
  ) AS res
FROM checkerboard;