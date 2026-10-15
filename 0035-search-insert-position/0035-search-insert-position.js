/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = nums.findIndex(num => num >= target);
        return index === -1 ? nums.length : index;
};