#
# @lc app=leetcode id=886 lang=python3
#
# [886] Possible Bipartition
#

# @lc code=start
class Solution:
    def possibleBipartition(self, n: int, dislikes: list[list[int]]) -> bool:
        return True


class bi_graph:
    node = 0
    edges = []
    graph = []
    coloer = []

    def __init__(self,n,edge_list):
        self.node = n
        self.edges = edge_list
        self.color = [0]*n
    
    def create_graph(self):
        for i in range(self.node):
            self.graph.append([])
            for j in range(len(self.edges)):
                self.graph[i].append(0)
    
    def generate_color_graph(self):
        for i in range(len(self.edges)):
            self.graph[self.edges[i][0]-1][i] = 1
            self.graph[self.edges[i][1]-1][i] = 1

    def dfs(self, node:int, c:int)->bool:
        return 

    def check_if_can_be_bipartied(self):
        

test = bi_graph(3,[[1,2],[1,3],[1,3]])
test.create_graph()
test.generate_color_graph()
print(test.graph)
print(test.check_if_can_be_bipartied())
