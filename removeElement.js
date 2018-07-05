/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @leetcodenum 27
 */
var removeElement = function(nums, val) {
	var idx = 0;
	for(var i = 0;i < nums.length;i++) {
		if(nums[i] != val) {
			nums[idx] = nums[i];
			idx++;
		}
	}
	return idx;
}