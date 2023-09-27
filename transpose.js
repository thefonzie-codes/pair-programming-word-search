const transpose = function(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const transposedMatrix = [];

  for (let col = 0; col < numCols; col++) {
    const newRow = [];
    for (let row = 0; row < numRows; row++) {
      newRow.push(matrix[row][col]);
    }
    transposedMatrix.push(newRow);
  }
  return transposedMatrix;
};

const transposeDiagonal = function(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const transposedMatrix = [];

  for (let col = 0; col < numCols; col++) {
    const newRow = [];
    for (let row = 0; row < numRows; row++) {
      newRow.push(matrix[row] + [col + row]);
    }
    transposedMatrix.push(newRow);
  }
  return transposedMatrix;
};

console.log(transposeDiagonal(
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
)),

module.exports = transpose;