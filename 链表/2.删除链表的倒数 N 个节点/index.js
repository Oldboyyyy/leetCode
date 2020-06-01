/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next) return null;
  let node = head;
  let arr = [];
  while (!!node) {
    arr.push(node);
    node = node.next;
  }
  if (arr.length > n) {
    let curNode = arr[arr.length - n - 1];
    curNode.next = curNode.next.next;
  } else {
    return arr[1];
  }
  return head;
};

// 方法二
// var removeNthFromEnd = function (head, n) {
//   let dummy = new ListNode(null);
//   dummy.next = head;
//   let slow = dummy;
//   let fast = dummy;
//   for (let i = 0; i <= n; i++) {
//     fast = fast.next;
//   }
//   while (fast != null) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//   slow.next = slow.next.next;
//   return dummy.next;
// };
