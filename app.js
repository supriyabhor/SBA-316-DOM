let wordData= [
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "yellow",
        hint: "color of sun"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
   
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to an indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crayons",
        hint: "What do you use to color pictures?"
    },
    {
        word: "earth",
        hint: "What is the name of the planet we live on?"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "mars",
        hint: " which planet is a red planet"
    },
    {
        word: "Fall",
        hint: "Which season comes after summer when leaves fall from trees?"
    },
    {
        word: "Blue Whale",
        hint: " the largest mammal in the world?"
    },
    {
        word: "mercury",
        hint: "the smallest planet in our solar system?"
    },
    {
        word: "oxygen",
        hint: "  Which gas do humans breathe in?"
    },
    {
        word: "Yen",
        hint: "What is the currency of Japan?"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "jupiter",
        hint: "the largest planet in our solar system?"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "H2O",
        hint: "What is the chemical symbol for water?"
    },
    {
        word: "paris",
        hint: "the capital city of France?"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
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
wordDisplay.addEventListener("click", () => inputTextTab.focus());
document.addEventListener("keydown", ()=> inputTextTab.focus());
resetButton.addEventListener("click", ()=> {
    randomWord();
    output.Style.disply= "none";
})