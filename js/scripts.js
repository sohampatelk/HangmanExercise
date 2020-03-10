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
    if(i==2 || i==5){
        answerArray[i]=word[i];
    }else{
    answerArray[i] = "_";
    }
}

console.log(answerArray);

var remainingLetters = word.length;
var wrongInput = 5;

for (var count=0; count<1000;count++){
    //show player therir progress with answer array[] contacination
    alert(answerArray.join(" "));

    //get a guess from player
    var guess = prompt("Guess a letter or click cancelto stp playing");

    for(var j=0;j<word.length;j++){
        if(word[j] === guess){
            answerArray[j] = guess;
            remainingLetters--;
        }
        
    }
}