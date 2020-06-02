/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//迭代模式
var reverseList = function (head) {
  let prevNode = null;
  while (!!head) {
    const newNode = new ListNode(head.val);
    if (!prevNode) {
      newNode.next = null;
    } else {
      newNode.next = prevNode;
    }
    prevNode = newNode;
    head = head.next;
  }
  return prevNode;
};

// 递归
// var reverseList = function (head) {
//   if (!head || !head.next) return head;

//   const p = reverseList(head.next);
//   const next = head.next;
//   next.next = head;
//   head.next = null;
//   return p;
// };
