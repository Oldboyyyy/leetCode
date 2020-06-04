/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const head = new ListNode(null);
  let l3 = head;
  while (true) {
    if (!l1 || !l2) break;
    if (l1.val <= l2.val) {
      l3.next = l1;
      l1 = l1.next;
    } else {
      l3.next = l2;
      l2 = l2.next;
    }
    l3 = l3.next;
  }
  l3.next = !l1 ? l2 : l1;
  return head.next;
};

// 方法二 递归
// var mergeTwoLists = function(l1, l2) {
//     if(l1 === null){
//         return l2;
//     }
//     if(l2 === null){
//         return l1;
//     }
//     if(l1.val < l2.val){
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     }else{
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };
