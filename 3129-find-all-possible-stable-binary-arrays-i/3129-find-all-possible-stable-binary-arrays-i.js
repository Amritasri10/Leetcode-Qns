/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
    const MOD = 1000000007;
    const li = limit + 1;

    const dp0 = Array.from({ length: zero + 1 }, () => Array(one + 1).fill(0));
    const dp1 = Array.from({ length: zero + 1 }, () => Array(one + 1).fill(0));

    for (let i = 1; i <= Math.min(zero, limit); i++) {
        dp0[i][0] = 1;
    }

    for (let j = 1; j <= Math.min(one, limit); j++) {
        dp1[0][j] = 1;
    }

    for (let i = 1; i <= zero; i++) {
        for (let j = 1; j <= one; j++) {
            const sub1 = (i >= li) ? dp1[i - li][j] : 0;
            dp0[i][j] = (dp0[i - 1][j] + dp1[i - 1][j] - sub1 + MOD) % MOD;

            const sub2 = (j >= li) ? dp0[i][j - li] : 0;
            dp1[i][j] = (dp0[i][j - 1] + dp1[i][j - 1] - sub2 + MOD) % MOD;
        }
    }

    return (dp0[zero][one] + dp1[zero][one]) % MOD;
};