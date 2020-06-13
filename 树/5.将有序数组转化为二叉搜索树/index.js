/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function dig(left, right) {
    if (left > right) return null;
    const p = Math.floor((left + right) / 2);

    const node = new TreeNode(nums[p]);
    node.left = dig(left, p - 1);
    node.right = dig(p + 1, right);
    return node;
  }
  return dig(0, nums.length - 1);
};
