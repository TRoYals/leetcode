#
# @lc app=leetcode.cn id=86 lang=python3
#
# [86] 分隔链表
#
# https://leetcode.cn/problems/partition-list/description/
#
# algorithms
# Medium (64.58%)
# Likes:    831
# Dislikes: 0
# Total Accepted:    278.8K
# Total Submissions: 431.6K
# Testcase Example:  '[1,4,3,2,5,2]\n3'
#
# 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
#
# 你应当 保留 两个分区中每个节点的初始相对位置。
#
#
#
# 示例 1：
#
#
# 输入：head = [1,4,3,2,5,2], x = 3
# 输出：[1,2,2,4,3,5]
#
#
# 示例 2：
#
#
# 输入：head = [2,1], x = 2
# 输出：[1,2]
#
#
#
#
# 提示：
#
#
# 链表中节点的数目在范围 [0, 200] 内
# -100
# -200
#
#
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        returnPtr = ListNode(next=head)
        sub_list = ListNode()
        sub_curr = sub_list
        curr = returnPtr
        while curr.next:
            if curr.next.val >= x:
                sub_curr.next = curr.next
                sub_curr = sub_curr.next
                curr.next = curr.next.next
            else:
                curr = curr.next
        if sub_curr.next and sub_curr.next.val < x:
            sub_curr.next = None
        curr.next = sub_list.next
        return returnPtr.next
# @lc code=end
