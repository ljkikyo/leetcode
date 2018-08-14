/**
 * @param {number} n
 * @return {number}
 * @num 70
 * @description 斐波那契数列
 */
var climbStairs = function(n) {
    var pre = 0;
    var cur = 1;
    for(var i = 0; i < n; i++) {
    	var temp = pre + cur;
    	pre = cur;
    	cur = temp;
    }
    return cur;
};