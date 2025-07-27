const shift = (char, min, key) => 
    String.fromCharCode((char.charCodeAt(0) - min + key) % 26 + min)
export const rotate = (text, key) => 
    text.replace (/[a-z]/g, ch => shift (ch, 'a'.charCodeAt(0), key))
        .replace (/[A-Z]/g, ch => shift (ch, 'A'.charCodeAt(0), key))