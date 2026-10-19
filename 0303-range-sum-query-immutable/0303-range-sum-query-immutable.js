/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefix = [0];

    for (let n of nums) {
        this.prefix.push(this.prefix.at(-1) + n);
    }
};

NumArray.prototype.sumRange = function(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
};
