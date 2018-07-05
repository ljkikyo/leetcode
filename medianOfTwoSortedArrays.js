/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * @description 转换为求第K大的数
 * @leetcodenum 4
 */
var findMedianSortedArrays = function(nums1, nums2) {
	var len1 = nums1.length;
	var len2 = nums2.length;
	var total = len1 + len2;
	if(total % 2 != 0) {
		return findKth(nums1,0,len1-1,nums2,0,len2-1,parseInt(total/2)+1);
	}else {
		var result1 = findKth(nums1,0,len1-1,nums2,0,len2-1,total/2);
		var result2 = findKth(nums1,0,len1-1,nums2,0,len2-1,total/2+1);
		return (result1+result2)/2;
	}
};
var findKth = function(arr1,left1,right1,arr2,left2,right2,k) {
	var length1 = right1-left1+1;
	var length2 = right2-left2+1;
	if(length1>length2) {
		return findKth(arr2,left2,right2,arr1,left1,right1,k);
	}
	if(length1 == 0) {
		return arr2[left2+k-1];
	}
	if(k == 1) {
		return Math.min(arr1[left1],arr2[left2]);
	}
	var p1 = Math.min(parseInt(k/2),length1);
	var p2 = k - p1;
	if(arr1[left1+p1-1] < arr2[left2+p2-1]) {
		return findKth(arr1,left1+p1,right1,arr2,left2,right2,k-p1);
	}else if(arr1[left1+p1-1] > arr2[left2+p2-1]) {
		return findKth(arr1,left1,right1,arr2,left2+p2,right2,k-p2);
	}else {
		return arr1[left1+p1-1];
	}
}


