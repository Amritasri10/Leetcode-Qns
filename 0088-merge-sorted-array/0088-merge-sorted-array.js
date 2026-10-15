/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let arr1 = nums1.slice(0,m);
    let arr2 = nums2.slice(0,n);
    let merged =arr1.concat(arr2);
    merged.sort((a,b)=>a - b);
    for (let i=0;i<merged.length; i++){
        nums1[i] = merged[i];
    }
};