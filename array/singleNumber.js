/**
 * @param {number[]} nums
 * @return {number}
 * @num 136
 * @description 异或运算的运算律有一条是：a ^ b ^ a = b
 */
var singleNumber = function(nums) {
    var res = nums[0];
    for(var i = 1; i < nums.length; i++) {
    	res = res ^ nums[i];
    }
    return res;
};