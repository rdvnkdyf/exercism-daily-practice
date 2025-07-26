//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldData) => {
  let newData={};
  for(const point in oldData){
    for(const letter of oldData[point]){
      newData[letter.toLowerCase()]=parseInt(point);
    }
  }
  return newData;
};
