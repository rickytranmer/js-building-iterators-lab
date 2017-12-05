function myFilter (arr, callback) {
	var arr2 = [];

	if (callback(arr[i], i, arr)) {
		arr2.push(arr[i]);
	}
}
