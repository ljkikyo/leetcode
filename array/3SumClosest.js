/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @leetcodeNum 16
 */
var threeSumClosest = function(nums, target) {
		var result = Number.MAX_VALUE;
	var sum = 0;
	var arr = nums.sort(function(a,b) {
		return a - b;
	});
	var len = arr.length;
	for(var i = 0;i < len - 2;i++) {
		if(i > 0 && arr[i] == arr[i-1]) {
			continue;
		}
		var j = i + 1;
		var k = len - 1;
		while(j < k) {
			var total = arr[i] + arr[j] + arr[k];
			var disp = target - total;
			if(Math.abs(result) > Math.abs(disp)) {
				result = disp;
				sum = total;
			}
			if(disp < 0) {
				k--;
			}else {
				j++;
			}

		}
	}
	return sum;
}
console.log(threeSumClosest([-1, 2, 1, -4], 1));