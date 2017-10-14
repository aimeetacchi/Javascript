// Quiz coding challenge

//Empty array to add the objects too.
// var quiz = [];

// //Object contructor
// var Question = function(question, correctanswer, answers){
// 	this.question = question;
// 	this.answers = answers;
// 	this.correctanswer = correctanswer;

// };

// // new question objects.
// var question1 = new Question('What film has a jedi in?', 0, ['star wars', 'star trek', 'stargate']);

// var question2 = new Question('What TV series is the sonic screwdriver from?', '2', ['game of thrones', 'red drawf', 'doctor who']);

// var question3 = new Question('What film is Wolverine from?', 1, ['spiderman', 'x-men', 'batman']);

// quiz.push(question1);
// quiz.push(question2);
// quiz.push(question3);

// //console.log(quiz);

// var randomQuestion = quiz[Math.floor(quiz.length * Math.random())];



// console.log(randomQuestion.question);
// console.log(randomQuestion.answers);


// var answer = prompt("Please select the right answer by typing 0, 1 ,2");

// if(answer == randomQuestion.correctanswer){
// 	console.log("Correct, you have 1 point");
// } else {
// 	console.log("Try again!");
// }


// TEACHERS CODE ANSWER ==================

// (function () {
// 	//Object contructor
// function Question(question, answers, correct){
// 	this.question = question;
// 	this.answers = answers;
// 	this.correct = correct;

// };

// Question.prototype.displayQuestion = function() {
// 	console.log(this.question);

// 	for (var i = 0; i < this.answers.length; i++) {
// 		console.log(i + ': ' + this.answers[i]);
// 	}
// }

// Question.prototype.checkAnswer =
// 	function(ans) {
// 		if (ans === this.correct) {
// 			console.log('Correct answer!');
// 		} else {
// 			console.log('Wrong answer. Try Again!');
// 		}
// 	}

// // new question objects.
// var q1 = new Question('What film has a jedi in?', ['star wars', 'star trek', 'stargate'], 0);

// var q2 = new Question('What TV series is the sonic screwdriver from?', ['game of thrones', 'red drawf', 'doctor who'], 2);

// var q3 = new Question('What film is Wolverine from?', ['spiderman', 'x-men', 'batman'], 1);

// var questions = [q1, q2, q3];

// var n = Math.floor(Math.random() * questions.length);

// questions[n].displayQuestion();

// var answer = parseInt(prompt('Please select the correct answer!'));

// questions[n].checkAnswer(answer);
// })();


// ===========================================


// EXPERT LEVEL 

(function () {
	//Object contructor
function Question(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;

};

	Question.prototype.displayQuestion = function() {
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++) {
			console.log(i + ': ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer =
		function(ans, callback) {
			var sc;

			if (ans === this.correct) {
				console.log('Correct answer!');
				sc = callback(true);
			} else {
				console.log('Wrong answer. Try Again!');

				sc = callback(false);
			}

			this.displayScore(sc);
		}

		Question.prototype.displayScore = 
			function(score) {
				console.log('Your current score is: ' + score);
				console.log('---------------------------');
			}

// new question objects.
var q1 = new Question('What film has a jedi in?', ['star wars', 'star trek', 'stargate'], 0);

var q2 = new Question('What TV series is the sonic screwdriver from?', ['game of thrones', 'red drawf', 'doctor who'], 2);

var q3 = new Question('What film is Wolverine from?', ['spiderman', 'x-men', 'batman'], 1);

	var questions = [q1, q2, q3];

	function score() {
		var sc = 0;
		return function(correct) {
			if (correct) {
				sc++;
			}
			return sc;
		}
	}

	var keepScore = score();

function nextQuestion(){

	var n = Math.floor(Math.random() * questions.length);

	questions[n].displayQuestion();

	var answer = 
	prompt('Please select the correct answer!');

		if(answer !== 'exit') {
			questions[n].checkAnswer(parseInt(answer), keepScore);
			nextQuestion();
		}
	};

	nextQuestion();

})();
