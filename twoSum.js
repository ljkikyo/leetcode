/**
 * @param  {nums[]} nums
 * @param  {number[]} target
 * @return {[number[]}
 * @description 在遍历数组 nums 的时候会做两件事：
 * 其一是生成哈希表 arr，其二是在之前生成的哈希表 arr 中进行查找
 */
var twoSum = function(nums, target) {
	var result = [];
	var map = {};
	for(var i = 0;i < nums.length; i++) {
		var j = target - nums[i];
		if(map[j] != undefined) {
			result.push(i, map[j]);
			return result;
		}else {
			map[nums[i]] = i;
		}
	}
}
console.log(twoSum([2, 7, 11, 15], 9));