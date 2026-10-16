/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
        let result = 0;

    for (let ch of columnTitle) {
        result = result * 26 + ch.charCodeAt(0) - 64;
    }

    return result;

};