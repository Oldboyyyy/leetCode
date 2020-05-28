/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const sortedNums1 = nums1.sort((a, b) => a - b);
  const sortedNums2 = nums2.sort((a, b) => a - b);
  let ids1 = 0,
    ids2 = 0;
  const result = [];
  while (ids1 < nums1.length && ids2 < nums2.length) {
    console.log(ids1, ids2);
    if (sortedNums1[ids1] === sortedNums2[ids2]) {
      result.push(sortedNums1[ids1]);
      ids1++;
      ids2++;
    } else if (sortedNums1[ids1] > sortedNums2[ids2]) {
      ids2++;
    } else {
      ids1++;
    }
  }
  return result;
};
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

// 方法二

//  intersect = function (nums1, nums2) {
//    const intersection = [];
//    for (let i = 0; i < nums1.length; i++) {
//      let j = nums2.indexOf(nums1[i]);
//      if (j > -1) {
//        intersection.push(nums2.splice(j, 1)[0]);
//      }
//    }
//    return intersection;
//  };
