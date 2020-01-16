var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listener
    setUpModeButtons();
    //Game Logic
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i=0; i<modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            // Turnary operator for if function below
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // }
            // else {
            //     numSquares = 6;
            // }
            reset();            
        });
    }
}

function setUpSquares(){
    for(var i=0; i<squares.length; i++){
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i]; 
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            // compare colors to picked colors
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor; 
    //changing reset button msg
    resetButton.textContent = "New Colors";
    //changing span's msg
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            //making sure squares are always visible
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } 
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});
 
function changeColors(color){
    // loop through var colors
    for(var i=0; i<squares.length; i++){
        // change each color to match correct color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // mimicking a dice roll
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = []
    // add num random colors to array
    for(var i=0; i<num; i++){
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}