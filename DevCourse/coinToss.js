var resultDisplay = document.getElementById("results");
var flipButton = document.getElementById("flip");
var roll1 = document.getElementById("roll1");
var roll2 = document.getElementById("roll2");
var roll3 = document.getElementById("roll3");
var rollCount = [];


//button listener
flipButton.addEventListener("click", function(){
    diceRoll();
    rollDisplay();
});

function diceRoll(){
    //interactive results
    var result = Math.floor(Math.random() * 3);
    //heads or tails
    if(result === 2){
        resultDisplay.textContent = "Tails";
        rollCount.push("Tails");
    }
    else {
        resultDisplay.textContent = "Heads";
        rollCount.push("Heads");
    }    
    return rollCount;
}

function rollDisplay(){
    //pop last roll
    roll1.textContent = rollCount[rollCount.length-3];
    roll2.textContent = rollCount[rollCount.length-2];
    roll3.textContent = rollCount[rollCount.length-1];
}