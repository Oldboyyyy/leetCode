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
