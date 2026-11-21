/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sum = 0, diff = 0;

    for (const c of t) {
        sum += c.charCodeAt(0) - 97;
    }

    for (const c of s) {
        diff += c.charCodeAt(0) - 97;
    }

    return String.fromCharCode(sum - diff + 97);
};