# Description
# Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). 
# If the string contains an odd number of characters then it should replace the missing second character of the final pair with an 
# underscore ('_').
# Examples:
# * 'abc' =>  ['ab', 'c_']
# * 'abcdef' => ['ab', 'cd', 'ef'] 

solution <- function(s) {
  if (nchar(s) == 0) {
    return(NULL)
  }
  
  n <- nchar(s)
  
  if (n %% 2 == 1) {
    s <- paste0(s, "_")
    n <- n + 1
  }
  
  starts <- seq(1, n, by = 2)
  substring(s, starts, starts + 1)
}