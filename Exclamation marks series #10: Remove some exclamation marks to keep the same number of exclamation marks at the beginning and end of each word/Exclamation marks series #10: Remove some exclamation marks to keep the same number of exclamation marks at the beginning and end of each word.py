'''
Description

Remove the minimum number of exclamation marks from the start/end of each word in the sentence to 
make their amount equal on both sides.

Notes:
Words are separated with spaces
Each word will include at least 1 letter
There will be no exclamation marks in the middle of a word

Examples
remove("Hi!") === "Hi"
remove("!Hi! Hi!") === "!Hi! Hi"
remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
'''

def remove(s):
    s = s.split()
    res = []
    for i in s:
        x = len(i) - len(i.lstrip('!'))
        y = len(i) - len(i.rstrip('!'))
        res.append(min(x, y) * '!' + i.strip('!') + min(x, y) * '!')
    return ' '.join(res)