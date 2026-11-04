/**
 * @param {number} n
 * @param {number} index
 * @param {number} value
 * @return {number}
 */

var minimumMaxValue = function(n, index, value) {
    if (value === 1) return -1;

    // Find the smallest prime factor of value
    let p = value;

    for (let i = 2; i * i <= value; i++) {
        if (value % i === 0) {
            p = i;
            break;
        }
    }

    // Check whether enough smaller elements can exist
    if (2 * index > value - p) {
        return -1;
    }

    // No elements exist after index
    if (index === n - 1) {
        return value;
    }

    // Calculate minimum possible maximum
    return value + p + 2 * (n - index - 2);
};
