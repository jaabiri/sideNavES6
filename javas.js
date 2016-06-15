function reduce (array, callback, initialValue) {
	var counter,
		accumulatedValue;


	if (array.length === 0) {
		return array;
	}
	else {
    console.log(arguments.length);
		if (arguments.length === 2) {
			counter = 1;
			accumulatedValue = array[0];
		}
		else if (arguments.length >= 3) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "err";
		}


		while(counter < array.length) {
			accumulatedValue = callback(accumulatedValue, array[counter]);
			counter++;
		}

		return [accumulatedValue];
	}
}
