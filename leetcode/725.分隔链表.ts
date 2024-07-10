/*
 * @lc app=leetcode.cn id=725 lang=typescript
 *
 * [725] 分隔链表
 *
 * https://leetcode.cn/problems/split-linked-list-in-parts/description/
 *
 * algorithms
 * Medium (60.72%)
 * Likes:    306
 * Dislikes: 0
 * Total Accepted:    64.7K
 * Total Submissions: 106.5K
 * Testcase Example:  '[1,2,3]\n5'
 *
 * 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。
 *
 * 每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。
 *
 * 这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。
 *
 * 返回一个由上述 k 部分组成的数组。
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3], k = 5
 * 输出：[[1],[2],[3],[],[]]
 * 解释：
 * 第一个元素 output[0] 为 output[0].val = 1 ，output[0].next = null 。
 * 最后一个元素 output[4] 为 null ，但它作为 ListNode 的字符串表示是 [] 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2,3,4,5,6,7,8,9,10], k = 3
 * 输出：[[1,2,3,4],[5,6,7],[8,9,10]]
 * 解释：
 * 输入被分成了几个连续的部分，并且每部分的长度相差不超过 1 。前面部分的长度大于等于后面部分的长度。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 1000]
 * 0 <= Node.val <= 1000
 * 1 <= k <= 50
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

function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  let returnArr = [];
  const lengthLinkList = function (head): number {
    let length = 0;
    while (head) {
      length++;
      head = head.next;
    }
    return length;
  };
  let lengthList = lengthLinkList(head);
  let res = lengthList % k;
  let baseLength = Math.floor(lengthList / k);
  for (let i = 0; i < k; i++) {
    let currLength = baseLength;
    if (i < res) {
      currLength++;
    }
    let temp = head;
    let curr = temp;
    for (let j = 0; j < currLength; j++) {
      head = head.next;
    }
    for (let j = 0; j < currLength - 1; j++) {
      curr = curr.next;
    }

    if (curr) curr.next = null;
    returnArr.push(temp);
  }
  return returnArr;
}
// @lc code=end
