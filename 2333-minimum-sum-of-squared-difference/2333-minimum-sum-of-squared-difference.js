var minSumSquareDiff = function (nums1, nums2, k1, k2) {
    let k = k1 + k2;
    const n = nums1.length;

    let sum = 0;
    for (let i = 0; i < n; i++) {
        nums1[i] = Math.abs(nums1[i] - nums2[i]);
        sum += nums1[i];
    }
    if (sum <= k) {
        return 0;
    }

    nums1.sort((a, b) => b - a);
    nums1.push(0);

    for (let i = 1; i <= n; i++) {
        const cost = (nums1[i - 1] - nums1[i]) * i;
        if (cost > k) {
            const q = Math.floor(k / i),
                r = k % i,
                hi = nums1[i - 1] - q;
            let ans = hi * hi * (i - r) + (hi - 1) * (hi - 1) * r;
            for (let j = i; j < n; j++) {
                ans += nums1[j] * nums1[j];
            }
            return ans;
        }
        k -= cost;
    }
    return 0;
};