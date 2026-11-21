/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i][i] > ans) {
            if (isPrime(nums[i][i])) {
                ans = nums[i][i]
            }
        }

        if (nums[i][nums.length - 1 - i] > ans) {
            if (isPrime(nums[i][nums.length - 1 - i])) {
                ans = nums[i][nums.length - 1 - i]
            }
        }

    }
    return ans
};

function isPrime(n) {
    if(n == 1) return false
    let count = 2
    const sqrt = Math.sqrt(n)
    while (count <= sqrt) {
        if (n % count == 0) return false
        count++
    }

    return true
}