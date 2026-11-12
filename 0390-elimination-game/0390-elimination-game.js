/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let left = 1;
    let right = n;
    let step = 1;
    let fromLeft = true;

    while (left < right) {
        const nums = (right - left) / step + 1;
        if (fromLeft) {
            left += step;
            if (nums % 2 === 1) right -= step;
        } else {
            right -= step;
            if (nums % 2 === 1) left += step;
        }
        fromLeft = !fromLeft;
        step *= 2;
    }
    return left;
};