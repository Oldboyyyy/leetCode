/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1;
  while (true) {
    const int = digits[index];
    if (int === 9) {
      digits[index] = 0;
      if (index === 0) {
        digits.unshift(1);
        break;
      }
      index--;
    } else {
      digits[index] = int + 1;
      break;
    }
  }
  return digits;
};
