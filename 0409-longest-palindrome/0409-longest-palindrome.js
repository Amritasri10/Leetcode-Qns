var longestPalindrome = function(s) {
    const freq = {};
    let result = 0;
    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    for (const count of Object.values(freq)) {
        result += count % 2 === 0 ? count : count - 1;
    }
    return result < s.length ? result + 1 : result;
};