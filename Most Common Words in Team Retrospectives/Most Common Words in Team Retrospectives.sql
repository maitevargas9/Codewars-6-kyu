-- Description
-- Sprint retrospectives generate feedback. Some of it is actionable. Some of it is cathartic. Most of 
-- it is repeated several times in slightly different ways.
-- Management does not want to read all of it. They want to know what the team keeps talking about.
-- You are given two tables.
-- retro_comments:
-- id (int, primary key) — unique comment identifier
-- msg (text) — one retrospective comment
-- and stopwords:
-- word (varchar, primary key) — a word to ignore (stored in lowercase)
-- Task
-- Write an SQL query that returns the most frequent meaningful words across all retrospective comments.
-- Return one row per word with:
-- word (varchar)
-- freq (int)
-- Apply these rules:
-- Lowercase all comment text.
-- Tokenize each message into words by splitting on one or more characters that are not in [a-z0-9'/_-]. 
-- In other words: punctuation acts as a separator, except apostrophe, hyphen, underscore, and slash, which are allowed inside tokens.
-- Discard tokens shorter than 3 characters
-- Discard stopwords: remove any token that matches stopwords.word exactly.
-- Count occurrences of each remaining token across all rows in retro_comments.
-- Return the top 10 words by frequency. If fewer than 10 distinct words remain, return all of them.
-- Sort by freq descending then by word ascending
-- Ties may be cut (a simple LIMIT 10 is acceptable).
-- For this data:
-- retro_comments
-- | id | msg                                  |
-- +----+--------------------------------------+
-- |  1 | Build is broken again!!!             |
-- |  2 | Blocked by review.                   |
-- |  3 | Review takes forever.                |
-- |  4 | Slow build, slow tests.              |
-- |  5 | Build pipeline is slow.              |
-- |  6 | Review, review, review.              |
-- stopwords
-- | word   |
-- +--------+
-- | is     |
-- | by     |
-- | the    |
-- | again  |
-- | takes  |
-- Expected output is:
-- | word    | freq |
-- +---------+------+
-- | review  | 5    |
-- | build   | 3    |
-- | slow    | 3    |
-- | blocked | 1    |
-- | broken  | 1    |
-- | forever | 1    |
-- | pipeline| 1    |
-- | tests   | 1    |
WITH
  tokens AS (
    SELECT
      regexp_split_to_table (lower(msg), '[^a-z0-9''/_-]+') AS word
    FROM
      retro_comments
  )
SELECT
  t.word,
  COUNT(*) AS freq
FROM
  tokens t
  LEFT JOIN stopwords s ON t.word = s.word
WHERE
  t.word <> ''
  AND length (t.word) >= 3
  AND s.word IS NULL
GROUP BY
  t.word
ORDER BY
  freq DESC,
  t.word ASC
LIMIT
  10;