let wordData= [
   {
      hint : "Which planet is known as the “Blue Planet”?",
      word : "Earth"
   },
   {
      hint : "Bill Gates is the founder of which company?",
      word : "Microsoft"
   },
   {
        hint : "Larry Page is the CEO of which company?",
        word : "Google"
   },
   {    
        hint : "What is Hewlett Packard (HP) originally known for?",
        word : "Printers"
   },
   {
        hint : "In the story of Snow White, how many dwarfs are there?",
        word : "Seven"
   },
   {
        hint : "What is the chemical symbol for the element mercury?",
        word : "Hg"
   },
   {
       hind : "How many colors are there in a rainbow?",
       word : "Seven"
   },
   {
        hind : "What animal is known for its long trunk and large ears?",
        word : "Elephant"
   },
   {
         hind : "Which planet is known as the “Red Planet”?",
        word : "Mars"
   },
   {
        hind :  "What part of the atom has no electric charge?",
        word : "Neutron"
   },
   {
        hind : "What animals are pearls found in?",
        word : "Oysters"
   },
   {
        hind : "How many molecules of oxygen does ozone have?",
        word : "Three"
   },
   {
        hind : "Which planet has the most gravity?",
        word : "Jupiter"
   },
   {
        hind : "In which US city is Broadway located?",
        word : "New York City"
   },
   {
        hind :  "Which country invented tea?",
        word : "China"
   },
   {
        hind : "Which organ has four chambers?",
        word : "heart"
   },
   {
        hind : "Which continent is the largest?",
        word : "Asia"
   },
    {
        hind : "Which country is known as the Land of the Rising Sun?",
        word : "Japan"
    },
    {
        hind : "What animal is on Levi’s logo?",
        word : "Horse"
    },
       
];

let word;
let maxGuess ;
let correctLetters = [];
let attemptCount = 5 ;


const wordDisplay = querySelector(".displayWord");
const hintTab = document.querySelector(".hint span");
const totalAttemptTab = document.querySelector(".totalAttempt span");
const resetButton = document.getElementById ("#resetBtn");
const inputTextTab = document.getElementById ("#inputText");
const output= document.querySelector(".output");

function randomWord()
{
    let randomItm = wordData[Math.floor(Math.random()* wordData.length)];
    word = randomItm.word;

    maxGuess = word.length >=5;
    correctLetters = [];
    hintTab.innerText = randomItm.hint;
    totalAttemptTab.innerText = randomItm.maxGuess;

    let html = "";
    for(let i=0; i<word.length; i++)
    {
        html +=`<input type="text" disabled>`;
        inputTextTab.innerHTML=html;
    }

}

randomWord();



function startGame(g)
{
    let key=g.target.value.toLowerCase();
    if (key.match (/^[A-Za-z]+$/) && !correctLetters.includes(key))
    {
        if(word.includes(key))
        {
            for(let i=0 ; i< word.length; i++)
            {
                if(word[i]== key)
                {
                    correctLetters +=key;
                    wordDisplay.querySelector("input")[i].value=key;
                }

            }
        } else 
        {
            maxGuess--;
        }
        totalAttemptTab.innerText = maxGuess;
    }
    inputTextTab.value = "";

     timeCheck(()=> {
        if(correctLetters.length ===word.length)
                       {
                         output.innerText = "Congrats!";
                         output.Style.disply="block";
                         return randomWord();
                       } else if(maxGuess < 1)
                       {
                        output.innerText = "GAME OVER!!";
                       output.Style.disply= "block";
                        
                       for(let i=0 ; i<word.length; i++)
                       {
                        wordDisplay.querySelectorAll("input"[i].valueOf = word[i]);
                       }
                        }
     }, 100)
   
}


inputTextTab.addEventListener("input". startGame);