/**
 * 解题思路:
 * ^ 是按位异或
 *
 * 1  1   0
 * 1  0   1
 * 0  1   1
 * 0  0   0
 * 两个相同的数字按位异或后得到的是 0
 * 题目: 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 按位异或完美解决
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};

// var singleNumber = function(nums) {
//   const map = nums.reduce((ret, num)=> {
//     ret[num] = (ret[num] || 0) + 1;
//     return ret
//   }, {});
//   return Object.keys(map).find(key => map[key] == 1) || nums[0]
// };
