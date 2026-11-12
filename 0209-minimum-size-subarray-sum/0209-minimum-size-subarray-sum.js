/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let i = 0, j = 0, sum = 0;
    let ans = Infinity;

    while(j < nums.length) {
        sum += nums[j];

        while(sum >= target) {
            ans = Math.min(ans, j - i + 1);
            sum -= nums[i];
            i++;
        }

        j++;
    }

    return ans === Infinity ? 0 : ans;
};