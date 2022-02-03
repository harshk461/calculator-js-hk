function rst(){
    var Num=Number(eval(document.getElementById('result').value))
    if(isNaN(Num)==true){
        document.getElementById('result').value='';
    }
    else{
        document.getElementById('result').value=Num;
    }
}

function Clear(){
    var Num=document.getElementById('result').value;
    var NewNum=Num.slice(0,Num.length-1)
    document.getElementById('result').value=NewNum;   
}
