export const largestProduct = (serieNumber, span) => {
  if (span > serieNumber.length) {
    throw new Error("span must not exceed string length"); // Changed error message here
  }
  if (span === 0) {
    return 1;
  }
  if (span < 0) {
    throw new Error("span must not be negative"); // Changed error message here
  }
  if (/[a-zA-Z]/.test(serieNumber)) { // Improved regex for checking non-digits
    throw new Error("digits input must only contain digits");
  }
  
  let maxProduct = 0; // Initialize maxProduct to 0

  if (serieNumber.length === 0 || span > serieNumber.length) {
    if (span === 0) return 1;
    throw new Error('span must not exceed string length');
  }

  // Handle cases where digits might contain non-numeric characters, even if regex handles it
  for (let i = 0; i <= serieNumber.length - span; i++) {
    let currentProduct = 1;
    let substring = serieNumber.substring(i, i + span);
    
    for (let j = 0; j < substring.length; j++) {
      const digit = parseInt(substring[j], 10);
      if (isNaN(digit)) { // Defensive check for non-digit characters in substring
        throw new Error("digits input must only contain digits");
      }
      currentProduct *= digit;
    }
    
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }

  return maxProduct;
};