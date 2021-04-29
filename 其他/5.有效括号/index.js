/**
 * 解题思路
 * () {} [] 都是成对出现的
 * 满足的组合是类似于函数数调用栈的形式
 * 只要模拟调用栈的进栈和出栈的顺序就好了,最后栈是空的就表示是合法的
 * 为了方便比较我将括号转换成正负数字  相加为 0 表示是一对  正表示右括号 负的表示左括号 防止)( }{ ][
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3,
  };
  const stack = [];
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (map[element] + map[stack[stack.length - 1]] === 0 && map[element] > 0) {
      stack.pop();
    } else {
      stack.push(element);
    }
  }
  return !stack.length;
};
