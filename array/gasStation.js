/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * @num 134
 */
var canCompleteCircuit = function(gas, cost) {
    var sum = 0;
    var total = 0;
    var j = -1;
    for(var i = 0; i < gas.length; i++) {
    	sum += gas[i] - cost[i];
    	total += gas[i] - cost[i];
    	if(sum < 0) {
    		j = i;
    		sum = 0;
    	}
    }
    return total >= 0 ? j + 1 : -1;
};