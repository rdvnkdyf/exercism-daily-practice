export const keep = (arr, func) => arr.filter(func);
export const discard = (arr, func) => arr.filter(a => !func(a));