/**
 * @param {number[]} nums
 * @return {number}
 */


var maxAlternatingSum = function(nums) {
     nums = nums.map(n => n * n).sort((a, b) => a - b);
    let sum = 0, n = nums.length;
    
    for (let i = 0; i < n; i++) {
        sum += i < Math.floor(n / 2) ? -nums[i] : nums[i];
    }
    
    return sum;
};
