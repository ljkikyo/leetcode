/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @leetcodenum 48
 */
var rotate = function(matrix) {
	var len = matrix[0].length;
    for(var i = 0; i < parseInt(len/2); i++) {
    	for(var j = 0; j < len;j++) {
    		swap(matrix[i][j], matrix[len-1-i][j]);
    	}
    }
    for(var i = 0; i < len; i++) {
    	for(var j = i+1; j < len;j++) {
    		swap(matrix[i][j], matrix[j][i]);
    	}
    }
};
var swap = function(a,b) {
	var temp;
	temp = a;
	a = b;
	b = temp;
}