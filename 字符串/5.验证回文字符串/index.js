/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === '') {
    return true;
  }
  s = s.replace(/[^a-z0-9]+/gi, '').toLocaleUpperCase();
  let l = s.length;

  let left = s.slice(0, Math.floor(l / 2));
  let right = s
    .slice(Math.ceil(l / 2), l)
    .split('')
    .reverse()
    .join('');
  return left === right;
};

// 方法二
/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
//   s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
//   let n = s.length;
//   let left = 0;
//   let right = n - 1
//   while (left < right) {
//     if (s[left] != s[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true
// };
