/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
        let a = {}, b = {};

    for (let i = 0; i < s.length; i++) {
        if (a[s[i]] !== b[t[i]]) return false;
        a[s[i]] = i + 1;
        b[t[i]] = i + 1;
    }

    return true;

};