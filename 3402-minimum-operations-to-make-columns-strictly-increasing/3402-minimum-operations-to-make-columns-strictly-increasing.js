/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
  if (grid.length === 1) return 0;

  let operations = 0,
    column = 0;

  const rowLength = grid[0].length;

  while (column < rowLength) {
    for (let i = 1; i < grid.length; i++) {
      if (grid[i][column] <= grid[i - 1][column]) {
        const diff = grid[i - 1][column] - grid[i][column] + 1;

        grid[i][column] = grid[i][column] + diff;

        operations += diff;
      }
    }

    column++;
  }

  return operations;
};