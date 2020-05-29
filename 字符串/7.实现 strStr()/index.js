/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   if (needle === '') return 0;
//   const reg = new RegExp(needle);
//   const res = reg.exec(haystack);
//   return !!res ? res.index : -1;
// };

var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  const length = needle.length;
  let index = 0;

  while (index + length <= haystack.length) {
    const str = haystack.slice(index, index + length);
    if (str === needle) return index;
    index++;
  }
  return -1;
};
