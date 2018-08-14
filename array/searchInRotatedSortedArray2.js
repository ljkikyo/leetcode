/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 * @enum { 81}
 */
var search = function(nums, target) {
	var left = 0;
	var right = nums.length;
	while(left != right) {
		var mid = parseInt((left + right) / 2);
		if(nums[mid] == target) {
			return true;
		}
		if(nums[left] < nums[mid]) {
			if(target >= nums[left] && target < nums[mid]) {
				right = mid;
			}else {
				left = mid + 1;
			}
		}else if(nums[left] >nums[mid]) {
			if(target <= nums[right-1] && target > nums[mid]) {
				left = mid + 1;
			}else {
				right = mid;
			}
		}else {
			left++;
		}
	}
	return false;
}