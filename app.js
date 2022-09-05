
const p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#player2'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset');
let winningScore = parseInt(document.querySelector('#scoreLimit').value)
const winningScoreSelect = document.querySelector('#scoreLimit')


let isGameOver = false;


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score + 1 == winningScore && player.score === opponent.score) {
            winningScore += 1;

            winningScoreSelect.options[winningScoreSelect.options.selectedIndex].innerText = `Tie BREAK to ${winningScore}`;
            winningScoreSelect.style.backgroundColor = "red";
        }

        if (player.score === winningScore) {

            winner(player, opponent);
            player.display.style.color = "green";
            opponent.display.style.color = "red";
        }

        player.display.innerText = player.score;
    }
}

function winner() {
    isGameOver = true;
    p1.button.style.opacity = "0.5";
    p2.button.style.opacity = "0.5";
    resetButton.style.opacity = "0.5";


    p1.button.disabled = "true";
    p2.button.disabled = "true";
    p1.button.style.cursor = "not-allowed";
    p2.button.style.cursor = "not-allowed";
}






p1.button.addEventListener('click', () => {

    updateScores(p1, p2)

})

p2.button.addEventListener('click', () => {
    updateScores(p2, p1)

})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})


resetButton.addEventListener('click', reset)



function reset() {
    for (let p of [p1, p2]) {
        p.display.innerText = 0;
        p.score = 0;
        p.button.style.opacity = "1";
        p.display.style.color = "#4a4a4a";
        p.button.removeAttribute('disabled');
        p.button.style.cursor = "pointer";
        winningScoreSelect.style.backgroundColor = "";

    }

    resetButton.style.opacity = "1";
    isGameOver = false;
    winningScore = parseInt(document.querySelector('#scoreLimit').value)
    winningScoreSelect.options[winningScoreSelect.options.selectedIndex].innerText = `${winningScoreSelect.options.selectedIndex + 3}`;


}

