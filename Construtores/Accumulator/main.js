"use strict"

function Accumulator(startingValue){

    this.value = startingValue;

    this.read = function(){
        this.value += +prompt();
    };
}

let acc = new Accumulator(1);
acc.read();
alert(acc.value);
acc.read();
alert(acc.value);