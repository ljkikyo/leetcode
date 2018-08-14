/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @num 73
 */
var setZeroes = function(matrix) {
    var idx1 = {};
    var idx2 = {};
    for(var i = 0 ; i < matrix.length; i++) {
    	for(var j = 0; j < matrix[0].length; j++) {
    		if(matrix[i][j] == 0) {
    			idx1[i] = true;
    			idx2[j] = true;
    		}
    	}
    }
    for(var m = 0; m < matrix.length; m++) {
    	if(idx1[m]) {
    		for(var n = 0; n < matrix[0].length; n++) {
    			matrix[m][n] = 0;
    		}
    	}
    }
    for(var p = 0; p < matrix[0].length; p++) {
    	if(idx2[p]) {
    		for(var k = 0; k < matrix.length; k++) {
    			matrix[k][p] = 0;
    		}
    	}
    }
};