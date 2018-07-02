/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @leetcodeNum 16
 */
var threeSumClosest = function(nums, target) {
	var result = Number.MAX_VALUE;
	var sum = 0;
	nums.sort(function(a,b) {
		return a - b;
	});
	for(var i = 0;i < nums.length - 2;i++) {
		var j = i + 1;
		var k = nums.length - 1;
		while(j < k) {
			var total = nums[i] + nums[j] + nums[k];
			var disp = target - total;
			if(Math.abs(result) > Math.abs(disp)) {
				result = disp;
				sum = total;
			}
			if(disp > 0) {
				j++;
			}else {
				k--;
			}
		}
	}
	return sum;
}
console.log(threeSumClosest([-1, 2, 1, -4], 1));