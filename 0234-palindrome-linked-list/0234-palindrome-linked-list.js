/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const listVals = [];
    while (head) {
        listVals.push(head.val);
        head = head.next;
    }
    
    let left = 0, right = listVals.length - 1;
    while (left < right && listVals[left] === listVals[right]) {
        left++;
        right--;
    }
    return left >= right;
};