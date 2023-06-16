function sq(num){
	let text=num.toString();
    let str='';
    for (let i=0; i<text.length;i++){
        str=str+text[i]*text[i]
    }
    console.log(Number(str))
}
sq(321)