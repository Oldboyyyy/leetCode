/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (!n) return false;
  if (n === 1) return true;
  return /^1(0)+$/.test(Number(n).toString(3));
};

// 对数的方式
var ISPowerOfThree = function (n) {
  return n > 0 && (Math.log10(n) / Math.log10(3)) % 1 === 0;
};
