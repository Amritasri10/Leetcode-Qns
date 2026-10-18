/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    var reminder =  n % 2
    if (reminder == 1) {
        return n * 2
    } else if (reminder == 0) {
        return n
    }

};