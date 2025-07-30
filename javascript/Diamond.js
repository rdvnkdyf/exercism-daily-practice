export const rows = (letter) => {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // Get the letters to be used in the figure.
  const index = alphabets.split('').findIndex(a => a === letter);
  const lettersToBeUsed = alphabets.substr(0, index + 1);
  // Define the side length of the matrix.
  const sideLength = (lettersToBeUsed.length - 1) * 2;
  // Init the result array.
  let output = [];
  // Define the middle index of the row.
  const midIndex = parseInt(sideLength / 2);
  // Loop through all rows of the matrix.
  for (let i = 0; i <= sideLength; i++) {
    // Define the index of the letter. Note that the
    // index starts counting backwards when the end of the
    // letter array is reached.
    let letterIndex;
    if (i < lettersToBeUsed.length) {
      letterIndex = i;
    } else {
      letterIndex = sideLength - i;
    }
    // Init the row variable.
    let row = '';
    // Loop through all cells/columns in the row,
    // write the letter on the correct index and fill
    // rest of the cells with white-spaces.
    for (let k = 0; k <= sideLength; k++) {
      // The first and the last row contains 'A' in the middle.
      if (i === 0 || i === sideLength) {
        if (k !== midIndex) {
          row += ' ';
        } else {
          row += lettersToBeUsed[0];
        }
      // All other rows contains two same letters. The position of the
      // letters on a line is always one step more from the center
      // for each line. Until the side top of the diamond figure is reached.
      } else {
        if (k === midIndex - (letterIndex) || k === midIndex + (letterIndex)) {         
          row += lettersToBeUsed[letterIndex];
        } else {
          row += ' ';
        }
      }
    }
    // Push new row in the result array.
    output.push(row);
  }
  return output;
};