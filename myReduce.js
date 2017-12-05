// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {
	if (arguments.length == 3) {
		var accumulator = arguments[2];
		var i = 0;
	} else {
		var accumulator = arr[0];
		var i = 1;
	}
	while (i < arr.length) {
		accumulator = callback(accumulator, arr[i], i, arr);
		i++;
	}
	return accumulator;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
