// Functions returning functions

function interviewQuestion(job) {
	if(job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?');
			}

		} else if (job === 'teacher') {
			return function(name) {
				console.log('What subject do you teach, ' + name + '?');
				}

			} else {
				return function(name) {
					console.log('Hello ' + name + ', what do you do?');
				}
			}
		}

// the variable is the function thats returned... 
var teacherQuestion = interviewQuestion('teacher'); // interviewQuestion Function...
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Wendy');
designerQuestion('Aimee');


// you can also call the functions this way...
// it reads the code, left to right. so runs the first function, returns the other function then takes in the name.. lisa.
interviewQuestion('teacher')('Lisa');



// INTERVIEW FUNCTION WITH CLOSURE!!! See Script 5..


function interviewQuestionTwo(job) {
	
	var a = " Do you have a design portfolio?";
	var b = " What Subject do you teach?";
	var c = " What do you do?"

	return function(name) {
		if(job === "designer") {
			console.log("Hi, " + name + a);
		} else if (job === "teacher") {
			console.log("Hi, " + name + b);
		} else {
			console.log("Hi, " + name + c);
		}
	}
} 

interviewQuestionTwo('designer')('Aimee');
interviewQuestionTwo('teacher')('Wendy');

