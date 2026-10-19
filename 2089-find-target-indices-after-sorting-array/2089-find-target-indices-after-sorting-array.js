/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let smaller = 0;
    let equal = 0;

    for (const num of nums) {
        if (num < target) {
            smaller++;
        } else if (num === target) {
            equal++;
        }
    }

    const result = [];
    for (let i = smaller; i < smaller + equal; i++) {
        result.push(i);
    }
    return result;
};