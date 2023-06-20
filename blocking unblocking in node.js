const fs= require("fs") 
fs.readFile("node.txt","utf-8",(err,data)=>{
    console.log(data)
})
console.log("hello this is statement 2")
// fs.writeFile("node.txt","how are you now")