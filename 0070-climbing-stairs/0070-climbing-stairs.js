/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     if (n <= 1) return 1;

    let a = 1, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};