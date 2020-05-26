"use strict"
let object = {
    name : "John",
    surname : "Smith",
};

console.log(object.name);

object.name = "Pete"

console.log(object.name);

delete object.name

console.log(object.name);

/////////////////////////////////

function isEmpty(obj){
    let count = 0;
    for(let prop in obj){
        count++;
    }
    if(count){
        return false;
    }else{
        return true;
    }
}

let vazio = {};

console.log(isEmpty(object));
console.log(isEmpty(vazio));

//////////////////////////////////
function sumobj(object){
    let count = 0;
    for(let prop in object){
        count += object[prop];//Iterar sobre os nomes das propriedades em si

    }
    return count;
}

//////////////////////////////////
function multiplyObj(object){
    for(let prop in object){
        if(object[prop] === (+object[prop])){
            object[prop] *= 7;
        }
    }
}

let ttt = {
    num : 1,
    notnum : "word",
    othernum : 2,
};

multiplyObj(ttt);

console.log(ttt);