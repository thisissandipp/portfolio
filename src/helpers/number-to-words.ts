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

const helper = (difference: number): string => {
	if (difference == 0) return "";
	else if (difference < 20) return LESS_THAN_20[difference] + " ";
	else if (difference < 100) return TENS[Math.floor(difference / 10)] + " " + helper(difference % 10);
	else return LESS_THAN_20[Math.floor(difference / 100)] + " hundred " + helper(difference % 100);
};

export const numberToWords = (difference: number): string => {
	if (difference === 0) return "zero";

	let words = "";
	let index = 0;

	while (difference > 0) {
		if (difference % 1000 !== 0) {
			words = helper(difference % 1000) + THOUSANDS[index] + " " + words;
			// words = `${helper(difference % 1000)}${THOUSANDS[index]} ${words}`;
		}
		difference = Math.floor(difference / 1000);
		index++;
	}

	return words;
};
