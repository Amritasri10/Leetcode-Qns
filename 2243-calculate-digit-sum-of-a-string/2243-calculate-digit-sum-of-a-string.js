/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function digitSum(s, k) {
    const sumDigits = (d) => d.split('').reduce((a, b) => a + +b, 0);
    while (s.length > k) {
        const tmp = [];
        for (let i = 0; i < s.length; i += k) {
            tmp.push(sumDigits(s.substring(i, i + k)));
        }
        s = tmp.join('');
    }
    return s;
}