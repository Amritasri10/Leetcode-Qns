var doubleIt = function(head) {
    var twice = function(head) {
        if (!head) {
            return 0;
        }
        var doubledValue = head.val * 2 + twice(head.next);
        head.val = doubledValue % 10;
        return Math.floor(doubledValue / 10);
    };

    var carry = twice(head);
    if (carry > 0) {
        head = new ListNode(carry, head);
    }
    return head;
};