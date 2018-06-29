/**
 * @author [author]
 * @description 固定一个元素，另两个元素左右夹逼
 */
var threeSum = function(nums) {
	var result = [];
	nums.sort();
	for(var i = 0;i < nums.length - 2;i++) {
		if(i > 0 && nums[i] == nums[i-1]) {
			continue;
		}
		var j = i + 1;
		var k = nums.length - 1;
		while(j < k) {
			if(nums[i] + nums[j] + nums[k] == 0) {
				result.push([nums[i],nums[j],nums[k]]);
				j++;
				k--;
				while(j < k && nums[j] == nums[j-1]) {
					j++;
				}
				while(j < k && nums[k] == nums[k+1]) {
					k--;
				}
			}else if(nums[i] + nums[j] + nums[k] < 0){
				j++;
			}else {
				k--;
			}
		}
	}
	return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
