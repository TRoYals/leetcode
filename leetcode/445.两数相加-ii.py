#
# @lc app=leetcode.cn id=445 lang=python3
#
# [445] 两数相加 II
#
# https://leetcode.cn/problems/add-two-numbers-ii/description/
#
# algorithms
# Medium (61.00%)
# Likes:    715
# Dislikes: 0
# Total Accepted:    155.1K
# Total Submissions: 254.2K
# Testcase Example:  '[7,2,4,3]\n[5,6,4]'
#
# 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
#
# 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
#
#
#
# 示例1：
#
#
#
#
# 输入：l1 = [7,2,4,3], l2 = [5,6,4]
# 输出：[7,8,0,7]
#
#
# 示例2：
#
#
# 输入：l1 = [2,4,3], l2 = [5,6,4]
# 输出：[8,0,7]
#
#
# 示例3：
#
#
# 输入：l1 = [0], l2 = [0]
# 输出：[0]
#
#
#
#
# 提示：
#
#
# 链表的长度范围为 [1, 100]
# 0 <= node.val <= 9
# 输入数据保证链表代表的数字无前导 0
#
#
#
#
# 进阶：如果输入链表不能翻转该如何解决？
#
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        length_l1 = self.length_list(l1)
        length_l2 = self.length_list(l2)
        base, incre = (l1, l2) if length_l1 > length_l2 else (l2, l1)
        base = self.reverse(base)
        dummy = base
        incre = self.reverse(incre)
        carry = 0
        while (incre or carry == 1) and base:
            print(incre)
            if incre:
                if incre.val + base.val + carry >= 10:
                    base.val = (incre.val + base.val + carry) % 10
                    carry = 1
                else:
                    base.val += incre.val + carry
                    carry = 0
                base = base.next
                incre = incre.next
            else:
                if base.val + carry >= 10:
                    base.val = (carry + base.val) % 10
                    carry = 1
                else:
                    base.val += carry
                    carry = 0
                base = base.next
        pre = dummy
        if carry == 1:
            while pre.next:
                pre = pre.next
            new_node = ListNode(1)
            pre.next = new_node
        return self.reverse(dummy)

    def reverse(self, head):
        pre = None
        curr = head
        while curr:
            temp = curr.next
            curr.next = pre
            pre = curr
            curr = temp
        return pre

    def length_list(self, head):
        curr = head
        count = 0

        while curr:
            curr = curr.next
            count += 1
        return count


# @lc code=end
