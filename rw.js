const fs=require("fs")
text=fs.readFileSync("node.txt","utf-8")
console.log("hello started node js")
console.log(text)
text=text.replace("hello","mine")
fs.writeFileSync("rohan.txt",text)