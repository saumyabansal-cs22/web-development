//jshint esversion:6
const ex = require("express");
const app= ex();

app.get("/contact",function(request,response){
    // console.log(request)
    response.send("<h1>hello there!</h1>");
})
app.get("/about",function(request,response){
    // console.log(request)
    response.send("<p> hello my name is saumya bansal. i am a passionate front-ent web developer. i am on my way to learn new things.");
})
app.get("/",function(request,response){
    console.log("home page")
    
})

app.listen(3000,function(){ 
    console.log("server started on port 3000")
})