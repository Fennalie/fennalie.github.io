// var selection = document.querySelectorAll(".selection")
var western = document.getElementById("western")
var eastern = document.getElementById("eastern")
var westSelection = document.getElementById("westernList")
var eastSelection = document.getElementById("easternList")
var veggieWest = document.getElementById("veggieWest")
var veggieEast = document.getElementById("veggieEast")
var pizza = document.getElementById("pizza")
var sushi = document.getElementById("sushi")
var mexican = document.getElementById("mexican")
var burger = document.getElementById("burger")
var vietnamese = document.getElementById("rice")
var thai = document.getElementById("thai")
var korean = document.getElementById("korean")
var chinese = document.getElementById("chinese")
var others = document.getElementById("others")
var reset = document.getElementById("reset")
var cuisines = document.querySelectorAll(".selection")
var ul = document.querySelector("ul")
var selectedDisplay = document.querySelector("#chosen1")
var pickButton = document.querySelector("#pickButton")
var pickedCuisine = document.querySelector("#pickedCuisine")
var selected = [];
var chosen

western.addEventListener("click", function(){
    console.log("showWestern");
    selectionDisplayToggle(westSelection);
    buttonOn(westSelection, this);
});

eastern.addEventListener("click", function(){
    console.log("showEastern");
    selectionDisplayToggle(eastSelection);
    buttonOn(eastSelection, this);
});

veggieWest.addEventListener("click", function(){
    console.log("clicked");
    buttonText(this);  
});
veggieEast.addEventListener("click", function(){
    console.log("clicked");
    buttonText(this);  
});
pizza.addEventListener("click", function(){
    console.log("clicked");
    buttonText(this);
});
sushi.addEventListener("click", function(){
    console.log("clicked");
    buttonText(this);
});
mexican.addEventListener("click", function(){
    console.log("clicked");
    buttonText(this);
});
burger.addEventListener("click", function(){
    console.log("clicked");      
    buttonText(this);
});
vietnamese.addEventListener("click", function(){
    console.log("clicked");      
    buttonText(this);
});
thai.addEventListener("click", function(){
    console.log("clicked");      
    buttonText(this);
});
korean.addEventListener("click", function(){
    console.log("clicked");      
    buttonText(this);
});
chinese.addEventListener("click", function(){
    console.log("clicked");      
    buttonText(this);
});

others.addEventListener("keydown", function(event){
    if (others.value === "" && event.keyCode === 13) {
        alert("EMPTY FIELD MTFKER!");
    }
    else if (event.keyCode === 13) {        
        inputText();        
    }    
});
//minimize the area for click so its span only. also fix span css
ul.addEventListener("click", function(event) {
    var span = document.querySelector("span");
    span.parentElement.remove();
});

pickButton.addEventListener("click", function(){
    var allLi = document.querySelectorAll("li");
    if (allLi.length == 0) {
        alert("Nothing to choose from, clearly you like ASS")
    }
    else if (allLi.length !== selected.length) {
        console.log("updating");
        selected = [];
        allLi.forEach(function(i){
            selected.push(i.textContent);        
        });
        spinTheWheel();
        pickedCuisine.textContent = chosen.toUpperCase();
    }
    else {
        spinTheWheel();
        pickedCuisine.textContent = chosen.toUpperCase();
    }    
});

reset.addEventListener("click", function(){
    selected = [];
    var allLi = document.querySelectorAll("li");    
    allLi.forEach(li => {
        console.log(li);
        li.remove();
    });
});

function spinTheWheel(){
    var result = Math.floor(Math.random() * selected.length);
    chosen = selected[result];
    console.log(result);
    return chosen;
}

function inputText() {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var i = document.createElement("i");
    i.setAttribute("class", "fas fa-trash-alt");
    span.appendChild(i);
    li.appendChild(document.createTextNode(others.value));
    li.appendChild(span);
    ul.appendChild(li);
    others.value = "";
}

function buttonText(x) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var i = document.createElement("i");
    i.setAttribute("class", "fas fa-trash-alt");
    span.appendChild(i);
    li.appendChild(document.createTextNode(x.textContent));
    li.appendChild(span);
    ul.appendChild(li);    
}

function selectionDisplayToggle(x){
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function buttonOn(x,y){
    if (x.style.display === "block") {
        y.classList.add("buttonClick");
    }
    else {
        y.classList.remove("buttonClick");
    }
}
// function easternDisplayToggle(){
//     if (eastSelection.style.display === "none") {
//       eastSelection.style.display = "block";
//     } else {
//       eastSelection.style.display = "none";
//     }
// }