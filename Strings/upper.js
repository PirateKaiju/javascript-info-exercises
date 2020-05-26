"use strict"

function ucFirst(str){
    str = str[0].toUpperCase() + str.slice(1);
    return(str);


}

alert(ucFirst("teste"));

function checkspam(str){

    let tempStr = str.toLowerCase();

    if(tempStr.includes("viagra") || tempStr.includes("xxx")){
        return true;
    }

    return false;
}

alert(checkspam("AAAAA xXx b"));
alert(checkspam("AAAAA ccxxxc b"));
alert(checkspam("AAAAA b"));