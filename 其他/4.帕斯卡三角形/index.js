/**
 * 
 * 输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
方法 1:
解题思路: 
1.每一层的数组元素的个数对应着第几层; 第一层 1 个;第二层 2 个;以此类推 实际就是对应入参
2.从第三层开始, 除了首尾的 1, 其他元素是上一次相邻数字之和

方法 2:
1.思路不变
2.运营两层 for循环实现
3.第一层循环负责层数 第二个循环负责每一层输出
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let index = 1;
  const result = [];
  while (index <= numRows) {
    if (index === 1) {
      result.push([1]);
    }
    if (index === 2) {
      result.push([1, 1]);
    }
    if (index >= 3) {
      const res = [];
      const prev = result[index - 2];
      for (let i = 0, l = prev.length; i < l; i++) {
        if (i < l - 1) {
          res.push(prev[i] + prev[i + 1]);
        }
      }
      res.push(1);
      res.unshift(1);
      result.push(res);
    }
    index++;
  }
  return result;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(row);
  }
  return result;
};
