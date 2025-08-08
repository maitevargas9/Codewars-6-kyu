'''
Description

Write a function that removes all odd number continuous exclamation marks and question marks in a string, 
repeat this operation until no continuous exclamation marks and question marks of odd length exist.

Please note: One exclamation mark or question mark is not continuous exclamation marks or question marks.

The string contains only ! and ?.

Examples
"" --> ""
"!" --> "!"
"!!" --> "!!"
"!!!" --> ""
"!??" --> "!??"
"!???" --> "!"
"!!!??" --> "??"
"!!!???" --> ""
"!???!!" --> "!!!" --> ""
"!????!!!?" --> "!?????" --> "!"
'''

import re

def remove(inp):
    while True:
        next = re.sub(r'!{3,}|\?{3,}', lambda m: "" if len(m.group(0)) % 2 == 1 else m.group(0), inp)
        if next == inp: break
        inp = next
    return next