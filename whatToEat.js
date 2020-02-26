// var selection = document.querySelectorAll(".selection")
var salad = document.getElementById("salad")
var pizza = document.getElementById("pizza")
var sushi = document.getElementById("sushi")
var mexican = document.getElementById("mexican")
var burger = document.getElementById("burger")
var others = document.getElementById("others")
var reset = document.getElementById("reset")
var cuisines = document.querySelectorAll(".selection")
var selectedDisplay = document.querySelector("#chosen1")
var pickButton = document.querySelector("#pickButton")
var pickedCuisine = document.querySelector("#pickedCuisine")
var selected = [];
var chosen

salad.addEventListener("click", function(){
    console.log("clicked");
    selected.push("Salad");
    cuisinesDisplay();    
});

pizza.addEventListener("click", function(){
    console.log("clicked");
    selected.push("Pizza"); 
    cuisinesDisplay();
});

sushi.addEventListener("click", function(){
    console.log("clicked");
    selected.push("Sushi");  
    cuisinesDisplay();
});

mexican.addEventListener("click", function(){
    console.log("clicked");
    selected.push("Mexican");  
    cuisinesDisplay();
});

burger.addEventListener("click", function(){
    console.log("clicked");
    selected.push("Burger");  
    cuisinesDisplay();
});

others.addEventListener("keydown", function(event){
    if (others.value === "" && event.keyCode === 13) {
        alert("EMPTY FIELD MTFKER!");
    }
    else if (event.keyCode === 13) {
        selected.push(this.value);
        this.value = "";
        cuisinesDisplay();
    }    
});

pickButton.addEventListener("click", function(){
    if (selected.length == 0) {
        alert("Nothing to choose from, clearly you like ASS")
    }
    else{
        console.log("Clicked");
        spinTheWheel();
        pickedCuisine.textContent = chosen.toUpperCase();
    }
});

reset.addEventListener("click", function(){
    selected = [];
    selectedDisplay.textContent = "";
});
//array for selected cuisines
function cuisinesDisplay(){
    if (selected.length>0){
        selectedDisplay.innerHTML = selected.toString();
    }
}

//array for randomizer - uses arr1.length
function spinTheWheel(){
    var result = Math.floor(Math.random() * selected.length);
    chosen = selected[result];
    console.log(result);
    return chosen;
}