/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
      let words = s.split(" ");
    if (pattern.length !== words.length) return false;

    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < pattern.length; i++) {
        if (map1.get(pattern[i]) !== map2.get(words[i])) return false;
        map1.set(pattern[i], i);
        map2.set(words[i], i);
    }

    return true;
};