/* Link It Back To The HTML Code */
const inputs = document.querySelector(".inputs"),
resetbutton = document.querySelector(".resetbutton"),
hint = document.querySelector(".hint span"),
guessesleft = document.querySelector(".guessesleft span"),
wrongletters = document.querySelector(".wrongletters span"),
typinginput = document.querySelector(".typinginput");

let word, maxguesses, corrects = [], incorrects = [];

function randomWord() {

    /* Getting Random Object From wordList */
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];

    /* Getting Word Of Random Object */
    word = ranObj.word;

    /* Default Number Of Guesses */
    maxguesses = 7; corrects = []; incorrects = [];

    hint.innerText = ranObj.hint;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type = "text" disabled>`;
    }

    inputs.innerHTML = html;
    guessesleft.innerText = maxguesses;
    wrongletters.innerText = incorrects;
}
randomWord();

function initGame(e) {
    let key = e.target.value;

    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(key)) {

        /* Player Inputs Letter Found In The Word */
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {

                /* Showing Matched Letter In The Input Value */
                if (word[i] === key) {
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        }

        /* Player Inputs Letter Not Found In The Word */
        else {

            /* Remaining Guesses Decrease By 1 */
            maxguesses --;

            incorrects.push(` ${key}`);
        }

        wrongletters.innerText = incorrects;
        guessesleft.innerText = maxguesses;
    }

    typinginput.value = "";

    setTimeout(() => {
        
        /* When Player Found All Letters */
        if (corrects.length === word.length) {
            alert(`Congratulations! You Guessed The Word!`);

            /* Calling randomWord Function For The Game To Reset */
            randomWord();
        }

        /* When There Is No More Remaining Guesses */
        else if (maxguesses < 1) {
            alert("Game Over! You Have No More Guesses Left!");

            for (let i = 0; i < word.length; i++) {

                /* Showing Matched Letter In The Input Value */
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    });
}

resetbutton.addEventListener("click", randomWord);
typinginput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typinginput.focus());
document.addEventListener("keydown", () => typinginput.focus());