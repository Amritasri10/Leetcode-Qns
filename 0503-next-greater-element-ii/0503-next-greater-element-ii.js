/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            const idx = (i + j) % n;

            if (nums[idx] > nums[i]) {
                ans[i] = nums[idx];
                break;
            }
        }
    }

    return ans;
};
