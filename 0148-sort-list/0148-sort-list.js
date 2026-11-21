class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var sortList = function(head) {
  if (!head || !head.next) return head;

  let slow = head, fast = head, prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;

  const left = sortList(head);
  const right = sortList(slow);

  return merge(left, right);
};

function merge(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}