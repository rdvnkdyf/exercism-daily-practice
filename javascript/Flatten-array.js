const isNil = value => value == null;
export const flatten = collection => collection
  .reduce((result, el) => [...result, ...(Array.isArray(el) ? flatten(el) : !isNil(el) ? [el] : [])], []);