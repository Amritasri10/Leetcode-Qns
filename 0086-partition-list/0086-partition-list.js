var partition = function(head, x) {
    let before = new ListNode(0);
    let after = new ListNode(0);
    let before_curr = before;
    let after_curr = after;
    
    while(head !== null) {
        if(head.val < x) {
            before_curr.next = head;
            before_curr = before_curr.next;
        } else {
            after_curr.next = head;
            after_curr = after_curr.next;
        }
        head = head.next;
    }
    
    after_curr.next = null;
    before_curr.next = after.next;
    
    return before.next;
};