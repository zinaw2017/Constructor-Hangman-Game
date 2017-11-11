//`main.js` will contain the logic of your app. 
var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome to Constructor hangman Game!");
console.log("Guess a letter of the name of a social media sites");

prompt.start();



game = {
 	wordBank: [' Facebook', 'Google', ' Youtube', 'snapchat', 'whatsupp', 'skype', 'twitter'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLetter'], function(err, result){
 			console.log("You guessed: " + result.guessLetter);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLetter);

 			if(manyGuessed ==0) {
 				console.log("You Guessed Wrong ");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("You Are Correct");
 					if(self.currentWrd.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();
