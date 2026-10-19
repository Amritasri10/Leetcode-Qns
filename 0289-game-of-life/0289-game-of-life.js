/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let m = board.length, n = board[0].length;
    let dirs = [-1, 0, 1];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let live = 0;

            for (let x of dirs) {
                for (let y of dirs) {
                    if (x === 0 && y === 0) continue;
                    let r = i + x, c = j + y;
                    if (r >= 0 && r < m && c >= 0 && c < n &&
                        (board[r][c] === 1 || board[r][c] === 2)) live++;
                }
            }

            if (board[i][j] === 1 && (live < 2 || live > 3)) board[i][j] = 2;
            if (board[i][j] === 0 && live === 3) board[i][j] = 3;
        }
    }

    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            board[i][j] %= 2;
};