/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Create a 2D DP array filled with zeros
    let dp = new Array(m).fill().map(() => new Array(n).fill(0));
    
    // Initialize the rightmost column and bottom row to 1
    for (let i = 0; i < m; i++) {
        dp[i][n-1] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[m-1][j] = 1;
    }
    
    // Fill in the DP array bottom-up
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            dp[i][j] = dp[i+1][j] + dp[i][j+1];
        }
    }
    
    // Return the result stored in the top-left corner
    return dp[0][0];
};