class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;

    const dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;

    while (current) {
        let isDuplicate = false;

        while (current.next && current.val === current.next.val) {
            isDuplicate = true;
            current = current.next;
        }

        if (isDuplicate) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }

        current = current.next;
    }

    return dummy.next;
};