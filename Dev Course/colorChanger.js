
var btn = document.querySelector("button")
// var isPurple = false;

// btn.addEventListener("click", function(){
//     // Toggle Logic
//     if(isPurple){
//         document.body.style.background = "white";  
//         isPurple = false;      
//     }
//     else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
// });

// btn.addEventListener("click", function(){
//     // Toggle Logic
//     if(isPurple){
//         document.body.style.background = "white";  
//     }
//     else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// });

btn.addEventListener("click", function(){    
    document.body.classList.toggle("purple");     
});
