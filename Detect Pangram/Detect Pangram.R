# Description
# A pangram is a sentence that contains every single letter of the alphabet at least once. 
# For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
# because it uses the letters A-Z at least once (case is irrelevant).
# Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
# Ignore numbers and punctuation.

is_pangram <- function(s) {
  all_letters <- letters
  s_letters <- tolower(s)
  s_letters <- unlist(strsplit(s_letters, ""))
  s_letters <- s_letters[s_letters %in% all_letters]
  return(all(all_letters %in% s_letters))
}