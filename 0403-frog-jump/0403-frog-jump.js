/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let dp = new Map();
    for (let s of stones) dp.set(s, new Set());
    dp.get(0).add(0);

    for (let s of stones) {
        for (let k of dp.get(s)) {
            for (let jump = k - 1; jump <= k + 1; jump++) {
                if (jump > 0 && dp.has(s + jump)) {
                    dp.get(s + jump).add(jump);
                }
            }
        }
    }

    return dp.get(stones[stones.length - 1]).size > 0;
};