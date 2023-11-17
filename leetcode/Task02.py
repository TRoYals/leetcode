# class Solution:
#     def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
#         tmp = 0
#         while True:
#             l1.val
from typing import Optional, Union


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        ans = ListNode(0)
        tmp = ans
        tmpsum = 0
        while True:
            if l1 != None:
                tmpsum += l1.val
                l1 = l1.next
            if l2 != None:
                tmpsum += l2.val
                l2 = l2.next
            tmp.val = tmpsum % 10
            tmpsum = tmp.val // 10
            if l1 == None and l2 == None and tmpsum == 0:
                break
            tmp.next = ListNode(0)
            tmp = tmp.next
        return ans
