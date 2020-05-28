/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法一
// var rotate = function (nums, k) {
//   const newK = k % nums.length;
//   if (newK === 0) return nums;

//   const current = nums.splice(nums.length - newK);
//   nums.splice(0, 0, ...current);
// };

// 方法二
// var rotate = function (nums, k) {
//   while (k > 0) {
//     const current = nums.pop();
//     nums.unshift(current);
//     k--;
//   }
// };

// 方法三
var rotate = function (nums, k) {
  const newK = k % nums.length;
  if (newK === 0) return nums;
  const reverse = function (nums, start, end) {
    while (start < end) {
      let tmp = nums[start];
      nums[start] = nums[end];
      nums[end] = tmp;
      start++;
      end--;
    }
  };
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const a = [1, 2, 3, 4, 5, 6, 7];
rotate(a, 3);
console.log(a);
