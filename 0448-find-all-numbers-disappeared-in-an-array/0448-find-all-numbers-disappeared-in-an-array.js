/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const numSet = new Set(nums);
    const result = [];
    
    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            result.push(i);
        }
    }
    
    return result;    
};
