/**
 * @param {number[]} nums
 * @return {number}
 */
// JavaScript implementation
var maxProduct = function(nums) {
    let pre = 1, suf = 1;
    let res = -Infinity;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        pre *= nums[i];
        suf *= nums[n - 1 - i];
        res = Math.max(res, pre, suf);
        if (pre === 0) pre = 1;
        if (suf === 0) suf = 1;
    }

    return res;
};