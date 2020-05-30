/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return '';
  if (strs.length == 1) return strs[0];
  if (strs.indexOf('') > -1) return '';
  let prefix = strs[0] || '';
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === '') break;
    }
    if (prefix === '') break;
  }
  return prefix;
};
