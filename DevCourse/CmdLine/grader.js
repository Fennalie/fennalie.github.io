var scores = [90,98,89,100,100,86,94]
var scores2 = [40,65,77,82,80,54,73,63,95,49]

function average(arr) {
    var total = 0
    arr.forEach(function(score) {
        total += score;
    });
    var avg = total / arr.length
    return Math.round(avg);
}

console.log("Score1 Average", average(scores));
console.log("Score2 Average", average(scores2));