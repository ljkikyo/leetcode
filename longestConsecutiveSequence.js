/**
 * @param {number[]} nums
 * @return {number}
 * @leetcodenum 128
 */
var longestConsecutive = function(nums) {
	var used = {};
	var longest = 0;
	for(var i = 0;i < nums.length;i++) {
		used[nums[i]] = false;
	}
	for(var j = 0; j < nums.length; j++) {
		var length = 1;
		if(used[nums[j]]) {
			continue;
		}
		used[nums[j]] = true;
		var next = nums[j] + 1;
		var prev = nums[j] - 1;
		while(nums.indexOf(next) != -1) {
			length++;
			used[next] = true;
			next++;
		}
		while(nums.indexOf(prev) != -1) {
			length++;
			used[prev] = true;
			prev--;
		}
		longest = Math.max(length,longest);
	}
	return longest;
}