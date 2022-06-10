var x = new String;

function aggiungi(_carattere){
    if (_carattere == "apri"){
        x+='(';
    }
    else if (_carattere == "chiudi"){
        x+=')';
    }
    else{
    x+=_carattere;}
    stampa(x);
}

function calcola(){
    stampa(eval(x));
    x="";
}

function stampa(x){
        document.getElementById("addendo").innerHTML = x;
}
 
function smembra(){
    var y = new String;
    y =x.replace('+', "somma");
    alert(y);
};