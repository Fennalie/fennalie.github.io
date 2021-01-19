var express = require("express");
var app = express();

// "/" == Hi there
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" == Goodbye
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});
// "/dog" == MEOW
app.get("/dog", function(req, res){
    console.log("requested /dog")
    res.send("MEOW!");
});
// :x will look for that variable's db name
app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    console.log(req.params);
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});
app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    console.log(req.params);
    res.send("SUBR! - comments - id - title");
});
// ERROR msg 
app.get("*", function(req, res){
    console.log("**")
    res.send("You are a star!");
});

// Tell Express to listen for requests
app.listen(3000, function(){
    console.log('Server listening on p3000')
});