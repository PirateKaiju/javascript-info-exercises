"use strict"

//let num1 = prompt("Number");
//let num2 = prompt("Number");

//alert(parseInt(num1) + parseInt(num2));



//alert( ((6.35)*10).toFixed(0) / 10 );

/*function readNumber(){

    let readNumber = " aaa ";
    while(!(isFinite(readNumber))){
        readNumber = prompt("Numero: ");

    }

    return(readNumber);





}

let number = readNumber();*/


function random(inicio, fim){

    return((Math.random() * (fim - inicio)) + inicio)



}

alert(random(1, 10))

function randomInteger(inicio, fim){

    return(Math.ceil((Math.random() * (fim - inicio)) + inicio));

}

alert(randomInteger(1, 10))