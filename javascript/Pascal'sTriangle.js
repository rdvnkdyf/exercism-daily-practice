//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (count) => {
let rows=[];
  for (let i = 0; i < count; i++) {
    let row = new Array(i + 1).fill(1); 
    console.log(row)
    for (let j = 1; j < i; j++) {
      row[j]=rows[i-1][j-1]+rows[i-1][j];
    }
      rows.push(row);
  }
  return rows;
};
