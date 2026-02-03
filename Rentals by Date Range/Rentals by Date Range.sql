-- Description
-- The owner of a DVD rental store is curious to know which dates in May and June 2005 had the most rentals. 
-- Write a query to generate a list of dates between May 24th and June 2nd (inclusive), 2005 and counts the number 
-- of rentals on each date. The query should return a result set with two columns: date and rentals. The date column 
-- should be formatted as 'YYYY-MM-DD'. The rentals column should contain the number of rentals that occurred on that date.
-- Notes:
-- If there are no rentals, you need to display 0 for that day, not to avoid that day
-- The result set should be sorted by date in ascending order
-- for the sample tests, static dump of DVD Rental Sample Database is used, for the final solution - random tests.
-- Schema
-- rental table:
-- Column       | Type      | Modifiers
-- -------------+-----------+----------
-- rental_id    | integer   | not null
-- customer_id  | integer   | not null
-- inventory_id | integer   | not null
-- rental_date  | timestamp | not null
-- return_date  | timestamp | 
-- Desired Output
-- The desired output should look like this:
-- date         |  rentals
-- -------------+---------------+
-- 2005-05-24   | 38            |
-- 2005-05-25   | 29            | 
-- ...
SELECT
  TO_CHAR (d.day, 'YYYY-MM-DD') AS date,
  COUNT(r.rental_id) AS rentals
FROM
  generate_series (
    DATE '2005-05-24',
    DATE '2005-06-02',
    INTERVAL '1 day'
  ) AS d (day)
  LEFT JOIN rental r ON DATE (r.rental_date) = d.day
GROUP BY
  d.day
ORDER BY
  d.day ASC;