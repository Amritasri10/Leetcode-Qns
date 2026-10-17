/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;
    const arr = new Array(n);

    for (let i = 0; i < n; i++) {
        let num = nums[i];
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        arr[i] = [sum, nums[i], i];
    }

    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let swaps = 0;
    const visited = new Uint8Array(n);

    for (let i = 0; i < n; i++) {
        if (visited[i] || arr[i][2] === i) continue;

        let j = i;
        let cycleSize = 0;

        while (!visited[j]) {
            visited[j] = 1;
            j = arr[j][2];
            cycleSize++;
        }

        swaps += cycleSize - 1;
    }

    return swaps;
};