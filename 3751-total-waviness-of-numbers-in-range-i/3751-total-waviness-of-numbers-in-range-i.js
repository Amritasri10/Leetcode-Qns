const { floor, max, min } = Math;

const MAX = 100001;
const dp = new Int32Array(MAX);
const pref = new Int32Array(MAX);

for (let i = 100; i < MAX; i++) {
    const d1 = i % 10;
    const d2 = floor(i / 10) % 10;
    const d3 = floor(i / 100) % 10;

    const isWave = (d2 > max(d3, d1)) | (d2 < min(d3, d1));
    dp[i] = dp[floor(i / 10)] + isWave;
    pref[i] = pref[i - 1] + dp[i];
}

const totalWaviness = (A, B) => pref[B] - pref[A - 1];