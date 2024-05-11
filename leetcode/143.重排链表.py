#
# @lc app=leetcode.cn id=143 lang=python3
#
# [143] 重排链表
#
# https://leetcode.cn/problems/reorder-list/description/
#
# algorithms
# Medium (66.17%)
# Likes:    1470
# Dislikes: 0
# Total Accepted:    316.3K
# Total Submissions: 477.7K
# Testcase Example:  '[1,2,3,4]'
#
# 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
#
#
# L0 → L1 → … → Ln - 1 → Ln
#
#
# 请将其重新排列后变为：
#
#
# L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
#
# 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
#
#
#
# 示例 1：
#
#
#
#
# 输入：head = [1,2,3,4]
# 输出：[1,4,2,3]
#
# 示例 2：
#
#
#
#
# 输入：head = [1,2,3,4,5]
# 输出：[1,5,2,4,3]
#
#
#
# 提示：
#
#
# 链表的长度范围为 [1, 5 * 10^4]
# 1 <= node.val <= 1000
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
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        dummy_node = ListNode(next=head)
        length = self.length_arr(head)
        lengthA, lengthB = self.lengthAB(length)
        curr = dummy_node
        for i in range(lengthA):
            curr = curr.next
        listB = curr.next
        curr.next = None
        listA = dummy_node.next
        listB = self.reverse(listB)
        pre = listA
        while listB:
            temp = pre.next
            pre.next = listB
            listB = listB.next
            pre.next.next = temp
            pre = pre.next.next
        return dummy_node.next

    def reverse(self, head):
        pre = None
        curr = head
        while curr:
            temp = curr.next
            curr.next = pre
            pre = curr
            curr = temp
        return pre

    def lengthAB(self, number):
        return (number + 1) // 2, number // 2

    def length_arr(self, head):
        count = 0
        curr = head
        while curr:
            curr = curr.next
            count += 1
        return count


# @lc code=end
