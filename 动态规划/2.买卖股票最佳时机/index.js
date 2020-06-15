/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        maxPrice = Math.max(maxPrice, prices[j] - prices[i]);
      }
    }
  }
  return maxPrice;
};

// 一次遍历
var maxProfit2 = function (prices) {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;
  prices.forEach((price) => {
    if (price < min) {
      min = price;
    }
    if (price - min > max) {
      max = price - min;
    }
  });
  return max;
};
