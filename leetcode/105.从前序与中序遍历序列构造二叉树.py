#
# @lc app=leetcode.cn id=105 lang=python3
#
# [105] 从前序与中序遍历序列构造二叉树
#
# https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
#
# algorithms
# Medium (71.24%)
# Likes:    2225
# Dislikes: 0
# Total Accepted:    588.4K
# Total Submissions: 824.6K
# Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
#
# 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder
# 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
# 
# 
# 
# 示例 1:
# 
# 
# 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
# 输出: [3,9,20,null,null,15,7]
# 
# 
# 示例 2:
# 
# 
# 输入: preorder = [-1], inorder = [-1]
# 输出: [-1]
# 
# 
# 
# 
# 提示:
# 
# 
# 1 <= preorder.length <= 3000
# inorder.length == preorder.length
# -3000 <= preorder[i], inorder[i] <= 3000
# preorder 和 inorder 均 无重复 元素
# inorder 均出现在 preorder
# preorder 保证 为二叉树的前序遍历序列
# inorder 保证 为二叉树的中序遍历序列
# 
# 
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        def buildTreeImpl(preorder, inorder):
            if not preorder or not inorder:
                return None
            root = TreeNode(preorder[0])
            # 找到根节点在中序遍历中的索引
            root_index_in_inorder = inorder.index(preorder[0])
            
            # 切分中序遍历数组
            inorder_left = inorder[:root_index_in_inorder]
            inorder_right = inorder[root_index_in_inorder + 1:]
            
            # 切分前序遍历数组
            preorder_left = preorder[1:1 + len(inorder_left)]
            preorder_right = preorder[1 + len(inorder_left):]
            
            # 递归构造左右子树
            root.left = buildTreeImpl(preorder_left, inorder_left)
            root.right = buildTreeImpl(preorder_right, inorder_right)
            return root
        
        return buildTreeImpl(preorder, inorder)
# @lc code=end

