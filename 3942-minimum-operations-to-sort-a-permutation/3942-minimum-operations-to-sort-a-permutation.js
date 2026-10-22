/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = A => {
    const n = A.length;
    let asc = 1, dsc = 1;

    for (let i = 1; i < n; i++) {
        asc += A[i] === (A[i - 1] + 1) % n;
        dsc += A[i - 1] === (A[i] + 1) % n;
    }

    if (asc === n)
        return A[0] ? Math.min(n - A[0], A[0] + 2) : 0;

    if (dsc === n)
        return Math.min(n - A.at(-1), A.at(-1)) + 1;
        
    return -1;
};