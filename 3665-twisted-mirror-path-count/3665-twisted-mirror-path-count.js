const mat = [[[1, 1], [1, 1]], [[0, 1], [1, 0]]];
const MOD = 1000000007;

const uniquePaths = A => {
    let n = A[0].length, left = 0;
    const dp = Array(n).fill(0);

    dp[0] = 1;

    for (const row of A) {
        left = 0;
        for (let j = 0; j < n; j++) {
            const top = dp[j], c = row[j];

            dp[j] = (left * mat[c][1][0] + top * mat[c][1][1]) % MOD;
            left  = (left * mat[c][0][0] + top * mat[c][0][1]) % MOD;
        }
    }

    return left;
};