const NUMBER_MAP = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
};

export const say = (n) => {
	if (n < 0 || n > 999999999999)
		throw new Error("Number must be between 0 and 999,999,999,999.");
	if (n === 0) return "zero";
	if (n % 10 === 0 && n < 100) return NUMBER_MAP[n];

	let parse = (nn) => {
		let amount = "";
		let billions = Math.floor(nn / 1000000000);
		nn -= billions * 1000000000;
		let millions = Math.floor(nn / 1000000);
		nn -= millions * 1000000;
		let thousands = Math.floor(nn / 1000);
		nn -= thousands * 1000;
		let hundreds = Math.floor(nn / 100);
		nn -= hundreds * 100;
		let tens = Math.floor(nn / 10);
		nn -= tens * 10;
		let digits = nn;
		if (billions > 0) amount += parse(billions) + " billion ";
		if (millions > 0) amount += parse(millions) + " million ";
		if (thousands > 0) amount += parse(thousands) + " thousand ";
		if (hundreds > 0) amount += NUMBER_MAP[hundreds] + " hundred ";
		if (tens > 0) {
			if (tens > 1) {
				if (hundreds > 0) amount += " ";
				amount += NUMBER_MAP[tens * 10];
				if (digits > 0) amount += "-" + NUMBER_MAP[digits];
			} else {
				amount += NUMBER_MAP[tens * 10 + nn];
			}
		} else if (digits > 0) amount += NUMBER_MAP[digits];

		return amount;
	};

	return parse(n)
		.split(" ")
		.filter((s) => s !== "")
		.join(" ")
		.trim();
};