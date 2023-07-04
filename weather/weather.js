const express=require("express")
const app=express()
const https=require("https")
const bodyparser=require("body-parser")

app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res){
   res.sendFile(__dirname+"/weather.html")
    
})
app.post("/",function(req,res){
    // console.log(req.body.cityName);
    const query=req.body.cityName;
    // const query="london";
    const apikey="69e984270a63d3b506198996620124c6";
    const unit="metric";
    url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            console.log(JSON.parse(data));
            const saumya= {
                name:"saumya",
                branch:"CSE",
                course:"btech" 
            }
            console.log(JSON.stringify(saumya))
            const weatherdata=JSON.parse(data)
            res.write("<p>the weather in "+query+" is "+weatherdata.weather[0].description+"<p>")
            const temperature= weatherdata.main.temp
            res.write("<h1>the temperature in "+ query +" is "+temperature +" degree celcius.</h1>")
            const icon=weatherdata.weather[0].icon
            const imageurl="https://openweathermap.org/img/wn/"+ icon +"@2x.png"
            res.write("<img src= "+imageurl+">")
            res.send();
        })
    })
    
})


app.listen(3000,function(){
    console.log("server now is on port 3000")
})


// const query="london";
    // const apikey="69e984270a63d3b506198996620124c6";
    // const unit="metric";
    // url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;
    // https.get(url,function(response){
    //     console.log(response.statusCode);
    //     response.on("data",function(data){
    //         console.log(JSON.parse(data));
    //         const saumya= {
    //             name:"saumya",
    //             branch:"CSE",
    //             course:"btech" 
    //         }
    //         console.log(JSON.stringify(saumya))
    //         const weatherdata=JSON.parse(data)
    //         res.write("<p>the weather in london is "+weatherdata.weather[0].description+"<p>")
    //         const temperature= weatherdata.main.temp
    //         res.write("<h1>the temperature in london is "+temperature +" degree celcius.</h1>")
    //         const icon=weatherdata.weather[0].icon
    //         const imageurl="https://openweathermap.org/img/wn/"+ icon +"@2x.png"
    //         res.write("<img src= "+imageurl+">")
    //         res.send();
    //     })
    // })