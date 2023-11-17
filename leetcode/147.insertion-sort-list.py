#
# @lc app=leetcode id=147 lang=python3
#
# [147] Insertion Sort List
#
from typing import Optional


# @lc code=start
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        start = head
        while head and head.next:
            
        return
            
    def find_right_pos(self, head:Optional[ListNode],cur:ListNode)->Optional[ListNode]:
        start = ListNode()
        start.next = head
        while(start and start.next):
            if (cur.val<start.next.val):
                start = start.next
            else:
                temp = start.next
                start.next = cur
                cur.next = temp
        return start.next



# @lc code=end
