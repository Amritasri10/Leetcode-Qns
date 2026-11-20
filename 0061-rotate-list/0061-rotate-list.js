/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head; 

    let len = 1;
    let tail = head;
    while (tail.next) { tail = tail.next; len++; } 

    k %= len;
    if (k === 0) return head; 

    tail.next = head; // circular

    let steps = len - k;
    let newtail = head;
    for (let i = 1; i < steps; i++) newtail = newtail.next; 

    let newhead = newtail.next; 
    newtail.next = null; // break

    return newhead;
};