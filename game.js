const inputs = document.querySelector(".inputs"),
resetbutton = document.querySelector(".reset"),
hint = document.querySelector(".hint span"),
guessesleft = document.querySelector(".guessesleft span"),
wrongletters = document.querySelector(".wrongletters span"),
typinginput = document.querySelector(".typinginput");

let word, maxguesses, corrects = [], incorrects = [];

/* Random Word From Word List Created */
function randomWord() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    maxguesses = 8;
    console.log(word);

    hint.innerText = ranObj.hint;
    guessesleft.innerText = maxguesses;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type = "text" disabled>`;
    }

    inputs.innerHTML = html;
}
randomWord();

function initGame(e) {
    let key = e.target.value;
    if(key.match(/^[A-Za-z] + $/) && !incorrects.includes(` ${key}`) && !corrects.includes(key)) {
        console.log(key);

        /* Player Input Letter Found In The Word */
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === key) {
                    corrects.push(key);

                    /* Showing Matched Letter In The Input Value */
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        }

        else {
            incorrects.push(` ${key}`);
        }
    }

    wrongletters.innerText = incorrects;
    typinginput.value = "";
}

resetbutton.addEventListener("click", randomWord);
typinginput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typinginput.focus());