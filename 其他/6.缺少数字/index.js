/**
 * 解题思路
 * 算出全部数字之和, 算出已有数字之和
 * 二者之差就是缺的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let total = nums.length;
  const sum = nums.reduce((res, item, index) => {
    res += item;
    total += index;
    return res;
  }, 0);
  return total - sum;
};
