var wordPlaceHolder = document.getElementById("currentWord");
var winCount = document.getElementById("wins");
var images = document.getElementById("currentImage");
var guessesRemaining = document.getElementById("guessesRemain");
var lettersGuessed = document.getElementById("lettersGuessed");

var wins = 0;
var guesses = 12;

var letters = "";
var key;
var dashed = "";
var temp;
var correct = 0;
var remain;


var words = ["Darkwing Duck", "Tiny Toons", "Animaniacs", "Rugrats", "Gargoyles", "Doug", "X-Men", "Pinky and the Brain", "Dexter's Laboratory", "TaleSpin", "Pokemon", "Earthworm Jim", "DuckTales", "Teenage Mutant Ninja Turtles", "Garfield and Friends", "Daria", "Hey Arnold!", "Johnny Bravo", "Goof Troop", "Captain Planet and the Planeteers", "The Magic School Bus", "Taz-Mania", "The Powerpuff Girls", "Beetlejuice", "Bobby's World", "Spider-Man", "Scooby Doo", "Street Sharks", "Freakazoid!", "Mighty Ducks", "Chip 'n Dale: Rescue Rangers", "Rocko's Modern Life", "The Tick", "Pepper Ann", "Courage the Cowardly Dog", "Inspector Gadget", "Aaahh!!! Real Monsters", "Arthur", "CatDog", "Cow and Chicken", "Recess", "ThunderCats", "Marsupilami", "Ed, Edd, n Eddy", "The Angry Beavers", "The Smurfs", "The Ren & Stimpy Show", "Muppet Babies", "SpongeBob SquarePants", "Alvin and the Chipmunks", "Rocket Power", "The Wile Thornberrys", "The Flintstones", "The Jetsons", "The Bugs Bunny Show", "Looney Tunes", "Biker Mice from Mars", "Beavis and Butt-Head"];

var randomWord = function() {
    var max = words.length;
    
    var n = Math.floor(Math.random() * (max - 0)) + 0;
    
    return words[n];
    
};

var wordCount = function(word) {
    var count = 1;
    
    for (var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            count++;
        }
    }
    
    return count;
};

var letterCount = function(word) {
    var count = word.replace(/[^A-Z]/gi, "").length;
    
    return count;
};

var guessing = function(word , guess) {
    var audio;
    console.log(word);
    console.log(guess);
    if (word.includes(guess)) {
        audio = new Audio("/assets/sounds/CorrectAnswer.wav");
        audio.play();
    }else {
        audio = new Audio("/assets/sounds/wrongAnswer.wav");
        audio.play();
    }
}

var dashedWord = function(word) {
    var w = word.split(" ");
    var wCount = wordCount(word);
    var lCount;
    
    for (var i = 0; i < wCount; i++) {
        lCount = letterCount(w[i]);
        
        for (var j = 0; j < lCount; j++) {
        dashed += "_ "; 
    }
        dashed += "\u00A0 \u00A0";
    }
    
    return dashed;
    
};



var check = function(word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === letter) {
            temp = dashed.slice(i, i);
            console.log(temp);
            correct++;
        }
        
    }
    return dashed;
};



document.onkeyup = function (event){
    key = event.key;
    
    if(guesses > 0) {
    
        if (key.length === 1 && key.match(/[a-z]/i)) {
            guesses--;
            guessesRemaining.textContent = guesses;
            if (!letters.includes(key)){
                letters += (" " + key);
                lettersGuessed.textContent = letters;
                check(currentWord, key.toString());
                guessing(currentWord, letters);
            }

        } else {
            letters += "";
        }

    }
    
    wordPlaceHolder.textContent = dashed;
};




var currentWord = randomWord();

console.log(currentWord);

dashedWord(currentWord);


winCount.textContent = wins;

remain = letterCount - correct;

















