
// Object Literal notation
// var john = {
// 	name: 'John',
// 	yearOfBirth: 1990,
// 	job: 'Teacher',
// };


// // Function constructor
// var Person = function(name, yearOfBirth, job, gender){
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// 	this.gender = gender;
// };

// //Prototype --- Attach methods to the prototype propetry of our function constuctor
// Person.prototype.calculateAge = function() {
// 		console.log(2016 - this.yearOfBirth);
// 	};

// // Prototype --- Attach Properties
// Person.prototype.lastName = 'Tacchi';

// var aimee = new Person('Aimee', 1984, 'Front-End Web Developer', 'Female');
// var claire = new Person('Claire', 1987, 'Sales Assistant', 'Female');
// var trevor = new Person('Trevor', 1956, 'Postman', 'Male')

// aimee.calculateAge();
// claire.calculateAge();

// console.log(aimee.lastName);
// console.log(claire.lastName);
// console.log(trevor.name + ' ' + trevor.lastName);


// Object.create =====

// var personProto = {
// 	calculateAge: function() {
// 		console.log(2016 - this.yearOfBirth);
// 	}
// };

// var wendy = Object.create(personProto);

// wendy.name = 'Wendy';
// wendy.yearOfBirth = 1954;
// wendy.job = 'Teacher';


// var gareth  = Object.create(personProto, {
// 	name: { value: 'Gareth'},
// 	yearOfBirth: { value: 1984},
// 	job: { value: 'lighting consultant'},
// });


// Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;

// console.log(a);
// console.log(b);


// Objects
var obj1 = {
	name: 'Aimee',
	age: 32,
};

var obj2 = obj1;
obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// Functions
var age = 27;
var obj = {
	name: 'Claire',
	city: 'Dunstable'
};

function change(a, b) {
	a = 30; // this won't change the variable outside.. just make a copy.
	b.city = 'London'; // this changes the objects city...
}

change(age, obj);

// console.log(age);
// console.log(obj.city);