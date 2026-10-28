/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const m = grid.length, n = grid[0].length;
    const dp = Array.from({length: m}, () =>
        Array.from({length: n}, () => new Set())
    );

    dp[m-1][n-1].add(grid[m-1][n-1]);

    for (let i = m-1; i >= 0; i--) {
        for (let j = n-1; j >= 0; j--) {
            if (i === m-1 && j === n-1) continue;

            if (i+1 < m)
                for (const x of dp[i+1][j])
                    dp[i][j].add(x ^ grid[i][j]);

            if (j+1 < n)
                for (const x of dp[i][j+1])
                    dp[i][j].add(x ^ grid[i][j]);
        }
    }

    return Math.min(...dp[0][0]);
};