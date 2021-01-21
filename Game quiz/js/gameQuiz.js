var kidGames = document.getElementById("kidGames")
var adultGames = document.getElementById("adultGames")
var allPick = document.getElementById("allPick")
var twoP = document.getElementById("twoP")
var fourP = document.getElementById("fourP")
var sixP = document.getElementById("sixP")
var short = document.getElementById("short")
var medium = document.getElementById("medium")
var long = document.getElementById("long")
var competitive = document.getElementById("competitive")
var coop = document.getElementById("coop")
var reset = document.getElementById("reset")
var pickedCuisine = document.querySelector("#pickedCuisine")
var allButtons = document.querySelectorAll("button")
var chosen = []
var answers = []
var arr = [];
var winner = []
var playerInputValue = []

var games = {
    '1':  { 'name': "Aquarius", 'maxplayers': 5,'minplayers': 3,'time': "short", 'kid':true, 'competitive':true },
    '2':  { 'name': "Avalon", 'maxplayers': 10,'minplayers': 6, 'time': "short", 'kid':false, 'competitive':true},    
    '3':  { 'name': "Bananagram", 'maxplayers': 8,'minplayers': 4,'time': "short", 'kid':true, 'competitive':true },
    '4':  { 'name': "Battle ships", 'maxplayers': 2,'minplayers': 2, 'time': "short", 'kid':true, 'competitive':true},
    '5':  { 'name': "Boggle", 'maxplayers': 10,'minplayers': 3, 'time': "short", 'kid':true, 'competitive':true},    
    '6':  { 'name': "Carcassonne", 'maxplayers': 5,'minplayers': 2,'time': "medium", 'kid':true, 'competitive':true},
    '7':  { 'name': "Century:Eastern Wonders", 'maxplayers': 4,'minplayers': 4, 'time': "medium", 'kid':false, 'competitive':false},    
    '8':  { 'name': "Chess", 'maxplayers': 2,'minplayers': 2,'time': "medium", 'kid':false, 'competitive':true},
    '9':  { 'name': "Code Names", 'maxplayers': 8,'minplayers': 4,'time': "short", 'kid':true, 'competitive':false},
    '10':  { 'name': "Coup", 'maxplayers': 6,'minplayers': 5, 'time': "short", 'kid':false, 'competitive':true},    
    '11':  { 'name': "Deep sea adventures", 'maxplayers': 6,'minplayers': 4, 'time': "short", 'kid':true, 'competitive':true},    
    '12':  { 'name': "Dixit", 'maxplayers': 6,'minplayers': 3, 'time': "medium", 'kid':true, 'competitive':true},    
    '13':  { 'name': "Dragon wood", 'maxplayers': 4,'minplayers': 3, 'time': "short", 'kid':true, 'competitive':true},
    '14':  { 'name': "Dungeon Mayhem", 'maxplayers': 4,'minplayers': 4, 'time': "medium", 'kid':true, 'competitive':true},
    '15':  { 'name': "Game of Life", 'maxplayers': 6,'minplayers': 4, 'time': "medium", 'kid':true, 'competitive':true},
    '16':  { 'name': "Guillotine", 'maxplayers': 5,'minplayers': 4, 'time': "short", 'kid':true, 'competitive':true},
    '17':  { 'name': "Hanabi", 'maxplayers': 5,'minplayers': 4, 'time': "short", 'kid':true, 'competitive':false},
    '18':  { 'name': "I would fight the dragon", 'maxplayers': 8,'minplayers': 5, 'time': "medium", 'kid':false, 'competitive':true},
    '19':  { 'name': "Llamas Unleashed", 'maxplayers': 8,'minplayers': 4, 'time': "medium", 'kid':false, 'competitive':true},
    '20':  { 'name': "Monopoly Deal", 'maxplayers': 5,'minplayers': 4, 'time': "short", 'kid':true, 'competitive':true},
    '21':  { 'name': "Pandemic", 'maxplayers': 4,'minplayers': 2, 'time': "medium", 'kid':true, 'competitive':false},    
    '22':  { 'name': "Patchwork", 'maxplayers': 2,'minplayers': 2, 'time': "medium", 'kid':true, 'competitive':true},    
    '23':  { 'name': "Pictionary", 'maxplayers': 8,'minplayers': 6, 'time': "medium", 'kid':true, 'competitive':false},    
    '24':  { 'name': "Pictureka", 'maxplayers': 7,'minplayers': 4, 'time': "medium", 'kid':true, 'competitive':true},    
    '25':  { 'name': "Power Grid", 'maxplayers': 6,'minplayers': 4, 'time': "long", 'kid':false, 'competitive':true},    
    '26':  { 'name': "Risk", 'maxplayers': 5,'minplayers': 4, 'time': "long", 'kid':false, 'competitive':true},    
    '27':  { 'name': "Saboteur", 'maxplayers': 10,'minplayers': 5, 'time': "medium", 'kid':true, 'competitive':true},    
    '28':  { 'name': "Scrabble", 'maxplayers': 4,'minplayers': 2, 'time': "medium", 'kid':false, 'competitive':true},    
    '29':  { 'name': "Sequence", 'maxplayers': 12,'minplayers': 3, 'time': "short", 'kid':true, 'competitive':true},    
    '30':  { 'name': "Settlers of Catan", 'maxplayers': 4,'minplayers': 3, 'time': "medium", 'kid':true, 'competitive':true},    
    '31':  { 'name': "Spot it!", 'maxplayers': 6,'minplayers': 4, 'time': "short", 'kid':true, 'competitive':true},    
    '32':  { 'name': "Terraforming Mars", 'maxplayers': 5,'minplayers': 3, 'time': "long", 'kid':false, 'competitive':true},    
    '33':  { 'name': "The Digital Game", 'maxplayers': 4,'minplayers': 2, 'time': "short", 'kid':true, 'competitive':true},    
    '34':  { 'name': "The Grizzled", 'maxplayers': 5,'minplayers': 3, 'time': "short", 'kid':false, 'competitive':false},    
    '35':  { 'name': "Ticket to Ride", 'maxplayers': 5,'minplayers': 4, 'time': "medium", 'kid':true, 'competitive':true},    
    '36':  { 'name': "Twister", 'maxplayers': 4,'minplayers': 4, 'time': "short", 'kid':true, 'competitive':true},    
    '37':  { 'name': "Uno Flip", 'maxplayers': 10,'minplayers': 3, 'time': "short", 'kid':true, 'competitive':true},    
    '38':  { 'name': "Uno Stack", 'maxplayers': 10,'minplayers': 2, 'time': "short", 'kid':true, 'competitive':true},    
    '39':  { 'name': "Unstable Unicorn", 'maxplayers': 8,'minplayers': 4, 'time': "medium", 'kid':false, 'competitive':true},    
    '40':  { 'name': "Werewolf", 'maxplayers': 75,'minplayers': 7, 'time': "medium", 'kid':false, 'competitive':true},    
    '41':  { 'name': "Duel", 'maxplayers': 2,'minplayers': 2, 'time': "medium", 'kid':false, 'competitive':true},    
};

'use strict';

var inputField = document.querySelector('.chosen-value');
var dropdown = document.querySelector('.value-list');
var dropdownArray = [].concat(document.querySelectorAll('li'));
var dropdownItems = dropdownArray[0];
// dropdown.classList.add('open');
inputField.focus(); // Demo purposes only

var valueArray = [];
dropdownItems.forEach(function (item) {
  valueArray.push(item.textContent);
});

var closeDropdown = function closeDropdown() {
  dropdown.classList.remove('open');
};

inputField.addEventListener('input', function () {
  dropdown.classList.add('open');
  var inputValue = inputField.value.toLowerCase();
//   var valueSubstring = undefined;
  if (inputValue.length > 0) {
    for (var j = 0; j < valueArray.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownItems[j].classList.add('closed');
      } else {
        dropdownItems[j].classList.remove('closed');
      }
    }
  } else {
    for (var i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].classList.remove('closed');
    }
  }
});

dropdownItems.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    inputField.value = item.textContent;
    dropdownItems.forEach(function (dropdown) {
      dropdown.classList.add('closed');
    });
  });
});

inputField.addEventListener('focus', function () {
  inputField.placeholder = 'Type a number';
  dropdown.classList.add('open');
  dropdownItems.forEach(function (dropdown) {
    dropdown.classList.remove('closed');
  });
});

inputField.addEventListener('blur', function () {
  inputField.placeholder = 'How many players?';
  dropdown.classList.remove('open');
});

document.addEventListener('click', function (evt) {
  var isDropdown = dropdown.contains(evt.target);
  var isInput = inputField.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown.classList.remove('open');
    var playerInputValue = Number(inputField.value[0]);
    answers[1] = playerInputValue;
    console.log(playerInputValue);
  }
});

kidGames.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[3] = true;
    console.log(answers);
    buttonOn2(adultGames,this);
    console.log("showkidGames");
    
});

adultGames.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers.pop();
    console.log(answers);
    buttonOn2(kidGames,this);
    console.log("showadultGames");
});

allPick.addEventListener("click", function(){
    this.classList.add("buttonClick");
    search();
    console.log("showallGames");  
});

short.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[0] = "short";
    console.log(answers);
    buttonOn3(medium,long,this);
    console.log("30mins/less");
});

medium.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[0] = "medium";
    console.log(answers);
    buttonOn3(short,long,this);
    console.log("1hour/less");
});

long.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[0] = "long";
    console.log(answers);
    buttonOn3(medium,short,this);
    console.log("1+ hours");
});

competitive.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[2] = true;
    console.log(answers);
    buttonOn2(coop,this);
    console.log("competitive");
});

coop.addEventListener("click", function(){
    this.classList.add("buttonClick");
    answers[2] = false;
    console.log(answers);
    buttonOn2(competitive,this);
    console.log("coop");
});

for (var item in games) {
if (games.hasOwnProperty(item)) {
    arr.push(games[item])
}
}

function searchKids(t,m,c,k) {
    var price = arr.filter(function(item) { return item.time == t && item.maxplayers == m && item.minplayers <= m && item.kid == k && item.competitive == c; });
    chosen = Object.values(price);
    let result = chosen.map(a => a.name);
    spinTheWheel(result);
    if (result.length >0) {
        pickedCuisine.textContent = winner;
        console.log("there are results")
    }
    else {
        pickedCuisine.textContent = "No suitable game, please pick other options";
        console.log("there are no results")
    };
    console.log(result);
    console.log(price);
    result = [];
}

function searchAll(t,m,c) {
    var price = arr.filter(function(item) { return item.time == t && item.maxplayers >= m && item.minplayers <= m && item.competitive == c; });
    chosen = Object.values(price);
    let result = chosen.map(a => a.name);
    spinTheWheel(result);
    if (result.length >0) {
        pickedCuisine.textContent = winner;
        console.log("there are results")
    }
    else {
        pickedCuisine.textContent = "No suitable game, please pick other options";
        console.log("there are no results")
    };
    console.log(result);
    console.log(price);
    result = [];
}

function spinTheWheel(x){
    var result = Math.floor(Math.random() * x.length);
        winner = x[result];
        console.log(result);
        return winner;
}

function buttonOn2(y,z){
    z.classList.add("buttonClick");
    if (z.classList == "buttonClick") {
        y.classList.remove("buttonClick");        
    }
}
function buttonOn3(x,y,z){
    z.classList.add("buttonClick");
    if (z.classList == "buttonClick") {
        x.classList.remove("buttonClick");        
        y.classList.remove("buttonClick");        
    }
}

function search() {
    t= answers[0];
    m= answers[1];
    c= answers[2];
    k= answers[3];
    if (answers.length==4) {
        searchKids(t,m,c,k);
}
    else{
        searchAll(t,m,c);
}
}

reset.addEventListener("click", function(){
    allButtons.forEach(b => {
        console.log(b);
        b.classList.remove("buttonClick");
    });
});

