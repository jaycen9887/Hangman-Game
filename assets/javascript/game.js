var wordPlaceHolder = document.getElementById("currentWord");
var winCount = document.getElementById("wins");
var images = document.getElementById("currentImage");
var guessesRemaining = document.getElementById("guessesRemain");
var lettersGuessed = document.getElementById("lettersGuessed");
var img = document.getElementById("currentImage");

var wins = 0;
var guesses = 12;

var letters = "";
var key;
var dashed = "";
var temp;
var correct = 0;
var remain;


var words = [["Darkwing Duck", "/assets/images/Darkwing.png"], ["Tiny Toons", "/assets/images/tinytoons.jpg"], ["Animaniacs", "/assets/images/animaniacs.png"], ["Rugrats", "/assets/images/rugrats.jpg"], ["Gargoyles", "/assets/images/gargoyles.jpg" ], ["Doug", "/assets/images/Doug.gif"], ["X-Men", "/assets/images/xmen.jpg"], ["Pinky and the Brain", "/assets/images/pinkyandthebrain.jpg"], ["Dexter's Laboratory", "/assets/images/dexterslab.jpg"], ["TaleSpin", "/assets/images/talespin.jpg"], ["Pokemon", "/assets/images/pokemon.jpg"], ["Earthworm Jim", "/assets/images/earthwormjim.jpg"], ["DuckTales", "/assets/images/ducktales.jpg"], ["Teenage Mutant Ninja Turtles", "/assets/images/tmnt.gif"], ["Garfield and Friends", "/assets/images/GarfieldandFriends.jpg"], ["Daria", "/assets/images/daria.jpg"], ["Hey Arnold!", "/assets/images/HeyArnold.jpg"], ["Johnny Bravo", "/assets/images/johnnybravo.png"], ["Goof Troop", "/assets/images/gooftroop.gif"], ["Captain Planet and the Planeteers", "/assets/images/captainplanetandtheplaneteers.jpg"], ["The Magic School Bus", "/assets/images/magicschoolbus.jpg"], ["Taz-Mania", "/assets/images/tazmania.jpg"], ["The Powerpuff Girls", "/assets/images/powerpuffgirls.png"], ["Beetlejuice", "/assets/images/beetlejuice.png"], ["Bobby's World", "/assets/images/Bobbysworld.png"], ["Spider-Man", "/assets/images/Spiderman.jpg"], ["Scooby Doo", "/assets/images/scoobydoo.jpg"], ["Street Sharks", "/assets/images/streetsharks.jpg"], ["Freakazoid!", "/assets/images/freakazoid.png"], ["Mighty Ducks", "/assets/images/mightyducks.jpg"], ["Chip 'n Dale", "/assets/images/chipanddale.jpg"], ["Rocko's Modern Life", "/assets/images/rockosmodernlife.jpg"], ["The Tick", "/assets/images/thetick.jpg"], ["Pepper Ann", "/assets/images/pepperann.jpg"], ["Courage the Cowardly Dog", "/assets/images/courage.jpg"], ["Inspector Gadget", "/assets/images/inspectorgadget.jpg"], ["Aaahh!!! Real Monsters", "/assets/images/aaahhrealmonsters.png"], ["Arthur", "/assets/images/arthur.jpg"], ["CatDog", "/assets/images/catdog.jpg"], ["Cow and Chicken", "/assets/images/CowandChicken.gif"], ["Recess", "/assets/images/recess.jpg"], ["ThunderCats", "/assets/images/thundercats.png"], ["Marsupilami", "/assets/images/marsupilami.png"], ["Ed, Edd, n Eddy", "/assets/images/ededdandeddy.jpg"], ["The Angry Beavers", 
"/assets/images/angrybeavers.jpg"], ["The Smurfs", "/assets/images/smurfs.jpg"], ["The Ren & Stimpy Show", "/assets/images/renandstimpy.jpg"], ["Muppet Babies", "/assets/images/muppetbabies.jpg"], ["SpongeBob SquarePants", "/assets/images/spongebob.jpb"], ["Alvin and the Chipmunks", "/assets/images/alvinandthechipmunks.jpg"], ["Rocket Power", "/assets/images/rocketpower.jpeg"], ["The Wild Thornberrys", "/assets/images/wildthornberries.jpg"], ["The Flintstones", "/assets/images/flintsones.jpg"], ["The Jetsons", "/assets/images/jetsons.jpg"], ["Bugs Bunny", "/assets/images/bugsbunny.gif"], ["Looney Tunes", "/assets/images/looneytunes.jpg"], ["Biker Mice from Mars","/assets/images/bikermicefrommars.jpg"], ["Beavis and Butt-Head","/assets/images/beavisandbutthead.gif"]];

var randomWord = function() {
    var max = words.length;
    
    var n = Math.floor(Math.random() * (max - 0)) + 0;
    
    img.src = words[n][1];
    return words[n][0];
    
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

















