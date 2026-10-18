/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const MOD = 1000000007n;
    const n = nums.length;
    const combinations = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0n));
    
    for (let i = 0; i <= n; i++) {
        combinations[i][0] = 1n;
        for (let j = 1; j <= i; j++) {
            combinations[i][j] = (combinations[i - 1][j - 1] + combinations[i - 1][j]) % MOD;
        }
    }
    
    const getWays = (arr) => {
        if (arr.length <= 2) return 1n;
        
        const root = arr[0];
        const left = [], right = [];
        
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < root) left.push(arr[i]);
            else right.push(arr[i]);
        }
        
        const ways = combinations[left.length + right.length][left.length];
        return (((ways * getWays(left)) % MOD) * getWays(right)) % MOD;
    };
    
    return Number((getWays(nums) - 1n + MOD) % MOD);
};