/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    const ans = new Array(m);

    ans[0] = ".".repeat(n);

    for (let i = 1; i < m; i++) {
        ans[i] = "#".repeat(n - 1) + ".";
    }

    return ans; 
};