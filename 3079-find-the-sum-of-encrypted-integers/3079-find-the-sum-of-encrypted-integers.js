/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    let sum = 0;

    for (let n of nums) {
        let s = String(n);
        sum += Number(s.split('').map(() => Math.max(...s)).join(''));
    }

    return sum;
};