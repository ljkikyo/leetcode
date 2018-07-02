/**
 * @param {number[]} nums
 * @return {number}
 * @leetcodeNum 26
 */
var removeDuplicates = function(nums) {
	var idx = 1;
    for(var i = 0;i < nums.length;i++) {
    	if(i > 0 && nums[i] != nums[i -1]) {
    		nums[idx] = nums[i];
    		idx++; 
    	}
    }
    return idx;
}