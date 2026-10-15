/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
     if (num < 2) return true;

    let left = 1, right = num;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === num) return true;
        else if (square < num) left = mid + 1;
        else right = mid - 1;
    }

    return false;
};