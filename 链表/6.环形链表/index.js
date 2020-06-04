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
var hasCycle = function (head, pos) {
  function dig(node, list) {
    if (!node) return -1;
    const pos = list.findIndex((item) => item === node);
    if (pos > -1) {
      return pos;
    } else {
      list.push(node);
      return dig(node.next, list);
    }
  }
  return dig(head, []) !== -1;
};

// var hasCycle = function (head) {
//   if (!head || !head.next) return false;
//   let fast = head.next.next;
//   let slow = head;
//   while (fast !== slow) {
//     if (!fast || !fast.next) return false;
//     fast = fast.next.next;
//     slow = slow.next;
//   }
//   return true;
// };
