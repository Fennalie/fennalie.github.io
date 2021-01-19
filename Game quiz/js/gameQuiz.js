var kidGames = document.getElementById("kidGames")
var adultGames = document.getElementById("adultGames")
var allPick = document.getElementById("allPick")
var twoP = document.getElementById("twoP")
var fourP = document.getElementById("fourP")
var sixP = document.getElementById("sixP")
var eightP = document.getElementById("eightP")
var short = document.getElementById("short")
var medium = document.getElementById("medium")
var long = document.getElementById("long")
var competitive = document.getElementById("competitive")
var coop = document.getElementById("coop")
var pickedCuisine = document.querySelector("#pickedCuisine")
var chosen = []
var answers = []
var arr = [];

// var games = ]
//     { name: "Bananagram", maxplayers : 8, time : 30, kid : true },
//     { name : "Carcassonne", maxplayers : 5, time : 60, kid : false },
//     {name : "Code Names", maxplayers : 6, time : 15, kid : true },
//     {name : "Battle ships ", maxplayers : 2, time : 30, kid : true },
    
// ]

var games = {
    '1':  { 'name': "Bananagram", 'maxplayers': 8, 'time': "short", 'kid':true, 'competitive':true },
    '2':  { 'name': "Carcassonne", 'maxplayers': 5, 'time': "long", 'kid':true, 'competitive':true},
    '3':  { 'name': "Code Names", 'maxplayers': 6, 'time': "short", 'kid':true, 'competitive':false},
    '4':  { 'name': "Battle ships", 'maxplayers': 2, 'time': "medium", 'kid':true, 'competitive':true},
    '5':  { 'name': "Bananagram2", 'maxplayers': 8, 'time': "short", 'kid':true, 'competitive':true },
    '6':  { 'name': "Code Names2", 'maxplayers': 6, 'time': "short", 'kid':true, 'competitive':false},
    
};



kidGames.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[3] = true;
    console.log(answers);
    buttonOn(adultGames,this);
    console.log("showkidGames");
    
});

adultGames.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers.pop();
    console.log(answers);
    buttonOn(kidGames,this);
    console.log("showadultGames");
    
});
allPick.addEventListener("click", function(){
    this.classList.add("buttonClick");
    search();
    console.log("showallGames");
    
});
twoP.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[1] = 2;
    console.log(answers);
    console.log("2 People");
    
});
fourP.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[1] = 4;
    console.log(answers);
    console.log("4 People");
    
});
sixP.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[1] = 6;
    console.log(answers);
    console.log("6 People");
    
});
eightP.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[1] = 8;
    console.log(answers);
    console.log("8 People");
    
});
short.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[0] = "short";
    console.log(answers);
    console.log("30mins/less");
    
});
medium.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[0] = "medium";
    console.log(answers);
    console.log("1hour/less");
    
});
long.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[0] = "long";
    console.log(answers);
    console.log("1+ hours");
    
});
competitive.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[2] = true;
    console.log(answers);
    console.log("competitive");
    
});
coop.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[2] = false;
    console.log(answers);
    console.log("coop");
    
});




for (var item in games) {
if (games.hasOwnProperty(item)) {
    arr.push(games[item])
}
}

function searchKids(t,m,c,k) {
    var price = arr.filter(function(item) { return item.time == t && item.maxplayers == m && item.kid == k && item.competitive == c; });
    chosen = Object.values(price);
    let result = chosen.map(a => a.name);
    spinTheWheel(result);
    pickedCuisine.textContent = winner;
    console.log(result);
    console.log(price);
}
function searchAll(t,m,c) {
    var price = arr.filter(function(item) { return item.time == t && item.maxplayers == m && item.competitive == c; });
    chosen = Object.values(price);
    let result = chosen.map(a => a.name);
    spinTheWheel(result);
    pickedCuisine.textContent = winner;
    console.log(result);
    console.log(price);
}

function spinTheWheel(x){
    var result = Math.floor(Math.random() * x.length);
    winner = x[result];
    console.log(result);
    return winner;
}
// function selectionDisplayToggle(x){
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
// }

function buttonOn(y,z){
    z.classList.add("buttonClick");
    if (z.classList == "buttonClick") {
        y.classList.remove("buttonClick");
        
    }
}

function search() {
    if (answers.length==4) {
    t=answers[0];
    m=answers[1];
    c=answers[2];
    k=answers[3];
    searchKids(t,m,c,k);
}
else{
    t=answers[0];
    m=answers[1];
    c=answers[2];
    k=answers[3];
    searchAll(answers[0,1,2]);
}
}