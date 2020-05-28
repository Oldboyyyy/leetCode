/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;
  const xArr = String(Math.abs(x)).split('');
  const l = xArr.length;
  for (let i = 0; i < l / 2; i++) {
    const temp = xArr[i];
    xArr[i] = xArr[l - 1 - i];
    xArr[l - 1 - i] = temp;
  }
  const xStr = xArr.join('');
  const num = isNegative ? -1 * xStr : xStr * 1;
  if (num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31)) return 0;
  return num;
};

reverse(1534236469);

//方法二

// var reverse = function (x) {
//   isF = 1;
//   if (x < 0) {
//     isF = -1;
//     x = -x;
//   }
//   x = (x + '').split('').reverse().join('');
//   const sbli = x - 2147483648 + (isF ? 1 : 0);
//   if (sbli > 0) {
//     return 0;
//   }
//   return isF * x;
// };
