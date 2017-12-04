// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {
	var arr2 = [];

	for (let i=0; i<arr.length; i++) {
	  arr2[i] = callback(arr[i], i, arr);
	}
	
	return arr2;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
