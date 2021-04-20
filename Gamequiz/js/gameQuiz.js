var kidGames = document.getElementById("kidGames")
var adultGames = document.getElementById("adultGames")
var allPick = document.getElementById("allPick")
var twoP = document.getElementById("twoP")
var threeP = document.getElementById("threeP")
var fourP = document.getElementById("fourP")
var fiveP = document.getElementById("fiveP")
var sixP = document.getElementById("sixP")
var sevenP = document.getElementById("sevenP")
var eightP = document.getElementById("eightP")
var short = document.getElementById("short")
var medium = document.getElementById("medium")
var long = document.getElementById("long")
var competitive = document.getElementById("competitive")
var coop = document.getElementById("coop")
var reset = document.getElementById("reset")
var test = document.getElementById("pickButton")
var pickedCuisine = document.querySelector("#pickedCuisine")
var allPlayersButtons = document.getElementsByClassName("allPlayersButtons")
var allButtons = document.querySelectorAll("button")
var chosen = [];
var answers = [];
var result = [];
var searchResults = [];
var arr = [];
var winner = [];
var playerInputValue = [];
var t = answers[0];
var m = answers[1];
var c = answers[2];
var k = answers[3];
var games = {
  '1': { 'name': "Aquarius", 'maxplayers': 5, 'minplayers': 3, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Aquarius.html"},
  '2': { 'name': "Avalon", 'maxplayers': 10, 'minplayers': 6, 'time': 1, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Avalon.html" },
  '3': { 'name': "Azul", 'maxplayers': 4, 'minplayers': 2, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Azul.html"},
  '4': { 'name': "Bananagrams", 'maxplayers': 8, 'minplayers': 4, 'time': 3, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Bananagrams.html" },
  '5': { 'name': "Bang", 'maxplayers': 8, 'minplayers': 3, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Bang.html"},
  '6': { 'name': "Battle ships", 'maxplayers': 2, 'minplayers': 2, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Battleships.html" },
  '7': { 'name': "Boggle", 'maxplayers': 10, 'minplayers': 3, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Boggle.html" },
  '8': { 'name': "Carcassonne", 'maxplayers': 5, 'minplayers': 2, 'time': 2, 'kid': true, 'competitive': true  , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Carcassonne.html"},
  '9': { 'name': "Century:Eastern Wonders", 'maxplayers': 4, 'minplayers': 4, 'time': 2, 'kid': false, 'competitive': false , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/CenturyEW.html"},
  '10': { 'name': "Chess", 'maxplayers': 2, 'minplayers': 2, 'time': 3, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Chess.html"},
  '11': { 'name': "China Town", 'maxplayers': 5, 'minplayers': 3, 'time': 2, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/ChinaTown.html"},
  '12': { 'name': "Codenames", 'maxplayers': 8, 'minplayers': 4, 'time': 1, 'kid': true, 'competitive': false , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Codenames.html"},
  '13': { 'name': "Codenames: Pictures", 'maxplayers': 8, 'minplayers': 2, 'time': 2, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/CodenamesPictures.html"},
  '14': { 'name': "Coup", 'maxplayers': 6, 'minplayers': 5, 'time': 1, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Coup.html"},
  '15': { 'name': "Deep sea adventures", 'maxplayers': 6, 'minplayers': 4, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/DeepSeaAdventures.html"},
  '16': { 'name': "Dixit", 'maxplayers': 6, 'minplayers': 3, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Dixit.html"},
  '17': { 'name': "Dragonwood", 'maxplayers': 4, 'minplayers': 3, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Dragonwood.html"},
  '18': { 'name': "Duel", 'maxplayers': 2, 'minplayers': 2, 'time': 3, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Duel.html"},
  '19': { 'name': "Dungeon Mayhem", 'maxplayers': 4, 'minplayers': 4, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Dungeon Mayhem.html"},
  '20': { 'name': "F*$# the Game", 'maxplayers': 8, 'minplayers': 3, 'time': 1, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/FTheGame.html"},
  '21': { 'name': "Farkle", 'maxplayers': 10, 'minplayers': 2, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Farkle.html"},
  '22': { 'name': "Game of Life", 'maxplayers': 6, 'minplayers': 4, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/GameofLife.html"},
  '23': { 'name': "Guillotine", 'maxplayers': 5, 'minplayers': 4, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Guillotine.html"},
  '24': { 'name': "Hanabi", 'maxplayers': 5, 'minplayers': 4, 'time': 1, 'kid': true, 'competitive': false , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Hanabi.html"},
  '25': { 'name': "I would fight the dragon", 'maxplayers': 8, 'minplayers': 5, 'time': 2, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/IDFTD.html"},
  '26': { 'name': "King of Tokyo", 'maxplayers': 6, 'minplayers': 2, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/KingofTokyo.html"},
  '27': { 'name': "Llamas Unleashed", 'maxplayers': 8, 'minplayers': 4, 'time': 2, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/LlamasUnleashed.html"},
  '28': { 'name': "Monopoly", 'maxplayers': 8, 'minplayers': 3, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Monopoly.html"},
  '29': { 'name': "Monopoly Deal", 'maxplayers': 5, 'minplayers': 4, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/MonopolyDeal.html"},
  '30': { 'name': "Munchkin Deluxe", 'maxplayers': 6, 'minplayers': 3, 'time': 2, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Munchkin.html"},
  '31': { 'name': "Onitama", 'maxplayers': 2, 'minplayers': 2, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Onitama.html"},
  '32': { 'name': "Pandemic", 'maxplayers': 4, 'minplayers': 2, 'time': 3, 'kid': true, 'competitive': false , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Pandemic.html"},
  '33': { 'name': "Patchwork", 'maxplayers': 2, 'minplayers': 2, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Patchwork.html"},
  '34': { 'name': "Pictionary", 'maxplayers': 8, 'minplayers': 6, 'time': 2, 'kid': true, 'competitive': false , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Pictionary.html"},
  '35': { 'name': "Pictionary Air", 'maxplayers': 4, 'minplayers': 2, 'time': 1, 'kid': true, 'competitive': false , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/PictionaryAir.html"},
  '36': { 'name': "Pictureka", 'maxplayers': 7, 'minplayers': 4, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Pictureka.html"},
  '37': { 'name': "Power Grid", 'maxplayers': 6, 'minplayers': 4, 'time': 3, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/PowerGrid.html"},
  '38': { 'name': "Risk", 'maxplayers': 5, 'minplayers': 4, 'time': 3, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Risk.html"},
  '39': { 'name': "Saboteur", 'maxplayers': 10, 'minplayers': 5, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Saboteur.html"},
  '40': { 'name': "Scrabble", 'maxplayers': 4, 'minplayers': 2, 'time': 3, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Scrabble.html"},
  '41': { 'name': "Secret Hitler", 'maxplayers': 10, 'minplayers': 5, 'time': 2, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/SecretHitler.html"},
  '42': { 'name': "Sequence", 'maxplayers': 12, 'minplayers': 3, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Sequence.html"},
  '43': { 'name': "Settlers of Catan", 'maxplayers': 4, 'minplayers': 3, 'time': 3, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Catan.html"},
  '44': { 'name': "Sorry!", 'maxplayers': 4, 'minplayers': 2, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Sorry.html"},
  '45': { 'name': "Splendor", 'maxplayers': 4, 'minplayers': 2, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Splendor.html"},
  '46': { 'name': "Spot it!", 'maxplayers': 6, 'minplayers': 4, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Spotit.html"},
  '47': { 'name': "Star Fluxx", 'maxplayers': 6, 'minplayers': 2, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Starfluxx.html"},
  '48': { 'name': "Taco Cat Goat Cheese Pizza", 'maxplayers': 8, 'minplayers': 2, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/TCGCP.html"},
  '49': { 'name': "Terraforming Mars", 'maxplayers': 5, 'minplayers': 3, 'time': 3, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/TerraformingMars.html"},
  '50': { 'name': "The Digital Game", 'maxplayers': 4, 'minplayers': 2, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/TheDigitalGame.html"},
  '51': { 'name': "The Grizzled", 'maxplayers': 5, 'minplayers': 3, 'time': 1, 'kid': false, 'competitive': false , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/TheGrizzled.html"},
  '52': { 'name': "The Mind", 'maxplayers': 4, 'minplayers': 2, 'time': 1, 'kid': true, 'competitive': false , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/TheMind.html"},
  '53': { 'name': "Ticket to Ride", 'maxplayers': 5, 'minplayers': 4, 'time': 2, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/TickettoRide.html"},
  '54': { 'name': "Twister", 'maxplayers': 4, 'minplayers': 4, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Twister.html"},
  '55': { 'name': "Uno Flip", 'maxplayers': 10, 'minplayers': 3, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/UnoFlip.html"},
  '56': { 'name': "Uno Stacko", 'maxplayers': 10, 'minplayers': 2, 'time': 1, 'kid': true, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/UnoStack.html"},
  '57': { 'name': "Unstable Unicorns", 'maxplayers': 8, 'minplayers': 4, 'time': 2, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/UnstableUnicorns.html"},
  '58': { 'name': "Werewolf", 'maxplayers': 75, 'minplayers': 7, 'time': 2, 'kid': false, 'competitive': true , 'href': "https://fennalie.github.io/Gamequiz/GameGuides/Werewolf.html"},
};

// 'use strict';

// var inputField = document.querySelector('.chosen-value');
// var dropdown = document.querySelector('.value-list');
// var dropdownArray = [].concat(document.querySelectorAll('li'));
// var dropdownItems = dropdownArray[0];
// // dropdown.classList.add('open');
// inputField.focus(); // Demo purposes only

// var valueArray = [];
// dropdownItems.forEach(function (item) {
//   valueArray.push(item.textContent);
// });

// var closeDropdown = function closeDropdown() {
//   dropdown.classList.remove('open');
// };

// inputField.addEventListener('input', function () {
//   dropdown.classList.add('open');
//   var inputValue = inputField.value.toLowerCase();
// //   var valueSubstring = undefined;
//   if (inputValue.length > 0) {
//     for (var j = 0; j < valueArray.length; j++) {
//       if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
//         dropdownItems[j].classList.add('closed');
//       } else {
//         dropdownItems[j].classList.remove('closed');
//       }
//     }
//   } else {
//     for (var i = 0; i < dropdownItems.length; i++) {
//       dropdownItems[i].classList.remove('closed');
//     }
//   }
// });

// dropdownItems.forEach(function (item) {
//   item.addEventListener('click', function (evt) {
//     inputField.value = item.textContent;
//     dropdownItems.forEach(function (dropdown) {
//       dropdown.classList.add('closed');
//     });
//   });
// });

// inputField.addEventListener('focus', function () {
//   inputField.placeholder = 'Type a number';
//   dropdown.classList.add('open');
//   dropdownItems.forEach(function (dropdown) {
//     dropdown.classList.remove('closed');
//   });
// });

// inputField.addEventListener('blur', function () {
//   inputField.placeholder = 'How many players?';
//   dropdown.classList.remove('open');
// });

// document.addEventListener('click', function (evt) {
//   var isDropdown = dropdown.contains(evt.target);
//   var isInput = inputField.contains(evt.target);
//   if (!isDropdown && !isInput) {
//     dropdown.classList.remove('open');
//     var playerInputValue = Number(inputField.value[0]);
//     answers[1] = playerInputValue;
//     console.log(playerInputValue);
//   }
// });

kidGames.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[3] = true;
  updateAnswers();
  console.log(answers);
  buttonOn2(adultGames, this);
  search();
  console.log("kid");

});

adultGames.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[3] = false;
  updateAnswers();
  console.log(answers);
  buttonOn2(kidGames, this);
  search();
  console.log("all");
});

// allPick.addEventListener("click", function () {
//   this.classList.add("buttonClick");
//   search();
//   console.log("showallGames");
// });

twoP.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[1] = 2;
  updateAnswers();
  console.log(answers, m);
  buttonOnMany(this);
  console.log("2 ppl");
  search();
});
threeP.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[1] = 3;
  updateAnswers();
  console.log(answers, m);
  buttonOnMany(this);
  console.log("3 ppl");
  search();
});
fourP.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[1] = 4;
  updateAnswers();
  console.log(answers, m);
  buttonOnMany(this);
  console.log("4 ppl");
  search();
});
fiveP.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[1] = 5;
  updateAnswers();
  console.log(answers, m);
  buttonOnMany(this);
  console.log("5 ppl");
  search();
});
sixP.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[1] = 6;
  updateAnswers();
  console.log(answers, m);
  buttonOnMany(this);
  console.log("6 ppl");
  search();
});
sevenP.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[1] = 7;
  updateAnswers();
  console.log(answers, m);
  buttonOnMany(this);
  console.log("7 ppl");
  search();
});
eightP.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[1] = 8;
  updateAnswers();
  console.log(answers, m);
  buttonOnMany(this);
  console.log("8+ ppl");
  search();
});
short.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[0] = 1;
  updateAnswers();
  console.log(answers);
  buttonOn3(medium, long, this);
  console.log("30mins/less");
  search();
});

medium.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[0] = 2;
  updateAnswers();
  console.log(answers);
  buttonOn3(short, long, this);
  console.log("1hour/less");
  search();
});

long.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[0] = 3;
  updateAnswers();
  console.log(answers);
  buttonOn3(medium, short, this);
  console.log("1+ hours");
  search();
});

competitive.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[2] = true;
  updateAnswers();
  console.log(answers);
  buttonOn2(coop, this);
  console.log("competitive");
  search();
});

coop.addEventListener("click", function () {
  this.classList.add("buttonClick");
  answers[2] = false;
  updateAnswers();
  console.log(answers);
  buttonOn2(competitive, this);
  console.log("coop");
  search();
});
// test.addEventListener("click", function () {
//   this.classList.add("buttonClick");
//   console.log(answers);
//   search();

// });

for (var item in games) {
  if (games.hasOwnProperty(item)) {
    arr.push(games[item])
  }
}

function searchKids() {
  console.log("kid is " + k);
  console.log("searching through all kid games");
  searchResults = chosen.filter(function (item) { return item.kid == k; });
  chosen = Object.values(searchResults);
  result = chosen.map(a => a.name);
  console.log("search by players results are: " + result.length);
  showResults();
}

function searchAll() {
  console.log("kid is " + k);
  console.log("searching for all games");
  searchResults = chosen.filter(function (item) { return item.name; });
  chosen = Object.values(searchResults);
  result = chosen.map(a => a.name);
  console.log("search all games results are: " + result.length);
  showResults();
}

function searchByPlayers() {
  console.log("player has value of:" + m);
  searchResults = chosen.filter(function (item) { return item.maxplayers >= m && item.minplayers <= m; });
  chosen = Object.values(searchResults);
  result = chosen.map(a => a.name);
  console.log("search by players results are: " + result);
  showResults();
}

function searchByTime() {
  console.log("time has value of:" + t);
  searchResults = chosen.filter(function (item) { return item.time <= t; });
  chosen = Object.values(searchResults);
  result = chosen.map(a => a.name);
  console.log("search by time results are: " + result);
  showResults();

}

function searchByModes() {
  console.log("mode has value of:" + c);
  searchResults = chosen.filter(function (item) { return item.competitive == c; });
  chosen = Object.values(searchResults);
  result = chosen.map(a => a.name);
  console.log("search by mode results are: " + result);
  showResults();
}

function showResults() {
  var resultDisplay = [];
  var resultLink = chosen.map(a => a.href);
for (var i = 0; i < resultLink.length; i++) {
    resultDisplay = resultDisplay + " <a href='" + resultLink[i] + "'>"+ result[i] + "</a>";
}

  // for (let i = 0; i < result.length; i++) {
  //   resultDisplay[i] = String(result[i]);
  // }
  // console.log("resultlink: " + resultLink);
  console.log("resultdisplay: " + resultDisplay);
  if (result.length > 0) {
    pickedCuisine.innerHTML = resultDisplay;
    console.log("there are results");
  }
  else {
    pickedCuisine.textContent = "No suitable game, please pick other options";
    console.log("there are no results")
  };
  console.log(chosen);
}

function spinTheWheel(x) {
  var result = Math.floor(Math.random() * x.length);
  winner = x[result];
  console.log(result);
  return winner;
}

function buttonOn2(y, z) {
  z.classList.add("buttonClick");
  if (z.classList == "buttonClick") {
    y.classList.remove("buttonClick");
  }
}
function buttonOn3(x, y, z) {
  z.classList.add("buttonClick");
  if (z.classList == "buttonClick") {
    x.classList.remove("buttonClick");
    y.classList.remove("buttonClick");
  }
}
function buttonOnMany(z) {
  for (let i = 0; i < allPlayersButtons.length; i++) {
    var x = allPlayersButtons[i];
    x.classList.remove("buttonClick");
  }
  z.classList.add("buttonClick");
}

// for every button selection, check answers keys validity and search using if. Duplicate games object into another object, return as x. repeat
// If too nested duplicate answers array and remove each key individually.
function search() {
  chosen = Object.values(arr);
  var a="=";
  var aaa=a.repeat(70);
  console.log("search function initiated, there are: " + chosen.length + " results");
  validK();
  validC();
  validM();
  validT();
  console.log("search function executed, there are: " + chosen.length + " results");
  console.log(aaa);
}
function validK() {
  if (k == false || k == null) {
    console.log("searchingAll()");
    searchAll();
    k = null;
  }
  else {
    console.log("searchingKids()");
    searchKids();
    k = null;
  }
  console.log("value of k " + k)
}
function validC() {
  if (c != null) {
    console.log("searchingByModes()");
    searchByModes();
    c = null;
  }
  else {
    c = null;
  }
  console.log("value of c " + c)
}
function validM() {
  if (m != null) {
    console.log("searchingByPlayers()");
    searchByPlayers();
    m = null;
  }
  else {
    m = null;
  }
  console.log("value of m " + m)
}
function validT() {
  if (t != null) {
    console.log("searchingByTime()");
    searchByTime();
    t = null;
  }
  else {
    t = null;
  }
  console.log("value of t " + t)
}

function updateAnswers() {
  t = answers[0]; m = answers[1]; c = answers[2]; k = answers[3];
}
reset.addEventListener("click", function () {
  answers = []
  allButtons.forEach(b => {
    console.log(b);
    b.classList.remove("buttonClick");
  });
});

