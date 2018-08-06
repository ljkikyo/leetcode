/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	var max_value = -1;
	var max_index = 0;
	var water = 0;
	for(var i = 0;i < height.length; i++) {
		if(height[i] > max_value) {
			max_value = height[i];
			max_index = i;
		}
	}
	for(var j = 0,left_max = 0;j < max_index; j++) {
		if(height[j] > left_max) {
			left_max = height[j];
		}else {
			water += left_max - height[j];
		}
	}
	for(var k = height.length-1,right_max = 0;k > max_index; k--) {
		if(height[k] > right_max) {
			right_max = height[k];
		}else {
			water += right_max - height[k];
		}
	}
	return water;
}