/**
 * @param {number} n
 * @return {number}
 *
 */
var climbStairs = function (n) {
  // 尾递归
  function dig(num, ac1 = 1, ac2 = 1) {
    if (num <= 1) return ac2;
    return dig(num - 1, ac2, ac1 + ac2);
  }
  return dig(n);
};
// 原始的递归写法
var climbStairs2 = function (n) {
  if (n <= 1) return 1;
  if (n === 1) return 2;
  return climbStairs2(n - 1) + climbStairs2(n - 2);
};
