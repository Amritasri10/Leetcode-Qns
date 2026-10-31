/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    const answers = [];

    function remove(text, scanStart, deleteStart, open, close) {
        let balance = 0;

        for (let i = scanStart; i < text.length; i++) {
            if (text[i] === open) {
                balance++;
            } else if (text[i] === close) {
                balance--;
            }

            if (balance >= 0) {
                continue;
            }

            for (let j = deleteStart; j <= i; j++) {
                if (text[j] === close && (j === deleteStart || text[j - 1] !== close)) {
                    remove(text.slice(0, j) + text.slice(j + 1), i, j, open, close);
                }
            }

            return;
        }

        const reversed = text.split("").reverse().join("");

        if (open === "(") {
            remove(reversed, 0, 0, ")", "(");
        } else {
            answers.push(reversed);
        }
    }

    remove(s, 0, 0, "(", ")");
    return answers;
};