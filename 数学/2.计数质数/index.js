// 解题思路
// https://leetcode-cn.com/problems/count-primes/solution/ru-he-gao-xiao-pan-ding-shai-xuan-su-shu-by-labula/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrimes = new Array(n).fill(true);

  for (let i = 2; i * i < n; i++) {
    if (isPrimes[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrimes[j] = false;
      }
    }
  }
  return isPrimes.reduce((total, primes, index) => {
    if (index > 1 && primes) total++;
    return total;
  }, 0);
};
