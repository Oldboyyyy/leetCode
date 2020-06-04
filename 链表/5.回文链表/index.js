/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head && !head.next) return true;
  let result = [];
  while (!!head) {
    result.push(head.val);
    head = head.next;
  }
  let left = 0;
  let right = result.length - 1;
  while (left < right) {
    if (result[left] !== result[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// 递归方式
var isPalindrome2 = function (head) {
  let left = head;
  function dig(node) {
    if (!node) return true;
    if (!dig(node.next)) return false;

    const flag = left.val === node.val;
    left = left.next;
    return flag;
  }
  return dig(head);
};
