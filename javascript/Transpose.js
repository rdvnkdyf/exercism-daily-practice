/**
 *
 * @param {string[]} matrix
 */

// ['A1']

export const transpose = (matrix) => {
  let transposed = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let rowLength = 0;
      let element = matrix[i][j];

      if (transposed[j]) {
        rowLength = transposed[j].length;
      }

      if (i > rowLength) {
        element = element.padStart(i - rowLength + 1, " ");
      }

      transposed[j] ? (transposed[j] += element) : (transposed[j] = element);
    }
  }

  return transposed;
};