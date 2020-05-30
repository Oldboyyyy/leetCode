/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = '1';
  while (n > 1) {
    let current = result[0];
    let count = 1;
    let res = '';
    for (let i = 1, l = result.length; i < l; i++) {
      if (current === result[i]) {
        count++;
        if (i === l - 1) {
          res += count + current;
        }
      } else {
        res += count + current;
        count = 1;
        current = result[i];
        if (i === l - 1) {
          res += count + current;
        }
      }
    }
    if (result.length === 1) {
      result = 1 + result;
    } else {
      result = res;
    }
    n--;
  }
  console.log(result);
  return result;
};

//方法二
// var countAndSay = function (n) {
//   let prev = '1';
//   for (let i = 1; i < n; i++) {
//     prev = prev.replace(/(\d)\1*/g, (item) => `${item.length}${item[0]}`);
//   }
//   return prev;
// };
