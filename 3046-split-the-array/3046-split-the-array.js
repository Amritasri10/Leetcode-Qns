/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let freq = {};

    for (let n of nums) {
        freq[n] = (freq[n] || 0) + 1;
        if (freq[n] > 2) return false;
    }

    return true;
};