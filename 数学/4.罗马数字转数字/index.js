const R_NUM = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (!s) return 1;
  if (!!R_NUM[s]) return R_NUM[s];
  let s_copy = s;
  let total = 0;

  while (s_copy.length > 0) {
    let num = 0;
    let k = '';
    Object.keys(R_NUM).forEach((key) => {
      if (s_copy.endsWith(key) && key.length > k.length) {
        num = R_NUM[key];
        k = key;
      }
    });
    console.log(s_copy);
    if (num > 0) {
      total += num;
      s_copy = s.slice(0, s_copy.length - k.length);
    }
  }
  return total;
};
console.log(romanToInt('IX'));
