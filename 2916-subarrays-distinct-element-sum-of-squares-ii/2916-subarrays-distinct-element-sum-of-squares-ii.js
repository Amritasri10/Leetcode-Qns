/**
 * @param {number[]} nums
 * @return {number}
 */

var sumCounts = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    const sum = new Array(4 * n).fill(0);
    const sq = new Array(4 * n).fill(0);
    const lazy = new Array(4 * n).fill(0);

    function update(node, start, end, l, r) {
        if (l > end || r < start) return;

        if (l <= start && end <= r) {
            sq[node] = (sq[node] + 2 * sum[node] + (end - start + 1)) % MOD;
            sum[node] = (sum[node] + end - start + 1) % MOD;
            lazy[node]++;
            return;
        }

        const mid = Math.floor((start + end) / 2);
        push(node, start, end, mid);

        update(node * 2, start, mid, l, r);
        update(node * 2 + 1, mid + 1, end, l, r);

        sum[node] = (sum[node * 2] + sum[node * 2 + 1]) % MOD;
        sq[node] = (sq[node * 2] + sq[node * 2 + 1]) % MOD;
    }

    function push(node, start, end, mid) {
        const v = lazy[node];
        if (!v || start === end) return;

        for (const child of [node * 2, node * 2 + 1]) {
            const len = child === node * 2
                ? mid - start + 1
                : end - mid;
            sq[child] = (sq[child] + 2 * v * sum[child] + v * v * len) % MOD;
            sum[child] = (sum[child] + v * len) % MOD;
            lazy[child] += v;
        }
        lazy[node] = 0;
    }

    const last = new Map();
    let ans = 0;

    for (let r = 0; r < n; r++) {
        const p = last.has(nums[r]) ? last.get(nums[r]) : -1;
        update(1, 0, n - 1, p + 1, r);
        last.set(nums[r], r);
        ans = (ans + sq[1]) % MOD;
    }

    return ans;
};