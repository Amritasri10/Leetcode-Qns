/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const next = {};
    const stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }
        next[nums2[i]] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(nums2[i]);
    }

    return nums1.map(num => next[num]);
};