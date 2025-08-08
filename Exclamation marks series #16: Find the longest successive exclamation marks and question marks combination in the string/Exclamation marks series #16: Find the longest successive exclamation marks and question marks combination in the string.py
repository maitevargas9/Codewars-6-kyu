'''
Description

Find the longest successive exclamation marks and question marks combination in the string. 
A successive exclamation marks and question marks combination must contains two part: a 
substring of "!" and a substring "?", they are adjacent.

If more than one result are found, return the one which at left side; If no such a combination found, return "".

Examples
find("!!") === ""
find("!??") === "!??"
find("!?!!") === "?!!"
find("!!???!????") === "!!???"
find("!!???!?????") === "!?????"
find("!????!!!?") === "????!!!" 
find("!?!!??!!!?") === "??!!!"
'''

def find(s):
    t = ''
    
    for el in s:
        if t == '' or t[-1] == el:
            t += el
        else:
            t += " " + el
    
    t = t.split(' ')
    
    if len(t) == 1:
        return ""
    
    m = len(t[0]) + len(t[1])
    ind = 0
    
    for i in range(1, len(t) - 1):
        if len(t[i]) + len(t[i + 1]) > m:
            m = len(t[i]) + len(t[i + 1])
            ind = i
            
    return t[ind] + t[ind + 1]