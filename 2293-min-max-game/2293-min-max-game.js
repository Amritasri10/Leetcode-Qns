/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    } else {
        let newNums = [];
        let maxArrLen = nums.length / 2;

        for (let i = 0; i < maxArrLen; i++) {
            if (i % 2 == 0) {
                newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
            } else {
                newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
            }
        }

        return minMaxGame(newNums);
    }
};