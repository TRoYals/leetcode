// [234. 回文链表 - 力扣（LeetCode）](https://leetcode.cn/problems/palindrome-linked-list/)

function ListNode(val, next) {
  this.val = val = undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function listToNode(arr) {
  let head = new ListNode();
  let headptr = head;
  for (let i = 0; i < arr.length; i++) {
    head.val = arr[i];
    if (i != arr.length - 1) {
      head.next = new ListNode();
      head = head.next;
    }
  }
  return headptr;
}

var reverseList = function (head) {
  let [pre, node] = [null, head];
  while (node) {
    const temp = node.next;
    node.next = pre;
    pre = node;
    node = temp;
  }
  return pre;
};

let head1 = reverseList(listToNode([1, 2, 1, 1]));
let head2 = listToNode([1, 2, 1, 1]);

function printNode(pre) {
  console.log(JSON.stringify(pre));
}

function isPalindrome(head1) {
  let length = searchLength(head1);
  let head2 = returnMiddle(head1, length);
  head2 = reverseList(head2);
  while (head1 && head2) {
    if (head1.val == head2.val) {
      head1 = head1.next;
      head2 = head2.next;
    } else return false;
  }
  return true;
}

function returnMiddle(head1, length) {
  let i = 0;
  while (i < length / 2) {
    head1 = head1.next;
    i++;
  }
  return head1;
}

function searchLength(ptr) {
  let length = 0;
  while (ptr) {
    length += 1;
    ptr = ptr.next;
  }
  return length;
}

let node1 = listToNode([1, 2, 2, 2, 3, 2, 1]);
console.log(isPalindrome(node1));
