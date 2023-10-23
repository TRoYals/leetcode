function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var swapNodes = function (head, k) {
  const newHead = new ListNode(0, head);

  let slow = newHead,
    fast = newHead;
  let firstNode = null,
    secondNode = null;

  let a = fast.next;
  console.log(a.next);
};

swapNodes([1, 2, 3, 4, 5], 2);
