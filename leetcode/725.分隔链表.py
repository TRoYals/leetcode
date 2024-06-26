#
# @lc app=leetcode.cn id=725 lang=python3
#
# [725] 分隔链表
#
# https://leetcode.cn/problems/split-linked-list-in-parts/description/
#
# algorithms
# Medium (60.72%)
# Likes:    306
# Dislikes: 0
# Total Accepted:    64.7K
# Total Submissions: 106.5K
# Testcase Example:  '[1,2,3]\n5'
#
# 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。
#
# 每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。
#
# 这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。
#
# 返回一个由上述 k 部分组成的数组。
#
#
# 示例 1：
#
#
# 输入：head = [1,2,3], k = 5
# 输出：[[1],[2],[3],[],[]]
# 解释：
# 第一个元素 output[0] 为 output[0].val = 1 ，output[0].next = null 。
# 最后一个元素 output[4] 为 null ，但它作为 ListNode 的字符串表示是 [] 。
#
#
# 示例 2：
#
#
# 输入：head = [1,2,3,4,5,6,7,8,9,10], k = 3
# 输出：[[1,2,3,4],[5,6,7],[8,9,10]]
# 解释：
# 输入被分成了几个连续的部分，并且每部分的长度相差不超过 1 。前面部分的长度大于等于后面部分的长度。
#
#
#
#
# 提示：
#
#
# 链表中节点的数目在范围 [0, 1000]
# 0 <= Node.val <= 1000
# 1 <= k <= 50
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
    def splitListToParts(
        self, head: Optional[ListNode], k: int
    ) -> List[Optional[ListNode]]:
        length = self.link_length(head)
        array = self.arrary_number(length, k)
        print(array)
        return_list = []
        curr = head
        for i in range(k):
            dummy_node = ListNode(next=curr)
            if array[i] != 0:
                for j in range(array[i] - 1):
                    curr = curr.next
                temp = curr.next
                curr.next = None
                curr = temp
                return_list.append(dummy_node.next)
            else:
                return_list.append(None)
        return return_list

    def link_length(self, head):
        curr = head
        count = 0
        while curr:
            curr = curr.next
            count += 1
        return count

    def arrary_number(self, length, k):
        array = []
        if (length % k) == 0:
            for i in range(k):
                array.append(length // k)
        else:
            res = length % k
            for i in range(res):
                array.append(length // k + 1)
            for i in range(k - res):
                array.append(length // k)
        return array


# @lc code=end
