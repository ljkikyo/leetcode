/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @leetcodenum 48
 */
var rotate = function(matrix) {
	var len = matrix[0].length;
    var temp;
    for(var i = 0; i < parseInt(len/2); i++) {
        for(var j = 0; j < len;j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[len-1-i][j];
            matrix[len-1-i][j] = temp;
        }
    }
    for(var i = 0; i < len; i++) {
        for(var j = i+1; j < len;j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};