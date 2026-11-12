/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {
    let result = n;
    let newResult = 0;
    let divisor = 2;
    while (n > 1) {
        while (n % divisor === 0) {
            newResult += divisor;
            n /= divisor;
        }
        divisor++;
    }

    if (newResult < result) {
        return smallestValue(newResult);
    }

    return result;
};