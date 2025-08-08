'''
Description

Replace the pair of exclamation marks and question marks to spaces(from the left to the right). 
A pair of exclamation marks and question marks must has the same number of "!" and "?".

That is: "!" and "?" is a pair; "!!" and "??" is a pair; "!!!" and "???" is a pair; and so on..

Examples
replace("!!") === "!!"
replace("!??") === "!??"
replace("!?") === "  "
replace("!!??") === "    "
replace("!!!????") === "!!!????"
replace("!??!!") === "!    "
replace("!????!!!?") === " ????!!! " 
replace("!?!!??!!!?") === "      !!!?"
'''

import re

def replace(s):
    arr = re.findall('!+|\?+', s)
    for i in range(len(arr) - 1):
        if arr[i][0] != ' ' and (j := next((j for j in range(i + 1, len(arr)) if arr[i][0] != arr[j][0] != ' ' and len(arr[i]) == len(arr[j])), -1)) != -1:
            arr[i] = arr[j] = ' ' * len(arr[i])
    return ''.join(arr)