/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function check(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);
  }
  return check(root, root);
};
