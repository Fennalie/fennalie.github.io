var count=-10
var count1=10
console.log("all numbers between -10 and 19");
while(count<20){
    console.log(count);
    count++;
}
for(var i = 0; i<20; i++){
    console.log(i)
}
console.log ("all even numbers between 10 and 40");
while(count1<41){
    if(count1 % 2 == 0){
        console.log(count1);
    }
    count1++;
}
for(var i = 10; i<41; i++){
    if(i%2==0){
        console.log(i)
    }
}

console.log("all odd numbers between 300 and 333");
var count2=300
while(count2<334){
    if(count2 % 2 != 0){
        console.log(count2);
    }
    count2++;
}

console.log ("all numbers divisible by 5 and 3 between 5 and 50");
var count3=5
while(count3<51){
    if(count3 % 3 == 0 && count3 %5 ==0){
        console.log(count3);
    }
    count3++;
}  

// function isEven(n){
//     if(n%2==0){
//         return "True";
//     }
//     else{
//         return "False";
//     }
// }
function isEven(n){
    return n%2===0;
}

function factorial(n){
    var result = 1;
    for(var i=1; i<=n; i++){
        result*=i;
    }
    return result;
}

function kebabToSnake(s){
    var rlt = s.replace(/-/g, "_");
    return rlt;
}