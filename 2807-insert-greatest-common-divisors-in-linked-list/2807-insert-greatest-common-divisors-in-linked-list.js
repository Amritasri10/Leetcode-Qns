var insertGreatestCommonDivisors = function (head) {
  let curr = head;

  while (curr && curr.next) {
    let a = curr.val;
    let b = curr.next.val;

    while (b) {
      [a, b] = [b, a % b];
    }

    const next = curr.next;
    curr.next = { val: a, next };
    curr = next;
  }

  return head;
};