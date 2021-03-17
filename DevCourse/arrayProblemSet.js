// printReverse(array);</li>
// isUniform(array);  === boolean</li>
// sumArray(array);</li>
// max(array);</li>


function printReverse(input) {
    var list = [1,2,3,4];
    var listLength = []
    for(listLength<=input.length; listLength>=0; listLength--){
        console.log(input[listLength]);    
    }
}
printReverse(["a","b","c","d"]);


function isUniform(arr){
    var bench = arr[0];
    console.log(bench);
    for(var i = 1; i<arr.length; i++){
        if (arr[i] !== bench) {
            return false;
        }
    }
    return true;
}
isUniform([1,1,2,1])

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(i){
        total+=i;
    });
    return total;
}

function max(arr) {
   var max = arr[0];
    for(var i = 1; i<arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// function myForEach(arr, func) {
//     for (i = 0; i < arr.length; i++) {
//         func(arr[i]);       
//     }
// }
// myForEach(arr,function(x) {
//     console.log(x)
// });

// Array.prototype.myForEach = function(func) {
//     for (i = 0; i < this.length; i++) {
//         func(this[i]);
//     }
// }

var someObj = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"},

    ],
    color: "baby blue",
    isEvil: true
};

// movieDB
// title
// rating
// haswatched
// Loop: have/not watched title + ratings

var movieDB = [
    {
    title: "In Bruges",
    rating: "5 stars",
    seen: true
    },
    {
    title: "Frozen",
    rating: "4.5 stars",
    seen: false
    },
    {
    title: "Mad Max Fury Road",
    rating: "5 stars",
    seen: true
    },
    {
    title: "Les Miserables",
    rating: "3.5 stars",
    seen: false
    },
]

function list(){
    for (i = 0; i < movieDB.length; i++) {
        if (movieDB[i].seen) {
            console.log("You have watched " 
                        + movieDB[i].title 
                        + "- " + movieDB[i].rating)
        }
        else {
            console.log("You have not seen " 
                        + movieDB[i].title + "- " 
                        + movieDB[i].rating)$
        }
    }
}
list()

function list(m){
    var rslt = "You have ";
    if (m.seen) {
        rslt += "watched ";
    }
    else {
        rslt += "not seen ";
    }
    rslt += "\"" + m.title + "\" - ";
    rslt += m.rating; 
    return rslt;
}
movieDB.forEach(function(m){
    console.log(list(m));
})

