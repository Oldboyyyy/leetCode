/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let j = s.length - 1;
  for (let i = 0, l = s.length; i < l; i++) {
    if (i <= j) {
      const temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      j--;
    } else {
      break;
    }
  }
};

// 方法二
// var reverseString = function (s) {
//   let temp;
//   for (let i = 0; i < s.length / 2; i++) {
//     temp = s[i];
//     s[i] = s[s.length - i - 1];
//     s[s.length - i - 1] = temp;
//   }
// };
