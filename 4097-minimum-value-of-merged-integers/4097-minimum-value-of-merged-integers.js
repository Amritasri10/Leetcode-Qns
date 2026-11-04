/**
 * @param {number[]} nums
 * @return {number}
 */

var minMergedInteger = function(nums) {
    let min = Infinity;

    for (let i = 0; i < nums.length; i += 2) {
        let merged = Number(String(nums[i]) + String(nums[i + 1]));

        min = Math.min(min, merged);
    }

    return min;
};
