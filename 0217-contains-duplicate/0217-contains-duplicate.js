/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     const a = new Set();
    for (let num of nums) {
        if (a.has(num)) {
            return true;
        }
        a.add(num);
    }
    return false;
};