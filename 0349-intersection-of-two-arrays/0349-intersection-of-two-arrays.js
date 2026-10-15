/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let result = [];
    for (let num of nums2) {
        if (set1.has(num)) {
            result.push(num);
            set1.delete(num); 
        }
    }   
    return result;
};