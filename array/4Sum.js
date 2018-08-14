/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * @leetcodeNum 18
 */
var fourSum = function(nums, target) {
	var result = [];
    var arr = nums.sort(function(a,b) {
    	return a - b;
    });
    var len = arr.length;
    for(var i = 0;i < len - 3;i++) {
    	if(i > 0 && arr[i] == arr[i-1]) {
    		continue;
    	}
    	for(var j = i + 1;j < len - 2;j++) {
    		if(j > i + 1 && arr[j] == arr[j-1]) {
    			continue;
    		}
    		var m = j + 1;
    		var n = len - 1;
    		while(m < n) {
    			var sum = arr[i] + arr[j] + arr[m] + arr[n];
    			if(sum == target) {
    				result.push([arr[i],arr[j],arr[m],arr[n]]);
    				m++;
    				n--;
    				while(m < n && arr[m] == arr[m-1]) {
    					m++;
    				}
    				while(m < n && arr[n] == arr[n+1]) {
    					n--;
    				}
    			}else if(sum < target) {
    				m++;
    			}else {
    				n--;
    			}
    		}
    	}
    }
    return result;
}
console.log(fourSum([1, 0, -1, 0, -2, 2],0));