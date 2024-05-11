/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
 *
 * https://leetcode.cn/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (61.00%)
 * Likes:    715
 * Dislikes: 0
 * Total Accepted:    155.1K
 * Total Submissions: 254.2K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 *
 *
 *
 * 示例1：
 *
 *
 *
 *
 * 输入：l1 = [7,2,4,3], l2 = [5,6,4]
 * 输出：[7,8,0,7]
 *
 *
 * 示例2：
 *
 *
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[8,0,7]
 *
 *
 * 示例3：
 *
 *
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表的长度范围为 [1, 100]
 * 0 <= node.val <= 9
 * 输入数据保证链表代表的数字无前导 0
 *
 *
 *
 *
 * 进阶：如果输入链表不能翻转该如何解决？
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  l1 = reverseLink(l1);
  l2 = reverseLink(l2);
  let carry = 0;
  let dummy = new ListNode(0);
  let curr = dummy;

  while (l1 || l2 || carry != 0) {
    let sum: number;
    if (l1 && l2) {
      sum = l1.val + l2.val + carry;
      if (sum >= 10) {
        carry = 1;
      } else {
        carry = 0;
      }
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1) {
      sum = l1.val + carry;
      if (sum >= 10) {
        carry = 1;
      } else {
        carry = 0;
      }
      l1 = l1.next;
    } else if (l2) {
      sum = l2.val + carry;
      if (sum >= 10) {
        carry = 1;
      } else {
        carry = 0;
      }
      l2 = l2.next;
    } else if (carry != 0) {
      sum = carry;
      carry = 0;
    }
    let newNode = new ListNode(sum % 10);
    curr.next = newNode;
    curr = curr.next;
  }
  return reverseLink(dummy.next);
}
function reverseLink(head: ListNode) {
  let pre = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }
  return pre;
}
// @lc code=end
