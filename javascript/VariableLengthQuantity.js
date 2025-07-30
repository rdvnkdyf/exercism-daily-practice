export const encode = (uint32s) => {
  return uint32s.map((elm) => {
    if (elm === 0) return [0];
    let bytes = [];
    while (elm > 0) {
      let byte = 0x7f & elm;
      if (bytes.length != 0) byte |= 0x80;
      bytes = [byte, ...bytes];
      elm >>>= 7;
    }
    return bytes;
  }).reduce((out, elm) => [...out, ...elm]);
};
export const decode = (bytes) => {
  if ((0x80 & bytes[bytes.length - 1]) != 0) throw new Error('Incomplete sequence');
  let i = 0;
  return bytes.reduce((out, byte) => {
    i <<= 7;
    i |= 0x7f & byte;
    if ((0x80 & byte) == 0) {
      const res = i >>> 0;
      i = 0;
      return [...out, res];
    }
    return out;
  },[]);
};