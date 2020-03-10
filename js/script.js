//alert("Hello");


// Create an array of words
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];
// Pick a random word from upper array
var word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array for picked word for design "-------"" 
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;
var wrongInput=0;
// The game loop
while(remainingLetters>=1) {
    // Show the player their progress
    alert(answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
 if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    
    // The end of the game loop
    if(wrongInput>=5)
    {
        // alert("You Fail");
        break;
    }
}

// Show the answer and congratulate the player
if(wrongInput>=5){
    alert("you fail");
}else{
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
}