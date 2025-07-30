const KILO = 1000;
const MEGA = 1000 * KILO; // 1,000,000
const GIGA = 1000 * MEGA; // 1,000,000,000

export class ResistorColorTrio {
  // Defines the color codes for resistors
  static COLORS = [
    'black', 'brown', 'red', 'orange', 'yellow',
    'green', 'blue', 'violet', 'grey', 'white'
  ];

  // Static method to decode an array of colors into a numeric resistor value
  static decodeValue = colors => {
    // The problem specifies that only the first three colors are relevant:
    // First color: first digit
    // Second color: second digit
    // Third color: multiplier (number of zeros)
    const relevantColors = colors.slice(0, 3);

    // Get the numeric code for each of the first three colors
    const value1 = ResistorColorTrio.COLORS.indexOf(relevantColors[0]);
    const value2 = ResistorColorTrio.COLORS.indexOf(relevantColors[1]);
    const multiplierCode = ResistorColorTrio.COLORS.indexOf(relevantColors[2]);

    // Validate if any color is not recognized
    if (value1 === -1 || value2 === -1 || multiplierCode === -1) {
      throw new Error('invalid color');
    }

    // Calculate the base value from the first two bands (e.g., 'red' (2), 'black' (0) -> 20)
    const baseValue = value1 * 10 + value2;

    // Apply the multiplier from the third band (e.g., 'red' (2) -> 10^2 = 100)
    return baseValue * (10 ** multiplierCode);
  };

  #value; // Private field to store the calculated resistor value

  // Constructor takes an array of color names
  constructor(colors) {
    this.#value = ResistorColorTrio.decodeValue(colors);
  }

  // Getter for the formatted label of the resistor value
  get label() {
    let displayValue = this.#value;
    let unit = 'ohms';

    // Determine the appropriate unit (ohms, kiloohms, megaohms, gigaohms)
    // and scale the display value accordingly.
    if (displayValue >= GIGA) {
      displayValue /= GIGA;
      unit = 'gigaohms';
    } else if (displayValue >= MEGA) {
      displayValue /= MEGA;
      unit = 'megaohms';
    } else if (displayValue >= KILO) {
      displayValue /= KILO;
      unit = 'kiloohms';
    }

    // Ensure the displayed value is an integer if it's a whole number after division.
    // This handles cases like 2000 ohms becoming "2 kiloohms" instead of "2.0 kiloohms".
    if (Number.isInteger(displayValue)) {
      // No action needed if it's already an integer
    }

    // Return the formatted string
    return `Resistor value: ${displayValue} ${unit}`;
  }
}