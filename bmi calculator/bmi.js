const express=require("express")
const bodyparser=require("body-parser")

const app=express()
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
})
app.post("/", function(req,res){
    var ht=parseFloat(req.body.h);
    var wt=parseFloat(req.body.w);
    var result= (wt/(ht*ht));
    res.send("bmi is"+result);
})

app.listen(3000,function(){
    console.log("server is on port 3000")
})