/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
    let sum = 0
    let max = nums[0]
    
    let res = []
    for(let i = 0; i < nums.length; i++){
        max = Math.max(nums[i], max);
        sum += (max + nums[i])
        res.push(sum);
    }
    
    return res
};