var rotate = function (matrix) {
  const length = matrix.length;
  for (let i = 0; i < length; i++) {
    const row = matrix[i];
    for (let j = 0; j < length; j++) {
      matrix[j].splice(length, 0, row[j]);
    }
  }
  matrix.forEach((item) => {
    item.splice(0, length);
  });
  console.log(matrix);
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
// 方法二 按位置换

// var rotate = function (matrix) {
//   var n = matrix.length;
//   for (var row = 0; row < n / 2; row++) {
//     for (var col = row; col < n - row - 1; col++) {
//       var temp = matrix[n - 1 - col][row];
//       matrix[n - 1 - col][row] = matrix[n - 1 - row][n - 1 - col];
//       matrix[n - 1 - row][n - 1 - col] = matrix[col][n - 1 - row];
//       matrix[col][n - 1 - row] = matrix[row][col];
//       matrix[row][col] = temp;
//     }
//   }
// };
