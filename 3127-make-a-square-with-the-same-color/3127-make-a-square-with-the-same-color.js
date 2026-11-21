/**
 * @param {character[][]} grid
 * @return {boolean}
 */
let canMakeSquare = function (grid) {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let w = 0, b = 0;

            if (grid[i][j] == 'W') w++;

            else b++;

            if (grid[i + 1][j] == 'W') w++;

            else b++;

            if (grid[i][j + 1] == 'W') w++;

            else b++;

            if (grid[i + 1][j + 1] == 'W') w++;

            else b++;

            if (w >= 3 || b >= 3) return true;
        }
    }

    return false;
}