/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// JavaScript solution
var getPermutation = function(n, k) {
    let numbers = [];
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        numbers.push(i);
        fact *= i;
    }

    k--; // 0-based indexing
    let result = "";

    for (let i = 0; i < n; i++) {
        fact = fact / (n - i);
        let index = Math.floor(k / fact);
        result += numbers[index];
        numbers.splice(index, 1);
        k %= fact;
    }

    return result;
};