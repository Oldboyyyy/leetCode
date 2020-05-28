function hasSameNum(arr) {
  arr = arr.filter((num) => num !== '.');
  return arr.length !== new Set(arr).size;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const col = [];
  const box = [];
  for (let i = 0, l = board.length; i < l; i++) {
    if (hasSameNum(board[i])) return false;

    for (let j = 0; j < board[i].length; j++) {
      const num = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (!box[num]) {
        box[num] = [];
      }
      box[num].push(board[i][j]);
      if (!col[j]) {
        col[j] = [];
      }
      col[j].push(board[i][j]);
    }
  }
  for (let i = 0, l = col.length; i < l; i++) {
    if (hasSameNum(col[i])) return false;
  }

  for (let i = 0, l = box.length; i < l; i++) {
    if (hasSameNum(box[i])) return false;
  }
  return true;
};

var arr = [
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];

isValidSudoku(arr);
