import numpy as np
# graph:
# 0 - 1 - 2
# |   \
# 3     4
#  \   /
#    5
adjMatrix = [
    [0, 1, 0, 3, 0, 0],
    [0, 0, 2, 0, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0]
]


def dijkstra(adjMatrix):
    pred = [-1]*len(adjMatrix)

    dist = [99999]*len(adjMatrix)
    visited = [False] * len(adjMatrix)
    dist[0] = 0
    for i, row in enumerate(adjMatrix):
        visited[i] = True
        for e, v in enumerate(row):
            if visited[e]:
                continue
            if v != 0:
                if dist[e] > v+dist[i]:
                    dist[e] = v + dist[i]
                    pred[e] = i
    path = []
    i = len(adjMatrix)-1
    while i != 0:
        path += [pred[i]]
        i = pred[i]
    path.reverse()
    path += [len(adjMatrix)-1]
    return dist[len(adjMatrix)-1], path


print(dijkstra(adjMatrix))
