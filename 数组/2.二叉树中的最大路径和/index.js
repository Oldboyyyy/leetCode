/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxVal = root.val;
  function dig(treeNode) {
    if (!treeNode) return 0;
    const { val, left, right } = treeNode;
    const leftMax = Math.max(0, dig(left));
    const rightMax = Math.max(0, dig(right));
    maxVal = Math.max(maxVal, leftMax + rightMax + val);
    return val + Math.max(leftMax, rightMax);
  }
  dig(root);
  return maxVal;
};
