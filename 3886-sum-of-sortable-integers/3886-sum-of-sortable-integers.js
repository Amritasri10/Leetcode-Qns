/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function(nums) {
    
};/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function (nums) {
    const n = nums.length;
    let total = 0;
    for (let k = 1; k <= n; k++) {
        if (n % k !== 0) continue;
        let ok = true;
        let prevMax = 0;
        for (let base = 0; base < n; base += k) {
            let desc = 0;
            let mn = nums[base], mx = nums[base];
            for (let j = 0; j < k; j++) {
                const a = nums[base + j];
                const b = nums[base + ((j + 1) % k)];
                if (a > b) desc++;
                if (a < mn) mn = a;
                if (a > mx) mx = a;
            }
            if (desc > 1 || prevMax > mn) {
                ok = false;
                break;
            }
            prevMax = mx;
        }
        if (ok) total += k;
    }
    return total;
};