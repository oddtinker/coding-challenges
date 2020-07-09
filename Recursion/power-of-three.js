/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = number => {
	if (number !== 1 && number < 3) {
		return false;
	}
	if (number === 1) {
		return true;
	}
	return isPowerOfThree(number / 3);
}