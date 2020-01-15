var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1ScoreDisplay = document.getElementById("p1ScoreDisplay");
var p2ScoreDisplay = document.getElementById("p2ScoreDisplay");
var winningScoreDisplay = document.querySelector("p span");
var input = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1ScoreDisplay.classList.add("winner");
            gameOver = true;
        }
        console.log(p1Score);
        p1ScoreDisplay.textContent = p1Score;
    }
});

p2.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2ScoreDisplay.classList.add("winner");
            gameOver = true;
        }
        console.log(p2Score);
        p2ScoreDisplay.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = p2Score;
    p1ScoreDisplay.classList.remove("winner");
    p2ScoreDisplay.classList.remove("winner");
    gameOver = false;
}

input.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(input.value);
    reset();
})