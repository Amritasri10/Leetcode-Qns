/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let minimum = Math.min(...nums);
    let maximum = Math.max(...nums);

    while (minimum !== 0) {

        let remainder = maximum % minimum;

        maximum = minimum;
        minimum = remainder;
    }

    return maximum;
};
