export const spiralMatrix = (n) => {
  const result = [];
  let next = 0;
  // Add a layer at a time
  for (let i = 0; i < n; ++i) {
    // Add the new column
    result.map(row => (row.unshift(next++), row));
    // Add the new row
    result.push([...Array(i+1)].map(_ => next++));
    // Flip the columns aroud
    result.reverse();
    // Flip the rows around
    result.map(row => (row.reverse()));
  }
  // Reverse all numbers so 1 starts at the top left instead of 0 at the center
  return result.map(row => row.map(k => n*n - k));
};