/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let mp = new Map();
    let sum = 0;
    let subArrayLength = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (sum === 0) {
            subArrayLength = i + 1;
        } else if (mp.has(sum)) {
            subArrayLength = Math.max(subArrayLength, i - mp.get(sum));
        } else {
            mp.set(sum, i);
        }
    }
    return subArrayLength;
};