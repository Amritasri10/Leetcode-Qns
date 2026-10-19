/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0, j = 0, star = -1, match = 0;

    while (i < s.length) {
        if (j < p.length && (p[j] === '?' || p[j] === s[i])) {
            i++;
            j++;
        } else if (j < p.length && p[j] === '*') {
            star = j++;
            match = i;
        } else if (star !== -1) {
            j = star + 1;
            i = ++match;
        } else {
            return false;
        }
    }

    while (j < p.length && p[j] === '*') j++;

    return j === p.length;
};