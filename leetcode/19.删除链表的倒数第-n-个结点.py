#
# @lc app=leetcode.cn id=19 lang=python3
#
# [19] 删除链表的倒数第 N 个结点
#
# https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
#
# algorithms
# Medium (47.15%)
# Likes:    2809
# Dislikes: 0
# Total Accepted:    1.3M
# Total Submissions: 2.8M
# Testcase Example:  '[1,2,3,4,5]\n2'
#
# 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
#
#
#
# 示例 1：
#
#
# 输入：head = [1,2,3,4,5], n = 2
# 输出：[1,2,3,5]
#
#
# 示例 2：
#
#
# 输入：head = [1], n = 1
# 输出：[]
#
#
# 示例 3：
#
#
# 输入：head = [1,2], n = 1
# 输出：[1]
#
#
#
#
# 提示：
#
#
# 链表中结点的数目为 sz
# 1 <= sz <= 30
# 0 <= Node.val <= 100
# 1 <= n <= sz
#
#
#
#
# 进阶：你能尝试使用一趟扫描实现吗？
#
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        curr = ListNode(0)
        curr.next = head
        slow = curr
        fast = curr
        for i in range(0, n):
            fast = fast.next
        while fast.next:
            slow = slow.next
            fast = fast.next
        slow.next = slow.next.next
        return curr.next


# @lc code=end
