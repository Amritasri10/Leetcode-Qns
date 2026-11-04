/**
 * @param {number[]} nums
 * @param {number[]} locked
 * @param {number} k
 * @return {number}
 */

var minOperations = function(nums, locked, k) {
    const n = nums.length;

    // Step 1: Find all positions that must be unlocked
    const diff = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const target = nums[i] - 1;

        if (i !== target) {
            const left = Math.min(i, target);
            const right = Math.max(i, target);

            diff[left]++;
            diff[right + 1]--;
        }
    }

    // Step 2: Count required unlock operations
    let requiredUnlocks = 0;
    let active = 0;

    for (let i = 0; i < n; i++) {
        active += diff[i];

        if (active > 0 && locked[i] === 1) {
            requiredUnlocks++;
        }
    }

    // Cannot unlock more than k positions
    if (requiredUnlocks > k) {
        return -1;
    }

    // Step 3: Calculate inversion count
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] > nums[j]) {
                swaps++;
            }
        }
    }

    // Step 4: Return minimum operations
    return requiredUnlocks + swaps;
};
