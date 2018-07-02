/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * @leetcodeNum 18
 */
var fourSum = function(nums, target) {
	var result = [];
	nums.sort(function(a,b) {
		return a - b;
	});
	for(var i = 0;i < nums.length - 3;i++) {
		if(i > 0 && nums[i] == nums[i-1]) {
			continue;
		}
		for(var j = i + 1;j < nums.length - 2;j++) {
			if(j > i + 1 && nums[j] == nums[j-1]) {
				continue;
			}
			var m = j + 1;
			var n = nums.length - 1;
			while(m < n) {
				var sum = nums[i] + nums[j] + nums[m] + nums[n];
				if(sum == target) {
					result.push([nums[i],nums[j],nums[m],nums[n]]);
					m++;
					n--;
					while(m < n && nums[m] == nums[m-1]) {
                        m++;
                    }
                  	while(m < n && nums[n] == nums[n+1]) {
                        n--;
                    }
				}else if(sum < target) {
					m++;
				}else {
					n--;
				}
			}
		}
	}
	return result;
}
console.log(fourSum([1, 0, -1, 0, -2, 2],0));