/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    let dp = Array.from({length: m+1}, () => Array(n+1).fill(0));
    let ans = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i-1] === nums2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
                ans = Math.max(ans, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return ans;
};