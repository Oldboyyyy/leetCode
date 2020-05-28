/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const l = nums.length;
  let result = [];
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        break;
      }
    }
    if (result.length === 2) break;
  }
  return result;
};

// 方法二 一次循环

// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let dif = target - nums[i];
//     if (map.has(dif)) {
//       return [map.get(dif), i];
//     }
//     map.set(nums[i], i);
//   }
// };
