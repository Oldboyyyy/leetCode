/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (isBadVersion(1)) return 1;
    function dig(l, h) {
      const mid = Math.floor((l + h) / 2);
      if (h - l === 1) return isBadVersion(l) ? l : h;
      if (isBadVersion(mid)) {
        return dig(l, mid);
      } else {
        return dig(mid, h);
      }
    }
    return dig(1, n);
  };
};
