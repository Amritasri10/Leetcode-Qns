/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const reverse = (head) => {
        let a = null;
        let b = head;
        let c = head.next;
        while (b !== null) {
            b.next = a;
            a = b;
            b = c;
            if (c !== null) c = c.next;
        }
        head = a;
        return head;
    };
    const sumup = (l1, l2) => {
        const c = l1;
        let a = false;
        while (l1.next !== null && l2.next !== null) {
            l1.val = l1.val + l2.val;
            if (a) {
                l1.val++;
                a = false;
            }
            if (l1.val >= 10) {
                l1.val = l1.val % 10;
                a = true;
            }
            l1 = l1.next;
            l2 = l2.next;
        }
        l1.val = l1.val + l2.val;
        if (a) {
            l1.val++;
            a = false;
        }
        if (l1.val >= 10) {
            l1.val = l1.val % 10;
            a = true;
        }
        if (l1.next === null) l1.next = l2.next;
        if (l1.next === null) {
            if (a) {
                const z = new ListNode(1);
                l1.next = z;
            }
            return c;
        }
        l1 = l1.next;
        while (l1.next !== null) {
            if (a) {
                l1.val++;
                a = false;
            }
            if (l1.val >= 10) {
                l1.val = l1.val % 10;
                a = true;
            }
            l1 = l1.next;
        }
        if (a) {
            l1.val++;
            a = false;
        }
        if (l1.val >= 10) {
            l1.val = l1.val % 10;
            a = true;
        }
        if (a) {
            const z = new ListNode(1);
            l1.next = z;
        }
        return c;
    };
    l1 = reverse(l1);
    l2 = reverse(l2);
    let z = sumup(l1, l2);
    z = reverse(z);
    return z;
};