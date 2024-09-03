const LESS_THAN_20: Array<string> = [
	"",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
	"fifteen",
	"sixteen",
	"seventeen",
	"eighteen",
	"nineteen",
];
const TENS: Array<string> = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const THOUSANDS: Array<string> = ["", "thousand", "million", "billion"];

const helper = (number: number): string => {
	if (number == 0) return "";
	else if (number < 20) return LESS_THAN_20[number] + " ";
	else if (number < 100) return TENS[number / 10] + " " + helper(number % 10);
	else return LESS_THAN_20[number / 100] + " Hundred " + helper(number % 100);
};

export const numberToWords = (number: number): string => {
	if (number === 0) return "Zero";

	let words = "";
	let index = 0;

	while (number > 0) {
		if (number % 1000 !== 0) {
			words = helper(number % 1000) + THOUSANDS[index] + " " + words;
			// words = `${helper(number % 1000)}${THOUSANDS[index]} ${words}`;
		}
		number = Math.floor(number / 1000);
		index++;
	}

	return words;
};
