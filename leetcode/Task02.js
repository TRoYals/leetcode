// [2. 两数相加 - 力扣（LeetCode）](https://leetcode.cn/problems/add-two-numbers/)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrToNode(arr) {
  let start = new ListNode(0);
  let head = start;
  for (let i = 0; i < arr.length; i++) {
    start.val = arr[i];
    if (i != arr.length - 1) {
      start.next = new ListNode(0);
    }
    start = start.next;
  }
  return head;
}

var addTwoNumbers = function (l1, l2) {
  let sum = new ListNode(0);
  let head = sum;
  while (l1.next || l2.next) {
    sum.val = l1.val + l2.val + sum.val;
    if (l1.next || l2.next) {
      sum.next = new ListNode(0);
    }
    if (sum.val >= 10) {
      sum.next.val += 1;
      sum.val = sum.val % 10;
    }
    sum = sum.next;
    if (l1.next) {
      l1 = l1.next;
    } else l1.val = 0;
    if (l2.next) {
      l2 = l2.next;
    } else l2.val = 0;
  }
  sum.val = l1.val + l2.val + sum.val;
  if (sum.val >= 10) {
    sum.next = new ListNode(0);
    sum.next.val += 1;
    sum.val = sum.val % 10;
  }
  return head;
};

l1 = arrToNode([2, 4, 8, 9]);
console.log(JSON.stringify(l1));
l2 = arrToNode([5, 6, 4]);
console.log(JSON.stringify(addTwoNumbers(l1, l2)));
