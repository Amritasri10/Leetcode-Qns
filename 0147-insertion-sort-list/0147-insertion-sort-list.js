/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (!head || !head.next) return head;
    const dummy = new ListNode(-Infinity);
    dummy.next = head;
    let cur = head;

    while (cur && cur.next) {
        if (cur.next.val >= cur.val) {
            cur = cur.next;
        } else {
            let toInsert = cur.next;
            cur.next = toInsert.next;
            let pre = dummy;
            while (pre.next.val < toInsert.val) {
                pre = pre.next;
            }
            toInsert.next = pre.next;
            pre.next = toInsert;
        }
    }
    return dummy.next;
};