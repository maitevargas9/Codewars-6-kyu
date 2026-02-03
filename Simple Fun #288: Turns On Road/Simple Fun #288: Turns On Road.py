'''
Description

Task
There's a wolf who lives in the plane forest, which is located on the Cartesian coordinate system. When going on the hunt, 
the wolf starts at point (0, 0) and goes spirally.

The wolf finally found something to eat at point (x, y). Your task is to calculate the number of turns he had to make to get to that point.

Input/Output
[input] integer x
x coordinate of the final point.
-1000000 ≤ x ≤ 1000000
[input] integer y
y coordinate of the final point.
-1000000 ≤ y ≤ 1000000
[output] an integer
The number of turns.

Example
For x = 1 and y = 1, the output should be 1.
Path:(0,0) --> (1,0) --> (1,1), 1 turn at (1,0)
For x = 1 and y = -1, the output should be 4.
Path:(0,0) --> (1,0) --> (1,1) --> (-1,1) --> (-1,-1) --> (1,-1),
4 turns at (1,0), (1,1), (-1,1), (-1,-1)
'''

def turns_on_road(x, y):
    if x == 0 and y == 0:
        return 0

    n = max(abs(x), abs(y))
    base = 4 * (n - 1)

    if x == n and y > -(n - 1):
        return base + 1 
    if y == n and x < n:
        return base + 2 
    if x == -n and y < n:
        return base + 3
    if y == -n and x > -n:
        return base + 4

    return base