/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
const { floor, max, min } = Math;

const countDaysTogether = (a, b, c, d) => {
    const f = s => {
        const m = +s.slice(0, 2), q = +s.slice(3);
        return floor((275 * m) / 9) - 2 * floor((m + 9) / 12) + q - 30;
    };

    return max(0, min(f(b), f(d)) - max(f(a), f(c)) + 1);
};