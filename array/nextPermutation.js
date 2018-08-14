/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @num 31
 */
var nextPermutation = function(nums) {
    var len = nums.length;
    var i = len - 1;
    //找到降序的那一个值的索引
    while(i > 0) {
    	if(nums[i-1] < nums[i]) {
    		break;
    	}else {
    		i--;
    	}
    }
    var j = len - 1;
    var temp;
    //交换降序那一个值和从后往前遍历第一个比它大的值
    if(i > 0) {
    	while(j > i - 1) {
    		if(nums[j] > nums[i - 1]) {
    			temp = nums[i - 1]; 
				nums[i - 1] = nums[j]; 
				nums[j] = temp; 
    			break;
    		}
    		j--;
    	}
    }
    j = 0;
    //从降序那个值之后逆序
    while((i + j) < Math.ceil((i + len - 1)/2)) {
    	temp = nums[len - 1 - j]; 
		nums[len - 1 - j] = nums[j + i]; 
		nums[j + i] = temp;
    	j++;
    }
};





















