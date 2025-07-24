from itertools import combinations

def rectangles(strings):
    return sum(1
        for vs in combinations(vertices(strings), 4)
        if is_rectangle(strings, vs)
    )

def vertices(strings):
    return [(i,j)
        for j,row in enumerate(strings)
        for i,ch in enumerate(row)
        if ch == '+'
    ]

def is_rectangle(strings, verts):
    top_left, bottom_left, top_right, bottom_right = sorted(verts)
    return all([
        h_edge(strings, top_left,    top_right),
        h_edge(strings, bottom_left, bottom_right),
        v_edge(strings, top_left,    bottom_left),
        v_edge(strings, top_right,   bottom_right),
    ])

def v_edge(strings, v1, v2):
    x1, y1 = v1
    x2, y2 = v2

    return x1 == x2 and y1 < y2 and all([
        strings[j][x1] in "+|"
        for j in range(y1, y2+1)
    ])

def h_edge(strings, v1, v2):
    x1, y1 = v1
    x2, y2 = v2

    return y1 == y2 and x1 < x2 and all([
        strings[y1][i] in "+-"
        for i in range(x1, x2+1)
    ])