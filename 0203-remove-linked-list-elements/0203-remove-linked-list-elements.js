/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;

        if (curr.val === val) {
            if (prev === null) head = head.next;
            else {
                prev.next = curr.next;
                curr.next = null;
            }
        } else {
            prev = curr;
        }

        curr = next;
    }

    return head;
};