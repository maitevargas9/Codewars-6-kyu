#|
Description

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string. The input string can be assumed to 
contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice
|#

#lang racket
(provide duplicate-count)

(define (duplicate-count xs)
  (define chars (string->list (string-downcase xs)))
  (define counts (make-hash))
  
  (for ([c chars])
    (hash-set! counts c (add1 (hash-ref counts c 0))))
  
  (for/sum ([v (in-hash-values counts)])
    (if (> v 1) 1 0)))