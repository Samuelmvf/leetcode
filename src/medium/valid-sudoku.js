/*
* 36. Valid Sudoku

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
* */

var isValidSudoku = function(board) {
  const existentNumbersInLineAndColumns = {}
  const columnPrefix = "COLUMN";
  const linePrefix = "LINE";
  const blockPrefix = "BLOCK";

  for (let i = 0; i < board.length; i++) {
    const line = board[i];

    for (let j = 0; j < line.length; j++) {
      const number = board[i][j]

      if (number === ".")
        continue;

      if (existentNumbersInLineAndColumns[linePrefix + i + number]) {
        return false;
      } else {
        existentNumbersInLineAndColumns[linePrefix + i + number] = true;
      }

      if (existentNumbersInLineAndColumns[columnPrefix + j + number]) {
        return false;
      } else {
        existentNumbersInLineAndColumns[columnPrefix + j + number] = true;
      }

      if (existentNumbersInLineAndColumns[blockPrefix + parseInt(i/3) + parseInt(j/3) + number]) {
        return false;
      } else {
        existentNumbersInLineAndColumns[blockPrefix + parseInt(i/3) + parseInt(j/3) + number] = true;
      }
    }
  }

  return true;
};

let board = [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board)) // true

board =
  [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board)) // false
