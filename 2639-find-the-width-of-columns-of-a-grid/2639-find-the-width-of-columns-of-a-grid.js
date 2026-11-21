/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findColumnWidth = (grid) =>
    Array.from({ length: grid[0].length }, (_, j) => {
        let res = 0;
        for (let i = 0; i < grid.length; i++) {
            res = Math.max(res, String(grid[i][j]).length);
        }
        return res;
    });