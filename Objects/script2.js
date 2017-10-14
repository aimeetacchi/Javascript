var years = [1984, 1954, 1987, 1956, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for(var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}

	return arrRes; // result gets returned after it's ran 5 times.
}

// this function is taking in - fn(arr[i]) up above, and fn the arguement is calculateAge - so first one arr[i] is index 0, which is 1984 in the array... so this function is doing... 2016 - 1984
function calculateAge(el) {
	return 2016 - el;
}


// this is taking in the ages array - arrRes that got returned and checking if the number is greater or = to 18.... and returns true or false
function isFullAge(el) {
	return el >= 18; 
}

// this is taking in the ages array - arrRes that got returned
function maxHeatRate(el) {

	if(el >= 18 && el <= 81) {
	return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	} 
}



var ages = arrayCalc(years, calculateAge); // you don't need to call the function calculateAge here as it's being called later in the function at the top... arrayCalc
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);


var rates = arrayCalc(ages, maxHeatRate);
console.log(rates);