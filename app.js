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
        word: "coding",
        hint: "related to programming"
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
        word: "amazon",
        hint: "online shopping site"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "football",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to an indoor game"
    },
    {
        word: "facebook",
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
        hint: " which planet is a red planet"
    },
    {
        word: "Fall",
        hint: "Which season comes after summer when leaves fall from trees?"
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
        word: "yen",
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
let maxCheck;
let correctLetter = [];

const inputs = document.querySelector(".inputs");
const inputText = document.querySelector(".inputText");
const hintTag = document.querySelector(".hint span");
const guessLeft = document.querySelector(".guess-left span");

const resetBtn = document.getElementById("reset-btn");

inputText.addEventListener("input", gameFunction);

function randomWord() 
{
    let randomItm = wordData[Math.floor(Math.random() * wordData.length)];
    word = randomItm.word;
   
    if (word.length >=5)
    {
        maxCheck  =6;
    }
   
    correctLetter = [];
    hintTag.innerText = randomItm.hint;
    guessLeft.innerText = maxCheck;

    // Remove any previous input elements before adding new ones
    inputText.value="";
    inputs.innerHTML = "";

    // Use append() to dynamically add input fields
    for (let i = 0; i < word.length; i++) 
        {
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('maxlength', '1'); // Only one letter per input
        inputElement.classList.add('inputAppend');
        inputs.append(inputElement); // Using append() to add input elements
     
       }   
}

randomWord();

function gameFunction(e) 
{
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) &&  !correctLetter.includes(key))
         {
        if(word.includes(key)) 
            {
            for (let i = 0; i < word.length; i++) 
                {
                if(word[i] == key) 
                    
                {
                    correctLetter += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else 
        {
            maxCheck--;
          
        }
        guessLeft.innerText = maxCheck;

        if (correctLetter.length === word.length) {
            alert(`Congrats! correct word is: ${word.toUpperCase()}`);
            randomWord();
        } else if (maxCheck < 1) {
            alert("Game over! You don't have remaining guesses");
            // Show the word for the player to see
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
     }  
}
    

resetBtn.addEventListener("click", () => 
    {
        randomWord();
        inputText.focus(); 
    });


