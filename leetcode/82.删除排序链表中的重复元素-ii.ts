/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (54.29%)
 * Likes:    1291
 * Dislikes: 0
 * Total Accepted:    436.2K
 * Total Submissions: 802.8K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0, head);
  let curr = dummy;
  while (curr.next && curr.next.next) {
    while (
      curr.next.val == curr.next.next.val &&
      curr.next.next.next &&
      curr.next.next.val == curr.next.next.next.val
    ) {
      curr.next.next.next = curr.next.next.next.next;
    }
    if (curr.next.val == curr.next.next.val) {
      curr.next = curr.next.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
}
// @lc code=end
