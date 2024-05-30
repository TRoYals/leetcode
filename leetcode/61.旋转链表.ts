/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
 *
 * https://leetcode.cn/problems/rotate-list/description/
 *
 * algorithms
 * Medium (41.33%)
 * Likes:    1045
 * Dislikes: 0
 * Total Accepted:    379.1K
 * Total Submissions: 916.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let lengthList = listLength(head);
  let moveNum = k % lengthList;
  if (moveNum == 0 || k == 0) {
    return head;
  }
  if (!head) {
    return head;
  }
  let startNode = head;
  let curr = head;
  for (let i = 0; i < lengthList - moveNum - 1; i++) {
    curr = curr.next;
  }
  let temp = curr.next;
  curr.next = null;
  let curr_temp = temp;
  while (curr_temp.next) {
    curr_temp = curr_temp.next;
  }
  curr_temp.next = startNode;
  return temp;
}

function listLength(head) {
  let count = 0;
  while (head) {
    head = head.next;
    count += 1;
  }
  return count;
}
// @lc code=end
