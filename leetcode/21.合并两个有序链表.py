#
# @lc app=leetcode.cn id=21 lang=python3
#
# [21] 合并两个有序链表
#
# https://leetcode.cn/problems/merge-two-sorted-lists/description/
#
# algorithms
# Easy (66.30%)
# Likes:    3487
# Dislikes: 0
# Total Accepted:    1.7M
# Total Submissions: 2.5M
# Testcase Example:  '[1,2,4]\n[1,3,4]'
#
# 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
#
#
#
# 示例 1：
#
#
# 输入：l1 = [1,2,4], l2 = [1,3,4]
# 输出：[1,1,2,3,4,4]
#
#
# 示例 2：
#
#
# 输入：l1 = [], l2 = []
# 输出：[]
#
#
# 示例 3：
#
#
# 输入：l1 = [], l2 = [0]
# 输出：[0]
#
#
#
#
# 提示：
#
#
# 两个链表的节点数目范围是 [0, 50]
# -100
# l1 和 l2 均按 非递减顺序 排列
#
#
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = nex
class Solution:
    def mergeTwoLists(
        self, list1: Optional[ListNode], list2: Optional[ListNode]
    ) -> Optional[ListNode]:
        dummy = ListNode(0)  # 使用一个哨兵节点简化操作
        current = dummy  # 当前节点初始化为哨兵节点

        # 遍历两个链表直到一个为空
        while list1 and list2:
            if list1.val < list2.val:
                current.next = list1
                list1 = list1.next  # 移动list1
            else:
                current.next = list2
                list2 = list2.next  # 移动list2
            current = current.next  # 更新current到最新添加的节点

        if list1:
            current.next = list1
        elif list2:
            current.next = list2

        return dummy.next  # 返回哨兵节点的下一个节点，即合并后链表的头节点


# @lc code=end
