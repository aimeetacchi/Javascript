// Bind, call and apply

var aimee = {
	name: 'Aimee',
	age: 32,
	job: 'Web Designer',

	presentation: function(style, timeOfDay){
		if(style === 'formal'){
			console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' );
		} else if (style === 'friendly') {
			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
		}
	}
};

var claire = {
	name: 'Claire',
	age: 30,
	job: 'Shop assistant',
}


aimee.presentation('friendly', 'afternoon');

// call method lets us set the 'this variable' in the first argument. so Claire. method borrowing...
aimee.presentation.call(claire, 'formal', 'morning');


// bind method

var aimeeFriendly = aimee.presentation.bind(aimee, 'friendly');

aimeeFriendly('evening');
aimeeFriendly('morning');