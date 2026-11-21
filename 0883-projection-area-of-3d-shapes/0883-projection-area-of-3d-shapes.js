/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  let top = 0;
  front = 0;
  side = 0;

  for (let i = 0; i < grid.length; i++) {
    let rawMax = 0;
    let colMax = 0;

    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 0) top++;
      rawMax = Math.max(rawMax, grid[i][j]);
      colMax = Math.max(colMax, grid[j][i]);
    }

    front += rawMax;
    side += colMax;
  }

  return top + front + side;
};