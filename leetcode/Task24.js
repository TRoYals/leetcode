var swapPairs = function (head) {
  let pre = new ListNode(0, head);
  let returnPtr = pre;
  while (pre.next && pre.next.next) {
    let temp1 = pre.next;
    let temp2 = pre.next.next;
    pre.next = temp2;
    temp1.next = pre.next.next;
    pre.next.next = temp1;
    pre = pre.next.next;
  }
  return returnPtr.next;
};

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

console.log(JSON.stringify(reverse(listToNode([1, 2]))));
function reverse(head) {
  let [ret, node] = [null, head];
  while (node) {
    let temp = node.next;
    node.next = ret;
    ret = node;
    node = temp;
  }
  return ret;
}
