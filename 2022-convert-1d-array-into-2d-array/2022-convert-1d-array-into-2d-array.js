/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (n * m !== original.length) return [];
    const a = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let i = 0; i < original.length; i++) {
        a[Math.floor(i / n)][i % n] = original[i];
    }
    return a;
};