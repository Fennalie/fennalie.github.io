//Method perpetual swag
$("ul").on("click", "li", function(){
    //on(click) works on existing element when code is first ran. 
    //Hence listener is added to 'ul' which is a permanent fixture
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
    //Click on X to delete Todo
    //DOM tree manipulation ---:
    //grabbing parent element
    //using callback fn to remove parent element after first fn is triggered
    //stop event from bubbling up DOM tree
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){     //if key press = enter
        var todoText = $(this).val();
        //empty value field for next input
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus-circle").click(function(){
    $("input[type='text'").fadeToggle();
});
// Checkoff Todos by clicking
//Method long

// $("li").click(function(){
//     //if function for toggling li
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     else{
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
// });

//Method swag
// $("li").click(function(){
//     $(this).toggleClass("completed");
// })
