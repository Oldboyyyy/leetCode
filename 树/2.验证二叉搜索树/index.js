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

// 深度优先 -> 中序遍历 顺序 左 根 右
// 这里搜索遍历出来的顺序肯定是升序
var isValidBST = function (root) {
  let pre = Number.MIN_SAFE_INTEGER;
  function dig(treeNode) {
    if (!treeNode) return true;
    if (!dig(treeNode.left)) return false;

    if (treeNode.val <= pre) return false;

    pre = treeNode.val;

    return dig(treeNode.right);
  }

  return dig(root);
};
