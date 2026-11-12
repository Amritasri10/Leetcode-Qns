/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0;
    let count = 0;

    for (let n of nums) {
        if (n === 0) {
            count = 0;
        } else {
            count += 1;
        }

        if (res < count) {
            res = count;
        }
    }

    return res;    
};