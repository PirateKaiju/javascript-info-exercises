"use strict"
let ask = function (question, yes, no)  {
    if(confirm(question)){
        yes();
    }else{
        no();
    }
};


ask("Concorda?", () => alert("Sim, concordo"), () => alert("Nao vai dar nao"));