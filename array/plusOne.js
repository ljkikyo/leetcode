/**
 * @param {number[]} digits
 * @return {number[]}
 * @num 66
 */
var plusOne = function(digits) {
	var digit = 1;
    for(var i = digits.length - 1; i >= 0; i--) {
    	var sum = digits[i] + digit;
    	digit = parseInt(sum/10);
    	digits[i] = sum%10;
    }
    if(digit > 0) {
    		digits.unshift(1); 
    	}
    return digits;
};