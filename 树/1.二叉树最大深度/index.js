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
var maxDepth = function (root) {
  let depth = 0;
  function dig(treeNode, d) {
    if (!treeNode) return (depth = Math.max(d, depth));
    d++;
    const { left, right } = treeNode;

    dig(left, d);
    dig(right, d);
  }
  dig(root, depth);
  return depth;
};
