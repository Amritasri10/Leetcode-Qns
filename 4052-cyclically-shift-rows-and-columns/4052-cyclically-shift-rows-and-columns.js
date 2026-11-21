/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
var cyclicShift = function(n, grid, rowShift, colShift) {
    const ans = Array.from({ length: n }, () => new Array(n).fill(0));
    
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            const orow = (i + colShift[j]) % n;
            const ocol = (j + rowShift[orow]) % n;
            ans[i][j] = grid[orow][ocol];
        }
    }
    
    return ans;
};