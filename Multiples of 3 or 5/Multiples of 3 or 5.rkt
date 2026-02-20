#|
Description

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If a number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
|#

#lang racket

(provide solution)

(define (solution n)
  (for/sum ([i (in-range n)]
            #:when (or (zero? (remainder i 3))
                       (zero? (remainder i 5))))
    i))