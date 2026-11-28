/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let number = 0;
    let signValue = 1;
    let result = 0;
    let operationsStack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (!isNaN(parseInt(c))) {
            number = number * 10 + parseInt(c);
        } else if (c === '+' || c === '-') {
            result += number * signValue;
            signValue = (c === '-') ? -1 : 1;
            number = 0;
        } else if (c === '(') {
            operationsStack.push(result);
            operationsStack.push(signValue);
            result = 0;
            signValue = 1;
        } else if (c === ')') {
            result += signValue * number;
            result *= operationsStack.pop();
            result += operationsStack.pop();
            number = 0;
        }
    }

    return result + number * signValue;
};