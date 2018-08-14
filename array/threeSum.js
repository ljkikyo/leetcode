/**
 * @author [author]
 * @description 固定一个元素，另两个元素左右夹逼
 * @num 15
 */
var threeSum = function(nums) {
	var result = [];
    var len = nums.length;
    var arr = nums.sort(function(a,b) {
        return a - b;
    });
    for(var i = 0; i < len - 2; i++) {
        if(i > 0 && arr[i] == arr[i-1]) {
           continue;
        }
        var j = i + 1;
        var k = len - 1;
        while(j < k) {
            if(arr[i] + arr[j] + arr[k] == 0) {
                result.push([arr[i],arr[j],arr[k]]);
                j++;
                k--;
                while(j < k && arr[j] == arr[j-1]) {
                    j++;
                }
                while(j < k && arr[k] == arr[k+1]) {
                    k--;
                }
            }else if(arr[i] + arr[j] + arr[k] < 0) {
                j++; 
            }else {
                k--;
            }
        }
    }
    return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
