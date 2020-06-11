/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  if (!root) return result;
  function dig(list) {
    if (!list.length) return;
    result.push(list.map((node) => node.val));
    const l = [];
    list.forEach((treeNode) => {
      const { left, right } = treeNode;
      !!left && l.push(left);
      !!right && l.push(right);
    });
    dig(l);
  }
  dig([root]);
  return result;
};
