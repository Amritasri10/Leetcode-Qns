/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
      if (x === 0 || x === 1) return x;  
    
    let guess = x;
    while (guess * guess > x) {
        guess = Math.floor((guess + x / guess) / 2);
    }
    
    return guess;
};