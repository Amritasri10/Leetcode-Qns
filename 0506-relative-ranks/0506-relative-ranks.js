/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sorted = [...score].sort((a, b) => b - a);
    const ranks = new Map();

    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) ranks.set(sorted[i], "Gold Medal");
        else if (i === 1) ranks.set(sorted[i], "Silver Medal");
        else if (i === 2) ranks.set(sorted[i], "Bronze Medal");
        else ranks.set(sorted[i], String(i + 1));
    }

    return score.map(s => ranks.get(s));
};