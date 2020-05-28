/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const strArr = s.split('');
  for (let i = 0, l = strArr.length; i < l; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};
