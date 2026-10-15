/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let distinctNums = new Set(nums);
    distinctNums = Array.from(distinctNums).sort((a, b) => b - a);
    if (distinctNums.length < 3) {
        return distinctNums[0];
    }
    return distinctNums[2];
};