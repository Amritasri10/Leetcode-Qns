/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rows = [
        "qwertyuiop",
        "asdfghjkl",
        "zxcvbnm"
    ];

    return words.filter(word =>
        rows.some(row =>
            [...word.toLowerCase()].every(ch => row.includes(ch))
        )
    );
};