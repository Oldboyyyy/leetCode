/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const ss = s.split('').sort().join('');
  const tt = t.split('').sort().join('');
  return ss === tt;
};
