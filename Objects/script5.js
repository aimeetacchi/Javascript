// Closures

function retirement(retirementAge) {
	var a = ' years left until retirement.';

	return function(yearOfBirth){
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
