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
var wrongInput = 0;

for(wrongInput = 0){
    //show player therir progress with answer array[] contacination
    alert(answerArray.join(" "));

    //get a guess from player
    var guess = prompt("Guess a letter or click cancel to stop playing");

    for(var j=0;j<word.length;j++){
        if(word[j] === guess){
            answerArray[j] = guess;
            remainingLetters--;
        }  
        
    }
}

if(remainingLetters == 0){
    alert(answerArray.join(" "));
    alert("Goodjob!! the answer is"+word);
}else 