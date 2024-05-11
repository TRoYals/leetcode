#
# @lc app=leetcode.cn id=92 lang=python3
#
# [92] 反转链表 II
#
# https://leetcode.cn/problems/reverse-linked-list-ii/description/
#
# algorithms
# Medium (56.11%)
# Likes:    1779
# Dislikes: 0
# Total Accepted:    506.6K
# Total Submissions: 902.1K
# Testcase Example:  '[1,2,3,4,5]\n2\n4'
#
# 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left  。请你反转从位置 left 到位置 right 的链表节点，返回
# 反转后的链表 。
#
#
# 示例 1：
#
#
# 输入：head = [1,2,3,4,5], left = 2, right = 4
# 输出：[1,4,3,2,5]
#
#
# 示例 2：
#
#
# 输入：head = [5], left = 1, right = 1
# 输出：[5]
#
#
#
#
# 提示：
#
#
# 链表中节点数目为 n
# 1
# -500
# 1
#
#
#
#
# 进阶： 你可以使用一趟扫描完成反转吗？
#
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(
        self, head: Optional[ListNode], left: int, right: int
    ) -> Optional[ListNode]:
        return_head = ListNode(next=head)
        number = right - left
        curr = return_head
        while left - 1 > 0:
            curr = curr.next
            left -= 1

        def reverse(head, number):
            count = 0
            pre = None
            curr = head
            temp_head = head
            while curr and count <= number:
                temp = curr.next
                curr.next = pre
                pre = curr
                curr = temp
                count += 1
            temp_head.next = curr
            return pre

        ptr = reverse(curr.next, number)
        curr.next = ptr
        return return_head.next


# @lc code=end
