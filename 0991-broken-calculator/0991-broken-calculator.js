/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(X, Y) {
    let ans = 0
    while (X < Y) {
        ans++
        if (Y % 2) Y++
        else Y /= 2
    }
    return X - Y + ans
};