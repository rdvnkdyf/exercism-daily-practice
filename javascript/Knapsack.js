export const knapsack = (maximumWeight, items) => {
  let Nitems = items.length;
  let valueMatrix = Array(Nitems + 1).fill([]).map((e) => Array(maximumWeight + 1).fill(0));
  
  items.unshift({}); // adding an empty item to simplify index references
  let VWithCurrentItem, VWithoutCurrentItem;
  
  for (let iLine = 1; iLine <= Nitems; iLine++) {
    for (let iCol = 0; iCol <= maximumWeight; iCol++) {
      VWithoutCurrentItem = valueMatrix[iLine - 1][iCol];
      VWithCurrentItem = (items[iLine].weight <= iCol) ? items[iLine].value + valueMatrix[iLine - 1][iCol - items[iLine].weight] : 0
      valueMatrix[iLine][iCol] = Math.max(VWithoutCurrentItem, VWithCurrentItem);
    }
  }
  return valueMatrix[Nitems][maximumWeight];
};