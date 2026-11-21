/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    const sc = y, ec = y + k - 1, sr = x;
    for (let j = sc; j <= ec; j++) {
        for (let i = 0; i < Math.floor(k / 2); i++) {
            [grid[sr+i][j], grid[sr+k-i-1][j]] = [grid[sr+k-i-1][j], grid[sr+i][j]];
        }
    }
    return grid;
};