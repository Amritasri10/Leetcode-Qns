/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][i] === 0 || grid[i][grid[i].length - i - 1] === 0) {
            return false;
        }
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== 0 && j !== i && j !== (grid[i].length - i - 1)) {
                return false;
            }
        }
    }
    return true;

};