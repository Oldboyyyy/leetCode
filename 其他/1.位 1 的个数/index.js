/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const result = {};
  return (() => {
    if (!!result[n]) return result[n];
    const str = Number(n).toString(2);
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == '1') total++;
    }
    result[n] = total;
    return total;
  })();
};
