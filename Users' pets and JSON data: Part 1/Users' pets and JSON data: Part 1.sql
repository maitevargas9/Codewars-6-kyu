-- Description
-- You have been provided with a PostgreSQL table named users. This table includes a jsonb column, info, which holds JSON data. 
-- Here is a simplified schema of the table:
-- id: primary key, integer.
-- info: JSON column which includes:
-- name: a string (user's name).
-- pets: an array of JSON objects (each object represents a pet and has a name field and type field).
-- Your task is to construct a SQL query that will return a list of users and their pet names, but only for pets whose name starts with the 
-- letter M. If a user has no such pets, the user should not appear in the result table.
-- The query should return the following columns:
-- id - the users id
-- user_name - the user's name
-- pet_names - the names of the pets whose names start with 'M' as a comma-separated list in the order that they appeared in the array.
-- Result should be ordered by id in asc order.
-- Good luck!
-- Desired Output
-- The desired output should look like this:
--   id  | user_name       | pet_names        |
-- ------+-----------------|------------------|
--   15  | Kelley Ebert    | Moriah           |
--   16  | Hayley Schiller | Micheal, Magaret |
-- ...
SELECT
  u.id,
  u.info - > > 'name' AS user_name,
  STRING_AGG (
    pet - > > 'name',
    ', '
    ORDER BY
      ord
  ) AS pet_names
FROM
  users u
  CROSS JOIN LATERAL jsonb_array_elements (u.info - > 'pets')
WITH
  ORDINALITY AS p (pet, ord)
WHERE
  pet - > > 'name' LIKE 'M%'
GROUP BY
  u.id,
  user_name
ORDER BY
  u.id ASC;