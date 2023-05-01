function greet(name,gt="greetings from javascropt "){
    console.log(gt+name)
    console.log(name+" is a good boy")
}
function sum(a,b,c){
    let d=a+b+c;
    console.log("function is returned do check") //this line only works if putten before return statement 
    return d; // return statement is the end of function
}
let a="harry";
let b="shubham";
let c="anmol";
let d="vishal";
g="hello"
console.log(sum(1,2,3));
greet(a,g)
greet(b,g)
greet(c)
greet(d,g)