/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n === 1) return 0;
    
    let steps = 0;
    let factor = 2;
    
    while (n > 1) {
        while (n % factor === 0) {
            steps += factor;
            n = Math.floor(n / factor);
        }
        factor++;
    }
    
    return steps;
};