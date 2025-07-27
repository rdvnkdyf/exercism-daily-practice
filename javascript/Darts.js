//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x=0,y=0) => {
 const coord=x**2+y**2;
 return coord>100 ?0:coord>25?1:coord>1?5:10;
};
