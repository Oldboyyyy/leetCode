/**
 * @param {string} str
 * @return {number}
 */
const Max = Math.pow(2, 31) - 1;
const Min = Math.pow(-2, 31);
var myAtoi = function (str) {
  const num = parseInt(str, 10);
  return isNaN(num) ? 0 : Math.max(Math.min(Max, num), Min);
};
