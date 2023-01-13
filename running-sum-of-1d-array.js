/https://leetcode.com/problems/running-sum-of-1d-array/description/?envType=study-plan&id=level-1
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let acc = 0;
    return nums.map(el => acc = el + acc)
};
