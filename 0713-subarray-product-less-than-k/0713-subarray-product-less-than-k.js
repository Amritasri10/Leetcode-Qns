/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    const n = nums.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        let product = 1;

        for (let j = i; j < n; j++) {
            product *= nums[j];

            if (product < k) {
                ans++;
            } else {
                break;
            }
        }
    }

    return ans;
};