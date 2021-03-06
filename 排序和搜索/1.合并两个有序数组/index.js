/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index = 0;
  while (index < n) {
    nums1[m + index] = nums2[index++];
  }
  nums1.sort((a, b) => a - b);
};

// 方法二

var merge2 = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
  }

  while (p2 >= 0) {
    nums1[p2] = nums2[p2--];
  }
};
