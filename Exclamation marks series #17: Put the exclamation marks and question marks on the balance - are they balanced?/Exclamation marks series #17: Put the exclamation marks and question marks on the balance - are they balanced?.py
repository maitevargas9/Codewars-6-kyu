'''
Description

Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - 
are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, 
return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
'''

def balance(left, right):
    left_count = left.count("!")*2 + left.count("?")*3
    right_count = right.count("!")*2 + right.count("?")*3
    
    if (left_count > right_count):
     return "Left"
    elif (right_count>left_count):
     return "Right"
    else:
     return "Balance"