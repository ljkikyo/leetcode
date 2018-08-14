/**
 * @param {number[]} nums
 * @return {number}
 * leetcodeNum 80
 */
//解法一：
var removeDuplicates = function(nums) {
	var idx = 1;
	var disp = 1;
    for(var i = 0;i < nums.length;i++) {
    	if(i > 0) {
    		if(nums[i] == nums[i - 1]) {
    			disp++;
    		}else {
    			disp = 1;
    		}
    		if(disp < 3) {
    			nums[idx] = nums[i];
    			idx++;
    		}
    	}
    }
    return idx;
}
//解法二：
var removeDuplicates = function(nums) {
	var idx = 2;
    for(var i = 0;i < nums.length;i++) {
    	if(i > 1 && nums[i] != nums[idx - 2]) {
    		nums[idx] = nums[i];
    		idx++;
    	}
    }
    return idx;
}