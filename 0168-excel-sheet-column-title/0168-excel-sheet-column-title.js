/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
        let res = "";

    while (columnNumber > 0) {
        columnNumber--;
        res = String.fromCharCode(65 + columnNumber % 26) + res;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return res;

};