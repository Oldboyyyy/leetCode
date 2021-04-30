/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const temp = {};
  let result;
  const max = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    temp[element] = !temp[element] ? 1 : temp[element] + 1;
    if (temp[element] > max) {
      result = element;
      break;
    }
  }
  return result;
};

// 官方解法 https://leetcode-cn.com/problems/majority-element/solution/duo-shu-yuan-su-by-leetcode-solution/
